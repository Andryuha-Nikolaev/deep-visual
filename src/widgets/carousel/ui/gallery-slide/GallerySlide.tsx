import Image from "next/image";
import s from "./GallerySlide.module.scss";

type GallerySlideProps = {
  image: string;
};

export const GallerySlide = ({ image }: GallerySlideProps) => {
  return (
    <Image
      className={s.image}
      src={image}
      alt=""
      width={1}
      height={1}
      sizes="1376px"
      quality={90}
    />
  );
};
