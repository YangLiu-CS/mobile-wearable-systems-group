"use client";

import { useCallback, useEffect, useState } from "react";

type Demo =
  | { type: "youtube"; id: string; label: string }
  | { type: "video"; src: string; label: string }
  | { type: "video-pair"; sources: string[]; label: string };

const demos: Demo[] = [
  { type: "youtube", id: "vmi3jffgvyE", label: "ArmTroi · Arm skeleton tracking" },
  { type: "youtube", id: "jThlRndMsXc", label: "WR-Hand · Hand tracking" },
  { type: "youtube", id: "9CdIGp4eFiA", label: "WETrak · Finger tracking" },
  { type: "video", src: "https://yangliu-cs.github.io/images/demo%20videos/work.mp4", label: "Physiological monitoring" },
  { type: "video", src: "https://yangliu-cs.github.io/images/demo%20videos/run.mp4", label: "Fitness monitoring" },
  { type: "youtube", id: "zfvWCtT1FkI", label: "ASGaze · Gaze tracking I" },
  { type: "youtube", id: "0VlgbBK_ewU", label: "ASGaze · Gaze tracking II" },
  { type: "video-pair", sources: ["https://yangliu-cs.github.io/images/demo%20videos/type.mp4", "https://yangliu-cs.github.io/images/demo%20videos/guess.mp4"], label: "Passcode leakage · Interaction and inference" },
];

export function DemoWall({ compact = false }: { compact?: boolean }) {
  const [current, setCurrent] = useState(0);
  const advance = useCallback(() => setCurrent(index => (index + 1) % demos.length), []);

  useEffect(() => {
    const timer = window.setInterval(advance, 8000);
    return () => window.clearInterval(timer);
  }, [advance]);

  const demo = demos[current]!;

  return (
    <div className={`demo-wall${compact ? " demo-wall-compact" : ""}`} aria-label="Research demo carousel">
      <div className="demo-stage">
        {demo.type === "youtube" ? <iframe key={demo.id} src={`https://www.youtube.com/embed/${demo.id}?autoplay=1&mute=1&loop=1&playlist=${demo.id}&controls=0&rel=0&playsinline=1`} title={`${demo.label} research demo`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> : demo.type === "video-pair" ? <div className="demo-video-pair" key={demo.label}>{demo.sources.map((source, index) => <video key={source} autoPlay muted loop playsInline preload="auto" aria-label={`${demo.label} view ${index + 1}`}><source src={source} type="video/mp4" /></video>)}</div> : <video key={demo.src} autoPlay muted loop playsInline preload="auto" aria-label={`${demo.label} research demo`}>
          <source src={demo.src} type="video/mp4" />
        </video>}
      </div>
      <div className="demo-caption" aria-live="polite">
        <div><span>{String(current + 1).padStart(2, "0")} / {String(demos.length).padStart(2, "0")}</span><strong>{demo.label}</strong></div>
        <div className="demo-controls" aria-label="Select research demo">
          {demos.map((item, index) => <button className={index === current ? "is-active" : ""} type="button" key={item.label} onClick={() => setCurrent(index)} aria-label={`Show ${item.label}`} aria-current={index === current ? "true" : undefined} />)}
        </div>
      </div>
    </div>
  );
}
