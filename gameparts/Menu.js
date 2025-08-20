class Menu {
    static SMOOTH_TRANSITION_TIME = 1000

    constructor(declaration) {
        this._CVS = Canvas.create()
        this.#setupCanvas()
        this.loadMenu(declaration)
    }

    #setupCanvas() {
        // USER ACTIONS
        const mMove=m=>mouseInfo.textContent = "("+m.x+", "+m.y+")", CVS = this._CVS
        CVS.setMouseMove(mMove)
        CVS.setMouseLeave(mMove)
        CVS.setMouseDown()
        CVS.setMouseUp()

        // START
        CVS.start()
    }

    loadMenu(declaration) {
        declaration(this)
    }

    hide(smooth) {
        const canvasElement = this._CVS.cvs
        if (smooth) {
            canvasElement.classList.add("smooth")
            canvasElement.style.opacity = 0
            setTimeout(()=>{
                this._CVS.stop()
                canvasElement.classList.remove("smooth")
                canvasElement.style.display = "none"
                if (CDEUtils.isFunction(smooth)) smooth()
            }, Menu.SMOOTH_TRANSITION_TIME)
        } else {
            this._CVS.stop()
            canvasElement.style.opacity = 0
            canvasElement.style.display = "none"
        }
    }

    show(smooth) {
        const canvasElement = this._CVS.cvs
        this._CVS.start()
        if (smooth) {
            canvasElement.style.display = "block"
            canvasElement.classList.add("smooth")
            setTimeout(()=>canvasElement.style.opacity = 1, 1)
            setTimeout(()=>{
                canvasElement.classList.remove("smooth")
                if (CDEUtils.isFunction(smooth)) smooth()
            }, Menu.SMOOTH_TRANSITION_TIME)
        } else {
            canvasElement.style.display = "block"
            canvasElement.style.opacity = 1
        }
    }

    get CVS() {return this._CVS}
}