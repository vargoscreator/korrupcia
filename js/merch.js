let reviewsSwiper = new Swiper(".merch__slider", {
    loop: true,
    spaceBetween: 0,
    freeMode: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".merch__slider-next",
        prevEl: ".merch__slider-prev",
    },
    breakpoints: {
        1280: {
            slidesPerView: 2,
        }
    }
});