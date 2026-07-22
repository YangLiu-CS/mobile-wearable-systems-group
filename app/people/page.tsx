import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "People | Mobile and Wearable Systems Group" };
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PeoplePage() {
  return <><section className="page-hero page-width"><p className="section-label">People</p><h1>Meet the group.</h1><p>We are building a collaborative team around mobile systems, wearable sensing, and human-centered computing.</p></section>
    <section className="people-page page-width"><article className="director-card"><div className="director-photo"><img src={`${basePath}/yang-liu.jpg`} alt="Yang Liu" /></div><div className="director-info"><p className="section-label">Principal Investigator</p><h2>Yang Liu</h2><p className="role">Assistant Professor · Department of Computer Science<br />Florida State University</p><p>Yang&apos;s research sits at the intersection of wearable sensing, mobile computing, and artificial intelligence. Before joining FSU, he was a Senior Research Associate and Affiliated Lecturer at the University of Cambridge.</p><div className="profile-links"><a href="https://yangliu-cs.github.io/" target="_blank" rel="noreferrer">Personal website ↗</a><a href="https://scholar.google.com.sg/citations?user=-qnqDmcAAAAJ" target="_blank" rel="noreferrer">Google Scholar ↗</a><a href="mailto:yl25r@fsu.edu">Email ↗</a></div></div></article>
      <section className="students-section"><div className="section-top"><div><p className="section-label">Students</p><h2>Graduate researchers</h2></div></div><div className="student-grid"><a className="student-card" href="https://nancy-gaoo.github.io/" target="_blank" rel="noreferrer"><div className="student-photo"><img src={`${basePath}/people/linlu-gao.jpg`} alt="Linlu Nancy Gao" /></div><div><p>PhD Student</p><h3>Linlu (Nancy) Gao</h3><span>Mobile health · HCI · Ubiquitous computing</span><b>Personal website ↗</b></div></a><a className="student-card" href="https://xianchen-26.github.io/" target="_blank" rel="noreferrer"><div className="student-initial">XL</div><div><p>PhD Student</p><h3>Xianchen Liu</h3><span>Wearable sensing · Mobile systems · Human-centered AI</span><b>Personal website ↗</b></div></a></div></section>
      <div className="team-note"><span>Growing the team</span><div><h2>Work with us</h2><p>We welcome people who care about strong systems research and meaningful real-world impact.</p><Link className="button button-dark" href="/join">View openings <span>→</span></Link></div></div>
    </section></>;
}
