import Image from "next/image";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

const devotionalVideoUrl =
  "https://o3hectmev11nr3rl.public.blob.vercel-storage.com/church-uploads/mX7WJHKC2GbQ0PxWk3uiHFqob55_GuQ1/18320-qcK8M45bisJX43rnIh94GtE7QxpxfQ.mp4";

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
                Day 3 — Let Him Work the Soil
              </h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.75 }}>
                Unashamed Week 11 · WOOD FOR FIRE
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
                aria-label="Unashamed Week 11 Day 3 Let Him Work the Soil devotional video"
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
                    Luke 13:6–9 · Hebrews 12:10–11 · Psalm 139:23–24
                  </p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "10px" }}>
                    Today&apos;s Challenge
                  </p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                    Read Psalm 139:23–24. Ask God to search your heart, then take one specific step of obedience
                    in an area His Word exposes.
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
                  You want your life to change. But will you let God touch what you have buried? In Luke 13,
                  the gardener asks for more time for the fruitless fig tree and commits to digging around it
                  and caring for the soil. This picture invites us to open our hearts to God&apos;s Word rather
                  than protecting the pride and sin He exposes. David asks God to search his heart and lead
                  him in the everlasting way. Hebrews 12 teaches that the Father trains His children for their
                  good, so they may share in His holiness. His correction is part of His care, not rejection.
                  Hardship does not automatically mean punishment for a specific sin. Ask God for wisdom to
                  obey. Jesus bore our sins at the cross and rose again; we are received by grace through faith
                  in Him. Our growth does not purchase our place in God&apos;s family. His Spirit works in us,
                  His Word tells us the truth, and we respond with obedience. Confess what is wrong, receive
                  correction that agrees with Scripture, ask for prayer, and take the step you have been
                  postponing. Let Him work the soil. Keep your eyes on Jesus. Live unashamed.
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
