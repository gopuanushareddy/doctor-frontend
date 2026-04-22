"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Book Appointment",
    desc: "Choose a convenient slot online or call us. Our care coordinators confirm within the hour.",
    icon: "📅",
    color: "#db2777",
    light: "#fce7f3",
    connector: true,
  },
  {
    number: "02",
    title: "Meet Your Doctor",
    desc: "Have a thorough one-on-one consultation. Share your history, ask questions, feel heard.",
    icon: "👩‍⚕️",
    color: "#7c3aed",
    light: "#ede9fe",
    connector: true,
  },
  {
    number: "03",
    title: "Get Diagnosed",
    desc: "Advanced diagnostics and imaging give us a precise picture of your reproductive health.",
    icon: "🔬",
    color: "#0284c7",
    light: "#e0f2fe",
    connector: true,
  },
  {
    number: "04",
    title: "Personalised Plan",
    desc: "Receive a treatment roadmap designed exclusively for your body, timeline, and goals.",
    icon: "📋",
    color: "#16a34a",
    light: "#dcfce7",
    connector: true,
  },
  {
    number: "05",
    title: "Start Treatment",
    desc: "Begin your journey with continuous support, regular check-ins, and expert guidance.",
    icon: "💉",
    color: "#ca8a04",
    light: "#fef9c3",
    connector: true,
  },
  {
    number: "06",
    title: "Celebrate Life",
    desc: "Reach your milestone. Our team celebrates every success alongside your family.",
    icon: "🎉",
    color: "#e11d48",
    light: "#fce7f3",
    connector: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.13, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(null);

  return (
    <section
      ref={ref}
      style={{
        padding: "110px 0 120px",
        background: "linear-gradient(170deg, #fff 0%, #fdf2f8 50%, #f5f3ff 100%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes float-slow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes draw-line {
          from { stroke-dashoffset: 1; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.6; }
          80%,100% { transform: scale(2.2); opacity: 0; }
        }

        .step-card {
          position: relative;
          border-radius: 28px;
          padding: 36px 28px 32px;
          border: 1.5px solid rgba(255,255,255,0.95);
          box-shadow: 0 4px 28px rgba(0,0,0,0.06);
          background: white;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s;
          overflow: hidden;
        }
        .step-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.12);
        }
        .step-card .bg-blob {
          position: absolute;
          width: 130px; height: 130px;
          border-radius: 50%;
          top: -30px; right: -30px;
          transition: transform 0.5s, opacity 0.4s;
          opacity: 0.25;
        }
        .step-card:hover .bg-blob { transform: scale(1.6); opacity: 0.45; }

        .icon-ring {
          width: 68px; height: 68px;
          border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          font-size: 30px;
          margin-bottom: 22px;
          position: relative;
          transition: transform 0.35s;
          box-shadow: 0 4px 18px rgba(0,0,0,0.1);
        }
        .step-card:hover .icon-ring { transform: rotate(-8deg) scale(1.12); }

        .ping-dot {
          position: absolute; inset: 0; border-radius: inherit;
          animation: ping 1.8s cubic-bezier(0,0,0.2,1) infinite;
        }

        .step-number {
          position: absolute;
          top: 22px; right: 26px;
          font-family: 'DM Serif Display', serif;
          font-size: 48px;
          font-weight: 400;
          line-height: 1;
          transition: opacity 0.3s;
        }

        .connector-line {
          position: absolute;
          top: 52px;
          right: -30px;
          width: 60px;
          height: 2px;
          z-index: 2;
        }
        .connector-line svg line {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          stroke-dasharray: 100%;
          animation: draw-line 1.2s ease forwards;
        }
      `}</style>

      {/* BG decorative orbs */}
      <div style={{ position:"absolute", width:500, height:500, borderRadius:"50%", top:"-120px", left:"-100px", background:"radial-gradient(circle, rgba(244,114,182,0.09), transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", bottom:"-80px", right:"-60px", background:"radial-gradient(circle, rgba(167,139,250,0.1), transparent 70%)", pointerEvents:"none" }} />

      {/* Grid dots */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(219,39,119,0.07) 1.5px, transparent 1.5px)", backgroundSize:"36px 36px", pointerEvents:"none" }} />

      {/* Header */}
      <div style={{ textAlign:"center", marginBottom:72, padding:"0 24px", position:"relative", zIndex:1 }}>
        <motion.div
          initial={{ opacity:0, y:-14 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.55 }}
          style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(219,39,119,0.08)", border:"1px solid rgba(219,39,119,0.2)", borderRadius:50, padding:"6px 16px", marginBottom:20 }}
        >
          <span style={{ width:6, height:6, borderRadius:"50%", background:"#db2777", display:"inline-block" }} />
          <span style={{ fontSize:12, color:"#be185d", fontWeight:500, letterSpacing:"0.07em", textTransform:"uppercase" }}>Simple Steps</span>
        </motion.div>

        <motion.h2
          initial={{ opacity:0, y:28 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ delay:0.15, duration:0.7, ease:[0.22,1,0.36,1] }}
          style={{ fontFamily:"'DM Serif Display', serif", fontSize:"clamp(34px, 4vw, 54px)", fontWeight:400, color:"#1a0a2e", margin:"0 0 16px", letterSpacing:"-0.02em", lineHeight:1.15 }}
        >
          Your Journey to <em style={{ color:"#db2777" }}>Parenthood</em>
        </motion.h2>

        <motion.p
          initial={{ opacity:0, y:14 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ delay:0.28, duration:0.6 }}
          style={{ fontSize:16, color:"#9ca3af", maxWidth:460, margin:"0 auto", lineHeight:1.7, fontWeight:300 }}
        >
          Six transparent, caring steps from first hello to joyful outcome.
        </motion.p>
      </div>

      {/* Steps grid */}
      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(290px, 1fr))",
          gap:28,
          maxWidth:1080,
          margin:"0 auto",
          padding:"0 32px",
          position:"relative",
          zIndex:1,
        }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="step-card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            {/* BG blob */}
            <div className="bg-blob" style={{ background: `radial-gradient(circle, ${step.color}, transparent 70%)` }} />

            {/* Step number watermark */}
            <div className="step-number" style={{ color: step.color, opacity: active === i ? 0.07 : 0.05 }}>
              {step.number}
            </div>

            {/* Icon */}
            <div className="icon-ring" style={{ background: step.light }}>
              {active === i && (
                <div className="ping-dot" style={{ background: step.color, opacity: 0.2 }} />
              )}
              <span style={{ position:"relative", zIndex:1 }}>{step.icon}</span>
            </div>

            {/* Step pill */}
            <div style={{ display:"inline-flex", alignItems:"center", gap:6, background: step.light, borderRadius:50, padding:"4px 12px", marginBottom:14 }}>
              <span style={{ fontFamily:"'DM Serif Display', serif", fontSize:11, color: step.color, fontWeight:700, letterSpacing:"0.08em" }}>STEP {step.number}</span>
            </div>

            <h3 style={{ fontFamily:"'DM Serif Display', serif", fontSize:22, fontWeight:400, color:"#1a0a2e", margin:"0 0 10px", letterSpacing:"-0.01em" }}>
              {step.title}
            </h3>

            <p style={{ fontSize:14, color:"#6b7280", lineHeight:1.75, fontWeight:300, margin:0 }}>
              {step.desc}
            </p>

            {/* Animated bottom accent */}
            <motion.div
              initial={{ scaleX:0 }}
              animate={active === i ? { scaleX:1 } : { scaleX:0 }}
              transition={{ duration:0.35, ease:"easeOut" }}
              style={{
                position:"absolute", bottom:0, left:0, right:0, height:3,
                borderRadius:"0 0 28px 28px",
                background:`linear-gradient(90deg, transparent, ${step.color}, transparent)`,
                transformOrigin:"center",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Timeline strip */}
      <motion.div
        initial={{ opacity:0, y:30 }}
        animate={inView ? { opacity:1, y:0 } : {}}
        transition={{ delay:1.0, duration:0.7 }}
        style={{
          maxWidth:900,
          margin:"64px auto 0",
          padding:"0 32px",
          position:"relative",
          zIndex:1,
        }}
      >
        <div style={{
          background:"rgba(255,255,255,0.75)",
          backdropFilter:"blur(16px)",
          border:"1.5px solid rgba(219,39,119,0.15)",
          borderRadius:24,
          padding:"28px 36px",
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
          flexWrap:"wrap",
          gap:20,
          boxShadow:"0 8px 40px rgba(219,39,119,0.08)",
        }}>
          <div>
            <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:20, color:"#1a0a2e", marginBottom:4 }}>Ready to begin?</div>
            <div style={{ fontSize:14, color:"#9ca3af", fontWeight:300 }}>Most patients complete Step 1 in under 2 minutes.</div>
          </div>
          <button
            style={{
              background:"linear-gradient(135deg, #db2777, #9333ea)",
              color:"white", border:"none",
              padding:"13px 32px", borderRadius:50,
              fontFamily:"'DM Sans', sans-serif",
              fontSize:15, fontWeight:500,
              cursor:"pointer",
              boxShadow:"0 8px 28px rgba(219,39,119,0.3)",
              transition:"transform 0.2s, box-shadow 0.2s",
              letterSpacing:"0.02em",
              whiteSpace:"nowrap",
            }}
            onMouseEnter={e => { e.target.style.transform="translateY(-2px)"; e.target.style.boxShadow="0 14px 40px rgba(219,39,119,0.45)"; }}
            onMouseLeave={e => { e.target.style.transform="translateY(0)"; e.target.style.boxShadow="0 8px 28px rgba(219,39,119,0.3)"; }}
          >
            Book Your First Step →
          </button>
        </div>
      </motion.div>
    </section>
  );
}