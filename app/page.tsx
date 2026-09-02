import { ArrowRight, BookOpen, HandHeart, MapPin, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "./_components/ContactForm";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import styles from "./home.module.css";

const nextSteps = [
  {
    title: "Plan Your Visit",
    copy: "Know what to expect before you arrive this Sunday.",
    href: "/plan-your-visit",
    icon: MapPin,
  },
  {
    title: "Watch + Listen",
    copy: "Sermons, devotionals, and Gospel-centered teaching.",
    href: "https://youtube.com/@one1sixchurch",
    icon: PlayCircle,
    external: true,
  },
  {
    title: "Grow In The Word",
    copy: "Continue your walk through our UNASHAMED devotionals.",
    href: "/unashamed-devotionals",
    icon: BookOpen,
  },
  {
    title: "Serve The City",
    copy: "See how we carry the love of Jesus beyond the walls.",
    href: "/meals-of-love",
    icon: HandHeart,
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className={styles.page}>
        <section className={styles.hero}>
          <Image
            className={styles.heroImage}
            src="/start-here-sanctuary.jpg"
            alt="ONE1SIX Church sanctuary in Worcester"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroShade} />
          <div className={styles.heroInner}>
            <p className={styles.kicker}>ONE1SIX CHURCH · WORCESTER, MASSACHUSETTS</p>
            <h1>
              A PLACE TO
              <span>BELONG.</span>
            </h1>
            <p className={styles.heroLead}>
              Imperfect people pursuing a perfect Savior. Come encounter Jesus, grow in His Word,
              and become part of a family determined to live unashamed of the Gospel.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/plan-your-visit">
                Plan Your Visit <ArrowRight size={19} />
              </Link>
              <Link className={styles.secondaryButton} href="/start-here">
                Explore ONE1SIX
              </Link>
            </div>
          </div>
          <div className={styles.gatherBar}>
            <p><span>Gather With Us</span><strong>Sundays · 1:00 PM</strong></p>
            <p><MapPin size={18} /> Worcester, Massachusetts</p>
            <Link href="/plan-your-visit">Get Visit Details <ArrowRight size={17} /></Link>
          </div>
        </section>

        <section className={styles.welcome}>
          <div className={styles.welcomePhoto}>
            <Image
              src="/fearless-love.png"
              alt="People finding community at ONE1SIX Church"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className={styles.welcomeCopy}>
            <p className={styles.label}>WELCOME TO ONE1SIX</p>
            <h2>YOU DO NOT HAVE TO WALK <span>ALONE.</span></h2>
            <p>
              Whether you are searching for God, returning to church, carrying pain, or ready to
              grow deeper, there is room for you here. We preach Scripture without compromise,
              love people without conditions, and follow Jesus together.
            </p>
            <p className={styles.signature}>One Church For The One. A Family For The Six.</p>
            <Link className={styles.textLink} href="/who-is-116">
              Meet Our Church <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <section className={styles.next}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.label}>START HERE</p>
              <h2>YOUR NEXT STEP<br /><span>MADE CLEAR.</span></h2>
            </div>
            <p>
              Visiting, growing, watching, or serving—choose the step that meets you where you are.
            </p>
          </div>
          <div className={styles.stepGrid}>
            {nextSteps.map(({ title, copy, href, icon: Icon, external }) => {
              const body = (
                <>
                  <Icon size={27} strokeWidth={1.8} />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <span>Go Now <ArrowRight size={17} /></span>
                </>
              );
              return external ? (
                <a className={styles.stepCard} href={href} target="_blank" rel="noreferrer" key={title}>{body}</a>
              ) : (
                <Link className={styles.stepCard} href={href} key={title}>{body}</Link>
              );
            })}
          </div>
        </section>

        <section className={styles.life}>
          <div className={styles.lifeShade} />
          <Image
            className={styles.lifeImage}
            src="/authentic-faith.png"
            alt="Faith and worship at ONE1SIX Church"
            fill
            sizes="100vw"
          />
          <div className={styles.lifeInner}>
            <p className={styles.label}>THIS IS CHURCH TOO</p>
            <h2>FAITH THAT LEAVES<br /><span>THE BUILDING.</span></h2>
            <p>
              We believe the Gospel must be seen as well as heard. ONE1SIX serves Worcester through
              meals, prayer, outreach, generosity, and the faithful presence of people who love Jesus.
            </p>
            <Link className={styles.primaryButton} href="/meals-of-love">
              See Our Outreach <ArrowRight size={19} />
            </Link>
          </div>
        </section>

        <section className={styles.foundation}>
          <div>
            <p className={styles.label}>WHAT WE STAND ON</p>
            <h2>CHRIST IS THE <span>CENTER.</span></h2>
          </div>
          <div>
            <p>
              Our foundation is not culture, personality, or preference. It is Jesus Christ and
              the authority of God’s Word.
            </p>
            <blockquote>
              “For I am not ashamed of the Gospel…” <strong>Romans 1:16</strong>
            </blockquote>
            <Link className={styles.textLink} href="/the-foundation">
              Explore Our Beliefs <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <section className={styles.prayer} id="prayer">
          <Image
            className={styles.prayerImage}
            src="/contact-desk.png"
            alt=""
            fill
            sizes="100vw"
          />
          <div className={styles.prayerShade} />
          <div className={styles.prayerInner}>
            <div>
              <p className={styles.label}>YOU ARE NOT ALONE</p>
              <h2>HOW CAN WE<br /><span>PRAY FOR YOU?</span></h2>
              <p>Share what you are carrying. Our church family would be honored to stand with you.</p>
            </div>
            <ContactForm source="Homepage Prayer and Connection" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
