import { SectionId } from "$shared/constants/sectionId";
import { SectionLayout } from "$shared/layouts/section-layout";
// import s from "./Services.module.scss";

export const Services = () => {
  return (
    <SectionLayout title="Услуги" id={SectionId.SERVICES}>
      Services
    </SectionLayout>
  );
};
