import { Scissors, ShieldCheck, Users } from "lucide-react";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "./page.module.css";

export default function HaircutRegistrationPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <Scissors size={18} aria-hidden="true" /> Free Community Event
              </p>
              <h1>Back-to-School Haircut Drive</h1>
              <p className={styles.lead}>
                ONE1SIX Church, in collaboration with VIP Barbershop, is providing free back-to-school haircuts for children in our community.
              </p>
              <p className={styles.spanish}>
                ONE1SIX Church, en colaboración con VIP Barbershop, ofrecerá recortes gratuitos para los niños de nuestra comunidad.
              </p>
            </div>

            <aside className={styles.spotsCard} aria-label="Event capacity">
              <Users size={30} aria-hidden="true" />
              <strong>19 Spots Available</strong>
              <span>Limited availability — registration required</span>
            </aside>
          </div>
        </section>

        <section className={styles.registrationSection}>
          <div className={styles.formCard}>
            <div className={styles.formIntro}>
              <p className={styles.eyebrowDark}>Child Registration</p>
              <h2>Request a haircut appointment</h2>
              <p>
                Complete one form for each child. Submitting this form does not automatically confirm an appointment. Our team will contact you with the assigned date, time, and location details.
              </p>
              <p className={styles.formIntroSpanish}>
                Complete un formulario por cada niño. Nuestro equipo se comunicará con usted para confirmar la fecha, hora y lugar.
              </p>
            </div>

            <form className={styles.form} action="https://formsubmit.co/info@one1sixchurch.org" method="POST">
              <input type="hidden" name="_subject" value="New Back-to-School Haircut Registration" />
              <input
                type="hidden"
                name="_autoresponse"
                value={`Blessings,\n\nThank you for registering your child for the ONE1SIX Church Back-to-School Haircut Drive. We have received your registration request.\n\nPlease remember that submitting the form does not automatically confirm a specific appointment time. Our team will contact you with your child's assigned time and final event details.\n\nEvent: Saturday, August 29, 2026 | 10:00 AM–3:00 PM\n\nONE1SIX CHURCH | UNASHAMED\nOne Church For The One, A Family For The Six.\ninfo@one1sixchurch.org\none1sixchurch.org`}
              />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value="https://one1sixchurch.org/haircut-registration/thank-you" />
              <input type="hidden" name="Source" value="ONE1SIX Haircut Drive Registration Page" />

              <fieldset className={styles.fieldset}>
                <legend>
                  <span>01</span>
                  Parent or Guardian Information
                  <small>Información del padre, madre o encargado</small>
                </legend>

                <div className={styles.twoColumns}>
                  <label>
                    Full Name <b>*</b>
                    <input name="Parent or Guardian Name" type="text" autoComplete="name" required />
                  </label>

                  <label>
                    Phone Number <b>*</b>
                    <input name="Phone Number" type="tel" inputMode="tel" autoComplete="tel" required />
                  </label>
                </div>

                <label>
                  Email Address <span>Optional</span>
                  <input name="Email Address" type="email" inputMode="email" autoComplete="email" />
                </label>
              </fieldset>

              <fieldset className={styles.fieldset}>
                <legend>
                  <span>02</span>
                  Child Information
                  <small>Información del niño</small>
                </legend>

                <label>
                  Child&apos;s Full Name <b>*</b>
                  <input name="Child Name" type="text" required />
                </label>

                <div className={styles.twoColumns}>
                  <label>
                    Child&apos;s Age <b>*</b>
                    <input name="Child Age" type="number" min="4" max="13" inputMode="numeric" required />
                  </label>

                  <label>
                    Grade for 2026–2027 <b>*</b>
                    <select name="Grade" required defaultValue="">
                      <option value="" disabled>Select grade</option>
                      <option>Kindergarten</option>
                      <option>1st Grade</option>
                      <option>2nd Grade</option>
                      <option>3rd Grade</option>
                      <option>4th Grade</option>
                      <option>5th Grade</option>
                      <option>6th Grade</option>
                    </select>
                  </label>
                </div>

                <label>
                  Preferred Time Window <b>*</b>
                  <select name="Preferred Time Window" required defaultValue="">
                    <option value="" disabled>Select a preference</option>
                    <option value="Morning — 10:00 AM to 12:00 PM">Morning — 10:00 AM to 12:00 PM</option>
                    <option value="Afternoon — 12:00 PM to 3:00 PM">Afternoon — 12:00 PM to 3:00 PM</option>
                    <option value="No preference">No preference / Cualquier hora</option>
                  </select>
                  <small>The exact appointment time will be assigned by our team.</small>
                </label>

                <label>
                  Anything Our Team Should Know? <span>Optional</span>
                  <textarea
                    name="Notes"
                    rows={4}
                    maxLength={500}
                    placeholder="Accessibility needs, haircut considerations, or other helpful information."
                  />
                </label>
              </fieldset>

              <label className={styles.agreement}>
                <input name="Agreement" type="checkbox" value="I understand and agree" required />
                <span>
                  I understand that this form is a registration request and not a confirmed appointment. A parent or responsible adult must remain with the child during the haircut.
                </span>
              </label>

              <button className={styles.submitButton} type="submit">
                Submit Registration
              </button>

              <p className={styles.privacyNote}>
                <ShieldCheck size={19} aria-hidden="true" />
                Your information will only be used to coordinate this community event.
              </p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
