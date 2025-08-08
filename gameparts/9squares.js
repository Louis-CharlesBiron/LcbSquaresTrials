const squares = []

function spawnSquares(CVS) {
    const squareWidth = 130, squareHeight = 130, sectionWidth = CVS.width/3, sectionHeight = CVS.height/3,
          render = CVS.render, squareBgColor = [42, 36, 45, 1], squareBorderColor = [62, 66, 75, 1]

    for (let i=0,x=0,y=0;i<9;i++) {
        x=i%3
        if (i&&x==0) y++
        const square = new FilledShape(squareBgColor, true, [sectionWidth*x+sectionWidth/2, sectionHeight*y+sectionHeight/2], [
            new Dot([-squareWidth, -squareHeight]),
            new Dot([squareWidth, -squareHeight]),
            new Dot([squareWidth, squareHeight]),
            new Dot([-squareWidth, squareHeight]),
        ], 0, null, null, null, null, ()=>{
            return {borderColor:squareBorderColor}
        }, obj=>{
            const res = obj.setupResults
            render.batchStroke(Render.getPositionsRect(obj.dots[0].pos, obj.dots[2].pos), render.profile1.update(res.borderColor, null, null, null, 4))
        }, null, true)
        squares.push(square)
        CVS.add(square)
    }

}
spawnSquares(CVS)