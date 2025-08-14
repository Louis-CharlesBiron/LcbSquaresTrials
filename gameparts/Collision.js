class Collision {
    static #ID_GIVER = 0
    static DEFAULT_COLLISION_NAME = "block"
    static DIRECTIONS = {TOP:1<<0, RIGHT:1<<1, BOTTOM:1<<2, LEFT:1<<3, TOP_LEFT:(1<<0)+(1<<3), TOP_RIGHT:(1<<0)+(1<<1), BOTTOM_LEFT:(1<<2)+(1<<3), BOTTOM_RIGHT:(1<<2)+(1<<3), ALL:(1<<4)-1}

    
    /**
     * Creates a collision area that detects when a pos intersects
     * @param {String?} name: the name of the collision
     * @param {_BaseObj | [[x1,y1], [x2,y2]]} positions: either a _BaseObj inheritor instance or a positions array defining the area
     * @param {Number | [paddingTop, paddingRight?, paddingBottom?, paddingLeft?] ?} padding: the padding applied to the area
     * @param {Function?} onCollisionCB: Function called each frame the pos is inside the area. (collisionDirection)=>{...}
     * @param {Function?} onCollisionEnterCB: Function called once each time a collision is detected. (collisionDirection)=>{...}
     * @param {Function?} onCollisionExitCB: Function called once each time a collision is ended. (collisionDirection)=>{...}
     * @param {boolean?} disableCornerDetection: If true, prevents 'collisionDirection' in collision callbacks to contain more than more direction when colliding with corners
     */
    constructor(name, positions, padding, onCollisionCB, onCollisionEnterCB, onCollisionExitCB, disableCornerDetection) {
        this._id = Collision.#ID_GIVER++
        this._name = name??Collision.DEFAULT_COLLISION_NAME
        this.positions = positions
        this.padding = padding??0
        this.onCollisionCB = onCollisionCB
        this.onCollisionEnterCB = onCollisionEnterCB
        this.onCollisionExitCB = onCollisionExitCB
        this._disableCornerDetection = disableCornerDetection??true

        this._hasCollision = false
        this._lastNotCollidingDirection = null
    }

    detect(pos, lastPos) {
        const top = Collision.DIRECTIONS.TOP, right = Collision.DIRECTIONS.RIGHT, bottom = Collision.DIRECTIONS.BOTTOM, left = Collision.DIRECTIONS.LEFT, all = Collision.DIRECTIONS.ALL,
        x = pos[0], y = pos[1], positions = this.getPositionsValue(), collisions = ((y>=positions[0][1])&&top)+((x<=positions[1][0])&&right)+((y<=positions[1][1])&&bottom)+((x>=positions[0][0])&&left)

        if (collisions==all) {
            if (this._onCollisionEnterCB && !this._hasCollision) this._onCollisionEnterCB(this._lastNotCollidingDirection, this)
            this._hasCollision = true
            if (this._onCollisionCB) this._onCollisionCB(this._lastNotCollidingDirection, this)
        } else {
            this._lastNotCollidingDirection = collisions^all
            if (this._disableCornerDetection) {
                if (this._lastNotCollidingDirection == top+right || this._lastNotCollidingDirection == top+left) this._lastNotCollidingDirection = top
                else if (this._lastNotCollidingDirection == bottom+right || this._lastNotCollidingDirection == bottom+left) this._lastNotCollidingDirection = bottom
            }
            if (this._onCollisionExitCB && this._hasCollision) this._onCollisionExitCB(this._lastNotCollidingDirection, this)
            this._hasCollision = false
        }
    }

    show(render) {
        const positions = this.getPositionsValue()
        render.batchStroke(Render.getPositionsRect(positions[0], positions[1]), [0, 50, 200, 1])
    }

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

    get name() {return this._name}
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