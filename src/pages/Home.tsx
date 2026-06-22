import { Link } from "react-router-dom";
import { LINKS, APP } from "../config.ts";
import StoreButtons from "../components/StoreButtons.tsx";
import Footer from "../components/Footer.tsx";

type Feature = { title: string; body: string };

const features: Feature[] = [
  {
    title: "Armory Buddy",
    body: "Life and Blood tracks your match history so you can see your wins and leave notes on your losses. Quick access to GEM and Fabrary to report results and check your sideboard, plus multiple layouts so it fits whatever space you play on.",
  },
  {
    title: "Yours, and only yours",
    body: "No sign up, no accounts. Your data lives on your device and goes nowhere else.",
  },
];

const shots = [
  { src: "./screenshot-counter.png", alt: "Two-player split life counter" },
  { src: "./screenshot-settings.png", alt: "Settings and FAB tools" },
];

export default function Home() {
  return (
    <div className="bg-ink text-bone">
      {/* ── Hero: the page is a life counter ─────────────────────────── */}
      <header className="relative min-h-svh overflow-hidden">
        {/* Dueling panels (stack on mobile, exactly like the app in portrait) */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          <div className="panel-l relative flex items-center justify-center overflow-hidden bg-teal-deep">
            <span className="ghost-number text-teal opacity-[0.07]">40</span>
          </div>
          <div className="panel-r relative flex items-center justify-center overflow-hidden bg-amber-deep">
            <span className="ghost-number text-amber opacity-[0.07]">40</span>
          </div>
        </div>

        {/* The seam where the two players meet */}
        <div
          className="seam-line absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-blood md:inset-y-0 md:left-1/2 md:h-full md:w-[2px] md:-translate-x-1/2 md:translate-y-0"
          aria-hidden="true"
        />

        {/* Top bar */}
        <nav className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5">
          <span className="flex items-center gap-2.5">
            <img src="./icon.png" alt="" className="h-7 w-7 rounded-lg" />
            <span className="font-display text-lg font-bold tracking-tight">
              Life &amp; Blood
            </span>
          </span>
          <Link to="/privacy" className="eyebrow text-bone/80 hover:text-bone">
            Privacy
          </Link>
        </nav>

        {/* Centered content */}
        <div className="relative z-20 mx-auto flex min-h-svh max-w-5xl flex-col items-center justify-center px-6 text-center">
          <h1
            className="rise flex items-center justify-center gap-[0.18em] font-display font-extrabold leading-[0.9] tracking-tight"
            style={{
              fontSize: "clamp(2.75rem, 12vw, 8rem)",
              animationDelay: "0.82s",
            }}
          >
            <span>Life</span>
            {/* Blood drop with an ampersand at its heart — echoes the app icon */}
            <svg
              className="drop-in mx-[0.04em] h-[0.92em] w-auto self-center"
              viewBox="0 0 24 30"
              role="img"
              aria-label="and"
            >
              <path
                d="M12 1C12 1 21 13 21 19A9 9 0 1 1 3 19C3 13 12 1 12 1Z"
                fill="#d64279"
              />
              <text
                x="11.2"
                y="19"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="Titan One, sans-serif"
                fontSize="11"
                fill="#f4f3f0"
              >
                &amp;
              </text>
            </svg>
            <span>Blood</span>
          </h1>

          <p
            className="rise mt-7 max-w-xl text-xl text-bone/90 sm:text-2xl"
            style={{ animationDelay: "1s" }}
          >
            Built for FABTCG. Track your life and match history all in one.
          </p>

          <div className="rise mt-10" style={{ animationDelay: "1.12s" }}>
            <StoreButtons />
          </div>

          <p
            className="rise eyebrow mt-6 text-bone/70"
            style={{ animationDelay: "1.24s" }}
          >
            Free · No ads · No tracking
          </p>
        </div>
      </header>

      {/* ── See it in play ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-28">
        {/* Geometric backdrop: a diamond lattice split teal/amber, like the
            dueling hero, faded out at the edges with a radial mask. */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_58%_64%_at_50%_50%,#000_25%,transparent_78%)]"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="lattice-teal"
              width="34"
              height="34"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0L34 34M0 34L34 0"
                stroke="#73bfb8"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
            <pattern
              id="lattice-amber"
              width="34"
              height="34"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0L34 34M0 34L34 0"
                stroke="#fbb13c"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="50%"
            height="100%"
            fill="url(#lattice-teal)"
            opacity="0.16"
          />
          <rect
            x="50%"
            y="0"
            width="50%"
            height="100%"
            fill="url(#lattice-amber)"
            opacity="0.16"
          />
        </svg>

        <div className="relative">
          <div className="text-center">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              See it in play
            </h2>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-12 sm:gap-16">
            {shots.map((shot) => (
              <div key={shot.src}>
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-52 rounded-[2rem] border border-white/10 sm:w-56"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-8">
        <p className="eyebrow text-center text-blood">What you get</p>
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {features.map((f) => (
            <article
              key={f.title}
              className="grid gap-4 py-10 md:grid-cols-[280px_1fr] md:gap-12"
            >
              <h3 className="font-display text-2xl tracking-tight">
                {f.title}
              </h3>
              <p className="text-lg leading-relaxed text-bone/85">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Support ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="mt-4 text-lg text-bone/85">
          {APP.name} is free to use and always will be. If you appreciate it
          enough,
        </p>
        <a
          href={LINKS.koFi}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-amber px-7 py-4 font-semibold text-ink transition-transform duration-200 ease-out hover:-translate-y-1 hover:-rotate-3 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
        >
          ☕ Buy me a Ko-fi
        </a>
      </section>

      <Footer />
    </div>
  );
}
