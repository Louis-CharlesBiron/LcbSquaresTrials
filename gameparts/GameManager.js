class GameManager {
    
    constructor(CVS) {
        this._CVS = CVS
        this._player = new Player(CVS)
        this._squares = this.#createSquares(CVS)
        this._obstacles = []

        this.initialize()
    }

    #createSquares(CVS) {
        const sectionWidth = CVS.width/3, sectionHeight = CVS.height/3, squares = []
        for (let i=0,x=0,y=0;i<9;i++) {
            x=i%3
            if (i&&x==0) y++
            squares[i] = new Square(this, [sectionWidth*x+sectionWidth/2, sectionHeight*y+sectionHeight/2])
        }
        return squares
    }

    initialize() {
        // POSITION PLAYER
        this._player.pos = this._squares[4].obj.getCenter()
    }

    TEMP_ADD_SOME_TEST_COLLISIONS_IN_SQUARE_4() {
        this._squares[4].addObstacle(new Obstacle(this, CDEUtils.addPos(this._CVS.getCenter(),[-50])))
        this._squares[4].addObstacle(new Obstacle(this, CDEUtils.addPos(this._CVS.getCenter(),[50,50])))
    }


    get CVS() {return this._CVS}
    get player() {return this._player}
    get squares() {return this._squares}
}