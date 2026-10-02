import type { Metadata } from "next";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { PastoralProfile } from "./PastoralProfile";

export const metadata: Metadata = {
  title: "Our Leaders | Pastor Jobeth & Mary | ONE1SIX Church",
  description:
    "Meet Jobeth and Wilmary (Mary) Pacheco, lead pastors of ONE1SIX Church in Worcester, MA. Discover their heart for Jesus, discipleship, and community.",
};

export default function OurLeadersPage() {
  return (
    <>
      <SiteHeader />
      <PastoralProfile />
      <SiteFooter />
    </>
  );
}
