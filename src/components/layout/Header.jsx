import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: t.nav.services, path: '/services' },
    { label: t.nav.spiderControl, path: '/spider-control' },
    { label: t.nav.roachCleanup, path: '/roach-cleanup' },
    { label: t.nav.communities, path: '/communities' },
    { label: t.nav.serviceAreas || 'Service Areas', path: '/#service-areas' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-100 border-b border-border transition-all duration-300 ${
        scrolled ? 'shadow-md bg-surface/95 backdrop-blur-md' : 'bg-surface'
      }`}
      role="banner"
    >
      <div className="container flex items-center justify-between h-16 md:h-18 lg:h-18 gap-2 md:gap-4">
        <NavLink to="/" className="flex items-center gap-2 md:gap-2.5 text-text flex-shrink-0" aria-label="Veritas HomeServices LLC - Home">
          <span className="w-9 h-9 md:w-10 md:h-10 rounded-md bg-primary text-white flex items-center justify-center font-extrabold text-base md:text-xl flex-shrink-0" aria-hidden="true">V</span>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="font-bold text-sm md:text-base text-text whitespace-nowrap overflow-hidden text-ellipsis">VERITAS HOMESERVICES LLC</span>
            <span className="text-xs md:text-xs font-medium text-text-muted tracking-wider whitespace-nowrap">INTEGRITY & PROTECTION</span>
          </div>
        </NavLink>

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-1 flex-wrap">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-sm transition-all duration-150 whitespace-nowrap ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-text hover:text-primary hover:bg-background'
                    }`
                  }
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <LanguageSelector />
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-md bg-background transition-colors hover:bg-border text-text"
            aria-label={theme === 'light' ? t.header.darkMode : t.header.lightMode}
            aria-pressed={theme === 'dark'}
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <NavLink
            to="/quote"
            className="btn btn-primary hidden sm:flex"
          >
            {t.header.freeQuote}
          </NavLink>
        </div>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md bg-background transition-colors hover:bg-border"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="flex flex-col justify-between w-5 h-3.5" aria-hidden="true">
            <span className="block w-full h-0.5 bg-text rounded transition-all duration-200" />
            <span className="block w-full h-0.5 bg-text rounded transition-all duration-200" />
            <span className="block w-full h-0.5 bg-text rounded transition-all duration-200" />
          </span>
        </button>
      </div>

      <nav id="mobile-nav" className="md:hidden bg-surface border-b border-border shadow-xl backdrop-blur-md animate-slide-down" aria-label="Mobile navigation" hidden={!isOpen}>
        <ul className="px-4 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-3.5 text-base font-medium rounded-md transition-all duration-150 ${
                    isActive
                      ? 'bg-background text-primary'
                      : 'text-text hover:bg-background hover:text-primary'
                  }`
                }
                onClick={() => setIsOpen(false)}
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}