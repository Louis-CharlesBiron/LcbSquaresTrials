class GameText {
    static DEFAULT_FADING_DISTANCE = 1250
    static DEFAULT_TEXT_LOOP_EFFECT = obj=>obj.a=CDEUtils.mod(1, CDEUtils.getRatio(GameManager.instance.player.obj, obj, GameText.DEFAULT_FADING_DISTANCE), 0.95)
    static FADINGS = {OUT:0, IN:1}

    constructor(text, pos, color, textProfile, disableFadingEffect) {
        this._obj = this.#createObj(text, pos, color, textProfile, disableFadingEffect)
        GameManager.instance.CVS.add(this._obj)
    }

    #createObj(text, pos, color, textProfile, disableFadingEffect) {
        const textDisplay = new TextDisplay(text, pos, color, textProfile, null, null, null, disableFadingEffect?null:GameText.DEFAULT_TEXT_LOOP_EFFECT)
        return textDisplay
    }

    smoothFade(fadeType=GameText.FADINGS.IN, time, easing=Anim.easeInOutQuad) {
        const obj = this._obj
        obj.playAnim(new Anim(prog=>obj.a = fadeType?prog:1-prog, time, easing))
    }

    get id() {return this._obj.id}
    get obj() {return this._obj}
}