"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [subject, setSubject] = useState<"support" | "partnership" | "general">("support");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mnjkyqak", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style>{`
        body { background: var(--bg); }
        .hero-wrap { padding-top: 72px; background: var(--bg); }
        .hero { max-width: 760px; margin: 0 auto; padding: 80px 48px 56px; }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; background: var(--purple-soft); border-radius: 100px; padding: 5px 16px 5px 8px; font-size: 12px; font-weight: 700; color: var(--purple); letter-spacing: 0.04em; margin-bottom: 28px; }
        .eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--purple); }
        .hero h1 { font-size: clamp(36px, 5vw, 56px); font-weight: 900; letter-spacing: -2px; line-height: 1.05; color: var(--text); margin-bottom: 16px; }
        .hero h1 em { font-style: normal; color: var(--purple); }
        .hero-sub { font-size: 18px; color: #555; line-height: 1.65; margin-bottom: 0; font-weight: 400; }
        .divider { height: 1px; background: #F0F0EE; max-width: 760px; margin: 0 auto; }
        .content { max-width: 760px; margin: 0 auto; padding: 56px 48px 96px; }
        .subject-tabs { display: flex; gap: 8px; margin-bottom: 32px; flex-wrap: wrap; }
        .tab { padding: 8px 20px; border-radius: 100px; border: 1.5px solid #E5E7EB; background: #fff; font-size: 13px; font-weight: 600; color: #6B7280; cursor: pointer; transition: all 0.15s; }
        .tab:hover { border-color: var(--purple); color: var(--purple); }
        .tab.active { background: var(--purple); border-color: var(--purple); color: #fff; }
        .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        label { font-size: 13px; font-weight: 600; color: var(--text); }
        input, textarea, select { width: 100%; padding: 12px 16px; border: 1.5px solid #E5E7EB; border-radius: 12px; font-size: 15px; font-family: inherit; color: var(--text); background: #fff; outline: none; transition: border-color 0.15s, box-shadow 0.15s; box-sizing: border-box; }
        input:focus, textarea:focus, select:focus { border-color: var(--purple); box-shadow: 0 0 0 3px rgba(124,58,237,0.08); }
        textarea { resize: vertical; min-height: 140px; line-height: 1.6; }
        .btn-submit { display: inline-flex; align-items: center; gap: 8px; background: var(--purple); color: #fff; border: none; padding: 14px 32px; border-radius: 12px; font-size: 15px; font-weight: 700; cursor: pointer; transition: opacity 0.2s, transform 0.2s; font-family: inherit; }
        .btn-submit:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .success-box { background: rgba(16,185,129,0.08); border: 1.5px solid rgba(16,185,129,0.25); border-radius: 16px; padding: 32px; text-align: center; }
        .success-icon { width: 52px; height: 52px; background: rgba(16,185,129,0.12); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
        .success-title { font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 8px; }
        .success-sub { font-size: 14px; color: #6B7280; line-height: 1.6; }
        .contact-info { display: flex; gap: 16px; margin-top: 48px; flex-wrap: wrap; }
        .info-card { flex: 1; min-width: 200px; background: #F5F6F3; border-radius: 16px; padding: 24px; }
        .info-card-label { font-size: 11px; font-weight: 700; color: var(--muted2); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
        .info-card-value { font-size: 14px; font-weight: 600; color: var(--text); }
        .info-card-value a { color: var(--purple); text-decoration: none; }
        .info-card-value a:hover { text-decoration: underline; }
        @media (max-width: 640px) {
          .hero { padding: 56px 20px 40px; }
          .content { padding: 40px 20px 72px; }
          .form-row { grid-template-columns: 1fr; gap: 0; }
          .contact-info { flex-direction: column; }
        }
      `}</style>

      <Nav variant="page" />

      <div className="hero-wrap">
        <div className="hero">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Get in touch
          </div>
          <h1>We&apos;d love to<br /><em>hear from you.</em></h1>
          <p className="hero-sub">Whether it&apos;s a support query, a feature idea, or a partnership — we read every message.</p>
        </div>
      </div>

      <div className="divider" />

      <div className="content">
        {sent ? (
          <div className="success-box">
            <div className="success-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="success-title">Message sent!</div>
            <p className="success-sub">Thanks for reaching out. We&apos;ll get back to you at your email within 1–2 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="subject-tabs">
              {(["support", "partnership", "general"] as const).map((s) => (
                <button key={s} type="button" className={`tab${subject === s ? " active" : ""}`} onClick={() => setSubject(s)}>
                  {s === "support" ? "Support" : s === "partnership" ? "Partnership" : "General"}
                </button>
              ))}
            </div>

            <input type="hidden" name="subject_type" value={subject} />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                {subject === "support" ? "Describe your issue" : subject === "partnership" ? "Tell us about the opportunity" : "Your message"}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={
                  subject === "support"
                    ? "What happened? What did you expect? Which device / OS?"
                    : subject === "partnership"
                    ? "Who are you, what do you have in mind, and what outcome are you hoping for?"
                    : "What's on your mind?"
                }
                required
              />
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? "Sending…" : (
                <>
                  Send message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </>
              )}
            </button>
          </form>
        )}

        <div className="contact-info">
          <div className="info-card">
            <div className="info-card-label">Email</div>
            <div className="info-card-value"><a href="mailto:support@justlog.live">support@justlog.live</a></div>
          </div>
          <div className="info-card">
            <div className="info-card-label">Response time</div>
            <div className="info-card-value">1–2 business days</div>
          </div>
          <div className="info-card">
            <div className="info-card-label">Based in</div>
            <div className="info-card-value">India 🇮🇳</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
