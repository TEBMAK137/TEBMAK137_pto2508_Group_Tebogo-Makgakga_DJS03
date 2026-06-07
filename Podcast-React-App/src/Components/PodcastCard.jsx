import React from "react";
import { formatRelativeDate } from "../utils/formatDate";

export default function PodcastCard({ podcast, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(podcast)}
      className="group flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-left shadow-sm transition duration-200 hover:-translate-y-1.5 hover:border-violet-200 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-violet-200"
    >
      <img
        src={podcast.image}
        alt={`${podcast.title} cover`}
        className="aspect-square w-full object-cover bg-slate-200"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col p-4">
        <h2 className="line-clamp-2 text-lg font-bold leading-6 text-slate-900">
          {podcast.title}
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800">
            📺 {podcast.seasons} Season{podcast.seasons !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {podcast.genreNames.map((genre) => (
            <span
              key={`${podcast.id}-${genre}`}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-800"
            >
              {genre}
            </span>
          ))}
        </div>
        <p className="mt-auto pt-4 text-xs font-medium text-slate-500">
          🕒 Updated {formatRelativeDate(podcast.updated)}
        </p>
      </div>
    </button>
  );
}
