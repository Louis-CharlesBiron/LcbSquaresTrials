const mainMenu = new Menu(getMainMenuDeclaration)

const gameManager = new GameManager([
    getLevel1Declaration,
])

// TEMP
mainMenu.hide(true)
GameManager.instance.startGame()
// TEMP

