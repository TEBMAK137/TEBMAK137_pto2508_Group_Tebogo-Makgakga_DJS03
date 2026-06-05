import { formateDate } from "../utilis/formatDate";

/**
 *
 *
 *
 * @param {Object} props
 * @param {Object} props.podcast
 * @param {string} props.podcast.id
 * @param {string} props.podcast.title
 * @param {string} props.podcast.image
 * @param {number} props.podcast.seasons
 * @param {string} props.podacst.updated
 * @param {Array<object>} props.genres
 *
 * @returns {JSX.Element}
 *
 */

export default function PodcastCard({ podcast, genres }) {
  return (
    <div className="card">
      <img src={podcast.image} alt={podcast.title} />

      <h3>{podcast.title}</h3>
      <p clasName="seasons">{podcast.seasons} Seasons</p>

      <p className="updated-text">Updated {formatDate(podcast.updated)}</p>
    </div>
  );
}
