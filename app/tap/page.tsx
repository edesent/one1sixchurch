import {
  ArrowUpRight,
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
    eyebrow: "ONE1SIX DIRECTORY",
    title: "WHAT DO YOU NEED",
    accent: "TODAY?",
    service: "SUNDAY · 4:30 PM–6:00 PM",
    address: "1048 MAIN ST · WORCESTER, MA",
    plan: "PLAN YOUR VISIT",
    newTitle: "I'M NEW",
    newCopy: "Start here and take your next step.",
    connect: "CONNECT",
    prayerTitle: "PRAYER",
    prayerCopy: "Let our church family stand with you.",
    prayerAction: "REQUEST PRAYER",
    giveTitle: "GIVE",
    giveCopy: "Support the mission of ONE1SIX.",
    giveAction: "GIVING CENTER",
    textGiving: "TEXT GIVE TO · (833) 680-2135",
    growTitle: "GROW + CONNECT",
    growCopy: "Find community and grow in the Word.",
    groups: "GROUPS",
    devotionals: "DEVOTIONALS",
    watchTitle: "WATCH + LISTEN",
    watchCopy: "Sermons, devotionals, and ministry moments.",
    watchAction: "WATCH NOW",
    serveTitle: "SERVE + OUTREACH",
    serveCopy: "Carry the love of Jesus to Worcester.",
    serveAction: "100 MEALS OF LOVE",
    talkTitle: "NEED TO TALK?",
    talkCopy: "We are here for you.",
  },
  es: {
    eyebrow: "DIRECTORIO ONE1SIX",
    title: "¿QUÉ NECESITAS",
    accent: "HOY?",
    service: "DOMINGO · 4:30 PM–6:00 PM",
    address: "1048 MAIN ST · WORCESTER, MA",
    plan: "PLANIFICA TU VISITA",
    newTitle: "SOY NUEVO",
    newCopy: "Comienza aquí y da tu próximo paso.",
    connect: "CONECTAR",
    prayerTitle: "ORACIÓN",
    prayerCopy: "Permite que nuestra familia ore contigo.",
    prayerAction: "PEDIR ORACIÓN",
    giveTitle: "DAR",
    giveCopy: "Apoya la misión de ONE1SIX.",
    giveAction: "CENTRO DE OFRENDAS",
    textGiving: "TEXT PARA DAR · (833) 680-2135",
    growTitle: "CRECE + CONÉCTATE",
    growCopy: "Encuentra comunidad y crece en la Palabra.",
    groups: "GRUPOS",
    devotionals: "DEVOCIONALES",
    watchTitle: "MIRA + ESCUCHA",
    watchCopy: "Mensajes, devocionales y momentos de ministerio.",
    watchAction: "VER AHORA",
    serveTitle: "SIRVE + OUTREACH",
    serveCopy: "Lleva el amor de Jesús a Worcester.",
    serveAction: "100 MEALS OF LOVE",
    talkTitle: "¿NECESITAS HABLAR?",
    talkCopy: "Estamos aquí para ti.",
  },
} as const;

export const metadata = {
  title: "Connect | ONE1SIX Church",
  description: "Your fast connection to ONE1SIX Church—visit, pray, grow, give, watch, and serve.",
};

export default async function TapPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const requestedLanguage = (await searchParams).lang;
  const language = requestedLanguage === "es" ? "es" : "en";
  const text = copy[language];
  const langQuery = `?lang=${language}`;

  return (
    <main className={styles.page}>
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />

      <section className={styles.shell}>
        <header className={styles.header}>
          <Link className={styles.logo} href="/" aria-label="ONE1SIX Church home">
            <Image src="/one1six-official-logo.webp" alt="ONE1SIX Church" width={560} height={220} priority />
          </Link>
          <nav className={styles.language} aria-label="Language">
            <Link className={language === "en" ? styles.activeLanguage : ""} href="/tap?lang=en">EN</Link>
            <span>|</span>
            <Link className={language === "es" ? styles.activeLanguage : ""} href="/tap?lang=es">ESP</Link>
          </nav>
        </header>

        <div className={styles.heading}>
          <p>{text.eyebrow}</p>
          <h1>{text.title} <span>{text.accent}</span></h1>
        </div>

        <div className={styles.serviceBar}>
          <span><strong>{text.service}</strong><small>{text.address}</small></span>
          <Link href={`/plan-your-visit${langQuery}`}>{text.plan}<ArrowUpRight size={14} /></Link>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <span className={styles.icon}><MessageCircleHeart size={23} /></span>
            <div className={styles.copy}><strong>{text.newTitle}</strong><small>{text.newCopy}</small></div>
            <div className={styles.actions}>
              <Link href={`/first-time${langQuery}`}>{text.connect}<ArrowUpRight size={13} /></Link>
              <Link href={`/plan-your-visit${langQuery}`}>{text.plan}<ArrowUpRight size={13} /></Link>
            </div>
          </article>

          <article className={styles.card}>
            <span className={styles.icon}><HeartHandshake size={23} /></span>
            <div className={styles.copy}><strong>{text.prayerTitle}</strong><small>{text.prayerCopy}</small></div>
            <div className={styles.actions}>
              <Link href="/#prayer">{text.prayerAction}<ArrowUpRight size={13} /></Link>
            </div>
          </article>

          <article className={`${styles.card} ${styles.give}`}>
            <span className={styles.icon}><CircleDollarSign size={23} /></span>
            <div className={styles.copy}><strong>{text.giveTitle}</strong><small>{text.giveCopy}</small></div>
            <div className={styles.actions}>
              <Link href={`/give${langQuery}`}>{text.giveAction}<ArrowUpRight size={13} /></Link>
              <a href="sms:+18336802135">{text.textGiving}<ArrowUpRight size={13} /></a>
            </div>
          </article>

          <article className={styles.card}>
            <span className={styles.icon}><Users size={23} /></span>
            <div className={styles.copy}><strong>{text.growTitle}</strong><small>{text.growCopy}</small></div>
            <div className={styles.actions}>
              <a href="mailto:info@one1sixchurch.org?subject=ONE1SIX%20Groups">{text.groups}<ArrowUpRight size={13} /></a>
              <Link href="/unashamed-devotionals">{text.devotionals}<ArrowUpRight size={13} /></Link>
            </div>
          </article>

          <article className={styles.card}>
            <span className={styles.icon}><PlayCircle size={23} /></span>
            <div className={styles.copy}><strong>{text.watchTitle}</strong><small>{text.watchCopy}</small></div>
            <div className={styles.actions}>
              <a href="https://youtube.com/@one1sixchurch" target="_blank" rel="noreferrer">{text.watchAction}<ArrowUpRight size={13} /></a>
            </div>
          </article>

          <article className={styles.card}>
            <span className={styles.icon}><HandHeart size={23} /></span>
            <div className={styles.copy}><strong>{text.serveTitle}</strong><small>{text.serveCopy}</small></div>
            <div className={styles.actions}>
              <Link href="/meals-of-love">{text.serveAction}<ArrowUpRight size={13} /></Link>
            </div>
          </article>
        </div>

        <a className={styles.talk} href="mailto:info@one1sixchurch.org?subject=Connect%20With%20ONE1SIX">
          <MessageCircleHeart size={20} />
          <span><strong>{text.talkTitle}</strong><small>{text.talkCopy}</small></span>
          <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  );
}
