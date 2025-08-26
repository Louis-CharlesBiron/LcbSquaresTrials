function getLevel4Declaration(square, gameManager) {
    const player = gameManager.player, obj = square.obj, CVS = gameManager.CVS, LEVEL = 4, nextSquare = gameManager.squares[LEVEL],
          [[left, top], [right, bottom]] = obj.getBounds(), [centerX, centerY] = obj.getCenter(), size = right-left,
          standardDist = 75, standardSize = 25, standardSpikeSize = Spike.DEFAULT_HEIGHT, strictSpikeSize = Spike.DEFAULT_WIDTH
          textColor = [135, 206, 235, 0]

      // SET SPAWNPOS
      square.spawnPos = [right-standardSize, bottom-standardDist]
      const deathCB = Spike.GET_DEFAULT_DEATH_COLLISION_CB(square.spawnPos), orbCB = Orb.GET_DEFAULT_ORB_COLLISION_CB()

      // OBSTACLES
      square.addObject(new Obstacle([right-standardSize*2, bottom-standardSize], standardSize*2, standardSize)) // SMALL SPAWN BLOCK

      square.addObject(new Spike([left+standardSpikeSize/2, bottom-standardSpikeSize], null, deathCB))

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
      const endText = square.addObject(new GameText(S.end, [left, top], GameText.DEFAULT_END_COLOR, textProfile1_22px))
      endText.obj.playAnim(new Anim(prog=>endText.obj.rotation = prog*360, -1000))
      //square.addObject(Collision.createEnd([[2175, 290],[2240, 330]], ()=>{
      //    gameManager.progress = LEVEL
      //    player.obj.moveTo(gameManager.squares[LEVEL].spawnPos, 2000, Anim.easeOutQuad)
      //}))



}