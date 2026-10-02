"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./leaders.module.css";

const content = {
  en: {
    label: "OUR LEADERS",
    title: ["Meet our", "pastoral family."],
    intro: "A family serving Jesus, loving people, and helping others live unashamed of the Gospel.",
    photoAlt: "Pastor Jobeth V. Pacheco and his wife Wilmary, known as Mary, of ONE1SIX Church",
    caption: "Serving together. Following Jesus.",
    pastorRole: "Founder & Lead Pastor",
    maryRole: "Lead Pastor",
    welcomeLabel: "A PERSONAL WELCOME",
    welcomeTitle: "There is a place for you here.",
    welcome: [
      "We are glad you are here. Whether you are exploring faith, returning to church, or looking for a family to grow with, we would love to meet you.",
      "Our heart is to see people encounter Jesus, grow in His Word, and discover the joy of following Him. We believe the Gospel changes lives, and that no one should have to walk alone.",
      "Come as you are. Let us seek Jesus together.",
    ],
    meetLabel: "THE PEOPLE BEHIND THE WELCOME",
    jobethBio: "Born in New York and raised in Puerto Rico, Jobeth V. Pacheco is the founder and lead pastor of ONE1SIX Church in Worcester, Massachusetts. Also known as JBlessed, “La Bocina de Cristo,” he shares the message of Christ through Christian urban music as well as preaching and teaching. A husband and father of five, his heart for ministry centers on biblical preaching, discipleship, and proclaiming the Gospel without fear or compromise.",
    maryBio: "Wilmary, affectionately known as Mary, serves with her husband, Pastor Jobeth, as a lead pastor of ONE1SIX Church. Together, they are parents of five children and share a commitment to following Jesus, loving people, and building a church family where others can find belonging and grow in faith.",
    dnaLabel: "THE HEART OF OUR MINISTRY",
    dnaTitle: "One mission. An unashamed faith.",
    values: [
      { title: "Authentic faith", text: "Scripture shapes what we believe, how we lead, and how we live.", reference: "2 Timothy 3:16–17" },
      { title: "Fearless love", text: "We want people to experience the love of Jesus through welcome, care, and service.", reference: "John 13:34–35" },
      { title: "Devotion to Christ", text: "Our calling is to make disciples who follow Jesus and help others follow Him.", reference: "Matthew 28:19–20" },
    ],
    calling: "Called to shepherd, serve, and lead by example.",
    callingRef: "1 Peter 5:2–3",
    invitationLabel: "LET'S MEET",
    invitationTitle: "We would love to welcome you.",
    invitationText: "Join us on Sunday, or reach out to the church. Your next step can begin with a conversation.",
    visit: "Plan Your Visit",
    connect: "Contact The Church",
    gathering: "Sundays · 4:30–6:00 PM · Worcester, MA",
  },
  es: {
    label: "NUESTROS LÍDERES",
    title: ["Conoce a nuestra", "familia pastoral."],
    intro: "Una familia que sirve a Jesús, ama a las personas y ayuda a otros a vivir sin avergonzarse del Evangelio.",
    photoAlt: "El Pastor Jobeth V. Pacheco y su esposa Wilmary, conocida como Mary, de ONE1SIX Church",
    caption: "Sirviendo juntos. Siguiendo a Jesús.",
    pastorRole: "Fundador y Pastor Principal",
    maryRole: "Pastora Principal",
    welcomeLabel: "UNA BIENVENIDA PERSONAL",
    welcomeTitle: "Aquí hay un lugar para ti.",
    welcome: [
      "Nos alegra que estés aquí. Ya sea que estés explorando la fe, regresando a la iglesia o buscando una familia con la cual crecer, nos encantaría conocerte.",
      "Nuestro anhelo es que las personas tengan un encuentro con Jesús, crezcan en Su Palabra y descubran el gozo de seguirlo. Creemos que el Evangelio transforma vidas y que nadie debería caminar solo.",
      "Ven tal como eres. Busquemos a Jesús juntos.",
    ],
    meetLabel: "LAS PERSONAS QUE TE DAN LA BIENVENIDA",
    jobethBio: "Nacido en Nueva York y criado en Puerto Rico, Jobeth V. Pacheco es el fundador y pastor principal de ONE1SIX Church en Worcester, Massachusetts. También conocido como JBlessed, “La Bocina de Cristo,” comparte el mensaje de Cristo a través de la música urbana cristiana, la predicación y la enseñanza. Es esposo y padre de cinco hijos. Su corazón por el ministerio se centra en la predicación bíblica, el discipulado y la proclamación del Evangelio sin temor ni compromiso con el error.",
    maryBio: "Wilmary, conocida cariñosamente como Mary, sirve con su esposo, el Pastor Jobeth, como pastora principal de ONE1SIX Church. Juntos son padres de cinco hijos y comparten el compromiso de seguir a Jesús, amar a las personas y edificar una familia de fe donde otros puedan encontrar un lugar y crecer en su caminar con Cristo.",
    dnaLabel: "EL CORAZÓN DE NUESTRO MINISTERIO",
    dnaTitle: "Una misión. Una fe sin vergüenza.",
    values: [
      { title: "Fe auténtica", text: "Las Escrituras forman lo que creemos, cómo guiamos y cómo vivimos.", reference: "2 Timoteo 3:16–17" },
      { title: "Amor sin temor", text: "Queremos que las personas experimenten el amor de Jesús a través de la bienvenida, el cuidado y el servicio.", reference: "Juan 13:34–35" },
      { title: "Devoción a Cristo", text: "Nuestro llamado es formar discípulos que sigan a Jesús y ayuden a otros a seguirlo.", reference: "Mateo 28:19–20" },
    ],
    calling: "Llamados a pastorear, servir y guiar con el ejemplo.",
    callingRef: "1 Pedro 5:2–3",
    invitationLabel: "QUEREMOS CONOCERTE",
    invitationTitle: "Nos encantaría darte la bienvenida.",
    invitationText: "Acompáñanos el domingo o comunícate con la iglesia. Tu próximo paso puede comenzar con una conversación.",
    visit: "Planifica Tu Visita",
    connect: "Contacta A La Iglesia",
    gathering: "Domingos · 4:30–6:00 PM · Worcester, MA",
  },
};

