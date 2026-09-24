import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { menuLinks, ctaButton } from '../../data/menuData';
import { FaBars, FaTimes } from 'react-icons/fa';
import cambridgeLogo from '../../assets/images/logo/cambridge_logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <>
      {/* Top Viewport Reading Progress Bar */}
      <div 
        className="scroll-progress-line" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="logo-area" onClick={closeMenu}>
            <img src={cambridgeLogo} alt="Cambridge Learning Services" className="header-logo-img" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              {menuLinks.map((link, idx) => (
                <li key={idx} className="nav-item">
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                  >
                    {link.name}
                    <span className="nav-link-indicator" />
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link to={ctaButton.path} className="btn btn-primary header-cta">
              {ctaButton.text}
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle-btn" 
            onClick={toggleMenu} 
            aria-label="Toggle Navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Mobile Navigation Drawer */}
          <div className={`mobile-nav-drawer ${isOpen ? 'drawer-open' : ''}`}>
            <div className="mobile-drawer-header">
              <Link to="/" className="logo-area" onClick={closeMenu}>
                <img src={cambridgeLogo} alt="Cambridge Learning Services" className="header-logo-img" />
              </Link>
              <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close Navigation">
                <FaTimes size={18} />
              </button>
            </div>
            <ul className="mobile-nav-links">
              {menuLinks.map((link, idx) => (
                <li key={idx} className="mobile-nav-item">
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => isActive ? "mobile-nav-link active-link" : "mobile-nav-link"}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="mobile-nav-item mobile-cta-item">
                <Link to={ctaButton.path} className="btn btn-primary w-100" onClick={closeMenu}>
                  {ctaButton.text}
                </Link>
              </li>
            </ul>
          </div>
          {isOpen && <div className="mobile-backdrop" onClick={closeMenu} />}
        </div>

        <style>{`
          .site-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background-color: rgba(250, 248, 245, 0.94);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            box-shadow: 0 2px 20px rgba(15, 56, 42, 0.04);
            border-bottom: 1px solid var(--border-color);
            transition: height var(--transition-normal), background-color var(--transition-normal), box-shadow var(--transition-normal);
            height: 76px;
            display: flex;
            align-items: center;
          }

          .header-scrolled {
            height: 68px;
            background-color: rgba(255, 255, 255, 0.98);
            box-shadow: 0 8px 24px -4px rgba(15, 56, 42, 0.08);
            border-bottom: 1px solid var(--border-color);
          }

          .header-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
          }

          .logo-area {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            text-decoration: none;
            transition: transform var(--transition-fast);
          }

          .header-logo-img {
            height: 52px;
            width: auto;
            object-fit: contain;
            transition: transform var(--transition-fast), filter var(--transition-fast);
          }

          .header-scrolled .header-logo-img {
            height: 44px;
          }

          .logo-area:hover .header-logo-img {
            transform: scale(1.05);
            filter: drop-shadow(0 4px 12px rgba(232, 130, 38, 0.3));
          }

          .logo-text-wrapper {
            display: flex;
            flex-direction: column;
            font-family: var(--font-heading);
            color: var(--primary-color);
          }

          .logo-main-text {
            font-size: 1.45rem;
            font-weight: 800;
            letter-spacing: 0.3px;
            line-height: 0.95;
            color: var(--primary-color);
          }

          .logo-sub-text {
            font-size: 0.72rem;
            font-weight: 750;
            letter-spacing: 3.5px;
            color: var(--accent-color);
            line-height: 1;
            margin-top: 3px;
          }

          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 1.75rem;
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .nav-item {
            position: relative;
          }

          .nav-link {
            font-size: 0.95rem;
            font-weight: 600;
            color: var(--primary-color);
            padding: 0.5rem 0.95rem;
            position: relative;
            transition: color var(--transition-fast);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
          }

          .nav-link-indicator {
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%) scaleX(0);
            width: 26px;
            height: 3px;
            background: var(--accent-gradient);
            border-radius: 999px;
            transition: transform var(--transition-normal);
            box-shadow: 0 0 8px rgba(200, 109, 59, 0.4);
          }

          .nav-link:hover {
            color: var(--primary-color);
          }

          .nav-link:hover .nav-link-indicator {
            transform: translateX(-50%) scaleX(1);
          }

          .nav-link.active-link {
            color: var(--primary-color) !important;
            font-weight: 750;
          }

          .nav-link.active-link .nav-link-indicator {
            transform: translateX(-50%) scaleX(1);
          }

          .header-cta {
            background: var(--primary-gradient);
            color: #FFFFFF !important;
            border: 1px solid rgba(200, 125, 67, 0.4);
            padding: 0.68rem 1.6rem;
            font-size: 0.92rem;
            font-weight: 750;
            letter-spacing: 0.3px;
            box-shadow: 0 4px 14px rgba(15, 56, 42, 0.2);
          }

          .header-cta:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 8px 24px rgba(15, 56, 42, 0.3), 0 0 0 1px rgba(200, 125, 67, 0.6);
            color: #FFFFFF !important;
          }

          .mobile-toggle-btn {
            display: none;
            color: var(--primary-color);
            padding: 0.55rem;
            border-radius: var(--radius-sm);
            cursor: pointer;
            z-index: 1001;
            background: rgba(10, 30, 52, 0.06);
            transition: background var(--transition-fast), transform var(--transition-fast);
          }

          .mobile-toggle-btn:hover {
            background: rgba(10, 30, 52, 0.12);
            transform: scale(1.05);
          }

          .mobile-backdrop {
            display: none;
          }

          .mobile-nav-drawer {
            display: none;
          }

          @media (max-width: 1024px) {
            .site-header {
              height: 72px;
            }

            .desktop-nav {
              display: none;
            }

            .mobile-toggle-btn {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .mobile-backdrop {
              display: block;
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: rgba(5, 18, 33, 0.55);
              backdrop-filter: blur(6px);
              z-index: 1000;
              animation: fadeInUpSmooth 0.25s ease-out;
            }

            .mobile-nav-drawer {
              display: flex;
              flex-direction: column;
              position: fixed;
              top: 0;
              right: -100%;
              width: 84%;
              max-width: 350px;
              height: 100vh;
              background-color: var(--bg-primary);
              box-shadow: -10px 0 45px rgba(5, 18, 33, 0.25);
              transition: right 0.38s cubic-bezier(0.16, 1, 0.3, 1);
              padding: 1.75rem;
              z-index: 1001;
              overflow-y: auto;
            }

            .mobile-drawer-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding-bottom: 1.25rem;
              border-bottom: 1px solid var(--border-color);
              margin-bottom: 1.5rem;
            }

            .mobile-close-btn {
              color: var(--primary-color);
              padding: 0.5rem;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: var(--radius-sm);
              background: rgba(10, 30, 52, 0.05);
              transition: background var(--transition-fast);
            }

            .mobile-close-btn:hover {
              background: rgba(10, 30, 52, 0.1);
            }

            .drawer-open {
              right: 0;
            }

            .mobile-nav-links {
              display: flex;
              flex-direction: column;
              gap: 0.45rem;
            }

            .mobile-nav-link {
              font-size: 1.05rem;
              font-weight: 600;
              color: var(--primary-color);
              display: block;
              padding: 0.8rem 1.1rem;
              border-radius: var(--radius-md);
              transition: all var(--transition-fast);
            }

            .mobile-nav-link:hover,
            .mobile-nav-link.active-link {
              background: var(--accent-light);
              color: var(--accent-color);
              transform: translateX(4px);
            }

            .mobile-cta-item {
              margin-top: 1.5rem;
              padding-top: 1.25rem;
              border-top: 1px solid var(--border-color);
            }
          }
        `}</style>
      </header>
    </>
  );
};

export default Header;
