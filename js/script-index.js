const swiper1 = new Swiper('.swiper-container', {
    // Mostrar 3 imágenes a la vez
    slidesPerView: 3,
    spaceBetween: 30, // Espacio entre las imágenes en píxeles
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        320: { // configuración para pantallas pequeñas
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: { // configuración para pantallas medianas
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: { // configuración para pantallas grandes
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
});

