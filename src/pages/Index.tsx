import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Code2,
  Globe2,
  Layers3,
  Mail,
  Menu,
  Moon,
  Send,
  ShieldCheck,
  Sun,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

const metrics = [
  ["99.98%", "Delivery rate"],
  ["42 ms", "Median API response"],
  ["124M+", "Messages delivered"],
];

const platformFeatures = [
  {
    icon: Send,
    eyebrow: "Campaigns",
    title: "Plan, send, and measure without the busywork",
    copy: "Build polished campaigns, segment the right audience, and understand performance from one focused workspace.",
    detail: "42.3% avg. open rate",
  },
  {
    icon: Code2,
    eyebrow: "Developer API",
    title: "Transactional email that is simple to ship",
    copy: "Send receipts, alerts, and product messages with clean endpoints, useful logs, and dependable delivery signals.",
    detail: "One request to production",
  },
  {
    icon: Workflow,
    eyebrow: "Automation",
    title: "Customer journeys that remain easy to follow",
    copy: "Connect triggers, delays, and messages in visual workflows your whole team can understand and improve.",
    detail: "Real-time journey reporting",
  },
  {
    icon: Users,
    eyebrow: "Audience",
    title: "One reliable view of every subscriber",
    copy: "Keep contact data, engagement history, and segments together so every send starts with better context.",
    detail: "Live audience segments",
  },
];

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Goood Mail home">
      <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground shadow-brand">
        <Mail className="h-4 w-4" strokeWidth={2.4} />
      </span>
      <span className="font-heading text-[17px] font-bold">Goood Mail</span>
    </Link>
  );
}

function ThemeControl({ theme, onChange }: { theme: Theme; onChange: (theme: Theme) => void }) {
  return (
    <div className="flex h-9 items-center rounded-md border bg-card/70 p-1" aria-label="Color theme">
      <Button variant="ghost" size="icon" className={`h-7 w-7 ${theme === "light" ? "bg-muted" : "text-muted-foreground"}`} onClick={() => onChange("light")} aria-label="Use light theme" aria-pressed={theme === "light"}><Sun className="h-3.5 w-3.5" /></Button>
      <Button variant="ghost" size="icon" className={`h-7 w-7 ${theme === "dark" ? "bg-muted" : "text-muted-foreground"}`} onClick={() => onChange("dark")} aria-label="Use dark theme" aria-pressed={theme === "dark"}><Moon className="h-3.5 w-3.5" /></Button>
    </div>
  );
}

