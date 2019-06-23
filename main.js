
let allTheShapes = [];
let Rectangle;
let Square;

const reachedEndEvent = new Event("reachedEnd");

window.onload = function () {
    canvas = document.getElementById('game-board');
    ctx = canvas.getContext('2d');
    canvas.addEventListener('reachedEnd', createShapeRand);

    document.getElementById("start-game-button").onclick = function () {
        startGame();
    };
    document.onkeydown = function (e) {
        let directions = ["ArrowLeft", "ArrowRight", "ArrowDown"];
        if (directions.includes(e.key)) {
            Rectangle.moveYourself(e.key);
        }
    }
}

function startGame() {
    createShapeRand();
}



function createShapeRand() {
    console.log('testing');

    Rectangle = new Shapes(250, 0, 42, 120);
    Square = new Shapes(50, 0, 60, 60)
    allTheShapes = [Rectangle, Square];

    const randomShapeIndex = Math.floor(Math.random() * allTheShapes.length);
    const shape = allTheShapes[randomShapeIndex];
    
    shape.drawItself();
    shape.moveDownForever();
    shape.moveYourself();
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