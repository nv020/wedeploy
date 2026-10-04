export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`inline-flex flex-col items-start text-white ${className}`}>
      <span className="flex font-extrabold text-[26px] leading-none" style={{ letterSpacing: "-0.3px" }}>
        <span className="text-accent">WE</span><span>DEPLOY</span>
      </span>
      <span className="mt-1.5 text-[9px] leading-none font-medium whitespace-nowrap">
        Recruitment · Detachering · Interim
      </span>
    </a>
  );
}
