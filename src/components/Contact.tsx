import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/xdawldek", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `Portfolio message from ${form.name}` }),
      });
      if (!response.ok) throw new Error("Message could not be sent");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section section-contact" id="contact" aria-labelledby="contact-title">
      <div className="section-wrap contact-layout">
        <div className="contact-copy">
          <div className="section-label"><span>04</span><span>Get in touch</span></div>
          <p className="eyebrow">Have a good problem to solve?</p>
          <h2 id="contact-title">Let’s make<br /><span>something useful.</span></h2>
          <p className="contact-intro">Tell me what you’re working on. I’m always glad to hear about thoughtful projects and collaborations.</p>
          <a className="contact-email" href="mailto:greysonanimbomnkwenge@gmail.com">
            greysonanimbomnkwenge@gmail.com <ArrowUpRight size={17} />
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>Send a message</span><span>Usually reply by email</span></div>
          <label htmlFor="name">Your name</label>
          <input
            id="name" name="name" type="text" autoComplete="name" required maxLength={100}
            placeholder="your name" value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
          <label htmlFor="email">Email address</label>
          <input
            id="email" name="email" type="email" autoComplete="email" required maxLength={254}
            placeholder="your email" value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
          />
          <label htmlFor="message">What’s on your mind?</label>
          <textarea
            id="message" name="message" required maxLength={4000} rows={4}
            placeholder="A little about your project…" value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
          />
          <button className="button button-dark submit-button" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : status === "success" ? <>Sent <Check size={16} /></> : <>Send message <Send size={15} /></>}
          </button>
          {status === "success" && <p className="form-status success" role="status">Thanks for reaching out. Your message has been sent.</p>}
          {status === "error" && <p className="form-status error" role="alert">That didn’t go through. Please try again or email me directly.</p>}
        </form>
      </div>
    </section>
  );
}