export function PastoralProfile() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const copy = content[language];

  return (
    <main className={styles.page} lang={language}>
      <div className={styles.topline}>
        <p>ONE1SIX CHURCH <span> / </span> {copy.label}</p>
        <div className={styles.languages} role="group" aria-label="Language / Idioma">
          <button type="button" lang="en" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>English</button>
          <button type="button" lang="es" aria-pressed={language === "es"} onClick={() => setLanguage("es")}>Español</button>
        </div>
      </div>

      <section className={styles.hero} aria-labelledby="pastoral-title">
        <figure className={styles.portrait}>
          <Image
            src="/jobeth-and-mary-pastoral.jpg"
            alt={copy.photoAlt}
            width={1254}
            height={1254}
            priority
            sizes="(max-width: 850px) calc(100vw - 40px), (max-width: 1300px) 48vw, 600px"
          />
          <figcaption>{copy.caption}</figcaption>
        </figure>
        <div className={styles.heroCopy}>
          <p className={styles.label}>{copy.label}</p>
          <h1 id="pastoral-title">{copy.title[0]} <span>{copy.title[1]}</span></h1>
          <p className={styles.names}>Jobeth &amp; Mary Pacheco</p>
          <p className={styles.intro}>{copy.intro}</p>
          <div className={styles.identity}>
            <div><strong>Pastor Jobeth V. Pacheco</strong><span>{copy.pastorRole}</span></div>
            <div><strong>Wilmary “Mary” Pacheco</strong><span>{copy.maryRole}</span></div>
          </div>
          <p className={styles.tag}>#LiveUnashamed <span>· Romans 1:16</span></p>
        </div>
      </section>

      <section className={styles.welcome} aria-labelledby="welcome-title">
        <div className={styles.welcomeInner}>
          <div>
            <p className={styles.label}>{copy.welcomeLabel}</p>
            <h2 id="welcome-title">{copy.welcomeTitle}</h2>
          </div>
          <div className={styles.welcomeCopy}>
            {copy.welcome.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className={styles.signature}>Jobeth &amp; Mary</p>
            <p className={styles.motto}>One Church For The One, A Family For The Six.</p>
          </div>
        </div>
      </section>

      <section className={styles.bios} aria-labelledby="meet-title">
        <h2 className={styles.label} id="meet-title">{copy.meetLabel}</h2>
        <div className={styles.bioGrid}>
          <article>
            <p className={styles.role}>{copy.pastorRole}</p>
            <h3>Pastor Jobeth <span>V. Pacheco</span></h3>
            <p>{copy.jobethBio}</p>
          </article>
          <article>
            <p className={styles.role}>{copy.maryRole}</p>
            <h3>Wilmary “Mary” <span>Pacheco</span></h3>
            <p>{copy.maryBio}</p>
          </article>
        </div>
      </section>

      <section className={styles.dna} aria-labelledby="dna-title">
        <div className={styles.dnaInner}>
          <p className={styles.label}>{copy.dnaLabel}</p>
          <h2 id="dna-title">{copy.dnaTitle}</h2>
          <div className={styles.valueGrid}>
            {copy.values.map((value, index) => (
              <article key={value.title}>
                <span className={styles.number} aria-hidden="true">0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
                <span className={styles.reference}>{value.reference}</span>
              </article>
            ))}
          </div>
          <div className={styles.calling}>
            <p>{copy.calling}</p>
            <span>{copy.callingRef}</span>
          </div>
        </div>
      </section>

      <section className={styles.invitation} aria-labelledby="invitation-title">
        <p className={styles.label}>{copy.invitationLabel}</p>
        <h2 id="invitation-title">{copy.invitationTitle}</h2>
        <p>{copy.invitationText}</p>
        <div className={styles.actions}>
          <Link className={styles.primaryButton} href="/plan-your-visit">{copy.visit}</Link>
          <a className={styles.secondaryButton} href="mailto:info@one1sixchurch.org">{copy.connect}</a>
        </div>
        <p className={styles.gathering}>{copy.gathering}</p>
      </section>
    </main>
  );
}
