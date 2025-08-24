function getLevel3Declaration(square, gameManager) {
    const player = gameManager.player, obj = square.obj, CVS = gameManager.CVS, LEVEL = 3, nextSquare = gameManager.squares[LEVEL],
          [[left, top], [right, bottom]] = obj.getBounds(), [centerX, centerY] = obj.getCenter(), size = right-left,
          standardDist = 75, standardSize = 25, standardSpikeSize = Spike.DEFAULT_HEIGHT, strictSpikeSize = Spike.DEFAULT_WIDTH
          textColor = [135, 206, 235, 0]

      // SET SPAWNPOS
      square.spawnPos = [left+standardDist*2, bottom-standardSize*2]
      const deathCB = Spike.GET_DEFAULT_DEATH_COLLISION_CB(square.spawnPos)

      // OBSTACLES
      square.addObject(new Obstacle([left+standardSize*1.5, centerY], standardSize, size/2)) // BOTTOM BIG WALL AT SPAWN
      square.addObject(new Spike([left+standardSize*3.5, centerY-standardSpikeSize], null, deathCB))



      




      // TEXT PROFILES
      const textProfile1_22px = CVS.render.textProfile1,
            textProfile2_16px = CVS.render.textProfile2

      // TEXT
      const appearingText1 = square.addObject(new GameText(S.easterEgg1, [left+standardSize*0.85, top+standardSize], textColor, textProfile2_16px, true))

      square.addObject(new GameText(S.tuto5, [left+standardDist*2.75, centerY-standardDist*1.5], textColor, textProfile2_16px))


      // INTERACTIONS
      
      // Fading text
      square.addObject(Collision.createAreaEnter([[left, top], [left+standardSize*2, top+standardDist]], ()=>appearingText1.smoothFade(GameText.FADINGS.IN, 500), null, ()=>appearingText1.smoothFade(GameText.FADINGS.OUT, 500)))
      

      // INTERACTIONS
      // End
      square.addObject(Collision.createEnd([[left+standardDist, top],[left+standardDist*1.5, top+standardDist*1.5]], ()=>{
          gameManager.progress = LEVEL
          player.obj.moveTo(gameManager.squares[LEVEL].spawnPos, 2000, Anim.easeOutQuad)
      }))



}