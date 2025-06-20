import clsx from "clsx"

import { BurgerSwitch } from "$shared/ui/switches/burger"

import s from "./HeaderButtons.module.scss"
import { Social } from "$shared/ui/social"

const HeaderButtons = () => {
  return (
    <div className={s.block}>
      <Social />
      <div className={clsx(s.item, s.burger)}>
        <BurgerSwitch />
      </div>
    </div>
  )
}

export default HeaderButtons
