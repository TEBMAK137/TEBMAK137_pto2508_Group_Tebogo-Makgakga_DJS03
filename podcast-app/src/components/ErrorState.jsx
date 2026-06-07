import React from "react";

export default function ErrorState({ message, onRetry }) {
  return (
    <div className="state-card error-state">
      <p className="font-semibold">⚠️ Something went wrong</p>
      <p className="text-sm mt-1">{message}</p>
      <button onClick={onRetry} className="retry-btn">
        Try again
      </button>
    </div>
  );
}
