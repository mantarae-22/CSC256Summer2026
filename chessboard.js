 // shortcut/nickname to the anchor div
 let divChessboard = document.getElementById("divChessboard");

 // function to build the chessboard
 function buildChessboard(){
     // loop to build the rows
     for (let i = 0; i < 8; i++){
         // build the columns
         for (let j = 0; j < 8; j++){
             // create the chess square div
             let divChessSquare = document.createElement("div");

             divChessSquare.className = "chess-square";

             // use modulus to determine if we are on an odd or even square
             if ((i+j) % 2 == 0){
                 // set the color of the "even" squares to black
                 divChessSquare.style.backgroundColor = "black";
             }

             // add the new square to the div
             divChessboard.appendChild(divChessSquare);
         }
     }
 }

 // call the function to build the chessboard
 buildChessboard();