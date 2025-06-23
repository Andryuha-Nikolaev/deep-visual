import Image from "next/image";
import s from "./GallerySlide.module.scss";
import { useState } from "react";
import { Spinner } from "$shared/ui/spinner";

type GallerySlideProps = {
  image: string;
};

export const GallerySlide = ({ image }: GallerySlideProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={s.block}>
      {loading && <Spinner className={s.spinner} />}
      <Image
        onLoad={() => setLoading(false)}
        className={s.image}
        src={image}
        alt=""
        width={1}
        height={1}
        sizes="1376px"
        quality={90}
      />
    </div>
  );
};
