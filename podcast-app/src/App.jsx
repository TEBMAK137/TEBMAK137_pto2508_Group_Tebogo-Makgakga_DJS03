import React, { useState, useEffect, useCallback } from "react";
import { fetchPodcastPreviews } from "./api/podcastApi";
import PodcastGrid from "./components/PodcastGrid";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";
import EmptyState from "./components/EmptyState";

function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPodcasts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPodcastPreviews();
      setPodcasts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPodcasts();
  }, [loadPodcasts]);

  const sortedPodcasts = [...podcasts].sort(
    (a, b) => new Date(b.updated) - new Date(a.updated),
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🎙️ PodcastHub</h1>
        <p>
          Discover amazing podcasts – browse shows, genres, and latest updates
        </p>
      </header>

      {loading && <LoadingState />}
      {!loading && error && (
        <ErrorState message={error} onRetry={loadPodcasts} />
      )}
      {!loading && !error && podcasts.length === 0 && <EmptyState />}
      {!loading && !error && podcasts.length > 0 && (
        <PodcastGrid
          podcasts={sortedPodcasts}
          onSelectPodcast={(podcast) => console.log("Selected", podcast)}
        />
      )}

      <footer>
        © 2026 PodcastHub — All data provided by the public podcast API
      </footer>
    </div>
  );
}

// export default App;

export default App;
