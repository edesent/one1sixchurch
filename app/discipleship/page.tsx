import type { Metadata } from "next";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { DiscipleshipContent } from "./DiscipleshipContent";

export const metadata: Metadata = {
  title: "Discipleship | ONE1SIX Church",
  description: "How we make disciples at ONE1SIX Church: follow Jesus, study Scripture with Unashamed Disciples, grow in prayer and community, serve Worcester, and help others follow Christ. English and Spanish.",
  alternates: { canonical: "https://www.one1sixchurch.org/discipleship" },
};

export default function DiscipleshipPage() {
  return <><SiteHeader /><DiscipleshipContent /><SiteFooter /></>;
}
