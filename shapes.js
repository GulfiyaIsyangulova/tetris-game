class Shapes {
    constructor(theX, theY, theWidth, theHeight) {
        this.x = theX;
        this.y = theY;
        this.width = theWidth;
        this.height = theHeight;
        this.reachedEnd = false;
    }

    drawItself() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#8B008B";

    }
    moveDownForever() {
        var shapeInterval = setInterval(() => {
            ctx.clearRect(this.x, this.y, this.width, this.height);
            // while (this.y + this.height < 650) {
                this.y += 2;
                this.drawItself();

           // }



            if (this.x > 500)
                this.x = 500;

            if (this.x < 0)
                this.x = 0;

            if (this.y+this.height > 650) {
                this.y = 650+this.height;
                console.log("this is the boarder y=650px");
            clearInterval(shapeInterval);
                this.reachedEnd = true;
                }
        }, 20)

    }

    moveYourself(whichDirection) {
        if (whichDirection === "ArrowLeft") {
            this.x -= 10;
        } else if (whichDirection === "ArrowRight")
            this.x += 10;
        // this.drawItself();
        else if (whichDirection === "ArrowDown")
            this.y += 10;
    }

}

