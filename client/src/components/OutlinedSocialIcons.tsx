/**
 * Outlined Social Media Icons Component
 * Minimalist stroke-based icons for YouTube, Instagram, TikTok, WhatsApp, etc.
 * White by default, colored on hover
 */

export const YoutubeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={`${className} stroke-current fill-none`}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <path d="M9.5 8.5l6 3.5-6 3.5v-7z" fill="currentColor" />
  </svg>
);

export const InstagramIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={`${className} stroke-current fill-none`}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export const TiktokIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={`${className} stroke-current fill-none`}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path d="M16 8a4 4 0 1 1-4-4m0 0V2m0 2a4 4 0 0 1 4 4v6a4 4 0 1 1-4-4" />
  </svg>
);

export const WhatsappIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={`${className} stroke-current fill-none`}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path d="M3 21l1.65-6.04A9 9 0 1 1 21 12a8.97 8.97 0 0 1-9.5 9l-6.5.5z" />
  </svg>
);

export const ThreadsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={`${className} stroke-current fill-none`}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12h8M12 8v8" strokeLinecap="round" />
  </svg>
);

export const FacebookIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={`${className} stroke-current fill-none`}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <path d="M10 12v8m4-8v8m-2-8h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2" />
  </svg>
);

export const TwitterIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={`${className} stroke-current fill-none`}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <path d="M3 6.5a4.5 4.5 0 0 1 9 0M3 6.5l9 9m0-9l9 9M3 15.5a4.5 4.5 0 0 0 9 0" />
  </svg>
);

export const LinkedinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={`${className} stroke-current fill-none`}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <path d="M7 9v8m0-8a2 2 0 1 1 4 0v8m6-8v8m0-8a2 2 0 1 1 4 0" />
    <circle cx="7" cy="5" r="1" fill="currentColor" />
  </svg>
);

export const EmailIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={`${className} stroke-current fill-none`}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 6l10 7 10-7" />
  </svg>
);

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  hoverColor: string;
}

export const createSocialLinks = (): SocialLink[] => [
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw",
    icon: <YoutubeIcon className="w-6 h-6" />,
    hoverColor: "hover:text-red-500",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: <InstagramIcon className="w-6 h-6" />,
    hoverColor: "hover:text-pink-500",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com",
    icon: <TiktokIcon className="w-6 h-6" />,
    hoverColor: "hover:text-black",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/2348068483718",
    icon: <WhatsappIcon className="w-6 h-6" />,
    hoverColor: "hover:text-green-500",
  },
  {
    name: "Email",
    url: "mailto:bluehavens.studios@gmail.com",
    icon: <EmailIcon className="w-6 h-6" />,
    hoverColor: "hover:text-blue-500",
  },
];
