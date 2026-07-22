import type { Metadata } from "next";

export const metadata: Metadata = { title: "Join Us | Mobile and Wearable Systems Group" };

export default function JoinPage() {
  return <><section className="page-hero join-hero page-width"><p className="section-label">Join the group</p><h1>Prospective students and researchers.</h1><p>We welcome students interested in mobile systems, wearable sensing, embedded AI, mobile health, HCI, privacy, and security.</p><a className="button button-dark" href="mailto:yl25r@fsu.edu">Contact Yang Liu <span>↗</span></a></section>
    <section className="join-page page-width"><div className="join-intro"><p className="section-label">Opportunities</p><div><h2>Research internships and PhD study</h2><p>Volunteer/unpaid research internships are available for Fall 2026. We also welcome prospective PhD applicants for Spring or Fall 2027 admission.</p></div></div>
      <div className="join-grid"><article><span>01</span><h3>What we value</h3><ul><li>Curiosity about real human problems</li><li>Strong systems or technical foundations</li><li>Independent thinking and collaboration</li><li>Care for clear communication</li></ul></article><article><span>02</span><h3>How to apply</h3><p>Email Yang with a short introduction describing your research interests. Please include your CV and academic transcripts.</p><a className="inline-link" href="mailto:yl25r@fsu.edu">yl25r@fsu.edu ↗</a></article><article><span>03</span><h3>Where we are</h3><p>Department of Computer Science<br />Florida State University<br />Tallahassee, Florida, USA</p><a className="inline-link" href="https://www.cs.fsu.edu/" target="_blank" rel="noreferrer">FSU Computer Science ↗</a></article></div>
    </section></>;
}
