import { ArrowUpRight, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-content">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark">G</span>
          <span>Greyson <span className="wordmark-last">Animbom</span></span>
        </a>
        <p>Designed with care. Built with purpose.</p>
        <a href="https://github.com/NGA828" target="_blank" rel="noreferrer">
          <Github size={15} /> GitHub <ArrowUpRight size={13} />
        </a>
        <span className="copyright">© {new Date().getFullYear()} Greyson Animbom</span>
      </div>
    </footer>
  );
}
