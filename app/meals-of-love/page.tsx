import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Droplets, Heart, HeartHandshake, PackageOpen, UtensilsCrossed } from "lucide-react";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "./meals-of-love.module.css";

export const metadata: Metadata = {
  title: "100 Meals of Love | ONE1SIX Church",
  description:
    "Help ONE1SIX Church bring food, prayer, hope, and the love of Jesus to our Worcester community through the 100 Meals of Love outreach campaign.",
};

const goal = 3000;
const raised = 0;
const percent = Math.min(100, Math.round((raised / goal) * 100));
const remaining = Math.max(0, goal - raised);

const tiers = [
  {
    amount: "$10",
    title: "Help Provide A Meal",
    copy: "Help place a meal and a moment of Christ-centered care into someone’s hands.",
    icon: UtensilsCrossed,
  },
  {
    amount: "$25",
    title: "Meals + Outreach Supplies",
    copy: "Help provide food along with practical supplies used during community outreach.",
    icon: PackageOpen,
  },
  {
    amount: "$50",
    title: "Help Serve Multiple People",
    copy: "Multiply the impact by helping us care for several neighbors in one outreach.",
    icon: HeartHandshake,
  },
  {
    amount: "$100",
    title: "Outreach Partner",
    copy: "Stand with ONE1SIX as we continue showing up consistently for our community.",
    icon: Heart,
  },
];

export default function MealsOfLovePage() {
  return (
    <>
      <SiteHeader />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.texture} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.logoWrap}>
              <Image src="/one1six-logo.png" alt="ONE1SIX Church" width={420} height={195} priority />
            </div>

            <p className={styles.kicker}>ONE1SIX Community Outreach</p>
            <h1>
              <span>100 Meals</span>
              <span className={styles.red}>Of Love.</span>
            </h1>
            <p className={styles.heroCopy}>
              We are taking the love of Christ beyond the walls of the church — bringing food,
              prayer, hope, and practical care to people in our Worcester community.
            </p>

            <blockquote className={styles.scripture}>
              “Let us not love with words or speech but with actions and in truth.”
              <strong>1 John 3:18</strong>
            </blockquote>

            <a
              className={styles.primaryButton}
              href="https://venmo.com/u/JBLESSED3"
              target="_blank"
              rel="noreferrer"
            >
              Give With Venmo <ArrowRight size={20} />
            </a>
            <p className={styles.venmoLine}>Venmo: <strong>@JBLESSED3</strong> · Jobeth Pacheco</p>
          </div>
        </section>

        <section className={styles.progressSection} aria-labelledby="campaign-progress">
          <div className={styles.sectionHeading}>
            <p>Campaign Progress</p>
            <h2 id="campaign-progress">Help Us Reach <span>$3,000</span></h2>
          </div>

          <div className={styles.progressCard}>
            <div className={styles.progressTopline}>
              <div>
                <span>Raised</span>
                <strong>${raised.toLocaleString()}</strong>
              </div>
              <div className={styles.progressGoal}>
                <span>Goal</span>
                <strong>${goal.toLocaleString()}</strong>
              </div>
            </div>

            <div
              className={styles.progressTrack}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={goal}
              aria-valuenow={raised}
              aria-label={`$${raised} raised of $${goal}`}
            >
              <div className={styles.progressFill} style={{ width: `${percent}%` }} />
            </div>

            <div className={styles.progressBottomline}>
              <strong>{percent}% Funded</strong>
              <span>${remaining.toLocaleString()} To Go</span>
            </div>
            <p className={styles.updated}>Progress is updated as campaign gifts are received.</p>
          </div>
        </section>

        <section className={styles.missionSection}>
          <div className={styles.missionCopy}>
            <p className={styles.sectionLabel}>Love In Action</p>
            <h2>More Than A Meal. <span>A Moment To Show Jesus.</span></h2>
            <p>
              Every outreach gives us an opportunity to meet a practical need while treating people
              with dignity, listening to their story, praying with them, and pointing them to the hope
              found in Jesus Christ.
            </p>
            <p>
              Campaign funds help support meals, bottled water, outreach supplies, hygiene resources,
              and other practical needs connected to serving our community.
            </p>
          </div>

          <div className={styles.missionStats}>
            <article>
              <UtensilsCrossed size={28} />
              <strong>Food</strong>
              <span>Serving practical needs</span>
            </article>
            <article>
              <Droplets size={28} />
              <strong>Resources</strong>
              <span>Water and outreach supplies</span>
            </article>
            <article>
              <HeartHandshake size={28} />
              <strong>Prayer</strong>
              <span>Showing the compassion of Christ</span>
            </article>
          </div>
        </section>

        <section className={styles.tiersSection}>
          <div className={styles.sectionHeading}>
            <p>You Can Be Part</p>
            <h2>Choose Your <span>Impact</span></h2>
          </div>

          <div className={styles.tierGrid}>
            {tiers.map(({ amount, title, copy, icon: Icon }) => (
              <article className={styles.tierCard} key={amount}>
                <div className={styles.tierAmount}>{amount}</div>
                <Icon size={30} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.giveSection}>
          <div className={styles.giveCard}>
            <p className={styles.sectionLabel}>Give Today</p>
            <h2>Your Generosity Helps Us <span>Show Up.</span></h2>
            <p>
              Tap below to give securely through Venmo. Please include <strong>“Meals of Love”</strong>
              in the payment note so we can identify gifts designated for this campaign.
            </p>
            <a
              className={styles.primaryButton}
              href="https://venmo.com/u/JBLESSED3"
              target="_blank"
              rel="noreferrer"
            >
              Open Venmo <ArrowRight size={20} />
            </a>
            <div className={styles.recipientBox}>
              <span>Payment Recipient</span>
              <strong>Jobeth Pacheco · @JBLESSED3</strong>
              <small>Designated for ONE1SIX Church community outreach.</small>
            </div>
          </div>
        </section>

        <section className={styles.closing}>
          <Image src="/one1six-official-logo.webp" alt="ONE1SIX Church" width={280} height={130} />
          <p>One Church For The One, A Family For The Six.</p>
          <strong>#LiveUnashamed</strong>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
