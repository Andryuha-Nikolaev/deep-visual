import { SectionId } from "$shared/constants/sectionId";
import { ContentLayout } from "$shared/layouts/content-layout";
import s from "./SectionLayout.module.scss";

type SectionLayoutProps = {
  children: React.ReactNode;
  id?: SectionId;
  title: string;
};

export const SectionLayout = ({ children, id, title }: SectionLayoutProps) => {
  return (
    <section className={s.block} id={id}>
      <ContentLayout>
        <h2 className={s.title}>{title}</h2>

        {children}
      </ContentLayout>
    </section>
  );
};
