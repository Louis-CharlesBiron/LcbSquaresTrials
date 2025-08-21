class Square {
    static DEFAULT_BACKGROUND_COLOR = [42, 36, 45, 1]
    static DEFAULT_BORDER_COLOR = [62, 66, 75, 1]
    static DEFAULT_SQUARE_SIZE = 300
    static DEFAULT_SQUARE_MARGIN = 100

    constructor(pos, size, bgColor, borderColor) {
        this._obj = this.#createSquare(GameManager.instance.CVS, pos, size, bgColor, borderColor)
        GameManager.instance.CVS.add(this._obj)        
        this._objects = []
        this._collisions = GameManager.instance.player.addDefaultSquareCollision(this._obj)
    }

    #createSquare(CVS, pos, size, backgroundColor, borderColor) {
        size??=Square.DEFAULT_SQUARE_SIZE
        backgroundColor??=Square.DEFAULT_BACKGROUND_COLOR
        borderColor??=Square.DEFAULT_BORDER_COLOR

        const render = CVS.render, square = new FilledShape(backgroundColor, true, pos, [
            new Dot([-size, -size]),
            new Dot([size, -size]),
            new Dot([size, size]),
            new Dot([-size, size]),
        ], 0, null, null, null, null, ()=>{
            return {borderColor}
        }, obj=>{
            const res = obj.setupResults
            render.batchStroke(Render.getPositionsRect(obj.dots[0].pos, obj.dots[2].pos), render.profile1.update(res.borderColor, null, null, null, 4))
        }, null, true)
        return square
    }

    refreshCollisions() {
        const collisions = this._collisions, bounds = this._obj.getBounds()
        collisions[0].positions = [bounds[0], [bounds[1][0], bounds[0][1]]]
        collisions[1].positions = [[bounds[1][0], bounds[0][1]], bounds[1]]
        collisions[2].positions = [[bounds[0][0], bounds[1][1]], bounds[1]]
        collisions[3].positions = [bounds[0], [bounds[0][0], bounds[1][1]]]
    }

    scaleAt(scale) {
        this._obj.scaleAt(scale)
        this.refreshCollisions()
    }

    scaleTo(scale, time=1000, easing=Anim.easeInOutQuad) {
        const obj = this._obj, is = obj._scale, dsX = scale[0]-obj._scale[0], dsY = scale[1]-obj._scale[1], centerPos = obj.getCenter()

        return obj.playAnim(new Anim(prog=>{
            this.scaleAt([is[0]+dsX*prog, is[1]+dsY*prog], centerPos)
        }, time, easing))
    }

    moveAt(pos) {
        this._obj.moveAt(pos)
        this.refreshCollisions()
    }

    moveTo(pos, time=1000, easing=Anim.easeInOutQuad) {
        const obj = this._obj, [ix, iy] = obj.pos_, [fx, fy] = obj.adjustPos(pos), dx = fx-ix, dy = fy-iy
        return obj.playAnim(new Anim((prog)=>{
            obj.x = ix+dx*prog
            obj.y = iy+dy*prog
            this.refreshCollisions()
        }, time, easing))
    }

    addObject(obj) {
        this._objects.push(obj)
        return obj
    }

    get id() {return this._obj.id}
    get obj() {return this._obj}
    get collisions() {return this._collisions}

    set collisions(collisions) {this._collisions = collisions}
}