import { CheckCircle2, Clock3, MapPin, Scissors, ShieldCheck } from "lucide-react";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "./page.module.css";

export const metadata = {
  title: "Haircut Drive Check-In | ONE1SIX Church",
  description: "Official check-in for the ONE1SIX Church Back-to-School Haircut Drive.",
};

export default function CheckInPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div>
              <p className={styles.eyebrow}>
                <Scissors size={18} aria-hidden="true" /> ONE1SIX CHURCH
              </p>
              <h1>Haircut Drive Check-In</h1>
              <p className={styles.lead}>
                Welcome! Please complete one check-in for each registered child before seeing our Check-In Team.
              </p>
              <p className={styles.spanish}>
                ¡Bienvenidos! Complete un check-in por cada niño registrado antes de pasar con nuestro equipo.
              </p>
            </div>

            <div className={styles.eventCard}>
              <div>
                <Clock3 size={21} aria-hidden="true" />
                <span>10:00 AM – 3:00 PM</span>
              </div>
              <div>
                <MapPin size={21} aria-hidden="true" />
                <span>VIP Barbershop<br />168 Chandler St, Worcester, MA</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.checkinSection}>
          <div className={styles.formCard}>
            <div className={styles.formIntro}>
              <p className={styles.kicker}>OFFICIAL EVENT CHECK-IN</p>
              <h2>Check In Your Child</h2>
              <p>
                Use the same parent or guardian name used during registration. One submission is required for each child.
              </p>
            </div>

            <form className={styles.form} action="https://formsubmit.co/info@one1sixchurch.org" method="POST">
              <input type="hidden" name="_subject" value="HAIRCUT DRIVE CHECK-IN" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://one1sixchurch.org/checkin/complete" />
              <input type="hidden" name="Source" value="ONE1SIX Haircut Drive Official Check-In" />
              <input type="hidden" name="Status" value="CHECKED IN - WAITING" />

              <label>
                Parent / Guardian Full Name <b>*</b>
                <span>Nombre completo del padre, madre o encargado</span>
                <input name="Parent or Guardian" type="text" autoComplete="name" required />
              </label>

              <label>
                Child&apos;s Full Name <b>*</b>
                <span>Nombre completo del niño</span>
                <input name="Child Name" type="text" required />
              </label>

              <div className={styles.twoColumns}>
                <label>
                  Event Day <b>*</b>
                  <span>Día del evento</span>
                  <select name="Event Day" defaultValue="" required>
                    <option value="" disabled>Select day</option>
                    <option value="Saturday">Saturday / Sábado</option>
                    <option value="Sunday">Sunday / Domingo</option>
                  </select>
                </label>

                <label>
                  Time Window <b>*</b>
                  <span>Horario</span>
                  <select name="Time Window" defaultValue="" required>
                    <option value="" disabled>Select time</option>
                    <option value="10:00 AM - 12:00 PM">10:00 AM – 12:00 PM</option>
                    <option value="12:00 PM - 3:00 PM">12:00 PM – 3:00 PM</option>
                  </select>
                </label>
              </div>

              <label>
                Parent / Guardian Phone Number <b>*</b>
                <span>Número de teléfono</span>
                <input name="Phone Number" type="tel" inputMode="tel" autoComplete="tel" required />
              </label>

              <label className={styles.confirmation}>
                <input name="Check-In Confirmation" type="checkbox" value="Confirmed" required />
                <span>
                  I confirm that the child listed above is present at the event and ready to check in.
                </span>
              </label>

              <button className={styles.submitButton} type="submit">
                <CheckCircle2 size={22} aria-hidden="true" /> CHECK IN NOW
              </button>

              <p className={styles.privacyNote}>
                <ShieldCheck size={18} aria-hidden="true" />
                Information is used only to coordinate this ONE1SIX community event.
              </p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
