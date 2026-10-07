import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Building2, HandHeart, HeartHandshake, MapPin, Phone, Users } from "lucide-react";
import { SiteHeader } from "../_components/SiteHeader";
import { SiteFooter } from "../_components/SiteFooter";
import styles from "./community.module.css";

export const metadata: Metadata = {
  title: "South Worcester Neighborhood Center Outreach | ONE1SIX Church",
  description: "ONE1SIX Church serves as volunteers at South Worcester Neighborhood Center. Learn about this part of our Worcester outreach and connect with our team.",
};

const text = {
    back: "BACK TO OUTREACH", eyebrow: "ONE1SIX OUTREACH · WORCESTER, MA",
    title: "LOVE", accent: "SHOWS UP.",
    lead: "As part of our outreach, ONE1SIX Church is serving as volunteers at South Worcester Neighborhood Center. We are grateful for the opportunity to serve our neighbors and put our faith into action.",
    join: "VOLUNTEER WITH ONE1SIX", learn: "ABOUT THE CENTER", location: "COMMUNITY CENTER",
    directions: "GET DIRECTIONS", aboutLabel: "OUR NEIGHBORS. OUR COMMUNITY.",
    aboutTitle: "South Worcester Neighborhood Center",
    about: "South Worcester Neighborhood Center supports local individuals and families with food and connections to community resources. Its work helps neighbors access practical support and opportunities.",
    role: "ONE1SIX participates through volunteer service as part of our church outreach. We want to serve with humility, care, and respect for every person.",
    centerLink: "VISIT THE CENTER'S WEBSITE", valuesLabel: "FAITH IN ACTION",
    valuesTitle: "Serving people. Loving our city.",
    cards: [
      { title: "Show up", body: "We believe love becomes visible when we make time to serve our neighbors." },
      { title: "Honor each person", body: "We want every interaction to reflect compassion, dignity, and respect." },
      { title: "Serve together", body: "Volunteering gives our church family another way to contribute to the life of our community." },
    ],
    callTitle: "Your next step could be serving.",
    callCopy: "Interested in joining ONE1SIX as a volunteer at the center? Contact our church outreach team to ask about opportunities, tasks, and scheduling.",
    email: "CONTACT OUR OUTREACH TEAM", other: "100 MEALS OF LOVE",
    info: "Need help from the center?",
    infoCopy: "Call South Worcester Neighborhood Center directly at (508) 757-8344 for current services, hours, and requirements.",
    call: "CALL THE CENTER",
    scripture: "Our inspiration: love expressed through action and truth.",
} as const;

export default function SouthWorcesterPage() {
  const icons = [HandHeart, HeartHandshake, Users];
  const subject = "ONE1SIX Volunteering - South Worcester Neighborhood Center";

  return (
    <>
      <SiteHeader />
      <main className={styles.page} lang="en">
        <section className={styles.hero}>
          <div className={styles.shell}>
            <div className={styles.top}>
              <Link href="/meals-of-love" className={styles.back}><ArrowLeft size={16} aria-hidden="true" />{text.back}</Link>

            </div>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}>{text.eyebrow}</p>
                <h1 className={styles.title}>{text.title}<span>{text.accent}</span></h1>
                <p className={styles.lead}>{text.lead}</p>
                <div className={styles.actions}>
                  <a href="#volunteer" className={styles.button}>{text.join}<ArrowUpRight size={18} aria-hidden="true" /></a>
                  <a href="#about-center" className={styles.outline}>{text.learn}</a>
                </div>
              </div>
              <aside className={styles.centerCard} aria-label="South Worcester Neighborhood Center">
                <Building2 size={46} strokeWidth={1.4} aria-hidden="true" />
                <p className={styles.eyebrow}>{text.location}</p>
                <h2>South Worcester<br />Neighborhood Center</h2>
                <p><MapPin size={19} aria-hidden="true" /><span>47 Camp Street<br />Worcester, MA 01603</span></p>
                <p><Phone size={18} aria-hidden="true" /><a href="tel:+15087578344">(508) 757-8344</a></p>
                <a href="https://www.google.com/maps/search/?api=1&query=South%20Worcester%20Neighborhood%20Center%2047%20Camp%20Street%20Worcester%20MA" target="_blank" rel="noopener noreferrer" className={styles.textLink}>{text.directions}<ArrowUpRight size={17} aria-hidden="true" /></a>
              </aside>
            </div>
          </div>
        </section>
        <section className={styles.gallery} aria-labelledby="outreach-photos">
          <div className={styles.shell}>
            <p className={styles.eyebrow}>AT SOUTH WORCESTER NEIGHBORHOOD CENTER</p>
            <h2 className={styles.heading} id="outreach-photos">Hands ready to serve.</h2>
            <p className={styles.galleryIntro}>A look inside the center: volunteers working together and food ready to support our neighbors.</p>
            <div className={styles.photoGrid}>
              <figure>
                <Image src="/south-worcester-volunteers-moving-produce.jpg" alt="Volunteers moving boxes of produce at South Worcester Neighborhood Center" width={1536} height={1152} sizes="(max-width: 680px) 100vw, 64vw" />
                <figcaption>Serving together.</figcaption>
              </figure>
              <figure>
                <Image src="/south-worcester-food-pantry-supplies.jpg" alt="Boxes of food and prepared grocery bags at South Worcester Neighborhood Center" width={1152} height={1536} sizes="(max-width: 680px) 100vw, 36vw" />
                <figcaption>Practical care for our community.</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className={styles.about} id="about-center">
          <div className={`${styles.shell} ${styles.aboutGrid}`}>
            <div><p className={styles.eyebrow}>{text.aboutLabel}</p><h2 className={styles.heading}>{text.aboutTitle}</h2></div>
            <div>
              <p>{text.about}</p><p>{text.role}</p>
              <a className={styles.textLink} href="https://swnic.weebly.com/" target="_blank" rel="noopener noreferrer">{text.centerLink}<ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
        <section className={styles.values}>
          <div className={styles.shell}>
            <p className={styles.eyebrow}>{text.valuesLabel}</p><h2 className={styles.heading}>{text.valuesTitle}</h2>
            <div className={styles.cards}>{text.cards.map((card, i) => {
              const Icon = icons[i];
              return <article key={card.title}><Icon size={30} aria-hidden="true" /><h3>{card.title}</h3><p>{card.body}</p></article>;
            })}</div>
          </div>
        </section>
        <section className={styles.callout} id="volunteer">
          <div className={styles.shell}>
            <div>
              <h2 className={styles.heading}>{text.callTitle}</h2><p>{text.callCopy}</p>
              <div className={styles.actions}>
                <a className={styles.button} href={`mailto:info@one1sixchurch.org?subject=${encodeURIComponent(subject)}`}>{text.email}<ArrowUpRight size={18} aria-hidden="true" /></a>
                <Link className={styles.outline} href="/meals-of-love">{text.other}</Link>
              </div>
            </div>
            <div><h3>{text.info}</h3><p>{text.infoCopy}</p><a className={styles.textLink} href="tel:+15087578344">{text.call}<Phone size={16} aria-hidden="true" /></a></div>
          </div>
        </section>
        <div className={styles.scripture}><div className={styles.shell}><p>{text.scripture}</p><strong>1 JOHN 3:18</strong></div></div>
      </main>
      <SiteFooter />
    </>
  );
}
