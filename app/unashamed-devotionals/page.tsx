import Image from "next/image";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const devotionalVideoUrl =
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/nn9TDMhfqDIrMrm93lth8uu9DWu8Biu-/43480-GREDLalDyNMi7u76J9y7v7fcEd68i8.mp4";

const reflectionQuestions = [
  "Where am I tempted to look back after Jesus has called me forward?",
  "What old habit, comfort, relationship, or fear keeps trying to pull my heart backward?",
  "What obedient step can I take today that says, 'Jesus, there is no turning back'?",
];

const devotionalThought = [
  `There comes a moment in the life of every disciple where following Jesus requires a decision: will I keep walking forward, or will I keep looking back?`,
  `Jesus said, "Anyone who puts a hand to the plow and then looks back is not fit for the Kingdom of God." Those are strong words. Jesus was not being cruel. He was being clear. A divided heart cannot plow a straight line.`,
  `In the ancient world, a person plowing a field had to keep their eyes forward. If they kept looking behind them, the line would become crooked. Jesus used that picture to show us something spiritual: you cannot follow Him faithfully while your heart keeps turning back to what He delivered you from.`,
  `Looking back is dangerous because it makes the past look safer than obedience. It makes Egypt look better than the wilderness. It makes bondage look familiar and surrender look too costly.`,
  `But the truth is this: everything God brought you out of was never meant to become your home again. The old life may call your name, but it no longer owns your identity. The past may speak loudly, but Jesus speaks with authority.`,
  `No turning back does not mean the road will always be easy. It means Christ is worthy even when the road is hard. It means we keep walking when emotions change, when people misunderstand, when obedience costs, and when the flesh wants comfort.`,
  `Faith is not proven only when the music is loud and the room is full. Faith is proven when the road gets quiet and you still keep following Jesus.`,
  `Hebrews tells us that we are not of those who shrink back and are destroyed, but of those who have faith and preserve their souls. That means the life of a believer is not a retreat. It is a forward walk of faith.`,
  `There will be moments when compromise invites you back. Fear will invite you back. Old habits will invite you back. People pleasing will invite you back. But the disciple of Jesus must learn to say, "I have decided to follow Christ, and I am not going back."`,
  `This is not about pride or self-strength. We do not keep going because we are strong enough by ourselves. We keep going because Jesus is faithful, the Holy Spirit empowers us, and the grace of God sustains us.`,
  `The same Jesus who calls you forward also gives you strength to keep walking. He does not call you to carry the cross and then abandon you on the road. He walks with His people. He strengthens weak hands. He restores weary hearts. He gives endurance to those who trust Him.`,
  `The Gospel reminds us that Jesus did not turn back from the cross. He set His face toward Jerusalem. He endured rejection, suffering, shame, and death because He came to save sinners and glorify the Father.`,
  `If Jesus did not turn back from the cross for us, then we cannot turn back from following Him because the road becomes uncomfortable. The cross before us and the world behind us. Christ is better. Christ is enough. Christ is worth it all.`,
  `Today, let this be more than a phrase. Let it become a declaration of surrender. No turning back to dead things. No turning back to compromise. No turning back to fear. No turning back to living ashamed.`,
  `Keep your eyes on Jesus. Keep your hands on the plow. Keep walking in faith. The road may cost you something, but the One you follow is greater than anything you left behind. No turning back.`,
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
                Day 5 — No Turning Back
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
                    Luke 9:62 · Hebrews 10:38-39 · Romans 1:16
                  </p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "10px" }}>Today&apos;s Challenge</p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                    Identify one thing that keeps pulling your heart backward. Pray over it, surrender it to Jesus,
                    and take one clear step forward in obedience today.
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
                  Lord Jesus, forgive me for the times I have looked back after You called me forward. Strengthen my
                  heart to follow You with full surrender. Break the pull of old habits, old fears, old compromises,
                  and old identities. Help me keep my eyes on You, my hands on the plow, and my life rooted in Your
                  Gospel. No turning back. In Jesus&apos; name, amen.
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
