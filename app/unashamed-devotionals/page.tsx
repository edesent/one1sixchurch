import Image from "next/image";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const devotionalVideoUrl =
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/1lyTeFxr_EARA9YQKufDsN4-w4dhwK5G/45060-hfLl0fx33cjQ90mMBSxStkBIeOu4Zd.mp4";

const devotionalThought = [
  "You can have the form and still miss the fire.",
  "You can have the language and still lack the life.",
  "You can have the routine and still be far from God.",
  "Second Timothy chapter 3 warns us about people who have a form of godliness but deny its power. That means they look spiritual. They sound spiritual. They know how to move around spiritual things. But the power of God is not ruling the heart.",
  "The power to repent. The power to surrender. The power to obey. The power to be transformed.",
  "That is dangerous. Because dead religion does not always look dead at first.",
  "Sometimes it sings. Sometimes it serves. Sometimes it posts Scriptures. Sometimes it says amen. But when Jesus calls for surrender, it resists. When Jesus confronts sin, it excuses. When Jesus demands obedience, it negotiates.",
  "That is form without fire.",
  "Isaiah chapter 29 says the people honored God with their lips, but their hearts were far from Him.",
  "And that is the heart-check today. Are my lips close, but my heart far? Do I know how to worship in public, but ignore conviction in private? Do I want God’s blessings, but not God’s correction?",
  "Because the fire of God is not decoration. The fire of God purifies. The fire of God exposes. The fire of God consumes what does not belong. And real Christianity is not just having a church rhythm. It is having a surrendered heart.",
  "But here is the mercy of Jesus. He does not confront empty religion because He hates us. He confronts it because He loves us.",
  "He calls us out of performance and back into presence. He calls us out of routine and back into repentance. He calls us out of pretending and back into truth.",
  "Jesus did not die so we could act alive. Jesus died and rose again so we could be made alive. Not almost alive. Not religiously alive. Truly alive.",
  "Alive by grace. Alive through repentance. Alive in obedience. Alive in the Spirit.",
  "So today, do not settle for form. Ask God for fire. Not emotional hype. Not fake passion. Holy fire.",
  "The kind that burns away pride. The kind that brings back prayer. The kind that restores hunger. The kind that makes the heart say, Jesus, I do not want religion without You.",
];

const reflectionQuestions = [
  "Where have I kept the form of godliness while resisting the power of God to change me?",
  "Are there areas where my lips honor God, but my heart is distant from Him?",
  "What needs to be burned away so the fire of God can burn rightly in me?",
];

const prayerLines = [
  "Father, in the name of Jesus, I do not want empty religion.",
  "I do not want form without fire.",
  "I do not want lips that sound close while my heart lives far.",
  "Search me. Convict me. Correct me. Bring me back to You.",
  "Burn away pride. Burn away performance. Burn away secret compromise. Burn away anything that looks spiritual but keeps me from surrender.",
  "Thank You for loving me enough to confront me. Thank You for calling me deeper. Thank You for not leaving me empty.",
  "Fill me with Your Spirit. Restore holy hunger. Teach me to obey. Make my faith real in public and in private.",
  "In Jesus’ name. Amen.",
];

const beforeYouGo = [
  "Dead religion wants the appearance without the altar.",
  "But real faith lays everything down before Jesus.",
  "Do not protect what God is trying to purify.",
  "Let Him light the fire again.",
];

const rememberLines = [
  "Form cannot save you.",
  "Image cannot change you.",
  "Routine cannot resurrect you.",
  "Only Jesus can.",
  "Come back to the altar.",
  "Come back to surrender.",
  "Come back to obedience.",
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
                Day 2 — Form Without Fire
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
                    2 Timothy 3:5 · Isaiah 29:13
                  </p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "10px" }}>Today&apos;s Challenge</p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                    Before the day ends, spend ten quiet minutes with God. No music. No distractions. No performance.
                    Ask Him this: Father, where have I had form without fire? Then respond with one act of obedience today.
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
                  Form Without Fire confronts the danger of having spiritual appearance without surrendered power.
                  God is calling us away from empty routine and back into holy fire, repentance, obedience, and real life
                  in Jesus.
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
                  Thank you for joining us for Day 2 of the Unashamed Week 6 Devotional.
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
