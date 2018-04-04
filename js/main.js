/* global $ */

$(document).ready(function () {
    $('.header').height($(window).height());
});

$(".navbar-nav a").click(function () {
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    }, 1000)
});

function classToggle() {
    const navs = document.querySelectorAll('.navbar-items')
    
    navs.forEach(nav => nav.classList.toggle('navbar-toggleShow'));
  }
  document.querySelector('.navbar-link-toggle')
    .addEventListener('click', classToggle);

