import type { Metadata } from "next";
import SEOPage from "@/components/SEOPage";

export const metadata: Metadata = {
  title: "AI Expense Tracker — Justlog",
  description: "The smartest AI expense tracker. Just type what you spent in plain English. No forms, no categories to fill. AI does the rest instantly.",
  alternates: { canonical: "https://justlog.live/ai-expense-tracker" },
  openGraph: {
    title: "AI Expense Tracker — Justlog",
    description: "Just type what you spent. AI parses amount, category, and type instantly.",
    url: "https://justlog.live/ai-expense-tracker",
    images: [{ url: "https://justlog.live/justlog.png" }],
  },
};

export default function AIExpenseTrackerPage() {
  return (
    <SEOPage
      badge="AI Expense Tracker"
      headline="The <em>smartest</em> way to track expenses"
      subheadline="Just type what you spent in plain English. Justlog's AI instantly parses the amount, category, and type — no forms, no dropdowns, no friction."
      ctaText="Try it Free"
      ctaHref="https://app.justlog.live"
      secondaryCta={{ text: "Get on Android", href: "https://play.google.com/store/apps/details?id=live.justlog.app" }}
      image="/logging-screenshot.png"
      imageAlt="Justlog AI expense tracker interface"
      features={[
        { icon: "✍️", title: "Type naturally", desc: "Write '200 lunch with client' and Justlog fills amount, category, and type automatically." },
        { icon: "⚡", title: "Instant parsing", desc: "AI understands your entry in under a second. No waiting, no loading spinner." },
        { icon: "🗂️", title: "Auto categorisation", desc: "Food, Transport, Shopping, Bills — AI assigns the right category every time." },
        { icon: "🔍", title: "AI Search", desc: "Query your history in plain English. 'How much did I spend on food this month?' Just ask." },
        { icon: "📊", title: "Smart insights", desc: "See your spending patterns by category, day, and month with the Story screen." },
        { icon: "🔒", title: "Private by design", desc: "No bank connection. No SMS access. You control every entry, always." },
      ]}
      howTitle="Logging an expense takes 3 seconds"
      howSteps={[
        { step: "1", title: "Open Justlog and type your entry", desc: "Write anything natural — '450 Uber to airport', 'Netflix 649', 'groceries 1200'. The AI understands." },
        { step: "2", title: "AI fills the details", desc: "Amount, category, and expense type are parsed instantly. Tap send and it's logged." },
        { step: "3", title: "See your spending picture", desc: "Open Story for a visual breakdown updated in real time. Search your history with AI anytime." },
      ]}
    />
  );
}
