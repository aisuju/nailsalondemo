/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction()
};
function topFunction() {
    if (document.body.ScrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = none;
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function bookingAlert() {
    alert("Your booking form has been submitted.");
    location.href = "book.html";
}
function focusOnWax() {
    //alert(1);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.has('id');
    const idValue = urlParams.get('id');
    document.getElementById(idValue).scrollIntoView();
}