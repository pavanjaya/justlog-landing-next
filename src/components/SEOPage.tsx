"use client";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface SEOPageProps {
  badge: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  secondaryCta?: { text: string; href: string };
  image: string;
  imageAlt: string;
  features: Feature[];
  howTitle: string;
  howSteps: { step: string; title: string; desc: string }[];
  comingSoon?: boolean;
  comingSoonText?: string;
}

const PLAY_STORE = "https://play.google.com/store/apps/details?id=live.justlog.app";
const WEB_APP = "https://app.justlog.live";

export default function SEOPage({
  badge,
  headline,
  subheadline,
  ctaText,
  ctaHref,
  secondaryCta,
  image,
  imageAlt,
  features,
  howTitle,
  howSteps,
  comingSoon,
  comingSoonText,
}: SEOPageProps) {
  return (
    <>
      <style>{`
        :root { --text: #1a1a1a; --muted: #555; --muted2: #999; --bg2: #F9F9F7; --accent: #5B21B6; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: var(--font-jakarta, system-ui, sans-serif); color: var(--text); background: #FEFEFC; }
        .seo-hero { padding: 140px 24px 80px; text-align: center; max-width: 860px; margin: 0 auto; }
        .seo-badge { display: inline-block; background: #EDE9FE; color: #5B21B6; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 6px 16px; border-radius: 100px; margin-bottom: 24px; }
        .seo-h1 { font-size: clamp(36px, 6vw, 64px); font-weight: 800; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 20px; }
        .seo-h1 em { font-style: normal; color: #5B21B6; }
        .seo-sub { font-size: clamp(16px, 2.5vw, 20px); color: var(--muted); line-height: 1.6; max-width: 600px; margin: 0 auto 36px; }
        .seo-ctas { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .seo-cta-primary { background: #5B21B6; color: #fff; padding: 14px 28px; border-radius: 14px; font-size: 16px; font-weight: 600; text-decoration: none; transition: opacity 0.15s; }
        .seo-cta-primary:hover { opacity: 0.85; }
        .seo-cta-secondary { background: #F3F0FF; color: #5B21B6; padding: 14px 28px; border-radius: 14px; font-size: 16px; font-weight: 600; text-decoration: none; transition: background 0.15s; }
        .seo-cta-secondary:hover { background: #EDE9FE; }
        .seo-image { max-width: 900px; margin: 60px auto 0; padding: 0 24px; }
        .seo-image img { width: 100%; border-radius: 20px; box-shadow: 0 24px 80px rgba(0,0,0,0.10); }
        .seo-features { max-width: 1100px; margin: 100px auto; padding: 0 24px; }
        .seo-features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-top: 48px; }
        .seo-feature-card { background: var(--bg2); border-radius: 20px; padding: 28px; }
        .seo-feature-icon { font-size: 28px; margin-bottom: 14px; }
        .seo-feature-title { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
        .seo-feature-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
        .seo-section-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #5B21B6; margin-bottom: 12px; }
        .seo-section-title { font-size: clamp(28px, 4vw, 42px); font-weight: 800; letter-spacing: -0.02em; line-height: 1.15; }
        .seo-how { max-width: 860px; margin: 0 auto 100px; padding: 0 24px; }
        .seo-steps { margin-top: 48px; display: flex; flex-direction: column; gap: 0; }
        .seo-step { display: flex; gap: 24px; padding: 32px 0; border-bottom: 1px solid #F0F0EE; }
        .seo-step:last-child { border-bottom: none; }
        .seo-step-num { flex-shrink: 0; width: 40px; height: 40px; background: #EDE9FE; color: #5B21B6; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 800; }
        .seo-step-title { font-size: 17px; font-weight: 700; margin-bottom: 6px; }
        .seo-step-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
        .seo-coming-soon { max-width: 640px; margin: 0 auto 100px; padding: 48px 32px; background: #FFF7ED; border: 1.5px solid #FED7AA; border-radius: 24px; text-align: center; }
        .seo-coming-soon h3 { font-size: 20px; font-weight: 700; margin-bottom: 10px; }
        .seo-coming-soon p { font-size: 15px; color: var(--muted); line-height: 1.6; }
        .seo-bottom-cta { background: #5B21B6; margin: 0 24px 80px; border-radius: 24px; padding: 64px 32px; text-align: center; max-width: 1052px; margin-left: auto; margin-right: auto; }
        .seo-bottom-cta h2 { font-size: clamp(24px, 4vw, 40px); font-weight: 800; color: #fff; margin-bottom: 12px; letter-spacing: -0.02em; }
        .seo-bottom-cta p { font-size: 16px; color: rgba(255,255,255,0.7); margin-bottom: 32px; }
        .seo-bottom-cta a { background: #fff; color: #5B21B6; padding: 14px 28px; border-radius: 14px; font-size: 16px; font-weight: 700; text-decoration: none; display: inline-block; margin: 6px; transition: opacity 0.15s; }
        .seo-bottom-cta a:hover { opacity: 0.9; }
        .seo-bottom-cta a.outline { background: rgba(255,255,255,0.12); color: #fff; }
        @media (max-width: 640px) {
          .seo-hero { padding: 110px 20px 60px; }
          .seo-features { margin: 60px auto; }
          .seo-features-grid { grid-template-columns: 1fr; }
          .seo-bottom-cta { margin: 0 16px 60px; padding: 48px 24px; }
        }
      `}</style>

      <Nav variant="page" />

      {/* Hero */}
      <section className="seo-hero">
        <div className="seo-badge">{badge}</div>
        <h1 className="seo-h1" dangerouslySetInnerHTML={{ __html: headline }} />
        <p className="seo-sub">{subheadline}</p>
        <div className="seo-ctas">
          <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="seo-cta-primary">{ctaText}</a>
          {secondaryCta && (
            <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer" className="seo-cta-secondary">{secondaryCta.text}</a>
          )}
        </div>
      </section>

      {/* Hero image */}
      <div className="seo-image">
        <Image src={image} alt={imageAlt} width={900} height={500} style={{ width: "100%", height: "auto" }} priority />
      </div>

      {/* Features */}
      <section className="seo-features">
        <div className="seo-section-label">Features</div>
        <div className="seo-section-title">Everything you need,<br />nothing you don&apos;t</div>
        <div className="seo-features-grid">
          {features.map((f) => (
            <div key={f.title} className="seo-feature-card">
              <div className="seo-feature-icon">{f.icon}</div>
              <div className="seo-feature-title">{f.title}</div>
              <div className="seo-feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="seo-how">
        <div className="seo-section-label">How it works</div>
        <div className="seo-section-title">{howTitle}</div>
        <div className="seo-steps">
          {howSteps.map((s, i) => (
            <div key={i} className="seo-step">
              <div className="seo-step-num">{i + 1}</div>
              <div>
                <div className="seo-step-title">{s.title}</div>
                <div className="seo-step-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming soon banner */}
      {comingSoon && (
        <div style={{ padding: "0 24px", marginBottom: 80 }}>
          <div className="seo-coming-soon" style={{ maxWidth: 640, margin: "0 auto" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🚧</div>
            <h3>Coming Soon</h3>
            <p>{comingSoonText}</p>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="seo-bottom-cta">
        <h2>Start tracking in 30 seconds</h2>
        <p>Free plan. No credit card. No bank connection needed.</p>
        <a href={WEB_APP} target="_blank" rel="noopener noreferrer">Open Web App</a>
        <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className="outline">Get on Android</a>
      </div>

      <Footer />
    </>
  );
}
