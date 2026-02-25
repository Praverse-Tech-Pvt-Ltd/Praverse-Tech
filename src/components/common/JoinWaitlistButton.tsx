"use client";

import React from 'react';

type Props = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

export default function JoinWaitlistButton({ onClick, children, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={`join-btn relative overflow-hidden rounded-full px-5 py-2.5 bg-[#006BB3] text-white font-bold flex items-center gap-2 border-2 border-white/30 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-transform duration-300 ${className ?? ''}`}
      aria-label="Join Waitlist"
    >
      {children ?? 'Apply Now'}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="icon h-6 w-6 transition-transform duration-300"
        aria-hidden
      >
        <path
          clipRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
          fillRule="evenodd"
        />
      </svg>

      <span className="shine" aria-hidden />

      <style jsx>{`
        .join-btn:hover {
          transform: scale(1.05);
          border-color: #ffffffcc;
        }

        .join-btn:hover :global(.icon) {
          transform: translateX(4px);
        }

        .shine {
          content: "";
          position: absolute;
          width: 100px;
          height: 100%;
          background-image: linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.8), rgba(255,255,255,0) 70%);
          top: 0;
          left: -100px;
          opacity: 0.6;
          pointer-events: none;
          animation: shine 1.5s ease-out infinite;
        }

        @keyframes shine {
          0% { left: -100px; }
          60% { left: 100%; }
          to { left: 100%; }
        }
      `}</style>
    </button>
  );
}
