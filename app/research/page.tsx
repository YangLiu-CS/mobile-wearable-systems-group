import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { DemoWall } from "../components/DemoWall";
import { behaviorPapers, interactionPapers, wellnessPapers, type ResearchPaper } from "./papers";

export const metadata: Metadata = { title: "Research | Mobile and Wearable Systems Group" };
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Citation({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function ResearchSection({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <article className="research-detail" id={id}>
    <div className="research-side"><span>{number}</span></div>
    <div className="research-main"><h2>{title}</h2>{children}</div>
  </article>;
}

function PaperGallery({ papers }: { papers: ResearchPaper[] }) {
  return <div className="paper-mosaic" aria-label="Related publications">
    {papers.map((paper, index) => paper.companion
      ? <div className="paper-tile paper-tile-group" role="group" key={`${paper.venue}-${index}`} aria-label={`${paper.title} and ${paper.companion.title}`}>
          <img src={`${basePath}${paper.image}`} alt="" />
          <div className="paper-tile-overlay paper-pair-overlay">
            <span className="paper-pair-label">Conference + extended journal</span>
            <a className="paper-tile-paper" href={paper.href} target="_blank" rel="noreferrer"><small>{paper.venue}</small><strong>{paper.title}</strong></a>
            <a className="paper-tile-paper" href={paper.companion.href} target="_blank" rel="noreferrer"><small>{paper.companion.venue}</small><strong>{paper.companion.title}</strong></a>
          </div>
        </div>
      : <a className="paper-tile" href={paper.href} target="_blank" rel="noreferrer" key={`${paper.venue}-${index}`} aria-label={`${paper.title} — ${paper.venue}`} title={paper.title}>
          <img src={`${basePath}${paper.image}`} alt="" />
          <span className="paper-tile-overlay"><small>{paper.venue}</small><strong>{paper.title}</strong><i>Open paper ↗</i></span>
        </a>)}
  </div>;
}

export default function ResearchPage() {
  return <>
    <section className="page-hero page-width">
      <p className="section-label">Research</p>
      <h1>Human-centered sensing in the real world.</h1>
      <p>We combine sensing, systems, and AI to build mobile and wearable technologies that are useful beyond the lab.</p>
      <div className="research-overview">
        <div className="research-overview-figure">
          <img src={`${basePath}/media/vision.png`} alt="Research overview connecting data acquisition, intelligence, well-being, and feedback through the human-digital interface" />
        </div>
        <DemoWall compact />
      </div>
    </section>

    <section className="research-page page-width">
      <ResearchSection id="behavior" number="01" title="Human Behavior Sensing">
        <p>To enable ubiquitous, practical, and user-friendly perception models, this research explores the full potential of existing wearable sensors (devices) to perceive and understand human behaviors [<Citation href="https://yangliu-cs.github.io/YangLiu-CS/ArmTroi.html">MobiSys’19</Citation>, <Citation href="https://yangliu-cs.github.io/YangLiu-CS/WR-Hand.html">IMWUT’21</Citation>, <Citation href="https://ieeexplore.ieee.org/document/10623717">TMC’24</Citation>, <Citation href="https://dl.acm.org/doi/epdf/10.1145/3774906.3802770">SenSys’26</Citation>]. Rather than relying on excessive sensor deployment to cover all to-be-sensed areas of the human body, this line of work investigates a central question: Is it possible to perceive and understand fine-grained human behaviors using as few wearable sensors (devices) as possible?</p>
        <PaperGallery papers={behaviorPapers} />
      </ResearchSection>

      <ResearchSection id="wellness" number="02" title="Human Wellness Monitoring">
        <p>This research gathers insights into human health [<Citation href="https://dl.acm.org/doi/pdf/10.1145/3615592.3616854">SmartWear’23</Citation>, <Citation href="https://dl.acm.org/doi/10.1145/3675094.3680521">EarComp’24</Citation>, <Citation href="https://dl.acm.org/doi/pdf/10.1145/3662009.3662023">BodySys’24</Citation>, <Citation href="https://www.sciencedirect.com/science/article/pii/S1574119224000397">Pervasive and Mobile Computing Journal’24</Citation>, <Citation href="https://dl.acm.org/doi/pdf/10.1145/3659607">IMWUT’24</Citation>, <Citation href="https://arxiv.org/abs/2406.16148">NeurIPS’24</Citation>, <Citation href="https://mobile-systems.cl.cam.ac.uk/papers/respear.pdf">PerCom’25 Best Paper Award</Citation>, <Citation href="https://mobile-systems.cl.cam.ac.uk/papers/walkear.pdf">PerCom’25</Citation>, <Citation href="https://dl.acm.org/doi/pdf/10.1145/3706598.3713893">CHI’25</Citation>, <Citation href="https://mobile-systems.cl.cam.ac.uk/papers/earmeter25.pdf">IMWUT’25</Citation>, <Citation href="https://mobile-systems.cl.cam.ac.uk/papers/hearforce25.pdf">IMWUT’25</Citation>, <Citation href="https://mobile-systems.cl.cam.ac.uk/papers/embc25-jordan.pdf">EMBC’25</Citation>, <Citation href="https://dl.acm.org/doi/pdf/10.1145/3737901.3768363">ACM IASA’25</Citation>, <Citation href="https://dl.acm.org/doi/pdf/10.1145/3714394.3757255">ACM EarComp’25</Citation>, <Citation href="https://www.nature.com/articles/s41467-026-75642-0_reference.pdf">Nature Communications’26</Citation>, <Citation href="https://mobile-systems.cl.cam.ac.uk/papers/earcalo26.pdf">ACM HotMobile’26</Citation>, <Citation href="https://api.repository.cam.ac.uk/server/api/core/bitstreams/988bc231-b440-4013-9f69-d08ac504f7a2/content">JAB’26</Citation>, <Citation href="https://dl.acm.org/doi/epdf/10.1145/3774906.3802785">ACM SenSys’26</Citation>, <Citation href="https://dl.acm.org/doi/epdf/10.1145/3774906.3802763">ACM SenSys’26</Citation>, <Citation href="https://mobile-systems.cl.cam.ac.uk/papers/imwut-jake26.pdf">ACM IMWUT’26</Citation>]. It primarily leverages earphones as versatile tools for tracking human wellness in diverse, real-world settings—enabling robust physiological and fitness monitoring and promoting healthier lifestyles. The work theoretically establishes and quantifies the relationships between physiological activities and biosignals collected near the ears, including acoustic and motion signals, and conducts in-depth analyses of interactions between physiological systems to uncover critical insights into their complex dynamics. These insights support the decoupling of intricate biosignals and the development of robust methods for accurate, non-invasive wellness monitoring.</p>
        <PaperGallery papers={wellnessPapers} />
      </ResearchSection>

      <ResearchSection id="interaction" number="03" title="Interaction with Physical World">
        <p>This research also seeks to enhance human interactions with the physical world. First, by leveraging human-ambience interactions, it enables the capture and preservation of information about physical objects within digital spaces [<Citation href="https://yangliu-cs.github.io/YangLiu-CS/paper/2019-TOSN-Aware.pdf">TOSN’19</Citation>, <Citation href="https://dl.acm.org/doi/abs/10.1145/3745756.3809222">MobiSys’26</Citation>]. Second, it develops and implements natural interaction technologies—such as gaze tracking via smartphones [<Citation href="https://yangliu-cs.github.io/YangLiu-CS/paper/2022-SenSys-ASGaze.pdf">SenSys’22</Citation>, <Citation href="https://ieeexplore.ieee.org/document/10638728">TMC’24</Citation>] and sign language translation using smartwatches [<Citation href="https://yangliu-cs.github.io/YangLiu-CS/paper/2022-Infocom-GASLA.pdf">INFOCOM’22</Citation>, <Citation href="https://scholars.cityu.edu.hk/files/194313689/182780309.pdf">TMC’24</Citation>]—to create more seamless and accessible ways for humans to engage with their surroundings. In addition, the work reveals and demonstrates critical privacy leakage issues that arise during interactions with the physical world, serving as a timely warning to the public [<Citation href="https://yangliu-cs.github.io/YangLiu-CS/paper/2018-INFOCOM-aLeak.pdf">INFOCOM’18</Citation>, <Citation href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8718344">TMC’19</Citation>, <Citation href="https://yangliu-cs.github.io/YangLiu-CS/paper/2020-ICDCS-TapLeak.pdf">ICDCS’20</Citation>, <Citation href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9658138&tag=1">TMC’21</Citation>]. To address these concerns, a secure authentication system has been proposed to enhance user privacy and strengthen security [<Citation href="https://dl.acm.org/doi/pdf/10.1145/3594739.3610670">EarComp’23 Best Paper</Citation>, <Citation href="https://dl.acm.org/doi/pdf/10.1145/3737901.3768367">ACM IASA’25</Citation>].</p>
        <PaperGallery papers={interactionPapers} />
      </ResearchSection>
    </section>

    <section className="page-cta"><div className="page-width"><div><p className="section-label light">Explore the outcomes</p><h2>See the research in print.</h2></div><Link className="button button-accent" href="/publications">View publications <span>→</span></Link></div></section>
  </>;
}
