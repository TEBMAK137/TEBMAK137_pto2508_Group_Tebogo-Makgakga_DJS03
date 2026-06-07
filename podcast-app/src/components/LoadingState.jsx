import React from "react";

export default function LoadingState() {
  return (
    <div className="state-card">
      <div className="spinner"></div>
      <p>Loading podcasts…</p>
      <p className="text-sm text-slate-500 mt-1">Fetching the latest shows</p>
    </div>
  );
}
