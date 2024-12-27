"use client"
import { JSX, ReactElement, useEffect, useState, useMemo, useCallback } from "react"
import { Rating } from "./Rating"
import { LeftArrow } from "./LeftArrow"
import { RightArrow } from "./RightArrow"
import { Verified } from "./Verified"
import { gsap } from "gsap/gsap-core"

type Reviews = {
  ({ children }: { children: ReviewsChildren }): JSX.Element
  Title: Title
}

type ReviewsChildren = [ReactElement<string, Title>, ...ReactElement<ReviewsChildren, Review>[]]

type Title = ({ children }: { children: string }) => JSX.Element

type Review = {
  ({ children }: { children: ReviewChildren }): JSX.Element
  Rating: Rating
  Name: Name
  Verified: Verified
  Text: Text
}

type ReviewChildren = [ReactElement<string, Rating>, ReactElement<string, Name>, ReactElement<string, Text>, ReactElement<void, Verified>?]

type Name = ({ children }: { children: string }) => JSX.Element
type Text = ({ children }: { children: string }) => JSX.Element

type Rating = typeof Rating
type Verified = typeof Verified

const Title: Title = ({ children }) => {
  return <h1 className="font-black text-black text-[32px] leading-[32px] px-0">{children}</h1>
}

const Name: Name = ({ children }) => {
  return <h2 className="font-bold text-[#000000] text-lg">{children}</h2>
}

const Text: Text = ({ children }) => {
  return <p className="font-[satoshi] text-[#000000] text-sm opacity-60">{children}</p>
}

const Review: Review = ({ children }) => {
  const name = children.find(child => child?.type.name === Name.name)
  const rating = children.find(child => child?.type.name === Rating.name)
  const text = children.find(child => child?.type.name === Text.name)
  const verified = children.find(child => child?.type.name === Verified.name) as ReactElement<void,Verified>

  return (
    <div className="flex flex-col gap-1 rounded-xl p-4 mx-auto my-2 border-[#000000] border-solid border-[1.5px] border-opacity-10 min-w-[385px]">
      {rating}
      <div className="flex items-center gap-2 mx-0">
        {name}
        {verified && verified}
        </div>
      {text}
    </div>
  )
}

Review.Rating = Rating
Review.Name = Name
Review.Verified = Verified
Review.Text = Text

const Reviews: Reviews = ({ children }) => {
  const title = children.find(child => child?.type.name === Title.name)
  const reviews = children.filter(child => child?.type.name === Review.name)

  const [reviewIndex, setReviewIndex] = useState(0)

  useEffect(() => {
    if(reviewIndex >= reviews.length) setReviewIndex(0)
    if(reviewIndex < 0) setReviewIndex(reviews.length - 1)
    const el = document.querySelector("#reviews")
    const rect = el?.getBoundingClientRect() as DOMRect
    gsap.to(el, { x: -(reviewIndex * (rect.width / reviews.length)), duration: 0.5})
  }, [reviewIndex])

  return (
    <div className="flex flex-col gap-2 justify-start justify-items-start align-middle items-center">
      <div className="flex p-4 justify-center justify-items-center w-full">
        {title}
        <div className="flex justify-between w-[70px]">
          <button onClick={() => setReviewIndex(reviewIndex - 1)} >
            <LeftArrow />
          </button>
          <button onClick={() => setReviewIndex(reviewIndex + 1)} >
            <RightArrow />
          </button>
        </div>
      </div>
      <div className="min-w-[395px] min-h-[200px] overflow-hidden relative">
        <div id="reviews" className={`flex gap-4 self-start flex-nowrap   absolute left-0 top-0`}>
          {reviews.map((review, i) => (
            <div key={i} className="flex flex-col gap-2">
              {review}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Reviews.Title = Title

export { Reviews, Review }