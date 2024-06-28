"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },

    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind CSS",
      Icon: SiTailwindcss,
    },
    {
      text: "Python",
      Icon: SiPython,
    },

    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "Typescript",
      Icon: SiTypescript,
    },
    {
      text: "Java",
      Icon: FaJava,
    },

    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "SQL",
      Icon: TbSql,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <HoverEffect items={skills} />
    </div>
  );
}
