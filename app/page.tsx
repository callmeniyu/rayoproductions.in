"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    tag: "Creative Videos",
    title: "Engaging short-form content crafted to capture audience attention",
    description:
      "We create compelling short-form videos that grab attention and drive engagement across all digital platforms.",
    pillars: [
      "Social Media Content",
      "Brand Storytelling",
      "Viral Video Production",
    ],
  },
  {
    tag: "UGC & Presentation",
    title: "Real, relatable, and conversion-driven videos for social platforms",
    description:
      "Authentic user-generated content and professional presentations that build trust and drive conversions.",
    pillars: [
      "User-Generated Content",
      "Presentation Videos",
      "Social Proof Creation",
    ],
  },
  {
    tag: "Brand Films",
    title: "Cinematic storytelling that defines brand identity and emotion",
    description:
      "High-quality brand films and advertisements that create emotional connections and establish brand authority.",
    pillars: [
      "Brand Identity Films",
      "Commercial Production",
      "Emotional Storytelling",
    ],
  },
  {
    tag: "Social Media Marketing",
    title:
      "Strategy, content creation, and campaign management to grow digital presence",
    description:
      "Comprehensive social media strategies that build communities, increase engagement, and drive business growth.",
    pillars: ["Content Strategy", "Campaign Management", "Community Building"],
  },
  {
    tag: "Graphic Design",
    title:
      "Visuals that tell your brand's story — from logo to full identity design",
    description:
      "Complete visual identity solutions that make your brand memorable and professionally distinctive.",
    pillars: ["Logo Design", "Brand Identity", "Visual Communication"],
  },
  {
    tag: "Corporate & Event Shoots",
    title:
      "Capturing moments that matter, from corporate highlights to personal milestones",
    description:
      "Professional photography and videography for corporate events, conferences, and special occasions.",
    pillars: [
      "Corporate Photography",
      "Event Coverage",
      "Milestone Documentation",
    ],
  },
  {
    tag: "Automotive Shoots",
    title: "Turning every ride and delivery into a cinematic experience",
    description:
      "Specialized automotive photography and videography that showcases vehicles in their best light.",
    pillars: ["Car Photography", "Delivery Showcases", "Automotive Marketing"],
  },
];

const capabilities = [
  {
    title: "Content labs",
    blurb: "Scripts, shoots, edits, and deploys 120+ assets monthly.",
  },
  {
    title: "Campaign command",
    blurb: "Growth loops engineered for CAC efficiency.",
  },
  {
    title: "Studio on wheels",
    blurb: "Modular film crew for anywhere shoots and live sets.",
  },
  {
    title: "Experience design",
    blurb: "Immersive websites and touchpoints built to win hearts.",
  },
  {
    title: "Analytics nerve center",
    blurb: "Intelligence dashboards powering real-time decisions.",
  },
  {
    title: "Creator network",
    blurb: "Partner roster amplifying narratives within 48 hours.",
  },
];

const marquee = [
  { src: "https://cdn.simpleicons.org/adobe/ffffff", alt: "Adobe" },
  { src: "https://cdn.simpleicons.org/canva/ffffff", alt: "Canva" },
  { src: "https://cdn.simpleicons.org/figma/ffffff", alt: "Figma" },
  { src: "https://cdn.simpleicons.org/instagram/ffffff", alt: "Instagram" },
  { src: "https://cdn.simpleicons.org/youtube/ffffff", alt: "YouTube" },
  { src: "https://cdn.simpleicons.org/vimeo/ffffff", alt: "Vimeo" },
  { src: "https://cdn.simpleicons.org/spotify/ffffff", alt: "Spotify" },
  { src: "https://cdn.simpleicons.org/tiktok/ffffff", alt: "TikTok" },
];

const socialFragments = [
  { label: "I’m most active on", value: "Instagram & Behance" },
  { label: "When I’m not posting", value: "I’m storyboarding micro films" },
  {
    label: "I do rage upload projects with",
    value: "Imposter syndrome & perfect color grades",
  },
  { label: "Now and then", value: "We ship drops in 72 hours" },
];

