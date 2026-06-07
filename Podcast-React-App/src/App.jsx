import React, { useState, useEffect, useMemo } from "react";
import { fetchPreviews } from "./api/podcastApi";
import PodcastGrid from "./components/PodcastGrid";
import PodcastModal from "./components/PodcastModal";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";
import EmptyState from "./components/EmptyState";

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  async function loadPodcasts() {
    try {
      setLoading(true);
      setError("");
      const data = await fetchPreviews();
      setPodcasts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPodcasts();
  }, []);

  const sortedPodcasts = useMemo(
    () =>
      [...podcasts].sort((a, b) => new Date(b.updated) - new Date(a.updated)),
    [podcasts],
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
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

        {loading && <LoadingState />}
        {!loading && error && (
          <ErrorState message={error} onRetry={loadPodcasts} />
        )}
        {!loading && !error && sortedPodcasts.length === 0 && <EmptyState />}
        {!loading && !error && sortedPodcasts.length > 0 && (
          <PodcastGrid
            podcasts={sortedPodcasts}
            onSelectPodcast={setSelectedPodcast}
          />
        )}

        <footer className="mt-12 text-center text-xs text-slate-500">
          © 2026 PodcastHub — React conversion of the vanilla podcast landing
          page
        </footer>
      </div>

      <PodcastModal
        podcast={selectedPodcast}
        onClose={() => setSelectedPodcast(null)}
      />
    </div>
  );
}
