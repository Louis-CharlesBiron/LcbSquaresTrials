class GameManager {
    
    constructor(CVS) {
        this._CVS = CVS
        this._squares = spawnSquares(CVS)
        this._player = new Player(CVS, this._squares[4].getCenter())

        this.initialize()
    }

    initialize() {
        
        // ADD DEFAULT COLLISIONS
        this._squares.forEach(square=>{
            this._player.addDefaultSquareCollision(square)
        })
    }


    get player() {return this._player}
    get squares() {return this._squares}
}