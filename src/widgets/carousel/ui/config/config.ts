import { Keyboard, Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export const rootCarouselConfig: SwiperOptions = {
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
  loop: true,
};

export const galleryCarouselConfig: SwiperOptions = {
  modules: [Pagination, Keyboard],
  pagination: {
    dynamicBullets: true,
  },
  keyboard: { enabled: true },
};
