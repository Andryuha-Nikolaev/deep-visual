"use client";

import { SectionId } from "$shared/constants/sectionId";
import { SectionLayout } from "$shared/layouts/section-layout";
import Image from "next/image";
import { galleryData } from "./config/data";
import s from "./Gallery.module.scss";
import { useState } from "react";
import clsx from "clsx";

export const Gallery = () => {
  const [openImageUrl, setOpenImageUrl] = useState("");

  return (
    <SectionLayout title={galleryData.title} id={SectionId.GALLERY}>
      <div className={s.list}>
        {galleryData.data.map(({ id, image, alt }) => (
          <div className={s.item} key={id} onClick={() => setOpenImageUrl(image)}>
            <Image src={image} alt="" quality={100} fill className={s.bg} sizes="828px" />
            <Image src={image} alt={alt} fill className={s.image} quality={100} sizes="828px" />
          </div>
        ))}
      </div>
      <div
        className={clsx(s.modalImageWrap, openImageUrl && s.open)}
        onClick={() => setOpenImageUrl("")}
      >
        {openImageUrl && (
          <Image
            className={s.modalImage}
            src={openImageUrl}
            alt=""
            width={1}
            height={1}
            sizes="828px"
            quality={100}
          />
        )}
      </div>
    </SectionLayout>
  );
};
