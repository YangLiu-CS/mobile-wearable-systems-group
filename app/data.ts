const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const researchAreas = [
  {
    slug: "behavior",
    number: "01",
    title: "Human Behavior Sensing",
    summary: "Practical and user-friendly systems that understand fine-grained human behavior with fewer wearable devices.",
    description: "We explore the full potential of sensors already embedded in everyday wearables. Our goal is to perceive complex human motion and behavior without requiring excessive sensors across the body.",
    topics: ["Arm and hand tracking", "Gait and activity analysis", "Earable motion sensing"],
    projects: ["WR-Hand", "ImpactEar", "WalkEar"],
    image: `${basePath}/media/behavior.png`,
    videos: [],
  },
  {
    slug: "wellness",
    number: "02",
    title: "Health & Wellness Monitoring",
    summary: "Wearable/earable and mobile systems for continuous physiological, fitness, and lifestyle monitoring in the real world.",
    description: "We study how acoustic, inertial, and physiological signals collected near the ear relate to human health. These insights enable robust, non-invasive monitoring during everyday activities.",
    topics: ["Cardiorespiratory sensing", "Fitness and biomechanics", "Lifestyle and nutrition"],
    projects: ["RespEar", "EarSleeve", "NutriEar"],
    image: `${basePath}/media/health.png`,
    videos: ["https://yangliu-cs.github.io/images/demo%20videos/work.mp4", "https://yangliu-cs.github.io/images/demo%20videos/run.mp4"],
  },
  {
    slug: "interaction",
    number: "03",
    title: "Interaction with the Physical World",
    summary: "Natural interaction technologies that connect people, mobile devices, and the environments around them.",
    description: "We develop accessible interaction methods—from smartphone gaze tracking to smartwatch-based sign language translation—while identifying and mitigating privacy risks in cyber-physical systems.",
    topics: ["Natural interaction", "Accessible computing", "Privacy and security"],
    projects: ["Gaze tracking", "GASLA", "EarPass"],
    image: `${basePath}/media/interaction.png`,
    videos: ["https://yangliu-cs.github.io/images/demo%20videos/type.mp4", "https://yangliu-cs.github.io/images/demo%20videos/guess.mp4"],
  },
];

