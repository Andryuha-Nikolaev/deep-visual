import { SectionId } from "./sectionId";

export type MenuItemType = {
  name: string;
  url: string;
};

export const menu: MenuItemType[] = [
  {
    name: "Услуги",
    url: `/#${SectionId.SERVICES}`,
  },
  {
    name: "Наши работы",
    url: `/#${SectionId.GALLERY}`,
  },
  {
    name: "Часто задаваемые вопросы",
    url: `/#${SectionId.FAQ}`,
  },
  {
    name: "Контакты",
    url: `/#${SectionId.CONTACTS}`,
  },
];
