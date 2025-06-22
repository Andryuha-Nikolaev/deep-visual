"use client";

import { ReactNode, useRef } from "react";

import { Swiper, type SwiperRef } from "swiper/react";

import useSwiper from "$shared/hooks/swiper/useSwiper";

import s from "./Carousel.module.scss";
import { Navigation } from "./navigation/Navigation";
import { SwiperOptions } from "swiper/types";
import { galleryCarouselConfig, rootCarouselConfig } from "./config/config";

type CarouselProps = {
  children: ReactNode;
  swiperOptions?: SwiperOptions;
  variant?: "root" | "gallery";
};

export const Carousel = ({ children, swiperOptions, variant = "root" }: CarouselProps) => {
  const swiperRef = useRef<SwiperRef>(null);

  const { isNavigationVisible, onPrev, onNext, isFirstSlide, isLastSlide } = useSwiper(swiperRef);

  const options: SwiperOptions = {
    ...(variant === "root" && rootCarouselConfig),
    ...(variant === "gallery" && galleryCarouselConfig),
    ...swiperOptions,
  };

  return (
    <div className={s.block}>
      <Swiper ref={swiperRef} spaceBetween={20} grabCursor {...options}>
        {children}
      </Swiper>
      <Navigation
        onPrev={onPrev}
        onNext={onNext}
        isVisible={isNavigationVisible}
        isFirstSlide={isFirstSlide}
        isLastSlide={isLastSlide}
        loop={!!options.loop}
      />
    </div>
  );
};
