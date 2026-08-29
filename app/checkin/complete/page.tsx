import { CheckCircle2, MapPin, Users } from "lucide-react";

import { SiteFooter } from "../../_components/SiteFooter";
import { SiteHeader } from "../../_components/SiteHeader";
import styles from "./page.module.css";

export const metadata = {
  title: "Check-In Complete | ONE1SIX Church",
};

export default function CheckInCompletePage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.card}>
          <div className={styles.iconWrap}>
            <CheckCircle2 size={54} aria-hidden="true" />
          </div>
          <p className={styles.eyebrow}>ONE1SIX CHURCH</p>
          <h1>Check-In Complete!</h1>
          <p className={styles.lead}>
            Your child has been checked in for the Haircut Drive.
          </p>
          <p className={styles.spanish}>
            ¡El check-in de su niño ha sido completado!
          </p>

          <div className={styles.nextStep}>
            <Users size={23} aria-hidden="true" />
            <div>
              <strong>Next Step</strong>
              <span>Please see the ONE1SIX Check-In Team and let them know you completed online check-in.</span>
            </div>
          </div>

          <div className={styles.location}>
            <MapPin size={20} aria-hidden="true" />
            <span>VIP Barbershop · 168 Chandler St, Worcester, MA</span>
          </div>

          <p className={styles.tagline}>THIS IS CHURCH TOO! ❤️</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
