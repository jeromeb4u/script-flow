"use client";

import {
  FileText,
  Sparkles,
  Users,
  ListChecks,
  Download,
  History,
  ChevronRight,
  Check,
  Star,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#30363d] bg-[#0d1117]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-[#58a6ff] flex items-center gap-2">
          <FileText size={20} />
          ScriptFlow
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#8b949e]">
          <a href="#features" className="hover:text-[#e6edf3] transition-colors duration-150">Templates</a>
          <a href="#features" className="hover:text-[#e6edf3] transition-colors duration-150">Collaboration</a>
          <a href="#pricing" className="hover:text-[#e6edf3] transition-colors duration-150">Pricing</a>
          <a href="#" className="hover:text-[#e6edf3] transition-colors duration-150">Login</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm text-[#e6edf3] border border-[#30363d] rounded-lg hover:border-[#58a6ff] transition-colors duration-150">
            Login
          </button>
          <button className="px-4 py-2 text-sm text-[#0d1117] bg-[#58a6ff] rounded-lg font-medium hover:bg-[#79b8ff] transition-colors duration-150">
            Start Free
          </button>
        </div>
        <button className="md:hidden text-[#e6edf3]" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#161b22] border-t border-[#30363d] px-6 py-4 flex flex-col gap-4 text-sm text-[#8b949e]">
          <a href="#features" className="hover:text-[#e6edf3] transition-colors" onClick={() => setOpen(false)}>Templates</a>
          <a href="#features" className="hover:text-[#e6edf3] transition-colors" onClick={() => setOpen(false)}>Collaboration</a>
          <a href="#pricing" className="hover:text-[#e6edf3] transition-colors" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#" className="hover:text-[#e6edf3] transition-colors" onClick={() => setOpen(false)}>Login</a>
          <button className="px-4 py-2 text-sm text-[#0d1117] bg-[#58a6ff] rounded-lg font-medium w-fit">
            Start Free
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#30363d] bg-[#161b22] text-xs text-[#8b949e] mb-6">
          <Sparkles size={12} className="text-[#58a6ff]" />
          Now with AI Research Assist
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-[#e6edf3]">
          The scriptwriting workspace<br />
          <span className="text-[#58a6ff]">for serious YouTubers</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop duct-taping scripts in Google Docs. ScriptFlow gives you templates, AI research, real-time collaboration, and one-click export to Descript, Premiere, and Final Cut.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 text-base font-medium text-[#0d1117] bg-[#58a6ff] rounded-lg hover:bg-[#79b8ff] transition-colors duration-150 flex items-center justify-center gap-2">
            Start Writing Free
            <ChevronRight size={16} />
          </button>
          <button className="px-6 py-3 text-base font-medium text-[#e6edf3] border border-[#30363d] rounded-lg hover:border-[#58a6ff] transition-colors duration-150">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── SCRIPT PREVIEW ─────────────────────────────────────────────────────────
function ScriptPreview() {
  const templates = [
    { name: "YouTube Intro Hook", color: "#58a6ff" },
    { name: "Podcast Cold Open", color: "#3fb950" },
    { name: "Tutorial Body", color: "#8b949e" },
    { name: "CTA + Outro", color: "#58a6ff" },
  ];
  const lines = [
    { text: "[INTRO — 0:00]", muted: true },
    { text: "What if I told you everything you need to know about...", bold: true },
    { text: "" },
    { text: "[HOOK — 0:15]", muted: true },
    { text: "Most creators get this completely wrong. Here's the truth:", bold: true },
    { text: "" },
    { text: "[BODY — 0:30]", muted: true },
    { text: "First, you need to understand the three pillars...", bold: true },
  ];
  const aiMessages = [
    { text: "Suggested: Add a pattern interrupt at 0:45 to boost retention.", time: "just now" },
    { text: "Fact-check: Study shows 73% of creators abandon scripts mid-way.", time: "2m ago" },
  ];
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-[#e6edf3]">Your entire workflow, in one place</h2>
          <p className="text-[#8b949e]">A real scriptwriting environment designed for content creators</p>
        </div>
        <div className="rounded-xl border border-[#30363d] overflow-hidden bg-[#161b22] shadow-2xl shadow-black/50">
          {/* Top bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d] bg-[#0d1117]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            <span className="ml-3 text-xs text-[#8b949e]">scriptflow — the-video-pipeline.txt</span>
          </div>
          <div className="flex">
            {/* Sidebar */}
            <div className="w-56 border-r border-[#30363d] p-4 hidden md:block">
              <p className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-3">Templates</p>
              {templates.map((t) => (
                <div key={t.name} className="flex items-center gap-2 px-3 py-2 rounded-lg mb-1 hover:bg-[#0d1117] cursor-pointer transition-colors duration-150">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }}></div>
                  <span className="text-xs text-[#8b949e]">{t.name}</span>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-[#30363d]">
                <p className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-3">Scripts</p>
                {["the-video-pipeline.txt", "podcast-ep12.txt", "tutorial-outline.txt"].map((f) => (
                  <div key={f} className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-[#0d1117] cursor-pointer transition-colors duration-150">
                    <FileText size={12} className="text-[#8b949e]" />
                    <span className="text-xs text-[#8b949e] truncate">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Editor */}
            <div className="flex-1 p-6 min-h-[360px]">
              {lines.map((l, i) => (
                <p key={i} className={`text-sm leading-relaxed ${l.muted ? "text-[#8b949e]" : l.bold ? "font-semibold text-[#e6edf3]" : "text-[#e6edf3]"}`}>
                  {l.text || "\u00A0"}
                </p>
              ))}
            </div>
            {/* AI Panel */}
            <div className="w-64 border-l border-[#30363d] p-4 hidden lg:block bg-[#0d1117]">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={14} className="text-[#58a6ff]" />
                <span className="text-xs font-semibold text-[#58a6ff]">AI Assist</span>
              </div>
              <div className="flex flex-col gap-3">
                {aiMessages.map((m, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[#161b22] border border-[#30363d]">
                    <p className="text-xs text-[#e6edf3] mb-1 leading-relaxed">{m.text}</p>
                    <p className="text-[10px] text-[#8b949e]">{m.time}</p>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full py-2 text-xs text-[#58a6ff] border border-[#30363d] rounded-lg hover:border-[#58a6ff] transition-colors duration-150">
                Ask AI anything
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FEATURES ───────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: ListChecks,
    title: "Structured Templates",
    desc: "Pre-built templates for intros, hooks, body sections, and CTAs keep your videos engaging and on-track.",
  },
  {
    icon: Sparkles,
    title: "AI Research Assist",
    desc: "AI fills in research gaps, finds facts, and suggests improvements while you write — no tab-switching required.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Invite collaborators, leave comments, and edit together in real time. Perfect for podcast co-hosts and YouTube teams.",
  },
  {
    icon: FileText,
    title: "Outline-to-Full Script",
    desc: "Start with a skeleton outline, expand section by section. The structured flow keeps your content tight.",
  },
  {
    icon: Download,
    title: "One-Click Export",
    desc: "Export directly to Descript, Adobe Premiere, or Final Cut Pro. Your timeline is ready when you open the project.",
  },
  {
    icon: History,
    title: "Version History",
    desc: "Every save is tracked. Roll back to any previous version, branch off alternate cuts, never lose a draft.",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[#58a6ff] uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3]">Everything you need to write better scripts, faster</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-[#30363d] bg-[#161b22] hover:border-[#58a6ff] transition-all duration-150 group">
              <div className="w-10 h-10 rounded-lg bg-[#0d1117] border border-[#30363d] flex items-center justify-center mb-4 group-hover:border-[#58a6ff] transition-colors duration-150">
                <f.icon size={18} className="text-[#58a6ff]" />
              </div>
              <h3 className="text-base font-semibold text-[#e6edf3] mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
const STEPS = [
  { num: "01", title: "Pick Template", desc: "Choose from proven templates for YouTube, podcasts, tutorials, or start from scratch." },
  { num: "02", title: "Write", desc: "Use the structured editor to write your script section by section, with inline guidance." },
  { num: "03", title: "AI Assists", desc: "Let AI research facts, suggest hooks, and fill gaps while you stay in flow state." },
  { num: "04", title: "Export", desc: "One-click export to Descript, Premiere, or Final Cut. Your edit suite awaits." },
];

function HowItWorks() {
  return (
    <section className="py-20 px-6 border-y border-[#30363d] bg-[#161b22]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[#58a6ff] uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3]">From idea to edit-ready script in 4 steps</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((s) => (
            <div key={s.num} className="text-center">
              <div className="text-4xl font-bold text-[#30363d] mb-4">{s.num}</div>
              <h3 className="text-lg font-semibold text-[#e6edf3] mb-2">{s.title}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── STATS ───────────────────────────────────────────────────────────────────
const STATS = [
  { value: "120K+", label: "Scripts written" },
  { value: "14K+", label: "Creators onboarded" },
  { value: "98%", label: "Satisfaction rate" },
  { value: "3M+", label: "Words exported" },
];

function Stats() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="text-3xl md:text-4xl font-bold text-[#58a6ff] mb-1">{s.value}</div>
            <div className="text-sm text-[#8b949e]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: "ScriptFlow cut my script prep time in half. The templates alone are worth it — my videos feel way more structured now.",
    name: "Maya Chen",
    handle: "@mayacreates",
    role: "Tech YouTuber, 280K subscribers",
    stars: 5,
  },
  {
    quote: "I write scripts with my co-host in real time now. No more emailing Google Docs back and forth. Game changer for our podcast.",
    name: "Jake Torres",
    handle: "@jakepod",
    role: "Podcast Host, The Weekly Drop",
    stars: 5,
  },
  {
    quote: "The AI research assist is incredible. It pulls facts while I write and flags things I would have gotten wrong. My content is more accurate.",
    name: "Priya Nair",
    handle: "@priyawrites",
    role: "Education Creator, 90K subscribers",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section className="py-20 px-6 bg-[#161b22] border-y border-[#30363d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[#58a6ff] uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3]">Loved by creators who mean it</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="p-6 rounded-xl border border-[#30363d] bg-[#0d1117]">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#febc2e] fill-[#febc2e]" />
                ))}
              </div>
              <p className="text-sm text-[#e6edf3] leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-[#e6edf3]">{t.name}</p>
                <p className="text-xs text-[#58a6ff]">{t.handle}</p>
                <p className="text-xs text-[#8b949e] mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ─────────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Perfect for solo creators getting started.",
    features: ["3 scripts", "Basic templates", "Text export only", "1 user"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Starter",
    price: "$15",
    period: "per month",
    desc: "For creators who need AI assist and unlimited scripts.",
    features: ["Unlimited scripts", "AI Research Assist", "1 collaborator", "Export to Descript"],
    cta: "Start Starter",
    highlight: true,
  },
  {
    name: "Studio",
    price: "$39",
    period: "per month",
    desc: "For serious teams who need the full suite.",
    features: ["Unlimited everything", "5 collaborators", "All export integrations", "Priority support", "Version history"],
    cta: "Start Studio",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[#58a6ff] uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3]">Simple, transparent pricing</h2>
          <p className="text-[#8b949e] mt-3">Start free. Upgrade when you need more.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div key={p.name} className={`rounded-xl border p-6 flex flex-col ${p.highlight ? "border-[#58a6ff] bg-[#161b22]" : "border-[#30363d] bg-[#161b22]"}`}>
              {p.highlight && (
                <span className="inline-block px-2 py-0.5 text-xs font-medium bg-[#58a6ff] text-[#0d1117] rounded-full w-fit mb-3">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-[#e6edf3] mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-[#e6edf3]">{p.price}</span>
                <span className="text-sm text-[#8b949e]">/{p.period}</span>
              </div>
              <p className="text-sm text-[#8b949e] mb-5">{p.desc}</p>
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#e6edf3]">
                    <Check size={14} className="text-[#3fb950] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2.5 text-sm font-medium rounded-lg transition-colors duration-150 ${p.highlight ? "bg-[#58a6ff] text-[#0d1117] hover:bg-[#79b8ff]" : "border border-[#30363d] text-[#e6edf3] hover:border-[#58a6ff]"}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="py-20 px-6 border-t border-[#30363d]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-4">
          Ready to write scripts that actually land?
        </h2>
        <p className="text-[#8b949e] mb-8">Join over 14,000 creators who use ScriptFlow to write better content, faster.</p>
        <button className="px-8 py-3 text-base font-medium text-[#0d1117] bg-[#58a6ff] rounded-lg hover:bg-[#79b8ff] transition-colors duration-150">
          Start Writing Free — No Credit Card Required
        </button>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const links = {
    Product: ["Templates", "Pricing", "Changelog", "Roadmap"],
    Company: ["About", "Blog", "Careers", "Press"],
    Legal: ["Privacy", "Terms", "Cookie Policy"],
    Support: ["Help Center", "Community", "Contact"],
  };
  return (
    <footer className="border-t border-[#30363d] bg-[#161b22] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg font-bold text-[#58a6ff] flex items-center gap-2 mb-3">
              <FileText size={18} />
              ScriptFlow
            </span>
            <p className="text-sm text-[#8b949e] leading-relaxed">
              The scriptwriting workspace for serious YouTubers and podcasters.
            </p>
          </div>
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-[#e6edf3] uppercase tracking-wider mb-3">{group}</p>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-[#8b949e] hover:text-[#e6edf3] transition-colors duration-150">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#30363d] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8b949e]">
            &copy; {new Date().getFullYear()} ScriptFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "YouTube", "Discord"].map((s) => (
              <a key={s} href="#" className="text-xs text-[#8b949e] hover:text-[#e6edf3] transition-colors duration-150">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="bg-[#0d1117] min-h-screen text-[#e6edf3]">
      <NavBar />
      <Hero />
      <ScriptPreview />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
