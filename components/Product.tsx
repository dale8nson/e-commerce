
import Image from "next/image"
import { ImageProps } from "next/image"
import { JSX } from "react"
import type { ReactElement, ReactNode } from "react"
import { Rating } from "./Rating"
import { ActionBtn } from "./ActionBtn"

type Title = ({ children }: { children: string }) => JSX.Element
type TitleType = ReactElement<string, Title>

type CardChildrenProps = readonly [ReactElement<ImageProps, typeof Image>, ReactElement<string, typeof Product.Name>, ReactElement<string, typeof Rating>, ReactElement<string, typeof Product.Price>, ReactElement<string, typeof Product.PriceStrikethrough>?]

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
  Card: Card,
  Group: Group,
}

const Product: Product = {} as Product

const Title: Title = ({ children }) => {
  return (
    <div className="text-[32px] font-[satoshi] font-bold text-black flex justify-center">
      {children as string}
    </div>
  ) as JSX.Element
}

const Card = ({ children }: { children: CardChildrenProps }) => {
  const img = children.find(child => child?.type.name === Image.name) as ReactElement<ImageProps, typeof Image>

  console.log("img.type.name: ", img.type.name)

  const name = children.find(child => child?.type.name === Product.Name.name) as ReactElement<string, typeof Product.Name>

  console.log("Product.Name.name: ", Product.Name.name)

  const rating = children.find(child => child?.type.name === Rating.name) as ReactElement<string, typeof Rating>

  console.log("Rating.name: ", Rating.name)

  const price = children.find(child => child?.type.name === Product.Price.name) as ReactElement<string, typeof Product.Price>

  console.log("Product.PriceStrikethrough.name: ", Product.PriceStrikethrough.name)
  const priceStrikethrough = children.find(child => {
    console.log("child?.type.name: ", child?.type.name)
    return child?.type.name === Product.PriceStrikethrough.name}) as ReactElement<string, typeof Product.PriceStrikethrough>

  return (
    
    <div className="p-2 flex flex-col gap-2">
      {img}
      {name}
      {rating}
      <div className="flex gap-2">
        {price}
        {priceStrikethrough && priceStrikethrough}
      </div>
    </div>
  )
}

Product.Card = Card

const Group: Group = ({ children }) => {
  const components = Array.from(children) as Array<TitleType | CardType>
  const TitleChild = components.find(component => {
    return component.type.name === Title.name
  }) as TitleType
  const Cards = components.filter(component => component.type.name === Card.name)

  return (
    <div className="py-5 flex flex-col items-center mx-1 h-[489px] overflow-hidden">
      {TitleChild}
      <div className="grid grid-cols-2 gap-0">
        {Cards}
      </div>
      <div className="flex flex-col align-middle w-full gap-4 mx-4">
        <ActionBtn className="text-black bg-white border-[1px] border-opacity-10 border-black border-solid">View All</ActionBtn>
        <hr className="border-[#000000] mt-6 border-opacity-10 w-full h-0"/>
      </div>
    </div>
  )
}

Group.Title = Title

Product.Group = Group
Product.Image = Image
Product.Rating = Rating

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

const PriceStrikethrough = ({ children }: { children: string }) => {
  return (
    <div className="font-[satoshi] line-through decoration-[#999999] decoration-[1.5px] text-xl font-bold text-black text-opacity-40">
      {children}
    </div>
  )
}

Product.PriceStrikethrough = PriceStrikethrough



export { Product }