import React from "react";

export default function EmptyState() {
  return (
    <div className="state-card">
      <p>No podcasts found</p>
      <p className="text-sm text-slate-500 mt-1">
        Try refreshing the page later.
      </p>
    </div>
  );
}
