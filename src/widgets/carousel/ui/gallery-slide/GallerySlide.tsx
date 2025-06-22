import Image from "next/image";
import s from "./GallerySlide.module.scss";

type GallerySlideProps = {
  image: string;
};

export const GallerySlide = ({ image }: GallerySlideProps) => {
  return (
    // <div className={s.block}>
    <Image
      className={s.image}
      src={image}
      alt=""
      width={1}
      height={1}
      sizes="1376px"
      quality={100}
    />
    // </div>
  );
};
