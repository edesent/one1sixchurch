import { SubPage } from "../_components/SubPage";

export default function ContactUsPage() {
  return (
    <SubPage
      eyebrow="Contact Us"
      title="Need prayer, have questions, or want to plan your visit?"
      image="/contact-desk.png"
      copy={[
        "Gather with us this Sunday at 1:00 PM. We are currently gathering in Worcester, MA.",
        "Email info@one1sixchurch.org to get this week's exact location, send a prayer request, ask a question, or take your next step.",
      ]}
    />
  );
}
