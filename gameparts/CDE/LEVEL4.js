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
      square.addObject(new Obstacle([centerX-standardSize*3, bottom-standardDist*2.5], standardSize, standardDist*2.5)) // SPAWN LEFT BLOCKER

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
      square.addObject(new Spike([right-standardSpikeSize*12.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*13.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*14.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*15.5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*16.5, top], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Spike([right-standardSpikeSize*6, top+standardSpikeSize*8.2], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*7, top+standardSpikeSize*9], Spike.ROTATIONS.TOP, deathCB))
      square.addObject(new Spike([right-standardSpikeSize*8, top+standardSpikeSize*9], Spike.ROTATIONS.TOP, deathCB))




      square.addObject(new Orb([left+standardSpikeSize*.5, bottom-standardSpikeSize*2], orbCB))

      
      // UTILS
      function shake(obj) {
            obj.playAnim(new Anim((prog, i)=>{if (prog==1) obj.rotation = (i%2)&&4}, -200))
      }



      // TEXT PROFILES
      const textProfile1_22px = CVS.render.textProfile1,
            textProfile2_16px = CVS.render.textProfile2,
            textProfile3_108px = CVS.render.textProfile3.update(TextStyles.getFontStyleDeclaration("monospace", "108px"))

      // TEXT
      const appearingText1 = square.addObject(new GameText(S.tuto6, [centerX, bottom+standardSize], textColor, textProfile2_16px, true))

      // INTERACTIONS
      
      // Fading text
      square.addObject(Collision.createAreaEnter([[right-standardDist, bottom-standardSize*3], [right, bottom]], ()=>appearingText1.smoothFade(GameText.FADINGS.IN, 500), null, ()=>appearingText1.smoothFade(GameText.FADINGS.OUT, 500)))
      

      // INTERACTIONS
      // End
      const endText = square.addObject(new GameText(S.end, [left, top], GameText.DEFAULT_END_COLOR, textProfile1_22px, true))
      endText.obj.playAnim(new Anim(prog=>endText.obj.rotation = prog*360, -1000))
      //square.addObject(Collision.createEnd([[2175, 290],[2240, 330]], ()=>{
      //    gameManager.progress = LEVEL
      //    player.obj.moveTo(gameManager.squares[LEVEL].spawnPos, 2000, Anim.easeOutQuad)
      //}))



}