class Player {
    static KEYBINDS = {
        MOVEMENTS: {
            UP:[TypingDevice.KEYS.W, TypingDevice.KEYS.ARROW_UP, TypingDevice.KEYS.SPACE],
            DOWN:[TypingDevice.KEYS.S, TypingDevice.KEYS.ARROW_DOWN],
            RIGHT:[TypingDevice.KEYS.D, TypingDevice.KEYS.ARROW_RIGHT],
            LEFT:[TypingDevice.KEYS.A, TypingDevice.KEYS.ARROW_LEFT],
        }
    }
    static GROUND_STATES = {AIR:0, SQUARE:1, BLOCK:2}

    constructor(CVS) {
        this._obj = new Dot(CVS.getCenter(), 5, "red")
        this._speed = 150
        this._jumpHeight = 800
        this._jumpDuration = 850
        this._jumpAnim = null
        this._nextPosX = null
        this._nextPosY = null

        this._collisions = []
        this._activeSquare = null
        this._groundState = false
        const interactions = this._interactions = {up:null, down:null, right:null, left:null}

        CVS.add(this._obj)

        this._obj.loopCB = ()=>{
            const speed = this._speed*CVS.deltaTime, player = this._obj

            // MOVEMENTS
            this._nextPosX = player.x
            this._nextPosY = player.y
            //if (interactions.up) this._nextPosY -= speed
            if (interactions.down) this._nextPosY += speed
            if (interactions.right) this._nextPosX += speed
            if (interactions.left) this._nextPosX -= speed


            // JUMPING
            if (this._groundState && interactions.up && !this._jumpAnim) {
                this._jumpAnim = new Anim((prog, i, deltaTime)=>{
                    this._nextPosY -= (1-prog)*this._jumpHeight*deltaTime
                }, this._jumpDuration, Anim.easeInOutQuad, ()=>this._jumpAnim = null)
            }
            if (this._jumpAnim) this._jumpAnim.getFrame(CVS.timeStamp, CVS.deltaTime)


            // GRAVITY (kinda water physics rn)
            if (!this._groundState) this._nextPosY += 350*CVS.deltaTime

            // COLLISIONS
            const collisions = this._collisions, c_ll = collisions.length
            let hasBlockGroundCollision = false
            for (let i=0;i<c_ll;i++) {
                const collision = collisions[i]
                if (collision.isWithin([this._nextPosX, this._nextPosY])) {
                    if (collision.isWithin([this._nextPosX, player.y])) {this._nextPosX = player.x;console.log("YOO")}
                    if (collision.isWithin([player.x, this._nextPosY])) {
                        if (this._nextPosY >= collision.getBounds()[0][1]) {
                            this._nextPosY = collision.getBounds()[0][1]
                        } else this._nextPosY = player.y
                        console.log("Y")
                        //else if (!this._isOnGround && this._jumpAnim) this._jumpAnim._startTime -= 100
                    }
                }

                // if is on top of block and still in air
                if (collision.isWithin(player.pos, [player.radius, -1, -1, -1])) {
                    this._groundState = Player.GROUND_STATES.BLOCK
                    hasBlockGroundCollision = true
                }
            }
            if (this._groundState==Player.GROUND_STATES.BLOCK && !hasBlockGroundCollision) this._groundState = Player.GROUND_STATES.AIR

            // SQUARE COLLISION
            const activeSquare = this._activeSquare
            if (activeSquare) {
                if (!activeSquare.isWithin([this._nextPosX, this._nextPosY])) {
                    if (!activeSquare.isWithin([player.x, this._nextPosY])) {
                        if (!this._groundState && this._nextPosY+player.radius >= activeSquare.getBounds()[1][1]) {
                            this._groundState = Player.GROUND_STATES.SQUARE
                            this._nextPosY = activeSquare.getBounds()[1][1]-player.radius
                        } else this._nextPosY = player.y
                    } 
                    if (!activeSquare.isWithin([this._nextPosX, player.y])) this._nextPosX = player.x
                } else if (this._groundState==Player.GROUND_STATES.SQUARE) this._groundState = Player.GROUND_STATES.AIR
            }

            // MOVE
            player.x = this._nextPosX
            player.y = this._nextPosY
        }
    }

    keyDown(keyboard, e) {
        const keys = Player.KEYBINDS.MOVEMENTS
        this._interactions.up = keyboard.isDown(keys.UP)
        this._interactions.down = keyboard.isDown(keys.DOWN)
        this._interactions.right = keyboard.isDown(keys.RIGHT)
        this._interactions.left = keyboard.isDown(keys.LEFT)
    }

    keyUp(keyboard, e) {
        const keys = Player.KEYBINDS.MOVEMENTS
        this._interactions.up = keyboard.isDown(keys.UP)
        this._interactions.down = keyboard.isDown(keys.DOWN)
        this._interactions.right = keyboard.isDown(keys.RIGHT)
        this._interactions.left = keyboard.isDown(keys.LEFT)
    }

    get obj() {return this._obj}
	get speed() {return this._speed}
	get collisions() {return this._collisions}
	get interactions() {return this._interactions}
    get activeSquare() {return this._activeSquare}
    get isOnGround() {return Boolean(this._groundState)}
    get groundState() {return this._groundState}

	set obj(_obj) {this._obj = _obj}
	set speed(_speed) {this._speed = _speed}
	set collisions(_collisions) {this._collisions = _collisions}
	set interactions(_interactions) {this._interactions = _interactions}
    set activeSquare(activeSquare) {this._activeSquare = activeSquare} 

}