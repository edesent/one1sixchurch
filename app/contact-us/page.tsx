import Image from "next/image";

import { ContactForm } from "../_components/ContactForm";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";

export default function ContactUsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="subpage-hero contact-hero">
          <Image className="subpage-image" src="/contact-desk.png" alt="" fill priority sizes="100vw" />
          <div className="subpage-overlay" />
          <div className="subpage-content">
            <p className="eyebrow">Contact Us</p>
            <h1>Need prayer, have questions, or want to plan your visit?</h1>
            <p>Gather with us this Sunday at 1:00 PM. We are currently gathering in Worcester, MA.</p>
            <p>Email one1sixchurch@gmail.com to get this week&apos;s exact location, send a prayer request, ask a question, or take your next step.</p>
          </div>
        </section>

        <section className="contact-page-section">
          <div className="contact-page-inner">
            <div className="contact-page-copy">
              <p className="eyebrow">Connect With ONE1SIX</p>
              <h2>Send us a message.</h2>
              <p>Use the form below for prayer, questions, or this week&apos;s gathering location.</p>
            </div>
            <ContactForm source="Contact Us Page" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
