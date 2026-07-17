import type { Metadata } from "next";
import SEOPage from "@/components/SEOPage";

export const metadata: Metadata = {
  title: "Expense Tracker Without Categories — Justlog",
  description: "Tired of picking categories every time? Justlog lets you just type what you spent. AI assigns the category automatically. Simple, fast, frictionless.",
  alternates: { canonical: "https://justlog.live/expense-tracker-without-categories" },
  openGraph: {
    title: "Expense Tracker Without Categories — Justlog",
    description: "Just type what you spent. AI picks the category. No dropdowns, no friction.",
    url: "https://justlog.live/expense-tracker-without-categories",
    images: [{ url: "https://justlog.live/justlog.png" }],
  },
};

export default function NoCategoriesExpenseTrackerPage() {
  return (
    <SEOPage
      badge="Simple Expense Tracker"
      headline="Expense tracking <em>without</em> the category dropdown"
      subheadline="Most expense apps make you pick a category every single time. Justlog doesn't. Just type what you spent and AI figures out the rest — instantly."
      ctaText="Try it Free"
      ctaHref="https://app.justlog.live"
      secondaryCta={{ text: "Get on Android", href: "https://play.google.com/store/apps/details?id=live.justlog.app" }}
      image="/home-screenshot.png"
      imageAlt="Justlog simple expense tracker without categories"
      features={[
        { icon: "✍️", title: "Just type and send", desc: "Type '350 pizza' or '1500 electricity bill'. AI assigns Food or Bills automatically — no dropdown needed." },
        { icon: "🧠", title: "AI fills everything", desc: "Amount, category, and expense type are all parsed from your natural language entry. Zero manual selection." },
        { icon: "🎙️", title: "Or just speak it", desc: "Don't want to type either? Tap the mic and say what you spent. It's logged in 3 seconds." },
        { icon: "📊", title: "Categories still work for you", desc: "Even though you never pick them manually, your spending is categorised behind the scenes for reports and insights." },
        { icon: "⚡", title: "Fastest log experience", desc: "No forms, no required fields, no confirmation screens. One line, one tap. Done." },
        { icon: "💡", title: "Smart suggestions", desc: "Justlog learns your habits and suggests recent entries so repeat expenses take one tap, not one sentence." },
      ]}
      howTitle="The fastest expense log in the world"
      howSteps={[
        { step: "1", title: "Open Justlog and type your entry", desc: "Write exactly what you spent in plain words. No format required, no fields to fill." },
        { step: "2", title: "AI parses it in under a second", desc: "Justlog extracts amount, assigns category, and sets expense type — all without you touching a dropdown." },
        { step: "3", title: "Check your spending picture", desc: "Story shows a clean category breakdown even though you never selected a single one manually." },
      ]}
    />
  );
}
