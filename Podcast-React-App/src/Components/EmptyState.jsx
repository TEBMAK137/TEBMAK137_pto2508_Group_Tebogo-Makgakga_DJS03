import React from "react";

export default function EmptyState() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-lg font-semibold text-slate-700">No podcasts found</p>
      <p className="mt-2 text-sm text-slate-500">
        The API returned an empty list. Please try again later.
      </p>
    </div>
  );
}
