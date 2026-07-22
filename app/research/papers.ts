export type ResearchPaper = {
  title: string;
  venue: string;
  href: string;
  image: string;
  position?: string;
  aspectRatio: string;
  contain?: boolean;
};

export const behaviorPapers: ResearchPaper[] = [
  { title: "Real-time Arm Skeleton Tracking and Gesture Inference Tolerant to Missing Wearable Sensors", venue: "ACM MobiSys 2019", href: "https://yangliu-cs.github.io/YangLiu-CS/ArmTroi.html", image: "/media/behavior.png", position: "12% 45%", aspectRatio: "1 / 1.08" },
  { title: "WR-Hand: Wearable Armband Can Track User's Hand", venue: "ACM IMWUT 2021", href: "https://yangliu-cs.github.io/YangLiu-CS/WR-Hand.html", image: "/media/behavior.png", position: "50% 45%", aspectRatio: "1.35 / 1" },
  { title: "Finger Tracking Using Wrist-Worn EMG Sensors", venue: "IEEE TMC 2024", href: "https://ieeexplore.ieee.org/document/10623717", image: "/media/behavior.png", position: "88% 45%", aspectRatio: "1 / 1.12" },
  { title: "NeuroPath: Practically Adopting Motor Imagery Decoding through EEG Signals", venue: "ACM SenSys 2026", href: "https://dl.acm.org/doi/epdf/10.1145/3774906.3802770", image: "/publications/neuropath.png", aspectRatio: "1.55 / 1", contain: true },
];

