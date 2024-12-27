"use client"
import { TextBanner } from "@/components/TextBanner"
import Link from "next/link"
import { AppBar } from "@/components/AppBar"
import { Hero } from "@/components/Hero"
import { Product } from "@/components/Product"
import { Category } from "@/components/Category"
import { Reviews, Review } from "@/components/Reviews"

export default function Home() {

  return (
    <div className="w-[390px] mx-auto">
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
            <Product.Image className="w-[198px] h-[200px]" src="/Frame 33.png" width="295" height="298" alt="Skinny Fit Jeans" />
            <Product.Name>Skinny Fit Jeans</Product.Name>
            <Product.Rating>3.5/5</Product.Rating>
            <Product.Price>$240</Product.Price>
            <Product.PriceStrikethrough>$260</Product.PriceStrikethrough>
            <Product.Pill>-20%</Product.Pill>
          </Product.Card>
          <Product.Card>
            <Product.Image className="w-[198px] h-[200px]" src="/Frame 34.png" width="396" height="401" alt="Checkered Shirt" />
            <Product.Name>Checkered Shirt</Product.Name>
            <Product.Rating>4.5/5</Product.Rating>
            <Product.Price>$180</Product.Price>
          </Product.Card>
          <Product.Card>
            <Product.Image className="w-[198px] h-[200px] object-cover rounded-xl" src="/Image 10.png" width="295" height="298" alt="Sleeve Striped T-shirt" />
            <Product.Name>Sleeve Striped T-shirt</Product.Name>
            <Product.Rating>3.5/5</Product.Rating>
            <Product.Price>$240</Product.Price>
            <Product.PriceStrikethrough>$260</Product.PriceStrikethrough>
            <Product.Pill>-20%</Product.Pill>
          </Product.Card>
        </Product.Group>
        <Product.Group>
          <Product.Group.Title>TOP SELLING</Product.Group.Title>
          <Product.Card>
            <Product.Image className="w-[198px] h-[200px]" src="/Frame 32.png" alt="Vertical Striped Shirt" width="590" height="596" />
            <Product.Name>Vertical Striped Shirt</Product.Name>
            <Product.Rating>5.0/5</Product.Rating>
            <Product.Price>$212</Product.Price>
            <Product.PriceStrikethrough>$232</Product.PriceStrikethrough>
            <Product.Pill>-20%</Product.Pill>
          </Product.Card>
          <Product.Card>
            <Product.Image className="w-[198px] h-[200px]" src="/Frame 33@2x.png" alt="Courage Graphic T-shirt" width="590" height="596" />
            <Product.Name>Courage Graphic T-shirt</Product.Name>
            <Product.Rating>4.0/5</Product.Rating>
            <Product.Price>$145</Product.Price>
          </Product.Card>
          <Product.Card>
            <Product.Image className="w-[198px] h-[200px]" src="/Frame 34-1.png" alt="Loose Fit Bermuda Shorts" width="590" height="596" />
            <Product.Name>Loose Fit Bermuda Shorts</Product.Name>
            <Product.Rating>3.0/5</Product.Rating>
            <Product.Price>$80</Product.Price>
          </Product.Card>
          <Product.Card>
            <Product.Image className="w-[198px] h-[200px]" src="/Frame 38-1.png" alt="Faded Skinny Jeans" width="590" height="596" />
            <Product.Name>Faded Skinny Jeans</Product.Name>
            <Product.Rating>4.5/5</Product.Rating>
            <Product.Price>$210</Product.Price>
          </Product.Card>
        </Product.Group>
        <Category.Grid>
          <Category.Grid.Title>BROWSE BY DRESS STYLE</Category.Grid.Title>
          <Category>
            <Category.Image src="/casual-mobile.png" width="572" height="383" alt="casual" />
            <Category.Name>Casual</Category.Name>
          </Category>
          <Category>
            <Category.Image src="/formal-mobile.png" width="620" height="380" alt="formal" />
            <Category.Name>Formal</Category.Name>
          </Category>
          <Category>
            <Category.Image src="/party-mobile.png" width="620" height="380" alt="party" />
            <Category.Name>Party</Category.Name>
          </Category>
          <Category>
            <Category.Image src="/gym-mobile.png" width="620" height="380" alt="sports" />
            <Category.Name>Gym</Category.Name>
          </Category>
        </Category.Grid>
        <Reviews>
          <Reviews.Title>OUR HAPPY CUSTOMERS</Reviews.Title>
          <Review>
            <Review.Rating>5.0/5</Review.Rating>
            <Review.Name>Sarah M.</Review.Name>
            <Review.Verified />
            <Review.Text>"I'm blown away by the quality and style of the clothes I receive from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded expectations."
            </Review.Text>
          </Review>
          <Review>
            <Review.Rating>5.0/5</Review.Rating>
            <Review.Name>Alex K.</Review.Name>
            <Review.Verified />
            <Review.Text>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
            </Review.Text>
          </Review>
          <Review>
            <Review.Rating>5.0/5</Review.Rating>
            <Review.Name>James L.</Review.Name>
            <Review.Verified />
            <Review.Text>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
            </Review.Text>
          </Review>
        </Reviews>
      </main>
      <footer className="">

      </footer>
    </div>
  );
}
