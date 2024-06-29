"use client";

import { MovingBorderBtn } from "@/components/ui/moving-border";
import { annotate } from "rough-notation";
import Link from "next/link";
import react, { useEffect } from "react";
import Title from "./Title";

export default function HeroSection() {
  useEffect(() => {
    const hireMeElement = document.getElementById("hire-me");
    if (hireMeElement) {
      const annotation = annotate(hireMeElement, {
        type: "box",
        color: "pink",
        padding: 6,
        animationDuration: 2000,
      });
      annotation.show();
    }
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg-gap-0 lg:flex-row  items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 id="greeting" className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! <br />
          <span className="underline underline-offset-8 decoration-cyan-400">
            {"I'm Fawad"}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in Long Island NY, I'm a new graduate looking for somewhere to begin my career after completing my Bachelor's of Science in Computer Science. "
          }
          <span id="hire-me">Hire me?</span>
        </p>
        <Link
          href={"mailto:fawady2j@gmail.com"}
          className="inline-block group z-10 relative"
        >
          <Title text="Contact Me" />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-teal-300"></div>
            <div className="w-32 h-32 rounded-full bg-cyan-300"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-teal-300"></div>
            <div className="w-32 h-32 rounded-full bg-cyan-300"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        {/* <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>Available for Work</p>
          </MovingBorderBtn>
        </div> */}
      </div>
    </div>
  );
}
