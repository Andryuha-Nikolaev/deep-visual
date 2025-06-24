"use client";

import { SectionId } from "$shared/constants/sectionId";
import { SectionLayout } from "$shared/layouts/section-layout";
import { SwiperSlide } from "swiper/react";
import { servicesData } from "./config/data";
import s from "./Services.module.scss";
import { RootButton } from "$shared/ui/buttons/root";
import { contacts } from "$shared/constants/contacts";
import { Carousel, Slide } from "$widgets/carousel";

export const Services = () => {
  return (
    <SectionLayout
      title={servicesData.title}
      id={SectionId.SERVICES}
      button={
        <RootButton as="a" href={contacts.TG} colorVariant="var3">
          Написать в Telegram
        </RootButton>
      }
    >
      <Carousel>
        {servicesData.data.map((item) => (
          <SwiperSlide className={s.slide} key={item.id}>
            <Slide {...item} />
          </SwiperSlide>
        ))}
      </Carousel>
    </SectionLayout>
  );
};
