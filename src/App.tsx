import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaArrowUpRightFromSquare } from "react-icons/fa6";

import { config } from "./constants/config";
import { navLinks, services, technologies, experiences, projects } from "./constants";

const RESUME_ID = "1_oLgz75VF9c5TRKJfqXrWo0OnCS-860S";
const RESUME_PREVIEW = `https://drive.google.com/file/d/${RESUME_ID}/preview`;
const RESUME_DOWNLOAD = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`;

const socials = [
  { href: "https://github.com/RismanRJ", label: "GitHub", Icon: FaGithub },
  { href: "https://www.linkedin.com/in/risman21/", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://leetcode.com/u/rismanshanker21/", label: "LeetCode", Icon: FaCode },
  { href: `mailto:${config.html.email}`, label: "Email", Icon: FaEnvelope },
];

const stats = [
  { value: "20M+", label: "routing combinations evaluated" },
  { value: "218ms", label: "p95 allocation latency" },
  { value: "94%", label: "fewer Google Maps calls" },
  { value: "81%", label: "lower serviceability p95" },
];

const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.45, delay }}
  >
    {children}
  </motion.div>
);

const Window = ({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) => (
  <div className={`overflow-hidden rounded-lg border border-[rgb(var(--fg-rgb)/0.15)] bg-[var(--surface)] ${className}`}>
    <div className="flex items-center gap-2 border-b border-[rgb(var(--fg-rgb)/0.1)] bg-[rgb(var(--fg-rgb)/0.03)] px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-3 truncate text-xs text-[rgb(var(--fg-rgb)/0.5)]">{title}</span>
    </div>
    {children}
  </div>
);

const Section = ({ id, file, title, children }: { id: string; file: string; title: string; children: ReactNode }) => (
  <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
    <Reveal>
      <p className="text-xs text-[rgb(var(--fg-rgb)/0.5)]">// {file}</p>
      <h2 className="mt-2 font-['Space_Grotesk'] text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-6xl">
        {title}<span className="text-[var(--accent)]">_</span>
      </h2>
    </Reveal>
    <div className="mt-10">{children}</div>
  </section>
);

const useTyped = (lines: string[]) => {
  const [text, setText] = useState("");
  useEffect(() => {
    const full = lines.join("\n");
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setText(full.slice(0, i));
      if (i >= full.length) clearInterval(t);
    }, 28);
    return () => clearInterval(t);
  }, []);
  return text;
};

const themes = [
  { id: "ember", label: "Ember", swatch: "#ff6b3d" },
  { id: "ocean", label: "Ocean", swatch: "#5ea1ff" },
  { id: "forest", label: "Forest", swatch: "#d9a441" },
  { id: "paper", label: "Paper", swatch: "#d9480f" },
];

const readTheme = () => {
  try {
    return localStorage.getItem("theme") ?? "auto";
  } catch {
    return "auto";
  }
};

const useTheme = () => {
  const [theme, setTheme] = useState(readTheme);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const apply = () => {
      document.documentElement.dataset.theme = theme === "auto" ? (mq.matches ? "paper" : "ember") : theme;
    };
    apply();
    try {
      localStorage.setItem("theme", theme);
    } catch {}
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [theme]);
  return [theme, setTheme] as const;
};

const ThemePicker = ({ theme, setTheme }: { theme: string; setTheme: (t: string) => void }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const close = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(!open)} aria-label="Change color palette" className="flex items-center gap-2 rounded border border-[rgb(var(--fg-rgb)/0.2)] px-2 py-1.5 hover:bg-[rgb(var(--fg-rgb)/0.1)]">
        <span className="h-3 w-3 rounded-full bg-[var(--accent)]" />
        <span className="hidden sm:inline">theme</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg border border-[rgb(var(--fg-rgb)/0.2)] bg-[var(--surface)] p-2 shadow-xl">
          {[{ id: "auto", label: "Auto", swatch: "" }, ...themes].map((t) => (
            <button key={t.id} onClick={() => { setTheme(t.id); setOpen(false); }} className={`flex w-full items-center gap-3 rounded px-2 py-1.5 text-left hover:bg-[rgb(var(--fg-rgb)/0.1)] ${theme === t.id ? "text-[var(--accent)]" : ""}`}>
              <span className="h-3 w-3 rounded-full border border-[rgb(var(--fg-rgb)/0.3)]" style={{ background: t.swatch || "linear-gradient(90deg,var(--bg) 50%,var(--ink) 50%)" }} />
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = ({ onResume, theme, setTheme }: { onResume: () => void; theme: string; setTheme: (t: string) => void }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const tabs = [...navLinks.map((n) => ({ id: n.id, label: n.title.toLowerCase() })), { id: "skills", label: "stack" }];
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[rgb(var(--fg-rgb)/0.1)] bg-[var(--bg)]/85 backdrop-blur">
      <motion.div style={{ scaleX }} className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[var(--accent)]" />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 text-xs">
        <a href="#top" className="font-bold text-[var(--ink)]">
          <span className="text-[var(--accent)]">~/</span>{config.html.fullName.toLowerCase().replace(" ", "")}
        </a>
        <ul className="flex items-center gap-1 sm:gap-3">
          {tabs.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="rounded px-2 py-1 transition-colors hover:bg-[rgb(var(--fg-rgb)/0.1)] hover:text-[var(--ink)]">
                {t.label}
              </a>
            </li>
          ))}
          <li>
            <ThemePicker theme={theme} setTheme={setTheme} />
          </li>
          <li>
            <button onClick={onResume} className="rounded bg-[var(--accent)] px-3 py-1.5 font-bold text-[var(--on-accent)] transition-transform hover:-translate-y-0.5">
              resume
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Hero = ({ onResume }: { onResume: () => void }) => {
  const typed = useTyped([
    "$ whoami",
    config.hero.name,
    "$ cat role.txt",
    config.hero.p.join(" "),
  ]);
  const [l1, l2, l3, ...rest] = typed.split("\n");
  const l4 = rest.join("\n");
  return (
    <section id="top" className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pt-24 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--fg-rgb)/0.15)] px-3 py-1 text-xs">
          Bangalore, India · open to opportunities
        </motion.p>
        <h1 className="font-['Space_Grotesk'] text-6xl font-bold leading-[0.95] tracking-tighter text-[var(--ink)] sm:text-8xl">
          {config.hero.name.split(" ")[0]}
          <span className="text-[var(--accent)]"> {config.hero.name.split(" ")[1]}</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-[rgb(var(--fg-rgb)/0.6)]">{config.hero.p.join(" ")}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#work" className="hard rounded bg-[var(--accent)] px-5 py-3 text-sm font-bold text-[var(--on-accent)]" style={{ boxShadow: "5px 5px 0 0 var(--ink)" }}>
            ./view-work
          </a>
          <a href="#contact" className="rounded border border-[rgb(var(--fg-rgb)/0.2)] px-5 py-3 text-sm font-bold text-[var(--ink)] transition-colors hover:bg-[rgb(var(--fg-rgb)/0.1)]">
            ./contact
          </a>
          <button onClick={onResume} className="rounded border border-[rgb(var(--fg-rgb)/0.2)] px-5 py-3 text-sm font-bold text-[var(--ink)] transition-colors hover:bg-[rgb(var(--fg-rgb)/0.1)]">
            ./resume
          </button>
          <div className="flex items-center gap-4 text-lg">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} className="transition-colors hover:text-[var(--accent)]">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <Window title="zsh — risman@portfolio" className="lg:col-span-2">
        <pre className="min-h-[260px] whitespace-pre-wrap p-5 text-sm leading-7">
          <span className="text-[var(--accent)]">{l1}</span>
          {l2 !== undefined && <>{"\n"}<span className="text-[var(--ink)]">{l2}</span></>}
          {l3 !== undefined && <>{"\n"}<span className="text-[var(--accent)]">{l3}</span></>}
          {l4 && <>{"\n"}<span className="caret text-[rgb(var(--fg-rgb)/0.75)]">{l4}</span></>}
          {!l4 && <span className="caret" />}
        </pre>
      </Window>
    </section>
  );
};

const primary = services.find((s) => s.title === "Backend Developer") ?? services[0];
const others = services.filter((s) => s !== primary);

const About = () => (
  <Section id="about" file={`about.md — ${config.sections.about.p.toLowerCase()}`} title={config.sections.about.h2.replace(".", "")}>
    <div className="grid gap-4 md:grid-cols-4">
      <Reveal>
        <div className="h-full rounded-lg border border-[rgb(var(--fg-rgb)/0.15)] bg-[var(--surface)] p-6 md:col-span-2">
          <p className="relative text-sm leading-7">{config.sections.about.content}</p>
        </div>
      </Reveal>
      <div className="grid grid-cols-2 gap-4 md:col-span-2">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="hard h-full rounded-lg border border-[rgb(var(--fg-rgb)/0.15)] bg-[var(--surface)] p-5">
              <p className="font-['Space_Grotesk'] text-4xl font-bold text-[var(--accent)]">{s.value}</p>
              <p className="mt-2 text-xs text-[rgb(var(--fg-rgb)/0.5)]">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="hard h-full rounded-lg border border-[var(--accent)] bg-[var(--surface)] p-6 md:col-span-4">
          <p className="text-xs text-[rgb(var(--fg-rgb)/0.5)]">primary role</p>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <img src={primary.icon} alt="" className="h-12 w-12 object-contain" />
            <p className="font-['Space_Grotesk'] text-3xl font-bold text-[var(--ink)]">Backend Software Engineer</p>
          </div>
          <p className="mt-4 text-xs text-[rgb(var(--fg-rgb)/0.5)]">
            also: {others.map((o) => o.title).join(" · ")}
          </p>
        </div>
      </Reveal>
    </div>
  </Section>
);

const hash = (s: string) =>
  Array.from(s).reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7).toString(16).padStart(7, "0").slice(0, 7);

const Experience = () => (
  <Section id="experience" file={`git log — ${config.sections.experience.p.toLowerCase()}`} title={config.sections.experience.h2.replace(".", "")}>
    <div className="space-y-6">
      {experiences.map((e) => (
        <Reveal key={e.companyName}>
          <Window title={`${e.companyName.toLowerCase().replace(/\s+/g, "-")} — git log`}>
            <div className="p-5 sm:p-7">
              <p className="text-xs text-[var(--accent)]">commit {hash(e.companyName + e.date)}<span className="text-[rgb(var(--fg-rgb)/0.5)]"> (HEAD → main)</span></p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <img src={e.icon} alt={e.companyName} className="h-10 w-10 rounded object-contain" style={{ background: e.iconBg }} />
                <div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[var(--ink)]">
                    {e.title} <span className="text-[var(--accent)]">@ {e.companyName}</span>
                  </h3>
                  <p className="text-xs text-[rgb(var(--fg-rgb)/0.5)]">Date: {e.date}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-7">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-[var(--accent)]">+</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Window>
        </Reveal>
      ))}
    </div>
  </Section>
);

const Skills = () => {
  const loop = [...technologies, ...technologies];
  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-xs text-[rgb(var(--fg-rgb)/0.5)]">// stack.json</p>
          <h2 className="mt-2 font-['Space_Grotesk'] text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-6xl">
            Stack<span className="text-[var(--accent)]">_</span>
          </h2>
        </Reveal>
      </div>
      <div className="mt-10 overflow-hidden border-y border-[rgb(var(--fg-rgb)/0.1)] bg-[rgb(var(--fg-rgb)/0.02)] py-6">
        <div className="marquee gap-4">
          {loop.map((t, i) => (
            <div key={`${t.name}-${i}`} className="mx-2 flex shrink-0 items-center gap-3 rounded border border-[rgb(var(--fg-rgb)/0.15)] bg-[var(--surface)] px-5 py-3">
              <img src={t.icon} alt="" className="h-8 w-8 object-contain" />
              <span className="text-sm text-[var(--ink)]">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Works = () => (
  <Section id="work" file={`projects/ — ${config.sections.works.p.toLowerCase()}`} title={config.sections.works.h2.replace(".", "")}>
    <Reveal>
      <p className="mb-10 max-w-3xl text-sm leading-7">{config.sections.works.content}</p>
    </Reveal>
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((p, i) => (
        <Reveal key={p.name} delay={(i % 2) * 0.1}>
          <a href={p.sourceCodeLink} target="_blank" rel="noopener noreferrer" className="hard group block h-full overflow-hidden rounded-lg border border-[rgb(var(--fg-rgb)/0.2)] bg-[var(--surface)]">
            <div className="flex items-center justify-between border-b border-[rgb(var(--fg-rgb)/0.1)] bg-[rgb(var(--fg-rgb)/0.03)] px-4 py-2 text-xs">
              <span>{p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/README.md</span>
              <FaArrowUpRightFromSquare className="text-[rgb(var(--fg-rgb)/0.5)] transition-colors group-hover:text-[var(--accent)]" />
            </div>
            <img src={p.image} alt={p.name} className="h-44 w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0" />
            <div className="relative p-5">
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[var(--ink)]">{p.name}</h3>
              <p className="mt-3 text-sm leading-7">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t.name} className="rounded border border-[var(--accent)]/40 px-2 py-0.5 text-xs text-[var(--accent)]">
                    {t.name}
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

  const field = "w-full rounded border border-[rgb(var(--fg-rgb)/0.15)] bg-[rgb(var(--fg-rgb)/0.04)] px-4 py-3 text-sm text-[var(--ink)] outline-none placeholder:text-[rgb(var(--fg-rgb)/0.4)] focus:border-[var(--accent)]";

  return (
    <Section id="contact" file={`send-message.sh — ${config.contact.p.toLowerCase()}`} title={config.contact.h2.replace(".", "")}>
      <Reveal>
        <Window title="zsh — ./send-message.sh" className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6">
            {(Object.keys(config.contact.form) as (keyof typeof config.contact.form)[]).map((key) => {
              const { span, placeholder } = config.contact.form[key];
              return (
                <label key={key} className="flex flex-col gap-2 text-xs text-[rgb(var(--fg-rgb)/0.6)]">
                  <span><span className="text-[var(--accent)]">$</span> {span}</span>
                  {key === "message" ? (
                    <textarea required rows={6} name={key} value={form[key]} placeholder={placeholder} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className={field} />
                  ) : (
                    <input required type={key === "email" ? "email" : "text"} name={key} value={form[key]} placeholder={placeholder} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className={field} />
                  )}
                </label>
              );
            })}
            <button type="submit" className="hard w-fit rounded bg-[var(--accent)] px-6 py-3 text-sm font-bold text-[var(--on-accent)]" style={{ boxShadow: "5px 5px 0 0 var(--ink)" }}>
              {loading ? "sending..." : "./send-message"}
            </button>
          </form>
        </Window>
      </Reveal>
    </Section>
  );
};

const Footer = () => (
  <footer className="border-t border-[rgb(var(--fg-rgb)/0.1)] py-8 text-xs">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
      <p>© {new Date().getFullYear()} {config.html.fullName}</p>
      <div className="flex items-center gap-4 text-lg">
        {socials.map(({ href, label, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} className="transition-colors hover:text-[var(--accent)]">
            <Icon />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

const ResumeModal = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div className="flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg border border-[rgb(var(--fg-rgb)/0.15)] bg-[var(--surface)]" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-[rgb(var(--fg-rgb)/0.1)] px-4 py-3 text-xs">
          <span className="text-[var(--ink)]">Risman_J_Resume.pdf</span>
          <div className="flex items-center gap-3">
            <a href={RESUME_DOWNLOAD} className="rounded bg-[var(--accent)] px-3 py-1.5 font-bold text-[var(--on-accent)]">
              download
            </a>
            <button onClick={onClose} className="rounded border border-[rgb(var(--fg-rgb)/0.2)] px-3 py-1.5 text-[var(--ink)] hover:bg-[rgb(var(--fg-rgb)/0.1)]">
              close
            </button>
          </div>
        </div>
        <iframe src={RESUME_PREVIEW} title="Resume preview" className="w-full flex-1 bg-white" />
      </div>
    </div>
  );
};

const App = () => {
  const [showResume, setShowResume] = useState(false);
  const [theme, setTheme] = useTheme();
  useEffect(() => {
    document.title = config.html.title;
  }, []);

  return (
    <>
      <Navbar onResume={() => setShowResume(true)} theme={theme} setTheme={setTheme} />
      <main>
        <Hero onResume={() => setShowResume(true)} />
        <About />
        <Experience />
        <Skills />
        <Works />
        <Contact />
      </main>
      <Footer />
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </>
  );
};

export default App;
