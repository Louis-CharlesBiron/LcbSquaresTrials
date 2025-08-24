const mainMenu = new Menu(getMainMenuDeclaration)

const gameManager = new GameManager([
    getLevel1Declaration,
    getLevel2Declaration,
    getLevel3Declaration,
])

// TEMP
mainMenu.hide(true)
gameManager.startGame()

//gameManager.skipTo(2)
gameManager.musicManager.muted = true
// TEMP

