import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/who-is-116" },
  { label: "Our Leaders", href: "/our-leaders" },
  { label: "Our Beliefs", href: "/the-foundation" },
  { label: "Devotionals", href: "/unashamed-devotionals" },
  { label: "Contact", href: "/contact-us" },
];

export function SiteHeader() {
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
        <div className="desktop-nav">
          {navItems.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
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
              </span>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
