"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, ChevronDown, Heart, Users } from "lucide-react";
import styles from "./discipleship.module.css";

const copy = {
  en: {
    language: "Page language",
    eyebrow: "HOW WE MAKE DISCIPLES",
    title: ["FOLLOW JESUS.", "LIVE UNASHAMED."],
    intro: "At ONE1SIX, we learn to follow Jesus together: rooted in Scripture, formed through prayer and obedience, and sent to love people and help them follow Him.",
    primary: "Find your next step",
    secondary: "Explore the journey",
    caption: "One Church For The One. A Family For The Six.",
    photoAlt: "The sanctuary where ONE1SIX Church gathers in Worcester",
    nav: ["The journey", "Bible study", "Our weekly rhythm", "Take a step"],
    dnaLabel: "OUR DNA, LIVED OUT",
    dnaTitle: "THE GOSPEL SHAPES OUR EVERYDAY LIFE.",
    dnaIntro: "Our mission is to ignite a global movement of disciples who live with holy boldness, transforming culture through authentic faith, fearless love, and unwavering devotion to Jesus Christ.",
    dna: [
      { title: "Authentic faith", text: "We bring our real questions and struggles to Jesus. We open the Bible, receive its truth, and put it into practice.", verse: "2 Timothy 3:16–17" },
      { title: "Fearless love", text: "We welcome people, carry one another’s burdens, and serve our neighbors with the dignity and compassion Jesus shows us.", verse: "John 13:34–35" },
      { title: "Unwavering devotion", text: "We depend on the Holy Spirit, remain in Christ through prayer and His Word, and surrender our decisions to Him.", verse: "John 15:4–5" },
    ],
    gospelTitle: "IT BEGINS WITH JESUS.",
    gospel: "Jesus died for our sins and rose again. He calls us to turn from sin and trust Him as Savior and Lord. We are saved by grace through faith; a life of obedience and good works grows from that grace.",
    gospelRef: "1 Corinthians 15:3–4 · Mark 1:15 · Ephesians 2:8–10",
    gospelLink: "Talk with us about following Jesus",
    pathLabel: "THE JOURNEY",
    pathTitle: "COME. GROW. SERVE. GO.",
    pathIntro: "These four movements describe how we practice discipleship together. They continue throughout life. Wherever you are in faith, there is a next step you can take today.",
    here: "Here at ONE1SIX",
    practice: "Your next step",
    fruit: "What growth looks like",
    stages: [
      { id: "come", word: "Come", subtitle: "Meet Jesus. Connect with His family.", verse: "Matthew 28:19–20 · Acts 2:41–42", description: "Bring your questions and your story. Hear the Gospel, respond to Jesus, and begin walking with people who will pray with you and encourage your faith.", here: "Gather with us on Sunday for worship and biblical preaching. Use our connection card to introduce yourself. If you are beginning to follow Jesus or want to be baptized, ask for a pastoral conversation.", practice: "Plan a visit, introduce yourself, and tell us where you are in your walk with Jesus.", fruit: "Trust in Christ, openness to His Word, and a growing connection with His church.", action: "Plan your visit", href: "/plan-your-visit" },
      { id: "grow", word: "Grow", subtitle: "Learn the Word. Put it into practice.", verse: "John 8:31–32 · James 1:22", description: "Disciples learn to understand Scripture, pray honestly, turn from sin, and obey Jesus in ordinary life. We ask questions, encourage one another, and make room for biblical correction.", here: "Join Unashamed Disciples, our Wednesday Bible study, and learn to study with the SNICKERS method. Continue during the week through prayer, Scripture, and our Unashamed devotionals.", practice: "Bring your Bible to Wednesday study. Read a passage, write what it teaches, and choose one way to obey it this week.", fruit: "A growing understanding of Scripture, repentance, consistent prayer, and choices shaped by Jesus.", action: "Learn the SNICKERS method", href: "#bible-study" },
      { id: "serve", word: "Serve", subtitle: "Use what God has given you to love others.", verse: "John 13:14–15 · 1 Peter 4:10", description: "We practice the humility of Jesus by meeting real needs. Serving helps us grow in compassion, generosity, faithfulness, and care for people.", here: "Tuesday outreach and 100 Meals of Love take food, water, practical care, prayer, and the love of Jesus into Worcester. Talk with pastoral leadership about current ways to help in the church and community.", practice: "Ask how you can help with the next outreach or another current need. Agree on a responsibility and serve faithfully.", fruit: "Love expressed through action, a teachable spirit, and care for people without seeking recognition.", action: "Explore 100 Meals of Love", href: "/meals-of-love" },
      { id: "go", word: "Go", subtitle: "Help someone else follow Jesus.", verse: "Matthew 28:18–20 · 2 Timothy 2:2 · Acts 1:8", description: "As the Holy Spirit equips us, we share the Gospel and walk alongside others. Making disciples includes teaching what Jesus said, modeling obedience, and helping people grow in His church.", here: "We carry what we learn into our homes, friendships, workplaces, and outreach. We pray for people by name, share what Christ has done, open Scripture together, and invite them to take a step toward Him.", practice: "Choose one person to pray for. Listen to their story, share the Gospel, and invite them to read Scripture or come to church with you. Keep walking with them.", fruit: "Courage to speak about Jesus, patient follow-through, and helping others learn to follow Him.", action: "Ask for help with your next step", href: "/contact-us" },
    ],
    studyLabel: "UNASHAMED DISCIPLES",
    studyTitle: "OPEN YOUR BIBLE. LET THE WORD SHAPE YOU.",
    studyIntro: "Our Bible study teaches us to read Scripture carefully, understand it in context, and respond with obedience. SNICKERS gives us eight practical steps we can use together and at home.",
    studyTime: "WEDNESDAYS · 7–8 PM",
    methodLabel: "THE SNICKERS BIBLE STUDY METHOD",
    methodNote: "The letters follow the English words; we use and explain the method in English and Spanish.",
    method: [
      { letter: "S", title: "Study", text: "Read the passage carefully and more than once. What does it actually say?" },
      { letter: "N", title: "Notice", text: "Observe the people, places, repeated ideas, commands, and details." },
      { letter: "I", title: "Interpret", text: "Ask what the author meant and what the first audience would have understood." },
      { letter: "C", title: "Context", text: "Read what comes before and after. Consider the book and its setting as you interpret." },
      { letter: "K", title: "Key Words", text: "Identify the words that carry the main message. Look at how they are used." },
      { letter: "E", title: "Examine", text: "Compare related passages. Let Scripture help explain Scripture." },
      { letter: "R", title: "Reflect", text: "What does this reveal about God? What belief, attitude, or action needs to change?" },
      { letter: "S", title: "Share", text: "Tell someone what you learned and how you will put it into practice." },
    ],
    motto: "DON’T JUST SNACK ON SCRIPTURE—STUDY IT!",
    studyAction: "Ask about Wednesday Bible study",
    weekLabel: "OUR WEEKLY RHYTHM",
    weekTitle: "FAITH HAS A PLACE IN YOUR WEEK.",
    weekIntro: "Gathering, studying, praying, and serving give us regular opportunities to grow together. Follow Jesus in your everyday life, too: at home, at work, and in your relationships.",
    week: [
      { day: "Sunday", time: "4:30–6:00 PM", title: "Worship & the Word", text: "Gather for worship, biblical preaching, prayer, and connection with the church family.", action: "Plan a visit", href: "/plan-your-visit" },
      { day: "Tuesday", time: "7:00–8:00 PM", title: "Outreach Night", text: "Join the church in serving our Worcester neighbors. Contact us to coordinate where to meet and how to help.", action: "Connect about outreach", href: "/contact-us" },
      { day: "Wednesday", time: "7:00–8:00 PM", title: "Unashamed Disciples", text: "Bring your Bible and your questions. Study, understand, discuss, and apply Scripture with us.", action: "Ask about Bible study", href: "/contact-us" },
    ],
    address: "Sunday worship & Wednesday Bible study · 1048 Main St, Worcester, MA 01603",
    homePractice: "Between gatherings: read Scripture, pray, obey what you learn, care for someone, and share your faith. Ask the church to pray with you and help you keep growing.",
    nextLabel: "YOUR NEXT STEP",
    nextTitle: "LET’S WALK THIS OUT TOGETHER.",
    nextIntro: "You can begin with a conversation. Tell us where you are, what questions you have, and how we can help you follow Jesus.",
    startSteps: [
      { title: "Introduce yourself", text: "Use the connection card so we can welcome you and help you get connected.", action: "Open connection card", href: "/first-time" },
      { title: "Join us this week", text: "Come on Sunday or join Wednesday Bible study. You can ask questions as you learn.", action: "See the weekly rhythm", href: "#weekly-rhythm" },
      { title: "Talk about your next step", text: "Ask about faith in Christ, baptism, membership, or serving. Membership includes a pastoral conversation and a shared commitment to life in the church.", action: "Contact the pastoral team", href: "/contact-us" },
    ],
    resourcesLabel: "KEEP GROWING",
    resources: [
      { title: "Unashamed devotionals", text: "Scripture and application for your walk with Jesus.", href: "/unashamed-devotionals" },
      { title: "Unashamed Kids", text: "Learn about the children’s ministry and grow in faith as a family.", href: "/unashamed-kids" },
      { title: "Membership", text: "Explore our commitment to Christ and one another.", href: "/membership" },
    ],
    closingLabel: "OUR CALLING · MATTHEW 28:18–20",
    closing: "FOLLOW JESUS. HELP OTHERS FOLLOW HIM.",
    closingText: "Jesus sends His church to make disciples, baptize them, and teach them to obey everything He commanded. We do this together, depending on His presence and the power of the Holy Spirit.",
    closingAction: "I’m ready to take a step",
    prayerAction: "Ask for prayer",
  },
  es: {
    language: "Idioma de la página",
    eyebrow: "CÓMO HACEMOS DISCÍPULOS",
    title: ["SIGUE A JESÚS.", "VIVE SIN VERGÜENZA."],
    intro: "En ONE1SIX aprendemos a seguir a Jesús juntos: afirmados en las Escrituras, formados mediante la oración y la obediencia, y enviados a amar a las personas y ayudarlas a seguirlo.",
    primary: "Encuentra tu próximo paso",
    secondary: "Conoce el camino",
    caption: "Una iglesia para el uno. Una familia para el seis.",
    photoAlt: "El templo donde se reúne ONE1SIX Church en Worcester",
    nav: ["El camino", "Estudio bíblico", "Nuestra semana", "Da un paso"],
    dnaLabel: "NUESTRO ADN EN ACCIÓN",
    dnaTitle: "EL EVANGELIO FORMA NUESTRA VIDA DIARIA.",
    dnaIntro: "Nuestra misión es encender un movimiento global de discípulos que vivan con santa valentía, transformando la cultura mediante una fe auténtica, un amor sin temor y una devoción inquebrantable a Jesucristo.",
    dna: [
      { title: "Fe auténtica", text: "Traemos nuestras preguntas y luchas reales a Jesús. Abrimos la Biblia, recibimos su verdad y la ponemos en práctica.", verse: "2 Timoteo 3:16–17" },
      { title: "Amor sin temor", text: "Recibimos a las personas, llevamos las cargas unos de otros y servimos al prójimo con la dignidad y compasión que Jesús nos muestra.", verse: "Juan 13:34–35" },
      { title: "Devoción inquebrantable", text: "Dependemos del Espíritu Santo, permanecemos en Cristo mediante la oración y su Palabra, y rendimos nuestras decisiones a Él.", verse: "Juan 15:4–5" },
    ],
    gospelTitle: "TODO COMIENZA CON JESÚS.",
    gospel: "Jesús murió por nuestros pecados y resucitó. Nos llama a arrepentirnos y confiar en Él como Salvador y Señor. Somos salvos por gracia mediante la fe; de esa gracia nace una vida de obediencia y buenas obras.",
    gospelRef: "1 Corintios 15:3–4 · Marcos 1:15 · Efesios 2:8–10",
    gospelLink: "Hablemos de seguir a Jesús",
    pathLabel: "EL CAMINO",
    pathTitle: "VEN. CRECE. SIRVE. VE.",
    pathIntro: "Estos cuatro movimientos describen cómo vivimos el discipulado juntos. Continúan durante toda la vida. Dondequiera que estés en la fe, hay un próximo paso que puedes dar hoy.",
    here: "Aquí en ONE1SIX",
    practice: "Tu próximo paso",
    fruit: "Cómo se ve el crecimiento",
    stages: [
      { id: "come", word: "Ven", subtitle: "Conoce a Jesús. Conéctate con su familia.", verse: "Mateo 28:19–20 · Hechos 2:41–42", description: "Trae tus preguntas y tu historia. Escucha el evangelio, responde a Jesús y comienza a caminar con personas que orarán contigo y te animarán en la fe.", here: "Reúnete con nosotros el domingo para adorar y escuchar la predicación bíblica. Preséntate mediante nuestra tarjeta de conexión. Si estás comenzando a seguir a Jesús o deseas bautizarte, pide una conversación pastoral.", practice: "Planifica tu visita, preséntate y cuéntanos cómo va tu caminar con Jesús.", fruit: "Confianza en Cristo, disposición para recibir su Palabra y una conexión creciente con su iglesia.", action: "Planifica tu visita", href: "/plan-your-visit" },
      { id: "grow", word: "Crece", subtitle: "Aprende la Palabra. Ponla en práctica.", verse: "Juan 8:31–32 · Santiago 1:22", description: "Los discípulos aprenden a entender las Escrituras, orar con sinceridad, apartarse del pecado y obedecer a Jesús en la vida diaria. Hacemos preguntas, nos animamos y recibimos corrección bíblica.", here: "Participa en Unashamed Disciples, nuestro estudio bíblico de los miércoles, y aprende a estudiar con el método SNICKERS. Continúa durante la semana mediante la oración, las Escrituras y nuestros devocionales Unashamed.", practice: "Trae tu Biblia el miércoles. Lee un pasaje, escribe lo que enseña y elige una manera de obedecerlo esta semana.", fruit: "Mayor comprensión de las Escrituras, arrepentimiento, oración constante y decisiones guiadas por Jesús.", action: "Aprende el método SNICKERS", href: "#bible-study" },
      { id: "serve", word: "Sirve", subtitle: "Usa lo que Dios te ha dado para amar a otros.", verse: "Juan 13:14–15 · 1 Pedro 4:10", description: "Practicamos la humildad de Jesús al atender necesidades reales. Al servir, crecemos en compasión, generosidad, fidelidad y cuidado por las personas.", here: "La labor comunitaria de los martes y 100 Meals of Love llevan comida, agua, ayuda práctica, oración y el amor de Jesús a Worcester. Habla con el liderazgo pastoral sobre las oportunidades actuales para ayudar en la iglesia y la comunidad.", practice: "Pregunta cómo ayudar en la próxima salida comunitaria o en otra necesidad actual. Acuerda una responsabilidad y sirve con fidelidad.", fruit: "Amor que se convierte en acciones, un espíritu enseñable y cuidado por las personas sin buscar reconocimiento.", action: "Conoce 100 Meals of Love", href: "/meals-of-love" },
      { id: "go", word: "Ve", subtitle: "Ayuda a otra persona a seguir a Jesús.", verse: "Mateo 28:18–20 · 2 Timoteo 2:2 · Hechos 1:8", description: "El Espíritu Santo nos capacita para compartir el evangelio y acompañar a otros. Hacer discípulos incluye enseñar lo que Jesús dijo, modelar la obediencia y ayudar a las personas a crecer en su iglesia.", here: "Llevamos lo aprendido al hogar, las amistades, el trabajo y la comunidad. Oramos por las personas por nombre, compartimos lo que Cristo ha hecho, abrimos las Escrituras juntos y las invitamos a dar un paso hacia Él.", practice: "Escoge a una persona por quien orar. Escucha su historia, comparte el evangelio e invítala a leer la Biblia o a venir a la iglesia contigo. Sigue acompañándola.", fruit: "Valentía para hablar de Jesús, acompañamiento paciente y ayuda a otros para que aprendan a seguirlo.", action: "Pide ayuda para tu próximo paso", href: "/contact-us" },
    ],
    studyLabel: "UNASHAMED DISCIPLES",
    studyTitle: "ABRE TU BIBLIA. DEJA QUE LA PALABRA TE FORME.",
    studyIntro: "Nuestro estudio bíblico nos enseña a leer las Escrituras con cuidado, entenderlas en su contexto y responder con obediencia. SNICKERS nos ofrece ocho pasos prácticos para estudiar juntos y en casa.",
    studyTime: "MIÉRCOLES · 7–8 PM",
    methodLabel: "EL MÉTODO DE ESTUDIO BÍBLICO SNICKERS",
    methodNote: "Las letras corresponden a las palabras en inglés; usamos y explicamos el método en inglés y español.",
    method: [
      { letter: "S", title: "Study · Estudia", text: "Lee el pasaje con cuidado más de una vez. ¿Qué dice realmente?" },
      { letter: "N", title: "Notice · Observa", text: "Observa las personas, lugares, ideas repetidas, mandatos y detalles." },
      { letter: "I", title: "Interpret · Interpreta", text: "Pregunta qué quiso comunicar el autor y qué habría entendido la audiencia original." },
      { letter: "C", title: "Context · Contexto", text: "Lee lo que viene antes y después. Considera el libro y su trasfondo al interpretar." },
      { letter: "K", title: "Key Words · Palabras clave", text: "Identifica las palabras que comunican el mensaje principal y cómo se usan." },
      { letter: "E", title: "Examine · Examina", text: "Compara pasajes relacionados. Deja que las Escrituras expliquen las Escrituras." },
      { letter: "R", title: "Reflect · Reflexiona", text: "¿Qué revela esto acerca de Dios? ¿Qué creencia, actitud o acción necesita cambiar?" },
      { letter: "S", title: "Share · Comparte", text: "Cuéntale a alguien lo que aprendiste y cómo lo pondrás en práctica." },
    ],
    motto: "¡NO SOLO MERIENDES LA ESCRITURA—ESTÚDIALA!",
    studyAction: "Pregunta por el estudio del miércoles",
    weekLabel: "NUESTRA SEMANA",
    weekTitle: "LA FE TIENE LUGAR EN TU SEMANA.",
    weekIntro: "Reunirnos, estudiar, orar y servir nos ofrece oportunidades constantes para crecer juntos. Sigue a Jesús también en tu vida diaria: en casa, en el trabajo y en tus relaciones.",
    week: [
      { day: "Domingo", time: "4:30–6:00 PM", title: "Adoración y Palabra", text: "Reúnete para adorar, recibir predicación bíblica, orar y conectarte con la familia de la iglesia.", action: "Planifica tu visita", href: "/plan-your-visit" },
      { day: "Martes", time: "7:00–8:00 PM", title: "Servicio a la comunidad", text: "Acompaña a la iglesia a servir a nuestros vecinos de Worcester. Contáctanos para coordinar el lugar de encuentro y cómo ayudar.", action: "Pregunta cómo participar", href: "/contact-us" },
      { day: "Miércoles", time: "7:00–8:00 PM", title: "Unashamed Disciples", text: "Trae tu Biblia y tus preguntas. Estudia, comprende, conversa y aplica las Escrituras con nosotros.", action: "Pregunta por el estudio", href: "/contact-us" },
    ],
    address: "Culto dominical y estudio bíblico del miércoles · 1048 Main St, Worcester, MA 01603",
    homePractice: "Entre reuniones: lee la Biblia, ora, obedece lo aprendido, cuida de alguien y comparte tu fe. Pide a la iglesia que ore contigo y te ayude a seguir creciendo.",
    nextLabel: "TU PRÓXIMO PASO",
    nextTitle: "CAMINEMOS JUNTOS EN ESTA FE.",
    nextIntro: "Puedes comenzar con una conversación. Cuéntanos dónde estás, qué preguntas tienes y cómo podemos ayudarte a seguir a Jesús.",
    startSteps: [
      { title: "Preséntate", text: "Completa la tarjeta de conexión para que podamos recibirte y ayudarte a conectar con la iglesia.", action: "Abre la tarjeta de conexión", href: "/first-time" },
      { title: "Participa esta semana", text: "Ven el domingo o acompáñanos al estudio bíblico del miércoles. Puedes hacer preguntas mientras aprendes.", action: "Consulta los horarios", href: "#weekly-rhythm" },
      { title: "Habla de tu próximo paso", text: "Pregunta por la fe en Cristo, el bautismo, la membresía o el servicio. La membresía incluye una conversación pastoral y un compromiso mutuo con la vida de la iglesia.", action: "Contacta al equipo pastoral", href: "/contact-us" },
    ],
    resourcesLabel: "SIGUE CRECIENDO",
    resources: [
      { title: "Devocionales Unashamed", text: "Escritura y aplicación para tu caminar con Jesús.", href: "/unashamed-devotionals" },
      { title: "Unashamed Kids", text: "Conoce el ministerio infantil y crece en la fe en familia.", href: "/unashamed-kids" },
      { title: "Membresía", text: "Conoce nuestro compromiso con Cristo y los unos con los otros.", href: "/membership" },
    ],
    closingLabel: "NUESTRO LLAMADO · MATEO 28:18–20",
    closing: "SIGUE A JESÚS. AYUDA A OTROS A SEGUIRLO.",
    closingText: "Jesús envía a su iglesia a hacer discípulos, bautizarlos y enseñarles a obedecer todo lo que Él mandó. Lo hacemos juntos, dependiendo de su presencia y del poder del Espíritu Santo.",
    closingAction: "Quiero dar mi próximo paso",
    prayerAction: "Pide oración",
  },
};

