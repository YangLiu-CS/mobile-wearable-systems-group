import Link from "next/link";
import { newsItems, researchAreas } from "./data";
import { DemoWall } from "./components/DemoWall";

export default function Home() {
  return (
    <>
      <section className="home-hero-video">
        <div className="home-hero-layout page-width">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Florida State University · Computer Science</p>
            <h1>Human-centered mobile and wearable computing.</h1>
            <p className="hero-lede">We develop sensing systems and computational methods for understanding human behavior, monitoring health and wellness, and supporting interaction with the physical world.</p>
            <div className="button-row"><Link className="button button-dark" href="/research">Research <span>→</span></Link></div>
          </div>
          <DemoWall />
        </div>
      </section>

      <section className="home-about section-pad page-width">
        <div><p className="section-label">About</p><h2>Mobile and Wearable Systems Group</h2></div>
        <div className="about-copy">
          <p>Our research lies at the intersection of wearable sensing, mobile computing, and artificial intelligence. We investigate fundamental sensing and systems questions and translate them into technologies that operate reliably in everyday environments. <strong>Our goal is to design and develop mobile computing technologies that intelligently respond to real-world needs and meaningfully improve quality of life.</strong></p>
          <nav className="principles" aria-label="Research topics">
            <Link href="/research#behavior">Human behavior sensing <span>→</span></Link>
            <Link href="/research#wellness">Health &amp; wellness monitoring <span>→</span></Link>
            <Link href="/research#interaction">Physical-world interaction <span>→</span></Link>
          </nav>
          <Link className="button button-dark about-publications" href="/publications">FSU publications <span>→</span></Link>
        </div>
      </section>

      <section className="home-research section-pad">
        <div className="page-width"><div className="section-top"><div><p className="section-label">Research</p><h2>Research areas</h2></div><Link className="inline-link" href="/research">Research overview →</Link></div>
          <div className="area-grid media-area-grid">{researchAreas.map(area => <Link className="area-card media-area-card" href={`/research#${area.slug}`} key={area.slug}><div className="area-card-image"><img src={area.image} alt={`${area.title} research overview`} /></div><div className="area-card-body"><span className="card-number">{area.number}</span><h3>{area.title}</h3><p>{area.summary}</p><span className="card-link">Explore area →</span></div></Link>)}</div>
        </div>
      </section>

      <section className="home-updates section-pad page-width">
        <div className="updates-news"><div className="section-top compact"><div><p className="section-label">News</p><h2>News</h2></div><Link className="inline-link" href="/news">News archive →</Link></div>
          <div className="home-news-list">{newsItems.map(item => <article key={item.title}><time>{item.date}</time><div><h3>{item.url ? <a href={item.url} target="_blank" rel="noreferrer">{item.title} ↗</a> : item.title}</h3><p>{item.text}</p></div></article>)}</div>
        </div>
        <aside className="recruit-card"><p className="section-label">Prospective students</p><h2>Work with us</h2><p>We welcome inquiries from students interested in mobile systems, wearable sensing, and human-centered computing.</p><ul><li>Volunteer/unpaid research internships: Fall 2026</li><li>PhD admissions: Spring/Fall 2027</li></ul><Link className="inline-link" href="/join">Application information →</Link></aside>
      </section>
    </>
  );
}
