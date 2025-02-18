"use client";
import { motion } from "framer-motion";
import GridItem from "./components/gridItem";
import Navbar from "./components/navbar";
import TobyFace from "./components/tobyFace";
import Weather from "./components/weather";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* hero */}
      <section className="grid grid-cols-3 gap-[15px] max-w-[1200px] w-full mt-[15px] mx-auto">
        <GridItem size={2} className="bg-light-blackFill text-white pr-[85px]">
          <motion.h2
            className="text-[64px] mb-4 lh-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            I’m Hrishikesh Varma.
          </motion.h2>
          <div className="text-[1.5em] font-mono">
            <div className="flex items-end">
              <motion.h3
                className="text-[64px] lh-normal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              <Typewriter
                options={{
                  strings: [
                    "I’m a web developer,",
                    "I’m a UI/ UX designer,",
                    "I’m a creative thinker,",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "_",
                  delay: 75,
                }}
              />
            </div>
          </div>
          <motion.h3
            className="text-[64px] lh-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="text-light-text">making ideas come to life.</span>
          </motion.h3>
        </GridItem>

        <GridItem className="bg-light-purple">
          <motion.div
            className="h-full w-full rounded-3xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <TobyFace />
          </motion.div>
        </GridItem>

        <GridItem className="bg-light-blackFill !p-0">
          <motion.div
            className="w-full h-full rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Weather />
          </motion.div>
        </GridItem>

        <GridItem className="bg-light-blackFill flex flex-col items-center justify-between">
          <motion.img
            src="/images/logo.png"
            alt="Italian Trulli"
            height={"60px"}
            width={"60px"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.h3
            className="text-[40px] lh-normal text-center text-white font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Have a project in mind?
          </motion.h3>
          <motion.button
            className="bg-[#F75D48] hover:bg-[#f5412a] text-[32px] font-bold text-white px-6 py-3 rounded-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Let's get in touch
          </motion.button>
        </GridItem>

        <GridItem className="bg-light-blackFill !p-0">
          <motion.iframe
            style={{ borderRadius: "36px" }}
            src="https://open.spotify.com/embed/playlist/7uSBrTu6MXgaPhZatVlRx1?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          ></motion.iframe>
        </GridItem>
      </section>
    </main>
  );
}
