import { Camera } from 'lucide-react';

const Navbar = () => {
  return (
    <nav
      className="fixed w-full z-50"
      style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-ink)',
        borderBottom: '1px solid var(--color-surface)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5" style={{ color: 'var(--color-muted)' }} />
            <span className="font-display text-lg font-medium tracking-tight" style={{ color: 'var(--color-ink)' }}>
              POV
            </span>
          </div>
          <div className="flex items-center gap-6 text-[14px] font-medium leading-[1.4]">
            <a
              href="#gallery"
              className="transition-colors duration-[200ms]"
              style={{ color: 'var(--color-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              Gallery
            </a>
            <a
              href="#about"
              className="transition-colors duration-[200ms]"
              style={{ color: 'var(--color-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
