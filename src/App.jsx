import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './App.css';
import './products.css';
import './gallery.css';
import './contact.css';
import Store from './Store';
import Gallery from './Gallery';
import Contact from './Contact';

import heroBg from './assets/images/hero_bg.png?w=1920&format=webp';
import aboutProfile from './assets/images/about_profile.png?w=800&format=webp';
import portfolioCarChase from './assets/images/portfolio_car_chase.png?w=800&format=webp';
import galleryFpvWaterfall from './assets/images/gallery_fpv_waterfall.png?w=800&format=webp';
import galleryFpvUrban from './assets/images/gallery_fpv_urban.png?w=800&format=webp';
import heroBgFinal from './assets/images/hero_bg_final.png?w=800&format=webp';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainContent() {
  const [activeFpvIndex, setActiveFpvIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Only auto-scroll on mobile
      if (window.innerWidth < 768) {
        setActiveFpvIndex((prev) => (prev + 1) % 4);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const grid = document.querySelector('.fpv-explainer-grid');
    if (grid && window.innerWidth < 768) {
      const cardWidth = grid.querySelector('.fpv-card').offsetWidth;
      const gap = 16; // 1rem
      const scrollPos = activeFpvIndex * (cardWidth + gap);
      grid.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
  }, [activeFpvIndex]);

  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <img src={heroBg} alt="Drone Background" className="hero-bg" />

        <div className="hero-content">
          <h1>Capture<br />The Impossible</h1>
          <h2>Professional FPV Cinema & Drone Services</h2>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Projects</p>
            </div>
            <div className="stat-item">
              <h3>8K</h3>
              <p>Cinema Grade</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', width: '100%', flexWrap: 'wrap' }}>
            <Link to="/work" className="cta-button primary" style={{ textAlign: 'center', textDecoration: 'none', display: 'inline-block' }}>
              View Work
            </Link>
            <Link to="/store" className="cta-button secondary" style={{ textAlign: 'center', textDecoration: 'none', display: 'inline-block' }}>
              Visit Store
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="section" style={{ background: 'var(--bg-gradient)' }}>
        <div className="about-container">
          <div className="about-image">
            <img src={aboutProfile} alt="Aryan FPV Profile" />
          </div>
          <div className="about-content">
            <h5 style={{ color: 'var(--primary-color)', textShadow: 'var(--text-shadow-primary)', letterSpacing: '2px', marginBottom: '0.5rem' }}>THE PILOT</h5>
            <h2>Behind The Goggles</h2>
            <p>
              I'm Aryan, a professional FPV drone pilot and cinematographer based in Mangalore, Karnataka.
              With over 5 years of flight experience, I specialize in capturing dynamic, high-speed, and cinematic footage that standard drones simply can't achieve.
            </p>
            <p>
              From chasing <strong>drift cars</strong> to diving down <strong>waterfalls</strong> and navigating tight <strong>indoor spaces</strong>,
              my mission is to deliver unique perspectives that elevate your visual storytelling.
            </p>
            <div className="about-stats">
              <div className="stat-box">
                <h3>100%</h3>
                <p>Safety Record</p>
              </div>
              <div className="stat-box">
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-is-fpv" className="section" style={{ background: 'var(--bg-gradient)' }}>
        <div className="section-header">
          <h2 className="section-title">What is FPV?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px' }}>
            <strong>First Person View (FPV)</strong> puts the pilot inside the drone.
            Unlike standard drones that float and observe, FPV drones are manually piloted to <strong>fly and interact</strong>.
            This allows for dynamic shots, high speeds, and complex maneuvers that mimic the movement of a bird or a roller coaster, providing an immersive experience that traditional cameras physically cannot achieve.
          </p>
        </div>

        <div className="fpv-explainer-grid">
          <div className="fpv-card">
            <div className="fpv-icon">🚀</div>
            <h3>Unmatched Speed</h3>
            <p>Hitting 140km+ to chase cars, bikes, and boats where others can't keep up.</p>
          </div>
          <div className="fpv-card">
            <div className="fpv-icon">🦅</div>
            <h3>True Flight</h3>
            <p>Diving buildings and mountain surfing with continuous, flowing movement.</p>
          </div>
          <div className="fpv-card">
            <div className="fpv-icon">🎯</div>
            <h3>Proximity</h3>
            <p>Flying inches from talent and through tight gaps for intimate, thrilling shots.</p>
          </div>
          <div className="fpv-card">
            <div className="fpv-icon">🎥</div>
            <h3>Cinema Ready</h3>
            <p>Carrying Red Komodo / GoPro 5K cameras for steady, high-grade visuals.</p>
          </div>
        </div>

        <div className="fpv-indicators">
          {[0, 1, 2, 3].map((idx) => (
            <div
              key={idx}
              className={`fpv-dot ${idx === activeFpvIndex ? 'active' : ''}`}
              onClick={() => setActiveFpvIndex(idx)}
            >
              {idx === activeFpvIndex && (
                <div className="fpv-timer-bar"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="safety" className="section">
        <div className="section-header">
          <h2 className="section-title">Safety Protocols</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Mission Readiness Status</p>
        </div>

        {/* HUD Container */}
        <div style={{
          position: 'relative',
          border: '1px solid var(--glass-border)',
          background: 'var(--glass-bg)',
          padding: '2rem',
          maxWidth: '1000px',
          margin: '0 auto',
          borderRadius: '4px'
        }}>
          {/* Tech Corners */}
          <div style={{ position: 'absolute', top: -1, left: -1, width: 20, height: 20, borderTop: '2px solid var(--primary-color)', borderLeft: '2px solid var(--primary-color)' }}></div>
          <div style={{ position: 'absolute', top: -1, right: -1, width: 20, height: 20, borderTop: '2px solid var(--primary-color)', borderRight: '2px solid var(--primary-color)' }}></div>
          <div style={{ position: 'absolute', bottom: -1, left: -1, width: 20, height: 20, borderBottom: '2px solid var(--primary-color)', borderLeft: '2px solid var(--primary-color)' }}></div>
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: 20, height: 20, borderBottom: '2px solid var(--primary-color)', borderRight: '2px solid var(--primary-color)' }}></div>

          {/* Status Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--card-border)',
            paddingBottom: '1rem',
            marginBottom: '2rem',
            fontFamily: 'monospace',
            color: 'var(--primary-color)',
            fontSize: '0.8rem',
            letterSpacing: '1px'
          }}>
            <span>// SYS.STATUS: NOMINAL</span>
            <span>ID: ARYAN_FPV_01</span>
          </div>

          {/* Grid Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem 2rem'
          }}>
            {/* Item 1 */}
            <div>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace', fontSize: '1rem' }}>
                <span style={{ color: 'var(--primary-color)' }}>[01]</span> DGCA COMPLIANCE
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', paddingLeft: '1rem', borderLeft: '1px solid var(--card-border)' }}>
                Fully certified under <strong>Digital Sky</strong> regulations.
                Strict adherence to zone protocols (Red/Yellow/Green).
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace', fontSize: '1rem' }}>
                <span style={{ color: 'var(--primary-color)' }}>[02]</span> INSURANCE
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', paddingLeft: '1rem', borderLeft: '1px solid var(--card-border)' }}>
                Commercial <strong>Third-Party Liability</strong> active.
                Risk assessment docs available on request.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace', fontSize: '1rem' }}>
                <span style={{ color: 'var(--primary-color)' }}>[03]</span> STANDARD OPS
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', paddingLeft: '1rem', borderLeft: '1px solid var(--card-border)' }}>
                Mandatory <strong>Spotters</strong> for all complex lines.
                Pre-flight checklists & crowd safety protocols.
              </p>
            </div>

            {/* Item 4 */}
            <div>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace', fontSize: '1rem' }}>
                <span style={{ color: 'var(--primary-color)' }}>[04]</span> PILOT STATS
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', paddingLeft: '1rem', borderLeft: '1px solid var(--card-border)' }}>
                <strong>5+ Years</strong> / 1,000+ Flight Hours.
                Zero incident history in high-proximity scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showreel / Highlights Section */}
      <section id="showreel" className="section" style={{ paddingBottom: '0' }}>
        <div className="section-header">
          <h2 className="section-title">Showreel</h2>
          <p style={{ color: 'var(--text-muted)' }}>Selected cinematic moments</p>
        </div>
        <div className="highlight-scroll">
          {[
            {
              title: "High Speed Chase",
              category: "Action",
              image: portfolioCarChase,
              specs: { camera: "GoPro 11", drone: "5\" Racer", range: "0.5km", res: "5K 60fps", elev: "2m" }
            },
            {
              title: "Nature Dive",
              category: "Cinematic",
              image: galleryFpvWaterfall,
              specs: { camera: "Red Komodo", drone: "Sicco 8\"", range: "1.2km", res: "6K RAW", elev: "150m" }
            },
            {
              title: "Urban Flow",
              category: "Freestyle",
              image: galleryFpvUrban,
              specs: { camera: "DJI O3", drone: "Apex 5\"", range: "800m", res: "4K 60fps", elev: "80m" }
            },
            {
              title: "Neon Nights",
              category: "City",
              image: heroBgFinal,
              specs: { camera: "Sony FX6", drone: "Thicc X8", range: "200m", res: "4K 120fps", elev: "40m" }
            }
          ].map((item, index) => (
            <div key={index} className="highlight-card">
              <img src={item.image} alt={item.title} />
              <div className="highlight-overlay">
                <h3>{item.title}</h3>
                <span className="highlight-category" style={{ color: 'var(--primary-color)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>{item.category}</span>
                <div className="highlight-specs" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.3rem', width: '100%', marginTop: '0.8rem', fontSize: '0.7rem', color: '#ccc' }}>
                  <div title="Camera">📷 {item.specs.camera}</div>
                  <div title="Drone">🚁 {item.specs.drone}</div>
                  <div title="Range">📡 {item.specs.range}</div>
                  <div title="Resolution">📼 {item.specs.res}</div>
                  <div title="Elevation">⛰️ {item.specs.elev}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="gear" className="section">
        <div className="section-header">
          <h2 className="section-title">Flight Grid</h2>
        </div>
        <div className="gear-grid">
          <div className="gear-item">
            <h4>5" Freestyle</h4>
            <p>Apex Frame / DJI O3</p>
          </div>
          <div className="gear-item">
            <h4>3.5" Cinewhoop</h4>
            <p>Indoor / Safe Proximity</p>
          </div>
          <div className="gear-item">
            <h4>7" Long Range</h4>
            <p>Mountain Surfing / GPS</p>
          </div>
          <div className="gear-item">
            <h4>Red Komodo</h4>
            <p>Heavy Lifter Rig</p>
          </div>
        </div>
      </section>



      <section id="delivery" className="section" style={{ background: 'var(--bg-gradient)', position: 'relative' }}>
        {/* Background Decor */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--card-border), transparent)' }}></div>

        <div className="section-header">
          <h2 className="section-title">Mission Deliverables</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Data Handoff Protocols</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          {/* Card 1: Raw Data */}
          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              padding: '2rem',
              borderBottom: '1px solid var(--card-border)',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.02), transparent)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📄</div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Raw Data</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Uncompressed. Full Dynamic Range.</p>
            </div>
            <div style={{ padding: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>FORMAT</span>
                <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>ProRes / RAW / MP4</span>
              </div>
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>RES</span>
                <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>4K / 5.3K / 6K</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>TRANSFER</span>
                <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>SSD / Cloud Drop</span>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px dashed var(--card-border)' }}>
                Best for production houses with internal post-production teams.
              </div>
            </div>
          </div>

          {/* Card 2: Edited Feed */}
          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            transform: 'translateY(-10px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--primary-color)'
            }}></div>
            <div style={{
              padding: '2rem',
              borderBottom: '1px solid var(--card-border)',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.02), transparent)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎬</div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Social Edit</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Synced. Graded. Ready to Post.</p>
            </div>
            <div style={{ padding: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>STYLE</span>
                <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>High Energy / Flow</span>
              </div>
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>AUDIO</span>
                <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>SFX + Music Sync</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>TAT</span>
                <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>24 - 48 Hours</span>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px dashed var(--card-border)' }}>
                Optimized for Instagram Reels, TikTok, and YouTube Shorts.
              </div>
            </div>
          </div>

          {/* Card 3: Live Feed */}
          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              padding: '2rem',
              borderBottom: '1px solid var(--card-border)',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.02), transparent)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📡</div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Live Uplink</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Real-time low latency monitoring.</p>
            </div>
            <div style={{ padding: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>OUTPUT</span>
                <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>HDMI / SDI</span>
              </div>
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>QUALITY</span>
                <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>1080p / 60fps</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>LATENCY</span>
                <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>&lt; 28ms Glass-to-Glass</span>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px dashed var(--card-border)' }}>
                For directors, live events, and broadcast integration.
              </div>
            </div>
          </div>
        </div>
      </section>




    </>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <nav className={scrolled ? 'scrolled' : ''}>
          <div className="logo"><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>ARYAN<span>FPV</span></Link></div>

          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/work" onClick={() => setMenuOpen(false)}>Work</Link>
            <Link to="/store" onClick={() => setMenuOpen(false)}>Store</Link>
            <a href="/#about" onClick={() => setMenuOpen(false)}>About</a>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            <button
              onClick={() => { toggleTheme(); setMenuOpen(false); }}
              className="theme-toggle"
              style={{
                background: 'transparent',
                border: '1px solid var(--nav-border)',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                color: 'var(--text-main)',
                cursor: 'pointer',
                fontSize: '1.2rem',
                marginLeft: '1rem'
              }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </nav>

        <button
          onClick={toggleTheme}
          className="theme-toggle-mobile"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>

        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/store" element={<Store />} />
          <Route path="/work" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer id="contact" style={{
          marginTop: 0,
          paddingBottom: '2rem',
          background: 'var(--bg-color)',
          borderTop: '1px solid var(--card-border)'
        }}>
          <div className="footer-content" style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '5rem 1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '5rem',
            alignItems: 'start'
          }}>
            {/* Left Column: CTA */}
            <div className="footer-column-cta">
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', marginBottom: '1.5rem', fontWeight: '800', color: 'var(--text-main)' }}>
                Ready to <br />
                <span style={{ color: 'var(--primary-color)' }}>Fly?</span>
              </h2>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '400px', lineHeight: '1.6', fontSize: '1.1rem' }}>
                From cinematic mountain surfing to high-precision indoor lines. Let's capture the impossible together.
              </p>

              <a href="https://wa.me/916361897075?text=Hi%20Aryan%2C%20I%27m%20interested%20in%20booking%20a%20shoot." target="_blank" rel="noopener noreferrer" style={{
                textDecoration: 'none',
                display: 'inline-block',
                padding: '1rem 3rem',
                background: 'var(--text-main)',
                color: 'var(--bg-color)',
                fontWeight: '600',
                borderRadius: '50px',
                fontSize: '1rem',
                transition: 'transform 0.2s',
              }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Book a Shoot
              </a>

              <div style={{ marginTop: '5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                © 2024 Aryan FPV. All rights reserved.
              </div>
            </div>

            {/* Right Column: FAQ */}
            <div className="footer-column-faq">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                <div style={{ width: '4px', height: '20px', background: 'var(--primary-color)', borderRadius: '2px', boxShadow: '0 0 10px var(--primary-color)' }}></div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)', letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>Pilot Intel</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { q: "Do you travel for shoots?", a: "Yes. Available specifically for domestic & international deployments. Gear is travel-hardened." },
                  { q: "What gear do you fly?", a: "Custom fleet: 2.5\" to X8 Heavy Lifters. Red Komodo / BMPCC / GoPro capable." },
                  { q: "Is it safe indoors?", a: "100%. Ducted Cinewhoops ensure zero risk to talent or property. Fully insured." },
                  { q: "Turnaround time?", a: "Raw data: Immediate on-site. Edited reels: 24-48h mission window." }
                ].map((item, index) => (
                  <div key={index} style={{ borderBottom: '1px solid var(--card-border)' }}>
                    <div
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      style={{
                        padding: '1.5rem 0',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: 'var(--text-main)'
                      }}
                    >
                      <span style={{ fontSize: '1rem', fontWeight: '500' }}>{item.q}</span>
                      <span style={{
                        fontSize: '1.2rem',
                        transform: openFaqIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        color: 'var(--text-secondary)'
                      }}>+</span>
                    </div>
                    <div style={{
                      height: openFaqIndex === index ? 'auto' : '0',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}>
                      <p style={{ paddingBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                        {item.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
