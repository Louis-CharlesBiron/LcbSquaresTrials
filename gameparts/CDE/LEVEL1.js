function getLevel1Declaration(square, gameManager) {
    const player = gameManager.player, obj = square.obj, CVS = gameManager.CVS,
          [[left, top], [right, bottom]] = obj.getBounds(), [centerX, centerY] = obj.getCenter(), size = right-left,
          standardDist = 75, standardSize = 25,
          textColor =  [135, 206, 235, 0]

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

    // TEXT PROFILE 1
    const textProfile1_22px = CVS.render.textProfile1.update(TextStyles.getFontStyleDeclaration("monospace", "22px")),
          textProfile2_16px = CVS.render.textProfile2.update(TextStyles.getFontStyleDeclaration("monospace", "16px"))

    // TUTORIAL TEXT
    square.addObject(new GameText(`Move using 'asdw' or arrows
                 ↑
                 ←↓→`, [centerX, bottom-standardDist*1.75], textColor, textProfile1_22px))

    square.addObject(new GameText(`Jump with 'W', '↑' or 'space'`, [centerX-standardDist*1.5, bottom-standardDist], textColor, textProfile2_16px))

    square.addObject(new GameText(`You can double jump btw`, [centerX, centerY], textColor, textProfile2_16px))


    square.addObject(new GameText(`↓`, [left+standardDist*1.7, centerY-standardDist*2.25], textColor, textProfile1_22px))
    square.addObject(new GameText(`↓`, [left+standardDist*3.55, centerY-standardDist*2.25], textColor, textProfile1_22px))
    square.addObject(new GameText(`↓`, [left+standardDist*5.05, centerY-standardDist*2.25], textColor, textProfile1_22px))

    square.addObject(new GameText(`↑`, [left+standardDist*2.7,  centerY-standardDist*1.2], textColor, textProfile1_22px))
    square.addObject(new GameText(`↑`, [left+standardDist*4.3, centerY-standardDist*1.2], textColor, textProfile1_22px))
    square.addObject(new GameText(`↑`, [left+standardDist*6, centerY-standardDist*1.2], textColor, textProfile1_22px))

    square.addObject(new GameText(`→`, [left+standardDist*1.7, top+standardSize/1.5], textColor, textProfile1_22px))
    square.addObject(new GameText(`→`, [left+standardDist*2.7, top+standardSize/1.5], textColor, textProfile1_22px))
    square.addObject(new GameText(`→`, [left+standardDist*3.7, top+standardSize/1.5], textColor, textProfile1_22px))
    square.addObject(new GameText(`→`, [left+standardDist*6.7, top+standardSize/1.5], textColor, textProfile1_22px))

    square.addObject(new GameText(`↓`, [left+standardDist*7.85, top+standardSize/1.5], textColor, textProfile1_22px))
    square.addObject(new GameText(`↓`, [left+standardDist*7.85, top+standardSize*5], textColor, textProfile1_22px))
    square.addObject(new GameText(`↓`, [left+standardDist*7.85, top+standardSize*10], textColor, textProfile1_22px))
    square.addObject(new GameText(`↓`, [left+standardDist*7.85, top+standardSize*15], textColor, textProfile1_22px))
    square.addObject(new GameText(`↓`, [left+standardDist*7.85, top+standardSize*20], textColor, textProfile1_22px))

    const appearingText1 = new GameText(`You can press down
 to fall a bit faster`, [right-standardDist, top-standardSize*2], textColor, textProfile2_16px, true)
    square.addObject(appearingText1)

    // INTERACTIONS
    const areaEnter1 = Collision.createAreaEnter([[right-standardDist*2.5, top], [right, top+standardDist]], ()=>appearingText1.smoothFade(GameText.FADINGS.IN, 500), null, ()=>appearingText1.smoothFade(GameText.FADINGS.OUT, 500))
    player.addInteraction(areaEnter1)
    square.addObject(areaEnter1)






}