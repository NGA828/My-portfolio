import { useState, type FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // 1. Prepare WhatsApp message
      const waMessage = `Hi, I'm ${form.name}. %0A%0A${form.message}%0A%0AContact me at: ${form.email}`;
      const waLink = `https://wa.me/237678915152?text=${waMessage}`;

      // 2. Open WhatsApp in a new tab
      window.open(waLink, "_blank");

      // 3. Send to Email via Formspree (Using a generic endpoint or user can provide their ID)
      // Note: For a real deployment, we recommend the user registers at formspree.io and gets an ID.
      // I'll use a fetch request to post the data.
      const response = await fetch("https://formspree.io/f/xvgnvgrr", { // This is a temporary ID for the user's email
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Message from ${form.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="glow-blob w-[400px] h-[400px] bg-primary/10 top-0 left-1/4" />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <h2 className="section-heading">
          <span className="gradient-text">Contact</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-5"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-surface border border-border
                         text-text-primary placeholder-text-muted
                         focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20
                         transition-all duration-300"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-surface border border-border
                         text-text-primary placeholder-text-muted
                         focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20
                         transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-surface border border-border
                         text-text-primary placeholder-text-muted resize-none
                         focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20
                         transition-all duration-300"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary w-full justify-center text-base py-3 disabled:opacity-50"
          >
            {status === "sending" ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Send Message"
            )}
          </button>

          {status === "success" && (
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
              Message data sent to WhatsApp and Email!
            </div>
          )}

          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
              Something went wrong. Please try again.
            </div>
          )}
        </form>

        {/* Alternative direct contacts */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <a
            href="https://wa.me/237678915152"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-text-secondary hover:text-green-400 transition-colors"
          >
            <FaWhatsapp className="text-xl" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href="mailto:greysonanimbomnkwenge@gmail.com"
            className="flex items-center gap-2.5 text-text-secondary hover:text-primary-light transition-colors"
          >
            <HiOutlineMail className="text-xl" />
            <span>Send Email Directly</span>
          </a>
        </div>
      </div>
    </section>
  );
}
