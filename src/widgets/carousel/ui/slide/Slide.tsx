import Image from "next/image";
import s from "./Slide.module.scss";

import parse from "html-react-parser";

type SlideProps = {
  id: number;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export const Slide = ({ title, text, image, alt }: SlideProps) => {
  return (
    <div className={s.slide}>
      <Image src={image} alt={alt} fill quality={85} sizes="828px" />
      <div className={s.heading}>
        <h3 className={s.title}>{title}</h3>
      </div>

      <div className={s.footer}>
        <p>{parse(text)}</p>
      </div>
    </div>
  );
};
