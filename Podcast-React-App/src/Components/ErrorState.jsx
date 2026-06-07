import React from "react";

export default function ErrorState({ message, onRetry }) {
  return (
    <div className="rounded-3xl border border-rose-200 bg-rose-50 p-8 text-center shadow-sm">
      <p className="text-lg font-semibold text-rose-700">
        Something went wrong
      </p>
      <p className="mt-2 text-sm text-rose-600">{message}</p>
      <button
        onClick={onRetry}
        className="mt-5 rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-700"
      >
        Try again
      </button>
    </div>
  );
}
