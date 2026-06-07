import React from "react";

export default function LoadingState() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
      <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-violet-700" />
      <p className="text-base font-medium text-slate-700">Loading podcasts…</p>
      <p className="mt-2 text-sm text-slate-500">
        Fetching the latest podcast previews for you.
      </p>
    </div>
  );
}
