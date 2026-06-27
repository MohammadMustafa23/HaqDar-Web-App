import "./Effect.css";
export default function CompleteProfileSkeleton() {
  return (
    <section className="hsqk-cp-skeleton">

      {/* LEFT */}
      <div className="hsqk-cp-left">

        {/* Badge */}
        <div className="hsqk-sk hsqk-badge" />

        {/* Title */}
        <div className="hsqk-sk hsqk-title-1" />
        <div className="hsqk-sk hsqk-title-2" />

        {/* Description */}
        <div className="hsqk-sk hsqk-desc-1" />
        <div className="hsqk-sk hsqk-desc-2" />
        <div className="hsqk-sk hsqk-desc-3" />

        {/* Footer */}
        <div className="hsqk-footer">

          {/* Button */}
          <div className="hsqk-sk hsqk-btn" />

          {/* Users */}
          <div className="hsqk-users">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="hsqk-sk hsqk-user"
              />
            ))}
          </div>

          {/* Joined */}
          <div className="hsqk-sk hsqk-joined" />

        </div>

      </div>

      {/* RIGHT */}
      <div className="hsqk-cp-right">

        <div className="hsqk-right-header">
          <div className="hsqk-sk-dark hsqk-head-title" />
          <div className="hsqk-sk-dark hsqk-head-percent" />
        </div>

        <div className="hsqk-sk-dark hsqk-progress" />

        <div className="hsqk-steps">

          {[0, 1, 2].map((i) => (
            <div key={i} className="hsqk-step">

              <div className="hsqk-sk-dark hsqk-step-circle" />

              <div className="hsqk-sk-dark hsqk-step-text" />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
export function CountSchemesSkeleton() {
  return (
    <section className="hqdsk-count-schemes">
      {[0, 1, 2].map((i) => (
        <div key={i} className="hqdsk-scheme-card">
          {/* Icon */}
          <span
            className="hqdsk hqdsk--icon"
            style={{
              width: 40,
              height: 40,
              marginBottom: 14,
              borderRadius: 4,
              animationDelay: `${i * 0.1}s`,
            }}
          />

          {/* Title (h3) */}
          <span
            className="hqdsk"
            style={{
              width: "65%",
              height: 22,
              marginBottom: 22,
              animationDelay: `${i * 0.1}s`,
            }}
          />

          {/* Count (h2) */}
          <span
            className="hqdsk"
            style={{
              width: "50%",
              height: 42,
              borderRadius: 8,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        </div>
      ))}
    </section>
  );
}
/* ============================================================
   Rec_SchemesCardSkeleton
   ============================================================ */
export function Rec_SchemesCardSkeleton() {
  return (
    <div className="hqdsk-rec-card">
      {/* Save Button */}
      <span
        className="hqdsk hqdsk--icon"
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          width: 42,
          height: 42,
          borderRadius: 12,
        }}
      />

      {/* Title */}
      <span
        className="hqdsk"
        style={{
          height: 26,
          width: "72%",
          marginBottom: 20,
        }}
      />

      {/* Description */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <span
          className="hqdsk"
          style={{
            height: 15,
            width: "100%",
          }}
        />

        <span
          className="hqdsk"
          style={{
            height: 15,
            width: "96%",
          }}
        />

        <span
          className="hqdsk"
          style={{
            height: 15,
            width: "74%",
          }}
        />
      </div>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 28,
        }}
      >
        <span
          className="hqdsk hqdsk--pill"
          style={{
            height: 44,
            width: 170,
          }}
        />

        <span
          className="hqdsk hqdsk--pill"
          style={{
            height: 44,
            width: 150,
          }}
        />
      </div>

      {/* Button */}
      <span
        className="hqdsk hqdsk--btn"
        style={{
          width: "100%",
          height: 56,
          marginTop: 35,
        }}
      />
    </div>
  );
}
/* ============================================================
   AskHaqdarAISkeleton
   ============================================================ */
export function AskHaqdarAISkeleton() {
  return (
    <div
      className="hqdsk-ask-ai-card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Icon */}
      <span
        className="hqdsk hqdsk--card"
        style={{
          width: 52,
          height: 52,
          borderRadius: 12,
          marginBottom: 18,
        }}
      />

      {/* Heading */}
      <span
        className="hqdsk"
        style={{
          width: 180,
          height: 26,
          marginBottom: 14,
        }}
      />

      {/* Description */}
      <div
        style={{
          width: "100%",
          maxWidth: 260,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          marginBottom: 24,
        }}
      >
        <span
          className="hqdsk"
          style={{
            width: "100%",
            height: 15,
          }}
        />

        <span
          className="hqdsk"
          style={{
            width: "92%",
            height: 15,
          }}
        />

        <span
          className="hqdsk"
          style={{
            width: "70%",
            height: 15,
          }}
        />
      </div>

      {/* Button */}
      <span
        className="hqdsk hqdsk--btn"
        style={{
          width: 220,
          height: 56,
          borderRadius: 14,
        }}
      />
    </div>
  );
}