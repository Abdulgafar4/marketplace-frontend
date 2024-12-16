import React from 'react'

interface ClevertagLogoProps {
    className?: string
}

export const ClevertagLogo: React.FC<ClevertagLogoProps> = ({ className = "h-8 w-auto" }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="40" height="40" rx="8" fill="currentColor" className="text-primary" />
            <path
                d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-primary-foreground"
            />
            <path
                d="M13 30C13 27.7909 14.7909 26 17 26H23C25.2091 26 27 27.7909 27 30"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-primary-foreground"
            />
            <path
                d="M16 18V22H19L20 21L21 22H24V18H21V20.5L20 19.5L19 20.5V18H16Z"
                fill="currentColor"
                className="text-primary-foreground"
            />
        </svg>
    )
}

