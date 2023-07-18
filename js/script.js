$(document).ready(function() {
  $('.toggle').click(function() {
    $('#menu').toggleClass('open');
    $('.container').toggleClass('menu-open');
  })
})

window.onload = function() {
document.querySelector('.welcome').classList.add('welcome-animation');
};
