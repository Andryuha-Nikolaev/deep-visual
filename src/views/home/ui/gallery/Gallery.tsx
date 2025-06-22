"use client";

import { SectionId } from "$shared/constants/sectionId";
import { SectionLayout } from "$shared/layouts/section-layout";
import Image from "next/image";
import { galleryData } from "./config/data";
import s from "./Gallery.module.scss";
import { useModal } from "$features/modal/ui/ModalProvider";
import { ModalId } from "$features/modal";

export const Gallery = () => {
  const { showModal } = useModal();

  const showGalleryModal = (index: number) => {
    showModal({
      modalId: ModalId.GALLERY,
      gallery: {
        initialSlide: index,
        slides: galleryData.data,
      },
    });
  };

  return (
    <SectionLayout title={galleryData.title} id={SectionId.GALLERY}>
      <div className={s.list}>
        {galleryData.data.map(({ id, image, alt }, index) => (
          <div className={s.item} key={id} onClick={() => showGalleryModal(index)}>
            <Image src={image} alt="" quality={100} fill className={s.bg} sizes="1376px" />
            <Image src={image} alt={alt} fill className={s.image} quality={100} sizes="1376px" />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
