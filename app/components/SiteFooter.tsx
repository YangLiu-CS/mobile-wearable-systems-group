import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-primary">
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark">M/W</span>
          <span className="brand-name">Mobile + Wearable<br />Systems Group</span>
        </Link>
        <p>Human-centered mobile and wearable computing<br />at Florida State University.</p>
      </div>
      <div className="footer-links">
        <Link href="/research">Research</Link><Link href="/publications">Publications</Link>
        <Link href="/people">People</Link><Link href="/news">News</Link><Link href="/join">Join us</Link>
      </div>
      <div className="footer-contact">
        <a href="mailto:yl25r@fsu.edu">yl25r@fsu.edu</a>
        <span>Tallahassee, Florida</span>
        <span>© {new Date().getFullYear()} MWS Group</span>
      </div>
    </footer>
  );
}
