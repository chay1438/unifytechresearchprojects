"use client";

export default function UnifyTechLogo({ className = "", size = 96 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagon for techy look */}
      <polygon
        points="48,8 88,28 88,68 48,88 8,68 8,28"
        stroke="#38bdf8"
        strokeWidth="4"
        fill="url(#unifytech-gradient)"
        opacity="0.9"
      />
      {/* Stylized U */}
      <path
        d="M28 32 v20 a20 20 0 0 0 40 0 V32"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Stylized T */}
      <path
        d="M48 32 v28 M38 32 h20"
        stroke="#f0abfc"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <defs>
        <linearGradient id="unifytech-gradient" x1="8" y1="8" x2="88" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#18181b" />
          <stop offset="1" stopColor="#23272f" />
        </linearGradient>
      </defs>
    </svg>
  );
} 