document.addEventListener("DOMContentLoaded", function () {
    let heroSwiper = new Swiper(".hero__slider", {
        loop: false,
        spaceBetween: 0,
        slidesPerView: 1,
        navigation: {
            nextEl: ".hero__slide-next",
            prevEl: ".hero__slide-prev",
        },
    });


    let reviewsSwiper = new Swiper(".reviews__slider", {
        loop: false,
        spaceBetween: 32,
        slidesPerView: 1,
        pagination: {
            el: ".reviews__slider-pagination",
        },
    });
    

});