let clubLifeSwiper = new Swiper(".clubLife__slider", {
    loop: true,
    spaceBetween: 32,
    slidesPerView: 1,
    speed: 700,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 1.5,
            spaceBetween: 35,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }
});