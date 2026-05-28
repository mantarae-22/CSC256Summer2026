// we will use this function to organize the code for adding our info to the HTML
function loadInfo(){
    // this allows us to change the content of our HTML element - textContent is the best option to use from a performance perspective
    document.getElementById("divMajor").textContent = "Major: Surfing";
    // set the email
    document.getElementById("divEmail").textContent = "Email: myemail@email.com";
    // set the grad date
    document.getElementById("divGradDate").textContent = "Expected Graduation Date: May 2035";
}