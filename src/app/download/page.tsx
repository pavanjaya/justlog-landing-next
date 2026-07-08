import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DownloadPageTracker from "@/components/DownloadPageTracker";

export const metadata: Metadata = {
  title: "Download Justlog",
  description: "Download Justlog on Android or open the web app.",
};

export default function DownloadPage() {
  return (
    <>
      <DownloadPageTracker />
      <style>{`
        body { background: #F5F6F3; min-height: 100vh; display: flex; flex-direction: column; }
        .dl-nav {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; height: 68px;
          background: rgba(245,246,243,0.9);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          position: sticky; top: 0; z-index: 10;
        }
        .nav-back { display: inline-flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 600; color: #6B7280; text-decoration: none; transition: color 0.15s; }
        .nav-back:hover { color: #0A0A0A; }
        .dl-main { flex: 1; display: flex; align-items: center; justify-content: center; padding: 48px 24px; }
        .dl-card { background: #fff; border-radius: 32px; border: 1px solid rgba(0,0,0,0.07); display: flex; align-items: center; max-width: 900px; width: 100%; overflow: hidden; }
        .phone-side { flex: 1; overflow: hidden; position: relative; align-self: stretch; }
        .content-side { flex: 1; padding: 56px 52px; display: flex; flex-direction: column; align-items: flex-start; }
        .dl-eyebrow { font-size: 11px; font-weight: 700; color: #7C3AED; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 14px; }
        .dl-title { font-size: clamp(28px, 3vw, 38px); font-weight: 900; letter-spacing: -1.5px; line-height: 1.1; color: #0A0A0A; margin-bottom: 36px; }
        .qr-wrap { width: 148px; height: 148px; background: #fff; border: 1px solid rgba(0,0,0,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 28px; padding: 12px; }
        .qr-wrap svg { width: 100%; height: 100%; }
        .or-row { display: flex; align-items: center; gap: 12px; width: 100%; margin-bottom: 24px; }
        .or-line { flex: 1; height: 1px; background: #E5E7EB; }
        .or-text { font-size: 11px; font-weight: 700; color: #9CA3AF; letter-spacing: 0.08em; }
        .store-badges { display: flex; gap: 10px; flex-wrap: wrap; }
        .badge { display: inline-flex; align-items: center; gap: 10px; background: #0A0A0A; color: #fff; text-decoration: none; padding: 11px 20px; border-radius: 12px; transition: opacity 0.2s, transform 0.2s; }
        .badge:hover { opacity: 0.85; transform: translateY(-1px); }
        .badge-text { display: flex; flex-direction: column; }
        .badge-sub { font-size: 9px; font-weight: 500; opacity: 0.7; line-height: 1; margin-bottom: 2px; }
        .badge-name { font-size: 14px; font-weight: 700; line-height: 1; }
        .badge-outline { background: transparent; border: 1.5px solid #D1D5DB; color: #0A0A0A; }
        .badge-outline:hover { border-color: #6B7280; }
        .dl-note { margin-top: 20px; font-size: 12px; color: #9CA3AF; }
        @media (max-width: 700px) {
          .dl-nav { padding: 0 20px; }
          .dl-card { flex-direction: column; border-radius: 24px; }
          .phone-side { min-height: 280px; }
          .content-side { padding: 36px 28px; align-items: center; text-align: center; }
          .or-row { max-width: 300px; }
          .store-badges { justify-content: center; }
        }
      `}</style>

      <nav className="dl-nav">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image src="/logo.svg" alt="Justlog" width={100} height={32} style={{ height: 32, width: "auto" }} />
        </Link>
        <Link href="/" className="nav-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Back
        </Link>
      </nav>

      <main className="dl-main">
        <div className="dl-card">
          <div className="phone-side">
            <Image src="/download-hero.png" alt="Justlog app" fill style={{ objectFit: "cover" }} />
          </div>

          <div className="content-side">
            <div className="dl-eyebrow">Get the app</div>
            <h1 className="dl-title">Scan to download<br/>the app</h1>

            <div className="qr-wrap">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#0A0A0A">
                <rect x="5" y="5" width="30" height="30" rx="4" fill="none" stroke="#0A0A0A" strokeWidth="5"/>
                <rect x="14" y="14" width="12" height="12" rx="1"/>
                <rect x="65" y="5" width="30" height="30" rx="4" fill="none" stroke="#0A0A0A" strokeWidth="5"/>
                <rect x="74" y="14" width="12" height="12" rx="1"/>
                <rect x="5" y="65" width="30" height="30" rx="4" fill="none" stroke="#0A0A0A" strokeWidth="5"/>
                <rect x="14" y="74" width="12" height="12" rx="1"/>
                <rect x="45" y="5" width="6" height="6" rx="1"/>
                <rect x="55" y="5" width="6" height="6" rx="1"/>
                <rect x="45" y="15" width="6" height="6" rx="1"/>
                <rect x="55" y="25" width="6" height="6" rx="1"/>
                <rect x="45" y="35" width="6" height="6" rx="1"/>
                <rect x="55" y="45" width="6" height="6" rx="1"/>
                <rect x="45" y="55" width="6" height="6" rx="1"/>
                <rect x="65" y="45" width="6" height="6" rx="1"/>
                <rect x="75" y="45" width="6" height="6" rx="1"/>
                <rect x="85" y="45" width="6" height="6" rx="1"/>
                <rect x="65" y="55" width="6" height="6" rx="1"/>
                <rect x="85" y="55" width="6" height="6" rx="1"/>
                <rect x="65" y="65" width="6" height="6" rx="1"/>
                <rect x="75" y="65" width="6" height="6" rx="1"/>
                <rect x="65" y="75" width="6" height="6" rx="1"/>
                <rect x="85" y="75" width="6" height="6" rx="1"/>
                <rect x="75" y="85" width="6" height="6" rx="1"/>
                <rect x="85" y="85" width="6" height="6" rx="1"/>
                <rect x="5" y="45" width="6" height="6" rx="1"/>
                <rect x="15" y="45" width="6" height="6" rx="1"/>
                <rect x="25" y="45" width="6" height="6" rx="1"/>
                <rect x="35" y="45" width="6" height="6" rx="1"/>
                <rect x="5" y="55" width="6" height="6" rx="1"/>
                <rect x="25" y="55" width="6" height="6" rx="1"/>
                <rect x="35" y="65" width="6" height="6" rx="1"/>
                <rect x="5" y="75" width="6" height="6" rx="1"/>
                <rect x="15" y="75" width="6" height="6" rx="1"/>
                <rect x="35" y="75" width="6" height="6" rx="1"/>
                <rect x="5" y="85" width="6" height="6" rx="1"/>
                <rect x="25" y="85" width="6" height="6" rx="1"/>
                <rect x="35" y="85" width="6" height="6" rx="1"/>
              </svg>
            </div>

            <div className="or-row">
              <div className="or-line" />
              <span className="or-text">OR</span>
              <div className="or-line" />
            </div>

            <div className="store-badges">
              <a href="#" className="badge badge-outline">
                <svg width="20" height="24" viewBox="0 0 814 1000" fill="#0A0A0A"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.8 131.9-317.9 261.5-317.9 69.1 0 126.4 45.5 170.9 45.5 42.7 0 109.2-48 188.1-48 30.5 0 134.4 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>
                <div className="badge-text">
                  <span className="badge-sub" style={{ color: "#6B7280" }}>Coming soon on</span>
                  <span className="badge-name" style={{ color: "#0A0A0A" }}>App Store</span>
                </div>
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="badge">
                <svg width="20" height="22" viewBox="0 0 24 24" fill="none"><path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 01-.61-1.2V3.014c0-.49.24-.94.609-1.2z" fill="white" opacity="0.9"/><path d="M17.04 8.26l2.2 1.24c1.01.57 1.01 2.43 0 3L17.04 13.74 14.2 12l2.84-3.74z" fill="white"/><path d="M13.792 12L3.609 22.186l10.1-5.686L13.792 12z" fill="white" opacity="0.6"/><path d="M13.792 12l.117-4.5-10.3-5.686L13.792 12z" fill="white" opacity="0.8"/></svg>
                <div className="badge-text">
                  <span className="badge-sub">Get it on</span>
                  <span className="badge-name">Google Play</span>
                </div>
              </a>
            </div>

            <p className="dl-note">iOS coming soon · Free to download · No card required</p>
          </div>
        </div>
      </main>
    </>
  );
}
