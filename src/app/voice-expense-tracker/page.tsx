import type { Metadata } from "next";
import SEOPage from "@/components/SEOPage";

export const metadata: Metadata = {
  title: "Voice Expense Tracker — Justlog",
  description: "Log expenses hands-free with voice. Speak what you spent and Justlog's AI transcribes and categorises it instantly. No typing needed.",
  alternates: { canonical: "https://justlog.live/voice-expense-tracker" },
  openGraph: {
    title: "Voice Expense Tracker — Justlog",
    description: "Speak what you spent. AI transcribes and logs it instantly.",
    url: "https://justlog.live/voice-expense-tracker",
    images: [{ url: "https://justlog.live/justlog.png" }],
  },
};

export default function VoiceExpenseTrackerPage() {
  return (
    <SEOPage
      badge="Voice Expense Tracker"
      headline="Log expenses with your <em>voice</em>"
      subheadline="Tap the mic, say what you spent, done. Justlog transcribes your words and logs the expense instantly — perfect when your hands are busy."
      ctaText="Try it Free"
      ctaHref="https://app.justlog.live"
      secondaryCta={{ text: "Get on Android", href: "https://play.google.com/store/apps/details?id=live.justlog.app" }}
      image="/just-type.png"
      imageAlt="Justlog voice expense tracker"
      features={[
        { icon: "🎙️", title: "One tap to speak", desc: "Hit the mic button and talk. 'Spent 300 on lunch' is logged before you put your phone down." },
        { icon: "🧠", title: "AI understands context", desc: "Justlog parses your spoken words the same way it parses typed text — amount, category, type, all filled." },
        { icon: "🚗", title: "Log on the go", desc: "Just paid for parking? Petrol? Groceries? Log it in seconds without typing a single character." },
        { icon: "🌐", title: "Works in your language", desc: "Voice input supports multiple languages and accents out of the box." },
        { icon: "📱", title: "Native on Android", desc: "Uses your device's native speech engine for fast, accurate transcription with no extra app needed." },
        { icon: "⚡", title: "Instantly categorised", desc: "AI assigns category and type automatically from your spoken entry. Nothing to tap or select." },
      ]}
      howTitle="Log a voice expense in 5 seconds"
      howSteps={[
        { step: "1", title: "Tap the mic in Justlog", desc: "The voice input bar appears instantly. No setup, no permissions to navigate through." },
        { step: "2", title: "Say what you spent", desc: "Speak naturally — '250 coffee and snacks' or 'paid 800 for taxi'. Justlog understands both." },
        { step: "3", title: "It's logged", desc: "Your entry is transcribed, AI fills the details, and it's saved. Open Story to see it reflected immediately." },
      ]}
    />
  );
}
