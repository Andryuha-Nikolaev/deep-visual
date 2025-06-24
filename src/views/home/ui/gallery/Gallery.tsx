"use client";

import { SectionId } from "$shared/constants/sectionId";
import { SectionLayout } from "$shared/layouts/section-layout";
import Image from "next/image";
import { galleryData } from "./config/data";
import s from "./Gallery.module.scss";
import { useModal } from "$features/modal/ui/ModalProvider";
import { ModalId } from "$features/modal";
import { RootButton } from "$shared/ui/buttons/root";
import Link from "next/link";
import routesConstants from "$shared/constants/routes";
import { GalleryIcon } from "./icons/GalleryIcon";

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
    <SectionLayout
      title={galleryData.title}
      id={SectionId.GALLERY}
      button={
        <RootButton
          as={Link}
          href={routesConstants.GALLERY.url}
          colorVariant="var3"
          Icon={<GalleryIcon />}
        >
          Галерея
        </RootButton>
      }
    >
      <div className={s.list}>
        {galleryData.data.map(({ id, image, alt }, index) => (
          <div className={s.item} key={id} onClick={() => showGalleryModal(index)}>
            <Image src={image} alt="" quality={90} fill className={s.bg} sizes="256px" />
            <Image src={image} alt={alt} fill className={s.image} quality={90} sizes="256px" />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
