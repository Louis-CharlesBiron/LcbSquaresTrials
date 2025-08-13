class Collision {
    static #ID_GIVER = 0
    static DEFAULT_COLLISION_NAME = "block"
    static DIRECTIONS = {TOP:1<<0, RIGHT:1<<1, BOTTOM:1<<2, LEFT:1<<3}

    constructor(name, positions, padding, onCollisionCB, onCollisionEnterCB, onCollisionExitCB, disableCornerDetection) {
        this._id = Collision.#ID_GIVER++
        this._name = name??Collision.DEFAULT_COLLISION_NAME
        this._positions = positions
        this._padding = padding
        this._onCollisionCB = onCollisionCB
        this._onCollisionEnterCB = onCollisionEnterCB
        this._onCollisionExitCB = onCollisionExitCB
        this._disableCornerDetection = disableCornerDetection
        this._detectCB = this.updateDetectCB()
    }

    updateDetectCB(positions=this._positions, padding=this._padding, onCollisionCB=this._onCollisionCB, onCollisionEnterCB=this._onCollisionEnterCB, onCollisionExitCB=this._onCollisionExitCB, disableCornerDetection=this._disableCornerDetection) {
        return CanvasUtils.getCollisionCB(positions, padding, onCollisionCB, onCollisionEnterCB, onCollisionExitCB, disableCornerDetection)
    }

    detect(pos) {
        this._detectCB(pos)
    }

}