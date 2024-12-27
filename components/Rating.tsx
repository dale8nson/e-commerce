import { RatingStar } from "./RatingStar"
import { HalfStar } from "./HalfStar"

const Rating = ({ children }: { children: string }) => {
  const fullStars = children.match(/^([0-9]+)\.[05]/)
  const halfStars = children.match(/\.5/)
  const total = children.match(/\/([0-9]+)/)
  return (
    <div className="flex gap-3 items-center h-[20px]">
      <div className="flex gap-[0.32rem]">
        {fullStars && Array(Number(fullStars[1])).fill(0).map((_, i) => <RatingStar key={i} />)}
        {halfStars && <HalfStar />}
      </div>
      <p className="text-black">&nbsp;{fullStars && fullStars[1] + (halfStars ? `.5` : ".0")}/<span className="opacity-60">{total && total[1]}</span></p>
    </div>
  )
}

export { Rating }