import {
  ArrowRight,
  Droplets,
  HandHeart,
  Heart,
  Package,
  ShieldCheck,
  UtensilsCrossed,
} from "lucide-react";
import Image from "next/image";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const GOAL = 3000;
const RAISED = 0;

const givingLevels = [
  {
    amount: "$10",
    title: "Help Provide A Meal",
    copy: "Help us place food directly into the hands of someone in need.",
    icon: UtensilsCrossed,
  },
  {
    amount: "$25",
    title: "Meals + Outreach Supplies",
    copy: "Help provide food, water, and practical supplies for outreach.",
    icon: Package,
  },
  {
    amount: "$50",
    title: "Help Serve Multiple People",
    copy: "Multiply your impact as our team serves families and neighbors.",
    icon: HandHeart,
  },
  {
    amount: "$100",
    title: "Outreach Partner",
    copy: "Stand with ONE1SIX as we continue bringing the love of Jesus to our city.",
    icon: Heart,
  },
];

export const metadata = {
  title: "100 Meals of Love | ONE1SIX Church",
  description:
    "Help ONE1SIX Church bring meals, water, practical resources, prayer, and the love of Jesus to our community.",
};

export default function MealsOfLovePage() {
  const percentage = Math.min(100, Math.round((RAISED / GOAL) * 100));
  const remaining = Math.max(0, GOAL - RAISED);

  return (
    <>
      <SiteHeader />
      <main className="mol-page">
        <section className="mol-hero">
          <div className="mol-grain" aria-hidden="true" />
          <div className="mol-hero-inner">
            <div className="mol-brand-lockup">
              <Image
                src="/one1six-logo.png"
                alt="ONE1SIX Church"
                width={320}
                height={130}
                priority
              />
              <span>UNASHAMED · WORCESTER, MA</span>
            </div>

            <div className="mol-hero-grid">
              <div className="mol-hero-copy">
                <p className="mol-kicker">LOVE IN ACTION · 1 JOHN 3:18</p>
                <h1>
                  <span>100</span>
                  <strong>MEALS OF</strong>
                  <em>LOVE</em>
                </h1>
                <p className="mol-lead">
                  We are taking the love of Christ beyond the walls of the church—bringing meals,
                  water, practical help, prayer, and hope to people in our community.
                </p>
                <div className="mol-scripture">
                  <span>“</span>
                  <p>
                    Let us not love with words or speech but with actions and in truth.
                    <strong>1 John 3:18</strong>
                  </p>
                </div>
              </div>

              <aside className="mol-give-card" aria-label="Donate to 100 Meals of Love">
                <p className="mol-card-eyebrow">BE PART OF THE MISSION</p>
                <h2>Your generosity helps love show up.</h2>
                <p>
                  Give securely through Venmo to <strong>@JBLESSED3</strong>. Please include
                  <strong> “100 Meals of Love”</strong> in the payment note.
                </p>
                <a
                  className="mol-venmo-button"
                  href="https://venmo.com/u/JBLESSED3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Give With Venmo <ArrowRight size={20} />
                </a>
                <div className="mol-handle">
                  <span>VENMO</span>
                  <strong>@JBLESSED3</strong>
                </div>
                <p className="mol-small-note">
                  For giving records or questions, contact info@one1sixchurch.org.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="mol-progress-section" id="progress">
          <div className="mol-section-shell">
            <div className="mol-progress-heading">
              <div>
                <p className="mol-section-label">OUR CURRENT GOAL</p>
                <h2>$3,000 to keep serving our community.</h2>
              </div>
              <div className="mol-percent">{percentage}%</div>
            </div>

            <div
              className="mol-progress-track"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={GOAL}
              aria-valuenow={RAISED}
              aria-label={`${RAISED} dollars raised of ${GOAL} dollar goal`}
            >
              <span style={{ width: `${percentage}%` }} />
            </div>

            <div className="mol-progress-stats">
              <div>
                <span>RAISED</span>
                <strong>${RAISED.toLocaleString()}</strong>
              </div>
              <div>
                <span>GOAL</span>
                <strong>${GOAL.toLocaleString()}</strong>
              </div>
              <div>
                <span>TO GO</span>
                <strong>${remaining.toLocaleString()}</strong>
              </div>
            </div>

            <p className="mol-progress-note">
              This progress is updated as gifts are received and recorded by our outreach team.
            </p>
          </div>
        </section>

        <section className="mol-impact-section">
          <div className="mol-section-shell">
            <div className="mol-impact-heading">
              <p className="mol-section-label">WHERE YOUR GIFT GOES</p>
              <h2>More than a meal. <span>A tangible expression of Christ’s love.</span></h2>
              <p>
                Our $3,000 campaign goal supports food, bottled water, outreach supplies, hygiene
                resources, and the practical needs involved in consistently serving people in our city.
              </p>
            </div>

            <div className="mol-impact-grid">
              <article>
                <UtensilsCrossed size={30} />
                <span>01</span>
                <h3>Meals</h3>
                <p>Food prepared and distributed with dignity and compassion.</p>
              </article>
              <article>
                <Droplets size={30} />
                <span>02</span>
                <h3>Water</h3>
                <p>Hydration and basic resources for neighbors facing difficult circumstances.</p>
              </article>
              <article>
                <Package size={30} />
                <span>03</span>
                <h3>Supplies</h3>
                <p>Practical outreach items that help us meet real needs on the ground.</p>
              </article>
              <article>
                <Heart size={30} />
                <span>04</span>
                <h3>Prayer + Presence</h3>
                <p>Every outreach is centered on people, prayer, the Gospel, and the love of Jesus.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="mol-giving-section" id="give">
          <div className="mol-section-shell">
            <div className="mol-giving-title">
              <p className="mol-section-label">YOU CAN BE PART</p>
              <h2>Choose your level of impact.</h2>
            </div>

            <div className="mol-giving-grid">
              {givingLevels.map((level) => {
                const Icon = level.icon;
                return (
                  <article className="mol-giving-card" key={level.amount}>
                    <Icon size={28} />
                    <strong>{level.amount}</strong>
                    <h3>{level.title}</h3>
                    <p>{level.copy}</p>
                    <a
                      href="https://venmo.com/u/JBLESSED3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Give Now <ArrowRight size={17} />
                    </a>
                  </article>
                );
              })}
            </div>

            <div className="mol-custom-gift">
              <div>
                <ShieldCheck size={27} />
                <p>
                  <strong>Want to give another amount?</strong>
                  Give as God leads. Every gift helps us keep showing up and serving faithfully.
                </p>
              </div>
              <a
                className="mol-outline-button"
                href="https://venmo.com/u/JBLESSED3"
                target="_blank"
                rel="noreferrer"
              >
                Open Venmo @JBLESSED3
              </a>
            </div>
          </div>
        </section>

        <section className="mol-final-section">
          <div className="mol-final-cross" aria-hidden="true">†</div>
          <div className="mol-final-inner">
            <p className="mol-section-label">ONE CHURCH FOR THE ONE, A FAMILY FOR THE SIX</p>
            <h2>Love doesn’t just speak. <span>Love shows up.</span></h2>
            <p>
              Thank you for helping ONE1SIX Church bring hope, dignity, practical care, prayer,
              and the Gospel of Jesus Christ to our community.
            </p>
            <a
              className="mol-venmo-button mol-final-button"
              href="https://venmo.com/u/JBLESSED3"
              target="_blank"
              rel="noreferrer"
            >
              Donate Today <Heart size={19} fill="currentColor" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
