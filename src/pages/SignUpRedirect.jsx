// src/pages/SignUpRedirect.jsx
import { useEffect } from "react";

export default function SignUpRedirect() {
  useEffect(() => {
    // give React one frame to paint the spinner, then navigate
    const id = setTimeout(() => {
      window.location.replace(
        "https://docs.google.com/forms/d/1vp3llZpvKQNrB8ja5hym4-lG0GE7meZGEh6DwtCwZRU/"
      );
    }, 400);          // tweak delay as you like (300–600 ms is typical)

    return () => clearTimeout(id); // cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* spinner */}
      <svg
        className="animate-spin h-12 w-12 text-[#488559]"
        viewBox="0 0 24 24"
        fill="none"
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
          d="M4 12a8 8 0 018-8v4l5-5-5-5v4A12 12 0 000 12h4z"
        />
      </svg>

      {/* message */}
      <p className="mt-4 text-[#488559] font-medium">Redirecting…</p>
    </div>
  );
}


//To be removed when connected to good network

// import { useEffect } from "react";

// export default function SignUpRedirect() {     // ← default export
//   useEffect(() => {
//     window.location.replace(
//       "https://docs.google.com/forms/d/1vp3llZpvKQNrB8ja5hym4-lG0GE7meZGEh6DwtCwZRU/"
//     );
//   }, []);

//   return null;
// }
