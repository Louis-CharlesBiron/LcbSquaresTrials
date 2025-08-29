const mainMenu = new Menu(getMainMenuDeclaration)

const gameManager = new GameManager([
    getLevel1Declaration,
    getLevel2Declaration,
    getLevel3Declaration,
    getLevel4Declaration,
    getLevel5Declaration,
])

// TEMP
mainMenu.hide(true)
gameManager.startGame()

gameManager.skipTo(4)
gameManager.musicManager.muted = true
// TEMP

