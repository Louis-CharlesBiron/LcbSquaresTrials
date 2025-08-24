const mainMenu = new Menu(getMainMenuDeclaration)

const gameManager = new GameManager([
    getLevel1Declaration,
    getLevel2Declaration,
    getLevel3Declaration,
])

// TEMP
mainMenu.hide(true)
gameManager.startGame()

const skipTo = 2
gameManager.progress = skipTo
gameManager.player.pos = gameManager.squares[skipTo].spawnPos
gameManager.CVS.centerViewAt(gameManager.squares[skipTo].obj.getCenter())
// TEMP

