import "./Effect.css";
export default function CompleteProfileSkeleton() {
  return (
    <section className="complete-profile">
      {/* LEFT CARD */}
      <div className="profile-left animate-pulse flex flex-col gap-8">
        {/* Badge */}
        <div className="h-8 w-52 bg-gray-200 rounded-full mb-8"></div>

        {/* Title */}
        <div className="space-y-5">
          <div className="h-10 w-4/5 bg-gray-200 rounded-xl"></div>
          <div className="h-10 w-3/5 bg-gray-200 rounded-xl"></div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
        </div>

        {/* Button + Users */}
        <div className="flex items-center gap-6">
          <div className="h-14 w-56 bg-gray-200 rounded-xl"></div>

          <div className="flex -space-x-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div className="h-4 w-48 bg-gray-200 rounded mt-5"></div>
      </div>

      {/* RIGHT CARD */}
      <div className="profile-right animate-pulse">
        <div className="skeleton-card">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="h-6 w-36 bg-slate-300 rounded-lg"></div>
            <div className="h-6 w-14 bg-slate-300 rounded-lg"></div>
          </div>

          {/* Divider */}
          <div className="h-3 w-full bg-slate-300 rounded-full mb-8"></div>

          {/* Steps */}
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-5">
                <div className="w-12 h-12 bg-slate-300 rounded-full shrink-0"></div>

                <div className="h-6 flex-1 bg-slate-300 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CountSchemesSkeleton() {
  return (
    <section className="count-schemes">
      {[1, 2, 3].map((item) => (
        <div key={item} className="scheme-card animate-pulse">
          <div className="flex flex-col gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gray-200"></div>

            <div className="space-y-3">
              <div className="h-4 w-36 bg-gray-200 rounded"></div>

              <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="flex items-center justify-end gap-8 animate-pulse">
      
      {/* Bell */}
      <div className="w-8 h-8 rounded-full bg-gray-200"></div>

      {/* Divider */}
      <div className="w-px h-12 bg-gray-200"></div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <div>
          <div className="h-6 w-40 rounded bg-gray-200 mb-2"></div>
          <div className="h-4 w-24 rounded bg-gray-200"></div>
        </div>

        {/* Profile Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gray-200"></div>
      </div>
    </div>
  );
}

export function Rec_SchemesCardSkeleton() {
  return (
    <div className="rec-scheme-card animate-pulse">
      {/* Title + Save */}
      <div className="flex justify-between items-center mb-8">
        <div className="h-8 w-80 bg-gray-200 rounded-lg"></div>
        <div className="h-12 w-12 bg-gray-200 rounded-xl"></div>
      </div>

      {/* Description */}
      <div className="space-y-4 mb-10">
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
        <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
      </div>

      {/* Tags */}
      <div className="flex gap-8 mb-10">
        <div className="h-12 w-44 bg-gray-200 rounded-xl"></div>
        <div className="h-12 w-36 bg-gray-200 rounded-xl"></div>
      </div>

      {/* Button */}
      <div className="h-14 w-full bg-gray-200 rounded-xl"></div>
    </div>
  );
}

export function AskHaqdarAISkeleton() {
  return (
    <div className="ask-ai-card animate-pulse">
      <div className="flex flex-col items-center justify-center h-full">

        {/* Icon */}
        <div className="w-20 h-20 bg-gray-200 rounded-2xl mb-8"></div>

        {/* Heading */}
        <div className="h-8 w-56 bg-gray-200 rounded-lg mb-6"></div>

        {/* Text */}
        <div className="space-y-3 mb-8 flex flex-col items-center">
          <div className="h-4 w-64 bg-gray-200 rounded"></div>
          <div className="h-4 w-56 bg-gray-200 rounded"></div>
          <div className="h-4 w-44 bg-gray-200 rounded"></div>
        </div>

        {/* Button */}
        <div className="h-14 w-60 bg-gray-200 rounded-xl"></div>

      </div>
    </div>
  );
}