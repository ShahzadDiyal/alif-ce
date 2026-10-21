export default function Logo({ dark = false }: { dark?: boolean }) {
  const main = dark ? "#0F3D36" : "#F7F6F2";
  const sub = dark ? "#6B6B6B" : "#B9C6C0";
  return (
    <span className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 48 48" aria-hidden="true" className="shrink-0">
        <defs>
          <linearGradient id="alif-gold" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#A98850" />
            <stop offset="55%" stopColor="#C9A966" />
            <stop offset="100%" stopColor="#EBD6A4" />
          </linearGradient>
        </defs>
        <path
          fillRule="evenodd"
          d="M4 43 L4 40.6 L7.2 40.6 L20.9 8.2 L20.9 5.4 L27.1 5.4 L27.1 8.2 L40.8 40.6 L44 40.6 L44 43 L34.4 43 L31.6 36.2 L16.4 36.2 L13.6 43 Z M24 19.5 L28.6 31.4 L19.4 31.4 Z"
          fill={main}
        />
        <path d="M2.5 36 Q22 18 46 19.5 Q28 22.5 14 35.5 Q7 41.5 2 43.5 Q1.2 40 2.5 36 Z" fill="url(#alif-gold)" />
      </svg>
      <span className="leading-none">
        <span className="block font-sans text-[19px] font-extrabold tracking-[0.42em]" style={{ color: main }}>
          ALIF
        </span>
        <span className="mt-1 block text-[7.5px] font-semibold tracking-[0.24em]" style={{ color: sub }}>
          ENGINEERING &amp; CONSTRUCTION
        </span>
      </span>
    </span>
  );
}
