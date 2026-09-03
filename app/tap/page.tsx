import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Church,
  CircleDollarSign,
  HandHeart,
  HeartHandshake,
  MessageCircleHeart,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import styles from "./tap.module.css";

const primaryLinks = [
  {
    title: "Plan Your Visit",
    copy: "Everything you need for your first Sunday.",
    href: "/plan-your-visit",
    icon: CalendarDays,
  },
  {
    title: "Start Here",
    copy: "Discover your next step at ONE1SIX.",
    href: "/start-here",
    icon: Church,
  },
  {
    title: "Prayer",
    copy: "Let our church family stand with you.",
    href: "/#prayer",
    icon: HeartHandshake,
  },
  {
    title: "Groups",
    copy: "Find community and grow together.",
    href: "mailto:info@one1sixchurch.org?subject=ONE1SIX%20Groups",
    icon: Users,
  },
  {
    title: "Devotionals",
    copy: "Grow deeper through the Word of God.",
    href: "/unashamed-devotionals",
    icon: BookOpen,
  },
  {
    title: "Outreach",
    copy: "Help us carry the love of Jesus to Worcester.",
    href: "/meals-of-love",
    icon: HandHeart,
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/one1sixchurch",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@one1sixchurch",
    icon: Youtube,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@one1sixchurch",
    icon: Play,
  },
];

export const metadata = {
  title: "Connect | ONE1SIX Church",
  description:
    "Connect with ONE1SIX Church. Plan your visit, request prayer, give, find devotionals, groups, outreach, and more.",
};

export default function TapPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/homepage-worship-sanctuary-v5.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroShade} />

        <div className={styles.heroContent}>
          <Link className={styles.logo} href="/" aria-label="ONE1SIX Church home">
            <Image
              src="/one1six-logo.png"
              alt="ONE1SIX Church"
              width={420}
              height={195}
              priority
            />
          </Link>

          <div className={styles.liveBadge}>
            <span />
            ONE CHURCH · ONE FAMILY
          </div>

          <h1>
            TAP IN.<br />
            <span>FIND YOUR PLACE.</span>
          </h1>

          <p>
            Whether you are visiting for the first time or ready for your next step
            with Jesus—you belong here.
          </p>

          <a className={styles.visitButton} href="/plan-your-visit">
            <CalendarDays size={21} />
            Join Us This Sunday
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      <section className={styles.directory}>
        <div className={styles.sectionHeading}>
          <p>ONE1SIX DIRECTORY</p>
          <h2>WHAT DO YOU NEED <span>TODAY?</span></h2>
        </div>

        <div className={styles.linkGrid}>
          {primaryLinks.map(({ title, copy, href, icon: Icon }) => {
            const external = href.startsWith("http") || href.startsWith("mailto:");
            const content = (
              <>
                <span className={styles.iconWrap}><Icon size={23} strokeWidth={2} /></span>
                <span className={styles.linkCopy}>
                  <strong>{title}</strong>
                  <small>{copy}</small>
                </span>
                <ArrowUpRight className={styles.arrow} size={20} />
              </>
            );

            return external ? (
              <a
                className={styles.directoryLink}
                href={href}
                key={title}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
              >
                {content}
              </a>
            ) : (
              <Link className={styles.directoryLink} href={href} key={title}>
                {content}
              </Link>
            );
          })}
        </div>

        <a
          className={styles.giveCard}
          href="https://venmo.com/u/One1SixChurch"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.giveIcon}><CircleDollarSign size={29} /></span>
          <span>
            <small>GIVE · SUPPORT THE MISSION</small>
            <strong>@One1SixChurch</strong>
            <em>Give securely through Venmo</em>
          </span>
          <ArrowUpRight size={24} />
        </a>

        <a
          className={styles.connectCard}
          href="mailto:info@one1sixchurch.org?subject=Connect%20With%20ONE1SIX"
        >
          <MessageCircleHeart size={25} />
          <span><strong>Need To Talk?</strong><small>We are here for you.</small></span>
          <ArrowUpRight size={20} />
        </a>
      </section>

      <footer className={styles.footer}>
        <div className={styles.socials}>
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}>
              <Icon size={21} />
            </a>
          ))}
        </div>
        <p>ONE CHURCH FOR THE ONE.<br />A FAMILY FOR THE SIX.</p>
        <a className={styles.website} href="https://one1sixchurch.org">
          ONE1SIXCHURCH.ORG <ArrowUpRight size={15} />
        </a>
        <span className={styles.verse}>ROMANS 1:16 · #LIVEUNASHAMED</span>
      </footer>
    </main>
  );
}
