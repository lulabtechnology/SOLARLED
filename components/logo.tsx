export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(95,210,255,0.35),_transparent_55%)]" />
        <div className="grid h-6 w-6 grid-cols-3 gap-[2px]">
          {Array.from({ length: 9 }).map((_, index) => (
            <span key={index} className="rounded-[3px] bg-white/85" />
          ))}
        </div>
      </div>
      <div className="leading-none">
        <div className="font-semibold uppercase tracking-[0.35em] text-white/65">Solarled</div>
        <div className="mt-1 text-sm font-medium text-white">Energía solar con criterio</div>
      </div>
    </div>
  );
}
