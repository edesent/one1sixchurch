import {
  ArrowRight,
  BookOpen,
  CircleDollarSign,
  HandHeart,
  HeartHandshake,
  PlayCircle,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "./start-here.module.css";

const nextSteps = [
  {
    number: "01",
    title: "I'm New",
    copy: "Planning your first visit? Discover who we are, what we believe, and what you can expect when you walk through the doors.",
    href: "/who-is-116",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Prayer",
    copy: "You do not have to carry it alone. Share your prayer request and let our church family stand with you in faith.",
    href: "mailto:prayer@one1sixchurch.org?subject=Prayer%20Request",
    icon: HeartHandshake,
  },
  {
    number: "03",
    title: "Devotionals",
    copy: "Grow deeper in Scripture through our UNASHAMED devotionals—in English and Spanish, wherever you are.",
    href: "/unashamed-devotionals",
    icon: BookOpen,
  },
  {
    number: "04",
    title: "Groups",
    copy: "Faith was never meant to be lived alone. Find community, discipleship, and people who will walk with you.",
    href: "mailto:info@one1sixchurch.org?subject=ONE1SIX%20Groups",
    icon: Users,
  },
  {
    number: "05",
    title: "Give",
    copy: "Partner with the mission as we proclaim the Gospel, serve Worcester, and reach people with fearless love.",
    href: "https://venmo.com/u/JBLESSED3",
    icon: CircleDollarSign,
    external: true,
  },
  {
    number: "06",
    title: "Our DNA",
    copy: "Discover the biblical values shaping how we worship, serve, love people, and live unashamed of the Gospel.",
    href: "/our-dna",
    icon: HandHeart,
  },
  {
    number: "07",
    title: "Outreach",
    copy: "See how ONE1SIX carries the love of Jesus beyond the walls through practical service, prayer, and Gospel presence.",
    href: "/meals-of-love",
    icon: HeartHandshake,
  },
  {
    number: "08",
    title: "Watch + Listen",
    copy: "Watch sermons, devotionals, worship moments, and ministry content from ONE1SIX Church.",
    href: "https://youtube.com/@one1sixchurch",
    icon: PlayCircle,
    external: true,
  },
];

export const metadata = {
  title: "Start Here | ONE1SIX Church",
  description:
    "Welcome to ONE1SIX Church in Worcester, Massachusetts. Plan your first visit, find prayer, groups, devotionals, giving, outreach, and your next step.",
};

export default function StartHerePage() {
  return (
    <>
      <SiteHeader />

      <main className={styles.page}>
        <section className={styles.hero}>
          <Image
            className={styles.heroImage}
            src="/start-here-sanctuary.jpg"
            alt="The ONE1SIX Church sanctuary in Worcester"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroShade} />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>ONE1SIX CHURCH · WORCESTER, MA</p>
            <h1>
              Welcome
              <span> Home.</span>
            </h1>
            <p className={styles.heroLead}>
              You are not just visiting a website. You are stepping toward a church family that
              will know your name, pray with you, and point you to Jesus.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.redButton} href="/who-is-116">
                Plan Your First Visit <ArrowRight size={19} />
              </Link>
              <a className={styles.ghostButton} href="#next-steps">
                Find Your Next Step
              </a>
            </div>
          </div>
          <div className={styles.serviceBar}>
            <span>Sundays · 1:00 PM</span>
            <strong>One Church For The One. A Family For The Six.</strong>
            <span>#LiveUnashamed</span>
          </div>
        </section>

        <section className={styles.welcome}>
          <div className={styles.welcomeCopy}>
            <p className={styles.sectionLabel}>THERE IS A PLACE FOR YOU</p>
            <h2>
              THIS IS MORE THAN A SERVICE.
              <span> THIS IS FAMILY.</span>
            </h2>
            <p>
              Wherever you are in your walk with God—curious, searching, hurting, rebuilding, or
              ready to grow—you do not have to take the next step alone.
            </p>
            <p className={styles.scripture}>
              “For I am not ashamed of the Gospel…” <strong>Romans 1:16</strong>
            </p>
          </div>
          <div className={styles.photoPair} aria-label="Inside the ONE1SIX Church sanctuary">
            <div className={styles.photoMain}>
              <Image
                src="/start-here-worship-stage.jpg"
                alt="ONE1SIX Church worship stage"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
              />
            </div>
            <div className={styles.photoInset}>
              <Image
                src="/start-here-sanctuary-view.jpg"
                alt="View of the ONE1SIX Church sanctuary"
                fill
                sizes="(max-width: 900px) 48vw, 19vw"
              />
            </div>
            <div className={styles.photoMark}>1<span>✝</span>6</div>
          </div>
        </section>

        <section className={styles.directory} id="next-steps" aria-label="ONE1SIX Church directory">
          <div className={styles.directoryHeading}>
            <div>
              <p className={styles.sectionLabel}>START HERE</p>
              <h2>
                WHAT IS YOUR
                <span> NEXT STEP?</span>
              </h2>
            </div>
            <p>
              Everything you need to visit, connect, grow, give, serve, and move forward in faith
              is right here.
            </p>
          </div>

          <div className={styles.cards}>
            {nextSteps.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className={styles.cardTop}>
                    <span>{item.number}</span>
                    <Icon size={28} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <div className={styles.cardLink}>
                    Start Here <ArrowRight size={18} />
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
          <Image
            className={styles.finalImage}
            src="/start-here-sanctuary-view.jpg"
            alt=""
            fill
            sizes="100vw"
          />
          <div className={styles.finalShade} />
          <div className={styles.finalInner}>
            <p className={styles.sectionLabel}>YOU BELONG HERE</p>
            <h2>COME AS YOU ARE.<br /><span>MEET JESUS.</span></h2>
            <p>
              No perfect people. No pretending. Just real faith, fearless love, and a family
              committed to following Jesus together.
            </p>
            <a
              className={styles.redButton}
              href="mailto:info@one1sixchurch.org?subject=My%20Next%20Step%20at%20ONE1SIX"
            >
              Connect With ONE1SIX <ArrowRight size={19} />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
