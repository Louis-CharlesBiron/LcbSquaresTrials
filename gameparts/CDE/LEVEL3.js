function getLevel3Declaration(square, gameManager) {
    const player = gameManager.player, obj = square.obj, CVS = gameManager.CVS, LEVEL = 3, nextSquare = gameManager.squares[LEVEL],
          [[left, top], [right, bottom]] = obj.getBounds(), [centerX, centerY] = obj.getCenter(), size = right-left,
          standardDist = 75, standardSize = 25, standardSpikeSize = Spike.DEFAULT_HEIGHT, strictSpikeSize = Spike.DEFAULT_WIDTH
          textColor = [135, 206, 235, 0]

          console.log(square, left, top, right, bottom)

      // SET SPAWNPOS
      square.spawnPos = [right-standardSize, bottom-standardDist]
      const deathCB = Spike.GET_DEFAULT_DEATH_COLLISION_CB(square.spawnPos), orbCB = Orb.GET_DEFAULT_ORB_COLLISION_CB()

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

      square.addObject(new Orb([left+standardSpikeSize*.5, bottom-standardSpikeSize*2], orbCB))
      square.addObject(new Orb([left+standardSpikeSize*1.5, bottom-standardSpikeSize*2], orbCB))
      square.addObject(new Orb([left+standardSpikeSize*2.5, bottom-standardSpikeSize*2], orbCB))
      square.addObject(new Orb([left+standardSpikeSize*3.5, bottom-standardSpikeSize*2], orbCB))
      square.addObject(new Orb([left+standardSpikeSize*4.5, bottom-standardSpikeSize*2], orbCB))
      square.addObject(new Orb([left+standardSpikeSize*5.5, bottom-standardSpikeSize*2], orbCB))
      square.addObject(new Orb([left+standardSpikeSize*6.5, bottom-standardSpikeSize*2], orbCB))
      square.addObject(new Orb([left+standardSpikeSize*7.5, bottom-standardSpikeSize*2], orbCB))
      square.addObject(new Orb([left+standardSpikeSize*8.5, bottom-standardSpikeSize*2], orbCB))
      square.addObject(new Orb([left+standardSpikeSize*9.5, bottom-standardSpikeSize*2], orbCB))
      square.addObject(new Orb([left+standardSpikeSize*10.5, bottom-standardSpikeSize*2], orbCB))
      square.addObject(new Orb([left+standardSpikeSize*11.5, bottom-standardSpikeSize*2], orbCB))
      square.addObject(new Orb([left+standardSpikeSize*12.5, bottom-standardSpikeSize*2], orbCB))
      square.addObject(new Orb([left+standardSpikeSize*13.5, bottom-standardSpikeSize*2], orbCB))
      square.addObject(new Orb([left+standardSpikeSize*14.5, bottom-standardSpikeSize*2], orbCB))

      square.addObject(new Spike([left+strictSpikeSize/2, bottom-standardSpikeSize*7], null, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*1.5, bottom-standardSpikeSize*7], null, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*2.5, bottom-standardSpikeSize*7], null, deathCB))
      square.addObject(new Spike([left+strictSpikeSize*3.5, bottom-standardSpikeSize*7], null, deathCB))

      square.addObject(new Spike([left+standardSpikeSize*3.5,  bottom-standardSpikeSize*4.2], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*4.5,  bottom-standardSpikeSize*4.2], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*5.5,  bottom-standardSpikeSize*4.2], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*6.5,  bottom-standardSpikeSize*4.2], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*7.5,  bottom-standardSpikeSize*4.2], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*8.5,  bottom-standardSpikeSize*4.2], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*9.5,  bottom-standardSpikeSize*4.2], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*10.5, bottom-standardSpikeSize*4.2], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*11.5, bottom-standardSpikeSize*4.2], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*12.5, bottom-standardSpikeSize*4.2], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*13.5, bottom-standardSpikeSize*4.2], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*14.5, bottom-standardSpikeSize*4.2], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*15.5, bottom-standardSpikeSize*4.2], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*16.5, bottom-standardSpikeSize*4.2], null, deathCB))

      square.addObject(new Orb([1870, 250], orbCB))

      square.addObject(new Spike([left+standardSpikeSize, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*2, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*3, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*5, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*6, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*9, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*10, top+standardSize*0.75], null, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*11, top], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([left+standardSpikeSize*12, top+standardSize*0.75], null, deathCB))

      square.addObject(new Obstacle([left+standardSize*3, bottom-standardSize*8.5], standardSize, standardSize*3)) // BLOCKER RIGHT
      square.addObject(new Obstacle([left, bottom-standardSize*8.5], standardSize*4.5, standardSize)) // BLOCKER TOP

      square.addObject(new Obstacle([left, top+standardSize*2], standardSize*5, standardSize)) // TOP LEFT PLATEFORM
      square.addObject(new Obstacle([centerX-standardDist, top], standardSize, standardSize*5)) // TOP RIGHT BLOCKER
      square.addObject(new Obstacle([centerX, top+standardSize*2], standardSize*5.5, standardSize)) // TOP CENTER PLATEFORM
      square.addObject(new Obstacle([centerX+standardSize*4.5, top+standardSize*2], standardSize, standardSize*8))

      square.addObject(new Obstacle([centerX+standardDist*1.5, centerY-standardDist], standardSize*5.5, standardSize)) // TOP CENTER PLATEFORM

      square.addObject(new Spike([2170, 160], null, deathCB))
      square.addObject(new Spike([2170, 160+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([2220, 110], null, deathCB))
      square.addObject(new Spike([2220, 110+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([2200, 210], null, deathCB))
      square.addObject(new Spike([2200, 210+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([2260, 190], null, deathCB))
      square.addObject(new Spike([2260, 190+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([2166, 240], null, deathCB))
      square.addObject(new Spike([2166, 240+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([2275, 270], null, deathCB))
      square.addObject(new Spike([2275, 270+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      
      square.addObject(new Spike([1925, 270], null, deathCB))
      square.addObject(new Spike([1925, 270+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([2075, 270], null, deathCB))
      square.addObject(new Spike([2075, 270+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([1845, 350], null, deathCB))
      square.addObject(new Spike([1845, 350+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([2175, 350], null, deathCB))
      square.addObject(new Spike([2175, 350+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([1900, 400], null, deathCB))
      square.addObject(new Spike([1900, 400+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([2115, 400], null, deathCB))
      square.addObject(new Spike([2115, 400+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([1950, 410], null, deathCB))
      square.addObject(new Spike([1950, 410+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([2059, 410], null, deathCB))
      square.addObject(new Spike([2059, 410+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      square.addObject(new Spike([2000, 420], null, deathCB))
      square.addObject(new Spike([2000, 420+standardSpikeSize], Spike.ROTATIONS.BOTTOM, deathCB))
      
      // UTILS
      function shake(obj) {
            obj.playAnim(new Anim((prog, i)=>{if (prog==1) obj.rotation = (i%2)&&4}, -200))
      }



      // TEXT PROFILES
      const textProfile1_22px = CVS.render.textProfile1,
            textProfile2_16px = CVS.render.textProfile2,
            textProfile3_108px = CVS.render.textProfile3.update(TextStyles.getFontStyleDeclaration("monospace", "108px"))

      // TEXT
      const appearingText1 = square.addObject(new GameText(S.tuto6, [centerX, bottom+standardSize], textColor, textProfile2_16px, true)),
            appearingText2 = square.addObject(new GameText(S.msg1, [centerX, top-standardSize], textColor, textProfile2_16px, true))

      ;[
            square.addObject(new GameText(S.huh, [1750, 350], textColor, textProfile3_108px)),
            square.addObject(new GameText(S.huh, [2222, 480], textColor, textProfile3_108px)),
            square.addObject(new GameText(S.hey, [2000, 350], textColor, textProfile3_108px)),
            square.addObject(new GameText(S.doubleArrow, [1870, 170], textColor, textProfile1_22px)),
            square.addObject(new GameText(S.up, [1850, 530], textColor, textProfile1_22px)),
            square.addObject(new GameText(S.up, [1845, 490], textColor, textProfile1_22px)),
            square.addObject(new GameText(S.up, [1975, 220], textColor, textProfile1_22px)),
            square.addObject(new GameText(S.right, [1975, 132], textColor, textProfile1_22px)),
            square.addObject(new GameText(S.down, [2170, 125], textColor, textProfile1_22px)),
            square.addObject(new GameText(S.left, [2265, 640], textColor, textProfile1_22px))
      ].forEach(el=>shake(el.obj))

      // INTERACTIONS
      
      // Fading text
      square.addObject(Collision.createAreaEnter([[right-standardDist, bottom-standardSize*3], [right, bottom]], ()=>appearingText1.smoothFade(GameText.FADINGS.IN, 500), null, ()=>appearingText1.smoothFade(GameText.FADINGS.OUT, 500)))
      square.addObject(Collision.createAreaEnter([[left, top], [left+standardDist*2, top+standardDist]], ()=>appearingText2.smoothFade(GameText.FADINGS.IN, 500), null, ()=>appearingText2.smoothFade(GameText.FADINGS.OUT, 500)))
      

      // INTERACTIONS
      // End
      const endText = square.addObject(new GameText(S.end, [2215, 300], GameText.DEFAULT_END_COLOR, textProfile1_22px))
      endText.obj.playAnim(new Anim(prog=>endText.obj.rotation = prog*360, -1000))
      square.addObject(Collision.createEnd([[2175, 290],[2240, 330]], ()=>{
          gameManager.progress = LEVEL
          player.obj.moveTo(gameManager.squares[LEVEL].spawnPos, 2000, Anim.easeOutQuad)
      }))



}