
let allTheShapes = [];
let Rectangle;
let Square;
window.onload = function () {
    ctx = document.getElementById('game-board').getContext('2d');

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
    Rectangle = new Shapes(250, 0, 42, 120);
    Square = new Shapes(50, 0, 60, 60)
    allTheShapes = [Rectangle, Square];
    allTheShapes.forEach(element => {
        element.drawItself();
        element.moveDownForever();
        element.moveYourself();
    });
    // setInterval(() =>{
    //     do { moveDownForever(randomShape) }
    //     while(!randomShape.reachedEnd == true);

    // },20)

//     function randomShapeRec(){
//     do {

//         Rectangle.drawItself();
//         Rectangle.moveDownForever();
//         Rectangle.moveYourself();
//     }
//     while (this.reachedEnd == false);
//     }
//     randomShapeRec()
// },20)

}


// function randomShapeRec() {
    //randomly choose a shape

    randomShape = Math.floor(Math.random() * allTheShapes.length);






    //when shape reaches end

    // setInterval(() =>{
    //     do { moveDownForever(randomShape) }
    //     while(!randomShape.reachedEnd == true);

    // },20)


    //call function again (recursion)

// randomShapeRec();