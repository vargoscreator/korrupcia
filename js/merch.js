let reviewsSwiper = new Swiper(".merch__slider", {
    loop: true,
    spaceBetween: 0,
    freeMode: false,
    centeredSlides: true, 
    slidesPerView: 1.5,
    navigation: {
        nextEl: ".merch__slider-next",
        prevEl: ".merch__slider-prev",
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 2.2,
        },
        1280: {
            slidesPerView: 2.5,
        }
    }
});