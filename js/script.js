$(document).ready(function() {
  $('.toggle').click(function() {
    $('#menu').toggleClass('open');
    $('.container').toggleClass('menu-open');
  })
})

// NAVBAR JS CREATED BY Håvard Brynjulfsen
// NAVBAR EDITED BY NEHAN HETTIARACHCHI TERM 3 2023
var head = document.getElementsByTagName("head")[0];
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://unpkg.com/akar-icons-fonts/src/css/akar-icons.css";
head.appendChild(link);

$(document).ready(function() {
  if (sessionStorage.getItem('visited')){
    $('#welcome').removeClass('welcome-animation');
    $('.title, .subtitle, .grid-item, .toggle, .navbar-container').addClass('immediate-visibility');
  } else {
    $('#welcome').addClass('welcome-animation');
  }

  $(".ai-home").parent().click(function(e) {
    e.preventDefault();
    sessionStorage.setItem('visited', true);
    window.location.href= "../index.html"
  });
});