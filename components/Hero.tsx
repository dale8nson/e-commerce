"use client"
import Image from "next/image";
import { ActionBtn } from "./ActionBtn";
import { Metric } from "./Metric";
import { Star } from "./Star";

const Hero = () => {
  return (
    <div className="py-5">
      <div className="px-4">
        <h2 className="font-sans font-black text-[36px] tracking-widest leading-[38px]">FIND CLOTHES<br /> THAT MATCH <br />YOUR STYLE</h2>
        <p className="font-[satoshi] text-[14px] text-[#000000] opacity-60 py-4">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <ActionBtn>Shop Now</ActionBtn>
        <div className="p-4 flex flex-col align-middle justify-center gap-4">
          <div className="flex px-2 justify-center gap-4">
            <Metric className="border-r-2 border-solid">
              <Metric.Value>200+</Metric.Value>
              <Metric.Context>International Brands</Metric.Context>
            </Metric>
            <Metric>
              <Metric.Value>2,000+</Metric.Value>
              <Metric.Context>High-Quality Products</Metric.Context>
            </Metric>
          </div>
          <div className="flex justify-center">
            <Metric>
              <Metric.Value>30,000+</Metric.Value>
              <Metric.Context>Happy Customers</Metric.Context>
            </Metric>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image className="w-[390px] h-[448px]" src="/Rectangle 2@2x.png" width={1440} height={663} alt="" />
        <div className="absolute right-[10%] top-[7%] w-[76px] h-[76px]">
          <Star fill="black" />
        </div>
        <div className="absolute left-[2%] top-[23%] scale-[0.45]">
          <Star fill="black" />
        </div>
      </div>
      <div className="w-full h-full flex flex-wrap justify-center bg-black text-white col p-8 gap-8">
        <Image src="/Versace-Logo.svg" width="117" height="24" alt="" />
        <Image src="/zara-logo-1 1@2x.png" width="64" height="27" alt="" />
        <Image src="/gucci-logo-1 1@2x.png" width="110" height="26" alt="" />
        <Image src="/prada-logo-1 1@2x.png" width="127" height="21" alt="" />
        <Image src="/CK-logo.svg" width="135" height="22" alt="" />
      </div>
    </div>
  );
}

export { Hero } 