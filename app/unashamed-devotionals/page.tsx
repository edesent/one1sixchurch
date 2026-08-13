import Image from "next/image";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const devotionalVideoUrl =
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/LRd0QJ8csFC8dMTjU--76JnQgk4m18vF/53322-SmvIBh0tx32D4hA255t7rBVCHIyqTZ.mp4";

export default function UnashamedDevotionalsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="subpage-hero">
          <Image className="subpage-image" src="/authentic-faith.png" alt="" fill priority sizes="100vw" />
          <div className="subpage-overlay" />
          <div className="subpage-content">
            <p className="eyebrow">Unashamed Devotionals</p>
            <h1>Daily truth for bold devotion to Christ.</h1>
            <p>
              Scripture-centered devotional content to strengthen faith, prayer, discipleship, and practical
              obedience.
            </p>
            <p>Watch, listen, reflect, and live #LIVEUNASHAMED.</p>
          </div>
        </section>

        <section
          style={{
            background: "linear-gradient(180deg, #050505 0%, #111111 55%, #050505 100%)",
            color: "white",
            padding: "clamp(110px, 14vw, 150px) 20px 72px",
          }}
        >
          <div style={{ width: "min(1120px, 100%)", margin: "0 auto" }}>
            <div style={{ maxWidth: "760px", marginBottom: "42px" }}>
              <p className="eyebrow" style={{ marginBottom: "18px" }}>
                Featured Devotional
              </p>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "var(--font-outfit), Arial, sans-serif",
                  fontSize: "clamp(2.2rem, 5vw, 4.6rem)",
                  fontWeight: 800,
                  lineHeight: 0.96,
                  textTransform: "uppercase",
                }}
              >
                Day 4 — Too Powerful to Hide
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.75 }}>
                Unashamed Week 9 · I Know What I&apos;m Carrying
              </p>
            </div>

            <div
              style={{
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.04)",
                boxShadow: "0 28px 90px rgba(0,0,0,0.42)",
              }}
            >
              <video
                controls
                preload="metadata"
                playsInline
                style={{ display: "block", width: "100%", height: "auto", background: "#000" }}
              >
                <source src={devotionalVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <article
              style={{
                marginTop: "34px",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "24px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                padding: "clamp(26px, 5vw, 46px)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "24px",
                  marginBottom: "30px",
                }}
              >
                <div>
                  <p className="eyebrow" style={{ marginBottom: "10px" }}>
                    Scripture Focus
                  </p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                    Romans 1:16 · 1 Corinthians 15:3–4
                  </p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "10px" }}>
                    Today&apos;s Challenge
                  </p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                    Intentionally mention Jesus in one conversation today. Share something He has done for you, invite
                    someone to church, offer to pray, or simply explain why the Gospel matters to you. Do not force the
                    moment, but do not hide when God opens the door.
                  </p>
                </div>
              </div>

              <div
                style={{
                  marginBottom: 0,
                  borderLeft: "4px solid #e50914",
                  paddingLeft: "22px",
                }}
              >
                <p className="eyebrow" style={{ marginBottom: "10px" }}>
                  Devotional Summary
                </p>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.85 }}>
                  Romans 1:16 shows that being unashamed is not about being loud—it is about being convinced. Paul&apos;s
                  confidence was not in himself but in the Gospel of Jesus Christ, the power of God unto salvation. The
                  cross may look foolish to the world, but rejection does not make the Gospel powerless. Jesus died for
                  sinners, was buried, rose again, and is alive. Biblical boldness is not arrogance or noise; it carries
                  truth with love, compassion without compromise, and confidence in Christ. We do not need to edit Jesus
                  to make Him easier for culture to accept. Know the Gospel, believe the Gospel, live the Gospel, and share
                  the Gospel. Stand on truth, walk in love, and live unashamed.
                </p>
              </div>
            </article>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "34px" }}>
              <a
                className="red-button"
                href="https://youtube.com/@one1sixchurch"
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 0 }}
              >
                See More Devotionals <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
