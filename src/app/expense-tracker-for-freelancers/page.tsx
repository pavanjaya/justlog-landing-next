import type { Metadata } from "next";
import SEOPage from "@/components/SEOPage";

export const metadata: Metadata = {
  title: "Expense Tracker for Freelancers — Justlog",
  description: "Keep work and personal expenses separate. Justlog lets freelancers create separate Spaces for clients, projects, and personal life. Export to CSV for tax time.",
  alternates: { canonical: "https://justlog.live/expense-tracker-for-freelancers" },
  openGraph: {
    title: "Expense Tracker for Freelancers — Justlog",
    description: "Separate work and personal expenses. Export to CSV for tax time.",
    url: "https://justlog.live/expense-tracker-for-freelancers",
    images: [{ url: "https://justlog.live/justlog.png" }],
  },
};

export default function FreelancerExpenseTrackerPage() {
  return (
    <SEOPage
      badge="For Freelancers"
      headline="Work expenses, personal expenses. <em>Never mixed up.</em>"
      subheadline="Justlog lets you keep a Work space for client reimbursables and a Personal space for daily life — completely separate, always clean. Tax time is a single export away."
      ctaText="Try it Free"
      ctaHref="https://app.justlog.live"
      secondaryCta={{ text: "Get on Android", href: "https://play.google.com/store/apps/details?id=live.justlog.app" }}
      image="/multiple-space.png"
      imageAlt="Justlog multiple spaces for freelancers"
      features={[
        { icon: "🗂️", title: "Separate Spaces", desc: "Create a Work space for client expenses and a Personal space for daily life. Each is a completely isolated ledger." },
        { icon: "📤", title: "CSV & PDF export", desc: "Export your Work space as a CSV for your accountant or PDF for reimbursement — filtered by date range." },
        { icon: "✍️", title: "Log in seconds", desc: "Just type what you spent. AI fills category and type instantly. No receipts to scan, no forms to fill." },
        { icon: "🔍", title: "Find any expense fast", desc: "Ask in plain English — 'Show all client meals this quarter' — and AI Search finds it instantly." },
        { icon: "📊", title: "Project spending summary", desc: "Story screen shows a category breakdown per Space. See where project money is going at a glance." },
        { icon: "🌍", title: "Multi-currency", desc: "Working with international clients? Log expenses in any currency with live conversion." },
      ]}
      howTitle="From expense to reimbursement in minutes"
      howSteps={[
        { step: "1", title: "Create a Work Space", desc: "Set up a dedicated Space for your freelance work in seconds. Name it by client or project." },
        { step: "2", title: "Log every expense as it happens", desc: "Type '1200 client dinner' or '450 Uber to meeting' — AI categorises it and saves it to your Work space." },
        { step: "3", title: "Export at tax time or month end", desc: "Tap Export on your Work space. Download a clean CSV or PDF with every expense, category, and date." },
      ]}
    />
  );
}
