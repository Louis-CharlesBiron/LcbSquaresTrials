function getMainMenuDeclaration(menu) {
    CanvasUtils.createButton(menu.CVS, "Play", menu.CVS.getCenter(), ()=>{
        if (!GameManager.instance.gameStarted) {
            console.log("START GAME")
            menu.hide(true)
            GameManager.instance.startGame()
        }
    })
}