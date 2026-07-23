import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { posts, getPost, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Justlog Blog`,
    description: post.description,
    alternates: { canonical: `https://justlog.live/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://justlog.live/blog/${post.slug}`,
      type: "article",
      images: [{ url: "https://justlog.live/justlog.png" }],
    },
  };
}

function renderMarkdown(content: string): string {
  const lines = content.split('\n');
  const result: string[] = [];
  let inList = false;
  let inTable = false;
  let paraBuffer: string[] = [];

  const flushPara = () => {
    if (paraBuffer.length > 0) {
      const text = paraBuffer.join(' ').trim();
      if (text) result.push(`<p>${text}</p>`);
      paraBuffer = [];
    }
  };

  const inlineFormat = (line: string) =>
    line
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (line.startsWith('## ')) {
      flushPara();
      if (inList) { result.push('</ul>'); inList = false; }
      if (inTable) { result.push('</table>'); inTable = false; }
      result.push(`<h2>${inlineFormat(line.slice(3))}</h2>`);
    } else if (line.startsWith('### ')) {
      flushPara();
      if (inList) { result.push('</ul>'); inList = false; }
      result.push(`<h3>${inlineFormat(line.slice(4))}</h3>`);
    } else if (line.startsWith('- ')) {
      flushPara();
      if (!inList) { result.push('<ul>'); inList = true; }
      result.push(`<li>${inlineFormat(line.slice(2))}</li>`);
    } else if (line.startsWith('| ')) {
      flushPara();
      if (inList) { result.push('</ul>'); inList = false; }
      if (!inTable) { result.push('<table>'); inTable = true; }
      const cells = line.split('|').map(c => c.trim()).filter(Boolean);
      if (!cells.every(c => /^[-:]+$/.test(c))) {
        result.push('<tr>' + cells.map(c => `<td>${inlineFormat(c)}</td>`).join('') + '</tr>');
      }
    } else if (line === '---' || line === '') {
      if (inList) { result.push('</ul>'); inList = false; }
      if (inTable) { result.push('</table>'); inTable = false; }
      flushPara();
    } else {
      if (inList) { result.push('</ul>'); inList = false; }
      if (inTable) { result.push('</table>'); inTable = false; }
      paraBuffer.push(inlineFormat(line));
    }
  }

  flushPara();
  if (inList) result.push('</ul>');
  if (inTable) result.push('</table>');

  return result.join('\n');
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const html = renderMarkdown(post.content);

  return (
    <>
      <style>{`
        :root { --text: #1a1a1a; --muted: #555; --muted2: #999; --bg2: #F9F9F7; --accent: #5B21B6; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: var(--font-jakarta, system-ui, sans-serif); color: var(--text); background: #FEFEFC; }
        .post-hero { padding: 120px 24px 48px; max-width: 720px; margin: 0 auto; }
        .post-back { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #5B21B6; text-decoration: none; margin-bottom: 32px; }
        .post-back:hover { opacity: 0.7; }
        .post-category { display: inline-block; background: #EDE9FE; color: #5B21B6; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; }
        .post-title { font-size: clamp(28px, 5vw, 44px); font-weight: 800; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 16px; }
        .post-meta { font-size: 13px; color: var(--muted2); display: flex; gap: 16px; margin-bottom: 48px; padding-bottom: 32px; border-bottom: 1px solid #F0F0EE; }
        .post-body { max-width: 720px; margin: 0 auto; padding: 0 24px 80px; font-size: 17px; line-height: 1.8; color: #2a2a2a; }
        .post-body h2 { font-size: 24px; font-weight: 800; margin: 48px 0 16px; letter-spacing: -0.01em; color: var(--text); }
        .post-body h3 { font-size: 19px; font-weight: 700; margin: 32px 0 12px; color: var(--text); }
        .post-body p { margin-bottom: 20px; }
        .post-body ul { margin: 0 0 20px 24px; }
        .post-body li { margin-bottom: 8px; }
        .post-body strong { font-weight: 700; color: var(--text); }
        .post-body a { color: #5B21B6; text-decoration: underline; text-underline-offset: 3px; }
        .post-body a:hover { opacity: 0.7; }
        .post-body table { width: 100%; border-collapse: collapse; margin: 24px 0 32px; font-size: 14px; overflow-x: auto; display: block; }
        .post-body td { padding: 10px 14px; border: 1px solid #E5E5E5; }
        .post-body tr:first-child td { font-weight: 700; background: var(--bg2); }
        .post-body tr:nth-child(even) td { background: #FAFAFA; }
        .post-cta { max-width: 720px; margin: 0 auto 80px; padding: 0 24px; }
        .post-cta-inner { background: #5B21B6; border-radius: 20px; padding: 40px 32px; text-align: center; }
        .post-cta-inner h3 { font-size: 22px; font-weight: 800; color: #fff; margin-bottom: 8px; }
        .post-cta-inner p { font-size: 15px; color: rgba(255,255,255,0.7); margin-bottom: 24px; }
        .post-cta-inner a { display: inline-block; background: #fff; color: #5B21B6; padding: 12px 28px; border-radius: 12px; font-size: 15px; font-weight: 700; text-decoration: none; }
        .post-cta-inner a:hover { opacity: 0.9; }
        @media (max-width: 640px) {
          .post-hero { padding: 100px 20px 36px; }
          .post-body { padding: 0 20px 60px; font-size: 16px; }
        }
      `}</style>

      <Nav variant="page" />

      <div className="post-hero">
        <Link href="/blog" className="post-back">
          ← All posts
        </Link>
        <div className="post-category">{post.category}</div>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <span>{post.author}</span>
          <span>{formatDate(post.date)}</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />

      <div className="post-cta">
        <div className="post-cta-inner">
          <h3>Start tracking your expenses today</h3>
          <p>Free plan. No credit card. No bank connection needed.</p>
          <a href="https://app.justlog.live" target="_blank" rel="noopener noreferrer">Try Justlog Free →</a>
        </div>
      </div>

      <Footer />
    </>
  );
}
