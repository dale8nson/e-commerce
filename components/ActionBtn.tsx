"use client"
import { MouseEventHandler, ReactNode } from "react"

const ActionBtn = ({ onClick, children, className = "" }:{onClick: MouseEventHandler<HTMLButtonElement>, children: ReactNode, className?:string}) => {
  return (
      <button onClick={onClick} className={`mx-auto w-full h-[52px] text-[16px] my-4 rounded-full  font-[satoshi] flex items-center justify-items-center justify-center align-middle hover:translate-y-[2px] active:translate-y-[2px] transition-all duration-[.2]  hover:shadow-inner ${className}`}>
        {children}
      </button>
  )
}

export { ActionBtn }