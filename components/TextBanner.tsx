import Link from "next/link";
import { ReactNode } from "react";

const TextBanner = ({children }: {children:ReactNode }) => {
  return (
    <div className="text-banner bg-black text-white text-xs font-[satoshi] h-[32px] w-full flex items-center justify-items-center justify-center align-middle [&_a]:underline">
      {children}
    </div>
  );
}

export { TextBanner };