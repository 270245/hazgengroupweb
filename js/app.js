// =========================================================
// FILE: js/app.js
// =========================================================

console.log("Hazgen Website Loaded Successfully");

/* ================= CONTACT FORM ================= */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Message Sent Successfully!");

form.reset();

});

/* ================= HEADER EFFECT ================= */

window.addEventListener("scroll", function(){

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.background = "#1b281f";

}else{

header.style.background = "#223326";

}

});
// ================= MOBILE MENU =================

const menuToggle =
document.getElementById("menuToggle");

const mobileNav =
document.getElementById("mobileNav");

if(menuToggle){

menuToggle.addEventListener("click", () => {

mobileNav.classList.toggle("active");

});

}
