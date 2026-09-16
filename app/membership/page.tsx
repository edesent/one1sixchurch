import {
  ArrowRight,
  CheckCircle2,
  Church,
  HandHeart,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "./page.module.css";

export const metadata = {
  title: "Membership | ONE1SIX Church",
  description:
    "Begin the bilingual membership process at ONE1SIX Church in Worcester, Massachusetts.",
};

const serviceAreas = [
  ["Worship", "Adoración"],
  ["Hospitality & Welcome", "Hospitalidad y bienvenida"],
  ["UNASHAMED Kids", "Ministerio de niños"],
  ["Outreach", "Alcance comunitario"],
  ["Media & Production", "Medios y producción"],
  ["Prayer", "Oración"],
  ["Discipleship", "Discipulado"],
  ["Administration", "Administración"],
];

export default function MembershipPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div>
              <p className={styles.eyebrow}>
                <Users size={18} aria-hidden="true" /> Your Next Step · Tu Próximo Paso
              </p>
              <h1>
                Welcome to the <span>family.</span>
              </h1>
              <p className={styles.lead}>
                Membership at ONE1SIX is more than adding your name to a list. It is choosing to follow Jesus, grow in community, and serve His mission together.
              </p>
              <p className={styles.spanish}>
                Ser miembro de ONE1SIX es mucho más que añadir su nombre a una lista. Es decidir seguir a Jesús, crecer en comunidad y servir juntos en Su misión.
              </p>
            </div>

            <aside className={styles.processCard}>
              <Church size={32} aria-hidden="true" />
              <strong>One Church For The One, A Family For The Six.</strong>
              <span>Una iglesia para el uno, una familia para el seis.</span>
            </aside>
          </div>
        </section>

        <section className={styles.process}>
          <div className={styles.processIntro}>
            <p className={styles.eyebrowDark}>How It Works · Cómo Funciona</p>
            <h2>Membership begins with connection.</h2>
            <p>
              Submitting this form begins the membership process. It does not automatically establish membership. After we receive it, Pastor Jobeth or a member of our pastoral team will contact you for a pastoral conversation.
            </p>
            <p className={styles.muted}>
              Enviar este formulario inicia el proceso de membresía, pero no establece automáticamente la membresía. Después de recibirlo, el Pastor Jobeth o un miembro del equipo pastoral se comunicará con usted para una conversación pastoral.
            </p>
          </div>

          <div className={styles.steps}>
            <article><span>01</span><CheckCircle2 /><h3>Complete the Form</h3><p>Complete el formulario</p></article>
            <article><span>02</span><MessageCircle /><h3>Pastoral Conversation</h3><p>Conversación pastoral</p></article>
            <article><span>03</span><HeartHandshake /><h3>Welcome to the Family</h3><p>Bienvenido a la familia</p></article>
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.formCard}>
            <div className={styles.formIntro}>
              <p className={styles.eyebrowDark}>Membership Connection Form</p>
              <h2>Let&apos;s get to know you.</h2>
              <p>Formulario de Conexión de Membresía · Queremos conocerle.</p>
            </div>

            <form className={styles.form} action="https://formsubmit.co/info@one1sixchurch.org" method="POST">
              <input type="hidden" name="_subject" value="New ONE1SIX Membership Connection Form" />
              <input
                type="hidden"
                name="_autoresponse"
                value={`Blessings,\n\nThank you for taking the next step toward becoming part of the ONE1SIX Church family. We have received your Membership Connection Form. Submitting this form begins the membership process but does not automatically establish membership. Pastor Jobeth or a member of our pastoral team will contact you for a pastoral conversation.\n\nBendiciones,\n\nGracias por dar el próximo paso para ser parte de la familia de ONE1SIX Church. Hemos recibido su Formulario de Conexión de Membresía. Enviar este formulario inicia el proceso, pero no establece automáticamente la membresía. El Pastor Jobeth o un miembro de nuestro equipo pastoral se comunicará con usted para una conversación pastoral.\n\nONE1SIX CHURCH | UNASHAMED\nOne Church For The One, A Family For The Six.\none1sixchurch.org`}
              />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value="https://one1sixchurch.org/membership/thank-you" />
              <input type="hidden" name="Source" value="ONE1SIX Membership Connection Page" />

              <fieldset className={styles.fieldset}>
                <legend>
                  <span>01</span>
                  Contact Information
                  <small>Información de contacto</small>
                </legend>

                <div className={styles.twoColumns}>
                  <label>
                    Full Name / Nombre Completo <b>*</b>
                    <input name="Full Name" type="text" autoComplete="name" required />
                  </label>
                  <label>
                    Phone Number / Teléfono <b>*</b>
                    <input name="Phone Number" type="tel" inputMode="tel" autoComplete="tel" required />
                  </label>
                </div>

                <div className={styles.twoColumns}>
                  <label>
                    Email Address / Correo Electrónico <b>*</b>
                    <input name="email" type="email" inputMode="email" autoComplete="email" required />
                  </label>
                  <label>
                    Preferred Language / Idioma Preferido <b>*</b>
                    <select name="Preferred Language" required defaultValue="">
                      <option value="" disabled>Select / Seleccione</option>
                      <option>English</option>
                      <option>Español</option>
                      <option>English & Español</option>
                    </select>
                  </label>
                </div>

                <label>
                  Address / Dirección <span>Optional · Opcional</span>
                  <input name="Address" type="text" autoComplete="street-address" />
                </label>
              </fieldset>

              <fieldset className={styles.fieldset}>
                <legend>
                  <span>02</span>
                  Family & Connection
                  <small>Familia y conexión</small>
                </legend>

                <div className={styles.twoColumns}>
                  <label>
                    Marital Status / Estado Civil <b>*</b>
                    <select name="Marital Status" required defaultValue="">
                      <option value="" disabled>Select / Seleccione</option>
                      <option>Single / Soltero(a)</option>
                      <option>Married / Casado(a)</option>
                      <option>Engaged / Comprometido(a)</option>
                      <option>Divorced / Divorciado(a)</option>
                      <option>Widowed / Viudo(a)</option>
                      <option>Prefer not to say / Prefiero no contestar</option>
                    </select>
                  </label>
                  <label>
                    Spouse&apos;s Name / Nombre del Cónyuge <span>Optional · Opcional</span>
                    <input name="Spouse Name" type="text" />
                  </label>
                </div>

                <label>
                  Children or Household Members / Hijos o Miembros del Hogar <span>Optional · Opcional</span>
                  <textarea name="Children or Household Members" rows={3} maxLength={600} placeholder="Names and ages if you would like to share / Nombres y edades si desea compartir" />
                </label>

                <div className={styles.twoColumns}>
                  <label>
                    How Long Have You Attended ONE1SIX? / ¿Cuánto Tiempo Lleva Asistiendo? <b>*</b>
                    <select name="Time Attending ONE1SIX" required defaultValue="">
                      <option value="" disabled>Select / Seleccione</option>
                      <option>First visit / Primera visita</option>
                      <option>Less than 1 month / Menos de 1 mes</option>
                      <option>1–3 months / 1–3 meses</option>
                      <option>More than 3 months / Más de 3 meses</option>
                      <option>Since the beginning / Desde el comienzo</option>
                    </select>
                  </label>
                  <label>
                    How Did You Hear About Us? / ¿Cómo Supo de Nosotros?
                    <input name="How They Heard About ONE1SIX" type="text" />
                  </label>
                </div>
              </fieldset>

              <fieldset className={styles.fieldset}>
                <legend>
                  <span>03</span>
                  Your Faith Journey
                  <small>Su caminar de fe</small>
                </legend>

                <label>
                  Have You Accepted Jesus Christ as Your Lord and Savior? / ¿Ha Aceptado a Jesucristo Como Su Señor y Salvador? <b>*</b>
                  <select name="Salvation" required defaultValue="">
                    <option value="" disabled>Select / Seleccione</option>
                    <option>Yes / Sí</option>
                    <option>No / No</option>
                    <option>I am not sure / No estoy seguro(a)</option>
                    <option>I would like to talk about it / Quisiera hablar sobre esto</option>
                  </select>
                </label>

                <label>
                  Have You Been Baptized in Water After Believing in Jesus? / ¿Ha Sido Bautizado en Agua Después de Creer en Jesús? <b>*</b>
                  <select name="Water Baptism" required defaultValue="">
                    <option value="" disabled>Select / Seleccione</option>
                    <option>Yes / Sí</option>
                    <option>No / No</option>
                    <option>I am not sure / No estoy seguro(a)</option>
                    <option>I am interested in baptism / Me interesa bautizarme</option>
                  </select>
                </label>

                <label>
                  Tell Us Briefly About Your Faith Journey / Cuéntenos Brevemente Sobre Su Caminar de Fe <span>Optional · Opcional</span>
                  <textarea name="Faith Journey" rows={5} maxLength={1200} />
                </label>
              </fieldset>

              <fieldset className={styles.fieldset}>
                <legend>
                  <span>04</span>
                  Serve & Grow
                  <small>Servir y crecer</small>
                </legend>

                <p className={styles.fieldPrompt}>Where would you like to serve or learn more? / ¿Dónde le gustaría servir o recibir más información?</p>
                <div className={styles.checkGrid}>
                  {serviceAreas.map(([english, spanish]) => (
                    <label className={styles.checkOption} key={english}>
                      <input name="Areas of Interest" type="checkbox" value={english} />
                      <span><strong>{english}</strong><small>{spanish}</small></span>
                    </label>
                  ))}
                </div>

                <label>
                  Discipleship or Spiritual Growth Needs / Necesidades de Discipulado o Crecimiento Espiritual <span>Optional · Opcional</span>
                  <textarea name="Discipleship Needs" rows={4} maxLength={800} />
                </label>
              </fieldset>

              <fieldset className={styles.fieldset}>
                <legend>
                  <span>05</span>
                  Pastoral Care
                  <small>Cuidado pastoral</small>
                </legend>

                <label>
                  Prayer Request or Pastoral Care Need / Petición de Oración o Necesidad Pastoral <span>Optional · Opcional</span>
                  <textarea name="Prayer or Pastoral Care Need" rows={5} maxLength={1200} />
                </label>

                <label>
                  Best Way to Contact You / Mejor Manera de Contactarle <b>*</b>
                  <select name="Preferred Contact Method" required defaultValue="">
                    <option value="" disabled>Select / Seleccione</option>
                    <option>Phone call / Llamada</option>
                    <option>Text message / Mensaje de texto</option>
                    <option>Email / Correo electrónico</option>
                    <option>In person after service / En persona después del servicio</option>
                  </select>
                </label>
              </fieldset>

              <label className={styles.agreement}>
                <input name="Membership Process Acknowledgment" type="checkbox" value="I understand and agree" required />
                <span>
                  <strong>I understand that submitting this form begins the membership process and does not automatically make me a member. I agree to be contacted for a pastoral conversation.</strong>
                  <small>Entiendo que enviar este formulario inicia el proceso y no me convierte automáticamente en miembro. Acepto ser contactado(a) para una conversación pastoral.</small>
                </span>
              </label>

              <label className={styles.agreement}>
                <input name="Communication Consent" type="checkbox" value="I consent" required />
                <span>
                  <strong>I give ONE1SIX Church permission to contact me regarding membership, church activities, and pastoral care.</strong>
                  <small>Autorizo a ONE1SIX Church a contactarme sobre membresía, actividades de la iglesia y cuidado pastoral.</small>
                </span>
              </label>

              <button className={styles.submitButton} type="submit">
                Begin My Membership Process <ArrowRight size={20} aria-hidden="true" />
              </button>

              <p className={styles.privacyNote}>
                <ShieldCheck size={19} aria-hidden="true" />
                Your information will be used only for church communication, membership follow-up, and pastoral care.
              </p>
              <p className={styles.privacySpanish}>
                Su información será utilizada únicamente para comunicación de la iglesia, seguimiento de membresía y cuidado pastoral.
              </p>
            </form>
          </div>

          <aside className={styles.sideMessage}>
            <HandHeart size={34} aria-hidden="true" />
            <p>“So we, though many, are one body in Christ, and individually members one of another.”</p>
            <strong>Romans 12:5</strong>
            <span>Romanos 12:5</span>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
