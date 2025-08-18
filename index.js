const fpsCounter = new FPSCounter(), CVS = Canvas.create(null, ()=>{//looping
    let fps = fpsCounter.getFps()
    if (fpsDisplay.textContent !== fps) fpsDisplay.textContent = fps
})


const gameManager = new GameManager(CVS)





const testCol = new FilledShape("grey", true, CDEUtils.addPos(CVS.getCenter(), [-50]), [new Dot([-30, -30]),new Dot([30, -30]),new Dot([30, 30]),new Dot([-30, 30]),], 0)
CVS.add(testCol)
gameManager.player.addDefaultCollision(testCol)

const testCol2 = new FilledShape("grey", true, CDEUtils.addPos(CVS.getCenter(), [50, 50]), [new Dot([-30, -30]),new Dot([30, -30]),new Dot([30, 30]),new Dot([-30, 30]),], 0)
CVS.add(testCol2)
gameManager.player.addDefaultCollision(testCol2)


// USER ACTIONS
const mMove=m=>mouseInfo.textContent = "("+m.x+", "+m.y+")"
CVS.setMouseMove(mMove)
CVS.setMouseLeave(mMove)
CVS.setMouseDown(()=>gameManager.player.obj.pos = CVS.mouse.pos)
CVS.setMouseUp()
CVS.setKeyDown((keyboard, e)=>{
    gameManager.player.keyEvent(keyboard)
}, true)
CVS.setKeyUp((keyboard, e)=>{
    gameManager.player.keyEvent(keyboard)
}, true)

// START
CVS.start()