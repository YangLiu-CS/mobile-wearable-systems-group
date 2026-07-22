import type { Metadata } from "next";
import { newsItems } from "../data";

export const metadata: Metadata = { title: "News | Mobile and Wearable Systems Group" };

export default function NewsPage() {
  return <><section className="page-hero page-width"><p className="section-label">News</p><h1>From the group.</h1><p>Research highlights, new papers, awards, and updates from the Mobile and Wearable Systems Group.</p></section>
    <section className="news-page page-width">{newsItems.map((item, index) => <article key={item.title}><time>{item.date}</time><span className="news-number">{String(index + 1).padStart(2, "0")}</span><div><h2>{item.url ? <a href={item.url} target="_blank" rel="noreferrer">{item.title} ↗</a> : item.title}</h2><p>{item.text}</p></div></article>)}</section></>;
}
