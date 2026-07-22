import Link from "next/link";

const navItems = [
  ["Research", "/research"],
  ["Publications", "/publications"],
  ["People", "/people"],
  ["News", "/news"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Mobile and Wearable Systems Group home">
        <span className="brand-mark">M/W</span>
        <span className="brand-name">Mobile + Wearable<br />Systems Group</span>
      </Link>
      <nav aria-label="Main navigation">
        {navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
      </nav>
      <Link className="nav-cta" href="/join">Join us <span aria-hidden="true">↗</span></Link>
    </header>
  );
}
