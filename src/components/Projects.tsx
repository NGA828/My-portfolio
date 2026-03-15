import { useState, useEffect } from "react";
import { FaReact, FaLaravel, FaPython, FaJava, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiPhp } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  fork: boolean;
}

const languageIcons: Record<string, { icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string }> = {
  React: { icon: FaReact, color: "#61DAFB" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Python: { icon: FaPython, color: "#3776AB" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  Laravel: { icon: FaLaravel, color: "#FF2D20" },
  Java: { icon: FaJava, color: "#007396" },
  HTML: { icon: SiJavascript, color: "#E34F26" },
  CSS: { icon: SiTailwindcss, color: "#1572B6" },
  C: { icon: FaCode, color: "#A8B9CC" },
  "C++": { icon: FaCode, color: "#f34b7d" },
  "C#": { icon: FaCode, color: "#178600" },
  Go: { icon: FaCode, color: "#00ADD8" },
  Rust: { icon: FaCode, color: "#dea584" },
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch("https://api.github.com/users/NGA828/repos?sort=updated&per_page=50");
        if (!response.ok) throw new Error("Failed to fetch repositories");
        const data = await response.json();
        // Filter out forks and the profile README repo
        const filteredRepos = data.filter((repo: Repo) => !repo.fork && repo.name !== "NGA828");
        setRepos(filteredRepos);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="glow-blob w-[300px] h-[300px] bg-accent/10 bottom-0 right-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="section-heading">
          My <span className="gradient-text">Projects</span>
        </h2>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center text-red-400 py-10">
            <p>Error loading projects: {error}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => {
              // Try to detect language from name/description if null
              let detectedLang = repo.language;
              if (!detectedLang) {
                const searchStr = (repo.name + " " + (repo.description || "")).toLowerCase();
                if (searchStr.includes("python")) detectedLang = "Python";
                else if (searchStr.includes("php") || searchStr.includes("laravel")) detectedLang = "PHP";
                else if (searchStr.includes("java") && !searchStr.includes("script")) detectedLang = "Java";
                else if (searchStr.includes("react")) detectedLang = "React";
                else if (searchStr.includes("flutter")) detectedLang = "Flutter";
              }

              const LangIcon = languageIcons[detectedLang || ""] || { icon: FaCode, color: "#a0a0b0" };
              
              return (
                <div
                  key={repo.id}
                  className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-40 bg-surface-light flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
                    <FaGithub className="text-5xl text-border group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary-light transition-colors">
                      {repo.name.replace(/-/g, " ")}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2 h-10">
                      {repo.description || "No description provided for this repository."}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <LangIcon.icon
                          className="text-lg"
                          style={{ color: LangIcon.color }}
                        />
                        <span className="text-xs text-text-muted">{detectedLang || "Misc"}</span>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full
                                   bg-gradient-to-r from-primary to-accent text-white
                                   hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                      >
                        <FaGithub /> Repository
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full
                                     border border-border text-text-secondary
                                     hover:border-primary/50 hover:text-primary-light transition-all duration-300"
                        >
                          <HiExternalLink /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
