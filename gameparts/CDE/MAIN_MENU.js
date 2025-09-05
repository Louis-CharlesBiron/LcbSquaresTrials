function getMainMenuDeclaration(menu) {
    const CVS = menu.CVS, centerPos = CVS.getCenter()

    // LOAD FONTS
    TextStyles.loadCustomFont("./assets/fonts/Bungee/Bungee-Regular.ttf", "bungee")

    const titleRadius = 4,
    title = new Grid(S.title, null, null, null, [centerPos[0], 100], 4, null, 250, (render, dot, ratio, res, m, dist, shape, isActive)=>{
        dot.radius = CDEUtils.mod(titleRadius, ratio, titleRadius/2)
    }, null, obj=>{
        const scaleFactor = 1-((obj.width/(CVS.width-50))-1)
        obj.moveBy([-obj.width/2])
        obj.scaleAt([scaleFactor, scaleFactor])
    })
    CVS.add(title)
    console.log(title, CVS)

    CanvasUtils.createButton(menu.CVS, S.start, centerPos, ()=>{
        if (!GameManager.instance.gameStarted) {
            menu.hide(true)
            GameManager.instance.startGame()
        }
    })
}