import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { posts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Justlog",
  description: "Tips, stories, and guides on expense tracking, saving money, and building better financial habits.",
  alternates: { canonical: "https://justlog.live/blog" },
};

const CATEGORY_COLORS: Record<string, string> = {
  Reviews: "#EDE9FE",
  Tips: "#DCFCE7",
  Story: "#FEF3C7",
};

const CATEGORY_TEXT: Record<string, string> = {
  Reviews: "#5B21B6",
  Tips: "#166534",
  Story: "#92400E",
};

export default function BlogPage() {
  return (
    <>
      <style>{`
        :root { --text: #1a1a1a; --muted: #555; --muted2: #999; --bg2: #F9F9F7; --accent: #5B21B6; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: var(--font-jakarta, system-ui, sans-serif); color: var(--text); background: #FEFEFC; }
        .blog-hero { padding: 120px 24px 60px; text-align: center; max-width: 700px; margin: 0 auto; }
        .blog-hero h1 { font-size: clamp(32px, 5vw, 52px); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 12px; }
        .blog-hero p { font-size: 17px; color: var(--muted); line-height: 1.6; }
        .blog-grid { max-width: 1100px; margin: 0 auto 100px; padding: 0 24px; display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
        .blog-card { background: var(--bg2); border-radius: 20px; padding: 28px; text-decoration: none; color: inherit; display: flex; flex-direction: column; gap: 12px; transition: transform 0.15s, box-shadow 0.15s; }
        .blog-card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
        .blog-card-badge { display: inline-block; padding: 4px 12px; border-radius: 100px; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; width: fit-content; }
        .blog-card-title { font-size: 19px; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em; }
        .blog-card-desc { font-size: 14px; color: var(--muted); line-height: 1.6; flex: 1; }
        .blog-card-meta { font-size: 12px; color: var(--muted2); display: flex; gap: 8px; align-items: center; }
        .blog-card-meta span::before { content: "·"; margin-right: 8px; }
        .blog-card-meta span:first-child::before { content: ""; margin-right: 0; }
        @media (max-width: 640px) {
          .blog-hero { padding: 100px 20px 48px; }
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Nav variant="page" />

      <div className="blog-hero">
        <h1>The Justlog Blog</h1>
        <p>Tips, stories, and guides on tracking money, building habits, and taking control of your finances.</p>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
            <div
              className="blog-card-badge"
              style={{ background: CATEGORY_COLORS[post.category] ?? "#F3F4F6", color: CATEGORY_TEXT[post.category] ?? "#374151" }}
            >
              {post.category}
            </div>
            <div className="blog-card-title">{post.title}</div>
            <div className="blog-card-desc">{post.description}</div>
            <div className="blog-card-meta">
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
}
