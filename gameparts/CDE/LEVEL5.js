function getLevel5Declaration(square, gameManager) {
    const player = gameManager.player, obj = square.obj, CVS = gameManager.CVS, LEVEL = 5, nextSquare = gameManager.squares[LEVEL],
          [[left, top], [right, bottom]] = obj.getBounds(), [centerX, centerY] = obj.getCenter(), size = right-left,
          standardDist = 75, standardSize = 25, standardSpikeSize = Spike.DEFAULT_HEIGHT, strictSpikeSize = Spike.DEFAULT_WIDTH
          textColor = [135, 206, 235, 0]

      // SET SPAWNPOS
      square.spawnPos = [left+standardSize, top+standardSize]
      const deathCB = Spike.GET_DEFAULT_DEATH_COLLISION_CB(square.spawnPos), orbCB = Orb.GET_DEFAULT_ORB_COLLISION_CB(), boostOrb_radius = 17

      // OBSTACLES
      square.addObject(new Obstacle([left, top+standardSize*2], standardDist*2, standardSize)) // SMALL SPAWN BLOCK

      square.addObject(new Orb([left+standardDist*1.9, top+standardSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB(100, 0), 15, Color.hotpink))

      square.addObject(new Spike([left+standardSpikeSize*.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*1.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*2.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*3.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*4.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*7.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*7.5+strictSpikeSize, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*7.5-strictSpikeSize, top-strictSpikeSize/2], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Spike([left+standardSpikeSize*5, top+standardSpikeSize*1.025], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*6, top+standardSpikeSize*1.025], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*7, top+standardSpikeSize*1.35], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*8, top+standardSpikeSize*2.5], Spike.ROTATIONS.TOP, deathCB))
      
      square.addObject(new Spike([left+standardSpikeSize*9, top+standardSpikeSize/1.5], Spike.ROTATIONS.TOP, deathCB))

      square.addObject(new Spike([left+standardSpikeSize*11, top+standardSpikeSize/2], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*10.45, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*12, top], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Orb([centerX+standardDist*2, top+standardSize], ()=>player.boost([1200, 100]), 15, Color.lime))

      square.addObject(new Spike([left+standardSpikeSize*13.25, top+standardSpikeSize/2], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*14.25, top+standardSpikeSize/2], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*15.25, top+standardSpikeSize/2], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*16.25, top+standardSpikeSize/2], Spike.ROTATIONS.TOP, deathCB))

      square.addObject(new Spike([right-standardSpikeSize*0.5, top+standardDist*3], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*1.5, top+standardDist*3], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*2.5, top+standardDist*3], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*3.5, top+standardDist*3], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*4, top+standardDist*3], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*6.5, top+standardDist*3], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*6.5, top+standardDist*3-standardSpikeSize], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*6.5, top+standardDist*3-standardSpikeSize*2], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*6.5, top+standardDist*3+standardSpikeSize], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*6.5, top+standardDist*3+standardSpikeSize*2], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*6.5, top+standardDist*3+standardSpikeSize*3-0.25], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*5.5, top+standardDist*3+standardSpikeSize*3-0.25], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*4.5, top+standardDist*3+standardSpikeSize*3-0.25], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*3.5, top+standardDist*3+standardSpikeSize*3-0.25], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*2.5, top+standardDist*3+standardSpikeSize*3-0.25], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*1.5, top+standardDist*3+standardSpikeSize*2.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*0.75, top+standardDist*3+standardSpikeSize*2.5], Spike.ROTATIONS.TOP, deathCB))

      square.addObject(new Obstacle([left+standardDist*4, top+standardSize*2], standardDist*3.75, standardSize*5)) // BIG NEXT BLOCK

      square.addObject(new Orb([right-standardSize/2, top+standardSize*8], ()=>player.boost([-1200, 100]), boostOrb_radius, Color.lime))
      square.addObject(new Orb([right-standardDist*2.5, top+standardSize*8], ()=>player.boost([625, -500]), boostOrb_radius, Color.lime))
      square.addObject(new Orb([right-standardDist*2, top+standardSize*12], ()=>player.boost([1000, 500]), boostOrb_radius, Color.lime))

      square.addObject(new Obstacle([left+standardDist*4, top+standardSize*15], standardDist*4, standardSize))

      square.addObject(new Spike([right-standardSpikeSize*7.5, top+standardDist*3+standardSpikeSize*3.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*7.5, top+standardDist*3+standardSpikeSize*2.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*7.5, top+standardDist*3+standardSpikeSize*1.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*7.5, top+standardDist*3+standardSpikeSize*0.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*7.5, top+standardDist*3+standardSpikeSize*-0.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*7.5, top+standardDist*3+standardSpikeSize*-1.75], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*8.25, top+standardDist*3+standardSpikeSize*3.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9, top+standardDist*3+standardSpikeSize*3.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9, top+standardDist*3+standardSpikeSize*2.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9, top+standardDist*3+standardSpikeSize*1.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9, top+standardDist*3+standardSpikeSize*-0.25], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9, top+standardDist*3+standardSpikeSize*-1.25], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9, top+standardDist*3+standardSpikeSize*-2.25], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9-strictSpikeSize, top+standardDist*3+standardSpikeSize*1], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*9-strictSpikeSize, top+standardDist*3+standardSpikeSize*-0.75], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Orb([1124,1143], ()=>player.boost([-550, 800]), boostOrb_radius, Color.lime))
      square.addObject(new Orb([1019,1040], ()=>player.boost([-600, 100]), boostOrb_radius, Color.lime))

      square.addObject(new Obstacle([left, top+standardSize*9], standardDist, standardSize))
      square.addObject(new Obstacle([left, top+standardSize*3.5], standardDist*3.5, standardSize))
      square.addObject(new Obstacle([left+standardDist*3, top+standardSize*4.5], standardDist, standardSize))

      square.addObject(new Spike([left+strictSpikeSize*.5, top+standardSpikeSize*4.5], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*1.5, top+standardSpikeSize*4], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*2.5, top+standardSpikeSize*5.5], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([1120,1161], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([1085,1150], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([1043,1150], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([1018,1144], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([998,1135], Spike.ROTATIONS.TOP, deathCB))




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


      ;[
            //square.addObject(new GameText(S.hey, [619,1024], textColor, textProfile3_108px)),
      ].forEach(el=>shake(el.obj))


      // INTERACTIONS
      
      // Fading text
      //square.addObject(Collision.createAreaEnter([[535, 1300], [696,1350]], ()=>appearingText1.smoothFade(GameText.FADINGS.IN, 500), null, ()=>appearingText1.smoothFade(GameText.FADINGS.OUT, 500)))
      

      // INTERACTIONS
      // End
      const endText = square.addObject(new GameText(S.end, [left+standardSize/2+2, bottom-standardSize/2-2], GameText.DEFAULT_END_COLOR, textProfile1_22px, true))
      endText.obj.playAnim(new Anim(prog=>endText.obj.rotation = prog*360, -1000))
      //square.addObject(Collision.createEnd([[left, top],[left+standardSize*1.5, top+standardSize*1.5]], ()=>{
      //      const transitionTime = 4000
      //      gameManager.progress = LEVEL
      //      gameManager.player.multipleCinematicMoves(transitionTime, [84,838], [276,814], [334,869], [444,831], [556,867], [698,816], gameManager.squares[LEVEL].spawnPos)
      //      
      //      setTimeout(()=>{
      //            gameManager.playSong(LEVEL)
      //            gameManager.CVS.centerViewTo(nextSquare.obj.getCenter(), 2000)

      //      }, transitionTime+500)
      //}))

}