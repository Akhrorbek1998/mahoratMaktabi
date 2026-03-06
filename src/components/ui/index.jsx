// ─────────────────────────────────────────────────────────────
//  Shared UI Primitives
// ─────────────────────────────────────────────────────────────

/**
 * GoldButton — Primary CTA button with shimmer hover
 */
export function GoldButton({ children, onClick, outline = false, className = '', type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative group overflow-hidden font-body font-bold text-sm tracking-wide
        px-7 py-3.5 rounded-xl transition-all duration-300
        ${outline
          ? 'border-2 border-[#D4A843]/60 text-[#D4A843] hover:border-[#D4A843] hover:bg-[#D4A843]/10'
          : 'bg-gradient-to-r from-[#D4A843] to-[#B8902E] text-[#0B3D2E] shadow-lg shadow-[#D4A843]/25 hover:shadow-[#D4A843]/50 hover:-translate-y-0.5'
        } ${className}
      `}
    >
      {!outline && (
        <span className="absolute inset-0 bg-gradient-to-r from-[#E8C46A] to-[#D4A843] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

/**
 * SectionTag — Small badge label above section headings
 */
export function SectionTag({ children, color = 'gold' }) {
  const styles = {
    gold:   'text-[#D4A843] border-[#D4A843]/30 bg-[#D4A843]/10',
    teal:   'text-[#4ECDC4] border-[#4ECDC4]/30 bg-[#4ECDC4]/10',
    cream:  'text-[#F5EDD6] border-[#F5EDD6]/20 bg-[#F5EDD6]/5',
    pink:   'text-[#FF6B9D] border-[#FF6B9D]/30 bg-[#FF6B9D]/10',
    yellow: 'text-[#FFE66D] border-[#FFE66D]/30 bg-[#FFE66D]/10',
  };
  return (
    <span className={`
      inline-flex items-center gap-1.5 px-3 py-1 rounded-full
      text-[10px] font-body font-bold tracking-[0.2em] uppercase
      border backdrop-blur-sm ${styles[color] || styles.gold}
    `}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {children}
    </span>
  );
}

/**
 * RevealBlock — Wrapper that animates children into view on scroll
 */
export function RevealBlock({ children, className = '', delay = 0, direction = 'up' }) {
  // Uses CSS-based reveal via IntersectionObserver pattern
  const { useInView } = require('../hooks/useInView');
  const [ref, inView] = useInView(0.1);

  const transforms = {
    up:    inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
    left:  inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0',
    right: inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0',
    none:  inView ? 'opacity-100' : 'opacity-0',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${transforms[direction] || transforms.up} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/**
 * Chip — Small tag/label chip
 */
export function Chip({ children, color }) {
  return (
    <span
      className="text-[10px] font-body font-bold px-2.5 py-1 rounded-md border"
      style={{
        color,
        borderColor: `${color}50`,
        background: `${color}18`,
      }}
    >
      {children}
    </span>
  );
}
