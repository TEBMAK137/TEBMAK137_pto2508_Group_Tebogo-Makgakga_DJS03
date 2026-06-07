import React from "react";
import PodcastCard from "./PodcastCard";

export default function PodcastGrid({ podcasts, onSelectPodcast }) {
  return (
    <section
      aria-label="Podcast previews"
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {podcasts.map((podcast) => (
        <PodcastCard
          key={podcast.id}
          podcast={podcast}
          onSelect={onSelectPodcast}
        />
      ))}
    </section>
  );
}
