"use client"

import { useSiteState } from "$shared/context/site"

import s from "./BurgerSwitch.module.scss"

import { BurgerIcon } from "./icons/BurgerIcon"
import { CloseIcon } from "./icons/CloseIcon"

export const BurgerSwitch = () => {
  const { isOpenBurger, switchBurger } = useSiteState()

  return (
    <button
      onClick={switchBurger}
      className={s.button}
      aria-label={isOpenBurger ? "Закрыть меню" : "Открыть меню"}
    >
      {isOpenBurger ? <BurgerIcon /> : <CloseIcon />}
    </button>
  )
}
