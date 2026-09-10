import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  CalendarClock,
  HandHeart,
  Heart,
  Landmark,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import styles from "./give.module.css";

const copy = {
  en: {
    back: "BACK TO DIRECTORY",
    eyebrow: "ONE1SIX GIVING",
    title: "GENEROSITY",
    accent: "IS WORSHIP.",
    intro:
      "Your generosity helps ONE1SIX Church proclaim the Gospel, reach the one, serve Worcester, and build a church where people can encounter Jesus.",
    giveNow: "GIVE NOW",
    giveNowCopy: "Give securely through the official ONE1SIX Church Tithe.ly giving form.",
    giveAction: "OPEN SECURE GIVING FORM",
    handle: "TITHE.LY GIVING",
    recurring: "TEXT GIVING",
    recurringCopy: "Give quickly from your phone by sending a text to our dedicated giving number.",
    recurringAction: "TEXT (833) 680-2135",
    choose: "HOW YOUR GIFT HELPS",
    general: "GENERAL MINISTRY",
    generalCopy: "Supports weekly ministry, worship, discipleship, operations, and the mission of ONE1SIX.",
    outreach: "OUTREACH",
    outreachCopy: "Helps us serve our city with meals, prayer, practical care, and the Gospel.",
    future: "FUTURE + BUILDING",
    futureCopy: "Helps prepare for growth, ministry resources, and future facility needs.",
    note: "When giving through Venmo, you can include the purpose of your gift in the memo.",
    why: "WHY WE GIVE",
    verse: "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.",
    reference: "2 CORINTHIANS 9:7",
    promiseTitle: "EVERY GIFT HAS A MISSION.",
    promiseCopy: "We steward generosity toward ministry, people, outreach, and the Gospel mission God has entrusted to ONE1SIX Church.",
    footer: "ONE CHURCH FOR THE ONE. A FAMILY FOR THE SIX.",
  },
  es: {
    back: "VOLVER AL DIRECTORIO",
    eyebrow: "GENEROSIDAD ONE1SIX",
    title: "GENEROSIDAD",
    accent: "ES ADORACIÓN.",
    intro:
      "Tu generosidad ayuda a ONE1SIX Church a proclamar el Evangelio, alcanzar al uno, servir a Worcester y levantar una iglesia donde las personas puedan encontrarse con Jesús.",
    giveNow: "DAR AHORA",
    giveNowCopy: "Da de forma segura mediante el formulario oficial de Tithe.ly de ONE1SIX Church.",
    giveAction: "ABRIR FORMULARIO SEGURO",
    handle: "TITHE.LY GIVING",
    recurring: "DONACIÓN POR TEXTO",
    recurringCopy: "Da rápidamente desde tu teléfono enviando un mensaje a nuestro número dedicado.",
    recurringAction: "TEXT (833) 680-2135",
    choose: "CÓMO AYUDA TU OFRENDA",
    general: "MINISTERIO GENERAL",
    generalCopy: "Apoya el ministerio semanal, adoración, discipulado, operaciones y la misión de ONE1SIX.",
    outreach: "ALCANCE COMUNITARIO",
    outreachCopy: "Nos ayuda a servir nuestra ciudad con comida, oración, ayuda práctica y el Evangelio.",
    future: "FUTURO + EDIFICIO",
    futureCopy: "Ayuda a prepararnos para crecimiento, recursos de ministerio y futuras necesidades de instalaciones.",
    note: "Al dar por Venmo, puedes escribir el propósito de tu ofrenda en el memo.",
    why: "POR QUÉ DAMOS",
    verse: "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre.",
    reference: "2 CORINTIOS 9:7",
    promiseTitle: "CADA OFRENDA TIENE UNA MISIÓN.",
    promiseCopy: "Administramos la generosidad hacia el ministerio, las personas, el alcance comunitario y la misión del Evangelio que Dios ha confiado a ONE1SIX Church.",
    footer: "UNA IGLESIA PARA EL UNO. UNA FAMILIA PARA EL SEIS.",
  },
} as const;

export const metadata = {
  title: "Give | ONE1SIX Church",
  description: "Give to ONE1SIX Church and support Gospel ministry, outreach, discipleship, and the mission to reach the one.",
};

export default async function GivePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const language = params.lang === "es" ? "es" : "en";
  const text = copy[language];

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

        <div className={styles.heroInner}>
          <div className={styles.topRow}>
            <Link className={styles.back} href={`/tap?lang=${language}`}>
              <ArrowLeft size={16} /> {text.back}
            </Link>
            <nav className={styles.language} aria-label="Language">
              <Link className={language === "en" ? styles.active : ""} href="/give?lang=en">EN</Link>
              <span>|</span>
              <Link className={language === "es" ? styles.active : ""} href="/give?lang=es">ESP</Link>
            </nav>
          </div>

          <Link className={styles.logo} href="/" aria-label="ONE1SIX Church home">
            <Image src="/one1six-official-logo.webp" alt="ONE1SIX Church" width={560} height={220} priority />
          </Link>

          <p className={styles.eyebrow}>{text.eyebrow}</p>
          <h1>{text.title}<br /><span>{text.accent}</span></h1>
          <p className={styles.intro}>{text.intro}</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.actionGrid}>
          <article className={`${styles.actionCard} ${styles.primary}`}>
            <div className={styles.actionIcon}><Heart size={26} /></div>
            <div>
              <p>{text.giveNow}</p>
              <h2>{text.handle}</h2>
              <span>{text.giveNowCopy}</span>
            </div>
            <button
              className={`tithely-give-button ${styles.tithelyButton}`}
              data-form="70a68a4d-2f9e-40fd-a859-672fa486a22f"
              type="button"
            >
              {text.giveAction}<ArrowUpRight size={17} />
            </button>
          </article>

          <article className={styles.actionCard}>
            <div className={styles.actionIcon}><CalendarClock size={26} /></div>
            <div>
              <p>{text.recurring}</p>
              <h2>ONE1SIX GIVING</h2>
              <span>{text.recurringCopy}</span>
            </div>
            <a href="mailto:info@one1sixchurch.org?subject=Recurring%20Giving%20at%20ONE1SIX">
              {text.recurringAction}<ArrowUpRight size={17} />
            </a>
          </article>
        </div>

        <div className={styles.sectionHeading}>
          <p>{text.choose}</p>
        </div>

        <div className={styles.funds}>
          <article>
            <Landmark size={24} />
            <h3>{text.general}</h3>
            <p>{text.generalCopy}</p>
          </article>
          <article>
            <HandHeart size={24} />
            <h3>{text.outreach}</h3>
            <p>{text.outreachCopy}</p>
          </article>
          <article>
            <Building2 size={24} />
            <h3>{text.future}</h3>
            <p>{text.futureCopy}</p>
          </article>
        </div>

        <div className={styles.memo}><ShieldCheck size={19} /><span>{text.note}</span></div>

        <section className={styles.why}>
          <div className={styles.whyMark}><Sparkles size={22} /></div>
          <p>{text.why}</p>
          <blockquote>“{text.verse}”</blockquote>
          <strong>{text.reference}</strong>
        </section>

        <section className={styles.promise}>
          <p>{text.promiseTitle}</p>
          <span>{text.promiseCopy}</span>
        </section>
      </section>

      <footer className={styles.footer}>{text.footer}</footer>
    </main>
  );
}
