import type { Metadata } from "next";
import { SubPage } from "../_components/SubPage";

export const metadata: Metadata = {
  title: "Our Beliefs | ONE1SIX Church",
  description:
    "Discover the foundation of ONE1SIX Church in Worcester, Massachusetts: God the Father, Son, and Holy Spirit, Jesus Christ at the center, and the authority of Scripture.",
};

export default function TheFoundationPage() {
  return (
    <SubPage
      eyebrow="The Foundation"
      title="Christ is the head of the church."
      image="/contact-desk.png"
      copy={[
        "God the Father, God the Son, and God the Holy Spirit stand at the center of everything ONE1SIX believes, teaches, and lives.",
        "Without Christ there is no Gospel to preach, no lives to transform, no disciples to make, and no hope for humanity.",
      ]}
    />
  );
}
