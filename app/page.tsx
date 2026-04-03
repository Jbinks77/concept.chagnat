import Link from 'next/link';

const process = [
  { title: 'Audit', detail: 'We find the leaks in UX, structure and trust.' },
  { title: 'Redesign', detail: 'A premium interface engineered for conversion.' },
  { title: 'Build', detail: 'Fast, responsive, SEO-ready implementation.' },
  { title: 'Optimize', detail: 'Data-backed refinements after launch.' }
];

const cases = [
  { name: 'Law Firm', before: '12% bounce drop', after: '+68% leads' },
  { name: 'SaaS Landing', before: 'flat engagement', after: '+2.1x demo requests' },
  { name: 'Medical Clinic', before: 'dated experience', after: '+43% booking rate' }
];

const portfolio = ['Consulting', 'Ecommerce', 'B2B Service', 'SaaS', 'Healthcare', 'Local Business'];

export default function Home() {
  return (
    <main className="bg-spotlight bg-vignette">
      <div className="pointer-events-none absolute inset-0 grid-line opacity-20" />

      <section className="section pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="mb-10 flex items-center justify-between">
          <p className="text-sm tracking-[0.24em] text-white/60">REDESIGN STUDIO</p>
          <Link
            href="#cta"
            className="rounded-full border border-white/25 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:border-accent hover:text-accent"
          >
            Book call
          </Link>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.25fr]">
          <div className="space-y-6">
            <p className="kicker">Website redesign specialist</p>
            <h1 className="text-balance text-5xl font-semibold leading-[.95] md:text-7xl">
              Transform your website into a client machine.
            </h1>
            <p className="max-w-lg text-base text-white/70 md:text-lg">
              We rebuild outdated websites into conversion-focused digital experiences that look premium and perform.
            </p>
            <Link
              href="#cta"
              className="inline-flex items-center rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:shadow-glow"
            >
              Get a free audit
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-3xl animate-fade-up rounded-[2.25rem] border border-white/15 bg-surface p-4 shadow-panel md:p-6">
            <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-white/15 bg-black/70 px-4 py-3 text-xs text-white/70 shadow-glow md:block">
              +97% qualified inquiries
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
              <div className="grid min-h-[420px] md:min-h-[500px]">
                <div className="absolute inset-0 bg-[#1c1c1c] p-5 md:p-7">
                  <p className="mb-6 text-xs uppercase tracking-[0.2em] text-red-300/70">Before</p>
                  <div className="space-y-4 opacity-70">
                    <div className="h-12 rounded-lg bg-white/10" />
                    <div className="h-36 rounded-lg bg-white/5" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-24 rounded-lg bg-white/10" />
                      <div className="h-24 rounded-lg bg-white/5" />
                      <div className="h-24 rounded-lg bg-white/10" />
                    </div>
                    <div className="h-10 rounded-lg bg-white/10" />
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 w-[14%] animate-reveal-sweep overflow-hidden border-l border-accent/40 shadow-[-20px_0_40px_rgba(76,201,255,.22)]">
                  <div className="h-full min-w-[680px] bg-[#0f1820] p-5 md:p-7">
                    <p className="mb-6 text-xs uppercase tracking-[0.2em] text-accent">After</p>
                    <div className="space-y-4">
                      <div className="flex h-12 items-center justify-between rounded-lg bg-white/[0.06] px-4">
                        <div className="h-2 w-24 rounded bg-accent/80" />
                        <div className="h-2 w-12 rounded bg-white/40" />
                      </div>
                      <div className="grid h-36 grid-cols-[1.2fr_.8fr] gap-3">
                        <div className="rounded-lg bg-white/[0.05]" />
                        <div className="rounded-lg bg-accent/20" />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-24 rounded-lg bg-white/[0.05]" />
                        <div className="h-24 rounded-lg bg-accent/25" />
                        <div className="h-24 rounded-lg bg-white/[0.05]" />
                      </div>
                      <div className="h-10 rounded-lg bg-accent/35" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 left-[14%] w-0.5 animate-reveal-sweep bg-accent/75" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-8">
        <p className="kicker">The problem</p>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article key={item} className="panel group transition hover:-translate-y-1 hover:border-white/20">
              <div className="mb-5 h-44 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 p-4">
                <div className="h-full rounded-lg border border-dashed border-white/15 p-3">
                  <div className="h-4 w-3/5 rounded bg-white/15" />
                  <div className="mt-3 h-20 rounded bg-white/10" />
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="h-10 rounded bg-white/10" />
                    <div className="h-10 rounded bg-white/5" />
                  </div>
                </div>
              </div>
              <p className="text-sm uppercase tracking-[0.14em] text-white/50">Issue 0{item}</p>
              <p className="mt-2 text-lg text-white/90">Outdated visuals destroy trust in seconds.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="kicker">The transformation</p>
        <div className="grid gap-6 lg:grid-cols-3">
          {cases.map((item) => (
            <article key={item.name} className="panel relative overflow-hidden">
              <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
              <p className="text-xl font-medium text-white">{item.name}</p>
              <div className="mt-7 space-y-3 text-sm">
                <p className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white/65">Before: {item.before}</p>
                <p className="rounded-xl border border-accent/40 bg-accent/15 px-4 py-3 text-accent">After: {item.after}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="kicker">Process</p>
        <div className="grid gap-4 md:grid-cols-4">
          {process.map((item, i) => (
            <article key={item.title} className="panel relative min-h-40 animate-float" style={{ animationDelay: `${i * 0.6}s` }}>
              <p className="text-4xl font-semibold text-accent/60">0{i + 1}</p>
              <h3 className="mt-4 text-xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="kicker">Portfolio</p>
        <h2 className="h2 max-w-3xl">Redesign work engineered for authority, trust, and conversion.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-accent/70">
              <div className="mb-4 h-48 rounded-xl bg-gradient-to-br from-white/10 to-transparent p-4">
                <div className="h-full rounded-lg border border-white/10 bg-black/35 p-3">
                  <div className="h-3 w-24 rounded bg-white/30" />
                  <div className="mt-3 h-24 rounded bg-white/10" />
                  <div className="mt-3 h-8 rounded bg-accent/25 transition group-hover:bg-accent/40" />
                </div>
              </div>
              <p className="text-lg font-medium">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="cta" className="section pt-10">
        <div className="panel border-accent/30 bg-gradient-to-r from-accent/10 via-white/[0.03] to-transparent text-center">
          <p className="kicker">Final CTA</p>
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
            Your current website is costing you clients.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">Let&apos;s redesign it into your strongest sales asset.</p>
          <Link
            href="mailto:hello@redesignstudio.com"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:shadow-glow"
          >
            Get a free audit
          </Link>
        </div>
      </section>
    </main>
  );
}
