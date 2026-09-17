import { useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  BookOpen,
  Check,
  ChevronDown,
  Code2,
  Copy,
  FileText,
  Gauge,
  KeyRound,
  LayoutDashboard,
  Mail,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Send,
  Settings,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type View = "Dashboard" | "Campaigns" | "Developer API" | "Audiences";

const navItems: { label: View; icon: typeof LayoutDashboard }[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Campaigns", icon: Send },
  { label: "Developer API", icon: Code2 },
  { label: "Audiences", icon: Users },
];

const metrics = [
  { label: "Emails sent", value: "124,892", change: "+12.5%", up: true, icon: Send },
  { label: "Open rate", value: "42.3%", change: "+2.1%", up: true, icon: Mail },
  { label: "Click rate", value: "8.74%", change: "+0.8%", up: true, icon: Activity },
  { label: "Unsubscribed", value: "0.18%", change: "-0.04%", up: false, icon: Users },
];

const campaigns = [
  { name: "Welcome Series A/B", type: "Automated sequence", status: "Sending", open: "48.2%", click: "12.9%", sent: "34,820", date: "Sep 16, 2026" },
  { name: "September Product Update", type: "Product newsletter", status: "Scheduled", open: "—", click: "—", sent: "18,240", date: "Sep 19, 2026" },
  { name: "Trial Expiry Reminder", type: "Lifecycle email", status: "Completed", open: "51.7%", click: "9.4%", sent: "8,416", date: "Sep 14, 2026" },
];

const logs = [
  { method: "POST", path: "/v1/email/send", status: "200", time: "38 ms", when: "8s ago" },
  { method: "POST", path: "/v1/email/send", status: "200", time: "42 ms", when: "24s ago" },
  { method: "GET", path: "/v1/domains", status: "200", time: "31 ms", when: "1m ago" },
  { method: "POST", path: "/v1/email/send", status: "202", time: "45 ms", when: "2m ago" },
];

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-brand">
        <Mail className="h-[18px] w-[18px]" strokeWidth={2.25} />
      </div>
      <div className="leading-none">
        <p className="font-heading text-[15px] font-bold text-foreground">Goood Mail</p>
        <p className="mt-1 text-[10px] font-semibold uppercase text-muted-foreground">Email infrastructure</p>
      </div>
    </div>
  );
}

