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

const capabilities = [
  {
    icon: Send,
    label: "Campaigns",
    title: "Create campaigns people want to read",
    copy: "Build focused email experiences, segment audiences, and schedule every send from one clear workspace.",
    stat: "42.3%",
    statLabel: "average open rate",
  },
  {
    icon: Code2,
    label: "Developer API",
    title: "Transactional email, ready in minutes",
    copy: "Send account alerts, receipts, and product messages through a reliable API with useful logs and straightforward keys.",
    stat: "42 ms",
    statLabel: "median response time",
  },
  {
    icon: Workflow,
    label: "Automation",
    title: "Turn customer moments into journeys",
    copy: "Connect triggers, delays, and messages in repeatable workflows that keep every customer conversation moving.",
    stat: "99.98%",
    statLabel: "successful requests",
  },
];

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Goood Mail home">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground shadow-brand">
        <Mail className="h-[18px] w-[18px]" strokeWidth={2.3} />
      </span>
      <span className="font-heading text-base font-bold text-foreground">Goood Mail</span>
    </Link>
  );
}

function ThemeControl({ theme, setTheme }: { theme: Theme; setTheme: (theme: Theme) => void }) {
  return (
    <div className="flex h-9 items-center rounded-md border bg-card p-1" aria-label="Color theme">
      <Button variant="ghost" size="icon" className={`h-7 w-7 ${theme === "light" ? "bg-muted text-foreground" : "text-muted-foreground"}`} onClick={() => setTheme("light")} aria-label="Use light theme" aria-pressed={theme === "light"}>
        <Sun className="h-3.5 w-3.5" />
      </Button>
      <Button variant="ghost" size="icon" className={`h-7 w-7 ${theme === "dark" ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "text-muted-foreground"}`} onClick={() => setTheme("dark")} aria-label="Use dark theme" aria-pressed={theme === "dark"}>
        <Moon className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
}

function ProductPreview() {
  const bars = [40, 58, 48, 72, 61, 84, 75, 92, 80, 96, 88, 100];
  return (
    <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">
      <div className="absolute -left-5 top-12 hidden w-44 rounded-md border bg-card p-4 shadow-modal xl:block">
        <div className="flex items-center gap-2 text-xs font-bold"><span className="grid h-7 w-7 place-items-center rounded-md bg-primary-soft text-primary"><Send className="h-3.5 w-3.5" /></span>Campaign sent</div>
        <p className="mt-3 font-heading text-xl font-bold">24,860</p>
        <p className="mt-1 text-[11px] text-muted-foreground">Delivered in 4m 12s</p>
      </div>
      <div className="overflow-hidden rounded-lg border bg-card shadow-modal">
        <div className="flex h-12 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /><span className="text-xs font-bold">Campaign overview</span></div>
          <span className="rounded-full bg-primary-soft px-2 py-1 text-[10px] font-bold text-primary">LIVE</span>
        </div>
        <div className="grid min-h-[390px] grid-cols-[64px_1fr] sm:grid-cols-[150px_1fr]">
          <div className="border-r bg-foreground p-3 text-background dark:bg-muted">
            <div className="mb-6 flex items-center gap-2 px-1"><Mail className="h-4 w-4 text-primary" /><span className="hidden text-xs font-bold sm:inline">Workspace</span></div>
            {[BarChart3, Send, Users, Code2].map((Icon, index) => <div key={index} className={`mb-2 flex h-9 items-center gap-2 rounded-md px-2 ${index === 0 ? "bg-primary text-primary-foreground" : "text-background/65 dark:text-muted-foreground"}`}><Icon className="h-4 w-4" /><span className="hidden text-[11px] font-semibold sm:inline">{["Overview", "Campaigns", "Audiences", "API"][index]}</span></div>)}
          </div>
          <div className="min-w-0 p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3"><div><p className="font-heading text-sm font-bold">Good morning, Myra</p><p className="mt-1 text-[10px] text-muted-foreground">Your email performance this month</p></div><Button size="sm" className="h-8 px-3 text-[11px]"><Send /> Send campaign</Button></div>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[['Emails sent','124.8k'],['Open rate','42.3%'],['API health','99.98%']].map(([label,value], i) => <div key={label} className={`rounded-md border p-3 ${i === 2 ? "hidden sm:block" : ""}`}><p className="text-[9px] font-semibold text-muted-foreground">{label}</p><p className="mt-2 font-heading text-base font-bold">{value}</p><p className="mt-1 text-[9px] font-bold text-primary">↑ healthy</p></div>)}
            </div>
            <div className="mt-3 rounded-md border p-4">
              <div className="flex items-center justify-between"><p className="text-[11px] font-bold">Email performance</p><p className="text-[9px] text-muted-foreground">Last 30 days</p></div>
              <div className="mt-5 flex h-28 items-end gap-2 border-b border-l px-2">
                {bars.map((height, index) => <span key={index} className="flex-1 rounded-t-sm bg-primary/25" style={{ height: `${height}%` }}><span className="block h-[38%] w-full rounded-t-sm bg-primary" /></span>)}
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-md border p-3"><div className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-full bg-primary-soft text-primary"><Zap className="h-3.5 w-3.5" /></span><div><p className="text-[10px] font-bold">Welcome automation</p><p className="text-[9px] text-muted-foreground">4 steps · 3,249 entered</p></div></div><ChevronRight className="h-4 w-4 text-muted-foreground" /></div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 right-4 hidden w-48 rounded-md border bg-card p-4 shadow-modal sm:block">
        <div className="flex items-center justify-between"><span className="text-[10px] font-bold text-muted-foreground">API STATUS</span><span className="h-2 w-2 rounded-full bg-primary" /></div>
        <p className="mt-2 font-heading text-sm font-bold">All systems operational</p>
      </div>
    </div>
  );
}

