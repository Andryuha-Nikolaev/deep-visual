import { GalleryDataType } from "../model/types";

import image1 from "../images/image-1.png";
import image2 from "../images/image-2.png";
import image3 from "../images/image-3.png";
import image4 from "../images/image-4.png";
import image5 from "../images/image-5.png";
import image6 from "../images/image-6.png";
import image7 from "../images/image-7.png";
import image8 from "../images/image-8.png";
import image9 from "../images/image-9.png";
import image10 from "../images/image-10.png";
import image11 from "../images/image-11.png";
import image12 from "../images/image-12.png";

export const galleryData: GalleryDataType = {
  title: "Наши работы",
  data: [
    { id: 1, image: image1.src, alt: "Нейрофото: девушка занимается йогой в горах" },
    { id: 2, image: image2.src, alt: "Пример нейрофотосессии: девушка в поле перед грозой" },
    { id: 3, image: image3.src, alt: "AI-иллюстрация в стиле аниме: трехцветная кошка калико" },
    { id: 4, image: image4.src, alt: "Нейрофотосессия: красивая девушка в стиле киберпанк" },
    { id: 5, image: image5.src, alt: "AI-фото: красивая девушка на фоне винтажного Астон Мартин" },
    {
      id: 6,
      image: image6.src,
      alt: "Пример нейрофотосессии: мужчина в клетчатой рубашке сидит в лесу у костра",
    },
    { id: 7, image: image7.src, alt: "AI-аватарка: фото блондинки для соцсетей" },
    { id: 8, image: image8.src, alt: "Нейроарт: рыцарь в доспехах сидит в поле" },
    { id: 9, image: image9.src, alt: "Нейрофото: фотография маяка на рассвете" },
    { id: 10, image: image10.src, alt: "Арт с помощью нейросетей: картина маслом волна в море" },
    {
      id: 11,
      image: image11.src,
      alt: "Стилизация фото с помощью нейросетей: трехцветная кошка",
    },
    { id: 12, image: image12.src, alt: "AI-обработка фото: трехцветная кошка в горах на рассвете" },
  ],
};
