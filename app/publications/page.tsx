import type { Metadata } from "next";
import { publications } from "../data";

export const metadata: Metadata = { title: "Publications | Mobile and Wearable Systems Group" };

export default function PublicationsPage() {
  const years = [...new Set(publications.map(p => p.year))];
  return <><section className="page-hero page-width"><p className="section-label">Publications</p><h1>Publications from FSU.</h1><p>Work published or accepted since the group was established at Florida State University.</p><div className="publication-note"><b>*</b> Corresponding author</div><a className="inline-link" href="https://yangliu-cs.github.io/publications/" target="_blank" rel="noreferrer">Yang Liu&apos;s complete publication list ↗</a></section>
    <section className="publications-page page-width">{years.map(year => <div className="year-group" key={year}><h2>{year}</h2><div className="publication-list">{publications.filter(p => p.year === year).map(paper => <article key={paper.title}><div className="pub-figure"><img src={paper.image} alt={`Representative visual for ${paper.title}`} /></div><div className="pub-copy"><div className="pub-meta"><span>{paper.venue}</span><span>{paper.year}</span></div><h3>{paper.title}</h3><p className="pub-authors">{paper.authors.split(", ").map((author, index, authors) => <span key={author}>{paper.correspondingAuthors.includes(author) ? <strong className="corresponding-author">{author}<sup>*</sup></strong> : author}{index < authors.length - 1 ? ", " : ""}</span>)}</p>{paper.resources.length > 0 && <div className="pub-resources">{paper.resources.map(resource => <a key={resource.label} href={resource.url} target="_blank" rel="noreferrer">{resource.label} ↗</a>)}</div>}</div></article>)}</div></div>)}</section></>;
}
