"use client";

import { ReactNode, useRef } from "react";

import { Swiper, type SwiperRef } from "swiper/react";

import useSwiper from "$shared/hooks/swiper/useSwiper";

import s from "./Carousel.module.scss";
import { Navigation } from "./navigation/Navigation";

const LOOP = true;

type CarouselProps = {
  children: ReactNode;
};

export const Carousel = ({ children }: CarouselProps) => {
  const swiperRef = useRef<SwiperRef>(null);

  const { isNavigationVisible, onPrev, onNext, isFirstSlide, isLastSlide } = useSwiper(swiperRef);

  return (
    <div className={s.block}>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        pagination={{ dynamicBullets: true }}
        grabCursor
        loop={LOOP}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {children}
      </Swiper>
      <Navigation
        onPrev={onPrev}
        onNext={onNext}
        isVisible={isNavigationVisible}
        isFirstSlide={isFirstSlide}
        isLastSlide={isLastSlide}
        loop={LOOP}
      />
    </div>
  );
};
