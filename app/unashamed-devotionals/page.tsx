import Image from "next/image";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const devotionalVideoUrl =
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/YJVDq-s6rQ7blqodsr6ibV-6FqqfuxeD/43094-ypla14PHWxyrdBq2OByuSOtqQ0GJGd.mp4";

const reflectionQuestions = [
  "Where have I treated the cross like decoration instead of surrender?",
  "What part of my life still needs to be crucified with Christ?",
  "Am I willing to carry the cross publicly, not just admire it privately?",
];

const devotionalThought = [
  `The cross has become one of the most recognized symbols in the world. People wear it on necklaces. They put it on walls. They place it on church buildings. They use it as decoration, fashion, and art. But in the days of Jesus, nobody saw the cross as decoration.`,
  `The cross was not beautiful. The cross was not comfortable. The cross was not fashionable. The cross was an instrument of death. It represented shame, suffering, rejection, sacrifice, and surrender.`,
  `So when Jesus said, "Carry your own cross and follow Me," He was not inviting people into casual religion. He was calling them into total surrender. Jesus was making it clear that discipleship is not about adding Him to our lives. It is about surrendering our lives to Him.`,
  `And this is where many people struggle. They want the cross as a symbol, but not as a lifestyle. They want the cross around their neck, but not over their will. They want the cross in their church, but not in their decisions. They want the cross for forgiveness, but not for surrender.`,
  `But the cross was never meant to be decoration. The cross is the place where self-rule dies. The cross is the place where pride dies. The cross is the place where sin loses power. The cross is the place where the old life is crucified, and a new life begins.`,
  `Paul said, "My old self has been crucified with Christ. It is no longer I who live, but Christ lives in me." That is not self-improvement. That is resurrection after death. Paul is not saying he became a better version of his old life. He is saying the old self was crucified.`,
  `The old master lost authority. The old identity lost its throne. The old life was nailed to the cross with Christ. And now Christ lives in him. That is the Gospel.`,
  `Jesus did not die so we could decorate our old life with Christian language. Jesus died so we could be raised into a new life under His Lordship. The cross is not God helping us manage sin. The cross is God breaking the power of sin.`,
  `To the world, the cross looks foolish. But to the believer, the cross is power. To the world, the cross looks weak. But to the believer, the cross is victory.`,
  `Because at the cross, Jesus carried our sin. At the cross, Jesus bore our shame. At the cross, Jesus paid the debt we could never pay. At the cross, mercy and justice met. At the cross, forgiveness was purchased. At the cross, salvation was made possible.`,
  `And if Jesus carried the cross for us, then we cannot be ashamed to carry the cross after Him. Carrying your cross does not mean earning salvation. Jesus already accomplished salvation. Carrying your cross means living as someone who belongs to the One who saved you.`,
  `It means surrendering your will. It means obeying when obedience costs something. It means dying to pride, dying to compromise, dying to secret sin, dying to the approval of people, and dying to every idol that wants the place of Christ.`,
  `This is not easy. But it is necessary. Because there is no such thing as crossless discipleship. A Christianity without the cross may be comfortable, but it is powerless. A Christianity without surrender may attract fans, but it will not produce disciples.`,
  `Jesus did not say, "Carry your comfort and follow Me." He said, "Carry your cross and follow Me." The path of discipleship is not always easy. But it is always worth it. Because whatever dies at the cross is replaced by resurrection life.`,
  `When pride dies, humility is born. When compromise dies, holiness is born. When fear dies, boldness is born. When self-rule dies, surrender is born. When sin loses power, freedom begins to rise.`,
  `So today, do not treat the cross like decoration. Do not reduce it to a symbol. Do not wear it without surrendering to it. Look at the cross and remember: Jesus gave everything for you. Now the only right response is to give everything back to Him.`,
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
                Day 2 — The Cross Is Not Decoration
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.75 }}>
                Unashamed Week 4 Devotional · The Cost Of Being Unashamed
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
                    Luke 14:27 · Galatians 2:20 · 1 Corinthians 1:18
                  </p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "10px" }}>Today&apos;s Challenge</p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                    Identify one area of your life that still resists surrender, pray over it, and take one obedient step
                    today.
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
                  Lord Jesus, forgive me for the times I have admired the cross without fully surrendering to it.
                  Teach me to deny myself, carry my cross daily, and follow You with boldness. Let my life be marked
                  by Your death, Your resurrection, and Your power. Make me unashamed of the Gospel and faithful to
                  obey You. In Jesus&apos; name, amen.
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
