var menuBtn = document.querySelector('.icon-bar');
var  menu = document.querySelector('.user-navbar');
menuBtn.addEventListener('click', function (event) {
    console.log(event)
    menu.classList.toggle('open');
}, false);




// var backButton = '<i class="fa fa-angle-left" aria-hidden="true"></i>'

// var nextButton = '<i class="fa fa-angle-right" aria-hidden="true"></i>'
//   $('.slider').slick({
//  slidesToShow: 1,
//  slidesToScroll: 1,
//  dots: false,
//  focusOnSelect: true,
//  prevArrow: backButton,
//   nextArrow: nextButton
// })