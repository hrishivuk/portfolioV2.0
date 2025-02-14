"use client";
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
          <h2 className="text-[64px] mb-4 lh-normal">I’m Hrishikesh Varma.</h2>
          <div className="text-[1.5em] font-mono">
            <div className="flex items-end">
              <h3 className="text-[64px] lh-normal"></h3>
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
          <h3 className="text-[64px] lh-normal">
            <span className="text-light-text">making ideas come to life.</span>
          </h3>
        </GridItem>
        <GridItem className="bg-light-purple ">
          <TobyFace className="h-full w-full rounded-3xl" />
        </GridItem>
        <GridItem className="bg-light-blackFill !p-0">
          {/* <DateTime className="w-full" /> */}
          <Weather className="w-full h-full rounded-3xl" />
          {/* <QuoteCarousel /> */}
          {/* <div className="bg-white">hi</div> */}
        </GridItem>
        <GridItem className="bg-light-blackFill flex flex-col items-center justify-between">
          <img
            src="/images/logo.png"
            alt="Italian Trulli"
            height={"60px"}
            width={"60px"}
          />
          <h3 className="text-[40px] lh-normal text-center text-white font-semibold">
            Have a project in mind?
          </h3>
          <button
            label=""
            className="bg-[#F75D48] hover:bg-[#f5412a] text-[32px] font-bold text-white px-6 py-3 rounded-full"
          >
            Let's get in touch
          </button>
        </GridItem>
        <GridItem className="bg-light-blackFill !p-0">
          <iframe
            style={{ borderRadius: "36px" }}
            src="https://open.spotify.com/embed/playlist/7uSBrTu6MXgaPhZatVlRx1?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
          ></iframe>
        </GridItem>
      </section>
    </main>
  );
}
