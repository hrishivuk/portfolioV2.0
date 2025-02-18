"use client";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import GridItem from "../components/gridItem";
import Image from "next/image";
import angular from "../../../public/images/Skills/angular.svg";
import figma from "../../../public/images/Skills/figma.svg";
import framer_motion from "../../../public/images/Skills/framer_motion.svg";
import js from "../../../public/images/Skills/js.svg";
import nextjs from "../../../public/images/Skills/nextjs.svg";
import photoshop from "../../../public/images/Skills/photoshop.svg";
import react from "../../../public/images/Skills/react.svg";
import tailwind from "../../../public/images/Skills/tailwind.svg";
import typescript from "../../../public/images/Skills/typescript.svg";
import git from "../../../public/images/Skills/git.svg";
import nodejs from "../../../public/images/Skills/nodejs.svg";

export default function AboutMe() {
  return (
    <main>
      <Navbar />
      <section className="grid grid-cols-3 gap-6 max-w-[1200px] w-full mt-10 mx-auto">
        <GridItem
          size={2}
          className="bg-light-blackFill text-white p-10 overflow-hidden"
        >
          <motion.h1
            className="text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            I’m Hrishikesh Varma.
          </motion.h1>

          <motion.h2
            className="text-2xl font-medium text-light-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            You can call me Hrishi.
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed max-w-prose text-light-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            I'm a{" "}
            <motion.span
              className="text-xl font-semibold inline-block text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              Frontend Developer & Creative Digital Media enthusiast
            </motion.span>{" "}
            based in{" "}
            <motion.span
              className="text-xl font-semibold inline-block text-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              Dublin.
            </motion.span>
          </motion.p>

          <motion.p
            className="text-lg mt-4 leading-relaxed max-w-prose text-light-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          >
            With a background in{" "}
            <span className="text-white font-semibold">Computer Science</span>{" "}
            and a deep passion for{" "}
            <span className="text-white font-semibold">UI/UX design</span>, I
            specialize in crafting intuitive and visually compelling digital
            experiences that bring ideas to life.
          </motion.p>
        </GridItem>
        <GridItem></GridItem>
      </section>

      {/* Logo Slider */}
      <section className="mt-12">
        <div className="relative overflow-hidden py-4">
          <div className="flex w-full animate-scroll">
            {[
              angular,
              figma,
              framer_motion,
              js,
              nextjs,
              photoshop,
              react,
              tailwind,
              typescript,
              git,
              nodejs,
            ]
              .concat([
                angular,
                figma,
                framer_motion,
                js,
                nextjs,
                photoshop,
                react,
                tailwind,
                typescript,
                git,
                nodejs,
              ])
              .map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-40 mx-4">
                  <Image
                    src={logo}
                    alt="logo"
                    className="h-20 object-contain"
                    width={250}
                    height={100}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
