import { ArrowRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "./_components/ContactForm";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";

const experiences = [
  {
    number: "01",
    title: "Authentic Faith",
    copy: "Gather around God’s Word and presence through powerful worship and biblical teaching.",
    image: "/authentic-faith.png",
  },
  {
    number: "02",
    title: "Fearless Love",
    copy: "Grow in faith through authentic relationships and Christ-centered community.",
    image: "/fearless-love.png",
  },
  {
    number: "03",
    title: "Real Devotion",
    copy: "Live out your faith through service, evangelism, discipleship, and Kingdom impact.",
    image: "/real-devotion.png",
  },
];

const values = [
  ["Unashamed Faith", "Romans 1:16", "We live and proclaim the Gospel boldly, without fear or compromise."],
  ["Biblical Authority", "2 Timothy 3:16–17", "God’s Word is our final authority for faith, truth, and life."],
  ["Authentic Transformation", "2 Corinthians 5:17", "We believe Jesus still changes lives from the inside out."],
  ["Holy Boldness", "Acts 4:29", "We move with courage, conviction, and the power of the Holy Spirit."],
  ["Radical Love", "John 13:35", "We love people deeply while remaining rooted in biblical truth."],
  ["Discipleship Over Crowds", "Matthew 28:19–20", "We are committed to making disciples, not simply gathering audiences."],
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="editorial-home" id="home">
        <section className="editorial-hero">
          <div className="editorial-hero-photo editorial-hero-photo-left">
            <Image src="/header-image.png" alt="ONE1SIX Church worship gathering" fill priority sizes="(max-width: 900px) 78vw, 42vw" />
          </div>
          <div className="editorial-hero-photo editorial-hero-photo-right">
            <Image src="/worship-red.png" alt="Worship at ONE1SIX Church" fill priority sizes="(max-width: 900px) 44vw, 27vw" />
          </div>

          <div className="editorial-hero-content">
            <p className="editorial-kicker">Worcester, Massachusetts · Romans 1:16</p>
            <h1>
              <span>Unashamed</span>
              <span className="editorial-red">For The</span>
              <span>Gospel</span>
            </h1>
            <div className="editorial-hero-bottom">
              <p>Authentic Faith · Fearless Love · Unwavering Devotion To Christ</p>
              <div className="editorial-actions">
                <Link className="editorial-button editorial-button-red" href="/contact-us">
                  Plan Your Visit <ArrowRight size={19} />
                </Link>
                <Link className="editorial-button editorial-button-line" href="/unashamed-devotionals">
                  Explore Devotionals
                </Link>
              </div>
            </div>
          </div>

          <div className="editorial-service-bar">
            <span>Gather With Us</span>
            <strong>Sundays · 1:00 PM</strong>
            <span className="editorial-service-location">
              <MapPin size={17} /> Worcester, MA
            </span>
            <a href="mailto:info@one1sixchurch.org?subject=This%20Week%27s%20Location">
              Get This Week’s Location <Mail size={17} />
            </a>
          </div>
        </section>

        <section className="editorial-manifesto" aria-label="ONE1SIX identity statement">
          <p className="editorial-section-label">Who We Are</p>
          <h2>
            A Church For The <span>Broken.</span><br />
            The Hungry. The Lost.<br />
            And The <span>One.</span>
          </h2>
          <div className="editorial-manifesto-copy">
            <p>
              ONE1SIX is a community of imperfect people pursuing a perfect Savior. We preach God’s Word without compromise, love people without conditions, and raise disciples who live with bold faith.
            </p>
            <Link className="editorial-text-link" href="/who-is-116">
              Discover Who We Are <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <section className="editorial-about">
          <div className="editorial-about-image">
            <Image src="/42031.png" alt="Live Unashamed Romans 1:16" fill sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
          <div className="editorial-about-copy">
            <p className="editorial-section-label">This Is ONE1SIX</p>
            <h2>More Than A Service. <span>A Family Pursuing Jesus.</span></h2>
            <p>
              We believe church should be a place where lives are transformed, faith is strengthened, and people encounter the presence of God in a real and life-changing way.
            </p>
            <p>
              We are unashamed of the Gospel of Jesus Christ. We exist to reach the one, welcome the six, and build disciples who refuse to hide their faith.
            </p>
            <p className="editorial-slogan">One Church For The One, A Family For The Six.</p>
            <Link className="editorial-button editorial-button-red" href="/contact-us">
              Connect With Us <ArrowRight size={19} />
            </Link>
          </div>
        </section>

        <section className="editorial-experience" id="dna">
          <div className="editorial-section-heading">
            <p className="editorial-section-label">Our DNA</p>
            <h2>The ONE<span>1</span>SIX Experience</h2>
          </div>
          <div className="editorial-experience-grid">
            {experiences.map((item) => (
              <article className="editorial-experience-card" key={item.title}>
                <div className="editorial-experience-image">
                  <Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div className="editorial-experience-copy">
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial-story">
          <Image className="editorial-story-image" src="/worship-gathering.png" alt="ONE1SIX worship gathering" fill sizes="100vw" />
          <div className="editorial-story-shade" />
          <div className="editorial-story-inner">
            <p className="editorial-story-word" aria-hidden="true">ONE1SIX</p>
            <div className="editorial-story-title">
              <p className="editorial-section-label">Our Story</p>
              <h2>Born From <span>Conviction.</span></h2>
            </div>
            <div className="editorial-story-copy">
              <p>ONE1SIX Church was not born out of comfort. It was born out of conviction.</p>
              <p>
                In a world where faith is often hidden, truth is compromised, and discipleship is replaced with convenience, God placed a burden in our hearts to build a church that would live unashamed of the Gospel of Jesus Christ.
              </p>
            </div>
          </div>
        </section>

        <section className="editorial-foundation">
          <div className="editorial-foundation-heading">
            <p className="editorial-section-label">What We Stand On</p>
            <h2>The <span>Foundation</span></h2>
            <p>God the Father · God the Son · God the Holy Spirit</p>
          </div>

          <div className="editorial-foundation-grid">
            <article className="editorial-foundation-feature">
              <div className="editorial-foundation-image">
                <Image src="/foundation.png" alt="Christ is the foundation of ONE1SIX Church" fill sizes="(max-width: 900px) 100vw, 48vw" />
              </div>
              <div>
                <h3>Christ Is The Center.</h3>
                <p>
                  Without Him there is no Gospel to preach, no salvation to offer, and no hope for humanity. Christ is at the center of everything we are and everything we do.
                </p>
                <blockquote>“And he is the head of the body, the church.” <strong>Colossians 1:18</strong></blockquote>
              </div>
            </article>

            <div className="editorial-purpose-stack">
              <article>
                <span>01</span>
                <h3>The Mission</h3>
                <p>
                  To ignite a global movement of disciples who walk in holy boldness, transforming culture through authentic faith, fearless love, and unwavering devotion to Christ.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>The Vision</h3>
                <p>
                  To boldly proclaim the Gospel of Jesus Christ without fear or compromise—raising a generation that lives unashamed, speaks truth unfiltered, and moves with unstoppable faith and purpose.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="editorial-values">
          <div className="editorial-section-heading">
            <p className="editorial-section-label">How We Live</p>
            <h2>Our Core <span>Values</span></h2>
          </div>
          <div className="editorial-values-grid">
            {values.map(([title, verse, copy], index) => (
              <article className="editorial-value-card" key={title}>
                <span className="editorial-value-number">0{index + 1}</span>
                <h3>{title}</h3>
                <strong>{verse}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <Link className="editorial-text-link" href="/the-foundation">
            Explore Our Full Foundation <ArrowRight size={18} />
          </Link>
        </section>

        <section className="editorial-prayer" id="contact">
          <Image className="editorial-prayer-image" src="/contact-desk.png" alt="Prayer and connection at ONE1SIX Church" fill sizes="100vw" />
          <div className="editorial-prayer-shade" />
          <div className="editorial-prayer-inner">
            <div className="editorial-prayer-copy">
              <p className="editorial-section-label">You Are Not Alone</p>
              <h2>How Can We <span>Pray For You?</span></h2>
              <p>Whether you need prayer, have questions, or want to plan your visit, we are here for you.</p>
            </div>
            <ContactForm source="Homepage Editorial Prayer Section" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
