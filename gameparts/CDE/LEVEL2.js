function getLevel2Declaration(square, gameManager) {
    const player = gameManager.player, obj = square.obj, CVS = gameManager.CVS, LEVEL = 2, nextSquare = gameManager.squares[LEVEL],
          [[left, top], [right, bottom]] = obj.getBounds(), [centerX, centerY] = obj.getCenter(), size = right-left,
          standardDist = 75, standardSize = 25, standardSpikeSize = Spike.DEFAULT_HEIGHT, strictSpikeSize = Spike.DEFAULT_WIDTH
          textColor = [135, 206, 235, 0]

      // SET SPAWNPOS
      square.spawnPos = [left+standardSize, centerY-standardSize]
      const deathCB = Spike.GET_DEFAULT_DEATH_COLLISION_CB(square.spawnPos)

      // OBSTACLES
      square.addObject(new Obstacle([left+standardSize*1.5, centerY], standardSize, size/2)) // BOTTOM BIG WALL AT SPAWN
      square.addObject(new Obstacle([left+standardSize*1.5, top], standardSize, size/2.25)) // TOP BIG WALL AT SPAWN

      square.addObject(new Obstacle([left+standardSize*1.5, centerY], standardDist*3, standardSize)) // FIRST SPIKY PLATEFORM
      square.addObject(new Spike([left+standardSize*3.5, centerY-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSize*3.5+standardSpikeSize, centerY-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSize*3.5+standardSpikeSize*2, centerY-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSize*3.5+standardSpikeSize*3, centerY-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([left+standardSize*3.5+standardSpikeSize*4, centerY-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([centerX, centerY], null, deathCB))
      square.addObject(new Spike([centerX, centerY+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Obstacle([left+standardSize*3.5, centerY+standardDist], standardDist*3, standardSize)) // SECOND SPIKY PLATEFORM
      square.addObject(new Spike([left+standardSize*4.25, centerY+standardSpikeSize*1.15], null, deathCB))
      square.addObject(new Spike([left+standardSize*4.25+standardSpikeSize, centerY+standardSpikeSize*1.15], null, deathCB))
      square.addObject(new Spike([left+standardSize*4+standardSpikeSize*3, centerY+standardSpikeSize*1.15], null, deathCB))
      square.addObject(new Spike([left+standardSize*4+standardSpikeSize*4, centerY+standardSpikeSize*1.15], null, deathCB))

      square.addObject(new Obstacle([left+standardSize*5, centerY+standardDist*2], standardSize, standardDist*2)) // PILLARS SPIKY
      square.addObject(new Spike([left+standardSize*5+standardSize/2, centerY+standardDist+standardSize], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Obstacle([left+standardSize*8, centerY+standardDist*2.65], standardSize, standardDist*1.35)) // PILLARS SPIKY
      square.addObject(new Spike([left+standardSize*8+standardSize/2, centerY+standardDist+standardSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSize*8+standardSize/2, centerY+standardDist+standardDist*1.25], null, deathCB))

      square.addObject(new Obstacle([left+standardSize*11, centerY+standardDist*2], standardSize, standardDist*2)) // PILLARS SPIKY
      square.addObject(new Spike([left+standardSize*11+standardSize/2, centerY+standardDist+standardSize], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Obstacle([centerX+standardSize/2-1, centerY-standardDist*3+standardSize], standardSize, standardDist*4)) // MIDDLE WALL
      square.addObject(new Obstacle([left+standardSize*2, centerY-standardDist*3+standardSize], standardDist*2, standardSize)) // TOP THING

      square.addObject(new Spike([left+standardSize*8.5, top+standardDist], null, deathCB))
      square.addObject(new Spike([left+standardSize*8.5, top+standardDist+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSize*8.5+strictSpikeSize, top+standardDist], null, deathCB))
      square.addObject(new Spike([left+standardSize*8.5+strictSpikeSize, top+standardDist+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSize*8.5+strictSpikeSize*2, top+standardDist], null, deathCB))
      square.addObject(new Spike([left+standardSize*8.5+strictSpikeSize*2, top+standardDist+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSize*8.625+strictSpikeSize*3, top+standardDist], null, deathCB))
      square.addObject(new Spike([left+standardSize*8.625+strictSpikeSize*3, top+standardDist+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Obstacle([centerX+standardSize*2, centerY], standardDist, standardSize)) // FLOATING PLATEFORMS
      square.addObject(new Spike([centerX+standardDist+strictSpikeSize/2, centerY-standardSpikeSize], null, deathCB))

      square.addObject(new Obstacle([centerX+standardSize*3, centerY], standardDist, standardSize*8)) // FLOATING PLATEFORM BLOCKER

      square.addObject(new Obstacle([centerX+standardSize, centerY-standardDist*1.75], standardDist*3.45, standardSize)) // FLOATING PLATEFORMS TOP
      square.addObject(new Spike([centerX+standardDist*3-strictSpikeSize*0.3,  centerY+strictSpikeSize-standardDist*1.82], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([centerX+standardDist*3+strictSpikeSize*1.15, centerY+strictSpikeSize-standardDist*1.82], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Obstacle([centerX+standardSize*2+standardDist*2, centerY], standardDist, standardSize)) // FLOATING PLATEFORMS
      square.addObject(new Spike([centerX+standardDist*3+strictSpikeSize/2, centerY-standardSpikeSize], null, deathCB))
      
      square.addObject(new Spike([centerX+standardDist-strictSpikeSize*0.3,  centerY+strictSpikeSize-standardDist*1.82], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([centerX+standardDist+strictSpikeSize*1.15, centerY+strictSpikeSize-standardDist*1.82], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Obstacle([right-standardDist*3, top], standardDist*3, standardDist*1.675)) // FLOATING PLATEFORMS TOP
      square.addObject(new Spike([centerX+standardDist*3+strictSpikeSize*1.15, centerY+strictSpikeSize-standardDist*2.75], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Spike([centerX+standardDist*0.7, top+standardDist*1.78], null, deathCB))

      square.addObject(new Spike([centerX+standardSpikeSize*1.85, top+standardDist*0.55], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*1.85, top+standardDist*0.55+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))

      square.addObject(new Spike([centerX+standardSpikeSize*0.75, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*1.75, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*2.75, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*3.75, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*4.75, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*5.75, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*6.75, bottom-standardSpikeSize], null, deathCB))
      square.addObject(new Spike([centerX+standardSpikeSize*7.75, bottom-standardSpikeSize], null, deathCB))


      




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