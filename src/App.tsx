import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaArrowRight } from "react-icons/fa";

import { config } from "./constants/config";
import { navLinks, services, technologies, experiences, projects } from "./constants";

const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=1NZbUHoqsktOL6lz2Gs36eTDh2xjMYbAW";

const socials = [
  { href: "https://github.com/RismanRJ", label: "GitHub", Icon: FaGithub },
  { href: "https://www.linkedin.com/in/risman21/", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://leetcode.com/u/rismanshanker21/", label: "LeetCode", Icon: FaCode },
  { href: `mailto:${config.html.email}`, label: "Email", Icon: FaEnvelope },
];

const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

const Section = ({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) => (
  <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
    <Reveal>
      <p className="font-mono text-sm text-emerald-400">{label}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    </Reveal>
    <div className="mt-12">{children}</div>
  </section>
);

const Navbar = () => (
  <header className="fixed inset-x-0 top-0 z-20 border-b border-white/5 bg-zinc-950/70 backdrop-blur">
    <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <a href="#top" className="font-mono text-sm font-medium text-white">
        {config.html.fullName}<span className="text-emerald-400">.</span>
      </a>
      <ul className="flex items-center gap-6 text-sm">
        {navLinks.map((n) => (
          <li key={n.id}>
            <a href={`#${n.id}`} className="transition-colors hover:text-white">{n.title}</a>
          </li>
        ))}
        <li>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="rounded-md border border-emerald-400/40 px-3 py-1.5 text-emerald-400 transition-colors hover:bg-emerald-400/10">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section id="top" className="relative overflow-hidden">
    <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
    <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pt-20">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-sm text-emerald-400">
        Hi, my name is
      </motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
        {config.hero.name}.
      </motion.h1>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-3 max-w-3xl text-2xl font-semibold leading-snug text-zinc-400 sm:text-4xl">
        {config.hero.p.join(" ")}
      </motion.h2>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10 flex flex-wrap items-center gap-4">
        <a href="#work" className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300">
          View my work <FaArrowRight className="text-xs" />
        </a>
        <a href="#contact" className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5">
          Get in touch
        </a>
        <div className="ml-2 flex items-center gap-4 text-xl">
          {socials.map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} className="transition-colors hover:text-white">
              <Icon />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <Section id="about" label={config.sections.about.p} title={config.sections.about.h2}>
    <div className="grid gap-10 md:grid-cols-5">
      <Reveal>
        <p className="whitespace-pre-line leading-8 md:col-span-3">{config.sections.about.content}</p>
      </Reveal>
      <div className="grid gap-4 md:col-span-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <img src={s.icon} alt="" className="h-10 w-10 object-contain" />
              <span className="font-medium text-white">{s.title}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience" label={config.sections.experience.p} title={config.sections.experience.h2}>
    <ol className="relative space-y-12 border-l border-white/10 pl-8">
      {experiences.map((e) => (
        <Reveal key={e.companyName}>
          <li className="relative">
            <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-emerald-400 bg-zinc-950" />
            <div className="flex items-center gap-3">
              <img src={e.icon} alt={e.companyName} className="h-9 w-9 rounded-md object-contain" style={{ background: e.iconBg }} />
              <div>
                <h3 className="font-semibold text-white">{e.title} · <span className="text-emerald-400">{e.companyName}</span></h3>
                <p className="font-mono text-xs">{e.date}</p>
              </div>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        </Reveal>
      ))}
    </ol>
  </Section>
);

const Skills = () => (
  <Section id="skills" label="What I use" title="Tech Stack.">
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
      {technologies.map((t, i) => (
        <Reveal key={t.name} delay={(i % 6) * 0.05}>
          <div className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-emerald-400/40">
            <img src={t.icon} alt={t.name} className="h-10 w-10 object-contain" />
            <span className="text-center text-xs">{t.name}</span>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const Works = () => (
  <Section id="work" label={config.sections.works.p} title={config.sections.works.h2}>
    <Reveal>
      <p className="mb-10 max-w-3xl leading-8">{config.sections.works.content}</p>
    </Reveal>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p, i) => (
        <Reveal key={p.name} delay={(i % 2) * 0.1}>
          <a href={p.sourceCodeLink} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-emerald-400/40">
            <img src={p.image} alt={p.name} className="h-48 w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="flex items-center justify-between text-lg font-semibold text-white">
                {p.name}
                <FaGithub className="text-zinc-500 transition-colors group-hover:text-emerald-400" />
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t.name} className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs">
                    <span className={t.color}>#{t.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </Section>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${config.html.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `Portfolio message from ${form.name}`, _replyto: form.email }),
      });
      if (!res.ok) throw new Error(String(res.status));
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      alert("Something went wrong.");
    }
    setLoading(false);
  };

  const field = "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-emerald-400/60";

  return (
    <Section id="contact" label={config.contact.p} title={config.contact.h2}>
      <Reveal>
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl flex-col gap-5">
          {(Object.keys(config.contact.form) as (keyof typeof config.contact.form)[]).map((key) => {
            const { span, placeholder } = config.contact.form[key];
            return (
              <label key={key} className="flex flex-col gap-2 text-sm font-medium text-white">
                {span}
                {key === "message" ? (
                  <textarea required rows={6} name={key} value={form[key]} placeholder={placeholder} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className={field} />
                ) : (
                  <input required type={key === "email" ? "email" : "text"} name={key} value={form[key]} placeholder={placeholder} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className={field} />
                )}
              </label>
            );
          })}
          <button type="submit" className="w-fit rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300">
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </Reveal>
    </Section>
  );
};

const Footer = () => (
  <footer className="border-t border-white/5 py-8">
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm sm:flex-row">
      <p>© {new Date().getFullYear()} {config.html.fullName}. All rights reserved.</p>
      <div className="flex items-center gap-4 text-xl">
        {socials.map(({ href, label, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} className="transition-colors hover:text-white">
            <Icon />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

const App = () => {
  useEffect(() => {
    document.title = config.html.title;
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
