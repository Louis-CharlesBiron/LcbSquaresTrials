const mainMenu = new Menu(getMainMenuDeclaration)

const gameManager = new GameManager([
    getLevel1Declaration,
    getLevel2Declaration,
    getLevel3Declaration,
])

// TEMP
mainMenu.hide(true)
gameManager.startGame()

gameManager.player.pos = gameManager.squares[1].spawnPos
gameManager.CVS.centerViewAt(gameManager.squares[1].obj.getCenter())
// TEMP

