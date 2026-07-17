import type { Metadata } from "next";
import SEOPage from "@/components/SEOPage";

export const metadata: Metadata = {
  title: "WhatsApp Expense Tracker — Justlog",
  description: "Log expenses by sending a WhatsApp message. Justlog's WhatsApp bot is coming soon — track money without opening any app. Join the waitlist.",
  alternates: { canonical: "https://justlog.live/whatsapp-expense-tracker" },
  openGraph: {
    title: "WhatsApp Expense Tracker — Justlog",
    description: "Log expenses by sending a WhatsApp message. Coming soon.",
    url: "https://justlog.live/whatsapp-expense-tracker",
    images: [{ url: "https://justlog.live/justlog.png" }],
  },
};

export default function WhatsAppExpenseTrackerPage() {
  return (
    <SEOPage
      badge="Coming Soon"
      headline="Log expenses by <em>WhatsApp message</em>"
      subheadline="Imagine sending '350 lunch' on WhatsApp and having it logged automatically in Justlog. No app to open, no screen to unlock. That's what we're building next."
      ctaText="Try Justlog Now"
      ctaHref="https://app.justlog.live"
      secondaryCta={{ text: "Get on Android", href: "https://play.google.com/store/apps/details?id=live.justlog.app" }}
      image="/logging-screenshot.png"
      imageAlt="Justlog WhatsApp expense tracker coming soon"
      features={[
        { icon: "💬", title: "Message to log", desc: "Send a WhatsApp message like '200 auto' and the bot logs it to your Justlog account instantly." },
        { icon: "🤖", title: "AI-powered bot", desc: "The same AI that powers Justlog's typing interface will understand your WhatsApp messages too." },
        { icon: "📊", title: "Same dashboard", desc: "All WhatsApp-logged expenses appear in your Justlog app alongside your other entries." },
        { icon: "⚡", title: "Zero friction", desc: "No app to open. No login screen. Just message and move on — the fastest possible logging experience." },
        { icon: "🔒", title: "Secure and private", desc: "Messages are processed only to extract expense data. Nothing is stored, shared, or sold." },
        { icon: "🌍", title: "Works globally", desc: "WhatsApp works everywhere. So will Justlog's bot — for users in any country, any currency." },
      ]}
      howTitle="How it will work"
      howSteps={[
        { step: "1", title: "Connect your WhatsApp to Justlog", desc: "A one-time setup — link your Justlog account to the Justlog WhatsApp bot number." },
        { step: "2", title: "Send a message when you spend", desc: "Just text the bot what you spent: '500 dinner', 'paid 1200 for electricity', '80 coffee'. Natural language, no format." },
        { step: "3", title: "Find it in your Justlog app", desc: "Open Justlog and your WhatsApp-logged expenses are already there, categorised and ready." },
      ]}
      comingSoon
      comingSoonText="The WhatsApp bot is currently in development. In the meantime, Justlog's app and web experience gives you the same frictionless logging — just open the app and type. It takes 3 seconds."
    />
  );
}
