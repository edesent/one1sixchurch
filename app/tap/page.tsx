import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CircleDollarSign,
  HandHeart,
  HeartHandshake,
  MessageCircleHeart,
  PlayCircle,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import styles from "./tap.module.css";

const copy = {
  en: {
    welcome: "WELCOME TO ONE1SIX",
    titleOne: "TAP IN.",
    titleTwo: "FIND YOUR PLACE.",
    tagline: "ONE CHURCH FOR THE ONE. A FAMILY FOR THE SIX.",
    intro:
      "Whether you are visiting for the first time or ready for your next step with Jesus—you belong here.",
    visit: "Join Us This Sunday",
    schedule: "Sundays · 4:30 PM–6:00 PM",
    address: "1048 Main St · Worcester, MA 01603",
    directory: "ONE1SIX DIRECTORY",
    what: "WHAT DO YOU NEED",
    today: "TODAY?",
    talkTitle: "Need To Talk?",
    talkCopy: "We are here for you.",
    giveLabel: "GIVE · SUPPORT THE MISSION",
    giveCopy: "Give securely through Venmo",
    links: [
      ["Plan Your Visit", "Everything you need for your first Sunday."],
      ["Prayer", "Let our church family stand with you."],
      ["Groups", "Find community and grow together."],
      ["Devotionals", "Grow deeper through the Word of God."],
      ["Outreach", "Help us carry the love of Jesus to Worcester."],
      ["Watch + Listen", "Sermons, devotionals, and ministry moments."],
    ],
  },
  es: {
    welcome: "BIENVENIDO A ONE1SIX",
    titleOne: "CONÉCTATE.",
    titleTwo: "ENCUENTRA TU LUGAR.",
    tagline: "UNA IGLESIA PARA EL UNO. UNA FAMILIA PARA EL SEIS.",
    intro:
      "Ya sea tu primera visita o estés listo para tu próximo paso con Jesús—aquí hay un lugar para ti.",
    visit: "Acompáñanos Este Domingo",
    schedule: "Domingos · 4:30 PM–6:00 PM",
    address: "1048 Main St · Worcester, MA 01603",
    directory: "DIRECTORIO ONE1SIX",
    what: "¿QUÉ NECESITAS",
    today: "HOY?",
    talkTitle: "¿Necesitas Hablar?",
    talkCopy: "Estamos aquí para ti.",
    giveLabel: "OFRENDA · APOYA LA MISIÓN",
    giveCopy: "Ofrenda de forma segura por Venmo",
    links: [
      ["Planifica Tu Visita", "Todo lo que necesitas para tu primer domingo."],
      ["Oración", "Permite que nuestra familia de fe ore contigo."],
      ["Grupos", "Encuentra comunidad y crezcamos juntos."],
      ["Devocionales", "Profundiza en la Palabra de Dios."],
      ["Alcance Comunitario", "Llevemos juntos el amor de Jesús a Worcester."],
      ["Mira + Escucha", "Mensajes, devocionales y momentos de ministerio."],
    ],
  },
} as const;

const links = [
  { href: "/plan-your-visit", icon: CalendarDays },
  { href: "/#prayer", icon: HeartHandshake },
  { href: "mailto:info@one1sixchurch.org?subject=ONE1SIX%20Groups", icon: Users },
  { href: "/unashamed-devotionals", icon: BookOpen },
  { href: "/meals-of-love", icon: HandHeart },
  { href: "https://youtube.com/@one1sixchurch", icon: PlayCircle },
];

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.1 4.8.4 4.1.7c-.8.3-1.5.7-2.1 1.3C1.3 2.7.9 3.3.6 4.1.3 4.9.1 5.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.3 2.2.6 2.9.3.8.7 1.5 1.3 2.1.7.7 1.3 1.1 2.1 1.4.8.3 1.6.5 2.9.5 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 2.9-.6.8-.3 1.5-.7 2.1-1.4.7-.7 1.1-1.3 1.4-2.1.3-.8.5-1.6.5-2.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-2.9-.3-.8-.7-1.5-1.4-2.1C21.3 1.3 20.7.9 19.9.6 19.1.3 18.3.1 17 .1 15.7 0 15.3 0 12 0Zm0 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 0 0 12 5.8Zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.8-10.4a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z"/></svg>;
}
function YouTubeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 3.9 12 3.9 12 3.9s-7.5 0-9.4.5A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"/></svg>;
}
function TikTokIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.2v12.7a2.6 2.6 0 1 1-1.8-2.5V10a5.9 5.9 0 1 0 5.1 6V9.4a7.5 7.5 0 0 0 4.4 1.4V7.6a4.3 4.3 0 0 1-3.4-1.8Z"/></svg>;
}

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/one1sixchurch", Icon: InstagramIcon },
  { label: "YouTube", href: "https://youtube.com/@one1sixchurch", Icon: YouTubeIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@one1sixchurch", Icon: TikTokIcon },
];

