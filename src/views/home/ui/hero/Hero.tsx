import { ContentLayout } from "$shared/layouts/content-layout"

import s from "./Hero.module.scss"

const Hero = () => {
  return (
    <section className={s.block}>
      <div className={s.wrap}>
        <ContentLayout>
          <div className={s.content}>
            <p className={s.subtitle}>Превращаем Ваши идеи в&nbsp;реальность</p>
            <h1 className={s.title}>
              DeepVisual <span>- нейрофотосессии, нейроконтент</span>
            </h1>
            <p className={s.subtitle}>
              Создаем профессиональный визуальный контент с&nbsp;помощью передовых нейросетей
            </p>
          </div>
        </ContentLayout>
      </div>
    </section>
  )
}

export default Hero
