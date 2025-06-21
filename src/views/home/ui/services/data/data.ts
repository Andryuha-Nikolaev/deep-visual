import { ServicesItemType } from "../model/types";
import image1 from "../images/image-1.png";
import image2 from "../images/image-2.png";
import image3 from "../images/image-3.png";
import image4 from "../images/image-4.png";

export const servicesData: ServicesItemType[] = [
  {
    id: 1,
    title: "Нейрофотосессии",
    text: "Уникальные реалистичные образы на&nbsp;любой вкус.<br/>Поможем подобрать образ для нейрофото, найдем примеры.",
    image: image1.src,
    alt: "Нейрофотосессия: девушка в ромашковом поле",
  },
  {
    id: 2,
    title: "Нейроконтент",
    text: "Выделяющиеся посты для соцсетей, блогов и&nbsp;креативные аватарки, сгенерированные искусственным интеллектом.",
    image: image2.src,
    alt: "Нейрофото: девушка занимается йогой на вершине горы",
  },
  {
    id: 3,
    title: "Иллюстрации",
    text: "Визуальные решения для любых тем: геймдев, фэнтези, аниме, обложки для песен и&nbsp;видео, книги, арт.",
    image: image3.src,
    alt: "AI-иллюстрация: рыцарь в доспехах сидит в поле",
  },
  {
    id: 4,
    title: "Стилизация фото",
    text: "Нейрокреатор перенесет Ваше фото в другую реальность",
    image: image4.src,
    alt: "ИИ-арт: трехцветная кошка в стиле аниме",
  },
];