function DeliveryConsole() {
  const bars = [38, 57, 46, 74, 61, 86, 70, 93, 79, 96, 88, 100];
  return (
    <div className="relative mx-auto w-full max-w-[610px]">
      <div className="absolute -inset-8 bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-lg border border-code-border bg-code shadow-modal">
        <div className="flex h-12 items-center justify-between border-b border-code-border px-5">
          <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-destructive/70" /><span className="h-2.5 w-2.5 rounded-full bg-secondary/70" /><span className="h-2.5 w-2.5 rounded-full bg-primary" /></div>
          <span className="font-mono text-[9px] font-semibold uppercase text-code-muted">Live performance · eu-west-1</span>
        </div>
        <div className="p-5 sm:p-6">
          <div className="grid grid-cols-3 gap-3">
            {[["Delivery", "99.98%"], ["Opened", "42.3%"], ["Latency", "42 ms"]].map(([label, value]) => (
              <div key={label} className="border border-code-border bg-code-panel p-3 sm:p-4">
                <p className="text-[9px] font-bold uppercase text-code-muted">{label}</p>
                <p className="mt-2 font-mono text-sm font-semibold text-code-foreground sm:text-lg">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-code-border bg-code-panel p-4 sm:p-5">
            <div className="flex items-center justify-between"><p className="text-[11px] font-bold text-code-foreground">Email volume</p><p className="text-[9px] text-code-muted">Last 30 days</p></div>
            <div className="mt-6 flex h-36 items-end gap-2 border-b border-code-border">
              {bars.map((height, index) => <span key={index} className="flex-1 bg-primary/20 transition-all duration-500 hover:bg-primary/45" style={{ height: `${height}%` }}><span className="block h-[34%] bg-primary" /></span>)}
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
            <div className="border border-code-border bg-code-panel p-4 font-mono text-[10px] leading-5 text-code-muted"><span className="text-code-accent">POST</span> /v1/email/send<br /><span className="text-success">202 accepted</span> · msg_8f2a91</div>
            <div className="flex items-center gap-3 border border-code-border bg-code-panel p-4"><span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary"><Activity className="h-4 w-4" /></span><div><p className="text-[10px] text-code-muted">System status</p><p className="text-[11px] font-bold text-code-foreground">All operational</p></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [theme, setTheme] = useState<Theme>(() => window.localStorage.getItem("goood-mail-theme") === "light" ? "light" : "dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("goood-mail-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8">
          <Brand />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            <a href="#platform" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Platform</a>
            <a href="#developers" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Developers</a>
            <a href="#automation" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Automation</a>
            <a href="#security" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Security</a>
          </nav>
          <div className="hidden items-center gap-2 sm:flex">
            <ThemeControl theme={theme} onChange={setTheme} />
            <Button variant="ghost" asChild><Link to="/dashboard">Sign in</Link></Button>
            <Button asChild><Link to="/dashboard">Start sending <ArrowRight /></Link></Button>
          </div>
          <Button variant="ghost" size="icon" className="sm:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <div className="border-t bg-background p-5 sm:hidden"><nav className="space-y-1">{[["Platform", "#platform"], ["Developers", "#developers"], ["Automation", "#automation"], ["Security", "#security"]].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block px-3 py-3 text-sm font-semibold text-muted-foreground hover:bg-muted hover:text-foreground">{label}</a>)}</nav><div className="mt-4 flex gap-2 border-t pt-4"><ThemeControl theme={theme} onChange={setTheme} /><Button className="flex-1" asChild><Link to="/dashboard">Start sending <ArrowRight /></Link></Button></div></div>}
      </header>

      <main>
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-grid opacity-35" aria-hidden="true" />
          <div className="relative mx-auto grid min-h-[700px] max-w-[1200px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-1.5 text-[11px] font-bold uppercase text-primary shadow-soft"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" /><span className="relative h-2 w-2 rounded-full bg-primary" /></span>Built for every business email</div>
              <h1 className="mt-7 font-heading text-[44px] font-bold leading-[1.04] sm:text-6xl lg:text-[68px]">Email delivery for <span className="text-primary">modern teams.</span></h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">Run campaigns, automate customer journeys, and send product email through one dependable platform built for marketers and developers.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button size="lg" asChild><Link to="/dashboard">Start sending free <ArrowRight /></Link></Button><Button size="lg" variant="outline" asChild><a href="#developers">View documentation</a></Button></div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-muted-foreground">{["No credit card", "Setup in minutes", "Human support"].map((item) => <span key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{item}</span>)}</div>
            </div>
            <DeliveryConsole />
          </div>
        </section>

        <section className="border-b bg-card">
          <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-9 sm:grid-cols-[1fr_repeat(3,auto)] sm:items-center sm:px-8 lg:gap-16">
            <p className="max-w-xs text-sm font-semibold text-muted-foreground">Trusted infrastructure for teams building better customer communication.</p>
            {metrics.map(([value, label]) => <div key={label}><p className="font-heading text-2xl font-bold">{value}</p><p className="mt-1 text-[11px] font-semibold text-muted-foreground">{label}</p></div>)}
          </div>
        </section>

        <section id="platform" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"><div><p className="text-xs font-bold uppercase text-primary">One email platform</p><h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-5xl">Everything your team needs to send well.</h2></div><p className="max-w-xl leading-7 text-muted-foreground lg:ml-auto">Bring marketing and product email together without compromising the workflows either team depends on.</p></div>
          <div className="mt-14 grid gap-px overflow-hidden border bg-border md:grid-cols-2">
            {platformFeatures.map(({ icon: Icon, eyebrow, title, copy, detail }, index) => <article key={title} className={`group bg-card p-7 sm:p-9 ${index === 0 ? "md:row-span-2" : ""}`}><span className="grid h-10 w-10 place-items-center rounded-md bg-primary-soft text-primary"><Icon className="h-4 w-4" /></span><p className="mt-7 text-[11px] font-bold uppercase text-primary">{eyebrow}</p><h3 className="mt-3 max-w-md font-heading text-xl font-bold sm:text-2xl">{title}</h3><p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">{copy}</p><div className="mt-7 flex items-center gap-2 text-xs font-bold"><span>{detail}</span><ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" /></div>{index === 0 && <div className="mt-10 border bg-muted/40 p-5"><div className="flex h-28 items-end gap-2">{[42, 68, 53, 82, 65, 92, 76, 100].map((height, barIndex) => <span key={barIndex} className="flex-1 bg-primary/25" style={{ height: `${height}%` }}><span className="block h-1/3 bg-primary" /></span>)}</div></div>}</article>)}
          </div>
        </section>

        <section id="developers" className="border-y bg-code text-code-foreground">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
            <div><span className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground"><Code2 className="h-5 w-5" /></span><p className="mt-7 text-xs font-bold uppercase text-primary">Developer-first delivery</p><h2 className="mt-4 max-w-lg font-heading text-3xl font-bold leading-tight sm:text-5xl">From API key to inbox in one clean request.</h2><p className="mt-6 max-w-lg leading-7 text-code-muted">Clear documentation, readable logs, webhook events, and the operational visibility your team needs in production.</p><Button className="mt-8" asChild><Link to="/dashboard">Open developer workspace <ArrowRight /></Link></Button></div>
            <div className="overflow-hidden rounded-lg border border-code-border bg-code-panel shadow-code"><div className="flex h-12 items-center justify-between border-b border-code-border px-5"><div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-destructive/70" /><i className="h-2.5 w-2.5 rounded-full bg-secondary/70" /><i className="h-2.5 w-2.5 rounded-full bg-primary" /></div><span className="font-mono text-[10px] text-code-muted">send.ts</span></div><pre className="overflow-x-auto p-6 font-mono text-xs leading-7 sm:p-8"><code><span className="text-code-accent">const</span> delivery = <span className="text-code-accent">await</span> mail.send({`{`}{"\n  "}from: <span className="text-primary">&quot;hello@acme.com&quot;</span>,{"\n  "}to: <span className="text-primary">&quot;customer@example.com&quot;</span>,{"\n  "}subject: <span className="text-primary">&quot;Welcome aboard&quot;</span>,{"\n  "}template: <span className="text-primary">&quot;welcome-series&quot;</span>{"\n"}{`}`});{"\n\n"}<span className="text-success">// 202 Accepted · 42 ms</span></code></pre><div className="grid grid-cols-2 border-t border-code-border"><div className="p-5"><p className="text-[9px] uppercase text-code-muted">Request ID</p><p className="mt-2 font-mono text-xs">msg_8f2a91</p></div><div className="border-l border-code-border p-5"><p className="text-[9px] uppercase text-code-muted">Status</p><p className="mt-2 font-mono text-xs text-success">Delivered</p></div></div></div>
          </div>
        </section>

        <section id="automation" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase text-primary">Automation, made legible</p><h2 className="mt-4 font-heading text-3xl font-bold sm:text-5xl">A clear path from trigger to result.</h2><p className="mt-5 leading-7 text-muted-foreground">Build journeys your team can inspect, improve, and trust at a glance.</p></div>
          <div className="mt-14 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">{[[Users, "New contact"], [Mail, "Send welcome"], [Activity, "Wait 1 day"], [Send, "Send follow-up"]].map(([Icon, label], index) => { const StepIcon = Icon as typeof Users; return <div key={label as string} className="contents"><div className="border bg-card p-5 shadow-soft"><span className="grid h-9 w-9 place-items-center rounded-md bg-primary-soft text-primary"><StepIcon className="h-4 w-4" /></span><p className="mt-5 text-[10px] font-bold uppercase text-primary">Step {index + 1}</p><p className="mt-2 font-heading text-sm font-bold">{label as string}</p></div>{index < 3 && <ArrowRight className="mx-auto hidden h-4 w-4 text-muted-foreground md:block" />}</div>; })}</div>
        </section>

        <section id="security" className="border-y bg-card"><div className="mx-auto grid max-w-[1200px] gap-px bg-border lg:grid-cols-3">{[[ShieldCheck, "Protected by design", "Domain authentication and delivery controls keep your sending reputation secure."], [Globe2, "Built for global reach", "Fast, dependable delivery infrastructure designed to scale with your audience."], [Layers3, "One source of truth", "Campaign, audience, automation, and API reporting in a single workspace."]].map(([Icon, title, copy]) => { const FeatureIcon = Icon as typeof ShieldCheck; return <article key={title as string} className="bg-card p-8 sm:p-10"><FeatureIcon className="h-5 w-5 text-primary" /><h3 className="mt-6 font-heading text-lg font-bold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy as string}</p></article>; })}</div></section>

        <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28"><div className="grid overflow-hidden border bg-foreground text-background dark:bg-card dark:text-foreground lg:grid-cols-[1fr_auto]"><div className="p-8 sm:p-12"><p className="text-xs font-bold uppercase text-primary">Ready when you are</p><h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight sm:text-5xl">Make every send part of one better system.</h2><p className="mt-5 max-w-xl leading-7 text-background/65 dark:text-muted-foreground">Start with campaigns today, then add automation and product email as you grow.</p></div><div className="flex flex-col justify-center gap-3 border-t border-background/15 p-8 sm:min-w-[300px] lg:border-l lg:border-t-0"><Button size="lg" asChild><Link to="/dashboard">Start sending free <ArrowRight /></Link></Button><Button size="lg" variant="outlineDark" asChild><Link to="/dashboard">Explore the dashboard</Link></Button></div></div></section>
      </main>

      <footer className="border-t bg-card"><div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-12"><div><Brand /><p className="mt-3 max-w-sm text-xs leading-5 text-muted-foreground">Campaigns, automation, and transactional email for modern teams.</p></div><div className="flex gap-6 text-xs font-semibold text-muted-foreground"><a href="#platform" className="hover:text-foreground">Platform</a><a href="#developers" className="hover:text-foreground">API</a><a href="#security" className="hover:text-foreground">Security</a></div><Link to="/dashboard" className="flex items-center gap-2 text-xs font-bold text-primary">Open dashboard <ArrowRight className="h-4 w-4" /></Link></div></footer>
    </div>
  );
}