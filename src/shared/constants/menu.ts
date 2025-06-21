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
    name: "Контакты",
    url: `/#${SectionId.CONTACTS}`,
  },
];
