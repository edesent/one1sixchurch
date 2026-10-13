import Image from "next/image";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const devotionalVideoUrl =
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/O2J3ePnGW6QVcXKEW8MUt6JjpC83BhX9/19304-vSQpMXuzKQR1EG0humJF9SqsZdmCHL.mp4";

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
                Day 2 — Your “Amen” Is Not Enough
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.75 }}>
                Unashamed Week 12 · WHAT ARE YOU BUILDING ON?
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
                aria-label="Unashamed Week 12 Day 2 Your Amen Is Not Enough devotional video"
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
                    James 1:22–25 · Matthew 7:24–27
                  </p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "10px" }}>
                    Today&apos;s Challenge
                  </p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                    Read James 1:22–25. Identify one truth you have heard but resisted, then take one specific
                    action today that puts it into practice.
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
                  Your “Amen” says you heard Him. Your next decision shows whether you are putting His
                  words into practice. James compares hearing without acting to looking in a mirror and
                  walking away forgetting what you have seen. God&apos;s Word exposes our condition and
                  calls us to respond. Both builders in Matthew 7 hear Jesus, but only one obeys His
                  teaching. Knowing Scripture is not the same as living by it. Bring your excuses to
                  Jesus, confess what you have defended, and receive His mercy. Jesus obeyed the Father
                  perfectly, died for our sins, and rose again. We are saved by grace through faith;
                  obedience cannot purchase forgiveness. By His Spirit, we learn a new way of living.
                  Let the truth shape how you speak, how you treat people, and what you choose next.
                  Let your “Amen” be followed by a faithful step. Keep your eyes on Jesus.
                  Stand firm on truth. Live unashamed.
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
