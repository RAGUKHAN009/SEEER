
const SF = document.getElementById('SearchVisiable');

SF.addEventListener('click', function () {
    let SF = document.getElementById('searchFilter');

    if (SF.style.display === 'none' || SF.style.display === '') {
        SF.style.display = 'block';
    } else {
        SF.style.display = 'none';
    }

});
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

let Slid = 1;

document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');

    nextButton.addEventListener('click', () => {
        if (Slid < 4) {
            Slid++;
        } else {
            Slid = 1;
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (Slid > 1) {
            Slid--;
        } else {
            Slid = 4;
        }
        updateCarousel();
    });
});


function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transition = 'transform 1s ease-in-out';
    carousel.style.transform = `translateX(calc(-${(Slid - 1) * 100}%))`;
}

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

let Sld = 1;

document.addEventListener('DOMContentLoaded', function () {
    const nextButt = document.getElementById('NextButttt');
    const prevButt = document.getElementById('PrevButttt');

    nextButt.addEventListener('click', () => {
        if (Sld < 4) {
            Sld++;
        } else {
            Sld = 1;
        }
        updateCarouse();
    });

    prevButt.addEventListener('click', () => {
        if (Sld > 1) {
            Sld--;
        } else {
            Sld = 4;
        }
        updateCarouse();
    });

});

function updateCarouse() {
    const carousel = document.querySelector('.carousell');
    carousel.style.transition = 'transform 1s ease-in-out';
    carousel.style.transform = `translateX(calc(-${(Sld - 1) * 100}%))`;
}
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

let Slde = 1;

document.addEventListener('DOMContentLoaded', function () {
    const nextButt = document.getElementById('NextBut3');
    const prevButt = document.getElementById('PrevBut3');

    nextButt.addEventListener('click', () => {
        if (Slde < 4) {
            Slde++;
        } else {
            Slde = 1;
        }
        updateCarous();
    });

    prevButt.addEventListener('click', () => {
        if (Slde > 1) {
            Slde--;
        } else {
            Slde = 4;
        }
        updateCarous();
    });

});

function updateCarous() {
    const carousel = document.querySelector('.carouselll');
    carousel.style.transition = 'transform 1s ease-in-out';
    carousel.style.transform = `translateX(calc(-${(Slde - 1) * 100}%))`;
}

