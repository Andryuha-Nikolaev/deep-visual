import { Gallery } from "./gallery/Gallery"
import Hero from "./hero/Hero"
import { Services } from "./services/Services"

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
    </>
  )
}
