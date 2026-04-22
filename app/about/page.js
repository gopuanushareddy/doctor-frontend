"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const credentials = [
  { icon: "🎓", label: "Qualifications", value: "MBBS, MS, ICOG, FMAS" },
  { icon: "💼", label: "Designation", value: "Senior Fertility Consultant" },
  { icon: "⏳", label: "Experience", value: "10+ Years" },
  { icon: "📍", label: "Clinic Location", value: "LB Nagar, Hyderabad" },
];

const specialties = ["IVF & ART", "PCOS / PCOD", "Recurrent Pregnancy Loss", "Laparoscopy", "High-Risk Pregnancy", "Egg Freezing"];

const highlights = [
  { value: "5,000+", label: "Patients Treated" },
  { value: "98%", label: "Success Rate" },
  { value: "10+", label: "Years Experience" },
];

export default function AboutDoctor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredCred, setHoveredCred] = useState(null);

  return (
    <section
      ref={ref}
      style={{
        padding: "110px 0 120px",
        background: "linear-gradient(150deg, #fff 0%, #fdf2f8 45%, #f5f3ff 100%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes float-img {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes rotate-ring {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer-name {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-dot {
          0%,100% { transform: scale(1); opacity:1; }
          50% { transform: scale(1.6); opacity:0.4; }
        }

        .img-container { animation: float-img 6s ease-in-out infinite; }

        .cred-card {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 16px 18px;
          border-radius: 18px;
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255,255,255,0.9);
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          cursor: default;
          transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s, border-color 0.3s;
        }
        .cred-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 40px rgba(219,39,119,0.12);
          border-color: rgba(219,39,119,0.25);
        }

        .specialty-tag {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 14px;
          border-radius: 50px;
          font-size: 13px; font-weight: 400;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(219,39,119,0.18);
          color: #9d174d;
          transition: all 0.25s;
          cursor: default;
          backdrop-filter: blur(8px);
        }
        .specialty-tag:hover {
          background: linear-gradient(135deg, #fce7f3, #ede9fe);
          border-color: rgba(219,39,119,0.4);
          transform: translateY(-2px);
        }

        .stat-pill {
          text-align: center;
          padding: 18px 22px;
          border-radius: 20px;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255,255,255,0.9);
          box-shadow: 0 4px 20px rgba(219,39,119,0.07);
          flex: 1; min-width: 90px;
        }

        .consult-btn {
          background: linear-gradient(135deg, #db2777, #9333ea);
          color: white; border: none;
          padding: 14px 32px; border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; font-weight: 500;
          cursor: pointer;
          box-shadow: 0 8px 28px rgba(219,39,119,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.02em;
        }
        .consult-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(219,39,119,0.48);
        }
      `}</style>

      {/* BG orbs */}
      <div style={{ position:"absolute", width:480, height:480, borderRadius:"50%", top:"-100px", left:"-100px", background:"radial-gradient(circle, rgba(244,114,182,0.1), transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:360, height:360, borderRadius:"50%", bottom:"-80px", right:"-60px", background:"radial-gradient(circle, rgba(167,139,250,0.1), transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(219,39,119,0.055) 1.5px, transparent 1.5px)", backgroundSize:"36px 36px", pointerEvents:"none" }} />

      <div style={{ maxWidth:1140, margin:"0 auto", padding:"0 36px", position:"relative", zIndex:1 }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.1fr", gap:72, alignItems:"center" }}>

          {/* ── LEFT: image ── */}
          <motion.div
            initial={{ opacity:0, x:-50 }}
            animate={inView ? { opacity:1, x:0 } : {}}
            transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
            style={{ position:"relative" }}
          >
            {/* Rotating dashed ring */}
            <div style={{ position:"absolute", inset:-18, borderRadius:"44% 56% 52% 48% / 48% 44% 56% 52%", border:"1.5px dashed rgba(219,39,119,0.2)", animation:"rotate-ring 18s linear infinite", pointerEvents:"none" }} />
            <div style={{ position:"absolute", inset:-6, borderRadius:"48% 52% 56% 44% / 52% 56% 44% 48%", border:"1px solid rgba(147,51,234,0.12)", animation:"rotate-ring 28s linear infinite reverse", pointerEvents:"none" }} />

            {/* Image */}
            <div
              className="img-container"
              style={{ borderRadius:"40% 44% 48% 40% / 44% 40% 48% 44%", overflow:"hidden", boxShadow:"0 32px 80px rgba(219,39,119,0.2), 0 8px 24px rgba(0,0,0,0.1)", position:"relative" }}
            >
              <img
                src="/doctor.png"
                alt="Dr. Poornima Battala"
                style={{ width:"100%", display:"block", objectFit:"cover", aspectRatio:"3/4" }}
              />
              {/* Gradient overlay */}
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg, rgba(219,39,119,0.06) 0%, transparent 50%, rgba(147,51,234,0.08) 100%)", pointerEvents:"none" }} />
            </div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity:0, scale:0.7 }}
              animate={inView ? { opacity:1, scale:1 } : {}}
              transition={{ delay:0.7, duration:0.5, type:"spring", stiffness:260 }}
              style={{
                position:"absolute", top:28, right:-24,
                background:"linear-gradient(135deg, #db2777, #9333ea)",
                borderRadius:22, padding:"16px 20px",
                boxShadow:"0 12px 40px rgba(219,39,119,0.42)",
                color:"white", textAlign:"center",
                minWidth:90,
              }}
            >
              <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:30, lineHeight:1 }}>10+</div>
              <div style={{ fontSize:11, opacity:0.85, marginTop:4, fontWeight:300, letterSpacing:"0.04em" }}>Years of<br/>Excellence</div>
            </motion.div>

            {/* Floating availability badge */}
            <motion.div
              initial={{ opacity:0, x:-20 }}
              animate={inView ? { opacity:1, x:0 } : {}}
              transition={{ delay:0.9, duration:0.55, ease:[0.22,1,0.36,1] }}
              style={{
                position:"absolute", bottom:32, left:-28,
                background:"rgba(255,255,255,0.92)", backdropFilter:"blur(16px)",
                border:"1px solid rgba(255,255,255,0.95)", borderRadius:18,
                padding:"12px 18px",
                boxShadow:"0 8px 32px rgba(219,39,119,0.12)",
                display:"flex", alignItems:"center", gap:10,
              }}
            >
              <div style={{ width:10, height:10, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 0 4px rgba(34,197,94,0.2)", animation:"pulse-dot 1.8s ease-in-out infinite" }} />
              <div>
                <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:14, color:"#1a0a2e" }}>Available Today</div>
                <div style={{ fontSize:11, color:"#9ca3af", fontWeight:300 }}>Next slot: 10:30 AM</div>
              </div>
            </motion.div>

            {/* Decorative dots */}
            <div style={{ position:"absolute", bottom:-16, right:-8, display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:6, opacity:0.3, pointerEvents:"none" }}>
              {Array.from({ length:20 }).map((_,i) => (
                <div key={i} style={{ width:4, height:4, borderRadius:"50%", background:"#db2777" }} />
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: content ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity:0, y:-14 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.55 }}
              style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(219,39,119,0.08)", border:"1px solid rgba(219,39,119,0.2)", borderRadius:50, padding:"6px 16px", marginBottom:22 }}
            >
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#db2777", display:"inline-block" }} />
              <span style={{ fontSize:12, color:"#be185d", fontWeight:500, letterSpacing:"0.07em", textTransform:"uppercase" }}>Meet Your Doctor</span>
            </motion.div>

            {/* Name */}
            <motion.h2
              initial={{ opacity:0, y:28 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay:0.15, duration:0.7, ease:[0.22,1,0.36,1] }}
              style={{ fontFamily:"'DM Serif Display', serif", fontSize:"clamp(32px,3.8vw,50px)", fontWeight:400, color:"#1a0a2e", margin:"0 0 6px", letterSpacing:"-0.02em", lineHeight:1.15 }}
            >
              Dr. Poornima
            </motion.h2>
            <motion.h2
              initial={{ opacity:0, y:28 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay:0.24, duration:0.7, ease:[0.22,1,0.36,1] }}
              style={{ fontFamily:"'DM Serif Display', serif", fontSize:"clamp(32px,3.8vw,50px)", fontWeight:400, margin:"0 0 24px", letterSpacing:"-0.02em", lineHeight:1.15 }}
            >
              <span style={{
                background:"linear-gradient(90deg, #db2777, #9333ea, #db2777)",
                backgroundSize:"200% auto",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                backgroundClip:"text",
                animation:"shimmer-name 4s linear infinite",
              }}>Battala</span>
            </motion.h2>

            {/* Bio */}
            <motion.p
              initial={{ opacity:0, y:16 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay:0.32, duration:0.65 }}
              style={{ fontSize:15, color:"#6b7280", lineHeight:1.85, fontWeight:300, margin:"0 0 28px", maxWidth:480 }}
            >
              A compassionate Gynaecologist and Fertility Specialist, Dr. Poornima has dedicated over a decade to transforming the lives of women and couples struggling with infertility. Her patient-first philosophy and mastery of advanced reproductive techniques make her one of Hyderabad's most trusted specialists.
            </motion.p>

            {/* Credential cards */}
            <motion.div
              initial={{ opacity:0, y:20 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay:0.42, duration:0.6 }}
              style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:28 }}
            >
              {credentials.map((c, i) => (
                <div
                  key={i}
                  className="cred-card"
                  onMouseEnter={() => setHoveredCred(i)}
                  onMouseLeave={() => setHoveredCred(null)}
                >
                  <div style={{ fontSize:20, flexShrink:0, lineHeight:1, marginTop:2 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize:11, color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:3, fontWeight:400 }}>{c.label}</div>
                    <div style={{ fontSize:14, color:"#1a0a2e", fontWeight:500, lineHeight:1.3 }}>{c.value}</div>
                  </div>
                  <motion.div
                    initial={{ scaleX:0 }}
                    animate={hoveredCred === i ? { scaleX:1 } : { scaleX:0 }}
                    style={{ position:"absolute", bottom:0, left:0, right:0, height:2, borderRadius:"0 0 18px 18px", background:"linear-gradient(90deg, transparent, #db2777, transparent)", transformOrigin:"center" }}
                    transition={{ duration:0.3 }}
                  />
                </div>
              ))}
            </motion.div>

            {/* Specialties */}
            <motion.div
              initial={{ opacity:0, y:16 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay:0.54, duration:0.6 }}
              style={{ marginBottom:32 }}
            >
              <div style={{ fontSize:11, color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:12, fontWeight:400 }}>Areas of Expertise</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {specialties.map((s) => (
                  <span key={s} className="specialty-tag">
                    <span style={{ width:5, height:5, borderRadius:"50%", background:"#db2777", display:"inline-block", flexShrink:0 }} />
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity:0, y:16 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay:0.64, duration:0.6 }}
              style={{ display:"flex", gap:12, marginBottom:32, flexWrap:"wrap" }}
            >
              {highlights.map((h, i) => (
                <div key={i} className="stat-pill">
                  <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:24, color:"#db2777", lineHeight:1 }}>{h.value}</div>
                  <div style={{ fontSize:11, color:"#9ca3af", marginTop:5, fontWeight:300, textTransform:"uppercase", letterSpacing:"0.05em" }}>{h.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity:0, y:16 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay:0.75, duration:0.6 }}
              style={{ display:"flex", alignItems:"center", gap:16, flexWrap:"wrap" }}
            >
              <button className="consult-btn">Book a Consultation →</button>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <div style={{ width:40, height:40, borderRadius:"50%", background:"rgba(219,39,119,0.08)", border:"1px solid rgba(219,39,119,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>📞</div>
                <div>
                  <div style={{ fontSize:11, color:"#9ca3af", fontWeight:300 }}>Call directly</div>
                  <div style={{ fontSize:14, color:"#1a0a2e", fontWeight:500 }}>+91 98765 43210</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}