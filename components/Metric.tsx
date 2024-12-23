import { ReactNode } from "react";

const Metric = ({ children, className }: { children: ReactNode, className?:string }) => {
  return (
    <div className={"flex flex-col px-4 border-[#000000] border-opacity-10 " + className}>
      {children}
    </div>
  )
}

const Value = ({ children }: { children: ReactNode }) => {
  return (
    <div className="my-0">
      <h1 className="font-[satoshi] font-bold text-2xl">{children}</h1>
    </div>
  );
}

const Context = ({ children }: { children: ReactNode }) => {
  return (
    <div className="my-0">
      <p className="font-[satoshi] text-xs text-[#000000] opacity-60">{children}</p>
    </div>
  );
}

Metric.Value = Value
Metric.Context = Context

export { Metric }