import React from "react";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
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
      Link: "http://localhost:3000/",
      cover: "/project1.png",
      background: "bg-pink-500",
    },
    {
      title: "Music Networking App",
      tech: [SiReact, SiNodedotjs, SiExpress, SiMongodb],
      Link: "https://den.up.railway.app/",
      cover: "/project2.png",
      background: "bg-gray-600",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.Link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
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
