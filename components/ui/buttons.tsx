import { Children } from 'react';
import { cn } from "@/utils/cn";

export const ButtonBorderMagic = ({
  className,
  text,
  children,
}: {
  text?: string;
  className?: string;
}) => {
  return (
    <button className={cn("relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50", className)}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
	{children} 
      </span>
    </button>
  )
};

export const ButtonBorderLitup = ({
  className,
  text,
  children,
}: {
  text?: string;
  className?: string;
}) => {
  return (
    <button className={cn("p-[3px] relative", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
       {children} 
      </div>
    </button>
  )
};

export const ButtonFancyMain = ({
  className,
  children,
  onClick,
  section,
}: {
  className?: string;
  onClick?: Function;
  section?: string
}) => {
  const onClickFunction = onClick ?? (() => document.querySelector(`#${section}`).scrollIntoView({ behavior: "smooth"}));

  return (
    <button onClick={onClickFunction} className="bg-transparent text-md p-2 text-white border-2 rounded-full min-w-40 border-white ease-in-out hover:scale-110 hover:border-violet-900 max-w-48 hover:bg-violet-900 transition-all duration-300 mx-2">
      {children}
    </button>
  )
};
