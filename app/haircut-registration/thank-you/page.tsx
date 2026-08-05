import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "../../_components/SiteFooter";
import { SiteHeader } from "../../_components/SiteHeader";
import styles from "../page.module.css";

export default function HaircutRegistrationThankYouPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>ONE1SIX Community Outreach</p>
              <h1>Registration Received</h1>
            </div>
          </div>
        </section>

        <section className={styles.registrationSection}>
          <div className={styles.thankYouCard}>
            <CheckCircle2 size={58} aria-hidden="true" />
            <h1>Thank you!</h1>
            <p>
              We received your child&apos;s registration request. This is not a confirmed appointment yet. The ONE1SIX team will contact you with the assigned date, time, and location details.
            </p>
            <p>
              Recibimos la solicitud de registro. Nuestro equipo se comunicará con usted para confirmar la fecha, hora y lugar.
            </p>
            <Link className={styles.backLink} href="/haircut-registration">
              Register Another Child
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
