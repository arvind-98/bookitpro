"use client";

import { useState } from "react";
import {
  ArrowDownRight, ArrowLeftRight, ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, BookOpen, Building2, Calculator, Check,
  ClipboardCheck, Clock3, FileCheck2, FileText, Globe2, Landmark, Layers3, Menu, Receipt,
  ShieldCheck, Sparkles, TrendingUp, Truck, Users, Wallet, X, Zap, CircleHelp, Fingerprint,
} from "lucide-react";

const features = [
  { icon: Receipt, title: "Invoicing that feels effortless", text: "Create polished invoices and estimates, keep an eye on outstanding balances, and spend less time chasing paperwork.", tag: "Get paid with clarity" },
  { icon: Wallet, title: "Expenses, bills & cash flow", text: "Bring spending and supplier bills into one organized place so you can see what is coming in and going out.", tag: "Know your numbers" },
  { icon: BookOpen, title: "Books that stay in balance", text: "Keep a structured general ledger, accounts and journal entries that give your business a dependable financial foundation.", tag: "Confidence at month-end" },
  { icon: FileCheck2, title: "Canadian tax workflows", text: "Organize GST/HST and tax-return work in a clear workspace designed around the needs of Canadian businesses and practices.", tag: "Stay tax-ready" },
  { icon: BarChart3, title: "Reports with a point of view", text: "Make sense of financial activity with summaries that help you understand receivables, payables and business performance.", tag: "See the bigger picture" },
  { icon: Users, title: "Clients, people & time", text: "Keep client details, team information and time tracking together instead of scattered across disconnected tools.", tag: "One connected workspace" },
];

const faqs = [
  { q: "What is BookitPro?", a: "BookitPro is a web-based accounting workspace for organizing core bookkeeping, invoicing, expenses, client records, reports and Canadian tax workflows." },
  { q: "Is BookitPro designed for Canadian businesses?", a: "The product includes Canadian-focused workflows such as GST/HST and tax-return organization. Always review tax entries and filing requirements with a qualified professional." },
  { q: "Can I manage invoices and expenses in one place?", a: "Yes. The accounting platform includes invoice and estimate workflows alongside expenses, supplier bills, transactions and financial reporting." },
  { q: "How does the introductory pricing work?", a: "Ledger Only is CAD $10 per business per month for the first three months, then CAD $15 per month. Full Bookkeeping is CAD $15 per business per month for the first three months, then CAD $30 per month. Applicable taxes are extra and the introductory offer applies once per business." },
  { q: "Can I cancel my subscription?", a: "Subscriptions are monthly and renew automatically unless renewal is canceled. Check your portal subscription settings for the applicable cancellation and billing details." },
  { q: "How does the referral credit work?", a: "A referring customer can receive a CAD $10 subscription credit after the referred business pays two monthly invoices. One reward is available per new business. Self-referrals and refunded payments do not qualify, and the referral must be verified through the portal." },
  { q: "What happens if a subscription payment fails?", a: "If a subscription payment fails, you’ll receive reminders and have a seven-day grace period to resolve it. Check the portal for payment status and any action needed to keep your subscription active." },
  { q: "Do the plans include a bookkeeper or tax filing?", a: "No. The subscription covers software access. Human bookkeeping, accountant services and tax filing services are separate services with separate pricing." },
  { q: "Does BookitPro file my GST/HST return or payroll remittances?", a: "GST/HST reporting is for preparation and export; it is not filing submission. The initial GST/HST scope is the regular method. The Quick Method, payroll calculations, salary payments and remittances are not included in the stated software scope." },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" aria-label="BookitPro home" className="inline-flex items-center" title="BookitPro home">
      <img
        src="/bookit-pro-website.ico"
        alt="BookitPro"
        width="184"
        height="100"
        style={{ mixBlendMode: "darken", backgroundColor: "transparent" }}
        className="h-[100px] w-[184px] object-cover object-center"
      />
    </a>
  );
}

