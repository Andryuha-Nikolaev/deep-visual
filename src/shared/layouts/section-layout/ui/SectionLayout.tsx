import { SectionId } from "$shared/constants/sectionId";
import { ContentLayout } from "$shared/layouts/content-layout";
import s from "./SectionLayout.module.scss";

type SectionLayoutProps = {
  children: React.ReactNode;
  id?: SectionId;
  title: string;
  button?: React.ReactNode;
};

export const SectionLayout = ({ children, id, title, button }: SectionLayoutProps) => {
  return (
    <section className={s.block} id={id}>
      <ContentLayout>
        <div className={s.wrap}>
          <h2 className={s.title}>{title}</h2>
          {children} {button && <div className={s.buttonWrap}>{button}</div>}
        </div>
      </ContentLayout>
    </section>
  );
};
