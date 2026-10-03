import { MessageCircle } from "lucide-react";
import styles from "./WhatsAppContact.module.css";

const message = "Hello / Hola, I would like to connect with ONE1SIX Church.";

export function WhatsAppContact() {
  return (
    <a
      className={styles.contact}
      href={`https://wa.me/17742321064?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Pastor Joe on WhatsApp / Habla con el Pastor Joe por WhatsApp (opens WhatsApp)"
    >
      <MessageCircle size={26} strokeWidth={2} aria-hidden="true" />
      <span>
        <strong>Need to talk?</strong>
        <span lang="es">¿Necesitas hablar?</span>
        <small>WhatsApp · Pastor Joe</small>
      </span>
    </a>
  );
}
