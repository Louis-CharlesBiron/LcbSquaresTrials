function getLevel1Declaration(square, gameManager) {
    const player = gameManager.player, obj = square.obj, CVS = gameManager.CVS, LEVEL = 1, nextSquare = gameManager.squares[LEVEL],
          [[left, top], [right, bottom]] = obj.getBounds(), [centerX, centerY] = obj.getCenter(), size = right-left,
          standardDist = 75, standardSize = 25,
          textColor = [135, 206, 235, 0]

    // SET SPAWNPOS
    square.spawnPos = [centerX, bottom-standardDist*2]

    // SET CAMERA
    gameManager.CVS.centerViewAt(square.obj.getCenter())

    // OBSTACLES
    square.addObject(Obstacle.createFromCenter([centerX, bottom-100], standardSize*2, standardSize/2)) // CONCRETE THING AT START

    square.addObject(new Obstacle([left, bottom-40], size/3, 40)) // CONCRETE THING AT START

    square.addObject(new Obstacle([centerX-standardDist, centerY+standardDist*1.5], size/3.5, standardSize)) // MIDDLE PLATEFORM

    square.addObject(new Obstacle([left+standardDist, centerY-standardDist], size/1.5, standardSize)) // TOP-MIDDLE LONG PLATEFORM
    square.addObject(new Obstacle([left+standardDist, centerY-standardDist], standardSize, standardSize*3)) // LEFT DENT

    square.addObject(new Obstacle([right-standardSize, top+standardDist], -(size-standardDist/2-standardSize), standardSize))// BIG TOP PLATEFORM
    square.addObject(new Obstacle([right-standardDist*3.5, top+standardDist], standardSize, standardSize*4)) // TOP DENT
    square.addObject(new Obstacle([right-standardDist*5, top+standardDist], standardSize, standardSize*4)) // TOP DENT
    square.addObject(new Obstacle([right-standardDist*7, top+standardDist], standardSize, standardSize*4)) // TOP DENT
    square.addObject(new Obstacle([left+standardDist*5.25, centerY-standardDist], standardSize, -standardSize*3)) // BOTTOM DENT
    square.addObject(new Obstacle([left+standardDist*3.75, centerY-standardDist], standardSize, -standardSize*3)) // BOTTOM DENT
    square.addObject(new Obstacle([left+standardDist*2, centerY-standardDist], standardSize, -standardSize*3)) // BOTTOM DENT

    square.addObject(new Obstacle([left+standardDist*1, top+standardSize], standardSize, standardSize*2)) // VERY TOP DENT
    square.addObject(new Obstacle([left+standardDist*2, top+standardSize], standardSize, standardSize*2)) // VERY TOP DENT
    square.addObject(new Obstacle([left+standardDist*3, top+standardSize], standardSize, standardSize*2)) // VERY TOP DENT
    square.addObject(new Obstacle([left+standardDist*4, top+standardSize], standardSize, standardSize*2)) // VERY TOP DENT
    square.addObject(new Obstacle([left+standardDist*5, top+standardSize], standardSize, standardSize*2)) // VERY TOP DENT
    square.addObject(new Obstacle([left+standardDist*6, top+standardSize], standardSize, standardSize*2)) // VERY TOP DENT
    square.addObject(new Obstacle([left+standardDist*7, top+standardSize], standardSize, standardSize*2)) // VERY TOP DENT

    square.addObject(new Obstacle([left+standardDist*4.5+4, top], standardSize/1.5, standardSize*2)) // VERY TOP INVERTED DENT
    square.addObject(new Obstacle([left+standardDist*5.5+4, top], standardSize/1.5, standardSize*2)) // VERY TOP INVERTED DENT

    square.addObject(new Obstacle([right-standardSize*2, top+standardDist], standardSize, size-standardDist)) // FINAL TUNNEL

    // TEXT PROFILES
    const textProfile1_22px = CVS.render.textProfile1.update(TextStyles.getFontStyleDeclaration("monospace", "22px")),
          textProfile2_16px = CVS.render.textProfile2.update(TextStyles.getFontStyleDeclaration("monospace", "16px"))

    // TUTORIAL TEXT
    square.addObject(new GameText(S.tuto1, [centerX, bottom-standardDist*1.75], textColor, textProfile1_22px))

    square.addObject(new GameText(S.tuto2, [centerX-standardDist*1.5, bottom-standardDist], textColor, textProfile2_16px))

    square.addObject(new GameText(S.tuto3, [centerX+standardDist*1.4, centerY], textColor, textProfile2_16px))


    square.addObject(new GameText(S.down, [left+standardDist*1.7, centerY-standardDist*2.25], textColor, textProfile1_22px))
    square.addObject(new GameText(S.down, [left+standardDist*3.55, centerY-standardDist*2.25], textColor, textProfile1_22px))
    square.addObject(new GameText(S.down, [left+standardDist*5.05, centerY-standardDist*2.25], textColor, textProfile1_22px))

    square.addObject(new GameText(S.up, [left+standardDist*2.7,  centerY-standardDist*1.2], textColor, textProfile1_22px))
    square.addObject(new GameText(S.up, [left+standardDist*4.3, centerY-standardDist*1.2], textColor, textProfile1_22px))
    square.addObject(new GameText(S.up, [left+standardDist*6, centerY-standardDist*1.2], textColor, textProfile1_22px))

    square.addObject(new GameText(S.right, [left+standardDist*1.7, top+standardSize/1.5], textColor, textProfile1_22px))
    square.addObject(new GameText(S.right, [left+standardDist*2.7, top+standardSize/1.5], textColor, textProfile1_22px))
    square.addObject(new GameText(S.right, [left+standardDist*3.7, top+standardSize/1.5], textColor, textProfile1_22px))
    square.addObject(new GameText(S.right, [left+standardDist*6.7, top+standardSize/1.5], textColor, textProfile1_22px))

    square.addObject(new GameText(S.down, [left+standardDist*7.85, top+standardSize/1.5], textColor, textProfile1_22px))
    square.addObject(new GameText(S.down, [left+standardDist*7.85, top+standardSize*5], textColor, textProfile1_22px))
    square.addObject(new GameText(S.down, [left+standardDist*7.85, top+standardSize*10], textColor, textProfile1_22px))
    square.addObject(new GameText(S.down, [left+standardDist*7.85, top+standardSize*15], textColor, textProfile1_22px))
    square.addObject(new GameText(S.down, [left+standardDist*7.85, top+standardSize*20], textColor, textProfile1_22px))

    const appearingText1 = square.addObject(new GameText(S.tuto4, [right-standardDist, top-standardSize*2], textColor, textProfile2_16px, true)),
          appearingText2 = square.addObject(new GameText(S.endText1, [right+standardDist*1.3, centerY], textColor, textProfile2_16px, true))

    // INTERACTIONS
    
    // Fading text
    square.addObject(Collision.createAreaEnter([[right-standardDist*2.5, top], [right, top+standardDist]], ()=>appearingText1.smoothFade(GameText.FADINGS.IN, 500), null, ()=>appearingText1.smoothFade(GameText.FADINGS.OUT, 500)))
    square.addObject(Collision.createAreaEnter([[right+10, centerY], [right+standardDist*2.5, bottom]], null, null, ()=>{
        appearingText2.smoothFade(GameText.FADINGS.OUT, 7000)
        gameManager.CVS.centerViewTo(nextSquare.obj.getCenter(), 3500)
        gameManager.playSong(LEVEL)
    }))


    // End
    square.addObject(Collision.createEnd([[right-standardSize, bottom-standardSize],[right, bottom]], ()=>{
        gameManager.progress = LEVEL
        player.cinematicMoveTo(nextSquare.spawnPos, 7250)
        appearingText2.smoothFade(GameText.FADINGS.IN, 750)
    }))





}