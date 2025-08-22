class Spike {
    static DEFAULT_COLOR = "red"
    static DEFAULT_WIDTH = 30
    static DEFAULT_HEIGHT = 35
    static ROTATIONS = {TOP:180, RIGHT:270, BOTTOM:0, LEFT:90}
    static GET_DEFAULT_DEATH_COLLISION_CB = (spawnPos, time, delay)=>()=>GameManager.instance.player.die(spawnPos, time, delay)

    constructor(pos, rotation, collisionCB, height, width, color) {
        this._obj = GameManager.instance.CVS.add(this.#createObj(pos, rotation, height, width, color))
        this._collisionCB = collisionCB
        this._hasCollision = false
        GameManager.instance.player.addInteraction(this)
    }

    detect(pos) {
        if (this._obj.isWithinAccurate(pos)) {
            if (!this._hasCollision && CDEUtils.isFunction(this._collisionCB)) this._collisionCB(this)
            this._hasCollision = true
        } else if (this._hasCollision) this._hasCollision = false
    }

    #createObj(pos, rotation, height, width, color) {
        color??=Spike.DEFAULT_COLOR
        width??=Spike.DEFAULT_WIDTH
        height??=Spike.DEFAULT_HEIGHT
        height??=Spike.DEFAULT_HEIGHT
        return new FilledShape(color, true, pos, [new Dot([-width/2, 0]),new Dot([width/2, 0]),new Dot([0, height])], 0, null, null, null, null, obj=>obj.rotateAt(rotation??Spike.ROTATIONS.TOP))
    }
}