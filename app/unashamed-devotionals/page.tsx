import Image from "next/image";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const devotionalVideoUrl =
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/foaw_YPiLJsQbtp4a7Py97LAAouKza7K/43873-8noLJsVrk1Cfd073d8if6RvCIzpkZT.mp4";

const reflectionQuestions = [
  "Am I offering God true worship, or am I offering Him something shaped by pride, convenience, or performance?",
  "Where have I confused emotional fire with holy fire?",
  "What area of my worship, obedience, or private life needs to be surrendered back to the Lord today?",
];

const devotionalThought = [
  `Not every fire is holy fire. That is a hard truth, but it is a necessary truth. In Leviticus chapter 10, Nadab and Abihu offered unauthorized fire before the Lord. It looked like worship, but God rejected it because it was not commanded by Him.`,
  `They were close to holy things, but their closeness did not excuse disobedience. They stood near the altar, wore priestly garments, and handled spiritual responsibility, but they treated the presence of God casually.`,
  `That should sober us. It is possible to be around worship and still miss reverence. It is possible to be near the altar and still carry the wrong fire. It is possible to use spiritual language while offering God something He never asked for.`,
  `Strange fire is fire that may look passionate but is not surrendered. It may look intense but is not obedient. It may look impressive to people but is not pleasing to God.`,
  `This is why Jesus said the Father is seeking worshipers who worship in spirit and in truth. Not just spirit without truth. Not just emotion without obedience. Not just sound without surrender. God is looking for worship that is alive by the Spirit and anchored in the truth.`,
  `Holy fire does not begin with performance. Holy fire begins with surrender. It is born in reverence, shaped by obedience, and purified by the presence of God.`,
  `The danger of strange fire is that it can feel powerful while still being polluted. Pride can burn. Ambition can burn. Offense can burn. Attention-seeking can burn. Religious performance can burn. But just because something burns does not mean it is holy.`,
  `The question is not only, "Do I have fire?" The deeper question is, "Where did this fire come from?" Did it come from the Holy Spirit, or did it come from my flesh? Did it come from obedience, or did it come from image? Did it come from surrender, or did it come from pride?`,
  `God is not against passion. He created holy passion. He gives zeal. He fills His people with boldness. But passion without submission becomes dangerous. Fire without holiness becomes strange fire.`,
  `This is not a call to become cold. This is a call to burn right. The answer to strange fire is not no fire. The answer is holy fire. Fire that is submitted to Scripture. Fire that bows before Jesus. Fire that refuses to entertain sin while claiming to love God.`,
  `Jesus did not die so we could offer God religious performance. He died to reconcile us to the Father, cleanse us from sin, and make us living sacrifices. At the cross, our false worship is exposed, and through the resurrection, our hearts are made new.`,
  `So today, do not just ask God to make you passionate. Ask Him to make you pure. Do not just ask Him to make you bold. Ask Him to make you obedient. Do not just ask Him for fire. Ask Him for holy fire.`,
  `Let the Lord confront anything that looks spiritual but is not surrendered. Let Him expose every false motive, every prideful offering, every empty routine, and every place where worship has become performance.`,
  `God is too holy to be played with, but He is also too merciful to leave us in false fire. He corrects because He loves. He purifies because He is faithful. He calls us back because He wants our whole heart.`,
  `Live unashamed, but do not live careless. Burn for Jesus, but burn holy. Let your worship be real, your obedience be honest, and your fire come from the Spirit of God.`,
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
                Day 3 — Strange Fire Is Still Fire, But It Is Not Holy
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.75 }}>
                Unashamed Week 5 Devotional · No Smoke Without Fire
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
                    Leviticus 10:1-3 · John 4:23-24 · Romans 1:16
                  </p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "10px" }}>Today&apos;s Challenge</p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                    Ask God to reveal any strange fire in your heart. Surrender one area where passion, pride, or
                    performance has replaced true obedience and worship.
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
                  Father, in the name of Jesus, purify my worship. Forgive me for every place where I have offered
                  You passion without obedience, noise without surrender, or performance without reverence. Remove every
                  strange fire from my heart and fill me with holy fire by Your Spirit. Teach me to worship in spirit and
                  in truth. Let my life honor You in public and in private. In Jesus&apos; name, amen.
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
