import { JSX, ReactElement, ReactNode } from "react"
import NextImage, { ImageProps } from "next/image"

type Grid = {
  ({ children }: { children: GridChildren }): JSX.Element
  Title: Title
}

type GridChildren = [ReactElement<string, Title>, ...ReactElement<CategoryChildren, Category>[]]

type Title = ({ children }: {
  children: string;
}) => JSX.Element

type Category = {
  ({ children }: { children: CategoryChildren }): JSX.Element
  Image: Image
  Name: Name,
  Grid: Grid
}

type CategoryChildren = [
  ReactElement<ImageProps, typeof NextImage>,
  ReactElement<string, typeof Name>
]

type Image = (props: ImageProps) => JSX.Element

type Name = ({ children }: {
  children: string;
}) => JSX.Element

const Category: Category = ({ children }) => {
  const name = children.find(child => child?.type.name === Name.name)
  const image = children.find(child => child?.type.name === Image.name)
  return (
    <div className="flex flex-col relative justify-center justify-items-center align-middle items-center px-4 py-2">
      <div className="rounded-xl flex justify-items-center items-center overflow-hidden">
        {image}
      </div>
      <div className="absolute top-4 left-6">
        {name}
      </div>
    </div>
  )
}

const Grid: Grid = ({ children }) => {
  const title = children.find(child => child?.type.name === Title.name)
  const categories = children.filter(child => child?.type.name === Category.name)
  return (
    <div className="flex flex-col items-center bg-[#f0f0f0] rounded-xl py-8 m-4">
      {title}
      <div className=" flex flex-col align-middle items-center md:grid md:grid-cols-3 gap-0 md:gap-0 mx-0 ">
        {categories.map((category, i) => (
          <div key={i} className={`flex flex-col rounded-xl relative`} style={{gridColumn: `span ${i % 3 == 0 ? 1 : 2}`}} >
            {category}
          </div>
        ))}
      </div>
    </div>
  )
}

const Title: Title = ({ children }) => {
  return (
    <div className="font-black text-black text-[32px] px-16 text-center">
      {children}
    </div>
  )
}

Grid.Title = Title

const Image: Image = (props) => {
  return (
    <NextImage style={{objectFit:"cover", borderRadius: "0.75rem"}} {...props} />
  )
}

const Name: Name = ({ children }) => {
  return (
    <div className="font-[satoshi] text-black text-2xl font-bold">
      {children}
    </div>
  )
}

Category.Image = Image
Category.Name = Name
Category.Grid = Grid

export { Category }