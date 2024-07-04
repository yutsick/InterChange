
let swiper = new Swiper(".progress-slide-carousel", {
    loop: true,
    fraction: true,
    autoplay: {
    delay: 1800,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".progress-slide-carousel .swiper-pagination",
    type: "progressbar",
    
    },
    on: {
        slideChangeTransitionEnd: function() {
          this.autoplay.stop(); // Stop autoplay temporarily
          this.slideToLoop(this.realIndex, 0, false); // Slide to the current real index
          this.autoplay.start(); // Restart autoplay
        }
      },
    slidesPerView: 3.2,
    spaceBetween: 24,
});

let swiperLatest = new Swiper(".latest-slide-carousel", {
    loop: true,
    fraction: true,
    autoplay: {
    delay: 1200,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".latest-slide-carousel .swiper-pagination",
    type: "progressbar",
    
    },
    on: {
        slideChangeTransitionEnd: function() {
          this.autoplay.stop(); // Stop autoplay temporarily
          this.slideToLoop(this.realIndex, 0, false); // Slide to the current real index
          this.autoplay.start(); // Restart autoplay
        }
      },
    slidesPerView: 2.7,
    spaceBetween: 24,
});
let swiperFeatured = new Swiper(".featured-slide-carousel", {
    loop: true,
    fraction: true,
    autoplay: {
    delay: 1200,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".featured-slide-carousel .swiper-pagination",
    type: "progressbar",
    
    },
    on: {
        slideChangeTransitionEnd: function() {
          this.autoplay.stop(); // Stop autoplay temporarily
          this.slideToLoop(this.realIndex, 0, false); // Slide to the current real index
          this.autoplay.start(); // Restart autoplay
        }
      },
    slidesPerView: 2.7,
    spaceBetween: 24,
});

let block = document.querySelectorAll('.header-block');
block.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.toggle('active');
    });
    item.addEventListener('mouseout', () => {
        item.classList.toggle('active');
    });
});


