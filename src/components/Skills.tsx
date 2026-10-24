import { Braces, Layers3, Smartphone, Workflow } from "lucide-react";

const capabilities = [
  {
    icon: Layers3,
    number: "01",
    title: "Web applications",
    detail: "Responsive interfaces and full-stack products built to be clear, fast, and maintainable.",
    tools: ["React", "TypeScript", "Laravel","html","nextjs"],
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile experiences",
    detail: "Useful, considered mobile experiences designed around the people who use them.",
    tools: ["Flutter", "React native"],
  },
  {
    icon: Braces,
    number: "03",
    title: "Backend & data",
    detail: "Practical APIs, application logic, and data layers that support dependable products.",
    tools: ["PHP", "Python", "SQL","nestjs"],
  },
  {
    icon: Workflow,
    number: "04",
    title: "Product thinking",
    detail: "From the first interaction to the final edge case, with care for the whole experience.",
    tools: ["UX-minded", "Accessible", "Maintainable"],
  },
];

export default function Skills() {
  return (
    <section className="section section-skills" id="skills" aria-labelledby="skills-title">
      <div className="section-wrap">
        <div className="section-heading-row">
          <div className="section-label"><span>02</span><span>Expertise</span></div>
          <div>
            <p className="eyebrow">What I bring to the table</p>
            <h2 id="skills-title">Thoughtful work.<br /><span>Strong foundations.</span></h2>
          </div>
          <p className="heading-note">A focused toolkit, chosen to solve real problems — not just fill a list.</p>
        </div>

        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, number, title, detail, tools }) => (
            <article className="capability-card" key={title}>
              <div className="capability-top"><Icon size={21} strokeWidth={1.7} /><span>{number}</span></div>
              <h3>{title}</h3>
              <p>{detail}</p>
              <ul className="tool-list" aria-label={`${title} tools and qualities`}>
                {tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
