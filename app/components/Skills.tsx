/* eslint-disable @next/next/no-img-element */
import framer from "@/public/framer-motion.png";
import nextjs from "@/public/nextjs.png";
import git from "@/public/git.png";
import javascript from "@/public/javascript.png";
import mongodb from "@/public/mongodb.png";
import nodejs from "@/public/node-js.png";
import react from "@/public/reactjs.png";
import shadcn from "@/public/shadcn.png";
import tailwind from "@/public/trailwindcss.png";
import typescript from "@/public/typescript.png";
import github from "@/public/github.png";
import supabase from "@/public/supabase.png";
import Image from "next/image";
import { motion as m } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "Next.js", image: nextjs },
    { name: "Git", image: git },
    { name: "JavaScript", image: javascript },
    { name: "MongoDB", image: mongodb },
    { name: "Node.js", image: nodejs },
    { name: "React", image: react },
    { name: "Framer Motion", image: framer },
    { name: "Shadcn", image: shadcn },
    { name: "Tailwind CSS", image: tailwind },
    { name: "TypeScript", image: typescript },
    { name: "Github", image: github },
    { name: "SupaBase", image: supabase },
  ];

  const staggerVariants = {
    initial: {
      opacity: 0,
      x: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    initial: {
      opacity: 0,
      x: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <m.main
      className="max-w-full max-h-full flex flex-col items-center gap-6 py-32"
      variants={staggerVariants}
      initial="initial"
      whileInView="animate"
    >
      <h1 className="text-3xl font-bold">My Skills</h1>
      <m.div
        className="grid grid-cols-4 mt-6 gap-6 px-4 md:px-12"
        variants={staggerVariants}
      >
        {skills.map((skill, index) => (
          <m.div key={index} variants={childVariants}>
            <Image className="md:w-32" src={skill.image} alt={skill.name} />
          </m.div>
        ))}
      </m.div>
    </m.main>
  );
};

export default Skills;
