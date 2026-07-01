import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Mail,
  Smartphone,
  GraduationCap,
  Award,
  Sparkles,
  Music,
  Building2,
  Linkedin,
  Github,
  ArrowUpRight,
} from "lucide-react";

import profilePicAsset from "@/assets/profile-pic.png.asset.json";

const marker = { fontFamily: "'Permanent Marker', cursive" } as const;
const hand = { fontFamily: "'Indie Flower', cursive" } as const;
const scribble = { fontFamily: "'Caveat', cursive" } as const;
const grotesk = { fontFamily: "'Space Grotesk', sans-serif" } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aashish Verma — Vibe Coder & Developer" },
      {
        name: "description",
        content:
          "Portfolio of Aashish Verma — Web Designer, Front End Developer, App Developer, and Marketing specialist from Assam, India.",
      },
      {
        property: "og:title",
        content: "Aashish Verma — Vibe Coder & Developer",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Aashish Verma — Web Designer, Front End Developer, App Developer, and Marketing specialist from Assam, India.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [isColored, setIsColored] = useState(false);
  return (
    <div
      className="min-h-screen text-stone-800 selection:bg-yellow-200"
      style={{
        backgroundColor: "#fdfcf8",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(80,80,80,0.08) 1px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-10 py-10 sm:py-16 space-y-20">
        {/* Hero */}
        <section className="relative pt-6">
          <div
            className="absolute -top-2 -left-4 rotate-[-8deg] bg-yellow-200/70 px-4 py-1 shadow-sm text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-800"
            style={grotesk}
          >
            Portfolio / 2026
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:items-end gap-8 pt-6">
            <div className="flex-1">
              <h1
                className="text-6xl sm:text-7xl font-black leading-[0.9] tracking-tighter"
                style={grotesk}
              >
                AASHISH
                <br />
                <span className="text-blue-600">VERMA</span>
              </h1>

              <div className="mt-5 relative inline-block">
                <p
                  className="text-3xl text-red-500 rotate-[-2deg]"
                  style={marker}
                >
                  the Vibe Coder
                </p>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-red-400"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q25,0 50,5 T100,5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <p className="mt-6 text-lg font-light leading-relaxed max-w-[90%]">
                Founder &amp; CEO at{" "}
                <span className="font-semibold text-stone-900">
                  Fastit Music India
                </span>{" "}
                &amp;{" "}
                <span className="font-semibold text-stone-900">
                  Fastit Group of Solutions
                </span>
                . Front-end dev, app builder, designer, marketer — I orchestrate
                code so it feels like it was made by a real person.
              </p>
            </div>

            <div className="relative flex-shrink-0 self-center sm:self-end">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-blue-400/25 -rotate-3 z-20" />
              <div className="relative bg-white p-2 border border-stone-300 shadow-xl rotate-[-3deg] w-40 sm:w-48">
                <img
                  src={profilePicAsset.url}
                  alt="Aashish Verma"
                  onClick={() => setIsColored((c) => !c)}
                  className={`w-full aspect-[4/5] object-cover cursor-pointer transition-all duration-500 ease-out ${
                    isColored ? "" : "grayscale contrast-110 hover:grayscale-0 hover:contrast-100"
                  }`}
                />
                <p
                  className="mt-2 text-center text-xs text-stone-500"
                  style={hand}
                >
                  hi, that&apos;s me →
                </p>
              </div>
            </div>
          </div>

          {/* Contact row */}
          <div
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600"
            style={grotesk}
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-blue-600" /> Dergaon, Assam
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-blue-600" /> 6003271276
            </span>
            <a
              href="mailto:aasishverma2807@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-blue-600"
            >
              <Mail className="h-4 w-4 text-blue-600" /> aasishverma2807@gmail.com
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://github.com/aashishverma28"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-stone-900 text-white px-4 py-2 text-sm font-bold hover:-translate-y-0.5 transition-transform"
              style={grotesk}
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aashish-verma-152a51302"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border-2 border-stone-900 bg-white px-4 py-2 text-sm font-bold hover:-translate-y-0.5 transition-transform"
              style={grotesk}
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </section>

        {/* About - taped card */}
        <section className="relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-blue-400/25 backdrop-blur-sm -rotate-3 border border-blue-400/10 z-10" />
          <div className="relative bg-white p-7 sm:p-9 shadow-xl border border-stone-200 rotate-[0.6deg]">
            <h2
              className="text-4xl font-bold mb-4 text-stone-800 underline decoration-blue-300 decoration-4 underline-offset-4"
              style={hand}
            >
              About.
            </h2>
            <p className="text-[15px] leading-relaxed text-stone-700">
              I&apos;m a Vibe Coder — I don&apos;t just write code, I orchestrate
              it. By leveraging AI tools like{" "}
              <span className="font-semibold text-stone-900">
                ChatGPT, Cursor, Claude and V0
              </span>
              , I focus on the vibe — the flow, the logic, and the user
              experience — rather than just syntax. I bridge high-level
              creativity with technical precision to ship things that are both
              efficient and aesthetically impactful.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-stone-600 italic">
              Currently pursuing a B.Tech in CSE while running two ventures out
              of Assam. Powered by chai, late nights and the occasional messy
              sketch.
            </p>
          </div>
        </section>

        {/* Skills - stickers */}
        <section>
          <div className="flex items-baseline gap-3 mb-6">
            <h2
              className="text-xs font-bold uppercase tracking-[0.3em] text-stone-500"
              style={grotesk}
            >
              The Toolbox
            </h2>
            <span
              className="text-red-500 text-lg -rotate-2"
              style={scribble}
            >
              ← stuff I use daily
            </span>
          </div>

          <div className="flex flex-wrap gap-3" style={grotesk}>
            <Sticker className="bg-pink-100 text-pink-700 border-pink-300 rotate-[2deg] rounded-full">
              React.js
            </Sticker>
            <Sticker className="bg-emerald-100 text-emerald-700 border-emerald-300 rotate-[-3deg] rounded-lg">
              Tailwind CSS
            </Sticker>
            <Sticker className="bg-amber-100 text-amber-700 border-amber-300 rotate-[1deg] rounded-3xl">
              Figma
            </Sticker>
            <Sticker className="bg-indigo-100 text-indigo-700 border-indigo-300 rotate-[-1deg] rounded-md">
              JavaScript
            </Sticker>
            <Sticker className="bg-sky-100 text-sky-700 border-sky-300 rotate-[3deg] rounded-full">
              HTML5 &amp; CSS3
            </Sticker>
            <Sticker className="bg-orange-100 text-orange-700 border-orange-300 rotate-[-2deg] rounded-lg">
              Flutter
            </Sticker>
            <Sticker className="bg-yellow-100 text-yellow-800 border-yellow-300 rotate-[2deg] rounded-2xl">
              Firebase
            </Sticker>
            <Sticker className="bg-fuchsia-100 text-fuchsia-700 border-fuchsia-300 rotate-[-3deg] rounded-md">
              Canva
            </Sticker>
            <Sticker className="bg-lime-100 text-lime-700 border-lime-300 rotate-[1deg] rounded-full">
              UI / UX
            </Sticker>
            <Sticker className="bg-stone-100 text-stone-700 border-stone-300 rotate-[4deg] rounded-full">
              Digital Marketing
            </Sticker>
            <Sticker className="bg-rose-100 text-rose-700 border-rose-300 rotate-[-2deg] rounded-lg">
              Branding
            </Sticker>
            <Sticker className="bg-teal-100 text-teal-700 border-teal-300 rotate-[2deg] rounded-2xl">
              AI Workflow
            </Sticker>
          </div>
        </section>

        {/* Projects */}
        <section>
          <div className="mb-8 relative inline-block">
            <h2 className="text-4xl font-bold" style={hand}>
              Featured Projects
            </h2>
            <span
              className="absolute -right-16 top-2 text-red-500 text-lg -rotate-6"
              style={scribble}
            >
              built with love ♡
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <SketchCard
              title="SkillSwap"
              blurb="A community-driven platform for peer-to-peer learning and skill exchange."
              tag="community · mobile"
              rotate="-1deg"
            />
            <SketchCard
              title="MoodLens"
              blurb="An AI-integrated mental health tracker that visualizes emotional patterns."
              tag="ai · wellness"
              rotate="1.5deg"
            />
          </div>
        </section>

        {/* Experience — timeline */}
        <section>
          <div className="mb-8 flex items-baseline gap-3">
            <h2
              className="text-xs font-bold uppercase tracking-[0.3em] text-stone-500"
              style={grotesk}
            >
              The Journey
            </h2>
          </div>

          <div className="relative pl-8 border-l-2 border-dashed border-stone-300 space-y-10 py-2">
            <TimelineItem
              dotClass="bg-white border-2 border-stone-900"
              period="April 2025 — Present"
              periodClass="text-blue-600"
              role="Founder & CEO"
              company="Fastit Music India"
              location="Dergaon, Assam"
              icon={<Music className="h-4 w-4" />}
              note="Building initiatives in the music industry — growth, innovation, strategic development."
            />
            <TimelineItem
              dotClass="bg-stone-900"
              period="December 2024 — Present"
              periodClass="text-red-500"
              role="Founder & CEO"
              company="Fastit Group of Solutions"
              location="Dergaon, Assam"
              icon={<Building2 className="h-4 w-4" />}
              note="A multi-vertical solutions group — tech, branding, and digital services under one roof."
            />
          </div>
        </section>

        {/* Education + Certifications */}
        <section className="grid gap-6 sm:grid-cols-2">
          <div className="relative bg-blue-50/60 p-6 rounded-2xl border border-blue-100 rotate-[-0.7deg]">
            <div className="absolute -right-2 top-4 opacity-25 text-blue-500">
              <GraduationCap className="h-12 w-12" />
            </div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-2"
              style={grotesk}
            >
              Learning
            </h3>
            <p className="font-bold text-stone-900 leading-snug">
              B-Tech in Computer Science &amp; Engineering
            </p>
            <p className="text-xs text-blue-700/70 font-medium mt-1">
              Birangana Sati Sadhani Rajyik Vishwavidyalaya, Golaghat
            </p>
            <span
              className="mt-3 inline-block text-lg text-red-500 -rotate-2"
              style={scribble}
            >
              2025 – 2029 (in progress)
            </span>
          </div>

          <div className="relative bg-amber-50/70 p-6 rounded-2xl border border-amber-100 rotate-[0.8deg]">
            <div className="absolute -right-2 top-4 opacity-25 text-amber-600">
              <Award className="h-12 w-12" />
            </div>
            <h3
              className="text-xs font-bold uppercase tracking-[0.3em] text-amber-600 mb-2"
              style={grotesk}
            >
              Certified
            </h3>
            <p className="font-bold text-stone-900 leading-snug">
              CODESTELLATION CODEWAR 7.0
            </p>
            <p className="text-xs text-amber-800/70 font-medium mt-1">
              Awarded by Assam Engineering College
            </p>
            <span
              className="mt-3 inline-block text-lg text-stone-700 -rotate-2"
              style={scribble}
            >
              a fun win ✦
            </span>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="pt-4 pb-6 text-center">
          <p
            className="text-lg text-stone-600 mb-3 rotate-[-1deg] inline-block"
            style={hand}
          >
            got an idea? a project? just want to say hi?
          </p>
          <div className="mt-2 inline-block relative">
            <a
              href="mailto:aasishverma2807@gmail.com"
              className="text-5xl sm:text-6xl hover:scale-105 inline-block transition-transform text-stone-900"
              style={marker}
            >
              LET&apos;S TALK!
            </a>
            <svg
              className="absolute -bottom-4 left-0 w-full"
              height="12"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <path
                d="M0,10 C20,2 40,2 60,10 C80,18 100,10 100,10"
                fill="none"
                stroke="#2563eb"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="mt-12 flex justify-center gap-8" style={hand}>
            <a
              href="mailto:aasishverma2807@gmail.com"
              className="text-xl font-bold text-stone-700 hover:text-blue-600 inline-flex items-center gap-1"
            >
              Email <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/aashishverma28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-stone-700 hover:text-blue-600 inline-flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/aashish-verma-152a51302"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-stone-700 hover:text-blue-600 inline-flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <p
            className="mt-14 text-[10px] uppercase tracking-[0.3em] text-stone-400"
            style={grotesk}
          >
            handmade by aashish · {new Date().getFullYear()} · dergaon, assam
          </p>
        </section>
      </div>
    </div>
  );
}

function Sticker({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`px-4 py-2 border-2 font-bold text-sm shadow-sm hover:rotate-0 transition-transform inline-block ${className}`}
    >
      {children}
    </span>
  );
}

function SketchCard({
  title,
  blurb,
  tag,
  rotate,
}: {
  title: string;
  blurb: string;
  tag: string;
  rotate: string;
}) {
  return (
    <div className="group relative" style={{ transform: `rotate(${rotate})` }}>
      <div className="bg-stone-100 rounded-lg p-1 border-2 border-dashed border-stone-300">
        <div className="bg-white border-2 border-stone-900 p-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
          <p
            className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-2"
            style={grotesk}
          >
            {tag}
          </p>
          <h3 className="font-black text-2xl mb-2 text-stone-900" style={grotesk}>
            {title}
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">{blurb}</p>
          <div className="flex justify-between items-center">
            <span
              className="text-blue-600 font-bold italic text-lg underline decoration-blue-300"
              style={hand}
            >
              a little case study
            </span>
            <div className="w-8 h-8 rounded-full border-2 border-stone-900 flex items-center justify-center font-bold">
              →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({
  dotClass,
  period,
  periodClass,
  role,
  company,
  location,
  icon,
  note,
}: {
  dotClass: string;
  period: string;
  periodClass: string;
  role: string;
  company: string;
  location: string;
  icon: React.ReactNode;
  note: string;
}) {
  return (
    <div className="relative">
      <div
        className={`absolute top-1 -left-[41px] w-4 h-4 rounded-full ${dotClass}`}
      />
      <span
        className={`block font-bold text-sm ${periodClass}`}
        style={hand}
      >
        {period}
      </span>
      <h3
        className="font-black text-xl mt-1 text-stone-900 inline-flex items-center gap-2"
        style={grotesk}
      >
        <Sparkles className="h-4 w-4 text-yellow-500" />
        {role}
      </h3>
      <p className="text-sm text-stone-700 font-semibold flex items-center gap-1.5">
        {icon} {company}
      </p>
      <p className="text-xs text-stone-500 mt-0.5">{location}</p>
      <p className="mt-2 text-sm text-stone-600 italic leading-relaxed max-w-md">
        &ldquo;{note}&rdquo;
      </p>
    </div>
  );
}

