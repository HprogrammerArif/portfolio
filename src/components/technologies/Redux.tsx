import React from 'react';

export default function Redux({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_redux)">
                {/* Main circle */}
                <circle cx="12" cy="12" r="2.5" fill="#764ABC" />

                {/* Top right orbital */}
                <ellipse
                    cx="12"
                    cy="12"
                    rx="8.5"
                    ry="3"
                    stroke="#764ABC"
                    strokeWidth="1.5"
                    fill="none"
                    transform="rotate(-30 12 12)"
                />

                {/* Bottom right orbital */}
                <ellipse
                    cx="12"
                    cy="12"
                    rx="8.5"
                    ry="3"
                    stroke="#764ABC"
                    strokeWidth="1.5"
                    fill="none"
                    transform="rotate(30 12 12)"
                />

                {/* Left orbital */}
                <ellipse
                    cx="12"
                    cy="12"
                    rx="8.5"
                    ry="3"
                    stroke="#764ABC"
                    strokeWidth="1.5"
                    fill="none"
                    transform="rotate(90 12 12)"
                />

                {/* Orbital dots */}
                <circle cx="20" cy="12" r="1.5" fill="#764ABC" />
                <circle cx="4" cy="12" r="1.5" fill="#764ABC" />
                <circle cx="16.5" cy="6.5" r="1.5" fill="#764ABC" />
                <circle cx="7.5" cy="17.5" r="1.5" fill="#764ABC" />
                <circle cx="16.5" cy="17.5" r="1.5" fill="#764ABC" />
                <circle cx="7.5" cy="6.5" r="1.5" fill="#764ABC" />
            </g>
            <defs>
                <clipPath id="clip0_redux">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}