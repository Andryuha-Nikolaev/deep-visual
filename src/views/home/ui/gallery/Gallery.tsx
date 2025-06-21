import { SectionId } from "$shared/constants/sectionId";
import { SectionLayout } from "$shared/layouts/section-layout";
// import s from "./Gallery.module.scss";

export const Gallery = () => {
  return (
    <SectionLayout title="Наши работы" id={SectionId.GALLERY}>
      content
    </SectionLayout>
  );
};
