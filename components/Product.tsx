"use client"
import Image from "next/image"
import { ImageProps } from "next/image"
import { JSX, useEffect, useMemo, useState, useId } from "react"
import type { ReactElement, ReactNode } from "react"
import { Rating } from "./Rating"
import { ActionBtn } from "./ActionBtn"
import { gsap } from "gsap"

type Title = ({ children }: { children: string }) => JSX.Element
type TitleType = ReactElement<string, Title>

type CardChildrenProps = readonly [ReactElement<ImageProps, typeof Image>, ReactElement<string, typeof Product.Name>, ReactElement<string, typeof Product.Price>, ReactElement<string, typeof Rating>?, ReactElement<string, typeof Product.PriceStrikethrough>?, ReactElement<string, typeof Product.Pill>?]

type CardType = ReactElement<CardChildrenProps, Card>

type Card = ({ children }: { children: CardChildrenProps }) => JSX.Element

type Group = {
  ({ children }: {
    children: readonly [TitleType, ...ReactElement<CardChildrenProps, Card>[]]
  }): JSX.Element
  Title: Title
}

interface Product {
  Image: typeof Image,
  Name: ({ children }: { children: string }) => JSX.Element,
  Rating: typeof Rating,
  Price: ({ children }: { children: string }) => JSX.Element,
  PriceStrikethrough: ({ children }: { children: string }) => JSX.Element,
  Pill: ({ children }: { children: string }) => JSX.Element,
  Card: Card,
  Group: Group,
}

const Product: Product = {} as Product

const PriceStrikethrough = ({ children }: { children: string }) => {
  return (
    <div className="font-[satoshi] line-through decoration-[#999999] decoration-[1.5px] text-xl font-bold text-black text-opacity-40">
      {children}
    </div>
  )
}

Product.PriceStrikethrough = PriceStrikethrough

const Pill = ({ children }: { children: string }) => {
  return (
    <div className="font-[satoshi] flex items-center rounded-3xl bg-[#ff3333] bg-opacity-10 px-4 py-0 text-[#ff3333] text-[10px] ">
      {children}
    </div>
  )
}

Product.Pill = Pill

function Card({ children }: { children: CardChildrenProps }) {
  const img = useMemo(() => children.find(child => child?.type.name === Image.name) as ReactElement<ImageProps, typeof Image>, [])

  const name = useMemo(() =>children.find(child => child?.type.name === Product.Name.name) as ReactElement<string, typeof Product.Name>, [])

  const rating = useMemo(() => children.find(child => child?.type.name === Rating.name) as ReactElement<string, typeof Rating>, [])

  const price = useMemo(() => children.find(child => child?.type.name === Product.Price.name) as ReactElement<string, typeof Product.Price>, [])

  console.log("Product.PriceStrikethrough.name: ", Product.PriceStrikethrough.name)
  const priceStrikethrough = useMemo(() => children.find(child => {
    console.log("child?.type.name: ", child?.type.name)
    return child?.type.name === Product.PriceStrikethrough.name
  }) as ReactElement<string, typeof Product.PriceStrikethrough>, [])

  const pill = useMemo(() => children.find(child => child?.type.name === Product.Pill.name) as ReactElement<string, typeof Product.Pill>, [])

  return (

    <div className="p-2 flex flex-col gap-2">
      {img}
      {name}
      {rating}
      <div className="flex gap-2">
        {price}
        {priceStrikethrough && priceStrikethrough}
        {pill && pill}
      </div>
    </div>
  )
}

Product.Card = Card

function Group({ children }: { children: readonly [TitleType, ...ReactElement<CardChildrenProps, Card>[]] }) {
  
  const [reveal, setReveal] = useState(false)
  const [btnText, setBtnText] = useState("View All")
  const id = useId()

  console.log("id: ", id)
  const components = useMemo(()=> Array.from(children) as Array<TitleType | CardType>, [children])

  const TitleChild = useMemo(() => components.find(component => {
    return component.type.name === Title.name
  }) as TitleType, [components])

  const Cards = useMemo(() => components.filter(component => component.type.name === Card.name), [components])

  let revealAnim: gsap.core.Tween
  let hideAnim: gsap.core.Tween

  useEffect(() => {
    const el = document.getElementById(id)
    revealAnim = gsap.to(el, { height: "auto", duration: .2, paused: true })
    hideAnim = gsap.to(el, { height: "309px", duration: .2, paused: true })

    if (reveal) {
      revealAnim.play()
      setBtnText("View Less")
    } else {
      hideAnim.play()
      setBtnText("View All")
    }
  }, [reveal])

  return (
    <div key={id} className="py-5 flex flex-col items-center mx-1">
      {TitleChild}
      <div className="cards grid grid-cols-2 gap-0 overflow-hidden" id={id} style={{ height: "309px" }}>
        {Cards}
      </div>
      <div className="flex flex-col align-middle w-full gap-4 mx-4">
        <ActionBtn onClick={() => {setReveal(!reveal)}} className="text-black bg-white border-[1px] border-opacity-10 border-black border-solid">{btnText}</ActionBtn>
        <hr className="border-[#000000] mt-6 border-opacity-10 w-full h-0" />
      </div>
    </div>
  )
}

function Title({ children }: { children: string }) {
  return (
    <div className="font-black text-black text-[32px] px-16 text-center">
      {children as string}
    </div>
  )
}

Group.Title = Title as Title

const Name = ({ children }: { children: string }) => {
  return (
    <div className="text-[16px] h-[20px] font-[satoshi] font-bold text-black">
      {children}
    </div>
  )
}

Product.Name = Name

const Price = ({ children }: { children: string }) => {
  return (
    <div className="font-[satoshi] text-xl font-bold text-black">
      {children}
    </div>
  )
}

Product.Price = Price
Product.Group = Group
Product.Image = Image
Product.Rating = Rating

export { Product }