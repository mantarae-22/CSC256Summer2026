// get an array of the holes
let holes = document.querySelectorAll(".hole");

// variable to keep track of the score
let score = 0;

// variable to keep track of the last hole
let lastHole;

// variable to keep track if the game has finished
let timesUp = false;

// shortcut/nickname to the score div
let spnScore = document.getElementById("spnScore");

// function to play the game
function playGame(){
    // reset the score to 0
    score = 0;

    // reset the scoreboard
    spnScore.textContent = score;

    // reset timesUp 
    timesUp = false;

    // popUp will run the game
    popUp();

    // set up how long the game will run for
    setTimeout(function(){
        timesUp = true;
    }, 10000); // this game will run for 10 seconds - 10000 miliseconds = 10 seconds
}

// function to run the game - have a bot pop up
function popUp(){
    // get the random time within the specified range
    let randomTime = getRandomTime(500, 1000);
    // get a random hole
    let randomHole = getRandomHole(holes);

    // add the bot class to the random hole
    randomHole.classList.add("bot");

    // after the random time has passed, remove the bot class from the random hole
    setTimeout(function(){
        // remove the bot class after the random time has passed
        randomHole.classList.remove("bot");

        // if the timesUp variable is false, keep playing!
        if (!timesUp){
            // call the popUp function recursively to keep playing
            popUp();
        }
    }, randomTime);
}

// get a random time
// let's say we want a random number between 200 and 500 ms - the range of our random number is 300 ms
// let's say we get a random number of 50, we need to add the minTime, so we get our desired number of 250
function getRandomTime(minTime, maxTime){
    // return our random number between the min and max
    return Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
}

// get a random hole
function getRandomHole(holesArray){
    // get a new random hole
    let newRandomHole = Math.floor(Math.random() * holesArray.length);
    // set up a hole variable
    let hole = holesArray[newRandomHole];

    // if the selected hole is the same as the last hole, try again!
    if (hole == lastHole){
        // re-call this function to run again
        return getRandomHole(holesArray);
    }

    // set the lastHole to the new random hole
    lastHole = hole;

    // return the random hole
    return hole;
}

// set up a function to keep score - so if the bot class is active for the whole, the user gets a point
function whack(event){
    // if the div has a class named bot, the user correctly clicked on the bot
    // and gets a point
    if (this.classList.contains("bot")){
        // add 1 to the score
        score++;
        // remove the bot class so the user can't run up their score
        this.classList.remove("bot");
        // update the scoreboard
        spnScore.textContent = score;
    }
    // optionally, add the code to remove a point every time a hole without a bot is clicked
    else{
        score--;
        spnScore.textContent = score;
    }
}

// loop through each hole and add the whack event handler
holes.forEach(hole => hole.addEventListener("click", whack));