import { TextBanner } from "@/components/TextBanner"
import Link from "next/link"
import { AppBar } from "@/components/AppBar"
import { Hero } from "@/components/Hero"
import { Product } from "@/components/Product"

export default function Home() {
  return (
    <div className="">
      <TextBanner>Sign up and get 20% off to your first order.&nbsp;<Link href="">Sign Up Now</Link></TextBanner>
      <AppBar />
      <main className="w-full h-full">
        <Hero />
        <Product.Group>
          <Product.Group.Title>NEW ARRIVALS</Product.Group.Title>
          <Product.Card>
            <Product.Image className="w-[198px] h-[200px]" src="/Frame 32@2x.png" width="396" height="401" alt="T-shirt with Tape Details" />
            <Product.Name>T-shirt with Tape Details</Product.Name>
            <Product.Rating>4.5/5</Product.Rating>
            <Product.Price>$120</Product.Price>
          </Product.Card>
          <Product.Card>
            <Product.Image className="w-[198px] h-[200px]" src="/Frame 33.png" width="295" height="298" alt="T-shirt with Tape Details" />
            <Product.Name>Skinny Fit Jeans</Product.Name>
            <Product.Rating>3.5/5</Product.Rating>
            <Product.Price>$240</Product.Price>
            <Product.PriceStrikethrough>$260</Product.PriceStrikethrough>
          </Product.Card>
        </Product.Group>
      </main>
      <footer className="">

      </footer>
    </div>
  );
}
