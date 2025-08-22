class Collision {
    static #ID_GIVER = 0
    static DEFAULT_COLLISION_NAME = "block"
    static DEFAULT_HITBOX_COLOR = [0, 50, 200, 1]
    static DEFAULT_INTERACTION_HITBOX_COLOR = [200, 200, 100, 1]
    static DEFAULT_END_HITBOX_COLOR = [255, 105, 180, 1]
    static DIRS = {TOP:1<<0, RIGHT:1<<1, BOTTOM:1<<2, LEFT:1<<3, TOP_LEFT:(1<<0)+(1<<3), TOP_RIGHT:(1<<0)+(1<<1), BOTTOM_LEFT:(1<<2)+(1<<3), BOTTOM_RIGHT:(1<<2)+(1<<3), ALL:(1<<4)-1}
    static DEFAULT_TYPES = {AREA_ENTER:0, END:1}
    static NON_SOLID_COLLISION_PREFIX = "$"

    /**
     * Creates a collision area that detects when a pos intersects
     * @param {String?} name: the name of the collision
     * @param {_BaseObj | [[x1,y1], [x2,y2]]} positions: either a _BaseObj inheritor instance or a positions array defining the area
     * @param {Number | [paddingTop, paddingRight?, paddingBottom?, paddingLeft?] ?} padding: the padding applied to the area
     * @param {Function?} onCollisionCB: Function called each frame the pos is inside the area. (collisionDirection, collision)=>{...}
     * @param {Function?} onCollisionEnterCB: Function called once each time a collision is detected. (collisionDirection, collision)=>{...}
     * @param {Function?} onCollisionExitCB: Function called once each time a collision is ended. (collisionDirection, collision)=>{...}
     * @param {boolean?} enableCornerDetection: If true, prevents 'collisionDirection' in collision callbacks to contain more than more direction when colliding with corners
     * @param {Color | String | [r,g,b,a]?} hitboxColor: the color of the hitbox
     */
    constructor(name, positions, padding, onCollisionCB, onCollisionEnterCB, onCollisionExitCB, enableCornerDetection, hitboxColor) {
        this._id = Collision.#ID_GIVER++
        this._name = name??Collision.DEFAULT_COLLISION_NAME
        this.positions = positions
        this.padding = padding??0
        this.onCollisionCB = onCollisionCB
        this.onCollisionEnterCB = onCollisionEnterCB
        this.onCollisionExitCB = onCollisionExitCB
        this._enableCornerDetection = enableCornerDetection??false
        this._hitboxColor = hitboxColor||Collision.DEFAULT_HITBOX_COLOR

        this._hasCollision = false
        this._lastDir = Collision.DIRS.TOP
    }

    /**
     * Detects whether there is a collision and calls the correct callbacks
     * @param {[x,y]} pos: the current pos
     * @param {[x,y]} lastPos: the last pos
     */
    detect(pos, lastPos) {
        const top = Collision.DIRS.TOP, right = Collision.DIRS.RIGHT, bottom = Collision.DIRS.BOTTOM, left = Collision.DIRS.LEFT, x = pos[0], y = pos[1], positions = this.getPositionsValue(), 
        topLeftPos = positions[0], bottomRightPos = positions[1], topRightPos = [bottomRightPos[0], topLeftPos[1]], bottomLeftPos = [topLeftPos[0], bottomRightPos[1]],
        topY = positions[0][1], leftX = positions[0][0], inside = y>=topY && x<=positions[1][0] && y<=positions[1][1] && x>=leftX, 
        collisions = (CDEUtils.hasLinearIntersection(pos, lastPos, topLeftPos, topRightPos)&&top)+
                     (CDEUtils.hasLinearIntersection(pos, lastPos, bottomRightPos, topRightPos)&&right)+
                     (CDEUtils.hasLinearIntersection(pos, lastPos, bottomRightPos, bottomLeftPos)&&bottom)+
                     (CDEUtils.hasLinearIntersection(pos, lastPos, topLeftPos, bottomLeftPos)&&left)

        let dir = collisions
        if (!collisions && inside) dir = this._lastDir

        if (collisions&top && collisions&bottom) dir = y>topY ? top : bottom
        if (collisions&left && collisions&right) dir = x>leftX ? left : right
        if (!this._enableCornerDetection) {
            if (dir == top+right || dir == top+left) dir = top
            else if (dir == bottom+right || dir == bottom+left) dir = bottom
        }

        if (dir) {
            if (this._onCollisionEnterCB && !this._hasCollision) this._onCollisionEnterCB(dir, this)
            this._hasCollision = true
            if (this._onCollisionCB) this._onCollisionCB(dir, this)
            this._lastDir = dir
        } else {
            if (this._onCollisionExitCB && this._hasCollision) this._onCollisionExitCB(this._lastDir, this)
            this._hasCollision = false
        }
    }

    /**
     * Visually shows the collision
     * @param {Render} render: a render instance
     */
    show(render) {
        const positions = this.getPositionsValue()
        render.batchStroke(Render.getPositionsRect(positions[0], positions[1]), this._hitboxColor)
    }

    /**
     * Returns the usable positions value
     * @param {_BaseObj | [[x1,y2], [x2,y2]]?} positions: the positions to get the value out of. Defaults to this positions  
     * @returns the positions value with padding
     */
    getPositionsValue(positions=this._positions) {
        const bounds = positions instanceof _BaseObj ? positions.getBounds() : positions 
        return this._padding ? this.#applyPadding(bounds) : bounds
    }

    #applyPadding(positions=this._positions) {
        const padding = this._padding
        positions = CDEUtils.unlinkPositions(positions)
        positions[0][0] -= padding[3]
        positions[0][1] -= padding[0]
        positions[1][0] += padding[1]
        positions[1][1] += padding[2]
        return positions
    }

    static createAreaEnter(positions, onCollisionEnterCB, onCollisionCB, onCollisionExitCB, padding, hitboxColor) {
        return GameManager.instance.player.addInteraction(new Collision(Collision.NON_SOLID_COLLISION_PREFIX+"areaEnter", positions, padding, onCollisionCB, onCollisionEnterCB, onCollisionExitCB, false, hitboxColor||Collision.DEFAULT_INTERACTION_HITBOX_COLOR))
    }

    /**
     * Creates an area that acts as the end of a square/room. 
     * @param {_BaseObj | [[x1,y1], [x2,y2]]} positions: either a _BaseObj inheritor instance or a positions array defining the area
     * @param {Function?} onCollisionEnterCB: Function called once each time a collision is detected. (collisionDirection, collision)=>{...}
     * @param {Number | [paddingTop, paddingRight?, paddingBottom?, paddingLeft?] ?} padding: the padding applied to the area
     * @param {Color | String | [r,g,b,a]?} hitboxColor: the color of the hitbox
     */
    static createEnd(positions, onCollisionEnterCB, padding, hitboxColor) {
        return GameManager.instance.player.addInteraction(new Collision(Collision.NON_SOLID_COLLISION_PREFIX+"end", positions, padding, null, onCollisionEnterCB, null, false, hitboxColor||Collision.DEFAULT_END_HITBOX_COLOR))
    }


    get name() {return this._name}
    get isSolid() {return this._name[0]!=Collision.NON_SOLID_COLLISION_PREFIX}
    get positions() {return this.getPositionsValue()}
    get positionsRaw() {return this._positions}
    get padding() {return this._padding}
    get onCollisionCB() {return this._onCollisionCB}
    get onCollisionEnterCB() {return this._onCollisionEnterCB}
    get onCollisionExitCB() {return this._onCollisionExitCB}
    get hasDynamicPositions() {return this._positions instanceof _BaseObj}

    set positions(positions) {this._positions = positions instanceof _BaseObj ? positions : CDEUtils.unlinkPositions(positions)}
    set padding(padding) {this._padding = typeof padding=="number" ? [padding, padding, padding, padding] : [padding[0],padding[1]??padding[0], padding[2]??padding[0], padding[3]??padding[1]]}
    set onCollisionCB(onCollisionCB) {this._onCollisionCB = CDEUtils.isFunction(onCollisionCB) ? onCollisionCB : null}
    set onCollisionEnterCB(onCollisionEnterCB) {this._onCollisionEnterCB = CDEUtils.isFunction(onCollisionEnterCB) ? onCollisionEnterCB : null}
    set onCollisionExitCB(onCollisionExitCB) {this._onCollisionExitCB = CDEUtils.isFunction(onCollisionExitCB) ? onCollisionExitCB : null}
}