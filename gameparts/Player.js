class Player {
    static KEYBINDS = {
        UP:[TypingDevice.KEYS.W, TypingDevice.KEYS.SPACE, TypingDevice.KEYS.ARROW_UP],
        DOWN:[TypingDevice.KEYS.S, TypingDevice.KEYS.ARROW_DOWN],
        RIGHT:[TypingDevice.KEYS.D, TypingDevice.KEYS.ARROW_RIGHT],
        LEFT:[TypingDevice.KEYS.A, TypingDevice.KEYS.ARROW_LEFT],
        SMALLER:[TypingDevice.KEYS.ARROW_DOWN],
        BIGGER:[TypingDevice.KEYS.ARROW_UP],
        SHOW_HITBOXES:[TypingDevice.KEYS.P],
        SHOW_TRAJECTORY:[TypingDevice.KEYS.L]
    }
    static NOCLIP_LEVELS = {DISABLED:0, ONLY_SOLIDS:1, ALL:2}
    static PHYSICAL_STATES = {AIR:0, GROUND:1}
    static MINIMAL_RADIUS = 5
    static MAXIMAL_RADIUS = 30
    static DEFAULT_RADIUS = 8
    static JUMP_CEILING_CANCELLATION_SPEED = 90
    static DEFAULT_SPEED = 200
    static DEFAULT_RADIUS_SCALING_SPEED = 35
    static DEFAULT_JUMP_HEIGHT = 600
    static DEFAULT_JUMP_DURATION = 850
    static DEFAULT_GRAVITY = 350
    static DEFAULT_JUMP_COUNT = 0
    static DEFAULT_MAX_JUMP_COUNT = 2
    static DEFAULT_COLOR = [255, 0, 0, 1]
    static DEFAULT_RESPAWN_DELAY = 200
    static DEFAULT_RESPAWN_TIME = 450

    constructor(CVS, spawnPos) {
        this._obj = new Dot(spawnPos, Player.DEFAULT_RADIUS, Player.DEFAULT_COLOR, null, null, true)
        this._speed = Player.DEFAULT_SPEED
        this._radiusSpeed = Player.DEFAULT_RADIUS_SCALING_SPEED
        this._jumpHeight = Player.DEFAULT_JUMP_HEIGHT
        this._jumpDuration = Player.DEFAULT_JUMP_DURATION
        this._jumpCount = Player.DEFAULT_JUMP_COUNT
        this._jumpHoldLock = false
        this._jumpAnim = null
        this._gravity = Player.DEFAULT_GRAVITY
        this._nextPosX = null
        this._nextPosY = null
        this._movementLocked = false
        this._isDead = false

        this._collisions = []
        this._physicalState = false
        const interactions = this._interactions = Object.keys(Player.KEYBINDS).reduce((a,b)=>(a[b.toLowerCase()]=null,a),{}),
              settings = this._settings = {showHitboxes:false, noclip:Player.NOCLIP_LEVELS.DISABLED, showTrajectory:false, showScreenCenter:false, showCoordinates:false},
              render = CVS.render

        // PLAYER LOOP
        this._obj.loopCB = ()=>{
            const deltaTime = CVS.deltaTime, speed = this._speed*deltaTime, player = this._obj

            // MOVEMENTS
            this._nextPosX = player.x
            this._nextPosY = player.y
            //if (interactions.up) this._nextPosY -= speed
            if (interactions.down) this._nextPosY += speed*1.25
            if (interactions.right) this._nextPosX += speed
            if (interactions.left) this._nextPosX -= speed

            // JUMPING
            if (interactions.up && this._jumpCount && !this._jumpHoldLock) {
                this._jumpCount--
                this._jumpHoldLock = true
                if (this._jumpAnim) this._jumpAnim.end(deltaTime)
                this._jumpAnim = new Anim((prog, i, deltaTime)=>{
                    this._nextPosY -= (1-prog)*this.#getRadiusAdjustedJumpHeight()*deltaTime
                }, this._jumpDuration, Anim.easeInOutQuad, ()=>this._jumpAnim=null)
            }

            if (this._jumpAnim) this._jumpAnim.getFrame(CVS.timeStamp, deltaTime)

            // SIZE CHANGES
            //if (interactions.smaller && player.radius > Player.MINIMAL_RADIUS) {
            //    this.updateRadius(player.radius-this._radiusSpeed*deltaTime)
            //}
            //if (interactions.bigger && player.radius < Player.MAXIMAL_RADIUS) {
            //    this.updateRadius(player.radius+this._radiusSpeed*deltaTime)
            //}

            // GRAVITY
            this._nextPosY += this._gravity*deltaTime

            // COLLISIONS
            const collisions = this._collisions, c_ll = collisions.length, nextPos = [this._nextPosX, this._nextPosY],
                  hasNoclipDisabled = !settings.noclip, hasSolidOnlyNoclip = settings.noclip==Player.NOCLIP_LEVELS.ONLY_SOLIDS, hasShowHitboxes = settings.showHitboxes
            for (let i=0;i<c_ll;i++) {
                const collision = collisions[i]
                if (hasNoclipDisabled) collision.detect(nextPos, player.pos)
                else if (hasSolidOnlyNoclip && !collision.isSolid) collision.detect(nextPos, player.pos)
                if (hasShowHitboxes) collision.show(render)
            }

            //if (hasShowHitboxes) render.fill(Render.getArc(player._pos, 2), [0,0,255,1])

            if (settings.showTrajectory) {
                render.fill(Render.getArc(player._pos, 3), [255,255,0,1])
                render.fill(Render.getArc(nextPos, 3), [0,200,0,1])
                render.stroke(Render.getLine(player._pos, nextPos), [0,255,0,1])
            }

            // MOVE
            if (!this._movementLocked) {
                player.x = this._nextPosX
                player.y = this._nextPosY
            }

            // MOVE CAMERA
            const camMargin = GameManager.CAMERA_MARGIN, camSpeed = GameManager.CAMERA_MOVING_SPEED*deltaTime, viewPos = CVS.viewPos
            if (player.x < camMargin-viewPos[0]) CVS.moveViewBy([camSpeed])
            else if (player.x+viewPos[0] > (CVS.width-camMargin)) CVS.moveViewBy([-camSpeed])
            if (player.y < camMargin-viewPos[1]) CVS.moveViewBy([0, camSpeed])
            else if (player.y+viewPos[1] > CVS.height-camMargin) CVS.moveViewBy([0, -camSpeed])

            // SETTINGS
            if (settings.showScreenCenter) {
                const render = CVS.render, viewPos = CVS.viewPos
                render.stroke(Render.getLine([CVS.width/2-viewPos[0], -viewPos[1]], [CVS.width/2-viewPos[0], CVS.height-viewPos[1]] ), [255,0,0,1])
                render.stroke(Render.getLine([-viewPos[0], CVS.height/2-viewPos[1]], [CVS.width-viewPos[0], CVS.height/2-viewPos[1]]), [255,0,0,1])

            }
        }
        CVS.add(this._obj)
    }

    /**
     * @returns The jump height based on the player's radius 
     */
    #getRadiusAdjustedJumpHeight() {
        return this._gravity+(this._jumpHeight*CDEUtils.mod(1, CDEUtils.normalize(this._obj.radius, Player.MINIMAL_RADIUS, Player.MAXIMAL_RADIUS), 0.8))
    }

    /**
     * Called on key up/down
     */
    keyEvent(keyboard) {
        const keys = Player.KEYBINDS

        // HOLDABLES
        this._interactions.up = keyboard.isDown(keys.UP)
        this._interactions.down = keyboard.isDown(keys.DOWN)
        this._interactions.right = keyboard.isDown(keys.RIGHT)
        this._interactions.left = keyboard.isDown(keys.LEFT)
        this._interactions.smaller = keyboard.isDown(keys.SMALLER)
        this._interactions.bigger = keyboard.isDown(keys.BIGGER)

        // TOGGLES
        if (keyboard.isDown(keys.SHOW_HITBOXES)) this._settings.showHitboxes = !this._settings.showHitboxes
        if (keyboard.isDown(keys.SHOW_TRAJECTORY)) this._settings.showTrajectory = !this._settings.showTrajectory

        // JUMP LOCK
        if (!this._interactions.up && this._jumpHoldLock) this._jumpHoldLock = false
    }

    /**
     * Called upon touching any ground
     */
    #enterGround(collision) {
        this._physicalState = Player.PHYSICAL_STATES.GROUND
        this._jumpCount = Player.DEFAULT_MAX_JUMP_COUNT
    }

    /**
     * Called upon leaving any ground
     */
    #leaveGround(collision) {
        this._physicalState = Player.PHYSICAL_STATES.AIR
    }

    /**
     * Create a collision / obstacle
     * @param {[[x1, y1], [x2, y2]]} positions The bounds of the collision area
     * @param {String?} name The name of the collision object
     * @param {Number?} padding The padding applied to the collision area
     */
    addDefaultCollision(positions, name, padding=this._obj.radius-2) {
        const collision = new Collision(name, positions, padding,
            (dir, col, safeCol)=>{
                // COLLISIONS
                const positions = col.getPositionsValue(), pos1 = positions[0], pos2 = positions[1]
                if (dir == Collision.DIRS.RIGHT && this._nextPosX <= pos2[0]) this._nextPosX = pos2[0]+1
                else if (dir == Collision.DIRS.LEFT && this._nextPosX >= pos1[0]) this._nextPosX = pos1[0]-1
                if (dir == Collision.DIRS.TOP && this._nextPosY >= pos1[1]) this._nextPosY = pos1[1]-1
                else if (dir == Collision.DIRS.BOTTOM && this._nextPosY <= pos2[1]) this._nextPosY = pos2[1]+1

                // CANCEL JUMP WHEN HIT CEILING
                if (dir==Collision.DIRS.BOTTOM && this._jumpAnim) this._jumpAnim.startTime -= Player.JUMP_CEILING_CANCELLATION_SPEED
            },
            (dir, col)=>{
                // TOUCHES GROUND
                if (dir==Collision.DIRS.TOP) this.#enterGround(col)
            },
            (dir, col)=>{
                // LEAVES GROUND
                if (dir==Collision.DIRS.TOP) this.#leaveGround(col)
            })
        this._collisions.push(collision)
        return collision
    }

    /**
     * Create default collisions for the specified square
     * @param {FilledShape} square One of the 9 squares 
     */
    addDefaultSquareCollision(square) {
        const bounds = square.getBounds(), squarePadding = this._obj.radius
        return [
            this.addDefaultCollision([bounds[0], [bounds[1][0], bounds[0][1]]], "squareTop$"+square.id   , squarePadding), //TOP
            this.addDefaultCollision([[bounds[1][0], bounds[0][1]], bounds[1]], "squareRight$"+square.id , squarePadding), //RIGHT
            this.addDefaultCollision([[bounds[0][0], bounds[1][1]], bounds[1]], "squareBottom$"+square.id, squarePadding), //BOTTOM
            this.addDefaultCollision([bounds[0], [bounds[0][0], bounds[1][1]]], "squareLeft$"+square.id  , squarePadding) //LEFT
        ]
    }

    addInteraction(collision) {
        this._collisions.push(collision)
        return collision
    }

    /**
     * Updates the player radius and the collisions padding accordingly
     * @param {Number} newRadius The new player radius
     */
    updateRadius(newRadius) {
        this._obj.radius = newRadius=CDEUtils.clamp(newRadius, Player.MINIMAL_RADIUS, Player.MAXIMAL_RADIUS)
        const collisions = this.collisions, c_ll = collisions.length
        for (let i=0;i<c_ll;i++) {
            const collision = collisions[i]
            if (collision.name.startsWith("square")) collision.padding = newRadius
            else collision.padding = newRadius-2
        }
    }

    cinematicMoveTo(pos, time=1000) {
        this._gravity = 0
        this._settings.noclip = Player.NOCLIP_LEVELS.ONLY_SOLIDS
        this._obj.moveTo(pos, time)
        setTimeout(()=>{
            this._settings.noclip = Player.NOCLIP_LEVELS.DISABLED
            this._gravity = Player.DEFAULT_GRAVITY
        }, time)
    }

    disableMovements() {
        this._movementLocked = true
    }

    enableMovements() {
        this._movementLocked = false
    }

    die(spawnPos, time, delay) {
        if (!this._isDead) {
            delay??=Player.DEFAULT_RESPAWN_DELAY
            time??=Player.DEFAULT_RESPAWN_TIME

            this.disableMovements()
            this._isDead = true

            const obj = this._obj, initRgba = obj.rgba
            obj.playAnim(new Anim(prog=>{
                prog = (1-Math.sin(prog*Math.PI))
                obj.color = [initRgba[0]*prog, initRgba[1]*prog, initRgba[2]*prog, 1]
            }, time))

            setTimeout(()=>{
                obj.filter = "url(#deathEffect)"
                this.cinematicMoveTo(spawnPos, time)
            }, delay)
            setTimeout(()=>{
                this.enableMovements()
                this._jumpCount = Player.DEFAULT_MAX_JUMP_COUNT
                obj.color = Player.DEFAULT_COLOR
                obj.filter = null
                this._isDead = false
            }, delay+time)
        }
    }

    get obj() {return this._obj}
	get speed() {return this._speed}
	get collisions() {return this._collisions}
	get interactions() {return this._interactions}
    get isOnGround() {return this._physicalState==Player.PHYSICAL_STATES.GROUND}
    get physicalState() {return this._physicalState}
    get settings() {return this._settings}
    get gravity() {return this._gravity}
    get pos() {return this._obj.pos}

	set pos(pos) {this._obj.pos = pos}
	set obj(_obj) {this._obj = _obj}
	set speed(_speed) {this._speed = _speed}
	set collisions(_collisions) {this._collisions = _collisions}
	set interactions(_interactions) {this._interactions = _interactions}
	set gravity(gravity) {this._gravity = gravity}
}