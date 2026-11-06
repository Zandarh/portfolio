type P = { className?: string };

const base = {
  "aria-hidden": true,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const ChatIcon = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M3.5 20.5l1.3-4A8.5 8.5 0 1 1 8 19.6z" />
    <path d="M9 9.5c0 2.8 2.7 5.5 5.5 5.5l1.2-1.4-1.9-1-1 .8a4 4 0 0 1-2.2-2.2l.8-1-1-1.9z" />
  </svg>
);

export const MailIcon = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M3.5 6.5l8.5 6 8.5-6" />
  </svg>
);

export const ArrowUpRight = ({ className = "size-4" }: P) => (
  <svg {...base} className={className}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export const CodeIcon = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
  </svg>
);

export const LockIcon = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
  </svg>
);

export const GlobeIcon = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);

export const UsersIcon = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2A6.5 6.5 0 0 1 21.5 20" />
  </svg>
);

export const CardIcon = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="M2.5 10h19M6.5 15h4" />
  </svg>
);

export const LayoutIcon = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);
