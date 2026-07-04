 // shortcut/nickname to the anchor div
 let divCheckersboard = document.getElementById("divCheckersboard");

 // this 2 dimensional array builds the game board
 // null - no piece on the square
 // w or b will add the related CSS class
 let arrPieces = [
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    ['w', null, 'w', null, 'w', null, 'w', null],
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['b', null, 'b', null, 'b', null, 'b', null],
    [null, 'b', null, 'b', null, 'b', null, 'b'],
    ['b', null, 'b', null, 'b', null, 'b', null]
 ];

 // function to build the checkers board
 function buildCheckersboard(){
     // loop to build the rows
     for (let i = 0; i < 8; i++){
         // build the columns
         for (let j = 0; j < 8; j++){
             // create the chess square div
             let divCheckersSquare = document.createElement("div");

             // add the id attribute for each square
             divCheckersSquare.setAttribute("id", "div" + i + j);

             // set the default class for each square
             divCheckersSquare.className = "checkers-square";

             // use modulus to determine if we are on an odd or even square
             if ((i+j) % 2 == 0){
                 // set the color of the "even" squares to black
                 divCheckersSquare.style.backgroundColor = "black";
             }
             // this makes it so it is only legal/available to move pieces on the light squares
             else{
                // add the event listener so when the user clicks on the square we can move the piece
                divCheckersSquare.addEventListener("click", movePiece);
             }             

             // add the new square to the div
             divCheckersboard.appendChild(divCheckersSquare);

             // check to see if we need to build a piece on this square - if the value in the corresponding piece array is not null, build a piece
             if (arrPieces[i][j]){
                // specify the id of the piece, the css class for the piece, and the square where the piece should be placed
                createPiece("piece" + i + j, "checker-piece-" + arrPieces[i][j], divCheckersSquare);
             }
         }
     }
 }

 // specify the id of the piece, the css class for the piece, and the square where the piece should be placed
 function createPiece(pieceId, pieceClass, theSquare){
    // create a div for the new piece
    let divNewPiece = document.createElement("div");
    // specify the id for this new div
    divNewPiece.setAttribute("id", pieceId);
    // specify the css class to build the round piece
    divNewPiece.classList.add("checker-piece");
    // specify the css class to determine the color
    divNewPiece.classList.add(pieceClass);
    // add event handling so the savePieceId function is called when the piece is clicked
    divNewPiece.addEventListener("click", savePieceId);
    // add the round piece to the square div
    theSquare.appendChild(divNewPiece);
 }

 // function to save the piece id
 function savePieceId(event){
    // create a variable to store the id of the clicked piece
    let selectedPieceId = event.target.id;
    // spnSelectedSquare

    // remove the word piece from the id, since I don't really need that info
    selectedPieceId = selectedPieceId.replace("piece", "");

    // shortcut to the secret span
    let spnSelectedSquare = document.getElementById("spnSelectedSquare");

    // store the id in the secret span
    spnSelectedSquare.dataset.value = selectedPieceId;
 }

 // function to handle the moving of the piece
 function movePiece(event){
    // get what square was clicked
    let newSquareId = event.target.id;

    // remove any words other than the actual number id
    newSquareId = newSquareId.replace("piece", "").replace("div", "");

    // shortcut to the secret span
    let spnSelectedSquare = document.getElementById("spnSelectedSquare");

    // get the id from the secret span of the piece to move
    let pieceToMoveId = spnSelectedSquare.dataset.value;

    // make sure that teh user is not trying to move the piece to the same square
    if (newSquareId != pieceToMoveId){
        // set a pointer to the old square
        let oldSquare = document.getElementById("div" + pieceToMoveId);

        // set a pointer to the old piece
        let oldPiece = document.getElementById("piece" + pieceToMoveId);

        // get the class name of the old piece before removing it
        let oldPieceCSScolor = oldPiece.classList[1];

        // remove the old piece from the board
        oldSquare.removeChild(oldPiece);

        // create a pointer to the new square
        let divNewSquare = document.getElementById("div" + newSquareId);

        // create a new piece on the new square with the same css class as the old piece
        createPiece("piece" + newSquareId, oldPieceCSScolor, divNewSquare);

        // reset the secret span to empty so that new pieces can be moved without any issues
        spnSelectedSquare.dataset.value = "";
    }
 }

 // call the function to build the checkers board
 buildCheckersboard();