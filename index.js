const fpsCounter = new FPSCounter(), CVS = Canvas.create(null, ()=>{//looping
    let fps = fpsCounter.getFps()
    if (fpsDisplay.textContent !== fps) fpsDisplay.textContent = fps
})


const player = new Player(CVS),
      squares = spawnSquares(CVS)



      function linesIntersect(pos1, pos2, linePos1, linePos2) {// TODO
        function ccw(pA, pB, pC) {
          return (pC[1] - pA[1]) * (pB[0] - pA[0]) > (pB[1] - pA[1]) * (pC[0] - pA[0]);
        }
        return ccw(pos1, linePos1, linePos2) !== ccw(pos2, linePos1, linePos2) &&
               ccw(pos1, pos2, linePos1) !== ccw(pos1, pos2, linePos2);
      }



player.updateRadius(8)
player.addDefaultSquareCollision(squares[4])

const testCol = new FilledShape("grey", true, CDEUtils.addPos(CVS.getCenter(), [-50]), [
    new Dot([-30, -30]),
    new Dot([30, -30]),
    new Dot([30, 30]),
    new Dot([-30, 30]),
], 0)
CVS.add(testCol)
player.addDefaultCollision(testCol)

const testCol2 = new FilledShape("grey", true, CDEUtils.addPos(CVS.getCenter(), [50, 50]), [
    new Dot([-30, -30]),
    new Dot([30, -30]),
    new Dot([30, 30]),
    new Dot([-30, 30]),
], 0)
CVS.add(testCol2)
player.addDefaultCollision(testCol2)


// USER ACTIONS
const mMove=m=>mouseInfo.textContent = "("+m.x+", "+m.y+")"
CVS.setMouseMove(mMove)
CVS.setMouseLeave(mMove)
CVS.setMouseDown(()=>player.obj.pos = CVS.mouse.pos)
CVS.setMouseUp()
CVS.setKeyDown((keyboard, e)=>{
    player.keyEvent(keyboard)
}, true)
CVS.setKeyUp((keyboard, e)=>{
    player.keyEvent(keyboard)
}, true)

// START
CVS.start()