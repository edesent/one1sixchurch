import Image from "next/image";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const devotionalVideoUrl =
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/XTL4uYxYxqdFvEd6gFTjOdwJYvrccHtG/43747-QUpIsUFbPgb1guc2jSStFrGASiHGI1.mp4";

const reflectionQuestions = [
  "What am I building that looks good on the outside but may not survive the fire?",
  "Is my faith built on Christ, or on image, emotion, approval, and routine?",
  "What is one thing I need to surrender so God can purify what is real in me?",
];

const devotionalThought = [
  `Fire does not create what is real. Fire reveals what was already there. It exposes the quality of what has been built, the strength of the foundation, and the truth beneath the surface.`,
  `Paul teaches in 1 Corinthians that there is a day coming when each person's work will be tested by fire. Not every work will remain. Not every ministry effort, public appearance, emotional moment, or religious activity will survive the testing of God.`,
  `That is a sobering truth. It is possible to build something that looks impressive to people but is weak before God. It is possible to have movement without depth, noise without surrender, and activity without true devotion.`,
  `The fire reveals the difference between image and substance. Image asks, "How does this look?" Substance asks, "Is this built on Christ?" Image wants applause. Substance wants obedience. Image wants recognition. Substance wants faithfulness.`,
  `This is why the foundation matters. A life built on Christ can be tested and still stand. A life built on approval, comfort, pride, or religious performance may look strong for a season, but fire will expose what it was really made of.`,
  `God's testing is not always meant to destroy us. Many times, His fire is meant to purify us. The Lord loves us too much to let us keep building with things that cannot last. He confronts what is false so what is real can remain.`,
  `That is not punishment for the believer. That is mercy. It is the grace of God refusing to let us live with a faith that only looks alive but has no weight, no roots, and no surrender.`,
  `Hebrews says our God is a consuming fire. That means He is holy. He is not casual about sin, pride, compromise, or empty religion. His presence burns through pretense and calls His people back to reverence, obedience, and worship.`,
  `The question is not only, "What am I building?" The question is, "Will it survive the fire?" Will my worship survive when nobody sees me? Will my obedience survive when it costs me something? Will my faith survive when comfort is removed?`,
  `A fire-tested faith is not a fake faith. It is a purified faith. It is a faith that has been stripped of performance and brought back to Christ. It is not built on feelings alone. It is built on the finished work of Jesus, the truth of Scripture, and the power of the Holy Spirit.`,
  `Jesus is the only foundation that can hold under fire. Our gifts cannot be the foundation. Our emotions cannot be the foundation. Our platforms, titles, routines, and reputation cannot be the foundation. Christ alone must be the foundation.`,
  `At the cross, Jesus passed through the judgment we deserved. He carried our sin, bore our shame, and rose again with all authority. Because of Him, we do not run from the fire of God. We surrender to His refining work.`,
  `So today, allow the Lord to examine your heart. Let Him test the motives. Let Him confront the hidden places. Let Him burn away what is false, shallow, prideful, and temporary.`,
  `Do not be afraid of the fire when the fire is in the hands of a holy and loving God. What He removes was never meant to carry your life. What He purifies will come out stronger.`,
  `Build on Christ. Live unashamed. Let your work, your faith, your obedience, and your devotion be the kind that can stand when the fire reveals what is real.`,
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
                Day 2 — The Fire Reveals What Is Real
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.75 }}>
                Unashamed Week 5 Devotional · Tested By Fire
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
                    1 Corinthians 3:13 · Hebrews 12:29 · Romans 1:16
                  </p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "10px" }}>Today&apos;s Challenge</p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                    Ask God to reveal what is real and what is only appearance. Surrender one false, shallow, or
                    prideful area to Him today and choose to build on Christ.
                  </p>
                </div>
              </div>

              <h3
                style={{
                  margin: "0 0 16px",
                  fontFamily: "var(--font-outfit), Arial, sans-serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
                  textTransform: "uppercase",
                }}
              >
                Devotional Thought
              </h3>
              <div style={{ display: "grid", gap: "10px" }}>
                {devotionalThought.map((line) => (
                  <p
                    key={line}
                    style={{
                      margin: 0,
                      color: "rgba(255,255,255,0.78)",
                      fontSize: "1.05rem",
                      lineHeight: 1.85,
                    }}
                  >
                    {line}
                  </p>
                ))}
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
                <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.85 }}>
                  Lord Jesus, search my heart and reveal what is real. Forgive me for building on image, pride,
                  approval, or empty religion. Purify my motives, strengthen my faith, and teach me to build my life
                  on You alone. Let my work, worship, obedience, and devotion survive the fire because they are rooted
                  in Christ. In Jesus&apos; name, amen.
                </p>
              </div>

              <p
                style={{
                  margin: "34px 0 0",
                  color: "rgba(255,255,255,0.88)",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                }}
              >
                One1Six Church Unashamed · One Church For The One · A Family For The Six
              </p>
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
