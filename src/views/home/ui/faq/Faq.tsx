import { Accordion, AccordionItem } from "$features/accordion";
import { SectionId } from "$shared/constants/sectionId";
import { SectionLayout } from "$shared/layouts/section-layout";
import parse from "html-react-parser";
import { faqData } from "./config/data";
// import s from "./Faq.module.scss";

export const Faq = () => {
  return (
    <SectionLayout title={faqData.title} id={SectionId.FAQ}>
      <Accordion>
        {faqData.data.map((item, index) => (
          <AccordionItem key={item.q} question={item.q} index={index}>
            {parse(item.a)}
          </AccordionItem>
        ))}
      </Accordion>
    </SectionLayout>
  );
};
