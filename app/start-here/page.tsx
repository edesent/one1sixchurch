import { ArrowRight, BookOpen, CircleDollarSign, HandHeart, HeartHandshake, PlayCircle, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import styles from "./start-here.module.css";

const steps = [
  { title:"Prayer", copy:"Share what you are carrying and let our church family stand with you.", href:"/#prayer", icon:HeartHandshake },
  { title:"Devotionals", copy:"Grow in the Word through UNASHAMED devotionals and Wednesday Bible Study from 7:00 PM to 8:00 PM.", href:"/unashamed-devotionals", icon:BookOpen },
  { title:"Groups", copy:"Find community, discipleship, and people who will walk with you.", href:"mailto:info@one1sixchurch.org?subject=ONE1SIX%20Groups", icon:Users },
  { title:"Give", copy:"Partner with the mission as we proclaim the Gospel and serve Worcester.", href:"https://venmo.com/u/One1SixChurch", icon:CircleDollarSign, external:true },
  { title:"Outreach", copy:"Join Outreach Night every Tuesday from 7:00 PM to 8:00 PM.", href:"/meals-of-love", icon:HandHeart },
  { title:"Watch + Listen", copy:"Watch sermons, devotionals, worship moments, and ministry content.", href:"https://youtube.com/@one1sixchurch", icon:PlayCircle, external:true },
];

export const metadata = {
  title:"Start Here | ONE1SIX Church",
  description:"Visit, connect, grow, pray, give, and find your next step at ONE1SIX Church in Worcester, Massachusetts.",
};

export default function StartHerePage(){
  return <>
    <SiteHeader />
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image className={styles.heroImage} src="/start-here-sanctuary.jpg" alt="ONE1SIX Church sanctuary in Worcester" fill priority sizes="100vw" />
        <div className={styles.heroShade} />
        <div className={styles.heroInner}>
          <p className={styles.label}>ONE1SIX CHURCH · WORCESTER, MA</p>
          <h1>WHERE DO YOU<br /><span>START?</span></h1>
          <p>Whether this is your first Sunday or your next step in faith, everything you need is right here.</p>
        </div>
      </section>

      <section className={styles.firstVisit}>
        <div>
          <Sparkles size={32} strokeWidth={1.8} />
          <p className={styles.label}>NEW TO ONE1SIX?</p>
          <h2>YOUR FIRST VISIT<br /><span>STARTS HERE.</span></h2>
          <p>Find our Sunday schedule, 1048 Main St location, what to expect, and how we will personally welcome you.</p>
        </div>
        <Link href="/plan-your-visit">Plan Your Visit <ArrowRight size={19} /></Link>
      </section>

      <section className={styles.directory}>
        <div className={styles.heading}>
          <div><p className={styles.label}>NEXT STEPS</p><h2>FIND YOUR<br /><span>PLACE.</span></h2></div>
          <p>Choose what you need today. Each path takes you directly to the right place.</p>
        </div>
        <div className={styles.grid}>
          {steps.map(({title,copy,href,icon:Icon,external},index)=>{
            const body=<><div className={styles.cardTop}><span>0{index+1}</span><Icon size={27} strokeWidth={1.8}/></div><h3>{title}</h3><p>{copy}</p><div className={styles.cardLink}>Go Now <ArrowRight size={17}/></div></>;
            return external||href.startsWith("mailto:")?<a className={styles.card} href={href} key={title} target={external?"_blank":undefined} rel={external?"noreferrer":undefined}>{body}</a>:<Link className={styles.card} href={href} key={title}>{body}</Link>;
          })}
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
