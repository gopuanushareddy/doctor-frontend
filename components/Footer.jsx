"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = {
  Services: ["IVF Treatment", "Pregnancy Care", "PCOS / PCOD", "Infertility Treatment", "Diagnostic Scans", "Women's Health"],
  "Quick Links": ["About Us", "Our Doctors", "Patient Stories", "Blog & Resources", "Book Appointment", "Contact Us"],
  Contact: ["📍 Jubilee Hills, Hyderabad", "📞 +91 98765 43210", "✉️ care@drpoornima.in", "🕐 Mon–Sat: 9am – 7pm", "🚨 Emergency: 24 / 7"],
};

const socials = [
  { label: "Facebook", icon: "f", color: "#1877f2" },
  { label: "Instagram", icon: "▲", color: "#e1306c" },
  { label: "YouTube", icon: "▶", color: "#ff0000" },
  { label: "WhatsApp", icon: "◉", color: "#25d366" },
];

const awards = ["FOGSI Certified", "ISO 9001:2015", "JCI Accredited", "NABH Accredited"];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      ref={ref}
      style={{
        background: "linear-gradient(170deg, #0f0520 0%, #1a0a2e 60%, #0d0118 100%)",
        color: "white",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes shimmer-footer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-glow {
          0%,100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }

        .footer-link {
          display: block;
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          padding: 5px 0;
          font-weight: 300;
          transition: color 0.25s, transform 0.25s;
          cursor: pointer;
        }
        .footer-link:hover {
          color: #f9a8d4;
          transform: translateX(5px);
        }

        .social-btn {
          width: 40px; height: 40px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; font-weight: 700;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          cursor: pointer;
          transition: all 0.25s;
          color: rgba(255,255,255,0.6);
        }
        .social-btn:hover {
          transform: translateY(-4px) scale(1.1);
          border-color: rgba(219,39,119,0.5);
          background: rgba(219,39,119,0.15);
          color: #f9a8d4;
          box-shadow: 0 8px 24px rgba(219,39,119,0.25);
        }

        .award-chip {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px;
          padding: 6px 14px;
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          transition: all 0.25s;
          letter-spacing: 0.03em;
        }
        .award-chip:hover {
          background: rgba(219,39,119,0.12);
          border-color: rgba(219,39,119,0.3);
          color: #f9a8d4;
        }

        .footer-col-title {
          font-family: 'DM Serif Display', serif;
          font-size: 16px;
          font-weight: 400;
          color: white;
          margin: 0 0 18px;
          letter-spacing: -0.01em;
        }

        .newsletter-input {
          flex: 1;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px 0 0 50px;
          padding: 11px 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: white;
          outline: none;
          transition: border-color 0.25s;
        }
        .newsletter-input::placeholder { color: rgba(255,255,255,0.3); }
        .newsletter-input:focus { border-color: rgba(219,39,119,0.5); }

        .newsletter-btn {
          background: linear-gradient(135deg, #db2777, #9333ea);
          border: none; color: white;
          padding: 11px 22px;
          border-radius: 0 50px 50px 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .newsletter-btn:hover { opacity: 0.88; }
      `}</style>

      {/* Background orbs */}
      <div style={{ position:"absolute", width:500, height:500, borderRadius:"50%", top:"-200px", right:"-100px", background:"radial-gradient(circle, rgba(219,39,119,0.12), transparent 65%)", pointerEvents:"none", animation:"pulse-glow 6s ease-in-out infinite" }} />
      <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", bottom:"-120px", left:"-80px", background:"radial-gradient(circle, rgba(147,51,234,0.1), transparent 65%)", pointerEvents:"none", animation:"pulse-glow 8s ease-in-out infinite 2s" }} />
      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize:"32px 32px", pointerEvents:"none" }} />

      {/* Top CTA banner */}
      <motion.div
        initial={{ opacity:0, y:-20 }}
        animate={inView ? { opacity:1, y:0 } : {}}
        transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}
        style={{
          borderBottom:"1px solid rgba(255,255,255,0.07)",
          padding:"36px 40px",
          display:"flex", alignItems:"center", justifyContent:"space-between",
          flexWrap:"wrap", gap:20,
          position:"relative", zIndex:1,
          background:"rgba(255,255,255,0.02)",
        }}
      >
        <div>
          <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:"clamp(20px,2.5vw,28px)", fontWeight:400, lineHeight:1.2 }}>
            Ready to start your{" "}
            <span style={{
              background:"linear-gradient(90deg, #f472b6, #c084fc, #f472b6)",
              backgroundSize:"200% auto",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
              backgroundClip:"text",
              animation:"shimmer-footer 4s linear infinite",
            }}>
              journey to parenthood?
            </span>
          </div>
          <div style={{ fontSize:14, color:"rgba(255,255,255,0.4)", marginTop:6, fontWeight:300 }}>
            Our specialists are available Monday – Saturday, 9am to 7pm.
          </div>
        </div>
        <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
          <button style={{
            background:"linear-gradient(135deg, #db2777, #9333ea)",
            color:"white", border:"none", padding:"12px 28px",
            borderRadius:50, fontFamily:"'DM Sans', sans-serif",
            fontSize:14, fontWeight:500, cursor:"pointer",
            boxShadow:"0 8px 28px rgba(219,39,119,0.35)",
            transition:"transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e=>{ e.target.style.transform="translateY(-2px)"; e.target.style.boxShadow="0 14px 36px rgba(219,39,119,0.5)"; }}
          onMouseLeave={e=>{ e.target.style.transform=""; e.target.style.boxShadow="0 8px 28px rgba(219,39,119,0.35)"; }}
          >
            Book Appointment →
          </button>
          <button style={{
            background:"transparent", color:"rgba(255,255,255,0.7)",
            border:"1px solid rgba(255,255,255,0.2)", padding:"12px 24px",
            borderRadius:50, fontFamily:"'DM Sans', sans-serif",
            fontSize:14, fontWeight:400, cursor:"pointer",
            transition:"all 0.2s",
          }}
          onMouseEnter={e=>{ e.target.style.borderColor="rgba(219,39,119,0.5)"; e.target.style.color="#f9a8d4"; }}
          onMouseLeave={e=>{ e.target.style.borderColor="rgba(255,255,255,0.2)"; e.target.style.color="rgba(255,255,255,0.7)"; }}
          >
            📞 Call Us Now
          </button>
        </div>
      </motion.div>

      {/* Main footer grid */}
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"64px 40px 48px", position:"relative", zIndex:1 }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48, flexWrap:"wrap" }}>

          {/* Brand column */}
          <motion.div
            initial={{ opacity:0, y:30 }}
            animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ delay:0.15, duration:0.65, ease:[0.22,1,0.36,1] }}
          >
            {/* Logo */}
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
              <div style={{ width:44, height:44, borderRadius:14, background:"linear-gradient(135deg, #db2777, #9333ea)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, boxShadow:"0 6px 20px rgba(219,39,119,0.4)" }}>
                💗
              </div>
              <div>
                <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:18, fontWeight:400, letterSpacing:"-0.01em" }}>Dr Poornima</div>
                <div style={{ fontSize:11, color:"rgba(255,255,255,0.35)", letterSpacing:"0.08em", textTransform:"uppercase", marginTop:1 }}>Fertility & Women's Health</div>
              </div>
            </div>

            <p style={{ fontSize:14, color:"rgba(255,255,255,0.45)", lineHeight:1.8, fontWeight:300, marginBottom:24, maxWidth:280 }}>
              Over two decades of compassionate, evidence-based reproductive care — helping thousands of families realise their dream of parenthood.
            </p>

            {/* Socials */}
            <div style={{ display:"flex", gap:8, marginBottom:28 }}>
              {socials.map((s) => (
                <button key={s.label} className="social-btn" title={s.label}>{s.icon}</button>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.35)", marginBottom:10, textTransform:"uppercase", letterSpacing:"0.06em" }}>Health Tips Newsletter</div>
              <div style={{ display:"flex" }}>
                <input className="newsletter-input" type="email" placeholder="your@email.com" />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items], ci) => (
            <motion.div
              key={title}
              initial={{ opacity:0, y:30 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay:0.25 + ci * 0.1, duration:0.65, ease:[0.22,1,0.36,1] }}
            >
              <div className="footer-col-title">{title}</div>
              {items.map((item) => (
                <a key={item} className="footer-link">{item}</a>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Awards row */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ delay:0.65, duration:0.6 }}
          style={{ marginTop:52, paddingTop:32, borderTop:"1px solid rgba(255,255,255,0.07)", display:"flex", flexWrap:"wrap", gap:10, justifyContent:"center" }}
        >
          {awards.map((a) => (
            <span key={a} className="award-chip">
              <span style={{ color:"#f472b6" }}>✦</span> {a}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity:0 }}
        animate={inView ? { opacity:1 } : {}}
        transition={{ delay:0.8, duration:0.6 }}
        style={{
          borderTop:"1px solid rgba(255,255,255,0.06)",
          padding:"20px 40px",
          display:"flex", alignItems:"center", justifyContent:"space-between",
          flexWrap:"wrap", gap:12,
          position:"relative", zIndex:1,
          background:"rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ fontSize:13, color:"rgba(255,255,255,0.3)", fontWeight:300 }}>
          © 2026 Dr Poornima Clinic. All rights reserved.
        </div>
        <div style={{ display:"flex", gap:24 }}>
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
            <a key={l} style={{ fontSize:13, color:"rgba(255,255,255,0.3)", cursor:"pointer", textDecoration:"none", transition:"color 0.2s", fontWeight:300 }}
              onMouseEnter={e=>e.target.style.color="#f9a8d4"}
              onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.3)"}
            >{l}</a>
          ))}
        </div>
        <div style={{ fontSize:12, color:"rgba(255,255,255,0.2)", fontWeight:300 }}>
          Made with 💗 in Hyderabad
        </div>
      </motion.div>
    </footer>
  );
}