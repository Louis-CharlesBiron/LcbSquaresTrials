class Player {
    static KEYBINDS = {
        UP:[TypingDevice.KEYS.W, TypingDevice.KEYS.SPACE],
        DOWN:[TypingDevice.KEYS.S],
        RIGHT:[TypingDevice.KEYS.D, TypingDevice.KEYS.ARROW_RIGHT],
        LEFT:[TypingDevice.KEYS.A, TypingDevice.KEYS.ARROW_LEFT],
        SMALLER:[TypingDevice.KEYS.ARROW_DOWN],
        BIGGER:[TypingDevice.KEYS.ARROW_UP],
    }
    static PHYSICAL_STATES = {AIR:0, GROUND:1}
    static MINIMAL_RADIUS = 5
    static MAXIMAL_RADIUS = 30

    constructor(CVS) {
        this._obj = new Dot(CVS.getCenter(), 5, "red")
        this._speed = 150
        this._radiusSpeed = 35
        this._jumpHeight = 600
        this._jumpDuration = 850
        this._jumpAnim = null
        this._gravity = 350
        this._nextPosX = null
        this._nextPosY = null

        this._collisions = []
        this._physicalState = false
        const interactions = this._interactions = Object.keys(Player.KEYBINDS).reduce((a,b)=>(a[b.toLowerCase()]=null,a),{}),
              settings = this._settings = {showHitboxes:true, noclip:false}

        CVS.add(this._obj)

        this._obj.loopCB = ()=>{
            const deltaTime = CVS.deltaTime, speed = this._speed*deltaTime, player = this._obj

            // MOVEMENTS
            this._nextPosX = player.x
            this._nextPosY = player.y
            if (interactions.up) this._nextPosY -= speed
            if (interactions.down) this._nextPosY += speed
            if (interactions.right) this._nextPosX += speed
            if (interactions.left) this._nextPosX -= speed

            // JUMPING
            //if (this._physicalState && interactions.up && !this._jumpAnim) {
            //    this._jumpAnim = new Anim((prog, i, deltaTime)=>{
            //        this._nextPosY -= (1-prog)*this.#getAdjustedJumpHeight()*deltaTime
            //    }, this._jumpDuration, Anim.easeInOutQuad, ()=>this._jumpAnim=null)
            //}
            //if (this._jumpAnim) this._jumpAnim.getFrame(CVS.timeStamp, deltaTime)

            // SIZE CHANGES
            if (interactions.smaller && player.radius > Player.MINIMAL_RADIUS) {
                this.updateRadius(player.radius-this._radiusSpeed*deltaTime)
            }
            if (interactions.bigger && player.radius < Player.MAXIMAL_RADIUS) {
                this.updateRadius(player.radius+this._radiusSpeed*deltaTime)
            }

            // GRAVITY
            //this._nextPosY += this._gravity*deltaTime

            // COLLISIONS
            const collisions = this.collisions, c_ll = collisions.length
            for (let i=0;i<c_ll;i++) {
                const collision = collisions[i]
                if (!settings.noclip) collision.detect([this._nextPosX, this._nextPosY], player.pos)
                if (settings.showHitboxes) collision.show(CVS.render)
            }

            // MOVE
            player.x = this._nextPosX
            player.y = this._nextPosY
        }
    }

    #getAdjustedJumpHeight() {
        function normalize(x, a, b) {// todo
            return (x - a) / (b - a);
          }
        //console.log(this._gravity+(this._jumpHeight-this._jumpHeight*CDEUtils.mod(1, normalize(this._obj.radius, Player.MINIMAL_RADIUS, Player.MAXIMAL_RADIUS), 0.8)), CDEUtils.mod(1, normalize(this._obj.radius, Player.MINIMAL_RADIUS, Player.MAXIMAL_RADIUS), 0.9))
        return this._gravity+(this._jumpHeight*CDEUtils.mod(1, normalize(this._obj.radius, Player.MINIMAL_RADIUS, Player.MAXIMAL_RADIUS), 0.8))
    }

    keyEvent(keyboard) {
        const keys = Player.KEYBINDS
        this._interactions.up = keyboard.isDown(keys.UP)
        this._interactions.down = keyboard.isDown(keys.DOWN)
        this._interactions.right = keyboard.isDown(keys.RIGHT)
        this._interactions.left = keyboard.isDown(keys.LEFT)
        this._interactions.smaller = keyboard.isDown(keys.SMALLER)
        this._interactions.bigger = keyboard.isDown(keys.BIGGER)
    }

    addDefaultCollision(positions, name, padding=this._obj.radius-2) {
        const collision = new Collision(name, positions, padding,
            (dir, col, safeCol)=>{
                //console.log(dir, safeCol)
                const positions = col.getPositionsValue(), pos1 = positions[0], pos2 = positions[1]
                if (dir == Collision.DIRS.RIGHT || dir == Collision.DIRS.LEFT) console.log(dir == Collision.DIRS.RIGHT, dir == Collision.DIRS.LEFT)
                if (dir == Collision.DIRS.RIGHT && this._nextPosX <= pos2[0]) this._nextPosX = pos2[0]+1
                else if (dir == Collision.DIRS.LEFT && this._nextPosX >= pos1[0]) this._nextPosX = pos1[0]-1
                if (dir == Collision.DIRS.TOP && this._nextPosY >= pos1[1]) this._nextPosY = pos1[1]-1
                else if (dir == Collision.DIRS.BOTTOM && this._nextPosY <= pos2[1]) this._nextPosY = pos2[1]+1
            },
            (dir, col, safeCol)=>{
                //console.log("ENTER", dir)
                if (dir==Collision.DIRS.TOP) {// GROUND
                    this._physicalState = Player.PHYSICAL_STATES.GROUND
                }
            },
            (dir, col, safeCol)=>{
                if (dir==Collision.DIRS.TOP) this._physicalState = Player.PHYSICAL_STATES.AIR
                //console.log("LEAVE", dir)
            })
        this._collisions.push(collision)
    }

    addDefaultSquareCollision(square) {
        const bounds = square.getBounds(), squarePadding = this._obj.radius
        this.addDefaultCollision([bounds[0], [bounds[1][0], bounds[0][1]]], "squareTop"+square.id   , squarePadding) //TOP
        this.addDefaultCollision([[bounds[1][0], bounds[0][1]], bounds[1]], "squareRight"+square.id , squarePadding) //RIGHT
        this.addDefaultCollision([[bounds[0][0], bounds[1][1]], bounds[1]], "squareBottom"+square.id, squarePadding) //BOTTOM
        this.addDefaultCollision([bounds[0], [bounds[0][0], bounds[1][1]]], "squareLeft"+square.id  , squarePadding) //LEFT
    }

    updateRadius(newRadius) {
        this._obj.radius = newRadius=CDEUtils.clamp(newRadius, Player.MINIMAL_RADIUS, Player.MAXIMAL_RADIUS)
        const collisions = this.collisions, c_ll = collisions.length
        for (let i=0;i<c_ll;i++) {
            const collision = collisions[i]
            if (collision.name.startsWith("square")) collision.padding = newRadius
            else collision.padding = newRadius-2
        }
    }

    get obj() {return this._obj}
	get speed() {return this._speed}
	get collisions() {return this._collisions}
	get interactions() {return this._interactions}
    get isOnGround() {return this._physicalState==Player.PHYSICAL_STATES.GROUND}
    get physicalState() {return this._physicalState}

	set obj(_obj) {this._obj = _obj}
	set speed(_speed) {this._speed = _speed}
	set collisions(_collisions) {this._collisions = _collisions}
	set interactions(_interactions) {this._interactions = _interactions}
}