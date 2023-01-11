// "use strict"

// ---------Slider------------

const arrowLeftSlider = document.querySelector('.first-screen__arrow-left');
const arrowRightSlider = document.querySelector('.first-screen__arrow-right');

const slide = document.querySelectorAll('.first_screen__slide');

for (let i = 0; i < slide.length; i++) {
    if (slide[i].style.top = '0%') {
        slide[++i].style.top = '-110%';

    };
}

let count = 0;

setInterval(clickRight, 6000);

arrowRightSlider.addEventListener('click', clickRight);
function clickRight() {
    clearInterval(clickRight);

    count = count + 1;

    for (let i = 0; i < slide.length; i++) {
        if (count >= slide.length) {
            count = 0;
        };
        slide[i].style.transition = '2s';
        slide[i].style.top = '-110%';
        slide[count].style.top = '0%';
    };
};

arrowLeftSlider.addEventListener('click', clickLeft);

function clickLeft() {
    clearInterval(clickRight);

    count = count - 1;

    for (let i = 0; i < slide.length; i++) {
        if (count < 0) {
            count = slide.length - 1;
        };
        slide[i].style.transition = '2s';
        slide[i].style.top = '-110%';
        slide[count].style.top = '0%';
    };
};