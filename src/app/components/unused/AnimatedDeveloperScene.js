"use client";

import { useEffect, useState } from "react";
import {
  FiCloud,
  FiCoffee,
  FiFolder,
  FiMapPin,
} from "react-icons/fi";

const workNotes = [
  "Frontend developer",
  "UI engineer",
  "UX thinker",
  "Creative planning",
];

const projectFolders = ["CoachCanvas", "Findaside", "Brightspace", "Portfolio"];
const handwritingFont = '"Bradley Hand", "Segoe Print", "Comic Sans MS", cursive';

function WeatherMark({ condition }) {
  const label = condition?.toLowerCase() || "";

  if (label.includes("clear")) {
    return (
      <span className="relative inline-block h-7 w-7 rounded-full bg-[#f7a531]">
        <span className="absolute -right-2 bottom-1 h-3 w-6 rounded-full bg-white/80" />
      </span>
    );
  }

  if (label.includes("rain") || label.includes("drizzle")) {
    return (
      <span className="relative inline-block h-7 w-8">
        <span className="absolute left-0 top-1 h-4 w-8 rounded-full bg-[#8fa0bf]" />
        <span className="absolute bottom-0 left-2 h-2 w-0.5 rounded-full bg-[#f7a531]" />
        <span className="absolute bottom-0 left-5 h-2 w-0.5 rounded-full bg-[#f7a531]" />
      </span>
    );
  }

  return <FiCloud className="h-7 w-7 text-[#43577c]" aria-hidden />;
}

function WallShelf() {
  return (
    <div className="absolute left-10 top-10 hidden h-20 w-32 sm:block">
      <div className="absolute bottom-3 left-0 h-2 w-full rounded-full bg-[#32456c]" />
      <div className="absolute bottom-5 left-3 h-11 w-8 rounded-b-md bg-[#dfe7f2]">
        <div className="mx-auto h-7 w-5 rounded-b-full bg-[#6f86b6]" />
        <div className="absolute -left-2 top-1 h-8 w-4 -rotate-12 rounded-full bg-[#6f86b6]" />
      </div>
      <div className="absolute bottom-5 left-16 h-10 w-8 rounded-b-md bg-[#dfe7f2]">
        <div className="absolute left-3 top-0 h-8 w-1.5 rounded-full bg-[#32456c]" />
        <div className="absolute left-1 top-2 h-5 w-4 -rotate-12 rounded-full bg-[#6f86b6]" />
        <div className="absolute right-1 top-2 h-5 w-4 rotate-12 rounded-full bg-[#6f86b6]" />
      </div>
      <div className="absolute right-0 top-0 grid h-9 w-9 place-items-center rounded-full border-2 border-[#32456c] bg-[#eef2f8] text-[9px] font-semibold text-[#32456c]">
        09
      </div>
    </div>
  );
}

