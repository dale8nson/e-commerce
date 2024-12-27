"use client"
import { AccountBtn } from './AccountBtn';
import { CartBtn } from './CartBtn';
import { MobileMenuBtn } from './MobileMenuBtn';
import { SearchBtn } from './SearchBtn';
const AppBar = () => {
  return (
    <header className="sticky top-0 left-0 flex w-full bg-white h-16 px-4 justify-between z-10">
      <div className="flex align-middle items-center">
        <MobileMenuBtn onClick={() => {}} />
        <h1 className="font-extrabold text-[25.2px] font-sans">SHOP.CO</h1>
      </div>
      <div className="flex">
        <SearchBtn onClick={() => {}}/>
        <CartBtn onClick={() => {}} />
        <AccountBtn onClick={() => {}} />
      </div>
    </header>
  );
}

export { AppBar };