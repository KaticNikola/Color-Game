let numSquares = 6;
let colors = [];
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById('colorDisplay');
var pickedColor = pickColor();
let messageDisply = document.getElementById('message');
let h1 = document.querySelector('h1');
let resetBtn = document.querySelector('#reset');
let modeBtn = document.querySelectorAll('.mode');


//fja koja pokrece sve cim se loadje strana
init();

function init(){
    setUpModeBtns();
    setUpSquares();
    reset();
}


function setUpModeBtns(){
    // menjanje tezine modova eazy/hard
    for(var i = 0; i < modeBtn.length; i++){
        //look kroz bnt i dajes im eventLs
        modeBtn[i].addEventListener('click', function(){
            //sklanja klasu
            modeBtn[0].classList.remove('selected');
            modeBtn[1].classList.remove('selected');
            this.classList.add('selected');
            //odluci koliko kvadrata da pokaze
            this.textContent === 'Eazy' ? numSquares = 3: numSquares = 6;
    //        if(this.textContent === 'Eazy'){
    //            numSquares = 3;
    //        } else{
    //            numSquares = 6;
    //        }
            reset();
        });
    };
}

function setUpSquares(){
    for (var i = 0; i < squares.length; i++) {

    //add click isteners kvadratima
        squares[i].addEventListener('click', function () {

        //selektujes boju iz kvadarata
            let clickedColor = this.style.background;
            //uporedis je sa pickedcolor  kad pogodi!!
            if (clickedColor === pickedColor) {
                messageDisply.textContent = 'Correct';
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                resetBtn.textContent = "Play Again";

            } else {
                this.style.background = '#232323';
                messageDisply.textContent = 'Try again';
            }
        });
    }
}

// fuja koja ce da radi:
function reset() {
   //generise sve nove boje
   colors = generateRandomColors(numSquares);
   //izabere random boju iz arr
   pickedColor = pickColor();
   resetBtn.textContent = "New Colors";
   //promeni displayColor da bude isti kao nova boja
   colorDisplay.textContent = pickedColor;
   messageDisply.textContent = '';
   //promeni boju kockica
   for (var i = 0; i < squares.length; i++) {
       if (colors[i]) {
           squares[i].style.display = 'block';
           squares[i].style.background = colors[i];
       } else {
           squares[i].style.display = 'none';
       }
   }
   //promenis boju h1
   h1.style.background = 'steelblue';
};

resetBtn.addEventListener("click", function(){
    reset();
})

// funkcija koja menja boju kad tacno pogodis
function changeColors(color) {
    //loop kroz sve kvadrate
    for (var i = 0; i < squares.length; i++) {
        // promeni im boju da budu svi isti kao pickedColor
        squares[i].style.background = color;
    }
};

//funkcija koja bira random boju
function pickColor() {
    //generisi random br
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

//funkcija koja generise array sa bojama
function generateRandomColors(num) {
    //napravi array
    let arr = [];
    //dodaj num random boje
    for (var i = 0; i < num; i++) {
        //get random color i push to arr
        arr.push(randomColor());

    }
    // returt array
    return arr;
};
function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

// //fja koja geerise random boju
// function randomColor() {
//     //biras rabdom vrednosti za svaki kanal boja
//     // random za red kanal 0-255
//     let r = Math.floor(Math.random() * 256);
//     //radnom za green kanal 0-255
//     let g = Math.floor(Math.random() * 256);
//     // random za blue kanal 0-255
//     let b = Math.floor(Math.random() * 256);
//     return "rgb(" + r + ", " + g + ", " + b + ")"
// };


