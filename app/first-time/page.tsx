import { ArrowLeft, ArrowRight, CheckCircle2, Heart, MapPin, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "./first-time.module.css";

const translations = {
  en: {
    eyebrow: "FIRST TIME AT ONE1SIX?",
    title: "YOU ARE NOT JUST A VISITOR.",
    accent: "YOU ARE FAMILY.",
    intro: "Thank you for worshiping with us. Share a little about yourself so we can welcome you, pray with you, and help you take your next step with Jesus.",
    name: "Full Name",
    phone: "Phone Number",
    email: "Email Address",
    nextStep: "How can we walk with you?",
    salvation: "Today I decided to accept Jesus.",
    baptism: "I want to be baptized.",
    pastor: "I would like a meeting with the Pastor.",
    message: "Prayer Request or Message",
    optional: "Optional",
    submit: "Send My Connection Card",
    privacy: "Your information is received privately by the ONE1SIX pastoral team.",
    schedule: "Sundays · 4:30 PM–6:00 PM",
    address: "1048 Main St, Worcester, MA 01603",
    successTitle: "WE RECEIVED YOUR CARD.",
    successCopy: "Thank you for trusting us with your next step. Someone from ONE1SIX Church will connect with you soon.",
    back: "Return To ONE1SIX Directory",
  },
  es: {
    eyebrow: "¿PRIMERA VEZ EN ONE1SIX?",
    title: "NO ERES SOLO UNA VISITA.",
    accent: "ERES FAMILIA.",
    intro: "Gracias por adorar junto a nosotros. Cuéntanos un poco sobre ti para poder recibirte, orar contigo y ayudarte a dar tu próximo paso con Jesús.",
    name: "Nombre Completo",
    phone: "Número de Teléfono",
    email: "Correo Electrónico",
    nextStep: "¿Cómo podemos caminar contigo?",
    salvation: "Hoy decidí aceptar a Jesús.",
    baptism: "Quiero ser bautizado.",
    pastor: "Deseo una reunión con el Pastor.",
    message: "Petición de Oración o Mensaje",
    optional: "Opcional",
    submit: "Enviar Mi Tarjeta",
    privacy: "Tu información será recibida de forma privada por el equipo pastoral de ONE1SIX.",
    schedule: "Domingos · 4:30 PM–6:00 PM",
    address: "1048 Main St, Worcester, MA 01603",
    successTitle: "RECIBIMOS TU TARJETA.",
    successCopy: "Gracias por confiarnos tu próximo paso. Alguien de ONE1SIX Church se comunicará contigo pronto.",
    back: "Regresar Al Directorio ONE1SIX",
  },
} as const;

export const metadata = {
  title: "First Time Here | ONE1SIX Church",
  description: "Connect with ONE1SIX Church, request prayer, accept Jesus, prepare for baptism, or request a pastoral meeting.",
};

export default async function FirstTimePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string; submitted?: string }>;
}) {
  const params = await searchParams;
  const language = params.lang === "es" ? "es" : "en";
  const text = translations[language];
  const submitted = params.submitted === "true";

  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <Image className={styles.heroImage} src="/homepage-worship-sanctuary-v5.jpg" alt="" fill priority sizes="100vw" />
          <div className={styles.heroShade} />
          <div className={styles.heroInner}>
            <div className={styles.heroTop}>
              <Link href="/tap"><ArrowLeft size={17} /> {text.back}</Link>
              <nav className={styles.language} aria-label="Language">
                <Link className={language === "en" ? styles.active : ""} href="/first-time?lang=en">EN</Link>
                <span>|</span>
                <Link className={language === "es" ? styles.active : ""} href="/first-time?lang=es">ESP</Link>
              </nav>
            </div>
            <p className={styles.eyebrow}>{text.eyebrow}</p>
            <h1>{text.title}<br /><span>{text.accent}</span></h1>
            <p className={styles.intro}>{text.intro}</p>
            <div className={styles.details}>
              <span><Heart size={17} />{text.schedule}</span>
              <a href="https://www.google.com/maps/search/?api=1&query=1048+Main+St+Worcester+MA+01603" target="_blank" rel="noreferrer">
                <MapPin size={17} />{text.address}
              </a>
            </div>
          </div>
        </section>

        <section className={styles.formSection}>
          {submitted ? (
            <div className={styles.success}>
              <CheckCircle2 size={58} strokeWidth={1.5} />
              <p>ONE1SIX CHURCH</p>
              <h2>{text.successTitle}</h2>
              <span>{text.successCopy}</span>
              <Link href="/tap">{text.back} <ArrowRight size={18} /></Link>
            </div>
          ) : (
            <form className={styles.form} action="https://formsubmit.co/info@one1sixchurch.org" method="POST">
              <input type="hidden" name="_subject" value="New ONE1SIX First-Time Guest / Connection Card" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value={`https://one1sixchurch.org/first-time?submitted=true&lang=${language}`} />
              <input type="hidden" name="Form" value="ONE1SIX First-Time Connection Card" />

              <div className={styles.formHeading}>
                <p>{text.eyebrow}</p>
                <h2>LET&apos;S CONNECT.</h2>
              </div>

              <div className={styles.fields}>
                <label>
                  {text.name}
                  <input name="Full Name" type="text" autoComplete="name" required />
                </label>
                <label>
                  {text.phone}
                  <input name="Phone Number" type="tel" autoComplete="tel" required />
                </label>
                <label className={styles.full}>
                  {text.email}
                  <input name="Email Address" type="email" autoComplete="email" required />
                </label>
              </div>

              <fieldset className={styles.steps}>
                <legend>{text.nextStep}</legend>
                <label><input name="Next Step - Accepted Jesus" type="checkbox" value="Yes" /><span><CheckCircle2 size={20} />{text.salvation}</span></label>
                <label><input name="Next Step - Baptism" type="checkbox" value="Yes" /><span><CheckCircle2 size={20} />{text.baptism}</span></label>
                <label><input name="Next Step - Pastoral Meeting" type="checkbox" value="Yes" /><span><CheckCircle2 size={20} />{text.pastor}</span></label>
              </fieldset>

              <label className={styles.message}>
                {text.message} <small>{text.optional}</small>
                <textarea name="Prayer Request or Message" rows={5} />
              </label>

              <button type="submit">{text.submit}<Send size={18} /></button>
              <p className={styles.privacy}>{text.privacy}</p>
            </form>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
