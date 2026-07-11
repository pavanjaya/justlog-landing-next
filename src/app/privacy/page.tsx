import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Justlog",
  description: "Justlog Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
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
        .section h3 { font-size: 14px; font-weight: 700; color: #333; margin: 20px 0 10px; letter-spacing: -0.1px; }
        .content p { font-size: 15px; color: #444; line-height: 1.75; }
        .content p + p { margin-top: 12px; }
        .content ul { padding-left: 20px; display: flex; flex-direction: column; gap: 8px; margin-top: 8px; }
        .content li { font-size: 14px; color: #555; line-height: 1.65; }
        .content b { color: #111; }
        .content a { color: var(--purple); text-decoration: none; }
        .content a:hover { text-decoration: underline; }
        .note { background: var(--purple-soft); border-left: 3px solid var(--purple); border-radius: 0 10px 10px 0; padding: 12px 16px; font-size: 13px; color: #555; line-height: 1.6; margin: 12px 0; }
        .cards { display: flex; flex-direction: column; gap: 10px; margin-top: 12px; }
        .card { background: #fff; border: 1px solid #EBEBEA; border-radius: 14px; padding: 16px 18px; }
        .card-title { font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
        .card-desc { font-size: 13px; color: #666; line-height: 1.6; }
        .contact-box { background: #fff; border: 1.5px solid #EBEBEA; border-radius: 16px; padding: 20px 22px; display: flex; flex-direction: column; gap: 10px; margin-top: 12px; }
        .contact-row { display: flex; gap: 16px; font-size: 14px; }
        .contact-label { color: var(--muted2); min-width: 120px; font-weight: 500; }
        .contact-value { color: var(--text); font-weight: 600; }
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
            PRIVACY POLICY
          </div>
          <h1>Your privacy <em>matters.</em></h1>
          <p className="hero-sub">We keep your financial data private, secure, and fully under your control.</p>
          <p className="hero-meta">Last updated: June 23, 2026 · Effective: June 23, 2026</p>
        </div>
      </div>

      <div className="divider" />

      <div className="content">
        <div className="section">
          <p>Justlog (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a personal finance journaling application and a brand of <b>Hueness Design Private Limited</b>, India. This Privacy Policy explains how we collect, use, store, and protect your information. By using the App, you agree to the terms of this Policy.</p>
          <p>This Policy is published in compliance with the <b>Information Technology Act, 2000</b> and the <b>IT (SPDI) Rules, 2011</b>.</p>
        </div>

        <div className="section">
          <h2>1. Information We Collect</h2>
          <h3>1.1 Account Information</h3>
          <ul>
            <li>Email address (used for sign-in)</li>
            <li>Name and profile photo (if you sign in via Google)</li>
          </ul>
          <h3>1.2 Financial Journal Data (Sensitive Personal Data)</h3>
          <div className="note">Justlog is a personal journal. We do not connect to your bank accounts, payment cards, or any financial institution. All data is entered manually by you.</div>
          <ul>
            <li>Transaction descriptions and amounts you manually type</li>
            <li>Transaction categories (e.g. Food, Salary, Transport)</li>
            <li>Dates and times of logged entries</li>
            <li>Space/workspace names you create</li>
          </ul>
          <h3>1.3 Technical Data</h3>
          <ul>
            <li>Device type and browser (for app compatibility)</li>
          </ul>
        </div>

        <div className="section">
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To provide and operate the Justlog service</li>
            <li>To process your text using AI to parse transactions — your input is sent to an AI API momentarily and is not stored or used for training</li>
            <li>To sync your data across devices</li>
            <li>To send transactional emails (account confirmation, password reset)</li>
            <li>To improve the App based on anonymised usage patterns</li>
          </ul>
          <p style={{ marginTop: 14 }}>We do <b>not</b> sell, rent, or share your personal data with third parties for marketing purposes.</p>
        </div>

        <div className="section">
          <h2>3. Data Storage and Security</h2>
          <p>Your data is stored on <b>Supabase</b> (AWS infrastructure). Security measures include:</p>
          <ul>
            <li>Encryption in transit: All data transmitted over HTTPS/TLS</li>
            <li>Encryption at rest: Database storage encrypted by Supabase/AWS</li>
            <li>Row-level security: Your data is isolated — no other user can access your entries</li>
            <li>Secure token-based authentication via Supabase Auth</li>
          </ul>
        </div>

        <div className="section">
          <h2>4. Third-Party Services</h2>
          <div className="cards">
            {[
              { name: "Supabase", desc: "Database, authentication, and storage. Your account and transaction data is stored here." },
              { name: "AI Parsing API", desc: "Parses your typed text into structured transactions. Your input is sent to the API momentarily and is not stored or used for training." },
              { name: "Razorpay", desc: "Payment processing for subscriptions (India). We never store your payment card details — all payment data is handled securely by Razorpay." },
              { name: "Stripe", desc: "Payment processing for international subscriptions. We never store your payment card details." },
              { name: "Vercel", desc: "App hosting and delivery. Processes request metadata for routing." },
            ].map(({ name, desc }) => (
              <div key={name} className="card">
                <div className="card-title">{name}</div>
                <div className="card-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>5. Your Rights</h2>
          <ul>
            <li>Access: Request a copy of all data we hold about you</li>
            <li>Correction: Correct inaccurate personal information</li>
            <li>Deletion: Delete your account and all data — from Settings or by emailing us</li>
            <li>Withdraw consent: Stop using the App at any time</li>
            <li>Grievance redressal: Contact our Grievance Officer below</li>
          </ul>
          <p style={{ marginTop: 14 }}>We respond to all requests within <b>30 days</b> as required under SPDI Rule 5(7).</p>
        </div>

        <div className="section">
          <h2>6. Administrative Access</h2>
          <p>As the operator of Justlog, we have administrative access to the database for maintenance, security, and bug resolution purposes. This access is:</p>
          <ul>
            <li>Used only when necessary — such as investigating a reported issue or ensuring system integrity</li>
            <li>Never used to read, browse, or monitor individual user entries or financial data</li>
            <li>Subject to the same confidentiality obligations as this Privacy Policy</li>
          </ul>
          <p style={{ marginTop: 14 }}>Your transaction data is isolated per account using Row Level Security (RLS). No other user — or any unauthorised party — can access your entries through the app.</p>
        </div>

        <div className="section">
          <h2>7. Data Retention</h2>
          <p>We retain your data as long as your account is active. If you delete your account, all personal data is permanently deleted within <b>30 days</b>.</p>
        </div>

        <div className="section">
          <h2>8. Children&apos;s Privacy</h2>
          <p>Justlog is not intended for users under 13 years of age. We do not knowingly collect data from children.</p>
        </div>

        <div className="section">
          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via email or an in-app notice. Continued use of the App after changes constitutes acceptance of the updated Policy.</p>
        </div>

        <div className="section">
          <h2>10. Grievance Officer</h2>
          <p>In accordance with the IT Act, 2000 and SPDI Rules:</p>
          <div className="contact-box">
            {[
              ["Name", "Hueness Design Private Limited"],
              ["Email", "support@justlog.live"],
              ["Address", "India"],
              ["Response time", "Within 30 days"],
            ].map(([label, value]) => (
              <div key={label} className="contact-row">
                <span className="contact-label">{label}</span>
                <span className="contact-value">
                  {label === "Email" ? <a href={`mailto:${value}`}>{value}</a> : value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>11. Contact Us</h2>
          <p>For any privacy questions, email <a href="mailto:support@justlog.live">support@justlog.live</a>.</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
