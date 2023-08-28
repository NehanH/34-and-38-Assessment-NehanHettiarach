$(document).ready(function() {
  $('.toggle').click(function() {
    $('#menu').toggleClass('open');
    $('.container').toggleClass('menu-open');
  })
})

window.onload = function() {
document.querySelector('.welcome').classList.add('welcome-animation');
};

// NAVBAR JS CREATED BY Håvard Brynjulfsen
// NAVBAR EDITED BY NEHAN HETTIARACHCHI TERM 3 2023
var head = document.getElementsByTagName("head")[0];
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://unpkg.com/akar-icons-fonts/src/css/akar-icons.css";
head.appendChild(link);