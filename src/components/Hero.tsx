import { ArrowDown, ArrowRight, Github, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> Software engineer · Cameroon</p>
        <h1 id="hero-title">I build digital<br />products with <span>purpose.</span></h1>
        <p className="hero-intro">
          I’m Greyson Animbom — a software engineering master’s student and freelance developer
          creating thoughtful web and mobile experiences.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">Explore selected work <ArrowRight size={16} /></a>
          <a className="text-link" href="#contact">Start a conversation <ArrowDown size={15} /></a>
        </div>
        <div className="hero-meta">
          <span><MapPin size={15} /> Based in Cameroon</span>
          <a href="https://github.com/NGA828" target="_blank" rel="noreferrer">
            <Github size={15} /> GitHub <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Portrait of Greyson Animbom">
        <div className="portrait-frame">
          <img src="/profile.jpg" alt="Greyson Animbom working at his laptop" fetchPriority="high" />
        </div>
        <div className="portrait-caption">
          <span className="caption-index">01 / 04</span>
          <span>People-first engineering<br />from Cameroon, for everywhere.</span>
        </div>
        <span className="hero-stamp" aria-hidden="true">G<span>.</span></span>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span /> Scroll to explore</a>
    </section>
  );
}
