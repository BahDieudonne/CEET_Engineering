// A thin dashed "conductor" line with a glowing node — the recurring
// signature motif that threads through the page like live current,
// echoing the schematic/circuit language of the brand.
export default function CurrentDivider({ label }) {
  return (
    <div className="flex items-center gap-4 py-2" aria-hidden="true">
      <svg width="100%" height="24" className="flex-1 max-w-md" viewBox="0 0 400 24" preserveAspectRatio="none">
        <line x1="0" y1="12" x2="380" y2="12" className="current-line" />
        <circle cx="386" cy="12" r="5" fill="var(--current)" className="current-node" />
      </svg>
      {label && <span className="eyebrow whitespace-nowrap">{label}</span>}
    </div>
  )
}
