import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Web application · Analytics",
    title: "A clearer view of the numbers.",
    description: "A dashboard concept that brings reporting, project activity, and key metrics into one focused workspace.",
    image: "/project1.png",
    alt: "Dark analytics dashboard with revenue charts, project metrics, and activity panels",
    tone: "project-image-dashboard",
  },
  {
    number: "02",
    category: "Mobile product · Commerce",
    title: "Orders, at a glance.",
    description: "A mobile order-management interface designed to make order status and customer details easy to scan.",
    image: "/project2.png",
    alt: "Mobile order management interface showing a list of customer orders and delivery statuses",
    tone: "project-image-mobile",
  },
  {
    number: "03",
    category: "Web experience · Construction",
    title: "A stronger first impression.",
    description: "A visual direction for a construction company website, with a clear path from services to featured work.",
    image: "/project3.png",
    alt: "Construction company website concept with an architectural hero image and project cards",
    tone: "project-image-construction",
  },
];

export default function Projects() {
  return (
    <section className="section section-projects" id="projects" aria-labelledby="projects-title">
      <div className="section-wrap">
        <div className="section-heading-row projects-heading">
          <div className="section-label"><span>03</span><span>Selected work</span></div>
          <div>
            <p className="eyebrow">A few things I’ve been exploring</p>
            <h2 id="projects-title">Ideas made <span>tangible.</span></h2>
          </div>
          <a className="inline-link github-link" href="https://github.com/NGA828" target="_blank" rel="noreferrer">
            <Github size={16} /> Browse my GitHub <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-visual ${project.tone}`}>
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-count">{project.number}</span>
              </div>
              <div className="project-info">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              <span className="project-arrow">Concept</span>
            </article>
          ))}
        </div>
        <p className="work-note">Interface concepts shown for illustration. Visit GitHub for source code and current projects.</p>
      </div>
    </section>
  );
}
