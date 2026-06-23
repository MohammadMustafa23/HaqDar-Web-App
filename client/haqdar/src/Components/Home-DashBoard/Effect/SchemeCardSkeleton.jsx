export default function SchemeCardSkeleton() {
  return (
    <div className="relative overflow-hidden bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <div className="h-8 w-20 rounded-full bg-gray-200" />
          <div className="h-8 w-8 rounded-full bg-gray-200" />
        </div>

        {/* Title */}
        <div className="h-6 w-3/4 rounded-lg bg-gray-200 mb-4" />

        {/* Description */}
        <div className="space-y-3 mb-6">
          <div className="h-3 rounded bg-gray-200 w-full" />
          <div className="h-3 rounded bg-gray-200 w-11/12" />
          <div className="h-3 rounded bg-gray-200 w-8/12" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="h-8 w-20 rounded-full bg-gray-200" />
          <div className="h-8 w-24 rounded-full bg-gray-200" />
          <div className="h-8 w-16 rounded-full bg-gray-200" />
        </div>

        {/* Button */}
        <div className="h-12 rounded-xl bg-gray-200" />
      </div>
    </div>
  );
}