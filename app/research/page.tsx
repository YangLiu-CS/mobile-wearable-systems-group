import type { Metadata } from "next";
import Link from "next/link";
import { researchAreas } from "../data";

export const metadata: Metadata = { title: "Research | Mobile and Wearable Systems Group" };

export default function ResearchPage() {
  return <><section className="page-hero page-width"><p className="section-label">Research</p><h1>Human-centered sensing in the real world.</h1><p>We combine sensing, systems, and AI to build mobile and wearable technologies that are useful beyond the lab.</p></section>
    <section className="research-page page-width">{researchAreas.map(area => <article className="research-detail" id={area.slug} key={area.slug}><div className="research-side"><span>{area.number}</span><div className={`area-icon icon-${area.number}`}><i /></div></div><div className="research-main"><h2>{area.title}</h2><p className="research-summary">{area.summary}</p><p>{area.description}</p><div className="research-media"><img src={area.image} alt={`${area.title} projects and systems`} />{area.videos.map((video, index) => <video key={video} autoPlay muted loop playsInline preload="metadata" aria-label={`${area.title} demo ${index + 1}`}><source src={video} type="video/mp4" /></video>)}</div><div className="research-columns"><div><h3>Topics</h3><ul>{area.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></div><div><h3>Representative systems</h3><ul>{area.projects.map(project => <li key={project}>{project}</li>)}</ul></div></div></div></article>)}</section>
    <section className="page-cta"><div className="page-width"><div><p className="section-label light">Explore the outcomes</p><h2>See the research in print.</h2></div><Link className="button button-accent" href="/publications">View publications <span>→</span></Link></div></section></>;
}
