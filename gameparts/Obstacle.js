class Obstacle {
    static DEFAULT_COLOR = "grey"
    static DEFAULT_WIDTH = 50
    static DEFAULT_HEIGHT = 50
    static DEFAULT_NAME = "block"

    constructor(gameManager, pos, width, height, name, color) {
        this._obj = this.#createObj(pos, width, height, color)
        CVS.add(this._obj)
        this._name = name??Obstacle.DEFAULT_NAME
        this._collision = gameManager.player.addDefaultCollision(this._obj)
    }

    #createObj(pos, width, height, color) {
        color??=Obstacle.DEFAULT_COLOR
        width??=Obstacle.DEFAULT_WIDTH
        height??=Obstacle.DEFAULT_HEIGHT


        const w2 = width/2, h2 = height/2
        return new FilledShape(color, true, pos, [new Dot([-w2, -h2]),new Dot([w2, -h2]),new Dot([w2, h2]),new Dot([-w2, h2])], 0)
    }

    scaleAt(scale) {
        this._obj.scaleAt(scale)
    }

    scaleTo(scale, time=1000, easing=Anim.easeInOutQuad) {
        const obj = this._obj, is = obj._scale, dsX = scale[0]-obj._scale[0], dsY = scale[1]-obj._scale[1], centerPos = obj.getCenter()

        return obj.playAnim(new Anim(prog=>{
            this.scaleAt([is[0]+dsX*prog, is[1]+dsY*prog], centerPos)
        }, time, easing))
    }

    moveAt(pos) {
        this._obj.moveAt(pos)
    }

    moveTo(pos, time=1000, easing=Anim.easeInOutQuad) {
        const obj = this._obj, [ix, iy] = obj.pos_, [fx, fy] = obj.adjustPos(pos), dx = fx-ix, dy = fy-iy
        return obj.playAnim(new Anim((prog)=>{
            obj.x = ix+dx*prog
            obj.y = iy+dy*prog
        }, time, easing))
    }

    get id() {return this._obj.id}
    get name() {return this._name}
    get obj() {return this._obj}
    get collision() {return this._collision}

    set collision(collision) {this._collision = collision}
}