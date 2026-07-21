"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/who-is-116" },
  { label: "Our Leaders", href: "/our-leaders" },
  { label: "Our Beliefs", href: "/the-foundation" },
  { label: "Devotionals", href: "/unashamed-devotionals" },
  { label: "Connect", href: "/contact-us" },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.35 2.67.93 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.8.72 1.47 1.38 2.13.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.8-.3 1.47-.72 2.13-1.38.66-.66 1.08-1.33 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.8-.72-1.47-1.38-2.13a5.9 5.9 0 0 0-2.13-1.38c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.2v12.74a2.58 2.58 0 1 1-2.57-2.58c.27 0 .53.04.78.12v-3.3a5.88 5.88 0 0 0-.78-.05A5.88 5.88 0 1 0 15.66 16V9.42a7.45 7.45 0 0 0 4.34 1.39V7.6a4.28 4.28 0 0 1-3.4-1.78z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.5 6.5a3 3 0 0 0-2.12-2.12C19.5 3.86 12 3.86 12 3.86s-7.5 0-9.38.52A3 3 0 0 0 .5 6.5 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.5 3 3 0 0 0 2.12 2.12c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3 3 0 0 0 2.12-2.12A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.5zM9.6 15.57V8.43L15.82 12z" />
    </svg>
  );
}

const socials = [
  { label: "YouTube", href: "https://youtube.com/@one1sixchurch", Icon: YouTubeIcon },
  { label: "Instagram", href: "https://www.instagram.com/one1sixchurch", Icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@one1sixchurch", Icon: TikTokIcon },
  { label: "Facebook", href: "https://www.facebook.com/share/1B8kAYwfdN/", Icon: FacebookIcon },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : previousOverflow;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="blessing-bar">
        <span>Be Blessed, Keep Your Eyes On Jesus,</span>
        <span>
          And Remember To <strong>#LiveUnashamed</strong>
        </span>
      </div>

      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="ONE1SIX Church home">
          <Image src="/one1six-logo.png" alt="ONE1SIX Church" width={315} height={133} priority />
        </Link>

        <button
          className="menu-trigger"
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="site-menu-overlay"
          onClick={() => setMenuOpen(true)}
        >
          <span>Menu</span>
          <Menu size={28} strokeWidth={2.4} />
        </button>
      </nav>

      <div
        id="site-menu-overlay"
        className={`menu-overlay${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="menu-overlay-top">
          <Link className="menu-wordmark" href="/" onClick={() => setMenuOpen(false)}>
            <span>
              ONE<span className="menu-wordmark-accent">1</span>SIX
            </span>
            <small>CHURCH</small>
          </Link>

          <button
            className="menu-close"
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={32} strokeWidth={2.25} />
          </button>
        </div>

        <div className="menu-overlay-inner">
          <nav className="menu-links" aria-label="Expanded navigation">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="menu-socials" aria-label="ONE1SIX Church social media">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <p className="menu-mission-line">One Church For The One, A Family For The Six.</p>
      </div>
    </header>
  );
}
