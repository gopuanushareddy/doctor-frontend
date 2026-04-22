"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    title: "Pregnancy Care",
    desc: "Comprehensive monitoring and support through every trimester with personalized birth plans.",
    icon: "🤰",
    color: "#fce7f3",
    accent: "#db2777",
    grad: "linear-gradient(135deg, #fce7f3 0%, #fdf4ff 100%)",
  },
  {
    title: "Infertility Treatment",
    desc: "Holistic diagnostic and treatment pathways tailored to your unique fertility journey.",
    icon: "💊",
    color: "#ede9fe",
    accent: "#7c3aed",
    grad: "linear-gradient(135deg, #ede9fe 0%, #fce7f3 100%)",
  },
  {
    title: "PCOS / PCOD",
    desc: "Evidence-based hormonal and lifestyle interventions to restore balance and wellbeing.",
    icon: "🌿",
    color: "#dcfce7",
    accent: "#16a34a",
    grad: "linear-gradient(135deg, #dcfce7 0%, #d1fae5 100%)",
  },
  {
    title: "IVF Treatment",
    desc: "World-class in vitro fertilisation with the highest clinical success rates in the region.",
    icon: "🔬",
    color: "#fef9c3",
    accent: "#ca8a04",
    grad: "linear-gradient(135deg, #fef9c3 0%, #ffedd5 100%)",
  },
  {
    title: "Diagnostic Scans",
    desc: "State-of-the-art ultrasound and imaging for precise, real-time foetal and pelvic assessment.",
    icon: "🩻",
    color: "#e0f2fe",
    accent: "#0284c7",
    grad: "linear-gradient(135deg, #e0f2fe 0%, #ede9fe 100%)",
  },
  {
    title: "Women's Health",
    desc: "Preventive screenings, gynaecological care, and wellness programs across all life stages.",
    icon: "💗",
    color: "#fce7f3",
    accent: "#e11d48",
    grad: "linear-gradient(135deg, #fce7f3 0%, #fee2e2 100%)",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(null);

  return (
    <section
      ref={ref}
      style={{
        padding: "100px 0 120px",
        background: "linear-gradient(180deg, #fff 0%, #fdf2f8 40%, #faf5ff 100%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes drift {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(3deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .svc-card {
          position: relative;
          border-radius: 28px;
          padding: 36px 30px 32px;
          cursor: pointer;
          border: 1.5px solid rgba(255,255,255,0.9);
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
          overflow: hidden;
        }
        .svc-card:hover {
          transform: translateY(-8px) scale(1.025);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }
        .svc-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 28px;
          opacity: 0;
          transition: opacity 0.4s;
          background: inherit;
          filter: brightness(0.97);
        }
        .svc-card:hover::before { opacity: 1; }

        .icon-wrap {
          width: 64px; height: 64px;
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          font-size: 28px;
          margin-bottom: 20px;
          position: relative;
          transition: transform 0.3s;
          background: rgba(255,255,255,0.7);
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
        .svc-card:hover .icon-wrap {
          transform: rotate(-6deg) scale(1.15);
        }
        .arrow-chip {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 500;
          border-radius: 50px; padding: 5px 12px;
          margin-top: 18px;
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
          transition: gap 0.2s, background 0.2s;
          letter-spacing: 0.03em;
        }
        .svc-card:hover .arrow-chip { gap: 9px; background: rgba(255,255,255,0.9); }

        .decorative-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .svc-card:hover .decorative-blob { opacity: 0.9; }
      `}</style>

      {/* Background decorative orbs */}
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", top: "-80px", right: "-80px", background: "radial-gradient(circle, rgba(244,114,182,0.12), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", bottom: 0, left: "-60px", background: "radial-gradient(circle, rgba(167,139,250,0.1), transparent 70%)", pointerEvents: "none" }} />

      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: 64, padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(219,39,119,0.08)", border: "1px solid rgba(219,39,119,0.2)",
            borderRadius: 50, padding: "6px 16px", marginBottom: 20,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#db2777", display: "inline-block" }} />
          <span style={{ fontSize: 13, color: "#be185d", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>What We Offer</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(34px, 4vw, 52px)", fontWeight: 400, color: "#1a0a2e", margin: "0 0 16px", lineHeight: 1.15, letterSpacing: "-0.02em" }}
        >
          Specialised Care for <em style={{ color: "#db2777", fontStyle: "italic" }}>Every Woman</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.28, duration: 0.6 }}
          style={{ fontSize: 16, color: "#9ca3af", maxWidth: 480, margin: "0 auto", lineHeight: 1.7, fontWeight: 300 }}
        >
          From preconception planning to postnatal wellness — our experts are with you at every step.
        </motion.p>
      </div>

      {/* Cards grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {services.map((svc, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            className="svc-card"
            style={{ background: svc.grad }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Decorative blob inside card */}
            <div
              className="decorative-blob"
              style={{
                width: 100, height: 100,
                top: -20, right: -20,
                background: `radial-gradient(circle, ${svc.accent}22, transparent 70%)`,
              }}
            />

            <div className="icon-wrap" style={{ borderColor: `${svc.accent}30` }}>
              {svc.icon}
            </div>

            <h3 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 22, fontWeight: 400,
              color: "#1a0a2e", margin: "0 0 10px",
              letterSpacing: "-0.01em",
            }}>
              {svc.title}
            </h3>

            <p style={{
              fontSize: 14, color: "#6b7280", lineHeight: 1.7,
              fontWeight: 300, margin: 0,
            }}>
              {svc.desc}
            </p>

            <div className="arrow-chip" style={{ color: svc.accent }}>
              Learn more
              <motion.span
                animate={hovered === i ? { x: [0, 4, 0] } : { x: 0 }}
                transition={{ repeat: hovered === i ? Infinity : 0, duration: 0.8 }}
              >
                →
              </motion.span>
            </div>

            {/* Bottom accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={hovered === i ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: 3, borderRadius: "0 0 28px 28px",
                background: `linear-gradient(90deg, transparent, ${svc.accent}, transparent)`,
                transformOrigin: "center",
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9, duration: 0.7 }}
        style={{ textAlign: "center", marginTop: 64 }}
      >
        <p style={{ fontSize: 15, color: "#9ca3af", marginBottom: 18, fontWeight: 300 }}>
          Not sure where to start? Our specialists will guide you.
        </p>
        <button
          style={{
            background: "linear-gradient(135deg, #db2777, #9333ea)",
            color: "white", border: "none",
            padding: "14px 36px", borderRadius: 50,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15, fontWeight: 500,
            cursor: "pointer",
            boxShadow: "0 8px 30px rgba(219,39,119,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 14px 40px rgba(219,39,119,0.45)"; }}
          onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 30px rgba(219,39,119,0.3)"; }}
        >
          Explore All Services →
        </button>
      </motion.div>
    </section>
  );
}