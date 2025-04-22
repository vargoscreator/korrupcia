document.addEventListener("DOMContentLoaded", function () {
    let heroSwiper = new Swiper(".article__image", {
        loop: false,
        spaceBetween: 0,
        slidesPerView: 1,
        speed: 700,
        navigation: {
            nextEl: ".article__image-next",
            prevEl: ".article__image-prev",
        },
    });
});