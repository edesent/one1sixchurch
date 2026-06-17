import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

export default function WhoIs116Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="who116-section">
          <div className="who116-inner">
            <div className="who116-copy">
              <p className="eyebrow">Who Is One1Six</p>

              <h1 className="who116-title">
                A Church For The Imperfect,
                <br />
                Pursuing The Perfect Savior.
              </h1>

              <p className="who116-lead">
                One1Six Church is a Gospel-centered family built for real people with real stories, real struggles,
                and a real need for Jesus.
              </p>

              <p>
                We are not a church for people pretending to have it all together. We are a church for the broken,
                the searching, the wounded, the overlooked, and the one who knows there has to be more.
              </p>

              <p>
                We believe church should be more than a weekly gathering. It should be a place where lives are
                transformed, faith is strengthened, families are restored, and people encounter the presence of God in
                a real and life-changing way.
              </p>

              <p>
                We are unashamed of the Gospel of Jesus Christ. Romans 1:16 is not just a verse we quote — it is the
                conviction we live by.
              </p>

              <div className="who116-lines">
                <p>We preach God&apos;s Word without compromise.</p>
                <p>We love people without pretending sin does not matter.</p>
                <p>We raise disciples who live with bold faith, biblical truth, and unwavering devotion to Christ.</p>
              </div>

              <div className="who116-statements">
                <p>This is more than a church service.</p>
                <p>This is a family pursuing Jesus together.</p>
              </div>

              <p className="who116-slogan">
                One Church For The One,
                <br />
                A Family For The Six.
              </p>

              <div className="who116-cta">
                <Link className="outline-button" href="/contact-us">
                  Plan Your Visit <ArrowRight size={18} />
                </Link>

                <Link className="red-button" href="/unashamed-devotionals">
                  Watch Devotionals <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="who116-visual" aria-hidden="true">
              <div className="who116-image-card">
                <Image
                  src="/worship-red.png"
                  alt=""
                  width={900}
                  height={1400}
                  className="who116-image"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
