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
        <img src="/hero_bg.png" alt="Drone Background" className="hero-bg" />

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
            <img src="/about_profile.png" alt="Aryan FPV Profile" />
          </div>
          <div className="about-content">
            <h5 style={{ color: 'var(--primary-color)', textShadow: 'var(--text-shadow-primary)', letterSpacing: '2px', marginBottom: '0.5rem' }}>THE PILOT</h5>
            <h2>Behind The Goggles</h2>
            <p>
              I'm Aryan, a professional FPV drone pilot and cinematographer based in India.
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
              image: "/portfolio_car_chase.png",
              specs: { camera: "GoPro 11", drone: "5\" Racer", range: "0.5km", res: "5K 60fps", elev: "2m" }
            },
            {
              title: "Nature Dive",
              category: "Cinematic",
              image: "/gallery_fpv_waterfall.png",
              specs: { camera: "Red Komodo", drone: "Sicco 8\"", range: "1.2km", res: "6K RAW", elev: "150m" }
            },
            {
              title: "Urban Flow",
              category: "Freestyle",
              image: "/gallery_fpv_urban.png",
              specs: { camera: "DJI O3", drone: "Apex 5\"", range: "800m", res: "4K 60fps", elev: "80m" }
            },
            {
              title: "Neon Nights",
              category: "City",
              image: "/hero_bg_final.png",
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
    </>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

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

        <footer id="contact" className="footer">
          <h2>Ready to Fly?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>For custom builds, shoots, or inquiries</p>
          <a href="https://wa.me/916361897075?text=Hi%20Aryan%2C%20I%27m%20interested%20in%20booking%20a%20shoot%20%2F%20custom%20service." target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Book a Shoot</a>
          <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            © 2024 Aryan FPV. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
