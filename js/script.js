const sliders = document.querySelectorAll('.swiper');

sliders.forEach((el) => {
  let mySwiper = new Swiper(el,{
    navigation: {
      nextEl: el.querySelector('.swiper-button-next'),
      prevEl: el.querySelector('.swiper-button-prev'),
    },
  });
});