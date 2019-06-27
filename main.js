
let allTheShapes = [];
let Rectangle;
let Square;
let visibleShapes = [];
let score = 0;
let shape;
let mySound;

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }



const reachedEndEvent = new Event("reachedEnd");
const theRowIsFilledEvent = new Event("theRowIsfilled");

window.onload = function () {
     mySound = new sound("tetris-soundtrack.mp3");




    canvas = document.getElementById('game-board');
    ctx = canvas.getContext('2d');
    canvas.addEventListener('reachedEnd', createShapeRand);
    canvas.addEventListener('theRowIsFilled', countFilledRows)
    score = Number(document.getElementById('score-number').innerHTML);
    document.getElementById("pause").onkeydown = function () {
        pauseGame();

    };
    document.getElementById("start-game-button").onclick = function () {
        startGame();
    };
}

function startGame() {
    mySound.play();
    createShapeRand();
    animate();
}


// function pauseGame() {
//     if(!gamePaused){
//         gamePaused = true;
//     } else if (gamePaused){
//         game = setTimeout(gameLoop, 1000/30);
//         gamePaused = false;
//     }
// }



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
        score += 10;

        document.getElementById('score-number').innerHTML = score;

        console.log('sucess row is', successRow)

        visibleShapes = visibleShapes.filter((eachShape) => {
            return eachShape.y !== successRow - 50;
        })

        visibleShapes = visibleShapes.map((eachShape) => {

            let newShape = new Shapes(eachShape.x, eachShape.y, eachShape.width, eachShape.height)

            if (newShape.y < successRow - 50) {
                newShape.y += 50;
            }

            return newShape;

        })


        console.log(score, 'this is the score')





        console.log('=-=-=-=-=--=-=-=-=', visibleShapes)

        // ctx.clearRect(0, successRow - 50, 500, 50)

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
    shape = allTheShapes[randomShapeIndex];

    shape.moveDownForever();
    document.onkeydown = function (e) {
        let directions = ["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"];
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

    shape.drawItself();
}


function animate() {
    // const interval = setInterval(() => {

    ctx.clearRect(0, 0, 500, 650);
    drawAllShapes();
    // countFilledRows()
    // makeEverythingASquare()

    // console.log(visibleShapes)

    if (visibleShapes.length > 300) {
        document.getElementById('gameOverMessage').innerHTML = "Game Over!";

        // alert("You lose!")
       
        location.reload();
        // clearInterval(interval);
    }



    // }, 40);
    requestAnimationFrame(animate);
}
