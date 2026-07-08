"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { logEvent } from "@/lib/firebase";

export default function HomePage() {
  useEffect(() => {
    const loadScript = (src: string, id: string) =>
      new Promise<void>((resolve) => {
        if (document.getElementById(id)) { resolve(); return; }
        const s = document.createElement("script");
        s.id = id; s.src = src;
        s.onload = () => resolve();
        document.body.appendChild(s);
      });

    (async () => {
      await loadScript("https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js", "lenis-js");
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js", "gsap-js");
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js", "st-js");

      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      const Lenis = (window as any).Lenis;
      if (!gsap || !ScrollTrigger || !Lenis) return;

      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ duration: 1.25, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time: number) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
          const id = (a as HTMLAnchorElement).getAttribute("href");
          const target = document.querySelector(id!);
          if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -72, duration: 1.4 }); }
        });
      });

      const nav = document.querySelector("nav");
      ScrollTrigger.create({
        start: "top -40",
        onEnter: () => gsap.to(nav, { borderBottomColor: "rgba(0,0,0,0.07)", duration: 0.4 }),
        onLeaveBack: () => gsap.to(nav, { borderBottomColor: "transparent", duration: 0.4 }),
      });

      const IR = { immediateRender: false };
      gsap.from(".stat-item", Object.assign({ scrollTrigger: { trigger: ".stats-strip", start: "top 86%" }, y: 28, opacity: 0, duration: 0.75, ease: "power3.out", stagger: 0.12 }, IR));
      gsap.utils.toArray(".eyebrow, .section-h2, .section-p").forEach((el: any) => {
        gsap.from(el, Object.assign({ scrollTrigger: { trigger: el, start: "top 88%" }, y: 24, opacity: 0, duration: 0.72, ease: "power3.out" }, IR));
      });
      gsap.utils.toArray(".feature-row").forEach((row: any) => {
        const flip = row.classList.contains("flip");
        const visual = row.querySelector(".feature-visual");
        const h3 = row.querySelector("h3");
        const lead = row.querySelector(".lead");
        const paras = row.querySelectorAll(".feature-text p:not(.lead)");
        const items = row.querySelectorAll(".feature-list-item");
        const trig = { trigger: row, start: "top 82%" };
        if (h3) gsap.from(h3, Object.assign({ scrollTrigger: trig, y: 28, opacity: 0, duration: 0.8, ease: "power3.out" }, IR));
        if (lead) gsap.from(lead, Object.assign({ scrollTrigger: trig, y: 20, opacity: 0, duration: 0.7, ease: "power3.out", delay: 0.1 }, IR));
        if (paras.length) gsap.from(paras, Object.assign({ scrollTrigger: trig, y: 18, opacity: 0, duration: 0.65, ease: "power3.out", delay: 0.18, stagger: 0.1 }, IR));
        if (visual) gsap.from(visual, Object.assign({ scrollTrigger: trig, x: flip ? -36 : 36, opacity: 0, duration: 1.0, ease: "power3.out", delay: 0.12 }, IR));
        if (items.length) gsap.from(items, Object.assign({ scrollTrigger: { trigger: row, start: "top 78%" }, y: 14, opacity: 0, duration: 0.5, ease: "power3.out", stagger: 0.09, delay: 0.25 }, IR));
        if (visual) gsap.to(visual, { scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: 1.8 }, y: -24 });
      });
      gsap.from(".step", Object.assign({ scrollTrigger: { trigger: ".steps", start: "top 82%" }, y: 32, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.22 }, IR));
      gsap.from(".step-arrow", Object.assign({ scrollTrigger: { trigger: ".steps", start: "top 82%" }, opacity: 0, duration: 0.5, ease: "power2.out", stagger: 0.22, delay: 0.55 }, IR));
      gsap.from(".cat-pill", Object.assign({ scrollTrigger: { trigger: ".cat-wrap", start: "top 85%" }, y: 20, opacity: 0, duration: 0.55, ease: "power3.out", stagger: 0.05 }, IR));
      gsap.from([".cta-section h2", ".cta-p", ".cta-btns"], Object.assign({ scrollTrigger: { trigger: ".cta-section", start: "top 80%" }, y: 32, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.18 }, IR));
      gsap.from(".faq-group", Object.assign({ scrollTrigger: { trigger: ".faq-content", start: "top 82%" }, y: 26, opacity: 0, duration: 0.65, ease: "power3.out", stagger: 0.18 }, IR));
      gsap.from(".footer-top > *", Object.assign({ scrollTrigger: { trigger: "footer", start: "top 88%" }, y: 20, opacity: 0, duration: 0.6, ease: "power3.out", stagger: 0.1 }, IR));
      document.querySelectorAll(".stat-item").forEach((card: any) => {
        card.addEventListener("mouseenter", () => gsap.to(card, { y: -6, boxShadow: "0 12px 40px rgba(0,0,0,0.09)", duration: 0.35, ease: "power2.out" }));
        card.addEventListener("mouseleave", () => gsap.to(card, { y: 0, boxShadow: "none", duration: 0.4, ease: "power2.out" }));
      });
      document.querySelectorAll(".phone").forEach((phone: any) => {
        gsap.to(phone, { y: -8, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
      });
    })();

    document.querySelectorAll(".btn-hero").forEach((el: any) => {
      el.addEventListener("animationend", () => { el.style.animation = "none"; el.style.opacity = "1"; el.style.transform = "none"; }, { once: true });
    });
  }, []);

  function toggleFaq(btn: HTMLButtonElement) {
    const item = btn.closest(".faq-item") as HTMLElement;
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((el) => el.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  }

  const ck = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
  const ckW = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
  const ckP = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;

  return (
    <>
      <style>{`
        .hero-wrap{padding-top:72px;background:#FEFEFC;overflow:hidden;position:relative}
        .hero{max-width:960px;margin:0 auto;padding:96px 48px 40px;text-align:center;position:relative}
        .hero-eyebrow{display:inline-flex;align-items:center;gap:8px;background:var(--purple-soft);border-radius:100px;padding:5px 16px 5px 8px;font-size:12px;font-weight:600;color:var(--purple);letter-spacing:.01em;margin-bottom:32px;animation:jlFadeUp .7s cubic-bezier(.16,1,.3,1) .1s both}
        .hero-eyebrow-dot{width:6px;height:6px;border-radius:50%;background:var(--purple);animation:pulse 2s infinite}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}
        .hero h1{font-size:clamp(48px,6vw,88px);font-weight:900;letter-spacing:-3px;line-height:1;color:var(--text);margin-bottom:28px;animation:jlFadeUp 1s cubic-bezier(.16,1,.3,1) .28s both}
        .hero h1 em{font-style:normal;color:var(--purple)}
        .hero-sub{font-size:clamp(16px,1.8vw,20px);color:var(--muted);line-height:1.65;max-width:740px;margin:0 auto 48px;font-weight:400;animation:jlFadeUp .75s cubic-bezier(.16,1,.3,1) .62s both}
        .hero-actions{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-bottom:32px}
        .btn-hero{display:inline-flex;align-items:center;gap:10px;background:#5B21B6;color:#fff;text-decoration:none;padding:18px 36px;border-radius:16px;font-size:17px;font-weight:700;letter-spacing:-.2px;transition:opacity .2s,transform .2s;animation:jlFadeUp .55s cubic-bezier(.16,1,.3,1) .88s both}
        .btn-hero:hover{opacity:.88;transform:translateY(-2px)}
        @keyframes jlFadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
        .hero-visual-wrap{max-width:1100px;margin:0 auto;padding:0}
        .stats-strip{padding:64px 48px;display:flex;gap:16px;max-width:1100px;margin:0 auto}
        .stat-item{flex:1;padding:32px 28px;border-radius:20px;background:#F5F6F3;display:flex;flex-direction:column;gap:12px;transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s ease;cursor:default}
        .stat-icon{width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .stat-num{font-size:26px;font-weight:800;letter-spacing:-.5px;color:var(--text);line-height:1}
        .stat-label{font-size:13px;color:var(--muted);font-weight:500;line-height:1.4}
        .features-intro{text-align:center;padding:96px 48px 64px;max-width:1100px;margin:0 auto}
        .eyebrow{display:inline-block;font-size:12px;font-weight:600;color:var(--purple);text-transform:uppercase;letter-spacing:.1em;margin-bottom:14px}
        .section-h2{font-size:clamp(32px,4vw,52px);font-weight:800;letter-spacing:-1.5px;color:var(--text);line-height:1.1;margin-bottom:16px}
        .section-p{font-size:17px;color:var(--muted);line-height:1.7;max-width:520px;margin:0 auto}
        #features{padding:0 24px 48px}
        .feature-row{display:flex;align-items:flex-start;max-width:1100px;margin:0 auto 20px;padding:72px 48px;gap:80px;border:1px solid rgba(0,0,0,.08);border-radius:28px;overflow:hidden}
        .feature-row.flip{flex-direction:row-reverse}
        .feature-text{flex:1;max-width:460px}
        .feature-text h3{font-size:clamp(31px,3.6vw,46px);font-weight:800;letter-spacing:-1px;line-height:1.1;color:var(--text);margin-bottom:16px}
        .feature-text h3 em{font-style:normal;color:var(--purple)}
        .feature-text .lead{font-size:16px;font-weight:500;color:var(--text);line-height:1.6;margin-bottom:12px}
        .feature-text p{font-size:15px;color:var(--muted);line-height:1.75;margin-bottom:24px}
        .feature-list{display:flex;flex-direction:column;gap:8px}
        .feature-list-item{display:flex;align-items:flex-start;gap:10px;font-size:14px;color:var(--muted);line-height:1.5}
        .feature-list-item svg{flex-shrink:0;margin-top:2px}
        .feature-visual{flex:1;max-width:440px;display:flex;align-items:center;justify-content:center}
        .how{background:#F5F6F3;padding:96px 48px}
        .how-inner{max-width:960px;margin:0 auto}
        .steps{margin-top:64px;display:grid;grid-template-columns:1fr auto 1fr auto 1fr;align-items:start}
        .step{display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 24px}
        .step-icon-wrap{width:64px;height:64px;border-radius:20px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;position:relative}
        .step-num-badge{position:absolute;top:-6px;right:-6px;width:20px;height:20px;border-radius:50%;background:var(--purple);color:#fff;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;border:2px solid #fff}
        .step-body h4{font-size:17px;font-weight:700;color:var(--text);margin-bottom:8px}
        .step-body p{font-size:14px;color:var(--muted);line-height:1.65;max-width:220px;margin:0 auto}
        .step-arrow{display:flex;align-items:center;padding-top:32px;color:#D1D5DB}
        .categories{background:#F5F6F3;padding:96px 48px;border-top:1px solid #F0F0EE}
        .cat-wrap{max-width:800px;margin:48px auto 0;display:flex;flex-wrap:wrap;gap:8px;justify-content:center}
        .cat-pill{display:inline-flex;align-items:center;gap:7px;background:var(--bg2);border:1px solid #E5E7EB;border-radius:100px;padding:8px 16px;font-size:13px;font-weight:500;color:var(--text);transition:border-color .15s}
        .cat-pill:hover{border-color:#aaa}
        .cat-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
        .cta-section{background:var(--purple) url('/Start-logging.png') center center/cover no-repeat;padding:120px 48px;text-align:center;position:relative;overflow:hidden}
        .cta-section::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(255,255,255,.08) 0%,transparent 70%);pointer-events:none}
        .cta-section h2{font-size:clamp(40px,5.5vw,72px);font-weight:900;letter-spacing:-2.5px;color:#fff;margin-bottom:20px;line-height:1;position:relative}
        .cta-p{font-size:17px;color:rgba(255,255,255,.7);margin-bottom:52px;line-height:1.6;position:relative}
        .cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative}
        .btn-white{display:inline-flex;align-items:center;gap:10px;background:#fff;color:var(--text);text-decoration:none;padding:16px 30px;border-radius:14px;font-size:15px;font-weight:700;transition:opacity .2s,transform .2s;box-shadow:0 4px 20px rgba(0,0,0,.15)}
        .btn-white:hover{opacity:.93;transform:translateY(-2px)}
        .btn-white-outline{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.12);color:#fff;text-decoration:none;padding:16px 30px;border-radius:14px;font-size:15px;font-weight:600;border:1.5px solid rgba(255,255,255,.3);transition:background .2s,border-color .2s,transform .2s;backdrop-filter:blur(8px)}
        .btn-white-outline:hover{background:rgba(255,255,255,.2);border-color:rgba(255,255,255,.5);transform:translateY(-2px)}
        .faq{background:#F5F6F3;padding:96px 48px}
        .faq-inner{max-width:960px;margin:0 auto}
        .faq-content{display:flex;flex-direction:column;gap:48px;max-width:760px;margin:48px auto 0}
        .faq-group-label{font-size:11px;font-weight:700;color:var(--muted2);text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px}
        .faq-list{display:flex;flex-direction:column;background:#FEFEFC;border-radius:16px;padding:0 24px}
        .faq-item{border-bottom:1px solid #F3F4F6}
        .faq-item:last-child{border-bottom:none}
        .faq-q{width:100%;text-align:left;padding:20px 0;display:flex;align-items:center;justify-content:space-between;font-size:15px;font-weight:600;color:var(--text);background:none;border:none;cursor:pointer;gap:16px;transition:color .15s}
        .faq-q:hover{color:var(--purple)}
        .faq-chevron{flex-shrink:0;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#F3F4F6;color:#6B7280;transition:transform .25s,color .2s,background .2s}
        .faq-item.open .faq-chevron{transform:rotate(180deg);color:var(--purple);background:rgba(124,58,237,.1)}
        .faq-a{max-height:0;overflow:hidden;transition:max-height .35s ease,padding .25s ease;padding:0;font-size:14px;color:#4B5563;line-height:1.75}
        .faq-item.open .faq-a{max-height:500px;padding-bottom:20px}
        .faq-a a{color:var(--purple)}
        .faq-a strong{color:var(--text)}
        @media(max-width:900px){
          .feature-row{flex-direction:column!important;gap:48px;padding:60px 32px}
          .feature-text,.feature-visual{max-width:100%}
          .stats-strip{padding:48px 32px}
          .features-intro{padding:72px 32px 0}
          .how,.categories,.faq{padding:80px 32px}
          .cta-section{padding:96px 32px}
        }
        @media(max-width:680px){
          .steps{grid-template-columns:1fr;gap:40px}
          .step-arrow{display:none}
          .step{padding:0}
        }
        @media(max-width:640px){
          .hero-wrap{padding-top:64px}
          .hero{padding:56px 20px 48px}
          .hero h1{font-size:clamp(38px,10vw,54px);letter-spacing:-1.5px;line-height:1.08}
          .hero-sub{font-size:15px;margin-bottom:36px}
          .hero-actions{flex-direction:column;align-items:stretch;gap:10px;margin-bottom:0}
          .btn-hero{width:100%;justify-content:center;padding:17px 24px;font-size:16px}
          .hero-visual-wrap{padding:0 16px}
          .stats-strip{padding:36px 20px;gap:10px;display:grid;grid-template-columns:1fr 1fr}
          .stat-item{padding:24px 20px}
          .stat-num{font-size:22px}
          .features-intro{padding:60px 20px 48px}
          .feature-row{padding:48px 20px;gap:36px}
          .feature-text h3{font-size:clamp(26px,7vw,34px);letter-spacing:-.5px}
          .how,.categories{padding:60px 20px}
          .cta-section{padding:72px 20px}
          .cta-p{font-size:15px;margin-bottom:36px}
          .cta-btns{flex-direction:column;align-items:stretch;gap:10px}
          .btn-white,.btn-white-outline{width:100%;justify-content:center}
          .faq{padding:60px 20px}
          .faq-q{font-size:14px}
        }
        @media(max-width:400px){
          .hero h1{font-size:34px}
          .cta-section h2{font-size:34px;letter-spacing:-1px}
        }
      `}</style>

      <Nav variant="landing" />

      {/* HERO */}
      <div className="hero-wrap">
        <div className="hero">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            AI-powered · Free to start
          </div>
          <h1>Log money<br/>the way you <em>talk<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style={{width:"0.45em",height:"0.45em",verticalAlign:"0.15em",display:"inline-block",fill:"#7C3AED",flexShrink:0,marginLeft:"0.08em"}}><path d="M32 4C24.3 4 18 10.3 18 18v14c0 7.7 6.3 14 14 14s14-6.3 14-14V18C46 10.3 39.7 4 32 4z"/><path d="M52 30c-1.1 0-2 .9-2 2 0 9.9-8.1 18-18 18S14 41.9 14 32c0-1.1-.9-2-2-2s-2 .9-2 2c0 11.9 9.1 21.7 20.8 22.8V60h-6.8c-1.1 0-2 .9-2 2s.9 2 2 2h17.9c1.1 0 2-.9 2-2s-.9-2-2-2h-6.8v-5.2C46.9 53.7 56 43.9 56 32c0-1.1-.9-2-2-2z"/></svg>.</em></h1>
          <p className="hero-sub">No forms. No categories. No friction.<br/>Just type what you spent, Justlog understands and handles the rest.</p>
          <div className="hero-actions">
            <Link href="/download" className="btn-hero" onClick={() => logEvent("cta_click", { location: "hero" })}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 01-.61-1.2V3.014c0-.49.24-.94.609-1.2z" fill="white" opacity="0.9"/><path d="M17.04 8.26l2.2 1.24c1.01.57 1.01 2.43 0 3L17.04 13.74 14.2 12l2.84-3.74z" fill="white"/><path d="M13.792 12L3.609 22.186l10.1-5.686L13.792 12z" fill="white" opacity="0.6"/><path d="M13.792 12l.117-4.5-10.3-5.686L13.792 12z" fill="white" opacity="0.8"/></svg>
              Get the App, Free
            </Link>
          </div>
          <a href="https://app.justlog.live" target="_blank" rel="noopener noreferrer" style={{display:"block",textAlign:"center",marginTop:16,fontSize:13,fontWeight:500,color:"#888",textDecoration:"none",transition:"color 0.15s"}} onMouseOver={(e)=>(e.currentTarget.style.color="#000")} onMouseOut={(e)=>(e.currentTarget.style.color="#888")}>Try Web App</a>
        </div>
        <div className="hero-visual-wrap">
          <div style={{borderRadius:28,overflow:"hidden"}}>
            <Image src="/hero-visual.png" alt="Justlog app overview" width={1100} height={700} style={{width:"100%",height:"auto",display:"block"}} priority />
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-strip">
        {([
          { bg:"rgba(124,58,237,0.10)", color:"#7C3AED", num:"Any", label:"Language, powered by AI", icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg> },
          { bg:"rgba(16,185,129,0.10)", color:"#059669", num:"<1s", label:"To log a transaction", icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
          { bg:"rgba(245,158,11,0.10)", color:"#D97706", num:"Free", label:"Forever plan, no card needed", icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> },
          { bg:"rgba(59,130,246,0.10)", color:"#2563EB", num:"Zero", label:"Bank connections required", icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
        ] as const).map(({ bg, color, num, label, icon }) => (
          <div key={num} className="stat-item">
            <div className="stat-icon" style={{ background: bg, color }}>{icon}</div>
            <div className="stat-num">{num}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <div id="features" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="features-intro">
          <span className="eyebrow">Why Justlog</span>
          <h2 className="section-h2">Just log it. We handle the rest.</h2>
          <p className="section-p">No categories. No forms. No spreadsheets.<br/>Type what happened — Justlog figures out the rest.</p>
        </div>

        {([
          { flip:false, bg:undefined, img:"/just-type.png", alt:"Justlog Type or Say it", h3:<>Type it or say it.<br/><em>Done in a second.</em></>, lead:"The fastest way to track money, ever.", p:"Type what you spent in plain language. AI reads it, identifies what it is, and logs it with the right category, amount, and type — income or expense — automatically.", items:["Works in any language, powered by AI","Voice input, speak naturally, done","Quick chips for repeat entries, one tap","Category, amount, type, all auto-assigned"] },
          { flip:true, bg:"#FEFEFC", img:"/multiple-space.png", alt:"Justlog Multiple Spaces", h3:<>One app. Multiple spaces.<br/><em>Total clarity.</em></>, lead:"Keep different parts of your financial life separate, cleanly.", p:"Create a Work space for reimbursable expenses. A Travel space for your next trip. A Home space for shared bills. Each Space is a completely isolated ledger.", items:["Free plan includes one Personal space","Pro unlocks unlimited spaces","Archive finished spaces, they stay accessible","Link spaces for a combined overview"] },
          { flip:false, bg:undefined, img:"/group-split.png", alt:"Justlog Group Split", h3:<>Group trips,<br/><em>without the drama.</em></>, lead:"Shared trips and bills, finally sorted.", p:"Create a Split Space for any group. Justlog tracks who paid what, calculates the fair share per person, and shows a live settlement summary.", items:["One entry → two transactions created automatically","Live settlement, who owes what, always current","Invite members via link, free to join"] },
          { flip:true, bg:"var(--bg2)", img:"/story.png", alt:"Justlog Story", h3:<>See your spending<br/>as a <em>clear picture.</em></>, lead:"Numbers are forgettable. Patterns are not.", p:"The Story screen turns your transaction list into a visual category breakdown, updated in real time.", items:["Category breakdown with colour-coded bars","Income vs expense at a glance","Updates the moment you log anything"] },
          { flip:false, bg:undefined, img:"/ai-search.png", alt:"Justlog AI Search", h3:<>Ask.<br/><em>Don&apos;t search.</em></>, lead:"Stop scrolling. Start asking.", p:"AI Search lets you query your entire transaction history in plain language.", items:['"How much did I spend on food this month?"','"Show all transactions with Alex"','"What\'s my biggest expense this week?"'] },
          { flip:true, bg:"var(--bg2)", img:"/data-export.png", alt:"Justlog Export", h3:<>Export your records<br/>in <em>one tap.</em></>, lead:"Tax time. Accountant. Reimbursement. Always ready.", p:"Export any Space as a clean PDF report or CSV spreadsheet. Choose your date range and download instantly.", items:["PDF, formatted report with category breakdown","CSV, clean spreadsheet for any accounting tool","1 month · 3 months · 6 months · 1 year · All time"] },
          { flip:false, bg:undefined, img:"/lock.png", alt:"Justlog Privacy & Lock", h3:<>Your data.<br/><em>Only yours.</em></>, lead:"We take privacy seriously, because financial data is personal.", p:"Justlog is a manual journal. No bank connection. No SMS access. No automatic imports. You choose what goes in.", items:["No bank connection, no SMS access, ever","Encrypted at rest (AES-256) and in transit (TLS)","Row-level security, invisible to all other users","Optional PIN lock for device-level protection","We never sell your data, not ever"] },
        ] as const).map((f, i) => (
          <div key={i} className={`feature-row${f.flip ? " flip" : ""}`} style={f.bg ? { background: f.bg } : undefined}>
            <div className="feature-text">
              <h3>{f.h3}</h3>
              <p className="lead">{f.lead}</p>
              <p>{f.p}</p>
              <div className="feature-list">
                {f.items.map((item) => <div key={item} className="feature-list-item">{ck}{item}</div>)}
              </div>
            </div>
            <div className="feature-visual">
              <Image src={f.img} alt={f.alt} width={460} height={460} style={{ width:"100%", maxWidth:460, height:"auto", display:"block" }} />
            </div>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="how-inner">
          <div style={{ textAlign:"center" }}>
            <span className="eyebrow">How it works</span>
            <h2 className="section-h2">Three steps. That&apos;s it.</h2>
            <p className="section-p">No onboarding maze. No tutorial. No credit card required.<br/>Just open and start.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-icon-wrap" style={{background:"rgba(124,58,237,0.08)"}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <div className="step-num-badge">1</div>
              </div>
              <div className="step-body"><h4>Sign up in 10 seconds</h4><p>Email or Google. Your Personal space is ready instantly, no setup, no survey, no billing.</p></div>
            </div>
            <div className="step-arrow"><svg width="32" height="16" viewBox="0 0 32 16" fill="none"><path d="M0 8h28M22 2l8 6-8 6" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <div className="step">
              <div className="step-icon-wrap" style={{background:"rgba(16,185,129,0.08)"}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                <div className="step-num-badge">2</div>
              </div>
              <div className="step-body"><h4>Type or speak what you spent</h4><p>Say &ldquo;lunch $12&rdquo; or &ldquo;gas $65&rdquo;. AI parses it, assigns a category, and logs it in under a second.</p></div>
            </div>
            <div className="step-arrow"><svg width="32" height="16" viewBox="0 0 32 16" fill="none"><path d="M0 8h28M22 2l8 6-8 6" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <div className="step">
              <div className="step-icon-wrap" style={{background:"rgba(245,158,11,0.08)"}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                <div className="step-num-badge">3</div>
              </div>
              <div className="step-body"><h4>See where your money goes</h4><p>Open Story for a visual breakdown. Search with AI. Export for tax time. Finally clear.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <div style={{ textAlign:"center" }}>
          <span className="eyebrow">Smart Categories</span>
          <h2 className="section-h2">Auto-categorised,<br/>every time.</h2>
          <p className="section-p">Justlog assigns the right category instantly, no tagging, no manual selection, ever.</p>
        </div>
        <div className="cat-wrap">
          {([["#7C3AED","Food & Dining"],["#F59E0B","Transport"],["#3B82F6","Shopping"],["#6366F1","Bills & Utilities"],["#10B981","Health & Medical"],["#EF4444","Rent & Housing"],["#84CC16","Entertainment"],["#059669","Salary & Income"],["#F97316","Education"],["#8B5CF6","Investments"],["#EC4899","Personal Care"],["#6B7280","Others"]] as const).map(([color,label])=>(
            <div key={label} className="cat-pill"><div className="cat-dot" style={{background:color}}/>{label}</div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section style={{background:"#FEFEFC",padding:"96px 48px",textAlign:"center"}}>
        <div style={{maxWidth:760,margin:"0 auto"}}>
          <span className="eyebrow">Pricing</span>
          <h2 className="section-h2" style={{marginTop:16}}>Simple. No surprises.</h2>
          <p className="section-p" style={{marginTop:12,marginBottom:56}}>Start free. Upgrade when you need more.</p>
          <div style={{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap"}}>
            <div style={{flex:1,minWidth:260,maxWidth:340,background:"#fff",border:"1.5px solid #EBEBEA",borderRadius:24,padding:"32px 28px",textAlign:"left"}}>
              <div style={{fontSize:12,fontWeight:700,color:"#9CA3AF",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:12}}>Free</div>
              <div style={{fontSize:40,fontWeight:900,color:"#000",letterSpacing:"-1.5px"}}>₹0</div>
              <div style={{fontSize:13,color:"#9CA3AF",marginTop:4,marginBottom:24}}>Forever free</div>
              <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:28}}>
                {["1 Personal space","Unlimited transactions","AI logging & voice input"].map(t=><div key={t} style={{display:"flex",alignItems:"center",gap:10,fontSize:14,color:"#444"}}>{ckP}{t}</div>)}
              </div>
              <Link href="/download" style={{display:"block",textAlign:"center",padding:12,borderRadius:12,border:"1.5px solid #EBEBEA",fontSize:14,fontWeight:600,color:"#555",textDecoration:"none"}}>Get started free</Link>
            </div>
            <div style={{flex:1,minWidth:260,maxWidth:340,background:"#5B21B6",border:"1.5px solid #5B21B6",borderRadius:24,padding:"32px 28px",textAlign:"left",position:"relative"}}>
              <div style={{position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",background:"#FACC15",color:"#1a1000",fontSize:11,fontWeight:700,padding:"4px 14px",borderRadius:20,letterSpacing:"0.04em",whiteSpace:"nowrap"}}>MOST POPULAR</div>
              <div style={{fontSize:12,fontWeight:700,color:"rgba(255,255,255,0.6)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:12}}>Pro</div>
              <div style={{fontSize:40,fontWeight:900,color:"#fff",letterSpacing:"-1.5px"}}>₹299</div>
              <div style={{fontSize:13,color:"rgba(255,255,255,0.6)",marginTop:4,marginBottom:24}}>per year · less than ₹1/day</div>
              <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:28}}>
                {["Everything in Free","Unlimited spaces","Group Split & Shared Space","Story summary","AI Search","PDF & CSV export","PIN lock"].map(t=><div key={t} style={{display:"flex",alignItems:"center",gap:10,fontSize:14,color:"rgba(255,255,255,0.9)"}}>{ckW}{t}</div>)}
              </div>
              <Link href="/download" style={{display:"block",textAlign:"center",padding:12,borderRadius:12,background:"#fff",fontSize:14,fontWeight:700,color:"#5B21B6",textDecoration:"none"}}>Get Pro</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="download">
        <h2>Start logging<br/>today. It&apos;s <em style={{color:"#FACC15"}}>free.</em></h2>
        <p className="cta-p">No credit card. No commitment. Your Personal space is ready the moment you sign up.</p>
        <div className="cta-btns">
          <Link href="/download" className="btn-white" onClick={() => logEvent("cta_click", { location: "bottom" })}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/></svg>
            Download Now
          </Link>
          <a href="https://app.justlog.live" className="btn-white-outline" target="_blank" rel="noopener noreferrer">Open Web App →</a>
        </div>
        <p style={{marginTop:20,fontSize:12,color:"rgba(255,255,255,0.25)"}}>iOS coming soon</p>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="faq-inner">
          <div style={{ textAlign:"center" }}>
            <span className="eyebrow">FAQ</span>
            <h2 className="section-h2">Common questions.</h2>
          </div>
          <div className="faq-content">
            {([
              { label:"Getting Started", items:[
                { q:"Is Justlog free?", a:"Yes the free plan includes one Personal space with unlimited transactions, AI logging, and voice input. Forever free, no time limit. Pro unlocks multiple spaces, Split spaces, AI Search, PDF & CSV export, Story summary and PIN lock." },
                { q:"Do I need an account?", a:"Yes a free account saves your data and syncs across devices. Sign up with Google or email. Takes about 10 seconds, no billing required." },
                { q:"Is there a web version?", a:<span>Yes <a href="https://app.justlog.live" target="_blank" rel="noopener noreferrer">app.justlog.live</a> works on any device. iPhone users: open in Safari and tap &ldquo;Add to Home Screen&rdquo; for a full-screen experience. A native iOS app is coming soon.</span> },
              ]},
              { label:"Logging Money", items:[
                { q:"How does natural language logging work?", a:'Type a description of what you spent in any language. AI reads it, extracts the amount and category, and logs it automatically. "lunch $12" → Food expense, $12. "salary $4500" → Income entry.' },
                { q:"Which languages does Justlog support?", a:"Any language. Powered by AI, Justlog understands virtually every language — English, Arabic, French, Japanese, Spanish, and hundreds more." },
                { q:"Can I edit or delete a transaction?", a:"Yes. Tap any transaction to edit the description, amount, category, date, or type. Changes reflect immediately in your balance and Story summary." },
              ]},
              { label:"Spaces & Split", items:[
                { q:"What is a Space?", a:"A Space is a separate financial context, like Personal, Work, or Travel. Each has its own transaction list, balance, summary, and settings. Free plan includes one Personal space; Pro unlocks unlimited." },
                { q:"What's the difference between Solo Split and Group Split?", a:<span><strong>Solo Split</strong> — you manage everything, others don&apos;t need the app.<br/><br/><strong>Group Split</strong> — each person joins via invite link and logs their own. Everything syncs into one shared ledger in real time.</span> },
                { q:"How does settlement work?", a:"Justlog calculates the fair share per person and shows each person's balance — who paid more (gets back) and who paid less (owes). Updates in real time." },
              ]},
              { label:"Privacy & Security", items:[
                { q:"Is my financial data secure?", a:<span>Yes. Data is stored on AWS infrastructure with AES-256 encryption at rest and TLS in transit. Row-level security means your data is completely invisible to all other users. <Link href="/privacy">Privacy Policy →</Link></span> },
                { q:"Does Justlog connect to my bank?", a:"No. Justlog is a manual journal. No bank connection, no SMS reading, no automatic imports of any kind." },
              ]},
              { label:"Subscription", items:[
                { q:"What's included in the free trial?", a:"7 days of full Pro access, no credit card required. If you don't subscribe, your account stays on the free plan and all your data is kept." },
                { q:"What happens if I cancel Pro?", a:"Your account reverts to the free plan. You keep your Personal space and all transactions. Extra spaces become read-only, nothing is deleted. Cancel anytime from Settings or Google Play." },
              ]},
            ] as const).map((group) => (
              <div key={group.label} className="faq-group">
                <div className="faq-group-label">{group.label}</div>
                <div className="faq-list">
                  {group.items.map((item) => (
                    <div key={item.q} className="faq-item">
                      <button className="faq-q" onClick={(e) => toggleFaq(e.currentTarget)}>
                        {item.q}
                        <span className="faq-chevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg></span>
                      </button>
                      <div className="faq-a">{item.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer anchors />
    </>
  );
}
