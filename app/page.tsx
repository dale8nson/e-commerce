import { TextBanner } from "@/components/TextBanner";
import Image from "next/image";
import Link from "next/link";
import { AppBar } from "@/components/AppBar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="">
      <TextBanner>Sign up and get 20% off to your first order.&nbsp;<Link href="">Sign Up Now</Link></TextBanner>
      <AppBar />
      <main className="w-full h-full">
        <Hero />
      </main>
      <footer className="">

      </footer>
    </div>
  );
}
