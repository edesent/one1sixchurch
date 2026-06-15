import Image from "next/image";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type SubPageProps = {
  eyebrow: string;
  title: string;
  copy: string[];
  image: string;
};

export function SubPage({ eyebrow, title, copy, image }: SubPageProps) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="subpage-hero">
          <Image className="subpage-image" src={image} alt="" fill priority sizes="100vw" />
          <div className="subpage-overlay" />
          <div className="subpage-content">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            {copy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
