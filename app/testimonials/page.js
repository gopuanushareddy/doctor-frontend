"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    quote: "After three failed attempts elsewhere, Dr Poornima's team gave us hope — and our daughter. We can never repay that gift.",
    name: "Priya & Arjun Sharma",
    location: "Hyderabad",
    tag: "IVF Success",
    avatar: "P",
    color: "#db2777",
    light: "#fce7f3",
    stars: 5,
  },
  {
    quote: "The care here is unlike anything I've experienced. They treated us like family through every anxious moment of our journey.",
    name: "Meena Reddy",
    location: "Secunderabad",
    tag: "PCOS Treatment",
    avatar: "M",
    color: "#7c3aed",
    light: "#ede9fe",
    stars: 5,
  },
  {
    quote: "From the first consultation to the delivery room, every single person was warm, knowledgeable, and genuinely invested in us.",
    name: "Kavitha & Suresh Iyer",
    location: "Warangal",
    tag: "Pregnancy Care",
    avatar: "K",
    color: "#0284c7",
    light: "#e0f2fe",
    stars: 5,
  },
  {
    quote: "I was diagnosed with low ovarian reserve and told my chances were slim. Today I'm holding twin boys. True miracle workers.",
    name: "Deepa Nair",
    location: "Vijayawada",
    tag: "IVF Success",
    avatar: "D",
    color: "#16a34a",
    light: "#dcfce7",
    stars: 5,
  },
  {
    quote: "Dr Poornima's honesty and compassion set this clinic apart. No false promises — just real expertise and genuine care.",
    name: "Shalini Verma",
    location: "Hyderabad",
    tag: "Infertility Treatment",
    avatar: "S",
    color: "#ca8a04",
    light: "#fef9c3",
    stars: 5,
  },
];