function Whiteboard() {
  return (
    <div className="absolute right-10 top-10 hidden w-[176px] -rotate-1 rounded-md border border-[#c8d3e6] bg-[#eef2f8] px-4 pb-4 pt-3 shadow-[0_16px_32px_rgba(35,49,84,0.14)] sm:block">
      <div className="absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 rounded-sm bg-[#f4d58a]/80" />
      <p
        className="mb-2 text-[20px] leading-none text-[#26385f]"
        style={{ fontFamily: handwritingFont }}
      >
        What I do
      </p>
      <div
        className="space-y-1.5 text-[13px] leading-snug text-[#43577c]"
        style={{ fontFamily: handwritingFont }}
      >
        {workNotes.map((note) => (
          <p key={note} className="relative pl-3">
            <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-[#f49a2f]" />
            {note}
          </p>
        ))}
      </div>
    </div>
  );
}

function DeskLamp() {
  return (
    <div className="absolute bottom-[86px] left-9 z-20 hidden h-28 w-24 sm:block">
      <div className="absolute bottom-0 left-4 h-2 w-14 rounded-full bg-[#26385f]" />
      <div className="absolute bottom-1 left-9 h-16 w-1.5 -rotate-[28deg] rounded-full bg-[#f49a2f]" />
      <div className="absolute bottom-12 left-4 h-14 w-1.5 rotate-[38deg] rounded-full bg-[#f49a2f]" />
      <div className="absolute left-0 top-2 h-9 w-12 -rotate-[28deg] rounded-b-full rounded-tl-full bg-[#f49a2f]" />
      <div className="absolute left-6 top-8 h-3 w-3 rounded-full bg-[#26385f]" />
    </div>
  );
}

function DeskPlant() {
  return (
    <div className="absolute bottom-[82px] right-10 z-20 h-28 w-24 sm:right-12">
      <div className="absolute bottom-0 left-7 h-9 w-12 rounded-b-lg rounded-t-sm bg-[#26385f]" />
      <div className="absolute bottom-8 left-12 h-16 w-1.5 rounded-full bg-[#6f86b6]" />
      <div className="absolute bottom-14 left-4 h-9 w-6 -rotate-[32deg] rounded-full bg-[#6f86b6]" />
      <div className="absolute bottom-[68px] left-11 h-10 w-6 rotate-[18deg] rounded-full bg-[#4f6695]" />
      <div className="absolute bottom-11 right-1 h-11 w-7 rotate-[34deg] rounded-full bg-[#6f86b6]" />
      <div className="absolute bottom-7 left-1 h-8 w-6 -rotate-[52deg] rounded-full bg-[#4f6695]" />
    </div>
  );
}

function CoffeeCup() {
  return (
    <div className="absolute bottom-[78px] left-[116px] z-20 hidden h-12 w-12 sm:block">
      <FiCoffee className="absolute -top-5 left-3 h-4 w-4 text-[#f49a2f]" aria-hidden />
      <div className="absolute bottom-0 left-1 h-9 w-8 rounded-b-lg rounded-t-sm bg-[#eef2f8]" />
      <div className="absolute bottom-5 left-2 h-1.5 w-6 rounded-full bg-[#f4d58a]" />
      <div className="absolute bottom-3 right-0 h-5 w-4 rounded-r-full border-2 border-[#eef2f8]" />
    </div>
  );
}

function Books() {
  return (
    <div className="absolute bottom-[84px] right-[104px] z-20 hidden h-11 w-16 sm:block">
      <div className="absolute bottom-0 h-3 w-16 rounded-sm bg-[#26385f]" />
      <div className="absolute bottom-3 left-2 h-3 w-14 rounded-sm bg-[#f49a2f]" />
      <div className="absolute bottom-6 left-5 h-3 w-11 rounded-sm bg-[#eef2f8]" />
    </div>
  );
}

function Monitor({ side = "left", weather }) {
  const weatherLabel = weather?.weather?.[0]?.main || "Clouds";
  const temperature = weather?.main?.temp ?? 14;
  const place = weather?.name || "Dublin";

  return (
    <div
      className={`absolute bottom-[136px] z-20 h-[126px] w-[168px] rounded-md border-[6px] border-[#26385f] bg-[#10192e] shadow-[0_12px_22px_rgba(35,49,84,0.18)] sm:h-[150px] sm:w-[198px] ${
        side === "left" ? "left-[126px] rotate-1" : "right-[126px] -rotate-1"
      }`}
    >
      {side === "left" ? (
        <div className="h-full px-3 py-3 font-mono text-[7px] leading-[1.7] text-[#dbe6ff] sm:text-[8px]">
          <p className="text-[#f49a2f]">git commit -m</p>
          <p className="text-white">&quot;building ideas&quot;</p>
          <p className="mt-2 text-[#8fa0bf]">const portfolio = &#123;</p>
          <p>
            <span className="text-[#f49a2f]">role:</span> frontend
          </p>
          <p>
            <span className="text-[#f49a2f]">city:</span> dublin
          </p>
          <p className="text-[#8fa0bf]">&#125;</p>
        </div>
      ) : (
        <div className="flex h-full flex-col justify-between p-3">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <div className="mb-1 flex items-center gap-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#8fa0bf]">
                <FiMapPin className="h-3 w-3" aria-hidden />
                {place}
              </div>
              <div className="flex items-center gap-2">
                <WeatherMark condition={weatherLabel} />
                <div>
                  <p className="text-lg font-semibold leading-none text-white">{temperature}°C</p>
                  <p className="mt-0.5 truncate text-[8px] text-[#8fa0bf]">{weatherLabel}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {projectFolders.map((project) => (
              <div key={project} className="min-w-0 rounded bg-[#223250] px-1.5 py-1">
                <FiFolder className="mb-0.5 h-3 w-3 text-[#f49a2f]" aria-hidden />
                <p className="truncate text-[7px] font-semibold text-[#dbe6ff]">{project}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="absolute -bottom-11 left-1/2 h-11 w-3 -translate-x-1/2 bg-[#26385f]" />
      <div className="absolute -bottom-[52px] left-1/2 h-2 w-[72px] -translate-x-1/2 rounded-full bg-[#26385f]" />
    </div>
  );
}

export default function AnimatedDeveloperScene() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function loadWeather() {
      try {
        const response = await fetch("/api/weather");
        if (!response.ok) return;
        const data = await response.json();
        if (!ignore) setWeather(data);
      } catch {
        if (!ignore) {
          setWeather({
            name: "Dublin",
            main: { temp: 14 },
            weather: [{ main: "Clouds" }],
          });
        }
      }
    }

    loadWeather();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section
      aria-label="Developer workspace illustration"
      className="relative mx-auto h-[420px] w-full max-w-[650px] overflow-hidden rounded-[28px] border border-[#40557d]/20 bg-[#dce5f0] shadow-2xl shadow-black/20 sm:h-[520px] lg:h-[580px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_46%,#cbd7e8_0,#cbd7e8_38%,transparent_39%)]" />
      <div className="absolute inset-x-12 bottom-[94px] h-1 rounded-full bg-[#26385f]" />

      <WallShelf />
      <Whiteboard />
      <DeskLamp />

      <div className="absolute bottom-[54px] left-1/2 h-16 w-[78%] -translate-x-1/2 rounded-sm bg-[#26385f]" />
      <div className="absolute bottom-[18px] left-[18%] h-[136px] w-4 -rotate-6 rounded-full bg-[#1e2b4b]" />
      <div className="absolute bottom-[18px] right-[18%] h-[136px] w-4 rotate-6 rounded-full bg-[#1e2b4b]" />

      <Monitor side="left" weather={weather} />
      <Monitor side="right" weather={weather} />
      <CoffeeCup />
      <Books />
      <DeskPlant />

      <div className="absolute bottom-7 left-[30%] z-30 h-3 w-28 rounded-full bg-[#1e2b4b]" />
      <div className="absolute bottom-6 right-[30%] z-30 h-3 w-[88px] rounded-full bg-[#1e2b4b]" />
    </section>
  );
}
