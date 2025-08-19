const fpsCounter = new FPSCounter(), CVS = Canvas.create(null, ()=>{//looping
    let fps = fpsCounter.getFps()
    if (fpsDisplay.textContent !== fps) fpsDisplay.textContent = fps
})


const gameManager = new GameManager(CVS)


gameManager.TEMP_ADD_SOME_TEST_COLLISIONS_IN_SQUARE_4()


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