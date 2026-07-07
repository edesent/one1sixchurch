import Image from "next/image";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const devotionalVideoUrl =
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/1lyTeFxr_EARA9YQKufDsN4-w4dhwK5G/45060-hfLl0fx33cjQ90mMBSxStkBIeOu4Zd.mp4";

const reflectionQuestions = [
  "Am I trying to live bold for Jesus in my own strength instead of being surrendered to Jesus?",
  "What area of my heart needs the purifying fire of God today?",
  "Is my life producing real evidence of holy fire, or only the appearance of spiritual smoke?",
];

const devotionalThoughtWeek6 = [
  `Jesus goes deeper than appearance. Fire reveals. Fire purifies. Fire consumes. Fire marks the presence of God, the holiness of God, and the power of God. But the fire God gives is not emotional hype. It is not religious performance. It is the holy fire of the Holy Spirit.`,
  `John the Baptist said Jesus would baptize with the Holy Spirit and with fire. That means the work of Christ is not only to forgive us, but to fill us, purify us, empower us, and set us apart for the glory of God.`,
  `In Acts chapter 2, the disciples were gathered in obedience, waiting for the promise of the Father. Then the Holy Spirit came like a rushing mighty wind, and tongues like fire rested on them. They were not just moved emotionally. They were transformed spiritually.`,
  `Before the fire fell, they were waiting. After the fire fell, they became witnesses. Before the fire fell, Peter denied Jesus. After the fire fell, Peter preached Jesus with boldness. The Holy Spirit does not make cowards comfortable. He makes disciples courageous.`,
  `This is why we must understand the difference between strange fire and holy fire. Strange fire begins in the flesh. Holy fire comes from God. Strange fire seeks attention. Holy fire points to Jesus. Strange fire performs for people. Holy fire produces obedience.`,
  `The fire of the Holy Spirit is not given so we can look spiritual. It is given so we can live surrendered. It burns away compromise. It exposes sin. It awakens prayer. It strengthens witness. It gives boldness to speak the truth when fear tells us to stay silent.`,
  `Some people want the smoke of revival without the surrender of repentance. They want the sound, the emotion, and the appearance, but they do not want the altar. But in the Kingdom, fire falls on sacrifice. The question is not only, "Lord, send the fire." The question is, "Lord, am I on the altar?"`,
  `Romans 1:16 is not a motivational slogan. It is the confession of a life set on fire by the Gospel. Paul was not ashamed because he knew the Gospel was the power of God for salvation. When the Holy Spirit fills a person, shame begins to lose its grip and boldness begins to rise.`,
  `Holy fire does not make us arrogant. It makes us surrendered. It does not make us reckless. It makes us obedient. It does not make us loud for attention. It makes us bold for Christ.`,
  `The Church does not need more manufactured smoke. We need the fire of the Holy Spirit. We need prayer that burns. Worship that is pure. Preaching that carries truth. Discipleship that produces holiness. Lives that prove Jesus is Lord beyond Sunday.`,
  `Jesus did not die and rise again so we could have cold religion with spiritual language. He saved us to make us alive in God. He sent the Holy Spirit so we would not live powerless, ashamed, or bound by fear.`,
  `So today, do not settle for smoke. Ask God for holy fire. Ask Him to fill you again, purify you again, awaken you again, and make you a witness again. Live unashamed, not by your own strength, but by the power of the Holy Spirit.`,
];

const reflectionQuestionsWeek6 = [
  "Am I more concerned with looking spiritual than being surrendered to Jesus?",
  "What hidden area of my heart needs to be brought into the light before God?",
  "Where have I allowed religious appearance to replace repentance, obedience, and real relationship with Christ?",
];

const devotionalThoughtWeek6Week6 = [
  `Jesus goes deeper than appearance. He is not impressed by a polished outside when the heart is not surrendered to Him.`,
  `In Matthew chapter 23, Jesus confronts a religion that looked clean in public but was not healthy before God in private. That warning should sober us.`,
  `Religious appearance can make people feel safe while they avoid repentance. But the Gospel does not come to decorate the old life. The Gospel comes to make us new.`,
  `God sees what people cannot see. He sees motives, secret compromise, pride, fear, and hidden pain. But He also offers mercy to everyone who comes honestly.`,
  `Today, do not ask God only to fix what people can see. Ask Him to cleanse what only He can see. Bring the real heart to the real Savior.`,
  `Jesus does not expose the heart to destroy us. He exposes the heart to heal us, restore us, and bring us back to living faith.`,
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
                Day 2 — Clean Outside, Dead Inside
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.75 }}>
                Unashamed Week 6 Devotional · Dead Religion Can’t Save
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
                    Matthew 23:27-28 · 1 Samuel 16:7 · Revelation 3:1
                  </p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "10px" }}>Today&apos;s Challenge</p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                    Ask God to search your heart today. Confess where you have looked clean on the outside but remained unsurrendered on the inside, and choose repentance over appearance today.
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
                  Week 6 Day 2 confronts the danger of looking spiritually clean on the outside while the heart remains unsurrendered before God. Jesus calls us away from performance and into honest repentance, real surrender, and living faith.
                </p>
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
                {devotionalThoughtWeek6Week6.map((line) => (
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
                  {reflectionQuestionsWeek6.map((question) => (
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
                  Father, in the name of Jesus, thank You for searching my heart. Forgive me for hiding behind
                  outward appearance. Purify my heart and remove every mask, every hidden compromise, and every form of dead religion from my life. Let my faith be real, surrendered, obedient, and alive in Christ. I do not want to look alive while my heart is far from You. In Jesus&apos; name, amen.
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