export const wellnessPapers: ResearchPaper[] = [
  { title: "Yawning Detection using Earphone Inertial Measurement Units", venue: "ACM SmartWear 2023", href: "https://dl.acm.org/doi/pdf/10.1145/3615592.3616854", image: "/media/health.png", position: "42% 92%", aspectRatio: "1 / 1.15" },
  { title: "BrushBuds: Toothbrushing Tracking Using Earphone IMUs", venue: "ACM EarComp 2024", href: "https://dl.acm.org/doi/10.1145/3675094.3680521", image: "/media/health.png", position: "25% 62%", aspectRatio: "1.2 / 1" },
  { title: "Detecting Foot Strikes during Running with Earbuds", venue: "ACM BodySys 2024", href: "https://dl.acm.org/doi/pdf/10.1145/3662009.3662023", image: "/media/health.png", position: "29% 19%", aspectRatio: "1.35 / 1" },
  { title: "An Evaluation of Heart Rate Monitoring with In-ear Microphones under Motion", venue: "Pervasive and Mobile Computing 2024", href: "https://www.sciencedirect.com/science/article/pii/S1574119224000397", image: "/media/health.png", position: "84% 66%", aspectRatio: "1.5 / 1" },
  { title: "BreathPro: Monitoring Breathing Mode during Running with Earables", venue: "ACM IMWUT 2024", href: "https://dl.acm.org/doi/pdf/10.1145/3659607", image: "/media/health.png", position: "79% 18%", aspectRatio: "1.15 / 1" },
  { title: "Towards Open Respiratory Acoustic Foundation Models: Pretraining and Benchmarking", venue: "NeurIPS 2024", href: "https://arxiv.org/abs/2406.16148", image: "/media/health.png", position: "73% 35%", aspectRatio: "1.35 / 1" },
  { title: "RespEar: Earable-Based Robust Respiratory Rate Monitoring", venue: "IEEE PerCom 2025 · Best Paper", href: "https://mobile-systems.cl.cam.ac.uk/papers/respear.pdf", image: "/media/health.png", position: "55% 9%", aspectRatio: "1.1 / 1" },
  { title: "WalkEar: Holistic Gait Monitoring using Earables", venue: "IEEE PerCom 2025", href: "https://mobile-systems.cl.cam.ac.uk/papers/walkear.pdf", image: "/media/health.png", position: "13% 43%", aspectRatio: "1 / 1.15" },
  { title: "SmarTeeth: Augmenting Manual Toothbrushing with In-ear Microphones", venue: "ACM CHI 2025", href: "https://dl.acm.org/doi/pdf/10.1145/3706598.3713893", image: "/media/health.png", position: "25% 64%", aspectRatio: "1.4 / 1" },
  { title: "EarMeter: Continuous Respiration Volume Monitoring with Earables", venue: "ACM IMWUT 2025", href: "https://mobile-systems.cl.cam.ac.uk/papers/earmeter25.pdf", image: "/media/health.png", position: "50% 12%", aspectRatio: "1.25 / 1" },
  { title: "HearForce: Force Estimation for Manual Toothbrushing with Earables", venue: "ACM IMWUT 2025", href: "https://mobile-systems.cl.cam.ac.uk/papers/hearforce25.pdf", image: "/media/health.png", position: "27% 64%", aspectRatio: "1 / 1.1" },
  { title: "Deep-Learning Based Segmentation of In-Ear Cardiac Sounds", venue: "IEEE EMBC 2025", href: "https://mobile-systems.cl.cam.ac.uk/papers/embc25-jordan.pdf", image: "/media/health.png", position: "80% 89%", aspectRatio: "1.55 / 1" },
  { title: "IMUSteth: On-Body Stethoscope Localization with Inertial Sensing for Home Self-Screening", venue: "ACM IASA 2025", href: "https://dl.acm.org/doi/pdf/10.1145/3737901.3768363", image: "/media/health.png", position: "66% 79%", aspectRatio: "1.15 / 1" },
  { title: "Earable-based Continuous Blood Pressure Monitoring via a Single-Point Flexible Sensor", venue: "ACM EarComp 2025", href: "https://dl.acm.org/doi/pdf/10.1145/3714394.3757255", image: "/media/health.png", position: "58% 80%", aspectRatio: "1.35 / 1" },
  { title: "Measuring Cardiac Stroke Volume Through In-ear Audio Sensing", venue: "Nature Communications 2026", href: "https://www.nature.com/articles/s41467-026-75642-0_reference.pdf", image: "/media/health.png", position: "58% 80%", aspectRatio: "1 / 1.05" },
  { title: "EarCalo: Earable-Based Energy Expenditure Estimation While Running", venue: "ACM HotMobile 2026", href: "https://mobile-systems.cl.cam.ac.uk/papers/earcalo26.pdf", image: "/publications/earcalo.png", aspectRatio: "1.45 / 1", contain: true },
  { title: "Ear-worn inertial sensors can predict gait metrics and reconstruct vertical ground reaction force curves during running", venue: "Journal of Applied Biomechanics 2026", href: "https://api.repository.cam.ac.uk/server/api/core/bitstreams/988bc231-b440-4013-9f69-d08ac504f7a2/content", image: "/media/health.png", position: "16% 45%", aspectRatio: "1.2 / 1" },
  { title: "EarSleeve: Transforming Everyday Earphones into a 12-Lead ECG Sensing Platform", venue: "ACM SenSys 2026", href: "https://dl.acm.org/doi/epdf/10.1145/3774906.3802785", image: "/publications/earsleeve.png", aspectRatio: "1.35 / 1", contain: true },
  { title: "NutriEar: Robust Nutrition-Aware Food Classification from In-Ear Acoustic Signals", venue: "ACM SenSys 2026", href: "https://dl.acm.org/doi/epdf/10.1145/3774906.3802763", image: "/publications/nutriear.png", aspectRatio: "1 / 1.08", contain: true },
  { title: "ImpactEar: Cross Activity Ground Reaction Force Estimation using Earable IMUs", venue: "ACM IMWUT 2026", href: "https://mobile-systems.cl.cam.ac.uk/papers/imwut-jake26.pdf", image: "/publications/impactear.png", aspectRatio: "1.55 / 1", contain: true },
];

