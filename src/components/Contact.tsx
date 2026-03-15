import { useState, type FormEvent } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder – hook up to an email service / API
    alert(`Thanks ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", message: "" });
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

          <button type="submit" className="btn-primary w-full justify-center text-base py-3">
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
}
