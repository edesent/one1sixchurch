import {
  ArrowUpRight,
  BookOpen,
  CircleDollarSign,
  HandHeart,
  HeartHandshake,
  PlayCircle,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "./start-here.module.css";

const hubItems = [
  {
    number: "01",
    title: "First Time?",
    copy: "New to ONE1SIX? Start here and discover who we are, what we believe, and what kind of church family you are stepping into.",
    href: "/who-is-116",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Give",
    copy: "Partner with the mission and help ONE1SIX continue serving people, reaching our city, and proclaiming the Gospel.",
    href: "https://venmo.com/u/JBLESSED3",
    icon: CircleDollarSign,
    external: true,
  },
  {
    number: "03",
    title: "Devotionals",
    copy: "Grow deeper in Scripture through the UNASHAMED devotionals and continue your walk with Jesus throughout the week.",
    href: "/unashamed-devotionals",
    icon: BookOpen,
  },
  {
    number: "04",
    title: "Groups",
    copy: "Looking for community? Let us help you get connected as ONE1SIX groups and discipleship communities continue to grow.",
    href: "mailto:info@one1sixchurch.org?subject=ONE1SIX%20Groups",
    icon: Users,
  },
  {
    number: "05",
    title: "Prayer",
    copy: "You do not have to carry it alone. Send us your prayer request and allow our church family to stand with you in faith.",
    href: "mailto:prayer@one1sixchurch.org?subject=Prayer%20Request",
    icon: HeartHandshake,
  },
  {
    number: "06",
    title: "Our DNA",
    copy: "See the values that shape how we worship, serve, disciple, love people, and live unashamed of the Gospel.",
    href: "/our-dna",
    icon: HandHeart,
  },
  {
    number: "07",
    title: "Outreach",
    copy: "See how ONE1SIX is taking the love of Jesus beyond the walls through practical service, prayer, generosity, and Gospel presence.",
    href: "/meals-of-love",
    icon: HeartHandshake,
  },
  {
    number: "08",
    title: "Watch + Listen",
    copy: "Catch sermons, devotionals, worship moments, and ministry content from ONE1SIX Church on YouTube.",
    href: "https://youtube.com/@one1sixchurch",
    icon: PlayCircle,
    external: true,
  },
];

export const metadata = {
  title: "Start Here | ONE1SIX Church",
  description:
    "ONE1SIX Church Start Here hub — find devotionals, giving, groups, prayer, outreach, our DNA, and your next step.",
};

export default function StartHerePage() {
  return (
    <>
      <SiteHeader />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.grid} aria-hidden="true" />
          <div className={styles.cross} aria-hidden="true">†</div>

          <div className={styles.heroInner}>
            <p className={styles.kicker}>ONE1SIX CHURCH · WORCESTER, MA</p>
            <h1>
              START <span>HERE.</span>
            </h1>
            <p className={styles.lead}>
              Whether this is your first time, you are ready to give, looking for community,
              growing through devotionals, or searching for your next step with Jesus — you are
              in the right place.
            </p>
            <div className={styles.heroLine}>
              <span>ONE CHURCH FOR THE ONE</span>
              <strong>·</strong>
              <span>A FAMILY FOR THE SIX</span>
            </div>
          </div>
        </section>

        <section className={styles.directory} aria-label="ONE1SIX Church directory">
          <div className={styles.directoryHeading}>
            <div>
              <p className={styles.kicker}>YOUR ONE1SIX HUB</p>
              <h2>Find Your <span>Next Step.</span></h2>
            </div>
            <p>
              One place to find the most important ways to connect, grow, serve, give, and move
              forward in faith.
            </p>
          </div>

          <div className={styles.cards}>
            {hubItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className={styles.cardTop}>
                    <Icon size={30} strokeWidth={1.8} />
                    <span>{item.number}</span>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <div className={styles.cardLink}>
                    Explore <ArrowUpRight size={18} />
                  </div>
                </>
              );

              if (item.external || item.href.startsWith("mailto:")) {
                return (
                  <a
                    className={styles.card}
                    href={item.href}
                    key={item.title}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link className={styles.card} href={item.href} key={item.title}>
                  {content}
                </Link>
              );
            })}
          </div>
        </section>

        <section className={styles.finalCall}>
          <div>
            <p className={styles.kicker}>DO NOT JUST VISIT. TAKE A STEP.</p>
            <h2>
              THERE IS A PLACE FOR <span>YOU.</span>
            </h2>
            <p>
              Church is more than a Sunday service. It is a family following Jesus together,
              carrying one another, serving the city, and living the Gospel without shame.
            </p>
            <a
              className={styles.primaryButton}
              href="mailto:info@one1sixchurch.org?subject=My%20Next%20Step%20at%20ONE1SIX"
            >
              Help Me Take My Next Step <ArrowUpRight size={19} />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
