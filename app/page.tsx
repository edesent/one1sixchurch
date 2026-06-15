import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Cross,
  Flame,
  Mail,
  MapPin,
  Menu,
  MessageCircleHeart,
  Send,
  UsersRound,
} from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Who Is 116", href: "#who" },
  { label: "Our DNA", href: "#dna" },
  { label: "The Foundation", href: "#foundation" },
  { label: "Contact Us", href: "#contact" },
];

const experiences = [
  {
    title: "Authentic Faith",
    copy: "Gather around the Word, worship with conviction, and follow Jesus with a whole heart.",
    image: "/authentic-faith.png",
  },
  {
    title: "Fearless Love",
    copy: "Build real relationships that carry grace, truth, prayer, and Christ-centered care.",
    image: "/fearless-love.png",
  },
  {
    title: "Real Devotion",
    copy: "Live sent through discipleship, service, and bold witness in everyday life.",
    image: "/real-devotion.png",
  },
];

const values = [
  ["Unashamed Faith", "Romans 1:16", "We speak the Gospel with courage and joy."],
  ["Biblical Authority", "2 Timothy 3:16-17", "Scripture anchors what we believe and practice."],
  ["Holy Boldness", "Acts 4:29", "We move with conviction through the power of the Spirit."],
  ["Authentic Transformation", "2 Corinthians 5:17", "Jesus changes lives from the inside out."],
  ["Discipleship Over Crowds", "Matthew 28:19-20", "We form followers, not spectators."],
  ["Radical Love", "John 13:35", "We love deeply while remaining rooted in truth."],
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="blessing-bar">
          Be blessed, keep your eyes on Jesus, and remember to live unashamed
        </div>
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="ONE1SIX Church home">
            <Image src="/one1six-logo.png" alt="ONE1SIX Church" width={315} height={133} priority />
          </a>
          <div className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <details className="mobile-nav">
            <summary aria-label="Open menu">
              <Menu size={24} />
            </summary>
            <div>
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </details>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <Image className="hero-image" src="/header-image.png" alt="" fill priority sizes="100vw" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="kicker">Romans 1:16</p>
            <h1>
              ONE <span>1</span> SIX CHURCH
            </h1>
            <p className="hero-tag">UNASHAMED</p>
            <a className="red-button" href="#contact">
              Plan Your Visit <ArrowRight size={20} />
            </a>
          </div>
        </section>

        <section className="section intro" id="who">
          <div className="section-copy">
            <p className="eyebrow">Who Is ONE1SIX</p>
            <h2>A family pursuing Jesus with bold faith and steady love.</h2>
            <p>
              ONE1SIX is a community of imperfect people following a perfect Savior.
              The heart of the church is simple: Christ above comfort, truth without
              compromise, and a place for people to encounter God in a real way.
            </p>
            <p>
              Whether you are new to faith, returning after time away, or looking for
              a church home, there is room here to grow, worship, serve, and belong.
            </p>
          </div>
          <div className="stacked-media">
            <Image src="/worship-red.png" alt="" width={768} height={512} sizes="(max-width: 900px) 100vw, 42vw" />
            <Image src="/worship-gathering.png" alt="" width={768} height={512} sizes="(max-width: 900px) 100vw, 28vw" />
          </div>
        </section>

        <section className="statement-band">
          <div>
            <p>Live Unashamed</p>
            <h2>Authentic Faith. Fearless Love. Unwavering Devotion To Christ.</h2>
          </div>
        </section>

        <section className="section origin">
          <Image className="origin-image" src="/mission.png" alt="" width={900} height={600} sizes="(max-width: 900px) 100vw, 46vw" />
          <div className="origin-copy">
            <p className="eyebrow">Born Out Of Conviction</p>
            <h2>A movement for people who refuse to hide the Gospel.</h2>
            <p>
              Inspired by Romans 1:16, ONE1SIX exists to proclaim Christ boldly,
              love people fearlessly, and raise disciples who walk in devotion to Him.
            </p>
            <div className="scripture-card">
              <Cross size={28} />
              <span>One Church For The One. A Family For The Six.</span>
            </div>
          </div>
        </section>

        <section className="section experience" id="dna">
          <div className="section-heading">
            <p className="eyebrow">The ONE1SIX Experience</p>
            <h2>More than a service. A lifestyle shaped by Jesus.</h2>
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

        <section className="mission-vision">
          <article>
            <Flame size={34} />
            <p>The Mission</p>
            <h2>Ignite disciples who walk in holy boldness and transform culture through Christ.</h2>
          </article>
          <article>
            <UsersRound size={34} />
            <p>The Vision</p>
            <h2>Raise a generation that lives unashamed, speaks truth, and moves with purpose.</h2>
          </article>
        </section>

        <section className="section values">
          <div className="section-heading">
            <p className="eyebrow">The Values</p>
            <h2>The principles that guide what we teach and live.</h2>
          </div>
          <div className="values-grid">
            {values.map(([title, verse, copy]) => (
              <article className="value-card" key={title}>
                <span>{verse}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="foundation" id="foundation">
          <Image className="foundation-image" src="/foundation.png" alt="" fill sizes="100vw" />
          <div className="foundation-overlay" />
          <div className="foundation-content">
            <p className="eyebrow">The Foundation</p>
            <h2>Christ Is Our Foundation</h2>
            <p>
              God the Father, God the Son, and God the Holy Spirit stand at the center
              of the church. Without Christ, there is no Gospel to preach and no hope
              for humanity.
            </p>
            <span>Colossians 1:18</span>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-media">
            <Image src="/contact-desk.png" alt="" width={768} height={512} sizes="(max-width: 900px) 100vw, 44vw" />
          </div>
          <div className="contact-panel">
            <p className="eyebrow">How Can We Pray For You?</p>
            <h2>Need prayer, have questions, or want to plan your visit?</h2>
            <form>
              <label>
                Your Name
                <input name="name" type="text" />
              </label>
              <label>
                Email Address
                <input name="email" type="email" required />
              </label>
              <label>
                Prayer Request / Message
                <textarea name="message" rows={5} required />
              </label>
              <button type="submit">
                Connect With Us <Send size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <h2>
            ONE<span>1</span>SIX
          </h2>
          <p>C H U R C H</p>
        </div>
        <div className="footer-grid">
          <div>
            <h3>Email</h3>
            <a href="mailto:info@one1sixchurch.org">
              <Mail size={18} /> info@one1sixchurch.org
            </a>
          </div>
          <div>
            <h3>Service Times</h3>
            <p>
              <CalendarDays size={18} /> Sundays at 1:00 pm
            </p>
          </div>
          <div>
            <h3>Location</h3>
            <p>
              <MapPin size={18} /> Worcester, Massachusetts
            </p>
          </div>
          <div>
            <h3>Connect</h3>
            <p>
              <MessageCircleHeart size={18} /> One Church For The One
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 One1Six Church. All rights reserved.</span>
          <span>
            <BookOpenText size={16} /> Romans 1:16
          </span>
        </div>
      </footer>
    </>
  );
}
