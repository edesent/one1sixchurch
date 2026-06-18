import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

import { ContactForm } from "./_components/ContactForm";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";

const experiences = [
  {
    title: "Authentic Faith",
    copy: "Gather around God's Word and presence through powerful worship and biblical teaching.",
    image: "/authentic-faith.png",
  },
  {
    title: "Fearless Love",
    copy: "Grow in faith through authentic relationships and Christ-centered community.",
    image: "/fearless-love.png",
  },
  {
    title: "Real Devotion To Christ",
    copy: "Live out your faith as a disciple through service, evangelism, and Kingdom impact.",
    image: "/real-devotion.png",
  },
];

const foundationValueColumns = [
  [
    ["Unashamed Faith", "Romans 1:16", "We live and proclaim the Gospel boldly, without fear or compromise."],
    ["Holy Boldness", "Acts 4:29", "We move with courage, conviction, and the power of the Holy Spirit."],
    ["Radical Love", "John 13:35", "We love people deeply while remaining rooted in biblical truth."],
  ],
  [
    ["Biblical Authority", "2 Timothy 3:16-17", "God's Word is our final authority for faith, truth, and life."],
    ["Authentic Transformation", "2 Corinthians 5:17", "We believe Jesus still changes lives from the inside out."],
    ["Discipleship Over Crowds", "Matthew 28:19-20", "We are committed to making disciples, not simply gathering audiences."],
  ],
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="home">
        <section className="hero">
          <Image className="hero-image" src="/header-image.png" alt="" fill priority sizes="100vw" />
          <div className="hero-shade" />
          <div className="hero-content">
            <h1>
              ONE <span>1</span> SIX CHURCH
            </h1>
            <p className="hero-tag">UNASHAMED</p>
            <p className="hero-sub">Authentic Faith &bull; Fearless Love &bull; Unwavering Devotion To Christ</p>
            <div className="hero-gather">
              <p className="hero-gather-title">Gather With Us This Sunday</p>
              <p>Sundays at <strong>1:00 PM</strong></p>
              <p>Currently gathering in <strong>Worcester, MA</strong></p>
            </div>
            <a className="red-button" href="mailto:one1sixchurch@gmail.com?subject=This%20Week%27s%20Location">
              Get This Week&rsquo;s Location <Mail size={20} />
            </a>
          </div>
        </section>

        <section className="intro-section" id="who">
          <div className="intro">
          <div className="section-copy">
            <p className="eyebrow">Who Is ONE1SIX</p>
            <h2>A community of imperfect people pursuing a perfect Savior.</h2>
            <p>
              We believe church should be more than a weekly gathering &mdash; it should be a place
              where lives are transformed, faith is strengthened, and people encounter the presence
              of God in a real and life-changing way.
            </p>
            <p>
              We are unashamed of the Gospel of Jesus Christ (Romans 1:16). We preach God&rsquo;s Word
              without compromise, love people without conditions, and raise disciples who live with
              bold faith and unwavering devotion to Christ.
            </p>
            <p className="lead-line">This is more than a church service.</p>
            <p className="lead-line">This is a family pursuing Jesus together.</p>
            <p className="lead-line accent">One Church For The One, A Family For The Six.</p>
            <a className="outline-button" href="#contact">
              Plan Your Visit <ArrowRight size={18} />
            </a>
          </div>
          <div className="unashamed-card">
            <Image src="/42031.png" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="unashamed-overlay" />
            <div className="unashamed-text">
              <p>Live</p>
              <p>Unashamed</p>
              <span>Romans 1:16</span>
            </div>
          </div>
          </div>
        </section>

        <section className="our-story">
          <Image className="our-story-image" src="/worship-gathering.png" alt="" fill sizes="100vw" />
          <div className="our-story-overlay" />
          <p className="our-story-watermark" aria-hidden="true">
            ONE&#8224;SIX
          </p>
          <div className="our-story-inner">
            <div className="our-story-title">
              <h2>
                OUR <span>STORY</span>
              </h2>
              <p>One Church For The One, A Family For The Six.</p>
            </div>
            <div className="our-story-copy">
              <p>ONE1SIX Church was not born out of comfort &mdash; it was born out of conviction.</p>
              <p>
                In a world where faith is often hidden, truth is compromised, and discipleship is
                replaced with convenience, God placed a burden in our hearts to build a community
                that would live unashamed of the Gospel of Jesus Christ.
              </p>
            </div>
          </div>
        </section>

        <section className="section experience" id="dna">
          <div className="section-heading centered">
            <h2>
              The ONE<span>1</span>SIX Experience
            </h2>
          </div>
          <div className="experience-grid">
            {experiences.map((item) => (
              <article className="experience-card" key={item.title}>
                <Image src={item.image} alt="" width={768} height={512} sizes="(max-width: 900px) 100vw, 31vw" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="foundation-band">
          <Image className="foundation-band-image" src="/foundation.png" alt="" fill sizes="100vw" />
          <div className="foundation-band-overlay" />
          <div className="foundation-band-inner">
            <h2>
              The <span>Foundation</span>
            </h2>
            <p className="foundation-band-pillars">
              God the Father <em>&bull;</em> God the Son <em>&bull;</em> God the Holy Spirit
            </p>
            <p className="foundation-band-body">
              Without Him there is no Gospel to preach, no salvation to offer, and no hope for
              humanity. Christ is at the center of everything we are and everything we do.
            </p>
            <p className="foundation-band-verse">
              &ldquo;And he is the head of the body, the church.&rdquo; <em>Colossians 1:18</em>
            </p>
          </div>
        </section>

        <section className="purpose">
          <Image className="purpose-image" src="/mission.png" alt="" fill sizes="100vw" />
          <div className="purpose-overlay" />
          <div className="purpose-inner">
            <article>
              <h2>
                The <span>Mission</span>
              </h2>
              <p>
                To ignite a global movement of disciples who walk in holy boldness, transforming
                culture through authentic faith, fearless love, and unwavering devotion to Christ.
              </p>
            </article>
            <article>
              <h2>
                The <span>Vision</span>
              </h2>
              <p>
                To boldly proclaim the Gospel of Jesus Christ without fear or compromise &mdash;
                raising a generation that lives unashamed, speaks truth unfiltered, and moves with
                unstoppable faith and purpose.
              </p>
            </article>
          </div>
        </section>

        <section className="foundation-values" aria-label="ONE1SIX foundation values">
          <div className="foundation-values-heading">
            <h2>
              The <span>Values</span>
            </h2>
            <p>The principles that guide everything we believe, teach, and live.</p>
          </div>
          <div className="foundation-values-inner">
            <div className="foundation-value-column">
              {foundationValueColumns[0].map(([title, verse, copy]) => (
                <article className="foundation-value-card" key={title}>
                  <h3>{title}</h3>
                  <span>{verse}</span>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <figure className="foundation-center-card">
              <Image src="/contact-desk.png" alt="" width={768} height={512} sizes="(max-width: 920px) 100vw, 44vw" />
              <figcaption>
                <strong>Christ Is Our Foundation</strong>
                <span>
                  And he is the head of the body, the church; <em>Colossians 1:18</em>
                </span>
              </figcaption>
            </figure>
            <div className="foundation-value-column">
              {foundationValueColumns[1].map(([title, verse, copy]) => (
                <article className="foundation-value-card" key={title}>
                  <h3>{title}</h3>
                  <span>{verse}</span>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="prayer" id="contact">
          <Image className="prayer-image" src="/worship-gathering.png" alt="" fill sizes="100vw" />
          <div className="prayer-overlay" />
          <div className="prayer-inner">
            <h2>How Can We Pray For You?</h2>
            <p>Whether you need prayer, have questions, or want to plan your visit, we&rsquo;re here for you.</p>
            <ContactForm source="Homepage Prayer Section" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