export default function Index() {
  const [theme, setTheme] = useState<Theme>(() => window.localStorage.getItem("goood-mail-theme") === "dark" ? "dark" : "light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("goood-mail-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-lg">
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <Brand />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            <a href="#platform" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">Platform</a>
            <a href="#developers" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">Developers</a>
            <a href="#automation" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">Automation</a>
            <a href="#results" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">Results</a>
          </nav>
          <div className="hidden items-center gap-2 sm:flex">
            <ThemeControl theme={theme} setTheme={setTheme} />
            <Button variant="ghost" asChild><Link to="/dashboard">Sign in</Link></Button>
            <Button asChild><Link to="/dashboard">Start sending <ArrowRight /></Link></Button>
          </div>
          <Button variant="ghost" size="icon" className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <div className="border-t bg-background p-5 sm:hidden"><nav className="space-y-1">{[["Platform","#platform"],["Developers","#developers"],["Automation","#automation"],["Results","#results"]].map(([label,href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block rounded-md px-3 py-3 text-sm font-semibold hover:bg-muted">{label}</a>)}</nav><div className="mt-4 flex items-center gap-2 border-t pt-4"><ThemeControl theme={theme} setTheme={setTheme} /><Button className="flex-1" asChild><Link to="/dashboard">Start sending <ArrowRight /></Link></Button></div></div>}
      </header>

      <main>
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-grid opacity-55" aria-hidden="true" />
          <div className="relative mx-auto grid min-h-[690px] max-w-[1240px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:py-24">
            <div className="max-w-xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs font-bold text-muted-foreground shadow-soft"><span className="h-2 w-2 rounded-full bg-primary" />Campaigns and transactional email, together</div>
              <h1 className="font-heading text-[42px] font-bold leading-[1.08] sm:text-6xl lg:text-[64px]">Every email your business sends. <span className="text-primary">One clear system.</span></h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">Create campaigns, automate customer journeys, and send product email through a developer-friendly API—all without switching tools.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button size="lg" asChild><Link to="/dashboard">Start sending free <ArrowRight /></Link></Button><Button size="lg" variant="outline" asChild><Link to="/dashboard">Explore the dashboard</Link></Button></div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-muted-foreground">{["No credit card", "Fast API setup", "Campaign analytics"].map(item => <span key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{item}</span>)}</div>
            </div>
            <ProductPreview />
          </div>
        </section>

        <section id="results" className="border-b bg-card">
          <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-px bg-border px-5 sm:px-8 lg:grid-cols-4">
            {[['124M+','messages delivered'],['99.98%','successful requests'],['42 ms','median API response'],['48K+','active contacts']].map(([value,label]) => <div key={label} className="bg-card px-5 py-8 text-center sm:py-10"><p className="font-heading text-2xl font-bold sm:text-3xl">{value}</p><p className="mt-2 text-xs font-semibold text-muted-foreground">{label}</p></div>)}
          </div>
        </section>

        <section id="platform" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div><p className="text-xs font-bold uppercase text-primary">One operating system</p><h2 className="mt-4 max-w-md font-heading text-3xl font-bold leading-tight sm:text-4xl">Built for the whole email operation</h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">Give marketing teams control and developers dependable infrastructure, with shared reporting across every send.</p></div>
            <div className="divide-y border-y">{capabilities.map(({icon:Icon,label,title,copy,stat,statLabel}) => <article key={label} className="grid gap-5 py-7 sm:grid-cols-[48px_1fr_130px] sm:items-start"><span className="grid h-11 w-11 place-items-center rounded-md bg-primary-soft text-primary"><Icon className="h-5 w-5" /></span><div><p className="text-xs font-bold uppercase text-primary">{label}</p><h3 className="mt-2 font-heading text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></div><div className="sm:text-right"><p className="font-heading text-xl font-bold">{stat}</p><p className="mt-1 text-[11px] text-muted-foreground">{statLabel}</p></div></article>)}</div>
          </div>
        </section>

        <section id="developers" className="bg-foreground text-background dark:bg-card dark:text-foreground">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
            <div><span className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground"><Code2 className="h-5 w-5" /></span><p className="mt-7 text-xs font-bold uppercase text-primary">Developer API</p><h2 className="mt-4 max-w-lg font-heading text-3xl font-bold leading-tight sm:text-4xl">From API key to delivered email in one request</h2><p className="mt-5 max-w-lg leading-7 text-background/65 dark:text-muted-foreground">A focused sending API, clear event logs, and the delivery signals your team needs to build with confidence.</p><Button className="mt-8" asChild><Link to="/dashboard">Open developer workspace <ArrowRight /></Link></Button></div>
            <div className="overflow-hidden rounded-lg border border-code-border bg-code shadow-code"><div className="flex h-11 items-center justify-between border-b border-code-border px-4"><div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-destructive" /><i className="h-2.5 w-2.5 rounded-full bg-secondary" /><i className="h-2.5 w-2.5 rounded-full bg-primary" /></div><span className="font-mono text-[10px] text-code-muted">send.ts</span></div><pre className="overflow-x-auto p-5 font-mono text-xs leading-7 text-code-foreground sm:p-7"><code><span className="text-code-accent">const</span> response = <span className="text-code-accent">await</span> mail.send({"({"}{"\n  "}from: <span className="text-primary">&quot;hello@yourbrand.com&quot;</span>,{"\n  "}to: <span className="text-primary">&quot;customer@example.com&quot;</span>,{"\n  "}subject: <span className="text-primary">&quot;Welcome aboard&quot;</span>,{"\n  "}template: <span className="text-primary">&quot;welcome-series&quot;</span>{"\n"}{"});"}{"\n\n"}<span className="text-code-muted">// 202 Accepted · 42 ms</span></code></pre></div>
          </div>
        </section>

        <section id="automation" className="border-b">
          <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase text-primary">Automation that stays readable</p><h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">Design journeys without losing the thread</h2><p className="mt-5 leading-7 text-muted-foreground">Connect the moments that matter, then see exactly how each message performs.</p></div><div className="mt-14 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">{[[Users,"New contact"],[Mail,"Send welcome"],[Activity,"Wait 1 day"],[Send,"Send follow-up"]].map(([Icon,label],index) => { const StepIcon = Icon as typeof Users; return <div key={label as string} className="contents"><div className="rounded-lg border bg-card p-5 shadow-soft"><span className="grid h-10 w-10 place-items-center rounded-md bg-primary-soft text-primary"><StepIcon className="h-4 w-4" /></span><p className="mt-5 text-xs font-bold text-primary">STEP {index + 1}</p><p className="mt-2 font-heading text-sm font-bold">{label as string}</p></div>{index < 3 && <ArrowRight className="mx-auto hidden h-5 w-5 text-muted-foreground md:block" />}</div>})}</div></div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28"><div className="grid overflow-hidden rounded-lg border bg-card lg:grid-cols-[1fr_0.82fr]"><div className="p-7 sm:p-12"><p className="text-xs font-bold uppercase text-primary">Start with clarity</p><h2 className="mt-4 max-w-xl font-heading text-3xl font-bold sm:text-4xl">Your next campaign and your next product email belong in the same place.</h2><p className="mt-5 max-w-xl leading-7 text-muted-foreground">Bring campaigns, audiences, automations, and API delivery into one professional workspace.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button size="lg" asChild><Link to="/dashboard">Start sending free <ArrowRight /></Link></Button><Button size="lg" variant="outline" asChild><a href="#developers">View the API</a></Button></div></div><div className="grid grid-cols-2 gap-px bg-border border-t lg:border-l lg:border-t-0">{[[ShieldCheck,"Protected sending"],[Globe2,"Global delivery"],[BarChart3,"Unified reporting"],[Zap,"Fast automation"]].map(([Icon,label]) => { const FeatureIcon = Icon as typeof ShieldCheck; return <div key={label as string} className="bg-muted/45 p-6"><FeatureIcon className="h-5 w-5 text-primary" /><p className="mt-4 text-sm font-bold">{label as string}</p></div>})}</div></div></section>
      </main>

      <footer className="border-t bg-card"><div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between"><Brand /><p className="text-xs text-muted-foreground">Campaigns, automation, and transactional email in one system.</p><div className="flex gap-5 text-xs font-semibold text-muted-foreground"><a href="#platform" className="hover:text-foreground">Platform</a><a href="#developers" className="hover:text-foreground">API</a><Link to="/dashboard" className="hover:text-foreground">Dashboard</Link></div></div></footer>
    </div>
  );
}