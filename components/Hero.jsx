"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const floatingOrbs = [
  { size: 320, top: "5%", left: "-8%", color: "rgba(244,114,182,0.18)", delay: 0 },
  { size: 200, top: "60%", left: "5%", color: "rgba(192,132,252,0.15)", delay: 1.2 },
  { size: 260, top: "-10%", right: "10%", color: "rgba(251,207,232,0.25)", delay: 0.6 },
  { size: 180, bottom: "10%", right: "5%", color: "rgba(167,139,250,0.18)", delay: 1.8 },
];

const stats = [
  { value: "12K+", label: "Babies Born" },
  { value: "98%", label: "Success Rate" },
  { value: "20+", label: "Years Care" },
];

const tags = ["IVF", "Egg Freezing", "IUI", "Surrogacy", "Fertility Testing"];

export default function Hero() {
  const [activeTag, setActiveTag] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTag((p) => (p + 1) % tags.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fdf2f8 0%, #faf5ff 40%, #f0fdf4 100%)",
        fontFamily: "'DM Serif Display', Georgia, serif",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-btn {
          background: linear-gradient(135deg, #db2777, #9333ea);
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 30px rgba(219,39,119,0.35);
          letter-spacing: 0.03em;
        }
        .hero-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #9333ea, #db2777);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .hero-btn:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(219,39,119,0.45); }
        .hero-btn:hover::before { opacity: 1; }
        .hero-btn span { position: relative; z-index: 1; }

        .tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(219,39,119,0.2);
          border-radius: 50px;
          padding: 6px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #9d174d;
          cursor: pointer;
          transition: all 0.2s;
        }
        .tag-pill.active {
          background: linear-gradient(135deg, #fce7f3, #ede9fe);
          border-color: rgba(219,39,119,0.5);
          color: #be185d;
          font-weight: 500;
        }
        .tag-pill:hover { transform: translateY(-1px); }

        .stat-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 16px;
          padding: 14px 20px;
          box-shadow: 0 4px 24px rgba(219,39,119,0.08);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-18px) scale(1.03); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 0.2; }
          100% { transform: scale(0.95); opacity: 0.6; }
        }
        .img-float { animation: float 6s ease-in-out infinite; }
        .pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #db2777 0%, #9333ea 40%, #db2777 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .badge-float {
          animation: float 4s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>

      {/* Floating blurred orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: orb.delay, duration: 1.4, ease: "easeOut" }}
          style={{
            position: "absolute",
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            pointerEvents: "none",
            filter: "blur(2px)",
          }}
        />
      ))}

      {/* Decorative grid lines */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(219,39,119,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 32px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

          {/* LEFT */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.85)", border: "1px solid rgba(219,39,119,0.25)", borderRadius: 50, padding: "7px 16px", marginBottom: 28, backdropFilter: "blur(12px)" }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 0 3px rgba(34,197,94,0.25)" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#6b7280", fontWeight: 400 }}>India's Most Trusted Fertility Centre</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(42px, 5vw, 66px)", fontWeight: 400, lineHeight: 1.1, color: "#1a0a2e", margin: "0 0 8px 0", letterSpacing: "-0.02em" }}
            >
              Care That Creates
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(42px, 5vw, 66px)", fontWeight: 400, lineHeight: 1.1, margin: "0 0 28px 0", letterSpacing: "-0.02em" }}
            >
              <em className="shimmer-text">Beautiful Life</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#6b7280", lineHeight: 1.7, maxWidth: 420, margin: "0 0 32px 0", fontWeight: 300 }}
            >
              Advanced fertility care blending cutting‑edge science with genuine compassion — guiding every family to their greatest joy.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}
            >
              {tags.map((tag, i) => (
                <span key={tag} className={`tag-pill ${activeTag === i ? "active" : ""}`} onClick={() => setActiveTag(i)}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: activeTag === i ? "#db2777" : "#d1d5db", display: "inline-block", transition: "background 0.3s" }} />
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: 20 }}
            >
              <button className="hero-btn"><span>Book Appointment →</span></button>
              <button style={{ background: "none", border: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#9333ea", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }}>
                <span style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(147,51,234,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>▶</span>
                Watch Story
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              style={{ display: "flex", gap: 12, marginTop: 40 }}
            >
              {stats.map((s, i) => (
                <div key={i} className="stat-card">
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, color: "#db2777", fontWeight: 400, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#9ca3af", marginTop: 4, fontWeight: 400 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}
          >
            {/* Pulse ring behind image */}
            <div className="pulse-ring" style={{
              position: "absolute", inset: -20, borderRadius: "40%", border: "2px solid rgba(219,39,119,0.2)", pointerEvents: "none"
            }} />
            <div style={{
              position: "absolute", inset: -8, borderRadius: "36%", border: "1px solid rgba(147,51,234,0.15)", pointerEvents: "none"
            }} />

            {/* Main image */}
            <div className="img-float" style={{ borderRadius: "36% 40% 44% 36% / 40% 36% 44% 40%", overflow: "hidden", boxShadow: "0 30px 80px rgba(219,39,119,0.22), 0 10px 30px rgba(0,0,0,0.1)" }}>
              <img
                src="/fertility.png"
                alt="Fertility care"
                style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "4/5" }}
              />
              {/* Color overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(219,39,119,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
            </div>

            {/* Floating badge - top right */}
            <div className="badge-float" style={{
              position: "absolute", top: 24, right: -20,
              background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.9)",
              borderRadius: 20, padding: "12px 18px",
              boxShadow: "0 8px 32px rgba(219,39,119,0.15)",
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ fontSize: 24 }}>👶</span>
              <div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: "#db2777", lineHeight: 1 }}>12,400+</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#9ca3af", marginTop: 2 }}>Successful Births</div>
              </div>
            </div>

            {/* Floating badge - bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5, ease: "backOut" }}
              style={{
                position: "absolute", bottom: 32, left: -28,
                background: "linear-gradient(135deg, #db2777, #9333ea)",
                borderRadius: 20, padding: "14px 20px",
                boxShadow: "0 12px 40px rgba(219,39,119,0.4)",
                color: "white",
              }}
            >
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, opacity: 0.85, marginBottom: 4, fontWeight: 300 }}>Next Available Slot</div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 16 }}>Tomorrow, 10:00 AM</div>
            </motion.div>

            {/* Decorative dots */}
            <div style={{ position: "absolute", bottom: -20, right: -10, display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6, opacity: 0.4, pointerEvents: "none" }}>
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "#db2777" }} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}