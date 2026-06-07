import React from "react";
import PodcastCard from "./PodcastCard";

export default function PodcastGrid({ podcasts, onSelectPodcast }) {
  return (
    <div className="podcast-grid">
      {podcasts.map((podcast) => (
        <PodcastCard
          key={podcast.id}
          podcast={podcast}
          onSelect={onSelectPodcast}
        />
      ))}
    </div>
  );
}
