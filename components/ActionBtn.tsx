"use client"
import { MouseEventHandler, ReactNode } from "react"

const ActionBtn = ({ onClick, children }:{onClick: MouseEventHandler<HTMLButtonElement>, children: ReactNode}) => {
  return (
    <button onClick={onClick} className="action-button w-full h-[52px] text-[16px] rounded-full bg-black text-white font-[satoshi] flex items-center justify-items-center justify-center align-middle [&_a]:underline">
      {children}
    </button>
  )
}

export { ActionBtn }