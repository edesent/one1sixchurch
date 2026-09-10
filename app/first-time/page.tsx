import { ArrowLeft, ArrowRight, CheckCircle2, Heart, MapPin, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "./first-time.module.css";

const translations = {
  en: {
    eyebrow: "DIGITAL CONNECTION CARD",
    title: "YOU DIDN'T JUST WALK INTO A CHURCH.",
    accent: "YOU WALKED INTO FAMILY.",
    intro: "Welcome home. Share a little about yourself so we can personally welcome you, pray with you, and help you take your next step with Jesus.",
    name: "Full Name",
    phone: "Phone Number",
    email: "Email Address",
    firstTime: "Is this your first time with us?",
    yesFirstTime: "Yes — this is my first time.",
    returning: "No — I have joined you before.",
    nextStep: "How can we walk with you?",
    salvation: "Today I decided to accept Jesus.",
    baptism: "I want to be baptized.",
    family: "I want to become part of the ONE1SIX family.",
    serve: "I am interested in serving.",
    discipleship: "I want to join a group or grow through discipleship.",
    pastor: "I would like a meeting with the Pastor.",
    contact: "How would you prefer we contact you?",
    text: "Text message",
    phoneCall: "Phone call",
    emailMe: "Email",
    message: "Prayer Request or Message",
    optional: "Optional",
    consent: "I give ONE1SIX Church permission to contact me about my connection card and next steps.",
    submit: "Send My Connection Card",
    privacy: "Your information is received privately by the ONE1SIX pastoral team and will not be sold or shared.",
    schedule: "Sundays · 4:30 PM–6:00 PM",
    address: "1048 Main St, Worcester, MA 01603",
    successTitle: "WE RECEIVED YOUR CARD.",
    successCopy: "Welcome to the family! Someone from ONE1SIX Church will connect with you soon. We are honored to walk with you.",
    back: "Return To ONE1SIX Directory",
  },
  es: {
    eyebrow: "TARJETA DIGITAL DE CONEXIÓN",
    title: "NO ENTRASTE SIMPLEMENTE A UNA IGLESIA.",
    accent: "ENTRASTE A UNA FAMILIA.",
    intro: "Bienvenido a casa. Cuéntanos un poco sobre ti para recibirte personalmente, orar contigo y ayudarte a dar tu próximo paso con Jesús.",
    name: "Nombre Completo",
    phone: "Número de Teléfono",
    email: "Correo Electrónico",
    firstTime: "¿Es tu primera vez con nosotros?",
    yesFirstTime: "Sí — esta es mi primera vez.",
    returning: "No — ya he compartido con ustedes.",
    nextStep: "¿Cómo podemos caminar contigo?",
    salvation: "Hoy decidí aceptar a Jesús.",
    baptism: "Quiero ser bautizado.",
    family: "Quiero ser parte de la familia ONE1SIX.",
    serve: "Me interesa servir.",
    discipleship: "Quiero unirme a un grupo o crecer mediante el discipulado.",
    pastor: "Deseo una reunión con el Pastor.",
    contact: "¿Cómo prefieres que nos comuniquemos contigo?",
    text: "Mensaje de texto",
    phoneCall: "Llamada telefónica",
    emailMe: "Correo electrónico",
    message: "Petición de Oración o Mensaje",
    optional: "Opcional",
    consent: "Autorizo a ONE1SIX Church a comunicarse conmigo acerca de esta tarjeta y mis próximos pasos.",
    submit: "Enviar Mi Tarjeta",
    privacy: "Tu información será recibida de forma privada por el equipo pastoral de ONE1SIX y no será vendida ni compartida.",
    schedule: "Domingos · 4:30 PM–6:00 PM",
    address: "1048 Main St, Worcester, MA 01603",
    successTitle: "RECIBIMOS TU TARJETA.",
    successCopy: "¡Bienvenido a la familia! Alguien de ONE1SIX Church se comunicará contigo pronto. Es un honor caminar contigo.",
    back: "Regresar Al Directorio ONE1SIX",
  },
} as const;

export const metadata = {
  title: "Digital Connection Card | ONE1SIX Church",
  description: "Connect with ONE1SIX Church, request prayer, accept Jesus, prepare for baptism, serve, join a group, or request a pastoral meeting.",
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
              <Link href="/start-here"><ArrowLeft size={17} /> {text.back}</Link>
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
              <Link href="/start-here">{text.back} <ArrowRight size={18} /></Link>
            </div>
          ) : (
            <form className={styles.form} action="https://formsubmit.co/info@one1sixchurch.org" method="POST">
              <input type="hidden" name="_subject" value="NEW ONE1SIX DIGITAL CONNECTION CARD" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value={`https://one1sixchurch.org/first-time?submitted=true&lang=${language}`} />
              <input type="hidden" name="Form" value="ONE1SIX Digital Connection Card" />
              <input type="hidden" name="Language" value={language === "es" ? "Spanish" : "English"} />

              <div className={styles.formHeading}>
                <p>WELCOME HOME / BIENVENIDO A CASA</p>
                <h2>LET&apos;S CONNECT.</h2>
              </div>

              <div className={styles.fields}>
                <label>
                  {text.name}
                  <input name="Full Name" type="text" autoComplete="name" required />
                </label>
                <label>
                  {text.phone}
                  <input name="Phone Number" type="tel" inputMode="tel" autoComplete="tel" required />
                </label>
                <label className={styles.full}>
                  {text.email}
                  <input name="Email Address" type="email" autoComplete="email" required />
                </label>
              </div>

              <fieldset className={styles.steps}>
                <legend>{text.firstTime}</legend>
                <label><input name="First Time Guest" type="radio" value="Yes" required /><span><CheckCircle2 size={20} />{text.yesFirstTime}</span></label>
                <label><input name="First Time Guest" type="radio" value="No - Returning" /><span><CheckCircle2 size={20} />{text.returning}</span></label>
              </fieldset>

              <fieldset className={styles.steps}>
                <legend>{text.nextStep}</legend>
                <label><input name="Next Step - Accepted Jesus" type="checkbox" value="Yes" /><span><CheckCircle2 size={20} />{text.salvation}</span></label>
                <label><input name="Next Step - Baptism" type="checkbox" value="Yes" /><span><CheckCircle2 size={20} />{text.baptism}</span></label>
                <label><input name="Next Step - Join ONE1SIX" type="checkbox" value="Yes" /><span><CheckCircle2 size={20} />{text.family}</span></label>
                <label><input name="Next Step - Serve" type="checkbox" value="Yes" /><span><CheckCircle2 size={20} />{text.serve}</span></label>
                <label><input name="Next Step - Groups or Discipleship" type="checkbox" value="Yes" /><span><CheckCircle2 size={20} />{text.discipleship}</span></label>
                <label><input name="Next Step - Pastoral Meeting" type="checkbox" value="Yes" /><span><CheckCircle2 size={20} />{text.pastor}</span></label>
              </fieldset>

              <fieldset className={styles.steps}>
                <legend>{text.contact}</legend>
                <label><input name="Preferred Contact" type="radio" value="Text Message" required /><span><CheckCircle2 size={20} />{text.text}</span></label>
                <label><input name="Preferred Contact" type="radio" value="Phone Call" /><span><CheckCircle2 size={20} />{text.phoneCall}</span></label>
                <label><input name="Preferred Contact" type="radio" value="Email" /><span><CheckCircle2 size={20} />{text.emailMe}</span></label>
              </fieldset>

              <label className={styles.message}>
                {text.message} <small>{text.optional}</small>
                <textarea name="Prayer Request or Message" rows={5} />
              </label>

              <fieldset className={styles.steps}>
                <label><input name="Contact Permission" type="checkbox" value="Yes" required /><span><CheckCircle2 size={20} />{text.consent}</span></label>
              </fieldset>

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
