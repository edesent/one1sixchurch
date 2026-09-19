import {
  ArrowRight,
  Baby,
  BookOpen,
  Clock3,
  HeartHandshake,
  MapPin,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "./unashamed-kids.module.css";

const experiences = [
  {
    icon: BookOpen,
    title: "Bible Truth",
    copy: "Children discover who Jesus is through clear, age-conscious teaching rooted in Scripture.",
    color: "red",
  },
  {
    icon: Palette,
    title: "Creative Fun",
    copy: "Hands-on activities help little hearts engage, create, laugh, and remember what they learn.",
    color: "yellow",
  },
  {
    icon: Users,
    title: "Real Friendship",
    copy: "A welcoming place where children can belong, build friendships, and grow together.",
    color: "blue",
  },
];

export const metadata = {
  title: "UNASHAMED KIDS | ONE1SIX Church",
  description:
    "UNASHAMED KIDS is the children’s ministry of ONE1SIX Church in Worcester, MA. Children enjoy Bible-centered activities during Sunday worship at 4:30 PM.",
};

export default function UnashamedKidsPage() {
  return (
    <>
      <SiteHeader />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.splash} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <Sparkles size={18} aria-hidden="true" /> ONE✝SIX CHILDREN&apos;S MINISTRY
              </p>
              <h1>
                BIG FAITH
                <span>STARTS SMALL.</span>
              </h1>
              <p className={styles.lead}>
                Your children have a place here. While you worship and receive the Word,
                your little ones can learn about Jesus, enjoy meaningful activities, and
                build friendships in a caring environment created just for them.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryButton} href="/plan-your-visit">
                  Plan Your Family&apos;s Visit <ArrowRight size={19} />
                </Link>
                <a className={styles.secondaryButton} href="#parent-info">
                  What Parents Should Know
                </a>
              </div>
              <p className={styles.spanishNote}>También hablamos español.</p>
            </div>

            <div className={styles.kidsBadge} aria-label="UNASHAMED KIDS">
              <div className={styles.badgeRing}>
                <span className={styles.unashamed}>UNASHAMED</span>
                <span className={styles.kids}>
                  K<span className={styles.star}><Star fill="currentColor" aria-hidden="true" /><b>✝</b></span>DS
                </span>
                <span className={styles.ministry}>KIDS MINISTRY</span>
              </div>
            </div>
          </div>

          <div className={styles.serviceBar}>
            <div><Clock3 size={22} /><span><small>Every Sunday</small>4:30 PM–6:00 PM</span></div>
            <div><MapPin size={22} /><span><small>ONE✝SIX Church</small>1048 Main St, Worcester, MA</span></div>
            <Link href="/plan-your-visit">Let Us Know You&apos;re Coming <ArrowRight size={18} /></Link>
          </div>
        </section>

        <section className={styles.welcome}>
          <div>
            <p className={styles.label}>MADE FOR THEIR MOMENT</p>
            <h2>CHURCH IS FOR <span>THEM TOO.</span></h2>
          </div>
          <div>
            <p>
              Sundays are an opportunity for your whole family to encounter Jesus. UNASHAMED
              KIDS gives children room to learn at their level while parents participate in the
              worship gathering with confidence and peace of mind.
            </p>
            <p className={styles.familyLine}>Faith • Fun • Friendship</p>
          </div>
        </section>

        <section className={styles.experience}>
          <div className={styles.sectionHeading}>
            <p className={styles.label}>WHAT THEY WILL EXPERIENCE</p>
            <h2>JOY WITH A <span>PURPOSE.</span></h2>
          </div>
          <div className={styles.cards}>
            {experiences.map(({ icon: Icon, title, copy, color }) => (
              <article className={styles[color]} key={title}>
                <div className={styles.cardIcon}><Icon size={32} strokeWidth={2.2} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.parents} id="parent-info">
          <div className={styles.parentIntro}>
            <p className={styles.label}>FOR PARENTS &amp; GUARDIANS</p>
            <h2>WORSHIP WITH <span>PEACE OF MIND.</span></h2>
            <p>
              We know trusting someone with your child matters. Our team will welcome your family,
              answer your questions, and personally guide you to the children&apos;s area when you arrive.
            </p>
          </div>

          <div className={styles.parentGrid}>
            <article>
              <Baby size={28} />
              <h3>Arriving With Children</h3>
              <p>Come a few minutes early so we can meet your family and explain the children&apos;s ministry setup before service begins.</p>
            </article>
            <article>
              <ShieldCheck size={28} />
              <h3>Care Comes First</h3>
              <p>Your child&apos;s well-being matters to us. Please share any needs, allergies, or helpful information with our team when you arrive.</p>
            </article>
            <article>
              <HeartHandshake size={28} />
              <h3>We&apos;re Here To Help</h3>
              <p>New to ONE✝SIX? You do not have to figure it out alone. A team member will help your family every step of the way.</p>
            </article>
          </div>
        </section>

        <section className={styles.invite}>
          <div className={styles.inviteIcon}><Star fill="currentColor" /><span>✝</span></div>
          <p>THIS SUNDAY AT 4:30 PM</p>
          <h2>BRING THE WHOLE FAMILY.</h2>
          <p className={styles.inviteCopy}>
            There is a seat for you and a special place for your little ones.
          </p>
          <div className={styles.actions}>
            <Link className={styles.darkButton} href="/plan-your-visit">
              Plan Your Visit <ArrowRight size={19} />
            </Link>
            <a className={styles.lightButton} href="mailto:info@one1sixchurch.org?subject=UNASHAMED%20KIDS%20Question">
              Ask A Question
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
