"use client"

import type { CSSProperties, ReactNode } from "react"

import clsx from "clsx"

// TODO: fix styles
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SimpleBar from "simplebar-react"

type CustomScrollLayoutProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export const CustomScrollLayout = ({ children, className, style }: CustomScrollLayoutProps) => {
  return (
    <SimpleBar
      autoHide={false}
      className={clsx(className, "custom-scrollbar-layout")}
      style={style}
    >
      {children}
    </SimpleBar>
  )
}
