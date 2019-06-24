
let allTheShapes = [];
let Rectangle;
let Square;
let visibleShapes = [];

const reachedEndEvent = new Event("reachedEnd");

window.onload = function () {
    canvas = document.getElementById('game-board');
    ctx = canvas.getContext('2d');
    canvas.addEventListener('reachedEnd', createShapeRand);

    document.getElementById("start-game-button").onclick = function () {
        startGame();
    };
    
}

function startGame() {
    createShapeRand();
    animate();
}



function createShapeRand() {
    console.log('testing', visibleShapes);

    Rectangle = new Shapes(250, 0, 50, 100);
    Square = new Shapes(250, 0, 50, 50)
    allTheShapes = [Rectangle, Square];

    const randomShapeIndex = Math.floor(Math.random() * allTheShapes.length);
    const shape = allTheShapes[randomShapeIndex];

    // visibleShapes.push(shape)
    
    // shape.drawItself();
    shape.moveDownForever();
    document.onkeydown = function (e) {
        let directions = ["ArrowLeft", "ArrowRight", "ArrowDown"];
        if (directions.includes(e.key)) {
            shape.moveYourself(e.key);
        }
    }

    // shape.moveYourself();
}


function drawAllShapes(){
    visibleShapes.forEach((oneShape)=>{
        // console.log('---', i, visibleShapes)
        oneShape.drawItself();
    })
}

function animate(){

    
    setInterval(()=>{
        ctx.clearRect(0, 0, 500, 650);
        drawAllShapes();
    }, 40)

}


// function randomShape() {
    //randomly choose a shape







    //when shape reaches end

    // setInterval(() =>{
    //     do { moveDownForever(randomShape) }
    //     while(!randomShape.reachedEnd == true);

    // },20)


    //call function again (recursion)

// randomShapeRec();