export const metadata = {
  title: "Connect | ONE1SIX Church",
  description: "Your direct connection to ONE1SIX Church—visit, pray, grow, give, and live unashamed.",
};

export default async function TapPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const requestedLanguage = (await searchParams).lang;
  const language = requestedLanguage === "es" ? "es" : "en";
  const text = copy[language];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image className={styles.heroImage} src="/homepage-worship-sanctuary-v5.jpg" alt="" fill priority sizes="100vw" />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <div className={styles.topRow}>
            <Link className={styles.logo} href="/" aria-label="ONE1SIX Church home">
              <Image src="/one1six-official-logo.webp" alt="ONE1SIX Church" width={560} height={220} priority />
            </Link>
            <nav className={styles.language} aria-label="Language">
              <Link className={language === "en" ? styles.activeLanguage : ""} href="/tap?lang=en">EN</Link>
              <span>|</span>
              <Link className={language === "es" ? styles.activeLanguage : ""} href="/tap?lang=es">ESP</Link>
            </nav>
          </div>

          <div className={styles.liveBadge}><span />{text.welcome}</div>
          <h1>{text.titleOne}<br /><span>{text.titleTwo}</span></h1>
          <p className={styles.tagline}>{text.tagline}</p>
          <p className={styles.intro}>{text.intro}</p>
          <Link className={styles.visitButton} href="/plan-your-visit">
            <CalendarDays size={21} />{text.visit}<ArrowUpRight size={20} />
          </Link>
          <div className={styles.serviceDetails}>
            <strong>{text.schedule}</strong>
            <a href="https://www.google.com/maps/search/?api=1&query=1048+Main+St+Worcester+MA+01603" target="_blank" rel="noreferrer">
              {text.address} <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className={styles.directory}>
        <div className={styles.sectionHeading}>
          <p>{text.directory}</p>
          <h2>{text.what}<br /><span>{text.today}</span></h2>
        </div>

        <div className={styles.linkGrid}>
          {links.map(({ href, icon: Icon }, index) => {
            const [title, description] = text.links[index];
            const external = href.startsWith("http") || href.startsWith("mailto:");
            const content = <>
              <span className={styles.iconWrap}><Icon size={23} strokeWidth={2} /></span>
              <span className={styles.linkCopy}><strong>{title}</strong><small>{description}</small></span>
              <ArrowUpRight className={styles.arrow} size={20} />
            </>;
            return external ? (
              <a className={styles.directoryLink} href={href} key={title} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{content}</a>
            ) : (
              <Link className={styles.directoryLink} href={href} key={title}>{content}</Link>
            );
          })}
        </div>

        <a className={styles.giveCard} href="https://venmo.com/u/One1SixChurch" target="_blank" rel="noreferrer">
          <CircleDollarSign size={27} />
          <span><small>{text.giveLabel}</small><strong>@One1SixChurch</strong><em>{text.giveCopy}</em></span>
          <ArrowUpRight size={22} />
        </a>

        <a className={styles.connectCard} href="mailto:info@one1sixchurch.org?subject=Connect%20With%20ONE1SIX">
          <MessageCircleHeart size={25} />
          <span><strong>{text.talkTitle}</strong><small>{text.talkCopy}</small></span>
          <ArrowUpRight size={20} />
        </a>
      </section>

      <footer className={styles.footer}>
        <div className={styles.socials}>
          {socialLinks.map(({ label, href, Icon }) => (
            <a href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}><Icon /></a>
          ))}
        </div>
        <p>{text.tagline}</p>
        <a className={styles.website} href="https://one1sixchurch.org">ONE1SIXCHURCH.ORG <ArrowUpRight size={15} /></a>
        <span className={styles.verse}>ROMANS 1:16 · #LIVEUNASHAMED</span>
      </footer>
    </main>
  );
}
