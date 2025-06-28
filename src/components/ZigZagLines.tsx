"use client";

export default function ZigZagLines() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 w-full h-full z-0 animate-zigzag-move"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.18 }}
    >
      <path
        d="M0,160 Q180,240 360,160 T720,160 T1080,160 T1440,160"
        stroke="#fff"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M0,240 Q180,320 360,240 T720,240 T1080,240 T1440,240"
        stroke="#e5e7eb"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M0,80 Q180,160 360,80 T720,80 T1080,80 T1440,80"
        stroke="#a3a3a3"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
} 