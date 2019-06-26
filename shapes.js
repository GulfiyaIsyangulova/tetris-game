class Shapes {
    constructor(theX, theY, theWidth, theHeight) {
        this.x = theX;
        this.y = theY;
        this.width = theWidth;
        this.height = theHeight;
    }

    drawItself() {
        // console.log(this)
        ctx.fillStyle = "#8B008B";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        // console.log(this.height)
    }

    moveDownForever() {
        var shapeInterval = setInterval(() => {
            // ctx.clearRect(this.x, this.y, this.width, this.height);

            // while (this.y + this.height < 650) {
            this.y += 2;

            // }

            if (this.x > 500 - this.width)
                this.x = 500 - this.width;

            if (this.x < 0)
                this.x = 0;

            visibleShapes.forEach((oneShape) => {

                if (this.y + this.height > oneShape.y && this.x + this.width > oneShape.x && this.x < oneShape.x + oneShape.width) {
                    this.y = oneShape.y - this.height;
                    clearInterval(shapeInterval);


                    if (this.height === 100){
                        
                    let part1 = new Shapes(this.x,this.y, 50,  50)

                   
                    let part2 = new Shapes(this.x, this.y+50, 50, 50);
                        visibleShapes.push(part1, part2);
                    }else{
                        visibleShapes.push(this);
                    }

                    countFilledRows()


                    // makeEverythingASquare() 
                    canvas.dispatchEvent(reachedEndEvent);
                }
            });

            if (this.y > 650 - this.height) {
                this.y = 650 - this.height;
                console.log("this is the boarder y=650px");
                clearInterval(shapeInterval);


                if (this.height === 100){
                  

                    let part1 = new Shapes(this.x,this.y, 50,  50)

                   
                    let part2 = new Shapes(this.x, this.y+50, 50, 50);

                    visibleShapes.push(part1, part2);
                }else{
                    visibleShapes.push(this);
                }

                countFilledRows();

                console.log(visibleShapes)




                // makeEverythingASquare() 
                canvas.dispatchEvent(reachedEndEvent);
                console.log(visibleShapes)
            }
            this.drawItself();
        }, 20);
    }

    moveYourself(whichDirection) {
        // console.log("left " + this.x);
        // console.log(this.y)
        // console.log("right " + (this.x + this.width));
        if (this.x !== 0 || this.x + this.width !== 500) {
            // ctx.clearRect(this.x, this.y, this.width, this.height);
            if (whichDirection === "ArrowLeft") {
                this.x -= 50;
            } else if (whichDirection === "ArrowRight")
                this.x += 50;
            // this.drawItself();
            else if (whichDirection === "ArrowDown")
                this.y += 50;
            else if(whichDirection === "ArrowUp") {
                this.y - 50; this.width + 50; this.height - 50;
            }  
                
            this.drawItself();
        }
        // if (this.y < 0){
        //     alert("You loseeeee");
        //     if(visibleShapes[visibleShapes.length-1].y < 0){
        //         alert("loser!")
        //     }
        // }
    }
}

// function makeEverythingASquare() {
//     console.log("makeeverythingasquare calling")

//     visibleShapes.forEach((eachShape, i) => {

//         if (eachShape.height === 100) {
//             console.log('this is a rectangle')

//             let theRectangle = eachShape;
//             let part1 = {};
//             let part2 = {};
//             part1.x = theRectangle.x
//             part1.y = theRectangle.y
//             part1.height = 50;
//             part1.width = 50;

//             part2.x = theRectangle.x;
//             part2.y = theRectangle.y + 50;
//             part2.height = 50;
//             part2.width = 50;

//             //delete eachShape from the array  .splice(i, 1)
//             visibleShapes.splice(i, 1, part1, part2);
//             // and push in part1 and part2
//             console.log(theRectangle);
//         }

//     });
// }

