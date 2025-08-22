function getLevel2Declaration(square, gameManager) {
    const player = gameManager.player, obj = square.obj, CVS = gameManager.CVS, LEVEL = 2, nextSquare = gameManager.squares[LEVEL],
          [[left, top], [right, bottom]] = obj.getBounds(), [centerX, centerY] = obj.getCenter(), size = right-left,
          standardDist = 75, standardSize = 25,
          textColor = [135, 206, 235, 0]

    // SET SPAWNPOS
    square.spawnPos = [left+standardSize, centerY-standardSize]

    // OBSTACLES
    square.addObject(new Obstacle([left+standardSize*1.5, centerY], standardSize, size/2)) // BOTTOM BIG WALL AT SPAWN
    square.addObject(new Obstacle([left+standardSize*1.5, top], standardSize, size/2.25)) // TOP BIG WALL AT SPAWN

    square.addObject(new Spike([centerX, centerY], null, Spike.GET_DEFAULT_DEATH_COLLISION_CB(square.spawnPos)))


    // TEXT PROFILES
    const textProfile1_22px = CVS.render.textProfile1,
          textProfile2_16px = CVS.render.textProfile2

    // TEXT
    const appearingText1 = square.addObject(new GameText(S.easterEgg1, [left+standardSize*0.85, top+standardSize], textColor, textProfile2_16px, true))

    // INTERACTIONS
    
    // Fading text
    square.addObject(Collision.createAreaEnter([[left, top], [left+standardSize*2, top+standardDist]], ()=>appearingText1.smoothFade(GameText.FADINGS.IN, 500), null, ()=>appearingText1.smoothFade(GameText.FADINGS.OUT, 500)))
    

    // INTERACTIONS
    // End
    //square.addObject(Collision.createEnd([[right-standardSize, bottom-standardSize],[right, bottom]], ()=>{
    //    gameManager.progress = LEVEL
    //    player.obj.moveTo(gameManager.squares[LEVEL].spawnPos, 2000, Anim.easeOutQuad)
    //}))





}