import { ContentLayout } from '$shared/layouts/content-layout';

import s from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={s.block}>
      <ContentLayout>HERO</ContentLayout>
    </section>
  );
};

export default Hero;
