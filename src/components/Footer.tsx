import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/NGA828" },
  { Icon: FaLinkedinIn, href: "#" },
  { Icon: FaTwitter, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="text-lg font-bold gradient-text">
            GREYSON<span className="text-primary-light">+</span>
          </a>

          {/* Nav */}
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs text-text-muted hover:text-primary-light transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center
                           text-text-muted hover:text-primary-light hover:border-primary/50
                           transition-all duration-300 text-sm"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-text-muted mt-8">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
