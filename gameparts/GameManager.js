class GameManager {
    static instance = null
    static CAMERA_MARGIN = 100
    static CAMERA_MOVING_SPEED = 185
    
    constructor(levelDeclarations) {
        if (!GameManager.instance) GameManager.instance = this
        else return GameManager.instance

        const fpsCounter = new FPSCounter()
        this._CVS = Canvas.create(null, ()=>{//looping
            let fps = fpsCounter.getFps()
            if (fpsDisplay.textContent !== fps) fpsDisplay.textContent = fps
        })
        this._gameStarted = false
        this._player = new Player(this._CVS)
        this._squares = this.#createSquares()
        this._obstacles = []

        this.#createLevels(levelDeclarations)
        this.hide()
    }

    #createSquares() {
        const sectionSize = (Square.DEFAULT_SQUARE_SIZE+Square.DEFAULT_SQUARE_MARGIN)*2, squares = []
        for (let i=0,x=0,y=0;i<9;i++) {
            x=i%3
            if (i&&x==0) y++
            squares[i] = new Square([sectionSize*x+sectionSize/2, sectionSize*y+sectionSize/2])
        }
        return squares
    }

    #setupCanvas() {
        // USER ACTIONS
        const mMove=m=>mouseInfo.textContent = "("+m.x+", "+m.y+")", CVS = this._CVS
        CVS.setMouseMove(mMove)
        CVS.setMouseLeave(mMove)
        CVS.setMouseDown(()=>{
            if (this._CVS.typingDevice.isDown(TypingDevice.KEYS.CONTROL)) this._player.pos = this._CVS.mouse.pos
        })
        CVS.setMouseUp()
        CVS.setKeyDown((keyboard, e)=>{
            this._player.keyEvent(keyboard, e.type)
        }, true)
        CVS.setKeyUp((keyboard, e)=>{
            this._player.keyEvent(keyboard, e.type)
        }, true)

        // START
        CVS.start()
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

    /**
     * Starts the game
     */
    startGame() {
        this.#setupCanvas()
        this._gameStarted = true
        this.show(true)

        // POSITION PLAYER
        this._player.pos = [this._squares[0].obj.getCenter()[0], this._squares[0].obj.getBounds()[1][1]-150]
    }

    #createLevels(levelDeclarations) {
        levelDeclarations.forEach((declaration, i)=>{
            declaration(this._squares[i], this)
        })
    }

    get CVS() {return this._CVS}
    get player() {return this._player}
    get squares() {return this._squares}
    get gameStarted() {return this._gameStarted}

    set gameStarted(gameStarted) {this._gameStarted = gameStarted}
}