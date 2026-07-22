import type { Metadata } from "next";
import { publications } from "../data";

export const metadata: Metadata = { title: "Publications | Mobile and Wearable Systems Group" };

export default function PublicationsPage() {
  const years = [...new Set(publications.map(p => p.year))];
  return <><section className="page-hero page-width"><p className="section-label">Publications</p><h1>Publications from FSU.</h1><p>Work published or accepted since the group was established at Florida State University.</p><a className="inline-link" href="https://yangliu-cs.github.io/publications/" target="_blank" rel="noreferrer">Yang Liu&apos;s complete publication list ↗</a></section>
    <section className="publications-page page-width">{years.map(year => <div className="year-group" key={year}><h2>{year}</h2><div className="publication-list">{publications.filter(p => p.year === year).map((paper, index) => <article key={paper.title}><span className="pub-index">{String(index + 1).padStart(2, "0")}</span><div><div className="pub-meta"><span>{paper.venue}</span><span>{paper.year}</span></div><h3>{paper.title}</h3><p>{paper.authors}</p><div className="pub-resources">{paper.resources.map(resource => <a key={resource.label} href={resource.url} target="_blank" rel="noreferrer">{resource.label} ↗</a>)}</div></div></article>)}</div></div>)}</section></>;
}
