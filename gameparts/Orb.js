class Orb {
    static DEFAULT_COLOR = [255, 255, 0, 1]
    static DEFAULT_HITBOX_COLOR = Color.CSS_COLOR_TO_RGBA_CONVERTIONS.lime
    static DEFAULT_RADIUS = 15
    static DEFAULT_RADIUS_RADIUS_ANIM_RANGE = 3
    static DEFAULT_RADIUS_RADIUS_ANIM_DURATION = 1500
    static DEFAULT_RADIUS_RADIUS_ANIM_EASING = Anim.easeInOutBounce
    static DEFAULT_OUTLINE_RADIUS_MULTIPLIER = 1.45
    static DEFAULT_JUMP_HEIGHT = 800
    static DEFAULT_JUMP_COUNT_ADDER = 1
    static GET_DEFAULT_ORB_COLLISION_CB = (jumpHeight, jumpCountAdd)=>()=>{
        GameManager.instance.player.jumpHeight = jumpHeight??Orb.DEFAULT_JUMP_HEIGHT
        GameManager.instance.player.jumpCount += jumpCountAdd??Orb.DEFAULT_JUMP_COUNT_ADDER
    }

    constructor(pos, collisionCB, radius, color) {
        this._obj = GameManager.instance.CVS.add(this.#createObj(pos, radius, color))
        this._collisionCB = collisionCB
        this._hasInteraction = false
        GameManager.instance.player.addInteraction(this)
    }

    detect(pos) {
        if (this._obj.isWithin(pos, Player.DEFAULT_RADIUS*Orb.DEFAULT_OUTLINE_RADIUS_MULTIPLIER) && GameManager.instance.player.interactions.up) {
            if (!this._hasInteraction && CDEUtils.isFunction(this._collisionCB)) this._collisionCB(this)
            this._hasInteraction = true
        } else if (this._hasInteraction && !GameManager.instance.player.interactions.up) this._hasInteraction = false
    }

    #createObj(pos, radius, color) {
        radius??=Orb.DEFAULT_RADIUS
        color??=Orb.DEFAULT_COLOR

        const dot = new Dot(pos, radius, color, obj=>obj.playAnim(new Anim((prog, i)=>obj.radius=CDEUtils.fade(prog, i, radius-Orb.DEFAULT_RADIUS_RADIUS_ANIM_RANGE, radius+Orb.DEFAULT_RADIUS_RADIUS_ANIM_RANGE), -Orb.DEFAULT_RADIUS_RADIUS_ANIM_DURATION, Orb.DEFAULT_RADIUS_RADIUS_ANIM_EASING)))
        dot.loopCB=obj=>obj.render.batchStroke(Render.getArc(pos, obj.radius*Orb.DEFAULT_OUTLINE_RADIUS_MULTIPLIER), [255, 255, 255, 0.35])
        dot.compositeOperation = Render.COMPOSITE_OPERATIONS.UNDER
        return dot
    }

    /**
     * Visually shows the collision
     * @param {Render} render: a render instance
     */
    show(render) {
        const bounds = this._obj.getBounds(Player.DEFAULT_RADIUS*Orb.DEFAULT_OUTLINE_RADIUS_MULTIPLIER)
       render.batchStroke(Render.getPositionsRect(bounds[0], bounds[1]), Orb.DEFAULT_HITBOX_COLOR)
    }

}