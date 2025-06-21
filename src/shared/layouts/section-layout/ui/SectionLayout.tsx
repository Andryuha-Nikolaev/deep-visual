import s from "./SectionLayout.module.scss";

type SectionLayoutProps = {
  children: React.ReactNode;
};

export const SectionLayout = ({ children }: SectionLayoutProps) => {
  return <div className={s.block}>{children}</div>;
};
