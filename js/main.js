document.addEventListener("DOMContentLoaded", function () {
    let heroSwiper = new Swiper(".hero__slider", {
        loop: false,
        spaceBetween: 0,
        slidesPerView: 1,
        speed: 700,
        navigation: {
            nextEl: ".hero__slide-next",
            prevEl: ".hero__slide-prev",
        },
    });


    let reviewsSwiper = new Swiper(".reviews__slider", {
        loop: true,
        spaceBetween: 32,
        slidesPerView: 1,
        speed: 700,
        centeredSlides: false, 
        pagination: {
            el: ".reviews__slider-pagination",
        },
        breakpoints: {
            768: {
                slidesPerView: 1.5,
                centeredSlides: true, 
            },
            1000: {
                slidesPerView: 2,
                centeredSlides: true, 
            },
            1720: {
                slidesPerView: 3,
                centeredSlides: true, 
            }
        }
    });
    
    

});