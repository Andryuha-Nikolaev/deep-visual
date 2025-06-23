import { contacts } from "$shared/constants/contacts";
import { SectionId } from "$shared/constants/sectionId";
import { ContentLayout } from "$shared/layouts/content-layout";
import { RootLink } from "$shared/ui/links/root";
import clsx from "clsx";

import s from "./Footer.module.scss";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={s.block} id={SectionId.CONTACTS}>
      <ContentLayout>
        <h2 className={s.title}>Контакты</h2>
        <div className={s.wrap}>
          <div className={s.contacts}>
            <p>
              Telegram:{" "}
              <RootLink href={contacts.TG} as="a">
                @deep_visual
              </RootLink>
            </p>
            <p>
              Почта: <a href={`mailto:${contacts.EMAIL}`}>{contacts.EMAIL}</a>
            </p>
            <p className={s.copy}>© {year} DeepVisual</p>
          </div>

          <div className={clsx(s.dev)}>
            <p>
              Разработка:{" "}
              <RootLink href={contacts.DEVELOP} as="a">
                {contacts.DEVELOP}
              </RootLink>
            </p>

            <p>
              Дизайн:{" "}
              <RootLink href={contacts.DESIGN} as="a">
                {contacts.DESIGN}
              </RootLink>
            </p>
          </div>
        </div>
      </ContentLayout>
    </footer>
  );
};
