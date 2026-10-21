export default function Logo({ dark = false }: { dark?: boolean }) {
  const main = dark ? "#0E2F29" : "#F5F0E6";
  return (
    <span className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 48 48" aria-hidden="true" className="shrink-0">
        <path d="M24 6 L42 42 H35.5 L24 17 L12.5 42 H6 Z" fill={main} />
        <path d="M10 34 Q24 22 40 26 Q26 27 15 38 Q11 41 9 42 Q9 38 10 34 Z" fill="#C6A15B" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[19px] tracking-[0.42em]" style={{ color: main }}>
          ALIF
        </span>
        <span
          className="mt-1 block text-[7.5px] font-semibold tracking-[0.24em]"
          style={{ color: dark ? "#5C6B66" : "#A8B8B2" }}
        >
          ENGINEERING &amp; CONSTRUCTION
        </span>
      </span>
    </span>
  );
}
