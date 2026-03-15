import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background glows */}
      <div className="glow-blob w-[500px] h-[500px] bg-primary/20 -top-40 -left-40" />
      <div className="glow-blob w-[400px] h-[400px] bg-accent/15 bottom-20 right-0" />
      <div className="glow-blob w-[300px] h-[300px] bg-primary-dark/20 top-1/2 left-1/3" />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="animate-slide-up">
          <p className="text-text-muted text-sm uppercase tracking-[0.2em] mb-2">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="gradient-text">GREYSON ANIMBOM</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-primary-light mb-4">
            Full stack developer
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-md mb-8">
            Crafting modern, responsive, and user-friendly websites with passion
            and precision. Turning ideas into elegant digital experiences.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a href="#contact" className="btn-primary">
              <HiDownload className="text-lg" />
              Download Resume
            </a>

            <div className="flex items-center gap-3">
              {[
                { Icon: FaGithub, href: "#" },
                { Icon: FaLinkedinIn, href: "#" },
                { Icon: FaTwitter, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center
                             text-text-secondary hover:text-primary-light hover:border-primary
                             transition-all duration-300 hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            {/* Glow ring behind image */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl scale-105" />
            <img
              src="/profile.jpg"
              alt="GREYSON ANIMBOM - Full Stack Developer"
              className="relative w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-2xl
                         border-2 border-border shadow-2xl shadow-primary/20
                         animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