function Sidebar({ active, setActive, open, close }: { active: View; setActive: (view: View) => void; open: boolean; close: () => void }) {
  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-foreground/25 lg:hidden" onClick={close} aria-hidden="true" />}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[250px] flex-col border-r bg-card transition-transform duration-200 lg:static lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-[72px] items-center justify-between border-b px-5">
          <Brand />
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={close} aria-label="Close navigation"><X /></Button>
        </div>
        <nav className="flex-1 px-3 py-5" aria-label="Primary navigation">
          <p className="mb-2 px-3 text-[10px] font-bold uppercase text-muted-foreground">Workspace</p>
          <div className="space-y-1">
            {navItems.map(({ label, icon: Icon }) => (
              <Button
                key={label}
                variant="ghost"
                onClick={() => { setActive(label); close(); }}
                className={`w-full justify-start px-3 ${active === label ? "bg-primary-soft text-primary hover:bg-primary-soft hover:text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Icon />
                {label}
              </Button>
            ))}
          </div>
          <p className="mb-2 mt-8 px-3 text-[10px] font-bold uppercase text-muted-foreground">Manage</p>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start px-3 text-muted-foreground hover:text-foreground"><FileText /> Templates</Button>
            <Button variant="ghost" className="w-full justify-start px-3 text-muted-foreground hover:text-foreground"><Settings /> Settings</Button>
          </div>
        </nav>
        <div className="m-3 rounded-lg border bg-primary-soft p-4">
          <div className="flex items-center justify-between text-xs font-bold text-primary"><span>API usage</span><span>72%</span></div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-primary/15"><div className="h-full w-[72%] rounded-full bg-primary" /></div>
          <p className="mt-2.5 text-[11px] text-muted-foreground">7,240 of 10,000 requests</p>
          <Button variant="link" className="mt-1 h-auto p-0 text-xs">Upgrade plan <ArrowUpRight /></Button>
        </div>
        <div className="flex items-center gap-3 border-t p-4">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-secondary font-heading text-xs font-bold text-secondary-foreground">MR</div>
          <div className="min-w-0 flex-1"><p className="truncate text-xs font-bold">Myra Rose</p><p className="truncate text-[11px] text-muted-foreground">Workspace owner</p></div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </aside>
    </>
  );
}

function Dashboard() {
  return (
    <div className="space-y-6">
      <section className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {metrics.map(({ label, value, change, up, icon: Icon }) => (
          <article key={label} className="rounded-lg border bg-card p-4 shadow-soft sm:p-5">
            <div className="flex items-start justify-between"><p className="text-xs font-semibold text-muted-foreground sm:text-sm">{label}</p><div className="grid h-8 w-8 place-items-center rounded-md bg-muted text-muted-foreground"><Icon className="h-4 w-4" /></div></div>
            <p className="mt-4 font-heading text-2xl font-bold text-foreground sm:text-[28px]">{value}</p>
            <p className={`mt-2 flex items-center gap-1 text-xs font-bold ${up ? "text-success" : "text-primary"}`}>{up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}{change}<span className="font-medium text-muted-foreground">vs last month</span></p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1.6fr)_minmax(290px,0.7fr)]">
        <article className="rounded-lg border bg-card shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b p-5">
            <div><h2 className="font-heading text-base font-bold">Performance overview</h2><p className="mt-1 text-xs text-muted-foreground">Email delivery activity over the last 30 days</p></div>
            <Button variant="outline" size="sm">Last 30 days <ChevronDown /></Button>
          </div>
          <div className="p-5">
            <div className="mb-4 flex gap-5 text-xs font-semibold text-muted-foreground"><span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-primary" />Delivered</span><span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-secondary" />Opened</span></div>
            <div className="relative h-[210px] overflow-hidden rounded-md bg-grid">
              <div className="absolute inset-x-0 top-3 flex justify-between px-2 text-[10px] text-muted-foreground"><span>12k</span><span>9k</span><span>6k</span><span>3k</span></div>
              <svg viewBox="0 0 720 210" preserveAspectRatio="none" className="absolute inset-0 h-full w-full text-primary" aria-label="Email performance chart" role="img">
                <path d="M0 170 C65 152,90 160,140 125 S230 112,280 130 S375 92,420 104 S505 55,560 78 S650 38,720 48" fill="none" stroke="currentColor" strokeWidth="3" />
                <path d="M0 184 C70 172,100 178,145 157 S225 151,280 164 S370 130,420 142 S510 112,560 122 S655 86,720 98" fill="none" stroke="hsl(var(--secondary))" strokeWidth="2" strokeDasharray="5 5" />
              </svg>
              <div className="absolute bottom-2 inset-x-3 flex justify-between text-[10px] text-muted-foreground"><span>Aug 19</span><span>Aug 25</span><span>Sep 1</span><span>Sep 8</span><span>Sep 16</span></div>
            </div>
          </div>
        </article>

        <article className="overflow-hidden rounded-lg bg-code text-code-foreground shadow-code">
          <div className="flex items-center justify-between border-b border-code-border px-5 py-4"><div className="flex items-center gap-2"><Zap className="h-4 w-4 text-secondary" /><h2 className="font-heading text-sm font-bold">API quickstart</h2></div><span className="flex items-center gap-1.5 text-[10px] text-code-muted"><i className="h-1.5 w-1.5 rounded-full bg-success" />All systems operational</span></div>
          <div className="p-5">
            <p className="text-xs leading-5 text-code-muted">Send your first email with one API request.</p>
            <pre className="mt-4 overflow-x-auto rounded-md border border-code-border bg-code-panel p-4 font-mono text-[11px] leading-6"><code><span className="text-secondary">curl</span> -X POST \\{`\n`}  https://api.gooodmail.com/v1/send \\{`\n`}  -H <span className="text-code-accent">&quot;Authorization: Bearer gm_...&quot;</span> \\{`\n`}  -d <span className="text-code-accent">'&#123;&quot;to&quot;:&quot;hello@example.com&quot;&#125;'</span></code></pre>
            <div className="mt-4 flex gap-2"><Button size="sm" onClick={() => toast.success("Test email queued successfully")}><Send /> Send test</Button><Button size="sm" variant="outlineDark"><BookOpen /> Read docs</Button></div>
          </div>
        </article>
      </section>

      <section className="overflow-hidden rounded-lg border bg-card shadow-soft">
        <div className="flex items-center justify-between border-b p-5"><div><h2 className="font-heading text-base font-bold">Recent campaigns</h2><p className="mt-1 text-xs text-muted-foreground">Your latest broadcasts and automated sequences</p></div><Button variant="ghost" size="sm">View all <ArrowUpRight /></Button></div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-muted/60 text-[10px] font-bold uppercase text-muted-foreground"><tr><th className="px-5 py-3">Campaign</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Delivered</th><th className="px-5 py-3">Engagement</th><th className="px-5 py-3">Date</th><th className="w-12 px-5 py-3"><span className="sr-only">Actions</span></th></tr></thead>
            <tbody className="divide-y">
              {campaigns.map((campaign) => <tr key={campaign.name} className="transition-colors hover:bg-muted/40"><td className="px-5 py-4"><p className="font-semibold">{campaign.name}</p><p className="mt-1 text-xs text-muted-foreground">{campaign.type}</p></td><td className="px-5 py-4"><span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-bold ${campaign.status === "Sending" ? "bg-success-soft text-success" : campaign.status === "Scheduled" ? "bg-primary-soft text-primary" : "bg-muted text-muted-foreground"}`}><i className="h-1.5 w-1.5 rounded-full bg-current" />{campaign.status}</span></td><td className="px-5 py-4 font-semibold">{campaign.sent}</td><td className="px-5 py-4"><span className="font-semibold">{campaign.open}</span><span className="ml-3 text-muted-foreground">{campaign.click}</span></td><td className="px-5 py-4 text-muted-foreground">{campaign.date}</td><td className="px-5 py-4"><Button size="icon" variant="ghost" aria-label={`More options for ${campaign.name}`}><MoreHorizontal /></Button></td></tr>)}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function Campaigns({ create }: { create: () => void }) {
  return <div className="space-y-5"><div className="flex justify-end"><Button onClick={create}><Plus /> New campaign</Button></div><section className="grid gap-4 md:grid-cols-3">{campaigns.map((c) => <article key={c.name} className="rounded-lg border bg-card p-5 shadow-soft"><div className="flex justify-between"><div className="grid h-9 w-9 place-items-center rounded-md bg-primary-soft text-primary"><Mail /></div><Button variant="ghost" size="icon"><MoreHorizontal /></Button></div><h2 className="mt-5 font-heading text-base font-bold">{c.name}</h2><p className="mt-1 text-xs text-muted-foreground">{c.type}</p><div className="mt-5 grid grid-cols-3 border-t pt-4 text-xs"><div><p className="text-muted-foreground">Sent</p><p className="mt-1 font-bold">{c.sent}</p></div><div><p className="text-muted-foreground">Opened</p><p className="mt-1 font-bold">{c.open}</p></div><div><p className="text-muted-foreground">Clicked</p><p className="mt-1 font-bold">{c.click}</p></div></div></article>)}</section></div>;
}

function DeveloperApi() {
  const copyKey = () => { navigator.clipboard?.writeText("gm_live_••••••••••••••••"); toast.success("API key copied"); };
  return <div className="grid gap-5 xl:grid-cols-[1fr_1.4fr]"><section className="space-y-5"><article className="rounded-lg border bg-card p-5 shadow-soft"><div className="flex items-center justify-between"><div className="grid h-9 w-9 place-items-center rounded-md bg-primary-soft text-primary"><KeyRound /></div><span className="rounded-full bg-success-soft px-2 py-1 text-[10px] font-bold text-success">LIVE</span></div><h2 className="mt-5 font-heading text-base font-bold">Production API key</h2><p className="mt-1 text-xs text-muted-foreground">Created on August 24, 2026</p><div className="mt-4 flex items-center gap-2 rounded-md border bg-muted px-3 py-2 font-mono text-xs"><span className="min-w-0 flex-1 truncate">gm_live_••••••••••••••••</span><Button variant="ghost" size="icon" onClick={copyKey} aria-label="Copy API key"><Copy /></Button></div></article><article className="rounded-lg border bg-card p-5 shadow-soft"><h2 className="font-heading text-base font-bold">API health</h2><div className="mt-5 space-y-4">{[["Requests today","7,240"],["Success rate","99.98%"],["Median latency","42 ms"]].map(([a,b]) => <div key={a} className="flex justify-between text-sm"><span className="text-muted-foreground">{a}</span><strong>{b}</strong></div>)}</div></article></section><section className="overflow-hidden rounded-lg bg-code text-code-foreground shadow-code"><div className="flex items-center justify-between border-b border-code-border p-5"><h2 className="font-heading text-base font-bold">Live request log</h2><span className="flex items-center gap-2 text-xs text-code-muted"><i className="h-2 w-2 animate-pulse rounded-full bg-success" />Listening</span></div><div className="divide-y divide-code-border">{logs.map((l, i) => <div key={`${l.path}-${i}`} className="grid grid-cols-[48px_1fr_auto] gap-3 p-4 font-mono text-xs"><span className="text-secondary">{l.method}</span><div><p>{l.path}</p><p className="mt-1 text-code-muted">{l.when}</p></div><div className="text-right"><p className="text-success">{l.status}</p><p className="mt-1 text-code-muted">{l.time}</p></div></div>)}</div></section></div>;
}

function Audiences() {
  return <div className="grid gap-5 lg:grid-cols-3"><article className="rounded-lg border bg-card p-6 shadow-soft lg:col-span-2"><div className="flex items-center justify-between"><div><h2 className="font-heading text-base font-bold">Audience growth</h2><p className="mt-1 text-xs text-muted-foreground">Subscribers added in the last 30 days</p></div><span className="text-sm font-bold text-success">+8.4%</span></div><div className="mt-8 grid h-48 grid-cols-12 items-end gap-2">{[32,45,38,54,48,62,57,72,64,82,75,92].map((h,i)=><div key={i} className="rounded-t bg-primary/15 transition-colors hover:bg-primary" style={{height:`${h}%`}} />)}</div></article><article className="rounded-lg border bg-card p-6 shadow-soft"><div className="grid h-10 w-10 place-items-center rounded-md bg-primary-soft text-primary"><Users /></div><p className="mt-6 text-sm text-muted-foreground">Total contacts</p><p className="mt-1 font-heading text-3xl font-bold">48,291</p><div className="mt-6 space-y-3 border-t pt-5 text-sm"><div className="flex justify-between"><span className="text-muted-foreground">Subscribed</span><b>46,920</b></div><div className="flex justify-between"><span className="text-muted-foreground">Unsubscribed</span><b>1,371</b></div></div></article></div>;
}

export default function Index() {
  const [active, setActive] = useState<View>("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [composerOpen, setComposerOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar active={active} setActive={setActive} open={sidebarOpen} close={() => setSidebarOpen(false)} />
      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 flex h-[72px] items-center gap-3 border-b bg-background/90 px-4 backdrop-blur-md sm:px-6 lg:px-8">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)} aria-label="Open navigation"><Menu /></Button>
          <div className="min-w-0 flex-1"><h1 className="truncate font-heading text-base font-bold sm:text-lg">{active}</h1><p className="hidden text-xs text-muted-foreground sm:block">Welcome back, Myra. Here’s what’s happening today.</p></div>
          <div className="relative hidden max-w-[260px] flex-1 md:block"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><input className="h-9 w-full rounded-md border bg-card pl-9 pr-3 text-xs outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring" placeholder="Search campaigns, contacts..." aria-label="Search" /></div>
          <Button variant="ghost" size="icon" aria-label="Notifications"><Bell /></Button>
          <Button onClick={() => setComposerOpen(true)}><Plus /> <span className="hidden sm:inline">New campaign</span></Button>
        </header>
        <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
          {active === "Dashboard" && <Dashboard />}
          {active === "Campaigns" && <Campaigns create={() => setComposerOpen(true)} />}
          {active === "Developer API" && <DeveloperApi />}
          {active === "Audiences" && <Audiences />}
        </main>
      </div>
      {composerOpen && <div className="fixed inset-0 z-[60] grid place-items-center bg-foreground/30 p-4" role="dialog" aria-modal="true" aria-labelledby="composer-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setComposerOpen(false); }}><div className="w-full max-w-lg rounded-lg border bg-card shadow-modal"><div className="flex items-center justify-between border-b p-5"><div><p className="text-xs font-bold text-primary">CREATE CAMPAIGN</p><h2 id="composer-title" className="mt-1 font-heading text-lg font-bold">Start with a format</h2></div><Button variant="ghost" size="icon" onClick={() => setComposerOpen(false)} aria-label="Close"><X /></Button></div><div className="grid gap-3 p-5 sm:grid-cols-2">{[{t:"Marketing campaign",d:"A designed email for your audience",i:Sparkles},{t:"Plain text email",d:"A personal, focused message",i:FileText},{t:"Automated sequence",d:"Trigger emails from customer actions",i:Zap},{t:"Developer send",d:"Send one email using the API",i:Code2}].map(({t,d,i:Icon})=><button key={t} className="group rounded-lg border p-4 text-left transition-all hover:border-primary hover:bg-primary-soft focus:outline-none focus:ring-2 focus:ring-ring" onClick={()=>{setComposerOpen(false); toast.success(`${t} selected`);}}><div className="grid h-9 w-9 place-items-center rounded-md bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="h-4 w-4" /></div><p className="mt-4 text-sm font-bold">{t}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{d}</p></button>)}</div><div className="flex items-center justify-between border-t bg-muted/50 px-5 py-4"><p className="flex items-center gap-2 text-xs text-muted-foreground"><Check className="h-3.5 w-3.5 text-success" />Drafts save automatically</p><Button variant="ghost" size="sm" onClick={() => setComposerOpen(false)}>Cancel</Button></div></div></div>}
    </div>
  );
}