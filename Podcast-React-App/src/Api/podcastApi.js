const API_BASE = "https://podcast-api.netlify.app";

const GENRE_MAP = {
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

function normalizePreview(preview) {
  const genreIds = preview.genreIds ?? preview.genres ?? [];
  return {
    id: String(preview.id),
    title: preview.title,
    description: preview.description,
    seasons: preview.seasons,
    image: preview.image,
    updated: preview.updated,
    genreIds,
    genreNames: genreIds.map((id) => GENRE_MAP[id] ?? "Unknown"),
  };
}

export async function fetchPreviews() {
  const response = await fetch(API_BASE);
  if (!response.ok)
    throw new Error(`Request failed with status ${response.status}`);
  const data = await response.json();
  return Array.isArray(data) ? data.map(normalizePreview) : [];
}

export async function fetchShowDetails(showId) {
  const response = await fetch(`${API_BASE}/id/${showId}`);
  if (!response.ok)
    throw new Error(`Request failed with status ${response.status}`);
  return await response.json();
}
