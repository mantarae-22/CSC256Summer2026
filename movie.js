// create an empty array to hold the list of movies
let arrMovies = [];

// this function will take input from the user and add it to the div
function addMovie(){
    // this is the shortcut/nickname for the text input
    let txtMovie = document.getElementById("txtMovie");
    // get the movie name, removing any leading or trailing spaces
    let movieName = txtMovie.value.trim();

    // check to see if the movie name is empty
    if (movieName != ""){
        // since the user entered in something, add it to the end of the array using .push
        arrMovies.push(movieName);
        // clear out the textbox so the user can easily add another movie
        txtMovie.value = "";
        // I am going to show the updated movie list now - your choice for the assignment if you want to show it now or add a "Display Movies" button
        showMovies();
    }
}

// function to show the movies in the array in the div
function showMovies(){
    // shortcut/nickname for the movies div
    let divMovies = document.getElementById("divMovies");
    // sort the list of movies here to make sure we are always showing a sorted list
    arrMovies.sort();
    // convert the array of movies into a string using join, they will separated by an HTML line break - br
    divMovies.innerHTML = arrMovies.join("<BR>");
}

// function to erase the movies and update the div with the empty movie list
function resetMovieList(){
    // reset the array by setting it equal to [] empty brackets
    arrMovies = [];

    // reload the movie div
    showMovies();
}