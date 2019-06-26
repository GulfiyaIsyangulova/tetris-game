
let allTheShapes = [];
let Rectangle;
let Square;
let visibleShapes = [];

const reachedEndEvent = new Event("reachedEnd");
const theRowIsFilledEvent = new Event("theRowIsfilled");

window.onload = function () {
    canvas = document.getElementById('game-board');
    ctx = canvas.getContext('2d');
    canvas.addEventListener('reachedEnd', createShapeRand);
    canvas.addEventListener('theRowIsFilled', countFilledRows)

    document.getElementById("start-game-button").onclick = function () {
        startGame();
    };
}

function startGame() {
    createShapeRand();
    animate();
}
function countFilledRows() {
    // if (visibleShapes[i].length > 50  && visibleShapes[i].width >50 ) {}

    // let i = visibleShapes.x;
    // let j = visibleShapes.y;

    //     var c = 0;
    // for( var i in arr )
    //   for( var j in arr[ i ] )
    //     if( arr[ i ][ j ] != undefined )
    //       ++c;

    let rows = {};
    let successRow;

    for (var i in visibleShapes) {

        let baseline = (visibleShapes[i].y + visibleShapes[i].height);

        if (rows[baseline]) {
            rows[baseline] += 1;

        } else {
            rows[baseline] = 1;
        }
    }

    for (let key in rows) {
        if (rows[key] === 10) {

            successRow = key;


        }
    }

    if (successRow) {

        ctx.clearRect(0, successRow - 50, 500, 50)

    }

    // return rows;


    // for (var i = 0; i < visibleShapes.length; i++) { 
    //     for (var j = 0; j < visibleShapes.length; j++) { 

    //         rows[i][j] = s[h++]; 
    //     } 
    // } 



    // for (var i=0; i<visibleShapes.length; i++){
    //     if ((oneShape.visibleShapes[index]).x > (oneShape.visibleShapes[index-1]).x){
    //         rows.push(oneshape.visibleShapes.y);
    //     }
    // }
    // console.log("clear row`")
}

function createShapeRand() {
    console.log('testing', visibleShapes);
    //makeEverythingASquare()
    Rectangle = new Shapes(250, 0, 50, 100);
    Square = new Shapes(250, 0, 50, 50)
    allTheShapes = [Rectangle, Square];

    const randomShapeIndex = Math.floor(Math.random() * allTheShapes.length);
    const shape = allTheShapes[randomShapeIndex];

    shape.moveDownForever();
    document.onkeydown = function (e) {
        let directions = ["ArrowLeft", "ArrowRight", "ArrowDown"];
        if (directions.includes(e.key)) {
            shape.moveYourself(e.key);
        }
    }
}

function drawAllShapes() {
    visibleShapes.forEach((oneShape) => {
        // console.log('---', i, visibleShapes)

        oneShape.drawItself();
    });
}

function animate() {
    const interval = setInterval(() => {

        ctx.clearRect(0, 0, 500, 650);
        drawAllShapes();
        // countFilledRows()
        makeEverythingASquare()

        // console.log(visibleShapes)

        if (visibleShapes.length > 20) {
            alert("You lose!")
            location.reload();
            clearInterval(interval);
        }
    }, 40);
}