const sectionIds = ["journey", "bible-study", "weekly-rhythm", "next-step"];
const dnaIcons = [BookOpen, Users, Heart];

export function DiscipleshipContent() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const t = copy[language];

  return (
    <main className={styles.page} lang={language}>
      <section className={styles.hero}>
        <div className={styles.heroTop}>
          <p className={styles.eyebrow}>ONE1SIX CHURCH / UNASHAMED DISCIPLES</p>
          <div className={styles.language} role="group" aria-label={t.language}>
            <button type="button" lang="en" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>English</button>
            <button type="button" lang="es" aria-pressed={language === "es"} onClick={() => setLanguage("es")}>Español</button>
          </div>
        </div>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{t.eyebrow}</p>
            <h1>{t.title[0]}<span>{t.title[1]}</span></h1>
            <p className={styles.lead}>{t.intro}</p>
            <div className={styles.actions}>
              <a className={styles.primary} href="#next-step">{t.primary}<ArrowRight size={19} aria-hidden="true" /></a>
              <a className={styles.secondary} href="#journey">{t.secondary}</a>
            </div>
          </div>
          <figure className={styles.heroPhoto}>
            <div className={styles.photoFrame}>
              <Image src="/homepage-sanctuary-bright-v6.jpg" alt={t.photoAlt} fill priority sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
            <figcaption>{t.caption}</figcaption>
          </figure>
        </div>
        <nav className={styles.sectionNav} aria-label={language === "en" ? "On this page" : "En esta página"}>
          {t.nav.map((label, index) => <a href={`#${sectionIds[index]}`} key={sectionIds[index]}><span>0{index + 1}</span>{label}<ArrowRight size={16} aria-hidden="true" /></a>)}
        </nav>
      </section>

      <section className={styles.section} aria-labelledby="dna-heading">
        <div className={styles.sectionHeading}>
          <div><p className={styles.eyebrow}>{t.dnaLabel}</p><h2 id="dna-heading">{t.dnaTitle}</h2></div>
          <p>{t.dnaIntro}</p>
        </div>
        <div className={styles.dnaGrid}>
          {t.dna.map((item, index) => {
            const Icon = dnaIcons[index];
            return <article key={index}><Icon size={26} aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p><span className={styles.reference}>{item.verse}</span></article>;
          })}
        </div>
      </section>

      <section className={styles.gospel} aria-labelledby="gospel-heading">
        <div><p className={styles.eyebrow}>01 / {language === "en" ? "OUR FOUNDATION" : "NUESTRO FUNDAMENTO"}</p><h2 id="gospel-heading">{t.gospelTitle}</h2></div>
        <div><p>{t.gospel}</p><p className={styles.reference}>{t.gospelRef}</p><Link className={styles.textLink} href="/contact-us">{t.gospelLink}<ArrowRight size={18} aria-hidden="true" /></Link></div>
      </section>

      <section className={styles.section} id="journey" aria-labelledby="journey-heading">
        <div className={styles.centerHeading}><p className={styles.eyebrow}>{t.pathLabel}</p><h2 id="journey-heading">{t.pathTitle}</h2><p>{t.pathIntro}</p></div>
        <div className={styles.stages}>
          {t.stages.map((stage, index) => <details className={styles.stage} key={`${language}-${stage.id}`} open={index === 0}>
            <summary><span className={styles.stageNumber}>0{index + 1}</span><div><h3>{stage.word}</h3><p>{stage.subtitle}</p></div><ChevronDown className={styles.chevron} size={26} aria-hidden="true" /></summary>
            <div className={styles.stageBody}>
              <div><p className={styles.stageDescription}>{stage.description}</p><p className={styles.reference}>{stage.verse}</p><h4>{t.here}</h4><p>{stage.here}</p></div>
              <div className={styles.practice}><h4>{t.practice}</h4><p>{stage.practice}</p><h4>{t.fruit}</h4><p>{stage.fruit}</p><Link className={styles.textLink} href={stage.href}>{stage.action}<ArrowRight size={18} aria-hidden="true" /></Link></div>
            </div>
          </details>)}
        </div>
      </section>

      <section className={styles.study} id="bible-study" aria-labelledby="study-heading">
        <div >
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>{t.studyLabel}</p><h2 id="study-heading">{t.studyTitle}</h2></div>
            <div><span className={styles.timeBadge}>{t.studyTime}</span><p>{t.studyIntro}</p></div>
          </div>
          <h3 className={styles.methodTitle}>{t.methodLabel}</h3>
          <p className={styles.methodNote}>{t.methodNote}</p>
          <ol className={styles.methodGrid}>{t.method.map((step, index) => <li key={index}><span className={styles.letter} aria-hidden="true">{step.letter}</span><div><h4>{step.title}</h4><p>{step.text}</p></div></li>)}</ol>
          <div className={styles.studyBottom}><p>{t.motto}</p><Link className={styles.primary} href="/contact-us">{t.studyAction}<ArrowRight size={18} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className={styles.section} id="weekly-rhythm" aria-labelledby="week-heading">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>{t.weekLabel}</p><h2 id="week-heading">{t.weekTitle}</h2></div><p>{t.weekIntro}</p></div>
        <div className={styles.weekGrid}>{t.week.map(day => <article key={day.day}><div className={styles.dayHeader}><p>{day.day}</p><span>{day.time}</span></div><h3>{day.title}</h3><p>{day.text}</p><Link className={styles.textLink} href={day.href}>{day.action}<ArrowRight size={18} aria-hidden="true" /></Link></article>)}</div>
        <p className={styles.address}>{t.address}</p>
        <p className={styles.homePractice}>{t.homePractice}</p>
      </section>

      <section className={styles.next} id="next-step" aria-labelledby="next-heading">
        <div >
          <div className={styles.centerHeading}><p className={styles.eyebrow}>{t.nextLabel}</p><h2 id="next-heading">{t.nextTitle}</h2><p>{t.nextIntro}</p></div>
          <ol className={styles.startSteps}>{t.startSteps.map((step, index) => <li key={index}><span className={styles.stepCount}>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p><Link className={styles.textLink} href={step.href}>{step.action}<ArrowRight size={18} aria-hidden="true" /></Link></div></li>)}</ol>
          <p className={styles.resourcesLabel}>{t.resourcesLabel}</p>
          <div className={styles.resources}>{t.resources.map(resource => <Link key={resource.href} href={resource.href}><div><h3>{resource.title}</h3><p>{resource.text}</p></div><ArrowRight size={22} aria-hidden="true" /></Link>)}</div>
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="closing-heading"><p className={styles.eyebrow}>{t.closingLabel}</p><h2 id="closing-heading">{t.closing}</h2><p>{t.closingText}</p><div className={styles.actions}><Link className={styles.primary} href="/first-time">{t.closingAction}<ArrowRight size={18} aria-hidden="true" /></Link><Link className={styles.secondary} href="/#prayer">{t.prayerAction}</Link></div><span className={styles.hashtag}>#LIVEUNASHAMED</span></section>
    </main>
  );
}
