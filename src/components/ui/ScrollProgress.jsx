import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = scrollTop / docHeight;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = document.documentElement.classList.contains('dark');
  const barStyle = {
    background: isDark
      ? 'linear-gradient(90deg, #16a34a, #22c55e, #16a34a)'
      : 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light), var(--color-secondary))',
    boxShadow: `0 0 12px ${isDark ? '#16a34a' : 'var(--color-primary)'}`,
  };

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-1.5 w-full bg-transparent pointer-events-none"
      style={{
        transform: `scaleX(${scrollProgress})`,
        transformOrigin: 'left center',
        transition: 'transform 0.1s linear',
      }}
      aria-hidden="true"
    >
      <div className="h-full rounded-full" style={barStyle} />
    </div>
  );
}