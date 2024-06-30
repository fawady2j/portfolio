import React from "react";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSanity,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      tech: [SiNextdotjs, SiTailwindcss, SiTypescript],
      Link: "https://github.com/fawady2j/portfolio",
      cover: "/project1.png",
      background: "bg-white",
    },
    {
      title: "Music Networking App",
      tech: [SiReact, SiNodedotjs, SiExpress, SiMongodb],
      Link: "https://den.up.railway.app/",
      cover: "/project2.png",
      background: "bg-white",
    },
    {
      title: "E-Commerce App",
      tech: [SiNextdotjs, SiTailwindcss, SiJavascript, SiSanity, SiStripe],
      Link: "https://e-commerce-lake-omega-68.vercel.app/",
      cover: "/project3.png",
      background: "bg-white",
    },
    {
      title: "Tic-Tac-Toe",
      tech: [SiHtml5, SiCss3, SiJavascript],
      Link: "https://tic-tac-toe-beige-seven.vercel.app/",
      cover: "/project4.png",
      background: "bg-white",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects"
        className="flex flex-col items-center justify-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.Link} key={index}>
              <div className={cn("p-2", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
