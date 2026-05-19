import React from 'react';

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg 
    id="Layer_2" 
    data-name="Layer 2" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 162.6 162.6"
    className={className}
    stroke="currentColor"
    strokeWidth="6"
    fill="none"
    strokeMiterlimit="10"
  >
    <g id="Layer_1-2" data-name="Layer 1" data-bbox="7.5 8.2 156.6 156.6" data-type="ugc">
      <g>
        <path d="M159.6,81.3c0,43.24-35.06,78.3-78.3,78.3S3,124.54,3,81.3,38.06,3,81.3,3s78.3,35.06,78.3,78.3Z" />
        <path strokeLinecap="round" d="M115.3,115.2V35.9" />
        <path strokeLinecap="round" d="M115.3,22.2H47.3" />
        <path strokeLinecap="round" d="M69.3,138.6V22.2" />
        <path strokeLinecap="round" d="M84.6,148.6V38.5" />
      </g>
    </g>
  </svg>
);
