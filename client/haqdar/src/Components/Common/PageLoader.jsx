import "./PageLoader.css";

export default function PageLoader({ text = "Please wait..." }) {
  return (
    <div
      className="page-loader-overlay"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="page-loader-box">
        <div className="page-loader-mark">
          <div className="page-loader-ring" aria-hidden="true"></div>

          <div className="page-loader-icon">
            <svg
              className="page-loader-h"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="hd-h-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#C7D4FF" />
                </linearGradient>
              </defs>
              <rect
                className="h-bar h-bar-left"
                x="14"
                y="8"
                width="13"
                height="48"
                rx="4"
                fill="url(#hd-h-grad)"
              />
              <rect
                className="h-bar h-bar-right"
                x="37"
                y="8"
                width="13"
                height="48"
                rx="4"
                fill="url(#hd-h-grad)"
              />
              <rect
                className="h-bar h-bar-mid"
                x="14"
                y="25.5"
                width="36"
                height="13"
                rx="3"
                fill="url(#hd-h-grad)"
              />
            </svg>
          </div>
        </div>

        <p className="page-loader-text">{text}</p>

        <div className="page-loader-dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
