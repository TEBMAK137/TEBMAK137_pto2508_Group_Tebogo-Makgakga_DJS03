# 🎙️ PodcastHub – React Podcast Discovery App

A fully responsive podcast landing page built with **React**. It fetches live data from a public podcast API, displays a grid of shows with cover images, titles, number of seasons, genre tags, and a human‑readable “last updated” date (e.g., *“3 days ago”*). The app handles loading, error, and empty states gracefully, and the layout adapts to mobile, tablet, and desktop screens.

---

## ✨ Features

- ✅ **Data fetching** – uses `fetch()` inside `useEffect` to load podcasts on mount  
- ✅ **Reusable components** – `PodcastCard`, `PodcastGrid`, loading / error / empty states  
- ✅ **Responsive grid** – CSS Grid with media queries (or Tailwind) – works from 375px to 4K  
- ✅ **Relative date formatting** – custom utility converts ISO dates to “2 days ago”, “3 weeks ago”, etc.  
- ✅ **Genre mapping** – internal `GENRE_MAP` converts API genre IDs into readable names  
- ✅ **Clean code** – modular architecture, JSDoc comments for every major function  
- ✅ **Two styling options** – choose between **plain CSS** (included) or **Tailwind CSS** (configurable)

---

## 🛠️ Tech Stack

- **React 18** (functional components, hooks)  
- **Vite** (fast build tool) – optional, but recommended  
- **CSS3** (Grid, Flexbox, custom properties) – no external framework in the plain CSS version  
- **Fetch API** (native) – no axios or other HTTP clients  

---

## 📁 Project Structure (Plain CSS version)


src/
├── api/
│ └── podcastApi.js # API calls + genre mapping + data normalisation
├── components/
│ ├── PodcastCard.jsx # Single preview card
│ ├── PodcastGrid.jsx # Responsive grid container
│ ├── LoadingState.jsx # Spinner and loading message
│ ├── ErrorState.jsx # Error display + retry button
│ └── EmptyState.jsx # Message when no podcasts are returned
├── utils/
│ └── dateFormatter.js # formatRelativeDate() – relative time strings
├── App.jsx # Root component – orchestrates data flow
├── index.css # All global styles (plain CSS with media queries)
└── main.jsx # React entry point
