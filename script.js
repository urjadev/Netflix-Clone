const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: false, // Enable continuous loop
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        // Below 650px
        650: {
            slidesPerView: 4, // Show 4 images
            spaceBetween: 5, // Adjust spacing for better appearance
        },
        550: {
            slidesPerView: 3, // Show 4 images
            spaceBetween: 5, // Adjust spacing for better appearance
        },

        500: {
            slidesPerView: 3, // Show 4 images
            spaceBetween: 5, // Adjust spacing for better appearance
        },
        400: {
            slidesPerView: 2, // Show 4 images
            spaceBetween: 2, // Adjust spacing for better appearance
        },
        300: {
            slidesPerView: 2, // Show 4 images
            spaceBetween: 5, // Adjust spacing for better appearance
        },
        // Below 950px
        950: {
            slidesPerView: 4, // Adjust further if needed
            spaceBetween: 5,
        },
        1200: {
            slidesPerView: 5, // Adjust further if needed
            spaceBetween: 5,
        },
        1300: {
            slidesPerView: 5, // Adjust further if needed
            spaceBetween: 5,
        },
        750: {
            slidesPerView: 4, // Adjust further if needed
            spaceBetween: 5,
        },
    },
});

