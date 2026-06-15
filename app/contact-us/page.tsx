import { SubPage } from "../_components/SubPage";

export default function ContactUsPage() {
  return (
    <SubPage
      eyebrow="Contact Us"
      title="Need prayer, have questions, or want to plan your visit?"
      image="/contact-desk.png"
      copy={[
        "Email info@one1sixchurch.org or join us Sundays at 1:00 pm in Worcester, Massachusetts.",
        "We would be honored to pray with you, answer questions, and help you take your next step.",
      ]}
    />
  );
}
