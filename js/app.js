const swiperSlider = new Swiper(".swiper", {
  // loop: true,
  // direction: 'vertical',

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    renderCustom: (swiper, current, total) => {
      let el = `<span class='swiper-pagination-bullet ${
        current === 1 ? "swiper-pagination-bullet-active" : ""
      }'>1</span>`;

      for (i = 2; i <= total; i++) {
        el += `<span class='swiper-pagination-bullet ${
          i === current ? "swiper-pagination-bullet-active" : ""
        }' >${i}</span>`;
      }
      return el;
    },
  },

    autoplay: {
      delay: 8000,
    },
});

// renderBullet: function (index, className) {
//   return `<span class=' ${className} + '>  ${num[index]}  </span>`;
// },