const stats = [
  { value: "12,400+", label: "Babies Born" },
  { value: "4.9 ★", label: "Average Rating" },
  { value: "98%", label: "Recommend Us" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const total = testimonials.length;

  useEffect(() => {
    const t = setInterval(() => paginate(1), 4500);
    return () => clearInterval(t);
  }, [active]);

  const paginate = (d) => {
    setDir(d);
    setActive((p) => (p + d + total) % total);
  };

  const t = testimonials[active];

  const slideVariants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 80 : -80, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -80 : 80, scale: 0.96, transition: { duration: 0.35 } }),
  };

  return (
    <section
      ref={ref}
      style={{
        padding: "110px 0 120px",
        background: "linear-gradient(160deg, #faf5ff 0%, #fdf2f8 50%, #fff 100%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes float-quote {
          0%,100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
        }
        .quote-mark { animation: float-quote 5s ease-in-out infinite; }

        .nav-btn {
          width: 46px; height: 46px; border-radius: 50%;
          border: 1.5px solid rgba(219,39,119,0.25);
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(12px);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; color: #db2777;
          transition: all 0.25s;
          box-shadow: 0 4px 16px rgba(219,39,119,0.1);
        }
        .nav-btn:hover {
          background: linear-gradient(135deg, #db2777, #9333ea);
          color: white; border-color: transparent;
          transform: scale(1.08);
          box-shadow: 0 8px 24px rgba(219,39,119,0.35);
        }

        .dot {
          height: 7px; border-radius: 50px;
          background: rgba(219,39,119,0.2);
          cursor: pointer;
          transition: all 0.35s;
        }
        .dot.active {
          background: linear-gradient(90deg, #db2777, #9333ea);
          box-shadow: 0 2px 8px rgba(219,39,119,0.35);
        }

        .avatar-thumb {
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'DM Serif Display', serif;
          font-size: 18px; color: white;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
          box-shadow: 0 3px 12px rgba(0,0,0,0.15);
          flex-shrink: 0;
        }
        .avatar-thumb:hover { transform: scale(1.12); }

        .stat-box {
          text-align: center;
          padding: 20px 28px;
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255,255,255,0.9);
          border-radius: 20px;
          box-shadow: 0 4px 24px rgba(219,39,119,0.07);
          flex: 1;
          min-width: 120px;
        }
      `}</style>

      {/* BG orbs */}
      <div style={{ position:"absolute", width:500, height:500, borderRadius:"50%", top:"-120px", right:"-100px", background:"radial-gradient(circle, rgba(244,114,182,0.1), transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:350, height:350, borderRadius:"50%", bottom:"-60px", left:"-80px", background:"radial-gradient(circle, rgba(167,139,250,0.1), transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(219,39,119,0.055) 1.5px, transparent 1.5px)", backgroundSize:"36px 36px", pointerEvents:"none" }} />

      {/* Header */}
      <div style={{ textAlign:"center", marginBottom:64, padding:"0 24px", position:"relative", zIndex:1 }}>
        <motion.div
          initial={{ opacity:0, y:-14 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.55 }}
          style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(219,39,119,0.08)", border:"1px solid rgba(219,39,119,0.2)", borderRadius:50, padding:"6px 16px", marginBottom:20 }}
        >
          <span style={{ width:6, height:6, borderRadius:"50%", background:"#db2777", display:"inline-block" }} />
          <span style={{ fontSize:12, color:"#be185d", fontWeight:500, letterSpacing:"0.07em", textTransform:"uppercase" }}>Real Stories</span>
        </motion.div>

        <motion.h2
          initial={{ opacity:0, y:28 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ delay:0.15, duration:0.7, ease:[0.22,1,0.36,1] }}
          style={{ fontFamily:"'DM Serif Display', serif", fontSize:"clamp(34px, 4vw, 54px)", fontWeight:400, color:"#1a0a2e", margin:"0 0 16px", letterSpacing:"-0.02em", lineHeight:1.15 }}
        >
          Families We've <em style={{ color:"#db2777" }}>Helped Create</em>
        </motion.h2>

        <motion.p
          initial={{ opacity:0, y:14 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ delay:0.28, duration:0.6 }}
          style={{ fontSize:16, color:"#9ca3af", maxWidth:440, margin:"0 auto", lineHeight:1.7, fontWeight:300 }}
        >
          Every journey is unique. Here are a few of the thousands of families who trusted us with their dream.
        </motion.p>
      </div>

      {/* Main card carousel */}
      <motion.div
        initial={{ opacity:0, y:40 }}
        animate={inView ? { opacity:1, y:0 } : {}}
        transition={{ delay:0.4, duration:0.7 }}
        style={{ maxWidth:780, margin:"0 auto", padding:"0 32px", position:"relative", zIndex:1 }}
      >
        {/* Card */}
        <div style={{ position:"relative", minHeight:300 }}>
          {/* Floating quote mark */}
          <div className="quote-mark" style={{ position:"absolute", top:-28, left:24, fontFamily:"'DM Serif Display', serif", fontSize:120, lineHeight:1, color:"rgba(219,39,119,0.08)", pointerEvents:"none", userSelect:"none", zIndex:0 }}>
            "
          </div>

          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={active}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                background:"rgba(255,255,255,0.88)",
                backdropFilter:"blur(20px)",
                border:`1.5px solid ${t.light}`,
                borderRadius:32,
                padding:"48px 44px 40px",
                boxShadow:`0 20px 60px rgba(0,0,0,0.09), 0 0 0 1px rgba(255,255,255,0.7)`,
                position:"relative",
                zIndex:1,
              }}
            >
              {/* Tag */}
              <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:t.light, borderRadius:50, padding:"5px 14px", marginBottom:24 }}>
                <span style={{ width:5, height:5, borderRadius:"50%", background:t.color, display:"inline-block" }} />
                <span style={{ fontSize:12, color:t.color, fontWeight:500, letterSpacing:"0.05em" }}>{t.tag}</span>
              </div>

              {/* Stars */}
              <div style={{ display:"flex", gap:3, marginBottom:20 }}>
                {Array.from({ length: t.stars }).map((_,i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity:0, scale:0 }}
                    animate={{ opacity:1, scale:1 }}
                    transition={{ delay:0.1 + i*0.06, type:"spring", stiffness:300 }}
                    style={{ fontSize:18, color:"#f59e0b" }}
                  >★</motion.span>
                ))}
              </div>

              {/* Quote */}
              <p style={{ fontFamily:"'DM Serif Display', serif", fontSize:"clamp(18px, 2.2vw, 23px)", color:"#1a0a2e", lineHeight:1.65, fontWeight:400, fontStyle:"italic", margin:"0 0 32px" }}>
                "{t.quote}"
              </p>

              {/* Author row */}
              <div style={{ display:"flex", alignItems:"center", gap:14, borderTop:"1px solid rgba(0,0,0,0.06)", paddingTop:24 }}>
                <div style={{ width:52, height:52, borderRadius:"50%", background:`linear-gradient(135deg, ${t.color}, ${t.color}99)`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'DM Serif Display', serif", fontSize:22, color:"white", flexShrink:0, boxShadow:`0 4px 16px ${t.color}44` }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:17, color:"#1a0a2e" }}>{t.name}</div>
                  <div style={{ fontSize:13, color:"#9ca3af", marginTop:2, fontWeight:300 }}>📍 {t.location}</div>
                </div>

                {/* Verified badge */}
                <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:5, background:"#f0fdf4", border:"1px solid #bbf7d0", borderRadius:50, padding:"5px 12px" }}>
                  <span style={{ fontSize:12 }}>✓</span>
                  <span style={{ fontSize:11, color:"#16a34a", fontWeight:500 }}>Verified Patient</span>
                </div>
              </div>

              {/* Accent corner */}
              <div style={{ position:"absolute", bottom:0, right:0, width:80, height:80, borderRadius:"0 0 32px 0", background:`linear-gradient(225deg, ${t.light}, transparent)`, pointerEvents:"none" }} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls row */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:32, flexWrap:"wrap", gap:16 }}>
          {/* Avatars */}
          <div style={{ display:"flex", gap:8, alignItems:"center" }}>
            {testimonials.map((tm, i) => (
              <div
                key={i}
                className="avatar-thumb"
                onClick={() => { setDir(i > active ? 1 : -1); setActive(i); }}
                style={{
                  background: `linear-gradient(135deg, ${tm.color}, ${tm.color}99)`,
                  opacity: active === i ? 1 : 0.45,
                  transform: active === i ? "scale(1.15)" : "scale(1)",
                  boxShadow: active === i ? `0 4px 16px ${tm.color}55` : "none",
                }}
              >
                {tm.avatar}
              </div>
            ))}
          </div>

          {/* Dots + nav */}
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div style={{ display:"flex", gap:6, alignItems:"center" }}>
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`dot${active === i ? " active" : ""}`}
                  style={{ width: active === i ? 24 : 7 }}
                  onClick={() => { setDir(i > active ? 1 : -1); setActive(i); }}
                />
              ))}
            </div>
            <div style={{ display:"flex", gap:8 }}>
              <button className="nav-btn" onClick={() => paginate(-1)}>←</button>
              <button className="nav-btn" onClick={() => paginate(1)}>→</button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity:0, y:32 }}
        animate={inView ? { opacity:1, y:0 } : {}}
        transition={{ delay:0.75, duration:0.7 }}
        style={{ maxWidth:700, margin:"60px auto 0", padding:"0 32px", display:"flex", gap:16, flexWrap:"wrap" }}
      >
        {stats.map((s, i) => (
          <div key={i} className="stat-box">
            <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:28, color:"#db2777", lineHeight:1 }}>{s.value}</div>
            <div style={{ fontSize:12, color:"#9ca3af", marginTop:6, fontWeight:300, textTransform:"uppercase", letterSpacing:"0.05em" }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}