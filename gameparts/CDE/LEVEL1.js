function getLevel1Declaration(square, gameManager) {
    const obj = square.obj, bounds = obj.getBounds(), centerPos = obj.getCenter()



    square.addObstacle(new Obstacle(CDEUtils.addPos(centerPos,[-50])))



}