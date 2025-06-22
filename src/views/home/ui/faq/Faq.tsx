import { Accordion, AccordionItem } from "$features/accordion";
import { SectionId } from "$shared/constants/sectionId";
import { SectionLayout } from "$shared/layouts/section-layout";
// import s from "./Faq.module.scss";

export const Faq = () => {
  return (
    <SectionLayout title="" id={SectionId.FAQ}>
      <Accordion>
        <AccordionItem question="aaaa?" index={0}>
          aaaa
        </AccordionItem>
      </Accordion>
    </SectionLayout>
  );
};
