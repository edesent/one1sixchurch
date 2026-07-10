import Image from "next/image";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const devotionalVideoUrl =
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/YJGo3VLIWIbtzKXIl9m1izoojLBMQEb_/45390-SM94A2Ki3NcJM1QdUNnzqYf2gTZLlU.mp4";

const reflectionQuestions = [
  "What dead area in my heart has Jesus been exposing this week?",
  "Am I willing to repent instead of protecting my spiritual image?",
  "What would it look like for me to come alive again in prayer, obedience, and surrender?",
];

const prayerLines = [
  "Father, in the name of Jesus, thank You for mercy that wakes me up.",
  "Thank You for grace that does not leave me dead.",
  "I confess every place where I have had religion without life, image without surrender, and routine without obedience.",
  "Forgive me. Cleanse me. Revive me.",
  "I do not want to pretend to be alive. I want to be alive in Christ.",
  "Bring me back to prayer. Bring me back to repentance. Bring me back to Your Word. Bring me back to full surrender.",
  "Let resurrection life mark my heart, my home, my worship, and my witness.",
  "In Jesus’ name. Amen.",
];

const beforeYouGo = [
  "Dead religion cannot save you.",
  "But Jesus can raise what religion could never revive.",
  "Do not stay in the grave of spiritual performance.",
  "Come alive again in Christ.",
];

const rememberLines = [
  "You were dead.",
  "But God is rich in mercy.",
  "You are saved by grace.",
  "You are raised in Christ.",
  "So repent.",
  "Surrender.",
  "Obey.",
  "And live unashamed.",
];

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
                Day 5 — Come Alive Again
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.75 }}>
                Unashamed Week 6 Devotional · Dead Religion Can&apos;t Save
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
                    Ephesians 2:1-10 · Revelation 3:1-6
                  </p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "10px" }}>Today&apos;s Challenge</p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                    Spend ten honest minutes with Jesus today. Confess one dead place, surrender one hidden area, and
                    take one obedient step that shows you are coming alive again in Christ.
                  </p>
                </div>
              </div>

              <div
                style={{
                  marginBottom: "34px",
                  borderLeft: "4px solid #e50914",
                  paddingLeft: "22px",
                }}
              >
                <p className="eyebrow" style={{ marginBottom: "10px" }}>Devotional Summary</p>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.85 }}>
                  Come Alive Again closes Week 6 by pointing us away from dead religion and back to resurrection life
                  in Jesus Christ. The Gospel does not teach us to act alive. The Gospel raises dead hearts by grace
                  through faith and calls us to repentance, surrender, obedience, and bold devotion to Christ.
                </p>
              </div>

              <div style={{ marginTop: "34px" }}>
                <h3
                  style={{
                    margin: "0 0 16px",
                    fontFamily: "var(--font-outfit), Arial, sans-serif",
                    fontSize: "clamp(1.35rem, 2.4vw, 1.9rem)",
                    textTransform: "uppercase",
                  }}
                >
                  Reflection Questions
                </h3>
                <ol style={{ margin: 0, paddingLeft: "22px", color: "rgba(255,255,255,0.78)", lineHeight: 1.85 }}>
                  {reflectionQuestions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ol>
              </div>

              <div
                style={{
                  marginTop: "34px",
                  borderLeft: "4px solid #e50914",
                  paddingLeft: "22px",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 12px",
                    fontFamily: "var(--font-outfit), Arial, sans-serif",
                    fontSize: "clamp(1.35rem, 2.4vw, 1.9rem)",
                    textTransform: "uppercase",
                  }}
                >
                  Let&apos;s Pray
                </h3>
                <div style={{ display: "grid", gap: "10px" }}>
                  {prayerLines.map((line) => (
                    <p key={line} style={{ margin: 0, color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.85 }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "34px" }}>
                <h3
                  style={{
                    margin: "0 0 16px",
                    fontFamily: "var(--font-outfit), Arial, sans-serif",
                    fontSize: "clamp(1.35rem, 2.4vw, 1.9rem)",
                    textTransform: "uppercase",
                  }}
                >
                  Before You Go
                </h3>
                <div style={{ display: "grid", gap: "10px" }}>
                  {beforeYouGo.map((line) => (
                    <p key={line} style={{ margin: 0, color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.85 }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "34px" }}>
                <h3
                  style={{
                    margin: "0 0 16px",
                    fontFamily: "var(--font-outfit), Arial, sans-serif",
                    fontSize: "clamp(1.35rem, 2.4vw, 1.9rem)",
                    textTransform: "uppercase",
                  }}
                >
                  Remember
                </h3>
                <div style={{ display: "grid", gap: "10px" }}>
                  {rememberLines.map((line) => (
                    <p key={line} style={{ margin: 0, color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.85 }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: "34px", display: "grid", gap: "10px" }}>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.85 }}>
                  Thank you for joining us for Day 5 of the Unashamed Week 6 Devotional.
                </p>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.85 }}>
                  Our prayer is that God&apos;s Word challenges your heart, strengthens your faith, and draws you closer to Jesus.
                </p>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(255,255,255,0.88)",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                    lineHeight: 1.85,
                  }}
                >
                  This is One1Six Church Unashamed. One Church For The One. A Family For The Six.
                </p>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.85 }}>
                  Until next time. Keep your eyes on Jesus. Stand on truth, and live unashamed. God bless you.
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
