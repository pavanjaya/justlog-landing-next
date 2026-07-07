"use client";
import Link from "next/link";
import Image from "next/image";

export default function Nav({ variant = "landing" }: { variant?: "landing" | "page" }) {
  return (
    <>
      <style>{`
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; height: 72px;
          background: rgba(254,254,252,0.85);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.4s ease;
        }
        .nav-logo img { height: 38px; width: auto; display: block; }
        .nav-links { display: flex; align-items: center; gap: 4px; }
        .nav-links a { font-size: 16px; font-weight: 500; color: var(--muted); text-decoration: none; padding: 8px 16px; border-radius: 10px; transition: color 0.15s, background 0.15s; }
        .nav-links a:hover { color: var(--text); background: var(--bg2); }
        .nav-cta { background: #5B21B6 !important; color: #fff !important; padding: 10px 22px !important; border-radius: 12px !important; font-size: 15px !important; font-weight: 600 !important; }
        .nav-cta:hover { opacity: 0.85 !important; }
        .nav-link-simple { font-size: 14px; font-weight: 500; color: #555; text-decoration: none; padding: 8px 16px; border-radius: 10px; transition: color 0.15s; }
        .nav-link-simple:hover { color: var(--text); }
        @media (max-width: 640px) {
          nav { padding: 0 20px; height: 64px; }
          .nav-logo img { height: 32px; }
          .nav-links a:not(.nav-cta) { display: none; }
          .nav-cta { padding: 9px 18px !important; font-size: 14px !important; }
        }
      `}</style>
      <nav>
        <Link href="/" className="nav-logo" style={{ textDecoration: "none" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Image src="/logo.svg" alt="Justlog" width={120} height={38} style={{ height: 38, width: "auto" }} />
        </Link>
        {variant === "landing" ? (
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
            <Link href="/download" className="nav-cta">Get the App</Link>
          </div>
        ) : (
          <Link href="/privacy" className="nav-link-simple" style={{ display: variant === "page" ? undefined : "none" }}>
            Privacy Policy →
          </Link>
        )}
      </nav>
    </>
  );
}
