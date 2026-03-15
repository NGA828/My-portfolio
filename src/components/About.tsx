const tags = [
  { label: "Web Application Development", color: "from-primary to-purple-500" },
  { label: "Mobile Application Development", color: "from-accent to-pink-500" },
  { label: "Frontend Desktop", color: "from-primary-light to-violet-400" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="glow-blob w-[350px] h-[350px] bg-accent/10 top-10 -right-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="section-heading">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Gradient ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-accent to-primary-light opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/profile.jpg"
                alt="GREYSON ANIMBOM"
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-surface"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              I'm <span className="gradient-text">GREYSON ANIMBOM</span>
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Software Engineering Master's student at AICS and freelance
              web/mobile developer in Cameroon. I create robust solutions using
              Laravel, React, Flutter, and more for startups and businesses.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              Passionate about clean architecture, intuitive UX, and building
              products that make a real difference. Always learning, always
              shipping.
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`px-4 py-2 rounded-full text-sm font-medium border border-border
                              bg-gradient-to-r ${tag.color} bg-clip-text text-transparent
                              hover:border-primary transition-colors duration-300`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
