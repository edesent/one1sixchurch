import Image from "next/image";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const devotionalVideoUrl =
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/YJVDq-s6rQ7blqodsr6ibV-6FqqfuxeD/43094-ypla14PHWxyrdBq2OByuSOtqQ0GJGd.mp4";

const reflectionQuestions = [
  "Where have I tried to follow Jesus without letting it cost me anything?",
  "What am I still holding back from the Lord?",
  "Am I willing to obey Jesus even if it costs comfort, approval, or convenience?",
];

const devotionalThought = [
  `We live in a world that loves discounts. People wait for sales, coupons, deals, and clearance prices. Everybody wants the value without the full cost. And if we are not careful, we can bring that same mindset into our walk with Jesus.`,
  `We can want forgiveness without repentance. We can want heaven without surrender. We can want blessing without obedience. We can want Jesus as Savior, but resist Jesus as Lord.`,
  `But Jesus never offered discounted discipleship. He never lowered the cost to keep the crowd. He never softened the call to make people comfortable. He loved people deeply, but He told them the truth clearly.`,
  `In Luke 14, Jesus turned to the crowds and spoke words that were hard to hear. He said that whoever does not carry his own cross and follow Him cannot be His disciple. That is not casual Christianity. That is total surrender.`,
  `Jesus was not trying to build a crowd of excited fans. He was calling surrendered followers. A fan wants proximity without sacrifice. A disciple follows even when obedience costs something.`,
  `This does not mean we earn salvation. Salvation is a gift of grace through faith in Jesus Christ. We could never pay for our own forgiveness. We could never purchase our own redemption. Jesus paid the price completely through His death and resurrection.`,
  `But the grace that saves us also transforms us. The Gospel is free, but it is not cheap. It cost Jesus His blood. And when that grace truly reaches the heart, it does not leave us unchanged.`,
  `No discounted discipleship means we stop trying to negotiate the terms of following Jesus. We do not come to Christ with conditions. We come with surrender. We do not say, "Lord, I will follow You as long as it does not affect my comfort." We say, "Lord, my life belongs to You."`,
  `There are things that cannot remain on the throne when Jesus is Lord. Pride has to come down. Secret sin has to come down. People pleasing has to come down. Compromise has to come down. Self-rule has to come down.`,
  `The rich young ruler wanted eternal life, but he did not want to release what ruled his heart. He came close to Jesus, but he walked away sorrowful because the cost touched his idol. That is the danger of wanting discipleship at a discount.`,
  `Jesus is not one more addition to our lives. He is Lord over our lives. We do not add Him to our plans and ask Him to bless what we refuse to surrender. We lay everything before Him and trust that what He asks from us is nothing compared to what He gives in Himself.`,
  `Following Jesus may cost approval. It may cost comfort. It may cost certain relationships. It may cost old habits, old desires, old labels, and old identities. But whatever obedience costs, Christ is worth more.`,
  `A discounted gospel produces shallow faith. But true discipleship produces roots, endurance, holiness, boldness, and love. It forms people who can stand when culture shifts, when feelings change, and when the crowd walks away.`,
  `Today, do not ask Jesus for the cheapest version of Christianity. Ask Him for the real thing. Ask Him for a faith that follows, a heart that surrenders, and a life that says yes even when yes has a cost.`,
  `Because the cost of following Jesus is real, but the cost of not following Him is greater. And the reward of belonging fully to Christ is worth everything.`
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
                Day 3 — No Discounted Discipleship
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
                    Luke 14:27 · Luke 14:33 · Romans 1:16
                  </p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "10px" }}>Today&apos;s Challenge</p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                    Ask the Lord to show you one area where you have wanted comfort without surrender. Then take one
                    obedient step today without negotiating the cost.
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
                  Lord Jesus, forgive me for the times I have wanted a discounted version of discipleship. Forgive me
                  for wanting Your benefits while resisting Your Lordship. Teach me to surrender fully, obey boldly,
                  and follow You without shame. Remove every idol, every excuse, and every compromise from my heart.
                  I belong to You. In Jesus&apos; name, amen.
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
