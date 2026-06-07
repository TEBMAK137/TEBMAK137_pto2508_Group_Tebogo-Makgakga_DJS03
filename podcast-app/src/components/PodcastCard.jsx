import React from "react";
import { formatRelativeDate } from "../utils/dateFormatter";

export default function PodcastCard({ podcast, onSelect }) {
  return (
    <div className="podcast-card" onClick={() => onSelect(podcast)}>
      <img
        src={podcast.image}
        alt={`${podcast.title} cover`}
        className="card-image"
        loading="lazy"
      />
      <div className="card-content">
        <h3 className="card-title">{podcast.title}</h3>
        <div className="card-badge">
          📺 {podcast.seasons} Season{podcast.seasons !== 1 ? "s" : ""}
        </div>
        <div className="genre-list">
          {podcast.genreNames.map((genre) => (
            <span key={genre} className="genre-tag">
              {genre}
            </span>
          ))}
        </div>
        <div className="updated-text">
          <span>🕒 Updated {formatRelativeDate(podcast.updated)}</span>
        </div>
      </div>
    </div>
  );
}
