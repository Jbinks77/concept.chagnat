import Image from 'next/image';
import Link from 'next/link';

type CaseItem = {
  sector: string;
  result: string;
  shift: string;
};

const cases: CaseItem[] = [
  { sector: 'Boutique Law', result: '+71% consultation requests', shift: 'Dense and dated → calm and credible' },
  { sector: 'Aesthetic Clinic', result: '+54% booking starts', shift: 'Confusing service pages → clear conversion flow' },
  { sector: 'Renovation Studio', result: '+2.4x qualified leads', shift: 'Template look → premium brand authority' }
];

const process = ['Deep teardown', 'Visual repositioning', 'Conversion rebuild', 'Polish + launch'];
const portfolio = ['Attorney landing', 'Dental clinic', 'Real estate', 'Luxury interiors', 'SaaS homepage', 'Private medical'];

function ComparisonCard({ label, src }: { label: 'Before' | 'After'; src: string }) {
  return (
    <article className="relative h-[280px] overflow-hidden rounded-2xl border border-white/10 sm:h-[360px] md:h-full">
      <Image src={src} alt={`${label} electrician website redesign`} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white">
        {label}
      </span>
    </article>
  );
}

function HeroComparison() {
  return (
    <div className="hero-compare-card panel mx-auto w-full max-w-[1240px] p-3 md:p-4">
      <div className="grid gap-3 md:h-[700px] md:grid-cols-2">
        <ComparisonCard label="Before" src="/portfolio/old_electric.png" />
        <ComparisonCard label="After" src="/portfolio/new_electric.png" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="section pb-12">
        <div className="mb-10 flex items-center justify-between">
          <p className="caption">Redesign specialist</p>
          <Link href="#cta" className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-accent">
            Start project
          </Link>
        </div>

        <div className="mb-10 grid items-end gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div className="space-y-5">
            <p className="caption">Websites reimagined</p>
            <h1 className="text-5xl font-semibold leading-[1.03] text-text md:text-7xl">From forgettable to premium.</h1>
            <p className="max-w-md text-sm text-muted md:text-base">I redesign outdated websites into high-trust, conversion-ready digital experiences.</p>
            <Link href="#cta" className="inline-flex rounded-full bg-[#f1ede5] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#161311] transition hover:-translate-y-0.5">
              Get a free audit
            </Link>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/65 lg:ml-auto">A real transformation preview: an outdated electrician site rebuilt into a premium, conversion-focused experience.</p>
        </div>

        <HeroComparison />
      </section>

      <section className="section pt-8">
        <p className="caption">Selected transformations</p>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <article key={item.sector} className="panel">
              <p className="text-lg font-medium">{item.sector}</p>
              <p className="mt-2 text-sm text-muted">{item.shift}</p>
              <p className="mt-6 text-sm uppercase tracking-[0.16em] text-accent">{item.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pt-10">
        <p className="caption">Approach</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <article key={item} className="panel min-h-36 animate-floaty" style={{ animationDelay: `${i * 0.5}s` }}>
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">0{i + 1}</p>
              <p className="mt-3 text-xl">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pt-10">
        <p className="caption">Portfolio</p>
        <h2 className="title mt-3 max-w-3xl">Redesign work crafted for credibility and action.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1a1817] p-4 transition hover:border-accent/70">
              <div className="mock-window p-2">
                <div className="rounded-lg border border-white/10 bg-[#1f1b2f] p-2">
                  <div className="h-2.5 w-16 rounded bg-white/50" />
                  <div className="mt-2 h-20 rounded bg-gradient-to-br from-accent/40 to-white/5" />
                  <div className="mt-2 grid grid-cols-3 gap-1.5">
                    <div className="h-7 rounded bg-white/10" />
                    <div className="h-7 rounded bg-white/10" />
                    <div className="h-7 rounded bg-accent/30 transition group-hover:bg-accent/55" />
                  </div>
                </div>
              </div>
              <p className="mt-3 text-base">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="cta" className="section pt-10">
        <div className="panel border-accent/40 text-center">
          <p className="caption">Final CTA</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Your website should look as valuable as your service.</h2>
          <Link href="mailto:hello@redesignstudio.com" className="mt-8 inline-flex rounded-full bg-[#f1ede5] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#171411]">
            Get a free audit
          </Link>
        </div>
      </section>
    </main>
  );
}
