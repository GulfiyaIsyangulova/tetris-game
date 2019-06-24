class Shapes {
    constructor(theX, theY, theWidth, theHeight) {
        this.x = theX;
        this.y = theY;
        this.width = theWidth;
        this.height = theHeight;
    }

    drawItself() {
        console.log(this)
        ctx.fillStyle = "#8B008B";
        ctx.fillRect(this.x, this.y, this.width, this.height);

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
                    clearInterval(shapeInterval)
                    visibleShapes.push(this)
                    canvas.dispatchEvent(reachedEndEvent);
                }
            })



            if (this.y > 650 - this.height) {
                this.y = 650 - this.height;
                console.log("this is the boarder y=650px");
                clearInterval(shapeInterval);
                visibleShapes.push(this)
                canvas.dispatchEvent(reachedEndEvent);
            }



            this.drawItself();
        }, 20)

    }

    moveYourself(whichDirection) {
        console.log("left " + this.x);
        // console.log("right " + (this.x + this.width));
        if (this.x !== 0 || this.x + this.width !== 500) {
            // ctx.clearRect(this.x, this.y, this.width, this.height);
            if (whichDirection === "ArrowLeft") {
                this.x -= 10;
            } else if (whichDirection === "ArrowRight")
                this.x += 10;
            // this.drawItself();
            else if (whichDirection === "ArrowDown")
                this.y += 10;

            this.drawItself();

        }

    }
}

