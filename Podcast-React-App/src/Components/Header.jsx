import React from "react";

export default function Header() {
  return (
    <header className="mb-10 text-center">
      <p className="mb-3 inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm ring-1 ring-slate-200">
        React • Fetch API • Responsive Grid
      </p>
      <h1
        className="text-4xl font-black tracking-tight text-transparent sm:text-5xl"
        style={{
          backgroundImage: "linear-gradient(135deg, #5e2a84, #c23b77)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        🎙️ PodcastHub
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
        Discover fresh podcast previews, browse genres, and open any show to
        view season details.
      </p>
    </header>
  );
}