export const publications = [
  { year: "2026", venue: "ACM IMWUT · Accepted", title: "ImpactEar: Cross Activity Ground Reaction Force Estimation using Earable IMUs", authors: "Jake Stuchbury-Wass, Mathias Ciliberto, Qiang Yang, Kayla-Jade Butkow, Yang Liu, Tobias Röddiger, Dong Ma, Ezio Preatoni, Cecilia Mascolo", correspondingAuthors: [], image: `${basePath}/publications/impactear.png`, resources: [] },
  { year: "2026", venue: "ACM IMWUT", title: "A Survey of Earable Technology: Trends, Tools, and the Road Ahead", authors: "Changshuo Hu, Qiang Yang, Yang Liu, Tobias Röddiger, Kayla-Jade Butkow, Mathias Ciliberto, Adam Luke Pullin, Jake Stuchbury-Wass, Mahbub Hassan, Cecilia Mascolo, Dong Ma", correspondingAuthors: [], image: `${basePath}/publications/earable-survey.png`, resources: [{ label: "PDF", url: "https://dl.acm.org/doi/pdf/10.1145/3810217" }, { label: "DOI", url: "https://dl.acm.org/doi/10.1145/3810217" }] },
  { year: "2026", venue: "ACM MobiSys", title: "Reliable Metal Foreign Object Detection for Mobile Wireless Charging via Harmonic Fingerprinting", authors: "Shenyao Jiang, Yang Liu, Lixiang Han, Xinyu Wang, Hao Zhou, Zhenjiang Li", correspondingAuthors: [], image: `${basePath}/publications/harmonic-fingerprinting.png`, resources: [{ label: "PDF", url: "https://dl.acm.org/doi/pdf/10.1145/3745756.3809222" }, { label: "DOI", url: "https://dl.acm.org/doi/10.1145/3745756.3809222" }] },
  { year: "2026", venue: "ACM SenSys", title: "EarSleeve: Transforming Everyday Earphones into a 12-Lead ECG Sensing Platform", authors: "Junxi Xia, Doğaç Eldenk, Hongjun Xu, Yang Liu, Stephen Xia", correspondingAuthors: ["Yang Liu", "Stephen Xia"], image: `${basePath}/publications/earsleeve.png`, resources: [{ label: "PDF", url: "https://dl.acm.org/doi/epdf/10.1145/3774906.3802785" }, { label: "DOI", url: "https://dl.acm.org/doi/10.1145/3774906.3802785" }] },
  { year: "2026", venue: "ACM SenSys", title: "NutriEar: Robust Nutrition-Aware Food Classification from In-Ear Acoustic Signals", authors: "Zoey Xiaochen Tan, Yang Liu, Kayla-Jade Butkow, Cecilia Mascolo", correspondingAuthors: [], image: `${basePath}/publications/nutriear.png`, resources: [{ label: "PDF", url: "https://mobile-systems.cl.cam.ac.uk/papers/sensys26.pdf" }, { label: "DOI", url: "https://dl.acm.org/doi/10.1145/3774906.3802763" }] },
  { year: "2026", venue: "ACM SenSys", title: "NeuroPath: Practically Adopting Motor Imagery Decoding through EEG Signals", authors: "Jiani Cao, Kun Wang, Yang Liu, Zhenjiang Li", correspondingAuthors: ["Yang Liu", "Zhenjiang Li"], image: `${basePath}/publications/neuropath.png`, resources: [{ label: "PDF", url: "https://dl.acm.org/doi/epdf/10.1145/3774906.3802770" }, { label: "Preprint", url: "https://arxiv.org/abs/2604.09654" }, { label: "DOI", url: "https://dl.acm.org/doi/10.1145/3774906.3802770" }] },
  { year: "2026", venue: "ACM HotMobile", title: "EarCalo: Earable-Based Energy Expenditure Estimation While Running", authors: "Yang Liu, Qiang Yang, Jake Stuchbury-Wass, Dong Ma, Cecilia Mascolo", correspondingAuthors: [], image: `${basePath}/publications/earcalo.png`, resources: [{ label: "PDF", url: "https://mobile-systems.cl.cam.ac.uk/papers/earcalo26.pdf" }, { label: "DOI", url: "https://dl.acm.org/doi/10.1145/3789514.3792046" }] },
];

export const newsItems = [
  { date: "2026", title: "ImpactEar accepted to ACM IMWUT 2026", text: "Our work on cross-activity ground reaction force estimation using earable IMUs has been accepted to ACM IMWUT 2026.", url: null },
  { date: "2026", title: "Mobile wireless charging work published at ACM MobiSys 2026", text: "Our work on reliable metal foreign-object detection via harmonic fingerprinting has been published at ACM MobiSys 2026.", url: null },
  { date: "2026", title: "Survey of earable technology published in ACM IMWUT 2026", text: "Our survey examines current trends, tools, and research directions across earable computing.", url: null },
  { date: "2026", title: "EarSleeve published at ACM SenSys 2026", text: "EarSleeve transforms everyday earphones into a 12-lead ECG sensing platform.", url: null },
  { date: "2026", title: "NeuroPath published at ACM SenSys 2026", text: "NeuroPath studies the practical adoption of motor-imagery decoding through EEG signals.", url: null },
  { date: "2026", title: "NutriEar published at ACM SenSys 2026", text: "NutriEar enables robust nutrition-aware food classification from in-ear acoustic signals.", url: null },
  { date: "2025–26", title: "FSU First Year Assistant Professor Grant awarded", text: "We gratefully acknowledge support from Florida State University's FYAP program.", url: null },
  { date: "2026–27", title: "ACM TOSN Distinguished Reviewer Board", text: "Yang Liu has been selected to serve on the ACM TOSN Distinguished Reviewer Board for the 2026–2027 term.", url: null },
  { date: "Oct 2025", title: "Yang Liu joined Florida State University", text: "Yang Liu joined the Department of Computer Science at FSU as a tenure-track Assistant Professor on October 3, 2025.", url: null },
];
