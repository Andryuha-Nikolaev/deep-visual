import { Carousel } from "$widgets/carousel";
import { SwiperSlide } from "swiper/react";
import { useModal } from "../ModalProvider";
import { GallerySlide } from "$widgets/carousel/ui/gallery-slide/GallerySlide";
import s from "./GalleryModal.module.scss";

export const GalleryModal = () => {
  const { modalConfig } = useModal();

  if (!modalConfig?.gallery) {
    return null;
  }

  const { initialSlide, slides } = modalConfig.gallery;

  return (
    <Carousel variant="gallery" swiperOptions={{ initialSlide: initialSlide }}>
      {slides.map((item) => (
        <SwiperSlide className={s.slide} key={item.id}>
          <GallerySlide image={item.image} />
        </SwiperSlide>
      ))}
    </Carousel>
  );
};
