import React from "react";
import img from "../../assets/cover.avif";

const stats = [
  { num: "200+", label: "New titles" },
  { num: "12", label: "Genres" },
  { num: "4.9★", label: "Avg rating" },
];

const miniBooks = [
  { h: "h-9", bg: "bg-amber-700" },
  { h: "h-12", bg: "bg-green-700" },
  { h: "h-8", bg: "bg-pink-700" },
  { h: "h-11", bg: "bg-sky-700" },
  { h: "h-9", bg: "bg-yellow-700" },
];

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-8  mt-8">
      <div className="relative overflow-hidden rounded-2xl flex flex-col md:flex-row items-stretch min-h-[380px] bg-cyan-100 border border-cyan-200">

        <div className="flex-[1.1] flex flex-col justify-center px-10 py-12 relative z-10">

      
          <span className="hidden md:block absolute right-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-cyan-700 to-transparent" />
        
          <span className="inline-flex items-center gap-2 mb-5 w-fit text-[10px] font-medium tracking-widest uppercase text-cyan-700 bg-cyan-100 border border-cyan-400 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 inline-block" />
            New Arrivals
          </span>

          <h2
            className="mb-4 font-bold text-stone-900 leading-[1.08] tracking-tight"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 2.6rem)",
            }}
          >
            Books to{" "}
            <em className="relative not-italic italic font-normal text-cyan-700">
              freshen up
              <span className="absolute left-0 right-0 bottom-0.5 h-0.5 bg-cyan-400 rounded opacity-50" />
            </em>
            <br />
            your shelf
          </h2>

          <p className="mb-6 text-sm font-light text-amber-900/70 leading-relaxed max-w-[300px] tracking-wide">
            Handpicked reads that inspire, challenge, and quietly change how you
            see the world.
          </p>

          <div className="flex items-center gap-5 mb-7">
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <span className="self-stretch w-px bg-green-300" />}
                <div className="flex flex-col">
                  <span
                    className="text-xl font-bold text-stone-900 leading-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.num}
                  </span>
                  <span className="text-[10px] font-normal tracking-widest uppercase text-amber-800/60 mt-0.5">
                    {s.label}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>

          <button className="inline-flex items-center gap-3 w-fit px-5 py-2.5 rounded-xl bg-cyan-600  text-sm font-medium tracking-wide border-none cursor-pointer transition-all duration-300 hover:bg-cyan-600 hover:-translate-y-0.5">
            View the list
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/10">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>

        <div className="flex-[0.9] relative flex items-center justify-center px-10 py-10 overflow-hidden bg-gradient-to-br from-green-400 to-cyan-100">

          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(180,140,90,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(180,140,90,0.15) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10">

            <span
              aria-hidden
              className="absolute -top-2 -right-2 w-9 h-9 border-t-2 border-r-2 border-orange-500 rounded-tr-lg"
            />

            <span
              aria-hidden
              className="absolute -bottom-2 -left-2 w-9 h-9 border-b-2 border-l-2 border-green-500 rounded-bl-lg"
            />

            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl bg-orange-400 opacity-30 translate-x-2.5 translate-y-2.5"
            />

            <img
              src={img}
              alt="Book Cover"
              className="relative block w-[200px] h-[280px] object-cover rounded-2xl shadow-2xl transition-all duration-500 hover:-rotate-2 hover:scale-105"
            />

            <div className="absolute -bottom-3.5 -right-4 w-[62px] h-[62px] rounded-full bg-orange-600 flex flex-col items-center justify-center text-white text-center shadow-lg shadow-orange-500/40">
              <strong className="block text-[13px] font-bold leading-none">#1</strong>
              <span className="text-[8px] font-medium tracking-wide uppercase leading-snug">Pick</span>
            </div>
          </div>

          <div
            aria-hidden
            className="absolute bottom-8 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"
          />
          
          <div
            aria-hidden
            className="absolute bottom-[2.4rem] left-9 flex items-end gap-1 opacity-40"
          >
            {miniBooks.map((b, i) => (
              <div
                key={i}
                className={`w-2.5 rounded-t-sm ${b.h} ${b.bg}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;