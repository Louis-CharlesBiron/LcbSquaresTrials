function getLevel3Declaration(square, gameManager) {
    const player = gameManager.player, obj = square.obj, CVS = gameManager.CVS, LEVEL = 3, nextSquare = gameManager.squares[LEVEL],
          [[left, top], [right, bottom]] = obj.getBounds(), [centerX, centerY] = obj.getCenter(), size = right-left,
          standardDist = 75, standardSize = 25, standardSpikeSize = Spike.DEFAULT_HEIGHT, strictSpikeSize = Spike.DEFAULT_WIDTH
          textColor = [135, 206, 235, 0]

      // SET SPAWNPOS
      square.spawnPos = [right-standardSize, bottom-standardDist]
      const deathCB = Spike.GET_DEFAULT_DEATH_COLLISION_CB(square.spawnPos)

      // OBSTACLES
      square.addObject(new Obstacle([right-standardSize*2, bottom-standardSize], standardSize*2, standardSize)) // SMALL SPAWN BLOCK
      square.addObject(new Obstacle([left+standardSize*2, bottom-standardDist*1.5], size-standardSize*2, standardSize)) // ROOF AT SPAWN

      square.addObject(new Spike([left+standardSpikeSize/2, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*1.5, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*2.5, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*3.5, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*4.5, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*5.5, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*6.5, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*7.5, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*8.5, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*9.5, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*10.5, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*11.5, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*12.5, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*13.5, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*14.5, bottom-standardSpikeSize], null, deathCB))

      square.addObject(new Orb([left+standardSpikeSize*.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))
      square.addObject(new Orb([left+standardSpikeSize*1.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))
      square.addObject(new Orb([left+standardSpikeSize*2.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))
      square.addObject(new Orb([left+standardSpikeSize*3.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))
      square.addObject(new Orb([left+standardSpikeSize*4.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))
      square.addObject(new Orb([left+standardSpikeSize*5.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))
      square.addObject(new Orb([left+standardSpikeSize*6.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))
      square.addObject(new Orb([left+standardSpikeSize*7.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))
      square.addObject(new Orb([left+standardSpikeSize*8.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))
      square.addObject(new Orb([left+standardSpikeSize*9.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))
      square.addObject(new Orb([left+standardSpikeSize*10.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))
      square.addObject(new Orb([left+standardSpikeSize*11.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))
      square.addObject(new Orb([left+standardSpikeSize*12.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))
      square.addObject(new Orb([left+standardSpikeSize*13.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))
      square.addObject(new Orb([left+standardSpikeSize*14.5, bottom-standardSpikeSize*2], Orb.GET_DEFAULT_ORB_COLLISION_CB()))

      square.addObject(new Obstacle([left+standardSize*3, bottom-standardSize*8.5], standardSize, standardSize*3)) // BLOCKER RIGHT
      square.addObject(new Obstacle([left, bottom-standardSize*8.5], standardSize*3, standardSize)) // BLOCKER TOP
      




      // TEXT PROFILES
      const textProfile1_22px = CVS.render.textProfile1,
            textProfile2_16px = CVS.render.textProfile2

      // TEXT
      const appearingText1 = square.addObject(new GameText(S.tuto6, [centerX, bottom+standardSize], textColor, textProfile2_16px, true))


      // INTERACTIONS
      
      // Fading text
      square.addObject(Collision.createAreaEnter([[right-standardDist, bottom-standardSize*3], [right, bottom]], ()=>appearingText1.smoothFade(GameText.FADINGS.IN, 500), null, ()=>appearingText1.smoothFade(GameText.FADINGS.OUT, 500)))
      

      // INTERACTIONS
      // End
      //square.addObject(Collision.createEnd([[left+standardDist, top],[left+standardDist*1.5, top+standardDist*1.5]], ()=>{
      //    gameManager.progress = LEVEL
      //    player.obj.moveTo(gameManager.squares[LEVEL].spawnPos, 2000, Anim.easeOutQuad)
      //}))



}