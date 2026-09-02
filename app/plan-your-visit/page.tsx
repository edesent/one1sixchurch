import { ArrowRight, Clock3, Mail, MapPin, Shirt, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "../_components/ContactForm";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "./plan-your-visit.module.css";

const expectations = [
  {
    icon: Clock3,
    title: "When We Gather",
    copy: "Our Sunday gathering begins at 1:00 PM. Arriving a few minutes early gives us time to welcome you personally.",
  },
  {
    icon: MapPin,
    title: "Where We Gather",
    copy: "We gather in Worcester, Massachusetts. As ONE1SIX transitions into its church home, contact us for this Sunday’s confirmed address and entrance details.",
  },
  {
    icon: Shirt,
    title: "What To Wear",
    copy: "Come as you are. You will find people dressed in different ways; what matters most is that you are here.",
  },
  {
    icon: Users,
    title: "Bringing Your Family",
    copy: "Bringing children or arriving with family? Send us a message beforehand and we will personally help you understand the current setup.",
  },
];

export const metadata = {
  title: "Plan Your Visit | ONE1SIX Church",
  description:
    "Plan your first Sunday visit to ONE1SIX Church in Worcester, Massachusetts. Learn when we gather, what to expect, and how to connect before you arrive.",
};

export default function PlanYourVisitPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <Image className={styles.heroImage} src="/start-here-sanctuary.jpg" alt="ONE1SIX Church sanctuary" fill priority sizes="100vw" />
          <div className={styles.heroShade} />
          <div className={styles.heroInner}>
            <p className={styles.label}>YOUR FIRST SUNDAY</p>
            <h1>PLAN YOUR <span>VISIT.</span></h1>
            <p>
              New places can feel unfamiliar. We want your first visit to feel simple, personal,
              and centered on Jesus from the moment you arrive.
            </p>
            <a className={styles.primaryButton} href="#visit-form">
              Tell Us You’re Coming <ArrowRight size={19} />
            </a>
          </div>
        </section>

        <section className={styles.quickFacts}>
          <div><span>Sunday Gathering</span><strong>1:00 PM</strong></div>
          <div><span>City</span><strong>Worcester, MA</strong></div>
          <div><span>Questions?</span><a href="tel:+17743861924">774.386.1924</a></div>
        </section>

        <section className={styles.expect}>
          <div className={styles.heading}>
            <p className={styles.label}>WHAT TO EXPECT</p>
            <h2>WE WANT YOU TO FEEL <span>AT HOME.</span></h2>
            <p>
              Expect biblical preaching, worship, prayer, genuine welcome, and people pursuing
              Jesus together. You do not need to pretend or have everything figured out.
            </p>
          </div>
          <div className={styles.grid}>
            {expectations.map(({ icon: Icon, title, copy }, index) => (
              <article key={title}>
                <div><span>0{index + 1}</span><Icon size={27} strokeWidth={1.8} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.visitForm} id="visit-form">
          <Image className={styles.formImage} src="/fearless-love.png" alt="" fill sizes="100vw" />
          <div className={styles.formShade} />
          <div className={styles.formInner}>
            <div>
              <p className={styles.label}>LET US EXPECT YOU</p>
              <h2>YOU WILL NOT WALK IN <span>ALONE.</span></h2>
              <p>
                Send us your name and the best way to reach you. We will reply with the confirmed
                location and anything you need for your first Sunday.
              </p>
              <p className={styles.direct}>
                Prefer to email? <a href="mailto:info@one1sixchurch.org?subject=Planning%20My%20Visit">info@one1sixchurch.org</a>
              </p>
            </div>
            <ContactForm source="Plan Your Visit Page" />
          </div>
        </section>

        <section className={styles.final}>
          <p>Already familiar with ONE1SIX?</p>
          <h2>FIND YOUR NEXT STEP.</h2>
          <Link href="/start-here">Open The ONE1SIX Hub <ArrowRight size={18} /></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
