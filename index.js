const fpsCounter = new FPSCounter(), CVS = Canvas.create(null, ()=>{//looping
    let fps = fpsCounter.getFps()+"\n"+fpsCounter.fpsRaw
    if (fpsDisplay.textContent !== fps) fpsDisplay.textContent = fps
})

// DECLARE OBJS





// USER ACTIONS
const mMove=m=>mouseInfo.textContent = "("+m.x+", "+m.y+")"
CVS.setMouseMove(mMove)
CVS.setMouseLeave(mMove)
CVS.setMouseDown()
CVS.setMouseUp()
CVS.setKeyDown()
CVS.setKeyUp()

// START
CVS.start()