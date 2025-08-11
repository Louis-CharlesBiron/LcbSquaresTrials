const fpsCounter = new FPSCounter(), CVS = Canvas.create(null, ()=>{//looping
    let fps = fpsCounter.getFps()
    if (fpsDisplay.textContent !== fps) fpsDisplay.textContent = fps
})


const player = new Player(CVS),
      squares = spawnSquares(CVS)


player.activeSquare = squares[4]

const testCol = new FilledShape("blue", true, CDEUtils.addPos(CVS.getCenter(), [-50]), [
    new Dot([-30, -30]),
    new Dot([30, -30]),
    new Dot([30, 30]),
    new Dot([-30, 30]),
])
CVS.add(testCol)
player.collisions.push(testCol)


const testCol2 = new FilledShape("blue", true, CDEUtils.addPos(CVS.getCenter(), [50, 50]), [
    new Dot([-30, -30]),
    new Dot([30, -30]),
    new Dot([30, 30]),
    new Dot([-30, 30]),
])
CVS.add(testCol2)
player.collisions.push(testCol2)


// USER ACTIONS
const mMove=m=>mouseInfo.textContent = "("+m.x+", "+m.y+")"
CVS.setMouseMove(mMove)
CVS.setMouseLeave(mMove)
CVS.setMouseDown(()=>player.obj.pos = CVS.mouse.pos)
CVS.setMouseUp()
CVS.setKeyDown((keyboard, e)=>{
    player.keyDown(keyboard, e)
}, true)
CVS.setKeyUp((keyboard, e)=>{
    player.keyUp(keyboard, e)
}, true)

// START
CVS.start()