import React from 'react';

const Loader = () => (
  <div className="flex items-center justify-center">
    <svg
      className="animate-spin h-10 w-10 text-gray-400"
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
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0120 12h-4a4 4 0 00-4-4V4.243C7.54 5.916 6.415 8.28 6 10.875h4.5L7 12.291zM11 15h1l.001 4H11v-4z"
      ></path>
    </svg>
  </div>
);

export default Loader;

