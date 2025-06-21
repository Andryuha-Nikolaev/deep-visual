import { SectionId } from "$shared/constants/sectionId";
import { ContentLayout } from "$shared/layouts/content-layout";
import s from "./Services.module.scss";

export const Services = () => {
  return (
    <section className={s.block} id={SectionId.SERVICES}>
      <ContentLayout>Services</ContentLayout>
    </section>
  );
};
