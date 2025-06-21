import { SectionId } from "$shared/constants/sectionId";
import { ContentLayout } from "$shared/layouts/content-layout";
import s from "./Gallery.module.scss";

export const Gallery = () => {
  return (
    <section className={s.block} id={SectionId.GALLERY}>
      <ContentLayout>Gallery</ContentLayout>
    </section>
  );
};
