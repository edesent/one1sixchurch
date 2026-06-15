import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Who Is 116",
    href: "/who-is-116",
    children: [{ label: "Our Leaders", href: "/our-leaders" }],
  },
  {
    label: "Our DNA",
    href: "/our-dna",
    children: [{ label: "Unashamed Devotionals", href: "/unashamed-devotionals" }],
  },
  { label: "The Foundation", href: "/the-foundation" },
  { label: "Contact Us", href: "/contact-us" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="blessing-bar">
        Be blessed, keep your eyes on Jesus, and remember to #LIVEUNASHAMED
      </div>
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="ONE1SIX Church home">
          <Image src="/one1six-logo.png" alt="ONE1SIX Church" width={315} height={133} priority />
        </Link>
        <div className="desktop-nav">
          {navItems.map((item) => (
            <div className="nav-item" key={item.href}>
              <Link className="nav-link" href={item.href}>
                {item.label}
                {item.children ? <ChevronDown size={14} aria-hidden="true" /> : null}
              </Link>
              {item.children ? (
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <details className="mobile-nav">
          <summary aria-label="Open menu">
            <Menu size={24} />
          </summary>
          <div>
            {navItems.map((item) => (
              <span className="mobile-nav-group" key={item.href}>
                <Link href={item.href}>{item.label}</Link>
                {item.children?.map((child) => (
                  <Link className="mobile-sub-link" key={child.href} href={child.href}>
                    {child.label}
                  </Link>
                ))}
              </span>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
