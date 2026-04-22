"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes shimmer-logo {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes nav-drop {
          from { opacity:0; transform: translateY(-8px); }
          to   { opacity:1; transform: translateY(0); }
        }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: rgba(26,10,46,0.65);
          text-decoration: none;
          padding: 6px 2px;
          position: relative;
          transition: color 0.25s;
          cursor: pointer;
          letter-spacing: 0.01em;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1.5px;
          border-radius: 2px;
          background: linear-gradient(90deg, #db2777, #9333ea);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s cubic-bezier(.22,1,.36,1);
        }
        .nav-link:hover, .nav-link.active { color: #db2777; }
        .nav-link:hover::after, .nav-link.active::after { transform: scaleX(1); }

        .book-btn {
          background: linear-gradient(135deg, #db2777, #9333ea);
          color: white; border: none;
          padding: 10px 22px;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          cursor: pointer;
          box-shadow: 0 4px 18px rgba(219,39,119,0.32);
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }
        .book-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(219,39,119,0.46);
        }

        .hamburger-line {
          display: block;
          height: 1.5px;
          border-radius: 2px;
          background: #1a0a2e;
          transition: transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.25s, width 0.3s;
          transform-origin: center;
        }

        .mobile-link {
          font-family: 'DM Serif Display', serif;
          font-size: 28px;
          font-weight: 400;
          color: #1a0a2e;
          text-decoration: none;
          display: block;
          padding: 10px 0;
          letter-spacing: -0.01em;
          transition: color 0.2s, transform 0.2s;
          border-bottom: 1px solid rgba(219,39,119,0.1);
        }
        .mobile-link:last-child { border-bottom: none; }
        .mobile-link:hover { color: #db2777; transform: translateX(6px); }
      `}</style>

      {/* ── Main Navbar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          fontFamily: "'DM Sans', sans-serif",
          transition: "all 0.4s cubic-bezier(.22,1,.36,1)",
          background: scrolled
            ? "rgba(255,255,255,0.88)"
            : "rgba(255,255,255,0.35)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(219,39,119,0.12)"
            : "1px solid rgba(255,255,255,0.3)",
          boxShadow: scrolled
            ? "0 4px 32px rgba(219,39,119,0.08)"
            : "none",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: scrolled ? 62 : 72, transition: "height 0.4s" }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <motion.div
              whileHover={{ rotate: -8, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ width: 36, height: 36, borderRadius: 11, background: "linear-gradient(135deg, #db2777, #9333ea)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, boxShadow: "0 4px 14px rgba(219,39,119,0.35)", flexShrink: 0 }}
            >
              💗
            </motion.div>
            <div>
              <div style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 17, fontWeight: 400,
                background: "linear-gradient(90deg, #db2777, #9333ea, #db2777)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer-logo 5s linear infinite",
                lineHeight: 1.1,
              }}>
                Dr Poornima
              </div>
              <div style={{ fontSize: 10, color: "#9ca3af", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 300, marginTop: 1 }}>
                Fertility & Women's Health
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: "flex", alignItems: "center", gap: 30 }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link${active === link.label ? " active" : ""}`}
                onClick={() => setActive(link.label)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: phone + CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* Phone — desktop only */}
            <a href="tel:+919876543210" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 7, padding: "7px 14px", borderRadius: 50, border: "1px solid rgba(219,39,119,0.2)", background: "rgba(219,39,119,0.05)", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(219,39,119,0.1)"; e.currentTarget.style.borderColor = "rgba(219,39,119,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(219,39,119,0.05)"; e.currentTarget.style.borderColor = "rgba(219,39,119,0.2)"; }}
              className="desktop-nav"
            >
              <span style={{ fontSize: 13 }}>📞</span>
              <span style={{ fontSize: 12, color: "#be185d", fontWeight: 500 }}>+91 98765 43210</span>
            </a>

            <button className="book-btn" onClick={() => {}}>
              Book Now →
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", flexDirection: "column", gap: 5, width: 28, alignItems: "flex-end" }}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              <span className="hamburger-line" style={{ width: "100%", transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
              <span className="hamburger-line" style={{ width: "66%", opacity: menuOpen ? 0 : 1 }} />
              <span className="hamburger-line" style={{ width: "100%", transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          style={{
            position: "absolute", bottom: 0, left: 0,
            height: 2,
            background: "linear-gradient(90deg, #db2777, #9333ea)",
            transformOrigin: "left",
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.3s",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: "fixed", inset: 0, background: "rgba(15,5,32,0.5)", backdropFilter: "blur(4px)", zIndex: 98 }}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0,
                width: "min(340px, 90vw)",
                background: "linear-gradient(160deg, #fff 0%, #fdf2f8 60%, #f5f3ff 100%)",
                zIndex: 99,
                display: "flex", flexDirection: "column",
                padding: "80px 36px 40px",
                boxShadow: "-16px 0 60px rgba(219,39,119,0.12)",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setMenuOpen(false)}
                style={{ position: "absolute", top: 22, right: 24, background: "rgba(219,39,119,0.08)", border: "1px solid rgba(219,39,119,0.18)", borderRadius: 10, width: 36, height: 36, cursor: "pointer", fontSize: 16, color: "#db2777", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif" }}
              >
                ✕
              </button>

              {/* Logo in drawer */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg, #db2777, #9333ea)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>💗</div>
                <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: "#1a0a2e" }}>Dr Poornima</span>
              </div>

              {/* Links */}
              <nav style={{ flex: 1 }}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="mobile-link"
                      onClick={() => { setActive(link.label); setMenuOpen(false); }}
                      style={{ color: active === link.label ? "#db2777" : "#1a0a2e" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 10 }}
              >
                <button className="book-btn" style={{ width: "100%", padding: "13px 0", fontSize: 15 }}>
                  Book Appointment →
                </button>
                <a href="tel:+919876543210" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 0", borderRadius: 50, border: "1px solid rgba(219,39,119,0.2)", background: "rgba(219,39,119,0.05)", textDecoration: "none", fontSize: 14, color: "#be185d", fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
                  📞 +91 98765 43210
                </a>
              </motion.div>

              {/* Decorative dots */}
              <div style={{ position: "absolute", bottom: 24, right: 24, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5, opacity: 0.2, pointerEvents: "none" }}>
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "#db2777" }} />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Responsive visibility styles */}
      <style>{`
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}