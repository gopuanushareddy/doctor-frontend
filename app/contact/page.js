"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const contactDetails = [
  { icon: "📍", label: "Clinic Address", value: "Plot 42, LB Nagar Main Road,\nHyderabad, Telangana 500074", color: "#db2777", light: "#fce7f3" },
  { icon: "📞", label: "Phone", value: "+91 98765 43210\n+91 90000 12345", color: "#7c3aed", light: "#ede9fe" },
  { icon: "✉️", label: "Email", value: "care@drpoornima.in\nappoint@drpoornima.in", color: "#0284c7", light: "#e0f2fe" },
  { icon: "🕐", label: "Working Hours", value: "Mon – Sat: 9:00 AM – 7:00 PM\nEmergency: 24 / 7", color: "#16a34a", light: "#dcfce7" },
];

const services = ["IVF Treatment", "Pregnancy Care", "PCOS / PCOD", "Infertility Treatment", "Diagnostic Scans", "Women's Health"];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = () => {
    if (form.name && form.phone) setSubmitted(true);
  };

  return (
    <div
      ref={ref}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #fff 0%, #fdf2f8 45%, #f5f3ff 100%)",
        fontFamily: "'DM Sans', sans-serif",
        paddingTop: 100,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes shimmer-h {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float-card {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-pin {
          0%,100% { transform: scale(1); opacity:0.6; }
          50% { transform: scale(1.5); opacity:0; }
        }

        .contact-input {
          width: 100%;
          box-sizing: border-box;
          background: rgba(255,255,255,0.75);
          border: 1.5px solid rgba(219,39,119,0.15);
          border-radius: 14px;
          padding: 13px 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #1a0a2e;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s, background 0.3s;
          backdrop-filter: blur(8px);
        }
        .contact-input::placeholder { color: #c4b5c8; }
        .contact-input:focus {
          border-color: #db2777;
          box-shadow: 0 0 0 4px rgba(219,39,119,0.1);
          background: rgba(255,255,255,0.95);
        }
        .contact-input.active {
          border-color: #db2777;
          box-shadow: 0 0 0 4px rgba(219,39,119,0.1);
          background: rgba(255,255,255,0.95);
        }

        .detail-card {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 20px 22px;
          border-radius: 22px;
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255,255,255,0.95);
          box-shadow: 0 4px 24px rgba(0,0,0,0.05);
          transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s;
          position: relative; overflow: hidden;
        }
        .detail-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 44px rgba(219,39,119,0.1);
        }
        .detail-card .blob {
          position: absolute; width:80px; height:80px; border-radius:50%;
          top:-20px; right:-20px; opacity:0.2;
          transition: opacity 0.3s, transform 0.3s;
        }
        .detail-card:hover .blob { opacity:0.45; transform:scale(1.4); }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #db2777, #9333ea);
          color: white; border: none;
          padding: 15px 0; border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; font-weight: 500;
          cursor: pointer;
          box-shadow: 0 8px 28px rgba(219,39,119,0.32);
          transition: transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.02em;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(219,39,119,0.46);
        }

        .map-container {
          border-radius: 28px; overflow: hidden;
          box-shadow: 0 20px 60px rgba(219,39,119,0.15);
          border: 2px solid rgba(255,255,255,0.9);
          position: relative;
        }
        .map-container::before {
          content: '';
          position: absolute; inset:0; border-radius:28px;
          background: linear-gradient(160deg, rgba(219,39,119,0.06) 0%, transparent 40%);
          pointer-events: none; z-index:1;
        }
      `}</style>

      {/* BG orbs */}
      <div style={{ position:"absolute", width:520, height:520, borderRadius:"50%", top:"-120px", right:"-100px", background:"radial-gradient(circle, rgba(244,114,182,0.1), transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:380, height:380, borderRadius:"50%", bottom:"10%", left:"-80px", background:"radial-gradient(circle, rgba(167,139,250,0.1), transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(219,39,119,0.055) 1.5px, transparent 1.5px)", backgroundSize:"36px 36px", pointerEvents:"none" }} />

      <div style={{ maxWidth:1140, margin:"0 auto", padding:"0 36px 100px", position:"relative", zIndex:1 }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:72 }}>
          <motion.div
            initial={{ opacity:0, y:-14 }}
            animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.55 }}
            style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(219,39,119,0.08)", border:"1px solid rgba(219,39,119,0.2)", borderRadius:50, padding:"6px 16px", marginBottom:20 }}
          >
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#db2777", display:"inline-block" }} />
            <span style={{ fontSize:12, color:"#be185d", fontWeight:500, letterSpacing:"0.07em", textTransform:"uppercase" }}>Get In Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity:0, y:28 }}
            animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ delay:0.15, duration:0.7, ease:[0.22,1,0.36,1] }}
            style={{ fontFamily:"'DM Serif Display', serif", fontSize:"clamp(36px, 4.5vw, 58px)", fontWeight:400, color:"#1a0a2e", margin:"0 0 16px", letterSpacing:"-0.02em", lineHeight:1.15 }}
          >
            We'd Love to <em style={{
              background:"linear-gradient(90deg, #db2777, #9333ea, #db2777)",
              backgroundSize:"200% auto",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
              backgroundClip:"text",
              animation:"shimmer-h 4s linear infinite",
            }}>Hear From You</em>
          </motion.h1>

          <motion.p
            initial={{ opacity:0, y:14 }}
            animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ delay:0.28, duration:0.6 }}
            style={{ fontSize:16, color:"#9ca3af", maxWidth:460, margin:"0 auto", lineHeight:1.7, fontWeight:300 }}
          >
            Book a consultation, ask a question, or simply say hello — our team responds within the hour.
          </motion.p>
        </div>

        {/* Main grid */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.05fr", gap:48, alignItems:"start" }}>

          {/* LEFT: contact details + map */}
          <motion.div
            variants={stagger} initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {/* Detail cards */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:28 }}>
              {contactDetails.map((d, i) => (
                <motion.div key={i} variants={fadeUp} className="detail-card">
                  <div className="blob" style={{ background:`radial-gradient(circle, ${d.color}, transparent)` }} />
                  <div style={{ width:44, height:44, borderRadius:14, background:d.light, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0, boxShadow:`0 4px 14px ${d.color}22` }}>
                    {d.icon}
                  </div>
                  <div style={{ position:"relative", zIndex:1 }}>
                    <div style={{ fontSize:11, color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:4, fontWeight:400 }}>{d.label}</div>
                    {d.value.split("\n").map((line, j) => (
                      <div key={j} style={{ fontSize:13, color:"#1a0a2e", fontWeight: j===0 ? 500 : 300, lineHeight:1.5 }}>{line}</div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div variants={fadeUp} className="map-container">
              {/* Map pin overlay */}
              <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-60%)", zIndex:2, textAlign:"center", pointerEvents:"none" }}>
                <div style={{ width:14, height:14, borderRadius:"50%", background:"#db2777", margin:"0 auto", boxShadow:"0 0 0 6px rgba(219,39,119,0.25)" }}>
                  <div style={{ position:"absolute", width:14, height:14, borderRadius:"50%", background:"rgba(219,39,119,0.3)", animation:"pulse-pin 1.8s ease-in-out infinite" }} />
                </div>
              </div>
              <iframe
                src="https://maps.google.com/maps?q=lb+nagar+hyderabad&output=embed"
                style={{ width:"100%", height:260, display:"block", border:"none", filter:"saturate(0.85) contrast(1.05)" }}
                title="Dr Poornima Clinic Location"
                loading="lazy"
              />
            </motion.div>

            {/* Directions CTA */}
            <motion.a
              variants={fadeUp}
              href="https://maps.google.com/?q=lb+nagar+hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginTop:14, padding:"12px 0", borderRadius:50, border:"1.5px solid rgba(219,39,119,0.25)", background:"rgba(219,39,119,0.05)", textDecoration:"none", color:"#be185d", fontSize:14, fontWeight:500, transition:"all 0.2s", fontFamily:"'DM Sans', sans-serif" }}
              onMouseEnter={e => { e.currentTarget.style.background="rgba(219,39,119,0.1)"; e.currentTarget.style.borderColor="rgba(219,39,119,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="rgba(219,39,119,0.05)"; e.currentTarget.style.borderColor="rgba(219,39,119,0.25)"; }}
            >
              🧭 Get Directions on Google Maps
            </motion.a>
          </motion.div>

          {/* RIGHT: booking form */}
          <motion.div
            initial={{ opacity:0, x:40 }}
            animate={inView ? { opacity:1, x:0 } : {}}
            transition={{ delay:0.3, duration:0.8, ease:[0.22,1,0.36,1] }}
            style={{
              background:"rgba(255,255,255,0.82)", backdropFilter:"blur(20px)",
              border:"1.5px solid rgba(255,255,255,0.95)", borderRadius:32,
              padding:"40px 36px 36px",
              boxShadow:"0 16px 60px rgba(219,39,119,0.1), 0 0 0 1px rgba(255,255,255,0.6)",
              position:"relative", overflow:"hidden",
            }}
          >
            {/* Corner accent */}
            <div style={{ position:"absolute", top:0, right:0, width:120, height:120, borderRadius:"0 32px 0 100%", background:"linear-gradient(225deg, #fce7f3, transparent)", pointerEvents:"none" }} />

            {!submitted ? (
              <>
                <div style={{ marginBottom:28 }}>
                  <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:24, color:"#1a0a2e", marginBottom:6 }}>Book an Appointment</div>
                  <div style={{ fontSize:13, color:"#9ca3af", fontWeight:300 }}>Fill in your details and we'll confirm within the hour.</div>
                </div>

                <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                  {/* Name */}
                  <div>
                    <label style={{ fontSize:11, color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.06em", fontWeight:400, display:"block", marginBottom:7 }}>Full Name *</label>
                    <input
                      className={`contact-input${focused==="name" ? " active" : ""}`}
                      placeholder="e.g. Priya Sharma"
                      value={form.name}
                      onChange={e => setForm({...form, name:e.target.value})}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  {/* Phone + Email row */}
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                    <div>
                      <label style={{ fontSize:11, color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.06em", fontWeight:400, display:"block", marginBottom:7 }}>Phone *</label>
                      <input
                        className={`contact-input${focused==="phone" ? " active" : ""}`}
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={e => setForm({...form, phone:e.target.value})}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize:11, color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.06em", fontWeight:400, display:"block", marginBottom:7 }}>Email</label>
                      <input
                        className={`contact-input${focused==="email" ? " active" : ""}`}
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={e => setForm({...form, email:e.target.value})}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>

                  {/* Service select */}
                  <div>
                    <label style={{ fontSize:11, color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.06em", fontWeight:400, display:"block", marginBottom:7 }}>Service Needed</label>
                    <select
                      className={`contact-input${focused==="service" ? " active" : ""}`}
                      value={form.service}
                      onChange={e => setForm({...form, service:e.target.value})}
                      onFocus={() => setFocused("service")}
                      onBlur={() => setFocused(null)}
                      style={{ appearance:"none", cursor:"pointer" }}
                    >
                      <option value="">Select a service…</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ fontSize:11, color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.06em", fontWeight:400, display:"block", marginBottom:7 }}>Message</label>
                    <textarea
                      className={`contact-input${focused==="message" ? " active" : ""}`}
                      placeholder="Tell us a bit about your concern…"
                      rows={3}
                      value={form.message}
                      onChange={e => setForm({...form, message:e.target.value})}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      style={{ resize:"vertical", minHeight:88 }}
                    />
                  </div>

                  <button className="submit-btn" onClick={handleSubmit}>
                    Send Appointment Request →
                  </button>

                  <p style={{ fontSize:12, color:"#c4b5c8", textAlign:"center", margin:0, fontWeight:300 }}>
                    🔒 Your information is private and never shared.
                  </p>
                </div>
              </>
            ) : (
              /* Success state */
              <motion.div
                initial={{ opacity:0, scale:0.92 }}
                animate={{ opacity:1, scale:1 }}
                transition={{ duration:0.5, ease:[0.22,1,0.36,1] }}
                style={{ textAlign:"center", padding:"40px 20px" }}
              >
                <motion.div
                  initial={{ scale:0 }}
                  animate={{ scale:1 }}
                  transition={{ delay:0.1, type:"spring", stiffness:280, damping:18 }}
                  style={{ width:80, height:80, borderRadius:"50%", background:"linear-gradient(135deg, #fce7f3, #ede9fe)", border:"2px solid rgba(219,39,119,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:36, margin:"0 auto 24px" }}
                >
                  ✅
                </motion.div>
                <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:26, color:"#1a0a2e", marginBottom:10 }}>Request Received!</div>
                <div style={{ fontSize:14, color:"#9ca3af", lineHeight:1.7, fontWeight:300, maxWidth:280, margin:"0 auto 28px" }}>
                  Thank you, <strong style={{ color:"#db2777", fontWeight:500 }}>{form.name}</strong>. Our team will call you at {form.phone} within the hour to confirm your slot.
                </div>
                <button className="submit-btn" style={{ maxWidth:200, margin:"0 auto", display:"block" }} onClick={() => { setSubmitted(false); setForm({ name:"", phone:"", email:"", service:"", message:"" }); }}>
                  Book Another →
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}