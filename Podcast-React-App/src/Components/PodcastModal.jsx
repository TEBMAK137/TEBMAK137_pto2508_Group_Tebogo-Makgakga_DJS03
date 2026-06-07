import React, { useState, useEffect } from "react";
import { fetchShowDetails } from "../Api/podcastApi";
import { formatFullDate } from "../Utilis/formatDate";

export default function PodcastModal({ podcast, onClose }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!podcast) return;
    let isMounted = true;
    async function loadDetails() {
      try {
        setLoading(true);
        setError("");
        const data = await fetchShowDetails(podcast.id);
        if (isMounted) setDetails(data);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadDetails();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    return () => {
      isMounted = false;
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [podcast, onClose]);

  if (!podcast) return null;
  const seasonList = details?.seasons ?? [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="podcast-modal-title"
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[1.8rem] bg-white shadow-2xl modal-scroll">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="sticky right-4 top-4 z-10 ml-auto mr-4 mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold text-slate-700 shadow-md transition hover:bg-slate-100"
        >
          ×
        </button>
        <div className="px-5 pb-6 pt-2 sm:px-8 sm:pb-8">
          {/* header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src={podcast.image}
              alt={`${podcast.title} cover`}
              className="h-28 w-28 rounded-2xl object-cover shadow-lg sm:h-36 sm:w-36"
            />
            <div className="min-w-0 flex-1">
              <h2
                id="podcast-modal-title"
                className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl"
              >
                {podcast.title}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800">
                  ⭐ {podcast.seasons} Season{podcast.seasons !== 1 ? "s" : ""}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  📅 Updated {formatFullDate(podcast.updated)}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {podcast.genreNames.map((genre) => (
                  <span
                    key={`${podcast.id}-modal-${genre}`}
                    className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-800"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* description */}
          <div className="mt-6 rounded-3xl bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              About the show
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {details?.description ?? podcast.description}
            </p>
          </div>

          {/* seasons */}
          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-900">
                📅 Seasons & episodes
              </h3>
              {loading && (
                <span className="text-sm text-slate-500">Loading details…</span>
              )}
            </div>
            {error && (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
                Could not load season details: {error}
              </div>
            )}
            {!loading && !error && seasonList.length === 0 && (
              <p className="text-sm text-slate-500">
                Season details coming soon.
              </p>
            )}
            <div className="space-y-3">
              {seasonList.map((season, idx) => (
                <div
                  key={season.id ?? `${podcast.id}-season-${idx}`}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">
                      🎧 {season.title || `Season ${idx + 1}`}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {(season.episodes ?? []).length} episode
                      {(season.episodes ?? []).length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <span className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {(season.episodes ?? []).length} episode
                    {(season.episodes ?? []).length !== 1 ? "s" : ""}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
