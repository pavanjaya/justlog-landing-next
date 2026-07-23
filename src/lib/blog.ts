export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "best-expense-tracker-apps-india-2025",
    title: "Best Expense Tracker Apps in India 2025",
    description: "Looking for the best expense tracker app in India? We compared the top apps so you don't have to. Here's what actually works in 2025.",
    date: "2025-07-10",
    readTime: "6 min read",
    author: "Justlog Team",
    category: "Reviews",
    content: `
Managing money in India has never been more important — and never more confusing. Between UPI payments, cash transactions, EMIs, and subscriptions, your money moves in a dozen directions every day. The problem? Most expense tracker apps were built for a different world.

We tested the most popular expense tracker apps available in India in 2025 and here's what we found.

## What makes a good expense tracker?

Before we dive in, here's what we looked for:

- **Speed** — How fast can you log an expense?
- **Simplicity** — Does it require a finance degree to use?
- **Reliability** — Does it actually work offline and sync properly?
- **Privacy** — Does it ask for bank access or SMS permission?
- **Price** — Is the free plan genuinely useful?

## 1. Justlog — Best for simplicity and speed

Justlog takes a completely different approach. Instead of forms and dropdowns, you just type what you spent in plain English.

Type "200 chai and samosa" and Justlog's AI instantly logs ₹200 under Food & Drinks. Type "1200 petrol" and it logs Transport. No tapping through menus, no selecting categories, no entering dates.

**What we love:**
- Logs an expense in under 3 seconds
- Voice input — speak what you spent
- Multiple Spaces for Work, Personal, Travel
- Group split for shared expenses
- No bank connection, no SMS access — fully private
- Free plan with unlimited transactions

**Price:** Free forever. Pro at ₹299/year.

**Best for:** Anyone who wants to actually stick to tracking expenses without it feeling like homework.

[Try Justlog free →](https://app.justlog.live)

## 2. Walnut — Best for automatic tracking

Walnut reads your SMS to automatically detect transactions. If you pay by UPI or card, Walnut logs it without you doing anything.

**What we love:** Zero effort logging for digital transactions.

**The catch:** It requires SMS access, which means Walnut reads all your messages. If privacy matters to you, this is a dealbreaker. Also, cash transactions are invisible to it.

**Price:** Free.

## 3. Money Manager — Best for detailed budgeting

Money Manager is a full-featured budgeting app with detailed reports, budget limits, and category breakdowns. It's been around for years and has a loyal following.

**What we love:** Deep analytics and budget tracking.

**The catch:** It's complex. The learning curve is steep and logging a single expense involves multiple taps. Many users install it, use it for a week, then stop.

**Price:** Free with ads. Premium removes ads.

## 4. YNAB (You Need A Budget) — Best for serious budgeters

YNAB is the gold standard for zero-based budgeting. Every rupee gets a job.

**What we love:** Extremely powerful budgeting methodology.

**The catch:** It's expensive (around ₹6000/year), complex to set up, and designed for the US market. INR support exists but feels like an afterthought.

**Price:** ~₹6000/year after trial.

## 5. Google Sheets — Best for control freaks

Hear us out. A simple Google Sheet with date, description, amount, and category columns beats most apps for people who want complete control.

**What we love:** Fully customisable, free, works everywhere.

**The catch:** You have to build it yourself, there's no mobile experience, and most people abandon it within two weeks.

## Our verdict

| App | Speed | Privacy | Free Plan | Best For |
|-----|-------|---------|-----------|----------|
| Justlog | ⚡⚡⚡ | ✅ Full | ✅ Unlimited | Everyone |
| Walnut | ⚡⚡⚡ | ❌ SMS access | ✅ | Digital spenders |
| Money Manager | ⚡ | ✅ | ⚠️ Ads | Power users |
| YNAB | ⚡⚡ | ✅ | ❌ | Serious budgeters |
| Google Sheets | ⚡ | ✅ | ✅ | DIY people |

If you want to actually build the habit of tracking expenses — not just install an app and forget it — Justlog is the easiest place to start. The free plan is genuinely unlimited and takes 30 seconds to set up.

[Start tracking with Justlog →](https://app.justlog.live)
    `.trim(),
  },
  {
    slug: "how-to-track-daily-expenses-without-spreadsheet",
    title: "How to Track Daily Expenses Without a Spreadsheet",
    description: "Spreadsheets are powerful but most people quit them in a week. Here's a simpler way to track your daily expenses that actually sticks.",
    date: "2025-07-14",
    readTime: "5 min read",
    author: "Justlog Team",
    category: "Tips",
    content: `
Every personal finance guide tells you to track your expenses. Almost nobody does it consistently. The reason isn't a lack of willpower — it's friction.

Spreadsheets are the most common advice. Open Excel, create columns, enter data, add formulas. It sounds simple. In practice, most people keep it up for about a week before life gets in the way.

Here's why spreadsheets fail — and what actually works instead.

## Why spreadsheets fail for expense tracking

**They require a desktop.** Most spending happens on the go. You're at a restaurant, a petrol pump, a grocery store. Your laptop is at home.

**They're slow.** To log one expense you need to open the file, find the right tab, scroll to the right row, enter the date, description, amount, and category. That's 30-60 seconds per entry. When you're busy, you skip it. Skipped entries pile up. You give up.

**They don't give you insights automatically.** You have to build the formulas yourself. Most people never do.

**They feel like work.** Expense tracking should feel light. A spreadsheet feels like filing taxes.

## What actually works: the 3-second rule

The only expense tracking habit that sticks long-term is one where logging takes **less than 3 seconds**.

Think about it. If logging is faster than opening WhatsApp, you'll do it. If it's slower, you'll skip it.

This is why voice notes work for some people — "okay google, remind me I spent 200 on lunch" — but reminders pile up and you never actually process them.

The ideal solution logs the expense **at the moment you spend**, in the format you already think in.

## The natural language approach

Instead of filling a form, what if you just typed what you spent?

> "200 chai"
> "1500 groceries at DMart"
> "Uber 340"
> "paid electricity bill 1200"

That's how you'd tell a friend. An AI can understand that sentence and extract:
- **Amount:** ₹200, ₹1500, ₹340, ₹1200
- **Category:** Food & Drinks, Groceries, Transport, Bills
- **Description:** Chai, Groceries at DMart, Uber, Electricity bill

No forms. No dropdowns. No dates to enter (it timestamps automatically).

This is exactly what Justlog does. You type one line and it's logged.

## How to build the habit

The hardest part of expense tracking isn't the app — it's remembering to log.

Here are three triggers that work:

**1. Log when you pay.** The moment you put your phone away after a UPI payment, open Justlog and type what you just paid for. It takes 5 seconds and the information is fresh.

**2. Log at meals.** Breakfast, lunch, dinner — three natural checkpoints. Spend 30 seconds logging what you ate and what it cost.

**3. End of day review.** Before bed, open the app and log anything you missed. Takes 2 minutes. Many people find this becomes a calming ritual.

## What to track

Start simple. Track only expenses for the first two weeks:

- Food & drinks
- Transport
- Groceries
- Bills and subscriptions

Don't worry about income, savings, or investments yet. The goal is just to see where your money goes.

After two weeks you'll have a clear picture of your spending patterns. That picture is usually surprising — and motivating.

## The one insight that changes everything

Most people who start tracking expenses discover the same thing: **small daily expenses add up to more than big occasional ones.**

That ₹150 chai every morning is ₹4,500 a month. The ₹99 app subscriptions you forgot about are ₹2,000+ a month. The Swiggy orders add up to more than a month's grocery budget.

You can't see this in a spreadsheet unless you build the formulas. A good expense tracker shows it to you automatically.

## Getting started today

Download Justlog or open [app.justlog.live](https://app.justlog.live). Log one expense right now — whatever you last spent money on.

That's it. Day one is done.

Come back tomorrow and log a few more. By the end of the week you'll have a spending picture you've never had before.

[Start tracking free →](https://app.justlog.live)
    `.trim(),
  },
  {
    slug: "30-days-expense-tracking-challenge",
    title: "I Tracked Every Expense for 30 Days. Here's What I Found.",
    description: "What happens when you track every single expense for 30 days? The results were surprising, uncomfortable, and genuinely life-changing.",
    date: "2025-07-17",
    readTime: "7 min read",
    author: "Justlog Team",
    category: "Story",
    content: `
I've tried to track my expenses before. Spreadsheets, apps, even a notebook. I've never lasted more than two weeks.

This time I committed to 30 days using Justlog — logging every single expense, no matter how small. A ₹20 bun maska at the chai stall. A ₹5 parking ticket. Everything.

Here's what happened.

## The setup

I used Justlog because logging is fast enough that I'd actually do it. I created three spaces:

- **Personal** — everyday expenses
- **Work** — anything reimbursable
- **Home** — shared household expenses

The rule was simple: log within 5 minutes of spending. No batching, no "I'll do it later."

## Week 1: The discomfort

The first week was uncomfortable. Not because tracking was hard — Justlog makes it genuinely fast — but because I could suddenly see everything.

Day 3, I realised I'd spent ₹840 on coffee in three days. Three days. That's not unusual for me, but I'd never seen it written down before.

Day 5, I found two subscriptions I'd completely forgotten about. A fitness app I hadn't opened in four months (₹299/month) and a news app I'd subscribed to during a free trial (₹149/month). Cancelled both.

Week 1 total: ₹14,200

That number shocked me. I had vaguely assumed I spent around ₹8,000-9,000 in a normal week. I was wrong by nearly ₹6,000.

## Week 2: The patterns emerge

By week two, the Story screen in Justlog started showing me patterns I couldn't unsee.

**Food & Drinks: 41% of total spending.**

Nearly half my money was going to food — and most of it wasn't groceries. It was restaurants, cafes, Swiggy, Zomato. I wasn't eating badly, I was just eating expensively.

I didn't change anything yet. The rule for the first two weeks was just to observe.

**Transport: 18%**

More Uber/Ola than I thought. Mostly short trips I could have walked or taken an auto for.

**The invisible expenses**

The most surprising category was what I called "invisible expenses" — things I paid for without thinking. Convenience fees, platform charges, delivery fees. Individually tiny. Collectively significant.

₹1,200 in delivery fees alone over two weeks. For food that would have been cheaper to pick up.

## Week 3: Small changes, visible results

In week three I made three small changes based on what I'd seen:

1. **Cook breakfast at home** instead of buying it. Saved ~₹200/day.
2. **Take auto instead of Uber** for trips under 5km. Saved ~₹150/trip.
3. **No food delivery on weekdays** unless I genuinely had no time.

I didn't deprive myself of anything. I just made slightly different choices with full awareness of what they cost.

Week 3 total: ₹9,800. Down ₹4,400 from week 1 with no feeling of sacrifice.

## Week 4: The new normal

By week four, logging had become automatic. I'd open Justlog before I'd even put my wallet away. The habit had formed.

The numbers kept improving — not because I was being strict, but because awareness changed my default choices. I started asking "is this worth it?" instead of spending on autopilot.

Week 4 total: ₹8,600.

## The 30-day summary

| Category | Month Total | % of Spending |
|----------|-------------|---------------|
| Food & Drinks | ₹18,400 | 38% |
| Groceries | ₹6,200 | 13% |
| Transport | ₹7,800 | 16% |
| Bills & Subscriptions | ₹3,200 | 7% |
| Shopping | ₹5,600 | 12% |
| Other | ₹6,800 | 14% |

**Total: ₹48,000**

Versus my vague mental estimate of "around ₹30,000 a month."

The gap between what I thought I spent and what I actually spent was ₹18,000. Every month. That's ₹2.16 lakh a year disappearing without me noticing.

## What I learned

**1. Awareness is the intervention.** I didn't need a budget. I didn't need willpower. I just needed to see the numbers. Seeing them changed my behaviour automatically.

**2. Small expenses are the real leak.** My big expenses (rent, EMIs) were always in my head. The money I was losing was in the ₹50-500 range — too small to remember individually, massive in aggregate.

**3. The habit only forms if logging is frictionless.** Previous attempts failed because the app was too slow or complex. With Justlog I could log in 5 seconds, which meant I actually did it.

**4. Categories matter less than consistency.** I didn't obsess over whether something was "Food" or "Groceries." I just logged it. The insights came from the total picture, not perfect categorisation.

## Should you try it?

Yes. One month is enough to see patterns that will genuinely surprise you.

The rules are simple:
- Log every expense within 5 minutes of spending
- Don't change anything for the first two weeks — just observe
- After two weeks, make one small change based on what you see

[Start your 30-day challenge with Justlog →](https://app.justlog.live)

It's free. It takes 30 seconds to set up. And the first thing you'll discover will probably surprise you.
    `.trim(),
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}
