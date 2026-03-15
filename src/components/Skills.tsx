import {
  FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaPhp,
  FaLaravel, FaDocker, FaGitAlt, FaFigma, FaHtml5, FaCss3Alt,
  FaJsSquare, FaDatabase, FaSwift, FaAndroid
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiFlutter, SiFirebase,
  SiMongodb, SiPostgresql, SiNextdotjs, SiExpress
} from "react-icons/si";

const skillRows = [
  {
    label: "Frontend",
    skills: [
      { icon: FaReact, name: "React", color: "#61DAFB" },
      { icon: FaVuejs, name: "Vue.js", color: "#4FC08D" },
      { icon: FaAngular, name: "Angular", color: "#DD0031" },
      { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
      { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
      { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
      { icon: FaJsSquare, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: FaNodeJs, name: "Node.js", color: "#339933" },
      { icon: SiExpress, name: "Express", color: "#ffffff" },
      { icon: FaPython, name: "Python", color: "#3776AB" },
      { icon: FaPhp, name: "PHP", color: "#777BB4" },
      { icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
      { icon: FaDatabase, name: "SQL", color: "#F29111" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    ],
  },
  {
    label: "Mobile & Tools",
    skills: [
      { icon: SiFlutter, name: "Flutter", color: "#02569B" },
      { icon: FaSwift, name: "Swift", color: "#FA7343" },
      { icon: FaAndroid, name: "Android", color: "#3DDC84" },
      { icon: FaDocker, name: "Docker", color: "#2496ED" },
      { icon: FaGitAlt, name: "Git", color: "#F05032" },
      { icon: FaFigma, name: "Figma", color: "#F24E1E" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="glow-blob w-[400px] h-[400px] bg-primary/10 -left-32 top-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="section-heading">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="space-y-10">
          {skillRows.map((row) => (
            <div key={row.label}>
              <h3 className="text-sm uppercase tracking-widest text-text-muted mb-4 ml-1">
                {row.label}
              </h3>
              <div className="flex flex-wrap gap-4">
                {row.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl
                               bg-surface-card border border-border
                               hover:border-primary/50 hover:scale-105
                               transition-all duration-300 cursor-default"
                  >
                    <skill.icon
                      className="text-xl transition-colors duration-300"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
