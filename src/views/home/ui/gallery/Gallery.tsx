import { SectionId } from "$shared/constants/sectionId";
import { SectionLayout } from "$shared/layouts/section-layout";
import Image from "next/image";
import { galleryData } from "./config/data";
import s from "./Gallery.module.scss";

export const Gallery = () => {
  return (
    <SectionLayout title={galleryData.title} id={SectionId.GALLERY}>
      <div className={s.list}>
        {galleryData.data.map(({ id, image, alt }) => (
          <div className={s.item} key={id}>
            <Image src={image} alt="" quality={90} fill className={s.bg} sizes="828px" />
            <Image
              src={image}
              alt={alt}
              width={2}
              height={3}
              className={s.image}
              quality={90}
              sizes="828px"
            />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
