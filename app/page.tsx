"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Lottie from "lottie-react";

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
  const promoVideoRef = useRef<HTMLVideoElement | null>(null);
  const [heroAnimationData, setHeroAnimationData] = useState(null);
  const lottieRef = useRef<any>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [lottieVisible, setLottieVisible] = useState(false);
  const [touchedCard, setTouchedCard] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [particles, setParticles] = useState<
    Array<{
      left: string;
      top: string;
      initX: number;
      initY: number;
      duration: number;
      delay: number;
      size: number;
    }>
  >([]);

  const activeProject = showcaseProjects[hoveredProject] ?? showcaseProjects[0];

  const marqueeContent = useMemo(() => [...marquee, ...marquee], []);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  // Initialize decorative particles on client only (avoid SSR window access)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const count = 20;
    const arr = Array.from({ length: count }).map(() => {
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const initX = Math.random() * window.innerWidth;
      const initY = Math.random() * window.innerHeight;
      const duration = Math.random() * 10 + 8;
      const delay = Math.random() * 5;
      const size = Math.random() * 3 + 1;
      return { left, top, initX, initY, duration, delay, size };
    });
    setParticles(arr);
    // Recompute on resize to adapt to viewport
    const onResize = () => {
      const arr2 = Array.from({ length: count }).map(() => {
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const initX = Math.random() * window.innerWidth;
        const initY = Math.random() * window.innerHeight;
        const duration = Math.random() * 10 + 8;
        const delay = Math.random() * 5;
        const size = Math.random() * 3 + 1;
        return { left, top, initX, initY, duration, delay, size };
      });
      setParticles(arr2);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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

  // Ensure the background promo video tries to play (some browsers require a programmatic play even if muted)
  useEffect(() => {
    const v = promoVideoRef.current;
    if (!v) return;
    const tryPlay = () => {
      // ignore play promise failures silently
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          /* autoplay prevented */
        });
      }
    };

    // attempt play once mounted
    tryPlay();

    // also try again when the user interacts (click) anywhere
    const onFirstInteraction = () => {
      tryPlay();
      window.removeEventListener("pointerdown", onFirstInteraction);
    };

    window.addEventListener("pointerdown", onFirstInteraction, { once: true });
    return () => window.removeEventListener("pointerdown", onFirstInteraction);
  }, [promoVideoRef]);

  // Load hero Lottie animation data lazily and respect low-power / reduced-motion preferences
  useEffect(() => {
    // don't load while still in loader or if already loaded
    if (!lottieVisible || heroAnimationData) return;

    // respect save-data, reduced motion, and low-memory devices
    const connection = (navigator as any).connection || {};
    const saveData = connection.saveData;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const deviceMemory = (navigator as any).deviceMemory || 4;
    const lowPower = saveData || prefersReducedMotion || deviceMemory < 1.5;
    if (lowPower) {
      // skip loading Lottie on constrained devices
      console.info(
        "Skipping hero Lottie due to low-power / reduced-motion preference"
      );
      return;
    }

    const load = () => {
      fetch("/videos/hero_snow.json")
        .then((response) => response.json())
        .then((data) => setHeroAnimationData(data))
        .catch((error) =>
          console.error("Error loading Lottie animation:", error)
        );
    };

    if (typeof (window as any).requestIdleCallback === "function") {
      (window as any).requestIdleCallback(load, { timeout: 2000 });
    } else {
      const t = window.setTimeout(load, 600);
      return () => window.clearTimeout(t);
    }
  }, [lottieVisible, heroAnimationData]);

  // Play / pause the Lottie instance when visibility changes to reduce CPU
  useEffect(() => {
    const player = (lottieRef as any).current;
    if (!player) return;

    try {
      if (lottieVisible) {
        // lottie-react exposes play/pause on the instance in many builds
        player.play && player.play();
        // Reduce frame rate on mobile for better performance
        if (isMobile && player.setSubframe) {
          player.setSubframe(false);
        }
      } else {
        player.pause && player.pause();
      }
    } catch (err) {
      // ignore - defensive
    }
  }, [lottieVisible, isMobile]);

  // detect mobile for sizing adjustments
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Only show / mount the Lottie after the initial loader is done and the hero is in view
  useEffect(() => {
    if (loading) {
      setLottieVisible(false);
      return;
    }

    const node = heroRef.current;
    if (!node) {
      // fallback: show after loader
      const t = window.setTimeout(() => setLottieVisible(true), 250);
      return () => window.clearTimeout(t);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setLottieVisible(true);
          else setLottieVisible(false);
        });
      },
      { threshold: 0.05 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [loading, heroRef]);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-base to-black">
      <div
        ref={cursorRef}
        className={`fancy-cursor ${
          cursorActive ? "fancy-cursor--active" : ""
        } hidden sm:block`}
      />
      {/* Global subtle noise overlay (covers entire page) */}
      <div className="noise-overlay" aria-hidden="true" />
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
                className="text-3xl font-light uppercase tracking-[0.4em] text-muted sm:text-4xl sm:tracking-[0.6em] md:text-5xl"
                initial={{ letterSpacing: "0.8em" }}
                animate={{ letterSpacing: "0.4em" }}
                transition={{ delay: 0.35, duration: 0.8 }}
              >
                Ready, Set, Rayo
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <section
        ref={heroRef}
        className="relative flex min-h-screen flex-col justify-between px-6 pb-16 pt-6 sm:pt-32 sm:px-10 lg:px-20 overflow-hidden"
      >
        {/* Background layers */}
        <div
          className="absolute inset-0 overflow-hidden"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          {/* Gradient overlay - below Lottie */}
          <div
            className="absolute inset-0"
            style={{
              zIndex: 0,
              background:
                "radial-gradient(circle at 30% 20%, rgba(141, 198, 225, 0.08) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(141, 198, 225, 0.06) 0%, transparent 50%), linear-gradient(180deg, rgba(5, 5, 8, 0.6) 0%, rgba(5, 5, 8, 0.8) 100%)",
            }}
          />

          {/* Lottie animation - above the gradient but under page content */}
          {heroAnimationData && lottieVisible && (
            <div className="lottie-bg" aria-hidden>
              <Lottie
                lottieRef={lottieRef}
                animationData={heroAnimationData}
                loop
                autoplay
                rendererSettings={
                  {
                    preserveAspectRatio: "xMidYMid slice",
                    clearCanvas: true,
                    progressiveLoad: true,
                    hideOnTransparent: true,
                  } as any
                }
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100vh",
                  opacity: isMobile ? 0.25 : 0.45,
                  pointerEvents: "none",
                  mixBlendMode: "screen",
                  zIndex: 2,
                  willChange: "transform",
                  transform: "translateZ(0)",
                }}
              />
            </div>
          )}
        </div>
        <div
          className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-20"
          style={{ zIndex: 10, position: "relative" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={loading ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex-1 max-w-2xl"
          >
            {/* Mobile-only logo above the tagline */}
            <div className="sm:hidden md:mb-3 flex justify-start">
              <Image
                src="/images/logo.png"
                alt="Rayo Productions logo"
                width={96}
                height={96}
                className="object-contain w-28 h-28"
                priority
              />
            </div>
            <div className="hidden md:inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-muted">
              Boutique creative growth studio
            </div>
            <h1 className="mt-0 md:mt-10 text-balance text-4xl font-light leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
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
              animate={loading ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden sm:block relative w-48 h-20 lg:w-56 lg:h-24 self-start group cursor-pointer"
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
              animate={loading ? { opacity: 0, x: 40 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
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

        <div
          className="mt-16 sm:mt-24 grid gap-12 md:grid-cols-3"
          style={{ zIndex: 10, position: "relative" }}
        >
          {[
            { label: "Years building", value: "02" },
            { label: "Industries touched", value: "11" },
            { label: "Assets shipped", value: "1000+" },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.0 }}
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

        {/* Mobile Scroll Indicator */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex justify-center mt-12 md:hidden"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs uppercase tracking-widest text-muted">
                Scroll to explore
              </span>
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </section>
      <section
        id="services"
        className="relative px-6 py-24 sm:py-40 sm:px-10 lg:px-20"
      >
        <div
          className="absolute inset-0 -z-10 bg-grid-accent opacity-30"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-10 sm:gap-16 lg:flex-row lg:items-start lg:gap-20">
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
              const isTouched = touchedCard === index;
              return (
                <motion.article
                  key={service.title}
                  onViewportEnter={() => setActiveService(index)}
                  viewport={{ amount: 0.5 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileTap={{ scale: isMobile ? 0.98 : 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`highlight-card relative flex flex-col gap-6 p-8 transition-all duration-500 ${
                    active || isTouched ? "border-accent/60 shadow-glow" : ""
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                  onTouchStart={() => {
                    setTouchedCard(index);
                    setActiveService(index);
                  }}
                  onTouchEnd={() => setTimeout(() => setTouchedCard(null), 300)}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`tag ${
                        active || isTouched ? "tag--active" : ""
                      }`}
                    >
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-light text-white md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="max-w-2xl text-base text-muted-strong">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-muted">
                    {service.pillars.map((pillar) => (
                      <motion.span
                        key={pillar}
                        whileTap={{ scale: isMobile ? 1.05 : 1 }}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                      >
                        {pillar}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="promo"
        className="relative min-h-screen w-full overflow-hidden"
      >
        {/* Full-viewport background video */}
        <video
          ref={promoVideoRef}
          aria-hidden
          crossOrigin="anonymous"
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/promo.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay to improve text contrast */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Subtle moving gradient flare */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-accent/20 to-transparent opacity-40 blur-3xl animate-slow-move"
        />

        {/* Centered cinematic content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16 sm:py-24">
          <div className="max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="mb-6"
            >
              <span className="tag tag--active">Rayo Productions</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight"
            >
              Cinematic films. Scroll‑stopping content. Measurable growth.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-6 text-lg text-muted-strong max-w-2xl mx-auto"
            >
              We fuse craft and data to build stories that resonate and funnels
              that perform. From hero films to UGC and full‑stack campaigns.
            </motion.p>

            {/* Small CTA-like hint (not a button as requested) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="mt-8 flex items-center justify-center gap-4 text-xs uppercase tracking-[0.35em] text-white/80"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-accent shadow-glow" />
              <span>Watch the reel • No downloads</span>
            </motion.div>
          </div>
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
      <section
        id="signals"
        className="relative overflow-hidden px-6 py-8 pb-24 sm:px-10 lg:px-20"
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
        id="projects"
        className="relative px-6 py-24 sm:py-40 sm:px-10 lg:px-20"
      >
        <div
          className="absolute inset-0 -z-10 bg-grid-accent opacity-30"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-10 sm:gap-16 lg:flex-row lg:items-start lg:gap-20">
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
              const isTouched = touchedCard === index + 100; // Offset to avoid collision with services
              return (
                <motion.article
                  key={project.title}
                  onViewportEnter={() => setHoveredProject(index)}
                  viewport={{ amount: 0.5 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileTap={{ scale: isMobile ? 0.98 : 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`highlight-card relative flex flex-col gap-6 p-8 transition-all duration-500 ${
                    isActive || isTouched ? "border-accent/60 shadow-glow" : ""
                  }`}
                  onMouseEnter={() => setHoveredProject(index)}
                  onTouchStart={() => {
                    setTouchedCard(index + 100);
                    setHoveredProject(index);
                  }}
                  onTouchEnd={() => setTimeout(() => setTouchedCard(null), 300)}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`tag ${
                        isActive || isTouched ? "tag--active" : ""
                      }`}
                    >
                      {project.category}
                    </span>
                    <motion.div
                      layout
                      className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-muted"
                    >
                      {isActive || isTouched ? "Active" : "View"}
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
                      <motion.span
                        key={stat}
                        whileTap={{ scale: isMobile ? 1.05 : 1 }}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                      >
                        {stat}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="about"
        className="relative px-6 py-24 sm:py-40 sm:px-10 lg:px-20"
      >
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
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:gap-16">
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
              <div className="mt-6 p-6 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-white font-medium">Our Vision</p>
                <p className="text-muted-strong mt-2">
                  To empower brands and creators with storytelling that's bold,
                  emotional, and unforgettable — led by the next generation of
                  creative minds.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Scroll-based 3D Cards */}
      <section className="relative py-32 px-6 sm:px-10 lg:px-20 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-base to-black" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs uppercase tracking-[0.35em] text-muted mb-8">
              Client Stories
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              What Our Clients{" "}
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Say About Us
              </span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Real experiences from real brands we've helped transform through
              creative storytelling
            </p>
          </motion.div>

          {/* Testimonials Grid with Scroll Animation */}
          <div className="space-y-32">
            {[
              {
                name: "Priya Sharma",
                role: "Marketing Director",
                company: "TechStart India",
                avatar: "https://i.pravatar.cc/150?img=1",
                rating: 5,
                text: "Rayo Productions completely transformed our brand presence. Their creative vision and execution exceeded our expectations. The team's youthful energy combined with professional delivery made the entire process seamless.",
                project: "Brand Film & Social Campaign",
                color: "from-blue-500/20 to-purple-500/20",
              },
              {
                name: "Rahul Mehta",
                role: "Founder & CEO",
                company: "Ayurveda Wellness Co.",
                avatar: "https://i.pravatar.cc/150?img=12",
                rating: 5,
                text: "Working with Rayo was a game-changer. They understood our vision and brought it to life with stunning visuals. The ROI we saw from their social media strategy was phenomenal. Highly recommend!",
                project: "Social Media Marketing",
                color: "from-green-500/20 to-teal-500/20",
              },
              {
                name: "Ananya Patel",
                role: "Creative Head",
                company: "Fashion Forward",
                avatar: "https://i.pravatar.cc/150?img=5",
                rating: 5,
                text: "The attention to detail and creative storytelling by Rayo Productions is unmatched. They took our automotive shoots to a cinematic level. Every frame was pure art. Can't wait to work with them again!",
                project: "Automotive & Product Shoots",
                color: "from-pink-500/20 to-orange-500/20",
              },
              {
                name: "Vikram Singh",
                role: "Brand Manager",
                company: "Urban Eats",
                avatar: "https://i.pravatar.cc/150?img=8",
                rating: 5,
                text: "Rayo's UGC content strategy helped us connect with our audience authentically. Their team is responsive, creative, and truly understands what works on social media. Our engagement rates have tripled!",
                project: "UGC & Content Creation",
                color: "from-yellow-500/20 to-red-500/20",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                {/* Floating quote mark */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                  whileInView={{ opacity: 0.1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className={`absolute -top-12 ${
                    index % 2 === 0 ? "left-0" : "right-0"
                  } text-[200px] font-serif text-accent pointer-events-none`}
                >
                  "
                </motion.div>

                <div
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Card with 3D effect */}
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    whileTap={{ scale: isMobile ? 0.98 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-xl ${
                      index % 2 === 0 ? "" : "lg:col-start-2"
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${testimonial.color})`,
                      transformStyle: "preserve-3d",
                      willChange: "transform",
                    }}
                    onTouchStart={() => setActiveTestimonial(index)}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Star Rating */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-1 mb-6"
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.svg
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.5 + i * 0.1,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="w-6 h-6 text-accent"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </motion.div>

                      {/* Testimonial Text */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="text-white text-lg md:text-xl font-light leading-relaxed mb-8 italic"
                      >
                        "{testimonial.text}"
                      </motion.p>

                      {/* Project Tag */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-xs uppercase tracking-wider text-accent"
                      >
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        {testimonial.project}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Client Info with Parallax */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`flex items-center gap-6 ${
                      index % 2 === 0 ? "" : "lg:col-start-1 lg:row-start-1"
                    }`}
                  >
                    {/* Avatar with glow */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl" />
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-accent/50">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      {/* Verified badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.8,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="absolute -bottom-1 -right-1 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-base"
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    </motion.div>

                    {/* Client Details */}
                    <div>
                      <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl font-light text-white mb-1"
                      >
                        {testimonial.name}
                      </motion.h4>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="text-muted text-sm mb-1"
                      >
                        {testimonial.role}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="text-accent text-sm font-medium"
                      >
                        {testimonial.company}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                {index < 3 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-24 text-center"
          >
            <p className="text-muted text-lg mb-8">
              Want to be our next success story?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-full border border-accent/70 bg-accent/10 px-8 py-4 text-sm uppercase tracking-[0.4em] text-white backdrop-blur transition-all duration-500 hover:shadow-glow"
            >
              <span className="relative z-10">Start Your Project</span>
              <span className="absolute inset-0 translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="relative mb-20">
        <div
          className="overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/contactus_bg.jpeg')",
            minHeight: "100vh",
          }}
        >
          {/* Floating particles for visual interest (client-only positions) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/20"
                style={{
                  left: p.left,
                  top: p.top,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                }}
                initial={{ x: p.initX, y: p.initY, opacity: 0 }}
                animate={{ y: [null, -100], opacity: [0, 1, 0] }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                }}
              />
            ))}
          </div>

          <div className="flex items-center justify-center min-h-screen bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center lg:text-left"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl font-light mb-6 md:text-5xl lg:text-6xl text-white leading-tight"
                  >
                    Let's Create <br />
                    <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                      Something Amazing
                    </span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg mb-12 text-white/90 max-w-md mx-auto lg:mx-0"
                  >
                    Ready to bring your vision to life? Reach out and let's
                    start the conversation. We're here to turn your ideas into
                    reality.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex justify-center lg:justify-start gap-8"
                  >
                    {[
                      {
                        href: "https://instagram.com/rayoproductions",
                        icon: (
                          <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        ),
                        label: "Instagram",
                      },
                      {
                        href: "https://wa.me/1234567890",
                        icon: (
                          <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                        ),
                        label: "WhatsApp",
                      },
                      {
                        href: "https://youtube.com/@rayoproductions",
                        icon: (
                          <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        ),
                        label: "YouTube",
                      },
                      {
                        href: "https://linkedin.com/company/rayoproductions",
                        icon: (
                          <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        ),
                        label: "LinkedIn",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
                        onMouseEnter={() => setCursorActive(true)}
                        onMouseLeave={() => setCursorActive(false)}
                      >
                        <div className="text-white/80 group-hover:text-white transition-colors">
                          {social.icon}
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-white/70 whitespace-nowrap">
                          {social.label}
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Right side - Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-2xl font-light text-white mb-6 text-center"
                    >
                      Get In Touch
                    </motion.h3>
                    <form className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-accent/50 focus:bg-white/15 transition-all duration-300"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      >
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-accent/50 focus:bg-white/15 transition-all duration-300"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <textarea
                          rows={4}
                          placeholder="Your Message"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-accent/50 focus:bg-white/15 transition-all duration-300 resize-none"
                        />
                      </motion.div>
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 px-6 bg-gradient-to-r from-accent to-accent/80 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
                        type="submit"
                      >
                        Send Message
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="relative px-6 pb-6 sm:pb-10 sm:px-10 lg:px-20">
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
