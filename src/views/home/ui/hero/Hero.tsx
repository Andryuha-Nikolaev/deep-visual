import { ContentLayout } from "$shared/layouts/content-layout"

import s from "./Hero.module.scss"

const Hero = () => {
  return (
    <section className={s.block}>
      <div className={s.wrap}>
        <ContentLayout>
          <div className={s.content}>
            <p className={s.subtitle}>Профессиональный визуальный контент</p>
            <h1 className={s.title}>
              DeepVisual <span>- нейрофотосессии на заказ, нейроконтент</span>
            </h1>
            <p className={s.subtitle}>Реалистичные нейрофото, уникальные AI-иллюстрации</p>
          </div>
        </ContentLayout>
      </div>
    </section>
  )
}

export default Hero
