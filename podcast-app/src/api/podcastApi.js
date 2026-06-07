/**
 * API interaction module for podcast data.
 * @module podcastApi
 */

const API_BASE = "https://podcast-api.netlify.app";

/**
 * Map genre IDs to human‑readable names (based on the original specification).
 * @constant
 * @type {Object<number, string>}
 */
export const GENRE_MAP = {
  1: "Personal Growth",
  2: "Investigative Journalism",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Kids and Family",
};

/**
 * Normalises a raw podcast preview object.
 * Adds `genreNames` array by mapping genre IDs to names.
 * @param {Object} raw - Raw podcast data from the API.
 * @returns {Object} Normalised podcast object.
 */
function normalizePodcast(raw) {
  const genreIds = raw.genreIds ?? raw.genres ?? [];
  return {
    id: String(raw.id),
    title: raw.title,
    description: raw.description,
    seasons: raw.seasons,
    image: raw.image,
    updated: raw.updated,
    genreIds,
    genreNames: genreIds.map((id) => GENRE_MAP[id] || "Unknown"),
  };
}

/**
 * Fetches the list of podcast previews from the API.
 * @async
 * @returns {Promise<Array>} Array of normalised podcast objects.
 * @throws {Error} If the network request fails.
 */
export async function fetchPodcastPreviews() {
  const response = await fetch(API_BASE);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  if (!Array.isArray(data)) return [];
  return data.map(normalizePodcast);
}
