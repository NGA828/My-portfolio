import { ArrowUpRight } from "lucide-react";

const principles = ["Clear, maintainable code", "Accessible by default", "Built around real needs"];

export default function About() {
  return (
    <section className="section section-about" id="about" aria-labelledby="about-title">
      <div className="section-wrap about-grid">
        <div className="section-label"><span>01</span><span>About</span></div>
        <div className="about-main">
          <p className="eyebrow">A little about how I work</p>
          <h2 id="about-title">Good software should feel <span>effortless.</span></h2>
        </div>
        <div className="about-copy">
          <p>
            I’m a software engineering master’s student at AICS and a freelance web and mobile
            developer in Cameroon. I work across the stack, turning early ideas into reliable,
            approachable products.
          </p>
          <p>
            My focus is on thoughtful interfaces, solid foundations, and the small details that
            make a product easier to use and easier to maintain.
          </p>
          <a className="inline-link" href="#contact">More about working together <ArrowUpRight size={16} /></a>
        </div>
        <div className="principles" aria-label="Engineering principles">
          {principles.map((principle, index) => (
            <div className="principle" key={principle}>
              <span className="principle-number">0{index + 1}</span>
              <span>{principle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
