import { useState } from "react";

export default function SignUpPage() {
  const [loaded, setLoaded] = useState(false);

  // ---- Google gives a cleaner “embed” URL ----
  // Open the form → ⋮ (More) → Embed HTML → copy the src
  const formSrc =
    "https://docs.google.com/forms/d/1vp3llZpvKQNrB8ja5hym4-lG0GE7meZGEh6DwtCwZRU/viewform?edit_requested=true";

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Spinner / splash */}
      {!loaded && (
        <div className="flex flex-col items-center">
          {/* Tailwind spinner */}
          <svg
            className="animate-spin h-12 w-12 text-[#488559]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l5-5-5-5v4a12 12 0 00-12 12h4z"
            />
          </svg>
          <p className="mt-4 text-[#488559] font-medium">Loading form…</p>
        </div>
      )}

      {/* Google Form */}
      <iframe
        title="QuickMynt Sign-Up"
        src={formSrc}
        className={`${loaded ? "block" : "hidden"} w-full h-screen`}
        onLoad={() => setLoaded(true)}
      ></iframe>
    </div>
  );
}