function DashboardPreview() {
  const navItems = [[Receipt, "Invoices"], [Wallet, "Expenses"], [BookOpen, "Bookkeeping"], [FileCheck2, "Tax centre"], [BarChart3, "Reports"]] as const;
  const activities = [["Invoice paid", "Northstar Studio", "+ $1,250"], ["Expense added", "Office supplies", "− $184"], ["Invoice sent", "Maple & Co.", "$2,400"]] as const;
  return (
    <div className="dashboard-window relative">
      <div className="flex items-center justify-between border-b border-[#E5EBF0] bg-[#fdfdfb] px-5 py-3.5">
        <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#f0a49b]"/><span className="h-2.5 w-2.5 rounded-full bg-[#e6c87c]"/><span className="h-2.5 w-2.5 rounded-full bg-[#8ccfd0]"/></div>
        <div className="rounded-full border border-[#E1E8EF] bg-white px-3 py-1 text-[10px] text-[#8a958e]">app.bookitpro.ca / dashboard</div>
        <div className="h-7 w-7 rounded-full bg-[#E6F8F6] text-center text-[10px] font-bold leading-7 text-[#0FA6A3]">BP</div>
      </div>
      <div className="grid grid-cols-[142px_1fr] max-[560px]:grid-cols-[48px_1fr]">
        <aside className="border-r border-[#E5EBF0] bg-[#F7FAFC] p-3 max-[560px]:px-2">
          <div className="mb-6 flex items-center gap-2 rounded-lg bg-[#E6F8F6] px-2.5 py-2 text-[11px] font-bold text-[#0FA6A3] max-[560px]:justify-center max-[560px]:px-0"><Layers3 size={14}/><span className="max-[560px]:hidden">Overview</span></div>
          {navItems.map(([Icon,label]) => <div key={label} className="mb-4 flex items-center gap-2.5 px-2 text-[10px] text-[#6e838a] max-[560px]:justify-center max-[560px]:px-0"><Icon size={14}/><span className="max-[560px]:hidden">{label}</span></div>)}
          <div className="mt-12 rounded-lg bg-[#F1F8F8] p-2.5 max-[560px]:hidden"><div className="mb-1 text-[9px] font-bold text-[#526C7B]">Need a hand?</div><div className="text-[9px] leading-4 text-[#7f8c83]">Your books, a little clearer.</div></div>
        </aside>
        <div className="min-w-0 p-5 max-[560px]:p-3">
          <div className="mb-1 text-[10px] font-semibold uppercase tracking-[.12em] text-[#8c978f]">Monday, October 12</div>
          <div className="flex flex-wrap items-end justify-between gap-3"><div><h3 className="text-[22px] font-bold tracking-[-.05em] text-[#182820] max-[560px]:text-[19px]">Good morning, Alex <span>✳</span></h3><p className="mt-1 text-[11px] text-[#849088]">Here&apos;s how your business is doing.</p></div><a className="rounded-full bg-[#0FA6A3] px-3 py-2 text-[10px] font-bold text-white" href="#contact">+ New invoice</a></div>
          <div className="mini-grid mt-5">
            <div className="stat-card"><div className="text-[10px] text-[#87928b]">Total invoiced</div><div className="mt-2 text-[20px] font-bold tracking-[-.045em]">$24,850</div><div className="mt-2 flex items-center gap-1 text-[9px] font-semibold text-[#0FA6A3]"><TrendingUp size={11}/> 12.8% <span className="font-normal text-[#87999f]">vs last month</span></div></div>
            <div className="stat-card"><div className="text-[10px] text-[#87928b]">To be collected</div><div className="mt-2 text-[20px] font-bold tracking-[-.045em]">$6,420</div><div className="mt-2 flex items-center gap-1 text-[9px] font-semibold text-[#b47b24]"><Clock3 size={11}/> 4 invoices due</div></div>
            <div className="stat-card"><div className="text-[10px] text-[#87928b]">Expenses</div><div className="mt-2 text-[20px] font-bold tracking-[-.045em]">$8,360</div><div className="mt-2 flex items-center gap-1 text-[9px] font-semibold text-[#0FA6A3]"><ArrowDownRight size={11}/> On track</div></div>
          </div>
          <div className="mt-4 grid grid-cols-[1.12fr_.88fr] gap-3 max-[560px]:grid-cols-1">
            <div className="rounded-xl border border-[#E1E8EF] p-3.5"><div className="flex items-center justify-between"><div className="text-[11px] font-bold">Cash flow</div><div className="text-[9px] text-[#929d95]">Last 6 months⌄</div></div><div className="mt-4 flex h-[108px] items-end gap-2 px-1">{[38,53,42,70,59,85,65,78,57,92,72,98].map((h,i)=><div key={i} className="flex-1 rounded-t-[4px]" style={{height:`${h}%`,background:i>8?"#0FA6A3":i>5?"#76D8D2":"#E0F6F4"}}/>)}</div><div className="mt-2 flex justify-between text-[8px] text-[#87999f]"><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span></div></div>
            <div className="rounded-xl border border-[#E1E8EF] p-3.5"><div className="text-[11px] font-bold">Recent activity</div><div className="mt-4 space-y-4">{activities.map(([a,b,c],i)=><div key={a} className="flex items-center gap-2"><div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${i===1?"bg-[#fff2df]":"bg-[#E6F8F6]"}`}>{i===1?<Receipt size={13} className="text-[#b47b24]"/>:<Check size={13} className="text-[#0FA6A3]"/>}</div><div className="min-w-0 flex-1"><div className="truncate text-[9px] font-bold">{a}</div><div className="truncate text-[9px] text-[#87999f]">{b}</div></div><div className={`text-[9px] font-bold ${i===1?"text-[#b47b24]":"text-[#0FA6A3]"}`}>{c}</div></div>)}</div></div>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#F1F8F8] px-3 py-2.5 text-[10px] text-[#087C83]"><BadgeCheck size={14}/><span>Everything in its place. Your next decision, a little easier.</span></div>
        </div>
      </div>
      <div className="absolute -left-6 bottom-16 hidden rounded-2xl border border-[#E1E8EF] bg-white p-4 shadow-xl sm:block">
        <div className="flex items-center gap-2 text-[10px] font-semibold text-[#627168]"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E6F8F6] text-[#0FA6A3]"><Check size={14}/></span> Books looking good</div>
        <div className="ml-9 mt-1 text-[9px] text-[#87999f]">Entries organized in one place</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signupName, setSignupName] = useState("");
  const [signupFirm, setSignupFirm] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);

  async function submitSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSignupError("");
    setSignupSuccess("");

    if (signupName.trim().length < 2) {
      setSignupError("Please enter your full name.");
      return;
    }
    if (password.length < 8) {
      setSignupError("Use a password with at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setSignupError("Your passwords do not match.");
      return;
    }

    setIsSigningUp(true);
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: signupName.trim(),
          email: email.trim().toLowerCase(),
          firm: signupFirm.trim() || undefined,
          password,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || "We couldn’t create your account. Please try again.");
      }
      setSignupSuccess("Your account has been created. You can now sign in to BookitPro.");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setSignupError(error instanceof Error ? error.message : "Signup failed. Please try again.");
    } finally {
      setIsSigningUp(false);
    }
  }

  return (
    <main id="top" className="overflow-hidden">
      <div className="bg-[#12345B] px-4 py-2.5 text-center text-[11px] font-medium text-white sm:text-[12px]">
        <span className="mr-2 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-[#A6E8E4]"><Sparkles size={11}/> Introducing BookitPro</span>
        A clearer view of your business starts here. <a href="#features" className="ml-1 inline-flex items-center gap-1 font-bold text-[#A6E8E4] hover:underline">Explore features <ArrowRight size={12}/></a>
      </div>
      <header className="sticky top-0 z-50 border-b border-[#E1E8EF]/90 bg-[#fbfaf6]/95 backdrop-blur-xl">
        <div className="container flex h-[100px] items-center justify-between">
          <Logo/>
          <nav className="hidden items-center gap-7 md:flex"><a className="nav-link" href="#features">Features</a><a className="nav-link" href="#pricing">Plans &amp; Pricing</a><a className="nav-link" href="#how-it-works">How it works</a><a className="nav-link" href="#support">Contact / Support</a></nav>
          <div className="hidden items-center gap-3 md:flex"><a className="nav-link px-2 py-2" href="https://portal.bookitpro.ca/" target="_blank" rel="noopener noreferrer">Login</a><a className="btn btn-primary" href="#contact">Sign up <ArrowUpRight size={15}/></a></div>
          <button type="button" aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5e9e1] text-[#12345B] md:hidden">{mobileMenuOpen ? <X size={19}/> : <Menu size={19}/>}</button>
        </div>
        {mobileMenuOpen && <nav className="container flex flex-col gap-4 border-t border-[#E1E8EF] py-5 md:hidden"><a onClick={()=>setMobileMenuOpen(false)} className="nav-link" href="#features">Features</a><a onClick={()=>setMobileMenuOpen(false)} className="nav-link" href="#pricing">Plans &amp; Pricing</a><a onClick={()=>setMobileMenuOpen(false)} className="nav-link" href="#how-it-works">How it works</a><a onClick={()=>setMobileMenuOpen(false)} className="nav-link" href="#support">Contact / Support</a><a onClick={()=>setMobileMenuOpen(false)} className="nav-link" href="https://portal.bookitpro.ca/">Login</a><a onClick={()=>setMobileMenuOpen(false)} className="btn btn-primary w-full" href="#contact">Sign up <ArrowRight size={15}/></a></nav>}
      </header>

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-24 top-0 h-[500px] w-[500px] rounded-full bg-[#E6F8F6] opacity-70 blur-3xl"/>
        <div className="container hero-grid relative">
          <div className="pb-4"><div className="section-eyebrow mb-6">Accounting, made clearer</div><h1 className="hero-title max-w-[660px]">Your business.<br/>Your books.<br/><span>In balance.</span></h1><p className="mt-6 max-w-[490px] text-[16px] leading-7 text-[#647989] sm:text-[17px]">Spend less time piecing together numbers and more time moving forward. BookitPro brings your everyday accounting into one calm, connected workspace.</p><div className="mt-8 flex flex-wrap items-center gap-3"><a href="#pricing" className="btn btn-primary px-6 py-4">View plans &amp; pricing <ArrowRight size={16}/></a><a href="#contact" className="btn btn-light px-5 py-4">Create an account</a></div><div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-[#6e838a]"><span className="flex items-center gap-1.5"><Check size={14} className="text-[#0FA6A3]"/> Built for everyday finance</span><span className="flex items-center gap-1.5"><Check size={14} className="text-[#0FA6A3]"/> Canadian tax workflows</span><span className="flex items-center gap-1.5"><Check size={14} className="text-[#0FA6A3]"/> Accessible from the web</span></div></div>
          <div className="relative py-3 sm:px-3"><DashboardPreview/><div className="mt-4 text-center text-[10px] text-[#7e9298]">Illustrative preview · sample figures shown</div></div>
        </div>
      </section>

      <section className="border-y border-[#E1E8EF] bg-white/75 py-6"><div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[12px] text-[#6e838a] sm:justify-between"><span className="text-[11px] font-bold uppercase tracking-[.12em] text-[#87999f]">One workspace for</span><span className="flex items-center gap-2"><Receipt size={16} className="text-[#0FA6A3]"/> Invoicing</span><span className="flex items-center gap-2"><Wallet size={16} className="text-[#0FA6A3]"/> Expenses</span><span className="flex items-center gap-2"><BookOpen size={16} className="text-[#0FA6A3]"/> Bookkeeping</span><span className="flex items-center gap-2"><FileCheck2 size={16} className="text-[#0FA6A3]"/> Tax workflows</span><span className="flex items-center gap-2"><BarChart3 size={16} className="text-[#0FA6A3]"/> Reporting</span></div></section>

      <section id="features" className="py-20 sm:py-28"><div className="container"><div className="mx-auto max-w-[680px] text-center"><div className="section-eyebrow">The everyday essentials</div><h2 className="mt-5 text-3xl font-bold tracking-[-.055em] sm:text-[46px] sm:leading-[1.08]">The whole financial picture.<br/><span className="text-[#0FA6A3]">Without the scattered pieces.</span></h2><p className="mx-auto mt-5 max-w-[570px] text-[15px] leading-7 text-[#6e838a]">The essentials work better when they work together. Keep the important details connected and easier to act on.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map(({icon:Icon,title,text,tag})=><article key={title} className="feature-card"><div className="icon-tile"><Icon size={21}/></div><h3 className="mt-5 text-[18px] font-bold tracking-[-.03em]">{title}</h3><p className="mt-3 text-[13px] leading-6 text-[#748078]">{text}</p><div className="mt-6 flex items-center gap-2 border-t border-[#E5EBF0] pt-4 text-[11px] font-bold text-[#087C83]"><Check size={14}/>{tag}</div></article>)}</div></div></section>


      <section id="pricing" className="border-y border-[#E1E8EF] bg-white py-20 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-[720px] text-center">
            <div className="section-eyebrow">Simple monthly pricing</div>
            <h2 className="mt-5 text-3xl font-bold tracking-[-.055em] sm:text-[46px]">The right tools for your books.<br/><span className="text-[#0FA6A3]">A clear price from day one.</span></h2>
            <p className="mx-auto mt-5 max-w-[600px] text-[14px] leading-7 text-[#6e838a]">Choose software access for one business. Every plan starts with an introductory price for the first three months, followed by the regular monthly price.</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-[960px] gap-5 md:grid-cols-2">
            <article className="flex flex-col rounded-[22px] border border-[#DCE7EE] bg-[#FBFDFE] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#087C83]"><BookOpen size={15}/> Essential bookkeeping</div>
              <h3 className="mt-4 text-[24px] font-bold tracking-[-.04em]">Ledger Only</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#6e838a]">Core records for keeping your business finances organized.</p>
              <div className="mt-6 flex items-end gap-2"><span className="text-[42px] font-bold leading-none tracking-[-.06em] text-[#12345B]">$10</span><span className="pb-1 text-[12px] text-[#6e838a]">CAD / month<br/>for first 3 months</span></div>
              <div className="mt-3 text-[13px] text-[#6e838a]">Then <strong className="text-[#12345B]">$15 CAD/month</strong></div>
              <div className="my-6 h-px bg-[#E1E8EF]"/>
              <ul className="space-y-3 text-[13px] leading-5 text-[#526875]">
                {["Chart of accounts","Income and expense entries","Journal entries and transaction ledger","Receipt attachments","CSV import and export"].map(item=><li key={item} className="flex gap-2.5"><Check size={16} className="mt-0.5 shrink-0 text-[#0FA6A3]"/>{item}</li>)}
              </ul>
              <a href="https://portal.bookitpro.ca/" className="btn btn-light mt-8 w-full py-4">Continue to portal <ArrowRight size={15}/></a>
            </article>
            <article className="relative flex flex-col rounded-[22px] border-2 border-[#0FA6A3] bg-white p-6 shadow-[0_18px_55px_rgba(15,166,163,.10)] sm:p-8">
              <div className="absolute right-5 top-5 rounded-full bg-[#E6F8F6] px-3 py-1.5 text-[10px] font-bold text-[#087C83]">Full workspace</div>
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#087C83]"><Layers3 size={15}/> Complete bookkeeping</div>
              <h3 className="mt-4 text-[24px] font-bold tracking-[-.04em]">Full Bookkeeping</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#6e838a]">The ledger essentials plus the tools to manage day-to-day bookkeeping and review financial performance.</p>
              <div className="mt-6 flex items-end gap-2"><span className="text-[42px] font-bold leading-none tracking-[-.06em] text-[#12345B]">$15</span><span className="pb-1 text-[12px] text-[#6e838a]">CAD / month<br/>for first 3 months</span></div>
              <div className="mt-3 text-[13px] text-[#6e838a]">Then <strong className="text-[#12345B]">$30 CAD/month</strong></div>
              <div className="my-6 h-px bg-[#E1E8EF]"/>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[.1em] text-[#087C83]">Everything in Ledger Only, plus</p>
              <ul className="space-y-3 text-[13px] leading-5 text-[#526875]">
                {["Customer invoicing","Supplier bills","Bank reconciliation","Profit and loss, balance sheet and cash-flow reports","GST/HST report preparation","T4 generation tools and accountant access"].map(item=><li key={item} className="flex gap-2.5"><Check size={16} className="mt-0.5 shrink-0 text-[#0FA6A3]"/>{item}</li>)}
              </ul>
              <a href="https://portal.bookitpro.ca/" className="btn btn-primary mt-8 w-full py-4">Continue to portal <ArrowRight size={15}/></a>
            </article>
          </div>
          <div className="mx-auto mt-7 max-w-[960px] rounded-2xl bg-[#F1F8F8] p-5 text-[11px] leading-5 text-[#637780]">
            <p><strong className="text-[#12345B]">Pricing details:</strong> Prices are per business, in Canadian dollars, plus applicable taxes. Monthly subscriptions renew automatically; customers can cancel renewal at any time. The introductory offer applies once per business. At checkout, you’ll see the introductory price, its three-month duration and the regular monthly price before you confirm.</p>
            <p className="mt-2">These plans include software access only. Human bookkeeping, accountant services and tax filing services are priced separately. Bank-feed connections and automated receipt scanning/OCR may carry additional charges and are not included unless expressly shown at checkout.</p>
            <p className="mt-2">GST/HST reporting is for preparation and export, not filing submission; the regular method is the initial scope and the Quick Method is not currently available. Payroll calculations, salary payments and remittances are separate from T4 generation tools.</p>
            <p className="mt-2"><strong className="text-[#12345B]">Referral credit:</strong> Refer a new business and receive a CAD $10 subscription credit after that business pays two monthly invoices. One reward per new business; self-referrals and refunded payments are excluded. Referral credits are subject to verification in the portal.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#F1F8F8] py-20 sm:py-24"><div className="container grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]"><div><div className="section-eyebrow">A more natural workflow</div><h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-[-.055em] sm:text-[44px]">From daily details<br/>to a clearer view.</h2><p className="mt-5 max-w-[450px] text-[14px] leading-7 text-[#6e838a]">Accounting doesn&apos;t need to be a pile of open tabs and last-minute scrambles. Start with the work in front of you, then follow the picture as it comes together.</p><div className="mt-8 space-y-6">{[{n:"01",title:"Bring your activity together",text:"Record invoices, expenses, bills and transactions in one organized workspace."},{n:"02",title:"Keep your records structured",text:"Connect daily activity to clients, accounts, ledger entries and tax work."},{n:"03",title:"Make the next decision",text:"Use reports and summaries to understand what needs attention."}].map(s=><div key={s.n} className="flex gap-4"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b9d6c2] text-[11px] font-bold text-[#0FA6A3]">{s.n}</div><div><h3 className="text-[14px] font-bold">{s.title}</h3><p className="mt-1.5 text-[12px] leading-5 text-[#79867d]">{s.text}</p></div></div>)}</div></div>
      <div className="relative rounded-[24px] border border-[#DCE7EE] bg-white p-5 shadow-[0_24px_70px_rgba(30,58,40,.07)] sm:p-7"><div className="flex items-center justify-between border-b border-[#E5EBF0] pb-4"><div><div className="text-[11px] text-[#929d95]">Financial overview</div><div className="mt-1 text-[18px] font-bold tracking-[-.04em]">October summary</div></div><div className="rounded-full bg-[#E6F8F6] px-3 py-1.5 text-[10px] font-bold text-[#087C83]">Sample report</div></div><div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-xl bg-[#F5F8FB] p-4"><div className="text-[11px] text-[#849087]">Income</div><div className="mt-2 text-[24px] font-bold tracking-[-.05em]">$18,420</div><div className="mt-2 flex items-center gap-1 text-[10px] text-[#087C83]"><ArrowUpRight size={12}/> 8.4% <span className="text-[#99a49b]">this period</span></div></div><div className="rounded-xl bg-[#F5F8FB] p-4"><div className="text-[11px] text-[#849087]">Expenses</div><div className="mt-2 text-[24px] font-bold tracking-[-.05em]">$7,260</div><div className="mt-2 flex items-center gap-1 text-[10px] text-[#849087]"><ArrowDownRight size={12}/> Organized <span className="text-[#99a49b]">by category</span></div></div></div><div className="mt-6"><div className="mb-4 flex items-center justify-between"><div className="text-[12px] font-bold">Monthly movement</div><div className="text-[10px] text-[#87999f]">Illustrative data</div></div><div className="flex h-[148px] items-end gap-3 border-b border-[#E1E8EF] px-2">{[45,58,52,69,62,78,72,88,68,94,82,100].map((h,i)=><div key={i} className="relative flex-1 rounded-t-[5px] bg-[#E0F6F4]" style={{height:`${h}%`}}><div className="absolute inset-x-0 bottom-0 rounded-t-[5px] bg-[#0FA6A3]" style={{height:`${Math.max(22,h-28)}%`}}/></div>)}</div><div className="mt-3 flex justify-between text-[9px] text-[#87999f]"><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span></div></div><div className="mt-5 flex items-center gap-3 rounded-xl border border-[#E6F8F6] p-3.5"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F8F6] text-[#0FA6A3]"><ClipboardCheck size={17}/></div><div className="flex-1"><div className="text-[11px] font-bold">Tax items stay on your radar</div><div className="mt-1 text-[10px] text-[#8a968d]">Bring records and reporting closer together.</div></div><ArrowRight size={15} className="text-[#8a968d]"/></div></div></div></section>

      <section id="platform" className="border-y border-[#E1E8EF] bg-white py-20 sm:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <div className="section-eyebrow">One connected platform</div>
              <h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-[-.055em] sm:text-[44px]">More than the books.<br/><span className="text-[#0FA6A3]">The work around them, too.</span></h2>
            </div>
            <p className="max-w-[590px] text-[14px] leading-7 text-[#6e838a]">BookitPro brings everyday bookkeeping together with client records, transaction review, payroll information, time tracking and Canadian tax workflows. Move from one task to the next without losing sight of the bigger picture.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="feature-card"><div className="icon-tile"><Receipt size={21}/></div><h3 className="mt-5 text-[17px] font-bold">Sales, invoices & estimates</h3><p className="mt-3 text-[13px] leading-6 text-[#748078]">Prepare customer invoices and estimates, follow payment status, and keep revenue activity organized with customer records and transaction history.</p><div className="mt-5 flex flex-wrap gap-2"><span className="pill-tag">Invoices</span><span className="pill-tag">Estimates</span><span className="pill-tag">Payments</span></div></article>
            <article className="feature-card"><div className="icon-tile"><ArrowLeftRight size={21}/></div><h3 className="mt-5 text-[17px] font-bold">Transactions & document import</h3><p className="mt-3 text-[13px] leading-6 text-[#748078]">Bring financial files into a review workflow, inspect extracted details, map transaction lines to accounts, and review entries before importing them.</p><div className="mt-5 flex flex-wrap gap-2"><span className="pill-tag">CSV imports</span><span className="pill-tag">Statement review</span><span className="pill-tag">Categorization</span></div></article>
            <article className="feature-card"><div className="icon-tile"><Landmark size={21}/></div><h3 className="mt-5 text-[17px] font-bold">Ledger, accounts & reconciliation</h3><p className="mt-3 text-[13px] leading-6 text-[#748078]">Work with a chart of accounts, journal entries, general ledger activity and bank-account records to keep bookkeeping structured and easier to review.</p><div className="mt-5 flex flex-wrap gap-2"><span className="pill-tag">Chart of accounts</span><span className="pill-tag">Journal entries</span><span className="pill-tag">Bank accounts</span></div></article>
            <article className="feature-card"><div className="icon-tile"><Truck size={21}/></div><h3 className="mt-5 text-[17px] font-bold">Suppliers, bills & expenses</h3><p className="mt-3 text-[13px] leading-6 text-[#748078]">Track supplier details, bills and balances alongside business expenses so upcoming obligations are easier to identify and manage.</p><div className="mt-5 flex flex-wrap gap-2"><span className="pill-tag">Bills payable</span><span className="pill-tag">Supplier records</span><span className="pill-tag">Expenses</span></div></article>
            <article className="feature-card"><div className="icon-tile"><Users size={21}/></div><h3 className="mt-5 text-[17px] font-bold">Client, team & time management</h3><p className="mt-3 text-[13px] leading-6 text-[#748078]">Keep client work distinct, manage employee details and team assignments, and record billable time to support your service workflow.</p><div className="mt-5 flex flex-wrap gap-2"><span className="pill-tag">Client workspaces</span><span className="pill-tag">Team tasks</span><span className="pill-tag">Time tracking</span></div></article>
            <article className="feature-card"><div className="icon-tile"><BarChart3 size={21}/></div><h3 className="mt-5 text-[17px] font-bold">Reports that answer real questions</h3><p className="mt-3 text-[13px] leading-6 text-[#748078]">Review profit and loss, balance-sheet information, trial balances, receivables and payables aging, and GST/HST summaries.</p><div className="mt-5 flex flex-wrap gap-2"><span className="pill-tag">Profit & loss</span><span className="pill-tag">Balance sheet</span><span className="pill-tag">Aging reports</span></div></article>
          </div>
        </div>
      </section>

      <section id="tax-workflows" className="py-20 sm:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="section-eyebrow">Canadian tax workflows</div>
            <h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-[-.055em] sm:text-[44px]">A dedicated place<br/>for tax-season work.</h2>
            <p className="mt-5 max-w-[500px] text-[14px] leading-7 text-[#6e838a]">Keep core tax calculations and return preparation closer to the books. The platform includes workflows for common Canadian return categories, along with sales-tax calculations and supporting financial records.</p>
            <a href="#contact" className="btn btn-primary mt-7 px-6 py-4">Explore tax workflows <ArrowRight size={16}/></a>
            <p className="mt-4 max-w-[500px] text-[11px] leading-5 text-[#8a968d]">Tax outcomes depend on the information entered and applicable rules. Review calculations and filing requirements with a qualified tax professional. Availability and filing submission options may vary.</p>
          </div>
          <div className="rounded-[24px] border border-[#DCE7EE] bg-[#F7FAFC] p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-[#E1E8EF] pb-4"><div><div className="text-[11px] text-[#929d95]">Tax workspace</div><div className="mt-1 text-[19px] font-bold tracking-[-.04em]">Canadian return types</div></div><div className="rounded-full bg-[#E6F8F6] px-3 py-1.5 text-[10px] font-bold text-[#087C83]">Illustrative overview</div></div>
            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-[#E1E8EF] bg-white p-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6F8F6] text-[#0FA6A3]"><Users size={18}/></div><div><h3 className="text-[13px] font-bold">T1 · Personal income tax</h3><p className="mt-1 text-[11px] leading-5 text-[#748078]">Personal tax calculations and return-preparation workflow.</p></div></div>
              <div className="flex items-start gap-3 rounded-xl border border-[#E1E8EF] bg-white p-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF1FF] text-[#5A69B5]"><Building2 size={18}/></div><div><h3 className="text-[13px] font-bold">T2 · Corporate income tax</h3><p className="mt-1 text-[11px] leading-5 text-[#748078]">Corporate return workflows and calculations.</p></div></div>
              <div className="flex items-start gap-3 rounded-xl border border-[#E1E8EF] bg-white p-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF5E5] text-[#B47B24]"><FileText size={18}/></div><div><h3 className="text-[13px] font-bold">T3 & T4 · Trust and payroll information</h3><p className="mt-1 text-[11px] leading-5 text-[#748078]">Organize trust-return and employment reporting details.</p></div></div>
              <div className="flex items-start gap-3 rounded-xl border border-[#E1E8EF] bg-white p-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6F8F6] text-[#0FA6A3]"><Calculator size={18}/></div><div><h3 className="text-[13px] font-bold">GST/HST and sales tax</h3><p className="mt-1 text-[11px] leading-5 text-[#748078]">Review collected tax, input tax credits, adjustments and net tax calculations.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="for-business" className="py-20 sm:py-24"><div className="container"><div className="mx-auto max-w-[640px] text-center"><div className="section-eyebrow">Built around real work</div><h2 className="mt-5 text-3xl font-bold tracking-[-.055em] sm:text-[44px]">Made for the people<br/>behind the numbers.</h2><p className="mt-4 text-[14px] leading-7 text-[#6e838a]">Whether you&apos;re running a business or organizing work for clients, clarity creates room to focus.</p></div><div className="mt-11 grid gap-4 md:grid-cols-3"><article className="rounded-[18px] border border-[#E1E8EF] bg-white p-6"><div className="icon-tile"><Zap size={20}/></div><h3 className="mt-5 text-[17px] font-bold">Small & growing businesses</h3><p className="mt-3 text-[13px] leading-6 text-[#6e838a]">Bring billing, spending, customer records and financial summaries into a simpler daily rhythm.</p><a href="#contact" className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-[#0FA6A3]">Find your flow <ArrowRight size={14}/></a></article><article className="rounded-[18px] border border-[#E1E8EF] bg-white p-6"><div className="icon-tile"><Users size={20}/></div><h3 className="mt-5 text-[17px] font-bold">Bookkeepers & accountants</h3><p className="mt-3 text-[13px] leading-6 text-[#6e838a]">Organize client work, bookkeeping details, tax returns and reports in one connected view.</p><a href="#contact" className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-[#0FA6A3]">See the workflow <ArrowRight size={14}/></a></article><article className="rounded-[18px] border border-[#E1E8EF] bg-white p-6"><div className="icon-tile"><Globe2 size={20}/></div><h3 className="mt-5 text-[17px] font-bold">Teams working online</h3><p className="mt-3 text-[13px] leading-6 text-[#6e838a]">Access your workspace through the web and keep your core financial work easier to find.</p><a href="#contact" className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-[#0FA6A3]">Explore BookitPro <ArrowRight size={14}/></a></article></div></div></section>

      <section className="pb-20 sm:pb-24"><div className="container overflow-hidden rounded-[26px] bg-[#12345B] px-7 py-10 text-white sm:px-12 sm:py-14 lg:px-16"><div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-[#A6E8E4]"><ShieldCheck size={13}/> Clearer books start here</div><h2 className="max-w-[690px] text-3xl font-bold leading-[1.08] tracking-[-.055em] sm:text-[43px]">Less time chasing the details.<br/><span className="text-[#8BE0DC]">More time building what&apos;s next.</span></h2><p className="mt-4 max-w-[550px] text-[13px] leading-6 text-white/65">See how your everyday accounting can feel with a workspace that keeps the important pieces connected.</p></div><a href="#contact" style={{ color: "#12345B", backgroundColor: "#FFFFFF" }} className="btn self-start bg-white px-6 py-4 text-[#12345B] hover:bg-[#E6F8F6]">Let&apos;s take a look <ArrowRight size={16} color="#12345B"/></a></div></div></section>

      <section id="faq" className="py-20 sm:py-24"><div className="container grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><div className="section-eyebrow">Good to know</div><h2 className="mt-5 text-3xl font-bold tracking-[-.055em] sm:text-[42px]">A few things<br/>you might be<br className="hidden lg:block"/> wondering.</h2><p className="mt-4 max-w-[330px] text-[13px] leading-6 text-[#6e838a]">Have another question? Get in touch and we&apos;ll help you find your way around.</p><a href="#contact" className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-[#0FA6A3]">Talk to the team <ArrowRight size={14}/></a></div><div>{faqs.map(f=><details key={f.q} className="faq-item"><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div></section>

      <section id="support" className="border-t border-[#E1E8EF] bg-white py-14"><div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><div className="section-eyebrow">Contact &amp; support</div><h2 className="mt-3 text-2xl font-bold tracking-[-.04em]">Need help choosing a plan?</h2><p className="mt-2 max-w-[620px] text-[13px] leading-6 text-[#6e838a]">For account access and product support, visit the BookitPro portal. You can also create an account below to get started.</p></div><a href="https://portal.bookitpro.ca/" className="btn btn-light shrink-0">Open support portal <ArrowUpRight size={15}/></a></div></section>

      <section id="contact" className="border-t border-[#E1E8EF] bg-[#F1F8F8] py-20 sm:py-24"><div className="container grid items-center gap-10 lg:grid-cols-[1fr_.85fr]"><div><div className="section-eyebrow">Sign up for BookitPro</div><h2 className="mt-5 max-w-[590px] text-3xl font-bold leading-[1.08] tracking-[-.055em] sm:text-[46px]">Create your account.<br/>Get your books in order.</h2><p className="mt-5 max-w-[510px] text-[14px] leading-7 text-[#6e838a]">Create your BookitPro account to get started with a connected workspace for bookkeeping, client management and Canadian tax workflows. Use the same account to sign in to the product portal.</p><div className="mt-6 flex flex-wrap gap-4 text-[11px] text-[#6e838a]"><span className="flex items-center gap-2"><ShieldCheck size={15} className="text-[#0FA6A3"/> Password-protected account</span><span className="flex items-center gap-2"><CircleHelp size={15} className="text-[#0FA6A3"/> Already registered? <a className="font-bold text-[#087C83] underline" href="https://portal.bookitpro.ca/">Sign in</a></span></div><p className="mt-5 max-w-[500px] text-[11px] leading-5 text-[#8a968d]">Your details are sent to the BookitPro registration service to create your account.</p></div>
      <div className="rounded-[20px] border border-[#DCE7EE] bg-white p-6 shadow-[0_16px_50px_rgba(30,58,40,.06)] sm:p-8"><div className="text-[11px] font-bold uppercase tracking-[.13em] text-[#0FA6A3]">Create your account</div><h3 className="mt-3 text-[24px] font-bold tracking-[-.045em]">Start with the essentials.</h3><p className="mt-2 text-[12px] leading-5 text-[#6e838a]">Enter your details below. Your account will be created through BookitPro’s registration backend.</p>
      {signupSuccess ? <div role="status" className="mt-6 rounded-xl border border-[#BFE9D6] bg-[#F0FBF5] p-4"><div className="flex items-start gap-3 text-[13px] font-semibold text-[#16754A]"><Check size={18} className="mt-0.5 shrink-0"/><span>{signupSuccess}</span></div><a href="https://portal.bookitpro.ca/" className="btn btn-primary mt-4 w-full py-4">Sign in to BookitPro <ArrowRight size={15}/></a></div> : <form onSubmit={submitSignup} className="mt-6 space-y-3.5">
      <div><label htmlFor="signup-name" className="mb-1.5 block text-[11px] font-bold text-[#425249]">Full name</label><input id="signup-name" autoComplete="name" required minLength={2} value={signupName} onChange={e=>setSignupName(e.target.value)} placeholder="Jane Smith" className="w-full rounded-xl border border-[#DCE7EE] bg-[#FBFDFE] px-4 py-3 text-[13px] outline-none transition focus:border-[#58C5C1] focus:ring-4 focus:ring-[#E6F8F6]"/></div>
      <div><label htmlFor="signup-firm" className="mb-1.5 block text-[11px] font-bold text-[#425249]">Accounting firm <span className="font-normal text-[#8a968d]">(optional)</span></label><input id="signup-firm" autoComplete="organization" value={signupFirm} onChange={e=>setSignupFirm(e.target.value)} placeholder="Smith & Associates" className="w-full rounded-xl border border-[#DCE7EE] bg-[#FBFDFE] px-4 py-3 text-[13px] outline-none transition focus:border-[#58C5C1] focus:ring-4 focus:ring-[#E6F8F6]"/></div>
      <div><label htmlFor="signup-email" className="mb-1.5 block text-[11px] font-bold text-[#425249]">Email</label><input id="signup-email" type="email" autoComplete="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@yourbusiness.ca" className="w-full rounded-xl border border-[#DCE7EE] bg-[#FBFDFE] px-4 py-3 text-[13px] outline-none transition focus:border-[#58C5C1] focus:ring-4 focus:ring-[#E6F8F6]"/></div>
      <div><label htmlFor="signup-password" className="mb-1.5 block text-[11px] font-bold text-[#425249]">Password</label><input id="signup-password" type="password" autoComplete="new-password" required minLength={8} value={password} onChange={e=>setPassword(e.target.value)} placeholder="At least 8 characters" className="w-full rounded-xl border border-[#DCE7EE] bg-[#FBFDFE] px-4 py-3 text-[13px] outline-none transition focus:border-[#58C5C1] focus:ring-4 focus:ring-[#E6F8F6]"/></div>
      <div><label htmlFor="signup-confirm-password" className="mb-1.5 block text-[11px] font-bold text-[#425249]">Confirm password</label><input id="signup-confirm-password" type="password" autoComplete="new-password" required minLength={8} value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} placeholder="Re-enter your password" className="w-full rounded-xl border border-[#DCE7EE] bg-[#FBFDFE] px-4 py-3 text-[13px] outline-none transition focus:border-[#58C5C1] focus:ring-4 focus:ring-[#E6F8F6]"/></div>
      {signupError && <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-[12px] leading-5 text-red-700">{signupError}</div>}
      <button type="submit" disabled={isSigningUp} className="btn btn-primary w-full py-4 disabled:cursor-not-allowed disabled:opacity-60">{isSigningUp ? "Creating your account..." : "Create account"} <ArrowRight size={15}/></button><p className="text-center text-[10px] leading-5 text-[#a0aaa3]">Password must be at least 8 characters. Already have an account? <a href="https://portal.bookitpro.ca/" className="font-bold text-[#087C83] underline">Sign in</a>.</p></form>}</div></div></section>

      <footer className="bg-[#0B2545] py-10 text-white"><div className="container"><div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 sm:flex-row sm:items-center"><div><Logo light/><p className="mt-3 max-w-[340px] text-[11px] leading-5 text-white/55">A clearer way to stay close to your books, your business and what comes next.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-white/65"><a className="hover:text-white" href="#features">Features</a><a className="hover:text-white" href="#how-it-works">How it works</a><a className="hover:text-white" href="#faq">FAQs</a><a className="hover:text-white" href="#contact">Contact</a></div></div><div className="flex flex-col gap-2 pt-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} BookitPro. All rights reserved.</span><span>Made for a clearer view of business.</span></div></div></footer>
    </main>
  );
}
