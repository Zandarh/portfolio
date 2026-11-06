import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import {
  ArrowUpRight,
  CardIcon,
  ChatIcon,
  CodeIcon,
  GlobeIcon,
  LayoutIcon,
  LockIcon,
  MailIcon,
  UsersIcon,
} from "@/components/icons";
import { projects, services, site, skills, steps } from "@/lib/site";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const serviceIcons = [GlobeIcon, UsersIcon, CardIcon, LayoutIcon];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-on-accent shadow-soft transition-colors hover:bg-accent-hover";
const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-[15px] font-semibold text-fg transition-colors hover:bg-surface-2";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-accent-soft px-3 py-1 text-[13px] font-medium text-accent-link">
      {children}
    </li>
  );
}

function SectionHeading({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold tracking-wide text-accent-link uppercase">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-muted text-pretty">{intro}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5 font-bold tracking-tight">
            <span aria-hidden="true" className="grid size-9 place-items-center rounded-xl bg-accent text-sm text-on-accent">
              AU
            </span>
            <span>{site.name}</span>
          </a>
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1 text-[15px] font-medium text-muted">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="rounded-full px-3 py-2 transition-colors hover:text-fg">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 md:pt-20 md:pb-24">
          <div className="grid items-center gap-10 md:grid-cols-[1.25fr_1fr] md:gap-14">
            <div className="order-2 md:order-1">
              <p className="text-[15px] font-semibold text-accent-link">
                {site.name} · {site.role}
              </p>
              <h1 id="hero-title" className="mt-4 text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]">
                {site.headline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">{site.subheadline}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  <ChatIcon />
                  Chat on WhatsApp
                </a>
                <a href={`mailto:${site.email}`} className={btnSecondary}>
                  <MailIcon />
                  Email me
                </a>
              </div>
              <p className="mt-6 text-[15px] text-muted">{site.location}</p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative mx-auto w-44 sm:w-56 md:w-full md:max-w-sm">
                <div aria-hidden="true" className="absolute -inset-3 -z-10 rotate-3 rounded-[2rem] bg-accent-soft" />
                <Image
                  src="/alexander-ubaka.webp"
                  alt="Portrait of Alexander Ubaka, smiling, wearing a plum long-sleeve top"
                  width={840}
                  height={1050}
                  preload
                  sizes="(min-width: 768px) 384px, (min-width: 640px) 224px, 176px"
                  className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section aria-labelledby="services-title" id="services" className="border-y border-line bg-surface-2/50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <SectionHeading id="services-title" eyebrow="Services" title="What I can build for you" />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => {
                const Icon = serviceIcons[i];
                return (
                  <li key={s.title} className="rounded-2xl border border-line bg-surface p-6 shadow-soft">
                    <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent-link">
                      <Icon />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Work */}
        <section aria-labelledby="work-title" id="work" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <SectionHeading
            id="work-title"
            eyebrow="Selected work"
            title="Recent projects"
            intro="Live sites and platforms I've designed and built for clients."
          />
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {projects.map((p) => (
              <li key={p.title}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-2">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(min-width: 1152px) 540px, (min-width: 768px) 46vw, calc(100vw - 32px)"
                      className="object-cover object-left-top transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 flex-1 leading-relaxed text-muted">{p.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${p.title} technologies and features`}>
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </ul>
                    <div className="mt-6">
                      {p.private ? (
                        <p className="inline-flex items-center gap-2 text-[15px] font-medium text-muted">
                          <LockIcon className="size-4" />
                          Private dashboard. More screenshots available on request.
                        </p>
                      ) : (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-accent-link underline-offset-4 hover:underline"
                        >
                          Visit site
                          <span className="sr-only">: {p.title} (opens in a new tab)</span>
                          <ArrowUpRight />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* Process */}
        <section aria-labelledby="process-title" id="process" className="border-y border-line bg-surface-2/50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <SectionHeading
              id="process-title"
              eyebrow="How I work"
              title="You review and approve every stage"
              intro="Nothing moves forward without your sign-off, so there are no surprises at launch."
            />
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="relative rounded-2xl border border-line bg-surface p-6 shadow-soft">
                  <span className="grid size-10 place-items-center rounded-full bg-accent text-sm font-bold text-on-accent">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About */}
        <section aria-labelledby="about-title" id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
            <SectionHeading id="about-title" eyebrow="About" title="Hi, I'm Alexander" />
            <div>
              <div className="space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  I&apos;m a full-stack web developer who builds websites and web platforms for businesses and
                  organisations. I trained through the ALX Software Engineering programme and the HNG Internship,
                  and I work across the whole stack, from databases and payments to the pages your customers use.
                </p>
                <p>
                  I care about building things that are secure, fast and simple for your team to run day to day.
                  {" "}{site.location}
                </p>
              </div>
              <h3 className="mt-8 text-sm font-semibold tracking-wide text-fg uppercase">Skills & tools</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section aria-labelledby="contact-title" id="contact" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:pb-28">
          <div className="rounded-3xl bg-accent px-6 py-12 text-center text-on-accent shadow-lift sm:px-12 md:py-16">
            <h2 id="contact-title" className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90 text-pretty">
              Tell me what you need and I&apos;ll reply with next steps. WhatsApp is the quickest way to reach me.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#0b4f49] transition-colors hover:bg-white/90 focus-visible:outline-white sm:w-auto"
              >
                <ChatIcon />
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-white sm:w-auto"
              >
                <MailIcon />
                {site.email}
              </a>
            </div>
            <p className="mt-6 text-[15px] text-white/90">
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold underline underline-offset-4 focus-visible:outline-white">
                <CodeIcon className="size-4" />
                github.com/Zandarh
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 pb-24 text-sm text-muted sm:flex-row sm:px-6 md:pb-8">
          <p>© 2026 {site.name}</p>
          <p>{site.role}</p>
        </div>
      </footer>

      <FloatingWhatsApp href={site.whatsapp} heroId="top" />
    </>
  );
}
