"use client";

import { useEffect, useState } from "react";
import { ChatIcon } from "@/components/icons";

/** Mobile-only WhatsApp button that appears once the hero (and its own WhatsApp button) has scrolled out of view. */
export function FloatingWhatsApp({ href, heroId }: { href: string; heroId: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroId]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Alexander on WhatsApp (opens in a new tab)"
      className={`fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-accent text-on-accent shadow-lift transition-[opacity,translate,visibility,background-color] duration-300 hover:bg-accent-hover md:hidden ${
        visible ? "visible translate-y-0 opacity-100" : "invisible translate-y-4 opacity-0"
      }`}
    >
      <ChatIcon className="size-7" />
    </a>
  );
}
