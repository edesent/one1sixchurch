import Image from "next/image";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const devotionalVideoUrl =
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/Dw73UaAAcsKEll-Y_Y8xD073nYsqY7gc/46171-GfauNu3fxE6NzGQd6Klqrd0HYRbffZ.mp4";

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
              <p className="eyebrow" style={{ marginBottom: "18px" }}>Featured Devotional</p>
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
                Day 2 — Get Off The Throne
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.75 }}>
                Unashamed Week 7 Devotional · The Cross Before Comfort
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
                  <p className="eyebrow" style={{ marginBottom: "10px" }}>Scripture Focus</p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                    Luke 9:23 · Luke 6:46 · 2 Corinthians 10:5
                  </p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "10px" }}>Today&apos;s Challenge</p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                    Identify one area where you are still insisting on being in charge. Surrender it to Jesus and take one concrete step of obedience today without negotiating.
                  </p>
                </div>
              </div>

              <div
                style={{
                  borderLeft: "4px solid #e50914",
                  paddingLeft: "22px",
                }}
              >
                <p className="eyebrow" style={{ marginBottom: "10px" }}>Devotional Summary</p>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.85 }}>
                  Get Off The Throne confronts the desire to follow Jesus while still remaining in control. Jesus does not ask for a place beside us. He demands the throne. Luke 9:23 calls us to deny ourselves, Luke 6:46 exposes the contradiction of calling Him Lord without obeying Him, and 2 Corinthians 10:5 commands us to bring every thought under the authority of Christ. You cannot follow Jesus while still insisting on being in charge. Real discipleship begins when self-rule ends and every area of life is surrendered to the Lordship of Jesus.
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