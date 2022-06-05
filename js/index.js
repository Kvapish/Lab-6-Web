let $sliderContainer = $('.slider-container');
let $sliderRow       = $('.slider-container .slider-row');
let $leftArrow       = $('.slider-container .arrow.left');
let $rightArrow      = $('.slider-container .arrow.right');
let $upArrow       = $('.slider-container .arrow.up');
let $downtArrow      = $('.slider-container .arrow.down');
let $dots            = $('.slider-container .dots .dot');

let slideWidth = $sliderContainer.width();
let currentSlide = 0;
let slidesCount = $('.slider-container .slider-row .slide').length;

$sliderRow.css({
    width: (slideWidth * slidesCount ) + 'px'
});

function sliderController(slide) {
    let distance = slide * slideWidth * (-1);
    $sliderRow.css({
        left: distance + 'px'
    });
}

$leftArrow.on('click', function () {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slidesCount - 1;
    sliderController(currentSlide);
});
$rightArrow.on('click', function () {
    currentSlide++;
    if (currentSlide >= slidesCount) currentSlide = 0;
    sliderController(currentSlide);
});
$dots.on('click', function (el) {
    currentSlide = parseFloat($(this).attr('data-slide')) - 1;
    sliderController(currentSlide);
});






function sliderControllerverctical(slide2) {
    let distance = slide * slideWidth * (-1);
    $sliderRow.css({
        left: distance + 'px'
    });
}



$upArrow.on('click', function () {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slidesCount - 1;
    sliderController(currentSlide);
});
$downArrow.on('click', function () {
    currentSlide++;
    if (currentSlide >= slidesCount) currentSlide = 0;
    sliderController(currentSlide);
});