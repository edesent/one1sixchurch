import { Send } from "lucide-react";

type ContactFormProps = {
  source?: string;
};

export function ContactForm({ source = "Website Contact Form" }: ContactFormProps) {
  return (
    <form className="prayer-form" action="https://formsubmit.co/one1sixchurch@gmail.com" method="POST">
      <input type="hidden" name="_subject" value="New One1Six Church Prayer Request / Visitor Message" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="box" />
      <input type="hidden" name="_next" value="https://one1sixchurch.org/contact-us" />
      <input type="hidden" name="Source" value={source} />

      <label>
        Name
        <input name="name" type="text" required />
      </label>
      <label>
        Email Address
        <input name="email" type="email" required />
      </label>
      <label>
        Phone Number <span>Optional</span>
        <input name="phone" type="tel" />
      </label>
      <label>
        Prayer Request / Message
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit">
        Connect With Us <Send size={18} />
      </button>
    </form>
  );
}