export const interactionPapers: ResearchPaper[] = [
  { title: "Rulers on Our Arms: Waving to Measure Object Size through Contactless Sensing", venue: "ACM TOSN 2019", href: "https://yangliu-cs.github.io/YangLiu-CS/paper/2019-TOSN-Aware.pdf", image: "/media/interaction.png", position: "16% 18%", aspectRatio: "1.3 / 1" },
  { title: "Reliable Metal Foreign Object Detection for Mobile Wireless Charging via Harmonic Fingerprinting", venue: "ACM MobiSys 2026", href: "https://dl.acm.org/doi/abs/10.1145/3745756.3809222", image: "/publications/harmonic-fingerprinting.png", aspectRatio: "1.65 / 1", contain: true },
  { title: "Gaze Tracking on Any Surface with Your Phone", venue: "ACM SenSys 2022", href: "https://yangliu-cs.github.io/YangLiu-CS/paper/2022-SenSys-ASGaze.pdf", image: "/media/interaction.png", position: "84% 18%", aspectRatio: "1 / 1.08" },
  { title: "Practical Gaze Tracking on Any Surface with Your Phone", venue: "IEEE TMC 2024", href: "https://ieeexplore.ieee.org/document/10638728", image: "/media/interaction.png", position: "84% 18%", aspectRatio: "1.35 / 1" },
  { title: "GASLA: Enhancing the Applicability of Sign Language Translation", venue: "IEEE INFOCOM 2022", href: "https://yangliu-cs.github.io/YangLiu-CS/paper/2022-Infocom-GASLA.pdf", image: "/media/interaction.png", position: "50% 18%", aspectRatio: "1.5 / 1" },
  { title: "Enhancing the Applicability of Sign Language Translation", venue: "IEEE TMC 2024", href: "https://scholars.cityu.edu.hk/files/194313689/182780309.pdf", image: "/media/interaction.png", position: "50% 18%", aspectRatio: "1.15 / 1" },
  { title: "aLeak: Privacy Leakage through Context-Free Wearable Side-Channel", venue: "IEEE INFOCOM 2018", href: "https://yangliu-cs.github.io/YangLiu-CS/paper/2018-INFOCOM-aLeak.pdf", image: "/media/interaction.png", position: "17% 77%", aspectRatio: "1 / 1.08" },
  { title: "aLeak: Context-Free Side-Channel from Your Smart Watch Leaks Your Typing Privacy", venue: "IEEE TMC 2019", href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8718344", image: "/media/interaction.png", position: "17% 77%", aspectRatio: "1.4 / 1" },
  { title: "Mobile Phones Know Your Keystrokes through the Sounds from Finger's Tapping on the Screen", venue: "IEEE ICDCS 2020", href: "https://yangliu-cs.github.io/YangLiu-CS/paper/2020-ICDCS-TapLeak.pdf", image: "/media/interaction.png", position: "50% 78%", aspectRatio: "1.25 / 1" },
  { title: "Keystroke Recognition with the Tapping Sound Recorded by Mobile Phone Microphones", venue: "IEEE TMC 2021", href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9658138&tag=1", image: "/media/interaction.png", position: "50% 78%", aspectRatio: "1 / 1.1" },
  { title: "EarPass: Continuous User Authentication with In-ear PPG", venue: "ACM EarComp 2023 · Best Paper", href: "https://dl.acm.org/doi/pdf/10.1145/3594739.3610670", image: "/media/interaction.png", position: "84% 77%", aspectRatio: "1.45 / 1" },
  { title: "Biometric Authentication Using Smartphone-Generated Acoustic Signals Modulated by Vascular Dynamics", venue: "ACM IASA 2025", href: "https://dl.acm.org/doi/pdf/10.1145/3737901.3768367", image: "/media/interaction.png", position: "84% 77%", aspectRatio: "1.05 / 1" },
];
