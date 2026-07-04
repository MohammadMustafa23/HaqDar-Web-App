export default function SchemeCardSkeleton() {
  return (
    <div className="relative overflow-hidden bg-white border border-gray-200 rounded-3xl p-6 shadow-sm max-w-md">
      {/* Keyframe for shimmer sweep — Tailwind has no built-in "shimmer" animation,
          so the arbitrary animate-[shimmer_2s_infinite] class in the original never fired */}
      <style>{`
        @keyframes scheme-card-shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
        style={{ animation: "scheme-card-shimmer 2s infinite" }}
      />

      <div className="relative z-10">
        {/* Header: shield icon + bookmark icon — same size, same shape.
            shrink-0 + aspect-square stop flex from squishing/stretching these,
            and there is no negative margin anywhere, so they can't overflow
            above the card's top edge. */}
        <div className="flex justify-between items-center mb-5">
          <div className="h-11 w-11 shrink-0 aspect-square rounded-xl bg-gray-200" />
          <div className="h-11 w-11 shrink-0 aspect-square rounded-xl bg-gray-200" />
        </div>

        {/* Title — wraps to two lines like the real heading */}
        <div className="space-y-2 mb-4">
          <div className="h-5 w-full rounded-md bg-gray-200" />
          <div className="h-5 w-2/3 rounded-md bg-gray-200" />
        </div>

        {/* Description — two lines, not three */}
        <div className="space-y-2 mb-8">
          <div className="h-3 rounded bg-gray-200 w-full" />
          <div className="h-3 rounded bg-gray-200 w-4/5" />
        </div>

        {/* Tags — widths echo "Worker / Urban", "State", "Urban Workers" */}
        <div className="flex flex-wrap gap-2 mb-8">
          <div className="h-7 w-28 rounded-full bg-gray-200" />
          <div className="h-7 w-16 rounded-full bg-gray-200" />
          <div className="h-7 w-28 rounded-full bg-gray-200" />
        </div>

        {/* Footer — match % label on the left, fixed-width button on the right */}
        <div className="flex justify-between items-center">
          <div className="h-4 w-16 rounded bg-gray-200" />
          <div className="h-12 w-36 rounded-xl bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
