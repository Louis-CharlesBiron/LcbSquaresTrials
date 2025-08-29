function getLevel4Declaration(square, gameManager) {
    const player = gameManager.player, obj = square.obj, CVS = gameManager.CVS, LEVEL = 4, nextSquare = gameManager.squares[LEVEL],
          [[left, top], [right, bottom]] = obj.getBounds(), [centerX, centerY] = obj.getCenter(), size = right-left,
          standardDist = 75, standardSize = 25, standardSpikeSize = Spike.DEFAULT_HEIGHT, strictSpikeSize = Spike.DEFAULT_WIDTH
          textColor = [135, 206, 235, 0]

      // SET SPAWNPOS
      square.spawnPos = [centerX-standardSize, bottom-standardDist]
      const deathCB = Spike.GET_DEFAULT_DEATH_COLLISION_CB(square.spawnPos), orbCB = Orb.GET_DEFAULT_ORB_COLLISION_CB()

      // OBSTACLES
      square.addObject(new Obstacle([centerX-standardSize*2, bottom-standardSize], standardSize*2, standardSize)) // SMALL SPAWN BLOCK
      square.addObject(new Obstacle([centerX-standardSize*5.5, bottom-standardDist*2.35], standardSize*3.55, standardDist*2.35)) // SPAWN LEFT BLOCKER

      square.addObject(new Spike([centerX+standardSpikeSize*2, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*2, bottom-standardSpikeSize*2], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*2, bottom-standardSpikeSize*3.5], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*0.5, bottom-standardSpikeSize*3.5], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Spike([centerX+standardSpikeSize*5, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*5, bottom-standardSpikeSize*2], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*5, bottom-standardSpikeSize*3.5], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*6.5, bottom-standardSpikeSize*3.5], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*3.5, bottom-standardSpikeSize*3.5], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Spike([centerX+standardSpikeSize*7, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*7, bottom-standardSpikeSize*2], null, deathCB))

      square.addObject(new Spike([centerX+standardSpikeSize*8, bottom-standardSpikeSize], null, deathCB))

      square.addObject(new Obstacle([centerX-standardSize*3, bottom-standardDist*1.95], standardDist*4.5, standardSize))// SPAWN ROOF

      square.addObject(new Spike([centerX+standardSpikeSize*5.75, bottom-standardSpikeSize*5.15], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*6.75, bottom-standardSpikeSize*6.15], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*6.75, bottom-standardSpikeSize*7.15], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*6, bottom-standardSpikeSize*7], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Obstacle([right-standardDist*.65, centerY+standardDist], standardDist*.65, standardSize)) // SMALL RIGHT PLATERFORM
      square.addObject(new Spike([right-standardSpikeSize/2, bottom-standardSpikeSize*8], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*4, bottom-standardSpikeSize*9], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*4, bottom-standardSpikeSize*8], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*4, bottom-standardSpikeSize*7], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*4, bottom-standardSpikeSize*6], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*4, bottom-standardSpikeSize*5], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*3.5, bottom-standardSpikeSize*9], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*2.5, bottom-standardSpikeSize*9], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*1.5, bottom-standardSpikeSize*9], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*0.5, bottom-standardSpikeSize*9], Spike.ROTATIONS.TOP, deathCB))

      square.addObject(new Obstacle([centerX, centerY-standardDist*.5], size/2-standardSize*1.55, standardSize)) // MIDDLER PLATEFORM
      square.addObject(new Obstacle([centerX+standardDist*1.5, centerY-standardDist*.5], standardSize, standardDist*2.75))

      square.addObject(new Spike([right-standardSpikeSize*0.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*1.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*2.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*3.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*4.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*4.5, top+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*4.5, top+standardSpikeSize*2], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*4.5, top+standardSpikeSize*3], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*4.5, top+standardSpikeSize*4], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*4.5, top+standardSpikeSize*5.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*4.5, top+standardSpikeSize*6.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*5.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*6.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*6.5, top+standardSpikeSize*1.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*5.5, top+standardSpikeSize*6.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*6.5, top+standardSpikeSize*6.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*6.5, top+standardSpikeSize*5.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*6.5, top+standardSpikeSize*4.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*6.5, top+standardSpikeSize*3.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*6.5, top+standardSpikeSize*2.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*7.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*8.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*10.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*11.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*11.5, top+standardSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*12.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*12.5, top+standardSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*13.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*13.5, top+standardSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*14.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*14.5, top+standardSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*15.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*15.5, top+standardSize], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Spike([right-standardSpikeSize*9.5, top+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9.5, top+standardSpikeSize*2], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9.5, top+standardSpikeSize*3], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9.5, top+standardSpikeSize*4], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9.5, top+standardSpikeSize*5], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9.5, top+standardSpikeSize*6], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9.5, top+standardSpikeSize*7], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9.5, top+standardSpikeSize*8], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Spike([right-standardSpikeSize*6, top+standardSpikeSize*8.2], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*7, top+standardSpikeSize*9], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*8, top+standardSpikeSize*9], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9, top+standardSpikeSize*9], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*10, top+standardSpikeSize*9], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*11, top+standardSpikeSize*9], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*12, top+standardSpikeSize*9], Spike.ROTATIONS.TOP, deathCB))

      square.addObject(new Obstacle([left+standardDist*2, top+standardSpikeSize*10], standardDist*3, standardSize)) // MIDDLE DOUBLE SPIKE PLATEFORM

      square.addObject(new Spike([right-standardSpikeSize*10.36, top+standardSpikeSize*11.15], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*10.36-strictSpikeSize, top+standardSpikeSize*11.15], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*10.36-strictSpikeSize*2, top+standardSpikeSize*11.15], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*10.36-strictSpikeSize*3, top+standardSpikeSize*12.15], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*10.36-strictSpikeSize*3, top+standardSpikeSize*13.15], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*11.36-strictSpikeSize*3, top+standardSpikeSize*14.15], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*11.36-strictSpikeSize*3, top+standardSpikeSize*15.15], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*11.36-strictSpikeSize*3, top+standardSpikeSize*16.15], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*11.36-strictSpikeSize*2, top+standardSpikeSize*16.15], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*11.36-strictSpikeSize*4, top+standardSpikeSize*16.15], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*11.36-strictSpikeSize*5, top+standardSpikeSize*16.15], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*11.36-strictSpikeSize*6, top+standardSpikeSize*16.15], Spike.ROTATIONS.TOP, deathCB))

      let hasTeleported = false
      square.addObject(new Orb([left+standardSize*5.6, bottom-standardSize*2.5], ()=>{
            if (!hasTeleported) player.multipleCinematicMoves(3000, [244,1412], [207,1357], [115,1142])
            hasTeleported = true
      }, null, Color.rebeccapurple))

      square.addObject(new Orb([left+standardDist, top+standardDist*3], Orb.GET_DEFAULT_ORB_COLLISION_CB(100), 10, Color.hotpink))
      square.addObject(new Orb([left+standardDist*1.5, top+standardDist*3], Orb.GET_DEFAULT_ORB_COLLISION_CB(100), 10, Color.hotpink))
      square.addObject(new Orb([left+standardDist*2, top+standardDist*3], Orb.GET_DEFAULT_ORB_COLLISION_CB(100), 10, Color.hotpink))
      square.addObject(new Orb([left+standardDist*2.5, top+standardDist*3], Orb.GET_DEFAULT_ORB_COLLISION_CB(100), 10, Color.hotpink))
      square.addObject(new Orb([left+standardDist*2.5, top+standardDist*2.5], Orb.GET_DEFAULT_ORB_COLLISION_CB(100), 10, Color.hotpink))
      square.addObject(new Orb([left+standardDist*2.5, top+standardDist*2], Orb.GET_DEFAULT_ORB_COLLISION_CB(100), 10, Color.hotpink))
      square.addObject(new Orb([left+standardDist*2.5, top+standardDist*1.5], Orb.GET_DEFAULT_ORB_COLLISION_CB(100), 10, Color.hotpink))
      square.addObject(new Orb([left+standardDist*2.5, top+standardDist], Orb.GET_DEFAULT_ORB_COLLISION_CB(100), 10, Color.hotpink))
      square.addObject(new Orb([left+standardDist*2, top+standardDist], Orb.GET_DEFAULT_ORB_COLLISION_CB(100), 10, Color.hotpink))
      square.addObject(new Orb([left+standardDist*1.5, top+standardDist], Orb.GET_DEFAULT_ORB_COLLISION_CB(100), 10, Color.hotpink))
      square.addObject(new Orb([left+standardDist, top+standardDist], Orb.GET_DEFAULT_ORB_COLLISION_CB(100), 10, Color.hotpink))
      square.addObject(new Orb([left+standardDist*.5, top+standardDist], Orb.GET_DEFAULT_ORB_COLLISION_CB(100), 10, Color.hotpink))

      square.addObject(new Spike([left+strictSpikeSize*2.5, top+standardSpikeSize*7], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*3.5, top+standardSpikeSize*7], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*4.5, top+standardSpikeSize*7], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*5.5, top+standardSpikeSize*7], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*6.5, top+standardSpikeSize*7], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*7.5, top+standardSpikeSize*7], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*7.5, top+standardSpikeSize*6], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*7.5, top+standardSpikeSize*5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*7.5, top+standardSpikeSize*4], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*7.5, top+standardSpikeSize*3], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*7.5, top+standardSpikeSize*2], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*7.5, top+standardSpikeSize], Spike.ROTATIONS.TOP, deathCB))

      square.addObject(new Spike([left+strictSpikeSize*2.5, top+standardSpikeSize*5], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*3.5, top+standardSpikeSize*5], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*4.5, top+standardSpikeSize*5], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*5.5, top+standardSpikeSize*5], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*5.5, top+standardSpikeSize*4], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*5.5, top+standardSpikeSize*3.1], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*5.5, top+standardSpikeSize*2.15], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*4.5, top+standardSpikeSize*2.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*3.5, top+standardSpikeSize*2.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*2.5, top+standardSpikeSize*2.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*1.5, top+standardSpikeSize*2.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*.5, top+standardSpikeSize*2.5], Spike.ROTATIONS.TOP, deathCB))

      square.addObject(new Obstacle([left, top+standardDist*3.5], standardDist*3.25, standardSize)) // LAST PART PLATEFORM

      square.addObject(new Obstacle([left, top+standardDist*1.6], standardDist*2, standardSize*2.25)) // LAST TOP LEFT STRUCTURE

      
      // UTILS
      function shake(obj) {
            obj.playAnim(new Anim((prog, i)=>{if (prog==1) obj.rotation = (i%2)&&4}, -200))
      }



      // TEXT PROFILES
      const textProfile1_22px = CVS.render.textProfile1,
            textProfile2_16px = CVS.render.textProfile2,
            textProfile3_108px = CVS.render.textProfile3.update(TextStyles.getFontStyleDeclaration("monospace", "108px"))

      // TEXT
      const appearingText1 = square.addObject(new GameText(S.tuto8, [right+standardSize*4, centerY+standardDist*.1], textColor, textProfile2_16px, true))

      square.addObject(new GameText(S.msg2, [centerX, bottom+standardSize], textColor, textProfile2_16px))
      square.addObject(new GameText(S.tuto7, [centerX+standardDist*1.75, bottom-standardDist], textColor, textProfile2_16px))
      square.addObject(new GameText(S.msg3, [630,1124], textColor, textProfile2_16px))
      square.addObject(new GameText(S.left, [564,1084], textColor, textProfile2_16px))
      square.addObject(new GameText(S.up, [508,1081], textColor, textProfile2_16px))
      square.addObject(new GameText(S.up, [508,1000], textColor, textProfile2_16px))
      square.addObject(new GameText(S.left, [490,944], textColor, textProfile2_16px))
      square.addObject(new GameText(S.down, [401,970], textColor, textProfile2_16px))
      square.addObject(new GameText(S.down, [431,1012], textColor, textProfile2_16px))
      square.addObject(new GameText(S.down, [415,1054], textColor, textProfile2_16px))
      square.addObject(new GameText(S.down, [431,1122], textColor, textProfile2_16px))
      square.addObject(new GameText(S.up, [410,1203], textColor, textProfile2_16px))
      square.addObject(new GameText(S.up, [450,1203], textColor, textProfile2_16px))
      square.addObject(new GameText(S.msg4, [430,1288], textColor, textProfile2_16px))
      square.addObject(new GameText(S.msg5, [140,1130], textColor, textProfile2_16px))


      ;[
            square.addObject(new GameText(S.hey, [619,1024], textColor, textProfile3_108px)),
            square.addObject(new GameText(S.tuto9, [180,1292], textColor, textProfile2_16px)),
            square.addObject(new GameText(S.huh, [165,1403], textColor, textProfile3_108px)),
      ].forEach(el=>shake(el.obj))


      // INTERACTIONS
      
      // Fading text
      square.addObject(Collision.createAreaEnter([[535, 1300], [696,1350]], ()=>appearingText1.smoothFade(GameText.FADINGS.IN, 500), null, ()=>appearingText1.smoothFade(GameText.FADINGS.OUT, 500)))
      

      // INTERACTIONS
      // End
      const endText = square.addObject(new GameText(S.end, [left+standardSize/2+2, top+standardSize/2+2], GameText.DEFAULT_END_COLOR, textProfile1_22px, true))
      endText.obj.playAnim(new Anim(prog=>endText.obj.rotation = prog*360, -1000))
      square.addObject(Collision.createEnd([[left, top],[left+standardSize*1.5, top+standardSize*1.5]], ()=>{
            const transitionTime = 4000
            gameManager.progress = LEVEL
            gameManager.player.multipleCinematicMoves(transitionTime, [84,838], [276,814], [334,869], [444,831], [556,867], [698,816], gameManager.squares[LEVEL].spawnPos)
            
            setTimeout(()=>{
                  gameManager.playSong(LEVEL)
                  gameManager.CVS.centerViewTo(nextSquare.obj.getCenter(), 2000)

            }, transitionTime+500)
      }))

}