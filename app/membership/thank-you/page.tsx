import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "../../_components/SiteFooter";
import { SiteHeader } from "../../_components/SiteHeader";
import styles from "../page.module.css";

export const metadata = {
  title: "Form Received | ONE1SIX Church",
  description: "Your ONE1SIX Church membership connection form has been received.",
};

export default function MembershipThankYouPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.thankYouWrap}>
        <section className={styles.thankYouCard}>
          <CheckCircle2 size={58} strokeWidth={1.7} aria-hidden="true" />
          <h1>We received it!</h1>
          <p>
            Thank you for taking the next step toward becoming part of the ONE1SIX Church family. Your Membership Connection Form has been received.
          </p>
          <p className={styles.spanishCopy}>
            Gracias por dar el próximo paso para ser parte de la familia de ONE1SIX Church. Hemos recibido su Formulario de Conexión de Membresía.
          </p>
          <div className={styles.nextStep}>
            <strong>What happens next? · ¿Qué sucede ahora?</strong>
            Pastor Jobeth or a member of our pastoral team will contact you to arrange a pastoral conversation. Submitting the form begins the process; membership is confirmed after that conversation.
          </div>
          <Link className={styles.backLink} href="/start-here">
            <ArrowLeft size={18} aria-hidden="true" /> Return to Start Here
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
