"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [transparent, setTransparent] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (!(typeof current === "number")) {
      return;
    }

    if (window.pageYOffset > window.innerHeight) {
      setTransparent(false);
      return;
    }
    setTransparent(true);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -30,
        }}
        animate={{
          y: -30,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-purple-700 text-white z-[5000] pr-2 pl-8 p-2 items-center justify-center space-x-4 transition-all duration-300",
          className,
          transparent
            ? "bg-transparent"
            : "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <button
            key={`link=${idx}`}
            onClick={() =>
              document
                .querySelector(`#${navItem.link}`)
                .scrollIntoView({ behavior: "smooth" })
            }
            className={cn(
              "relative items-center flex space-x-1 text-white hover:text-violet-400 p-3 transition duration-300",
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