const caseStudies = [
  {
    name: "FluxRide Mobility",
    headline: "Launched an EV brand with a viral waitlist.",
    metrics: [
      "+420K launch video views",
      "19% lead-to-test-drive",
      "GTM in 6 weeks",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1549921296-3e61b91b1afb?auto=format&fit=crop&w=1200&q=60",
  },
  {
    name: "Orbit Labs",
    headline: "Rebranded deep-tech AI with a human lens.",
    metrics: [
      "Site sessions x3",
      "Series B deck & films",
      "Global press placement",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=60",
  },
  {
    name: "Saffron Spreads",
    headline: "Scaled D2C brand with social commerce.",
    metrics: ["ROAS 6.2x", "UGC engine 90 assets/mo", "+32% average order"],
    thumbnail:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&w=1200&q=60",
  },
];

const showcaseProjects = [
  {
    title: "Neon Muse Studio",
    category: "Fashion Tech",
    summary:
      "Immersive product drops backed by realtime styling AR and a responsive commerce experience built on storytelling.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=60",
    stats: [
      "+312% launch day revenue",
      "60 fps hero film deliverables",
      "Global waitlist in 48h",
    ],
  },
  {
    title: "Orbit Labs AI Summit",
    category: "B2B SaaS",
    summary:
      "Crafted a narrative microsite with cinematic motion that unpacked complex AI workflows through interactive scrollytelling.",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=60",
    stats: [
      "2.8x session duration",
      "11-country press coverage",
      "Full GTM asset suite",
    ],
  },
  {
    title: "FluxRide Launch",
    category: "Mobility",
    summary:
      "A kinetic film-first campaign that synced live data dashboards with show-stopping hero imagery and interactive configurators.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=60",
    stats: [
      "+420K preorders",
      "Conversion uplift 3.4x",
      "End-to-end funnel engines",
    ],
  },
  {
    title: "Saffron Spreads 2.0",
    category: "D2C Food",
    summary:
      "Built a modular content universe with shoppable reels, recipe films, and a delight-first membership storefront.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=60",
    stats: [
      "Average order value +32%",
      "Retention 78%",
      "90 assets in first month",
    ],
  },
];

export default function Page() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorActive, setCursorActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeService, setActiveService] = useState(0);
  const [activeCase, setActiveCase] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(0);

  const activeProject = showcaseProjects[hoveredProject] ?? showcaseProjects[0];

  const marqueeContent = useMemo(() => [...marquee, ...marquee], []);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-base to-black">
      <div
        ref={cursorRef}
        className={`fancy-cursor ${cursorActive ? "fancy-cursor--active" : ""}`}
      />
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-base"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-6 text-center"
            >
              <motion.div
                className=""
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {" "}
                <Image
                  src="/images/logo.png"
                  alt="Rayo Productions logo"
                  width={96}
                  height={96}
                  className="object-contain"
                  priority
                />
              </motion.div>
              <motion.span
                className="tag tag--active"
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Rayo Productions
              </motion.span>
              <motion.h1
                className="text-4xl font-light uppercase tracking-[0.6em] text-muted md:text-5xl"
                initial={{ letterSpacing: "1em" }}
                animate={{ letterSpacing: "0.6em" }}
                transition={{ delay: 0.35, duration: 0.8 }}
              >
                Ready, Set, Rayo
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <section className="relative flex min-h-screen flex-col justify-between px-6 pb-16 pt-32 sm:px-10 lg:px-20 overflow-hidden">
        {/* Simple static background */}
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          {/* Simple gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(141, 198, 225, 0.08) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(141, 198, 225, 0.06) 0%, transparent 50%), linear-gradient(180deg, rgba(5, 5, 8, 0.85) 0%, rgba(5, 5, 8, 0.95) 100%)",
            }}
          />
          {/* Subtle noise texture overlay */}
          <div className="noise-overlay" />
        </div>
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-muted">
              Boutique creative growth studio
            </div>
            <h1 className="mt-10 text-balance text-4xl font-light leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              We design <span className="text-gradient">magnetic</span>{" "}
              experiences for brands ready to dominate the digital world.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Digital marketing, cinematic storytelling, and experience design
              converging into one unstoppable studio. From spark to scale, we
              craft every pixel, frame, and funnel with intent.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                className="group relative overflow-hidden rounded-full border border-accent/70 bg-accent/10 px-6 py-3 text-sm uppercase tracking-[0.4em] text-white backdrop-blur transition-all duration-500 hover:shadow-glow"
                onMouseEnter={() => setCursorActive(true)}
                onMouseLeave={() => setCursorActive(false)}
              >
                <span className="relative z-10">Start a project</span>
                <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
              </button>
              <button
                className="rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.35em] text-muted transition-colors hover:border-accent/40 hover:text-white"
                onMouseEnter={() => setCursorActive(true)}
                onMouseLeave={() => setCursorActive(false)}
              >
                Watch our reel
              </button>
            </div>
          </motion.div>
          <div className="flex w-full max-w-xl flex-col gap-6 lg:w-[420px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="relative w-48 h-20 lg:w-56 lg:h-24 self-start group cursor-pointer"
              onMouseEnter={() => setCursorActive(true)}
              onMouseLeave={() => setCursorActive(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Rayo Productions"
                  fill
                  className="object-contain p-2"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="relative flex flex-1 flex-col gap-6 rounded-[32px] border border-white/10 bg-surface/60 p-8 backdrop-blur-2xl"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute -left-16 top-10 hidden h-32 w-32 animate-float rounded-full border border-accent/40 bg-accent/15 blur-2xl lg:block"
                aria-hidden="true"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="flex items-center justify-between text-sm text-muted">
                <span>Live brief</span>
                <span className="text-white/80">2025</span>
              </div>
              <p className="text-lg leading-relaxed text-muted-strong">
                We operate as your extended creative command center: strategy,
                scripts, shoots, edit bays, growth marketing, and now digital
                products.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-muted">Avg. ROAS</span>
                  <p className="mt-2 text-3xl font-semibold text-white">6.4x</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="text-muted">Projects shipped</span>
                  <p className="mt-2 text-3xl font-semibold text-white">25+</p>
                </div>
              </div>
              <div className="grid gap-3 text-sm">
                <div className="flex items-center justify-between text-muted">
                  <span>Creative velocity</span>
                  <span>89%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-accent to-white"
                    style={{ width: "89%" }}
                  />
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Client retention</span>
                  <span>92%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-white to-accent"
                    style={{ width: "92%" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-24 grid gap-12 md:grid-cols-3">
          {[
            { label: "Years building", value: "02" },
            { label: "Industries touched", value: "11" },
            { label: "Assets shipped", value: "1000+" },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="highlight-card p-6"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-muted">
                {item.label}
              </span>
              <p className="mt-4 text-4xl font-semibold text-white">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="services" className="relative px-6 py-40 sm:px-10 lg:px-20">
        <div
          className="absolute inset-0 -z-10 bg-grid-accent opacity-30"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
          <div className="lg:w-2/5 lg:sticky lg:top-1/2 lg:-translate-y-1/2">
            <div className="flex flex-col gap-6">
              <div className="section-title">Our Expertise</div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-light text-white md:text-4xl"
              >
                Creative solutions that drive results
              </motion.h2>
              <p className="max-w-xs text-sm text-muted">
                From concept to execution, we deliver comprehensive creative
                services that transform your brand's digital presence.
              </p>
              <div
                className="hidden h-24 w-full rounded-3xl border border-accent/40 bg-accent/10 blur-3xl lg:block"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="lg:w-3/5 flex flex-col space-y-8">
            {services.map((service, index) => {
              const active = index === activeService;
              return (
                <motion.article
                  key={service.title}
                  onViewportEnter={() => setActiveService(index)}
                  viewport={{ amount: 0.5 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`highlight-card relative flex flex-col gap-6 p-8 transition-all duration-500 ${
                    active ? "border-accent/60" : ""
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="flex items-center justify-between">
                    <span className={`tag ${active ? "tag--active" : ""}`}>
                      {service.tag}
                    </span>
                    <motion.div
                      layout
                      className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-muted"
                    >
                      {active ? "Active" : "Scroll"}
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-light text-white md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="max-w-2xl text-base text-muted-strong">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-muted">
                    {service.pillars.map((pillar) => (
                      <span
                        key={pillar}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="signals"
        className="relative overflow-hidden px-6 py-8 sm:px-10 lg:px-20"
      >
        <div className="relative w-full overflow-hidden rounded-full border border-white/10 bg-surface/60 py-5">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: [0, -960] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 24,
              ease: "linear",
            }}
          >
            {marqueeContent.map((logo, index) => (
              <img
                key={`${logo.alt}-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto mx-8 filter grayscale opacity-60"
              />
            ))}
          </motion.div>
        </div>
      </section>
      <section
        id="capabilities"
        className="relative px-6 py-24 sm:px-10 lg:px-20"
      >
        <div className="section-title">How we operate</div>
        <div className="rounded-[30px] border border-white/10 bg-surface/70 p-10 backdrop-blur-xl">
          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((capability, idx) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-accent/60 hover:bg-accent/15"
              >
                <div className="flex items-center justify-between text-sm text-muted">
                  <span>0{idx + 1}</span>
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.05, duration: 0.4 }}
                    className="text-xs uppercase tracking-[0.3em] text-muted"
                  >
                    {capability.title}
                  </motion.span>
                </div>
                <p className="mt-6 text-xl text-white">{capability.blurb}</p>
                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.04, duration: 0.4 }}
                  className="mt-4 text-sm text-muted"
                >
                  We embed with your team, ship experiments weekly, and track
                  the ripple effects live.
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="relative px-6 py-40 sm:px-10 lg:px-20">
        <div
          className="absolute inset-0 -z-10 bg-grid-accent opacity-30"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
          <div className="lg:w-2/5 lg:sticky lg:top-1/2 lg:-translate-y-1/2">
            <div className="flex flex-col gap-6">
              <div className="section-title">Previous projects</div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-light text-white md:text-4xl"
              >
                Selected works that define our approach.
              </motion.h2>
              <p className="max-w-xs text-sm text-muted">
                Each project represents our commitment to transforming brands
                through strategic creativity and flawless execution.
              </p>
              <div
                className="hidden h-24 w-full rounded-3xl border border-accent/40 bg-accent/10 blur-3xl lg:block"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="lg:w-3/5 flex flex-col space-y-8">
            {showcaseProjects.map((project, index) => {
              const isActive = index === hoveredProject;
              return (
                <motion.article
                  key={project.title}
                  onViewportEnter={() => setHoveredProject(index)}
                  viewport={{ amount: 0.5 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`highlight-card relative flex flex-col gap-6 p-8 transition-all duration-500 ${
                    isActive ? "border-accent/60" : ""
                  }`}
                  onMouseEnter={() => setHoveredProject(index)}
                >
                  <div className="flex items-center justify-between">
                    <span className={`tag ${isActive ? "tag--active" : ""}`}>
                      {project.category}
                    </span>
                    <motion.div
                      layout
                      className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-muted"
                    >
                      {isActive ? "Active" : "View"}
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-light text-white md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="max-w-2xl text-base text-muted-strong">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-muted">
                    {project.stats.map((stat) => (
                      <span
                        key={stat}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
      <section id="work" className="relative px-6 py-24 sm:px-10 lg:px-20">
        <div className="section-title">Our Services</div>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                onMouseEnter={() => {
                  setActiveService(index);
                  setCursorActive(true);
                }}
                onMouseLeave={() => setCursorActive(false)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`highlight-card p-8 ${
                  activeService === index ? "border-accent/60" : ""
                }`}
              >
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-muted">
                  <span>{service.tag}</span>
                  <span>Service 0{index + 1}</span>
                </div>
                <p className="mt-5 text-2xl text-white">{service.title}</p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-muted">
                  {service.pillars.map((pillar) => (
                    <span
                      key={pillar}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-surface/70">
            <AnimatePresence mode="wait">
              <motion.div
                key={services[activeService]?.tag}
                initial={{ opacity: 0.2, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="h-full w-full flex items-center justify-center p-8"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    {services[activeService]?.tag}
                  </h3>
                  <p className="text-muted-strong text-sm leading-relaxed">
                    {services[activeService]?.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/80">
              <span>{services[activeService]?.tag}</span>
              <span>Service 0{activeService + 1}</span>
            </div>
          </div>
        </div>
      </section>
      <section id="promo" className="relative px-6 py-24 sm:px-10 lg:px-20">
        <div className="section-title">Promo reel</div>
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-surface/70 shadow-[0_40px_120px_rgba(141,198,225,0.16)]"
            onMouseEnter={() => setCursorActive(true)}
            onMouseLeave={() => setCursorActive(false)}
          >
            <video
              src="https://cdn.coverr.co/videos/coverr-colorful-smoke-1092/1080p.mp4"
              poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=60"
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls
              controlsList="nodownload"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-base/70 via-transparent to-accent/15" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-col gap-4 p-10">
              <span className="text-xs uppercase tracking-[0.45em] text-muted">
                Rayo Productions Promo 2025
              </span>
              <h3 className="text-3xl font-light text-white sm:text-4xl">
                90 seconds of cinematic brand momentum.
              </h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
          >
            <h4 className="text-2xl font-light text-white">
              What’s inside the reel?
            </h4>
            <p className="mt-4 text-sm text-muted">
              A glimpse into how our creatives, strategists, and engineers
              choreograph campaigns—from concepts on paper to high-impact
              execution across every channel.
            </p>
            <motion.ul
              className="mt-8 space-y-4 text-sm text-muted"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {[
                "Cinematic product films and hero edits",
                "Behind-the-scenes shots of on-location crews",
                "Interactive web builds and experiential UI",
                "Performance dashboards proving campaign uplift",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="inline-flex h-2 w-2 rounded-full bg-accent shadow-glow" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className="group relative overflow-hidden rounded-full border border-accent/60 bg-accent/15 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white transition-all duration-500 hover:shadow-glow"
                onMouseEnter={() => setCursorActive(true)}
                onMouseLeave={() => setCursorActive(false)}
              >
                <span className="relative z-10">Download full reel</span>
                <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
              </button>
              <button
                className="rounded-full border border-white/10 px-6 py-3 text-xs uppercase tracking-[0.35em] text-muted transition-all hover:border-accent/40 hover:text-white"
                onMouseEnter={() => setCursorActive(true)}
                onMouseLeave={() => setCursorActive(false)}
              >
                Share with the team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="about" className="relative px-6 py-40 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-full flex justify-center">
            <div className="section-title">About Us</div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-light text-white md:text-4xl lg:text-5xl mb-8"
          >
            A new-age media production and marketing agency
          </motion.h2>
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-left"
            >
              <h3 className="text-2xl font-light text-white mb-6">Our Story</h3>
              <p className="text-muted-strong leading-relaxed">
                Rayo was born from a simple idea — that creativity and
                collaboration can build something extraordinary. What began as a
                college passion project soon evolved into a full-fledged
                production team working with brands, startups, and creators.
              </p>
              <p className="text-muted-strong leading-relaxed mt-4">
                We believe storytelling isn't just about visuals — it's about
                emotion, connection, and authenticity. Every project we take on
                is an opportunity to create something memorable, something that
                speaks louder than words.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-left"
            >
              <h3 className="text-2xl font-light text-white mb-6">Our Team</h3>
              <p className="text-muted-strong leading-relaxed">
                Our team is powered by young minds aged 19, 20, and 21 —
                designers, filmmakers, editors, and marketers who understand
                today's digital pulse. We bring a fresh, youthful, and fearless
                approach to every project, combining creativity with clarity to
                make ideas stand out online.
              </p>
              <div className="mt-6 p-6 rounded-2xl border border-accent/20 bg-accent/5">
                <p className="text-accent font-medium">Our Vision</p>
                <p className="text-white mt-2">
                  To empower brands and creators with storytelling that's bold,
                  emotional, and unforgettable — led by the next generation of
                  creative minds.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="signals" className="relative px-6 py-24 sm:px-10 lg:px-20">
        <div className="section-title">Signals & socials</div>
        <div className="grid gap-6 md:grid-cols-2">
          {socialFragments.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="group rounded-[28px] border border-white/10 bg-surface/70 p-8 backdrop-blur-xl transition-colors hover:border-accent/50 hover:bg-accent/15"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-muted">
                {item.label}
              </p>
              <p className="mt-6 text-2xl font-light text-gradient">
                {item.value}
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted">
                <span className="inline-flex h-2 w-2 rounded-full bg-accent shadow-glow" />
                We show up where the story needs to be told.
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative px-6 py-28 sm:px-10 lg:px-20">
        <div className="rounded-[36px] border border-white/10 bg-surface/80 p-12 text-center backdrop-blur-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs uppercase tracking-[0.35em] text-muted"
          >
            Let’s storyboard your next chapter
          </motion.div>
          <h2 className="mt-10 text-balance text-4xl font-light text-white md:text-5xl">
            We orchestrate strategy, film, design, and engineering into one
            seamless studio.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Tell us where you need momentum. We’ll architect the crew, the
            calendar, and measurable goals. From lead velocity to brand fame, we
            live for bold briefs.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              className="group relative overflow-hidden rounded-full border border-accent/70 bg-accent/10 px-6 py-3 text-sm uppercase tracking-[0.4em] text-white backdrop-blur transition-all duration-500 hover:shadow-glow"
              onMouseEnter={() => setCursorActive(true)}
              onMouseLeave={() => setCursorActive(false)}
            >
              <span className="relative z-10">Book a strategy call</span>
              <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
            </button>
            <button
              className="rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.35em] text-muted transition-colors hover:border-accent/40 hover:text-white"
              onMouseEnter={() => setCursorActive(true)}
              onMouseLeave={() => setCursorActive(false)}
            >
              Download credentials deck
            </button>
          </div>
        </div>
      </section>
      <footer className="relative px-6 pb-10 sm:px-10 lg:px-20">
        <div className="flex flex-col gap-8 rounded-[32px] border border-white/10 bg-surface/80 p-10 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-muted">
              Rayo Productions
            </span>
            <p className="mt-4 text-lg text-muted-strong">
              New-age media production and marketing agency specializing in
              creative videos, brand films, and digital marketing solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm uppercase tracking-[0.3em] text-muted">
            <a
              href="mailto:hello@rayoproductions.in"
              className="transition-colors hover:text-white"
              onMouseEnter={() => setCursorActive(true)}
              onMouseLeave={() => setCursorActive(false)}
            >
              hello@rayoproductions.in
            </a>
            <a
              href="#"
              className="transition-colors hover:text-white"
              onMouseEnter={() => setCursorActive(true)}
              onMouseLeave={() => setCursorActive(false)}
            >
              Instagram
            </a>
            <a
              href="#"
              className="transition-colors hover:text-white"
              onMouseEnter={() => setCursorActive(true)}
              onMouseLeave={() => setCursorActive(false)}
            >
              Behance
            </a>
            <a
              href="#"
              className="transition-colors hover:text-white"
              onMouseEnter={() => setCursorActive(true)}
              onMouseLeave={() => setCursorActive(false)}
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 text-xs uppercase tracking-[0.3em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Rayo Productions. All rights reserved.
          </span>
          <span>Made with intent in pixels, frames, & code.</span>
        </div>
      </footer>
    </main>
  );
}
