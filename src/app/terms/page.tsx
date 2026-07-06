import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Justlog",
  description: "Justlog Terms of Service — simple, fair terms for using the app.",
};

export default function TermsPage() {
  return (
    <>
      <style>{`
        .hero-wrap { padding-top: 72px; background: var(--bg); }
        .hero { max-width: 760px; margin: 0 auto; padding: 80px 48px 56px; }
        .eyebrow { display: inline-flex; align-items: center; gap: 8px; background: var(--purple-soft); border-radius: 100px; padding: 5px 16px 5px 8px; font-size: 12px; font-weight: 700; color: var(--purple); letter-spacing: 0.04em; margin-bottom: 28px; }
        .eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--purple); }
        .hero h1 { font-size: clamp(36px, 5vw, 56px); font-weight: 900; letter-spacing: -2px; line-height: 1.05; color: var(--text); margin-bottom: 16px; }
        .hero h1 em { font-style: normal; color: var(--purple); }
        .hero-sub { font-size: 18px; color: #555; line-height: 1.65; margin-bottom: 16px; font-weight: 400; }
        .hero-meta { font-size: 13px; color: var(--muted2); }
        .divider { height: 1px; background: #F0F0EE; max-width: 760px; margin: 0 auto; }
        .content { max-width: 760px; margin: 0 auto; padding: 56px 48px 96px; }
        .section { margin-bottom: 48px; }
        .section h2 { font-size: 20px; font-weight: 800; color: var(--text); letter-spacing: -0.4px; margin-bottom: 16px; }
        .content p { font-size: 15px; color: #444; line-height: 1.75; }
        .content p + p { margin-top: 12px; }
        .content ul { padding-left: 20px; display: flex; flex-direction: column; gap: 8px; margin-top: 8px; }
        .content li { font-size: 14px; color: #555; line-height: 1.65; }
        .content b { color: #111; }
        .content a { color: var(--purple); text-decoration: none; }
        .content a:hover { text-decoration: underline; }
        @media (max-width: 640px) {
          .hero { padding: 64px 24px 40px; }
          .content { padding: 40px 24px 72px; }
        }
      `}</style>

      <Nav variant="page" />

      <div className="hero-wrap">
        <div className="hero">
          <div className="eyebrow">
            <div className="eyebrow-dot" />
            TERMS OF SERVICE
          </div>
          <h1>Simple, <em>fair</em> terms.</h1>
          <p className="hero-sub">You own your data. We just help you log it.</p>
          <p className="hero-meta">Last updated: June 18, 2025 · Effective: June 18, 2025</p>
        </div>
      </div>

      <div className="divider" />

      <div className="content">
        <div className="section">
          <p>These Terms of Service (&ldquo;Terms&rdquo;) govern your use of Justlog, a brand of <b>Hueness Design Private Limited</b> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), India. By creating an account or using the App, you agree to be bound by these Terms.</p>
        </div>

        <div className="section">
          <h2>1. What Justlog Is</h2>
          <p>Justlog is a personal finance journal. It lets you log income and expenses by typing natural language, parsed using AI. Justlog is <b>not</b> a bank, payment processor, financial advisor, or investment platform. Nothing in the App constitutes financial, tax, investment, or legal advice.</p>
        </div>

        <div className="section">
          <h2>2. Eligibility</h2>
          <ul>
            <li>You must be at least 13 years old to use Justlog</li>
            <li>If you are under 18, your parent or legal guardian must have consented to these Terms</li>
            <li>You must provide accurate account information</li>
          </ul>
        </div>

        <div className="section">
          <h2>3. Your Account</h2>
          <ul>
            <li>You are responsible for keeping your credentials secure</li>
            <li>You are responsible for all activity under your account</li>
            <li>Notify us immediately at <a href="mailto:support@justlog.ai">support@justlog.ai</a> if you suspect unauthorised access</li>
            <li>We may suspend accounts that violate these Terms</li>
          </ul>
        </div>

        <div className="section">
          <h2>4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the App for any unlawful purpose or in violation of applicable law</li>
            <li>Attempt to reverse engineer or extract source code</li>
            <li>Use automated tools to scrape data from the App</li>
            <li>Attempt to access other users&apos; data</li>
            <li>Upload defamatory, obscene, or rights-violating content</li>
          </ul>
        </div>

        <div className="section">
          <h2>5. Subscription and Payments</h2>
          <ul>
            <li>Payments processed by Razorpay (India) or Stripe — we never store your card details</li>
            <li>Subscriptions auto-renew unless cancelled before renewal date</li>
            <li>Cancel anytime from Settings — access continues until end of billing period</li>
            <li>Refund requests handled within 7 days of a charge — contact us</li>
            <li>Prices in INR, inclusive of applicable GST</li>
          </ul>
        </div>

        <div className="section">
          <h2>6. Your Data</h2>
          <p>You own all the data you enter into Justlog. We claim no ownership over your financial journal entries. By using the App, you grant us a limited licence to store, process, and display your data solely to provide the service to you.</p>
          <p>You can export or delete your data at any time from Settings.</p>
        </div>

        <div className="section">
          <h2>7. AI Processing</h2>
          <p>Text you type is sent to an AI API to parse transaction details. By using the App, you consent to this processing. AI-parsed details may not always be accurate — you are responsible for reviewing and correcting entries.</p>
        </div>

        <div className="section">
          <h2>8. Disclaimer of Warranties</h2>
          <p>The App is provided &ldquo;as is&rdquo; without warranties of any kind. We do not warrant that the App will be uninterrupted, error-free, or that AI-parsed data will be accurate.</p>
        </div>

        <div className="section">
          <h2>9. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Justlog shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount you paid us in the 3 months preceding the claim, or ₹500, whichever is higher.</p>
        </div>

        <div className="section">
          <h2>10. Governing Law</h2>
          <p>These Terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in India.</p>
        </div>

        <div className="section">
          <h2>11. Contact</h2>
          <p>For questions about these Terms, email <a href="mailto:support@justlog.ai">support@justlog.ai</a>.</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
