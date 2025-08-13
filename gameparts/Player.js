class Player {
    static KEYBINDS = {
        MOVEMENTS: {
            UP:[TypingDevice.KEYS.W, TypingDevice.KEYS.ARROW_UP, TypingDevice.KEYS.SPACE],
            DOWN:[TypingDevice.KEYS.S, TypingDevice.KEYS.ARROW_DOWN],
            RIGHT:[TypingDevice.KEYS.D, TypingDevice.KEYS.ARROW_RIGHT],
            LEFT:[TypingDevice.KEYS.A, TypingDevice.KEYS.ARROW_LEFT],
        }
    }
    static PHYSICAL_STATES = {AIR:0, GROUND:1}

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
        this._physicalState = false
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
            if (this._physicalState && interactions.up && !this._jumpAnim) {
                this._jumpAnim = new Anim((prog, i, deltaTime)=>{
                    this._nextPosY -= (1-prog)*this._jumpHeight*deltaTime
                }, this._jumpDuration, Anim.easeInOutQuad, ()=>this._jumpAnim = null)
            }
            if (this._jumpAnim) this._jumpAnim.getFrame(CVS.timeStamp, CVS.deltaTime)


            // GRAVITY (kinda water physics rn)
            if (this._physicalState == Player.PHYSICAL_STATES.AIR) this._nextPosY += 350*CVS.deltaTime

            // COLLISIONS
            const collisions = this.collisions, c_ll = collisions.length
            for (let i=0;i<c_ll;i++) {
                const collision = collisions[i]
                collision.detect(player.pos)
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

    addDefaultCollision(positions, name) {
        const player = this._obj
        this._collisions.push(new Collision(name, positions, player.radius,
            (dir)=>{
                console.log(dir)
            },
            (dir)=>{
                console.log("ENTER", dir)
                if (dir==Collision.DIRECTIONS.TOP) {
                    console.log("ground ig")
                    player.y = positions[0][1]-20
                    this._physicalState = Player.PHYSICAL_STATES.GROUND
                }
            },
            (dir)=>{
                if (dir==Collision.DIRECTIONS.TOP) this._physicalState = Player.PHYSICAL_STATES.AIR
                console.log("LEAVE", dir)
            })
        )
    }

    get obj() {return this._obj}
	get speed() {return this._speed}
	get collisions() {return this._collisions}
	get interactions() {return this._interactions}
    get activeSquare() {return this._activeSquare}
    get isOnGround() {return this._physicalState==Player.PHYSICAL_STATES.GROUND}
    get physicalState() {return this._physicalState}

	set obj(_obj) {this._obj = _obj}
	set speed(_speed) {this._speed = _speed}
	set collisions(_collisions) {this._collisions = _collisions}
	set interactions(_interactions) {this._interactions = _interactions}
    set activeSquare(activeSquare) {this._activeSquare = activeSquare} 

}