import "./PrivacyPolicy.css";
import {
  ShieldCheck,
  LayoutGrid,
  BadgeInfo,
  Lock,
  Shield,
  KeyRound,
  CheckCircle2,
  Ban,
  Cookie,
  Network,
  RefreshCw,
  Mail,
} from "lucide-react";
// import NavBar from "../Header/NavBar";
import Footer from "./Footer";
export default function PrivacyPolicy() {
  return (
    <>
    <div className="privacy-page">
      {/* ================= Header ================= */}
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p className="last-update">Last Updated: June 26, 2026</p>
      </div>

      <div className="privacy-container">
        {/* ================================================= */}

        {/* 1. INTRODUCTION */}

        {/* ================================================= */}

        <section className="privacy-card">
          <div className="card-heading">
            <div className="heading-icon">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h2>1. Introduction</h2>

              <p>
                At <strong>HaqDar</strong>, we believe transparency is the
                foundation of civic trust. Our commitment to safeguarding your
                privacy is central to our mission of empowering citizens. This
                Privacy Policy explains how we collect, use, and protect your
                personal information while helping you discover government
                welfare schemes.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================= */}

        {/* 2. INFORMATION COLLECTION */}

        {/* ================================================= */}

        <section className="privacy-card">
          <div className="card-heading">
            <div className="heading-icon">
              <LayoutGrid size={22} />
            </div>

            <div className="heading-content">
              <h2>2. Information Collection</h2>

              <p>
                We collect only the information necessary to provide accurate
                eligibility matching and personalized scheme recommendations.
              </p>

              <div className="info-grid">
                <div className="info-box">
                  <h4>Identity Details</h4>

                  <p>
                    Name, age, gender, email address and phone number required
                    for account verification.
                  </p>
                </div>

                <div className="info-box">
                  <h4>Socioeconomic Status</h4>

                  <p>
                    Income, occupation, education level and family details for
                    eligibility matching.
                  </p>
                </div>

                <div className="info-box">
                  <h4>Location Data</h4>

                  <p>
                    District, state and pincode to identify location-specific
                    government schemes.
                  </p>
                </div>

                <div className="info-box">
                  <h4>Interaction History</h4>

                  <p>
                    Saved schemes, viewed pages, AI searches and eligibility
                    results to improve your experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}

        {/* 3. DATA USAGE */}

        {/* ================================================= */}

        <section className="privacy-card">
          <div className="card-heading">
            <div className="heading-icon">
              <BadgeInfo size={22} />
            </div>

            <div>
              <h2>3. Data Usage</h2>

              <p>
                Your information is processed responsibly to provide a better
                and more personalized experience.
              </p>

              <ul className="privacy-list">
                <li>
                  <strong>Eligibility Matching:</strong> AI compares your
                  profile with thousands of government scheme criteria.
                </li>

                <li>
                  <strong>Personalized Recommendations:</strong> Suggesting the
                  most relevant welfare schemes for your needs.
                </li>

                <li>
                  <strong>Platform Improvement:</strong> Anonymous analytics are
                  used to improve search quality and application experience.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================================================= */}

        {/* 4. SECURITY */}

        {/* ================================================= */}

        <section className="privacy-card">
          <div className="card-heading">
            <div className="heading-icon">
              <Lock size={22} />
            </div>

            <div className="heading-content">
              <h2>4. Security Measures</h2>

              <div className="security-grid">
                <div className="security-item">
                  <Shield size={34} />

                  <h4>Bank-Grade Encryption</h4>

                  <p>
                    AES-256 encryption protects your data both during storage
                    and transmission.
                  </p>
                </div>

                <div className="security-item">
                  <KeyRound size={34} />

                  <h4>Access Control</h4>

                  <p>
                    Strict authentication and role-based access ensure only
                    authorized personnel can access data.
                  </p>
                </div>

                <div className="security-item">
                  <ShieldCheck size={34} />

                  <h4>Continuous Audits</h4>

                  <p>
                    Regular security testing and vulnerability assessments help
                    maintain platform integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}

        {/* 5. USER RIGHTS */}

        {/* ================================================= */}

        <section className="privacy-card">
          <div className="card-heading">
            <div className="heading-icon">
              <CheckCircle2 size={22} />
            </div>

            <div>
              <h2>5. User Rights</h2>

              <p>
                You have complete control over your personal information and may
                exercise the following rights:
              </p>

              <ul className="rights-list">
                <li>
                  <CheckCircle2 size={18} />
                  <span>
                    <strong>Right to Access:</strong> View all personal data
                    stored in your account.
                  </span>
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  <span>
                    <strong>Right to Correction:</strong> Update inaccurate or
                    incomplete information anytime.
                  </span>
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  <span>
                    <strong>Right to Erasure:</strong> Permanently delete your
                    account and associated data.
                  </span>
                </li>

                <li>
                  <CheckCircle2 size={18} />
                  <span>
                    <strong>Right to Portability:</strong> Request a copy of
                    your data where applicable.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================================================= */}

        {/* 6. INFORMATION SHARING */}

        {/* ================================================= */}

        <section className="privacy-card">
          <div className="card-heading">
            <div className="heading-icon danger">
              <Ban size={22} />
            </div>

            <div>
              <h2>6. Information Sharing</h2>

              <p className="highlight-text">
                <strong>
                  HaqDar does NOT sell, rent, or trade your personal information
                  to advertisers or third-party marketers.
                </strong>
              </p>

              <p>
                We only share information when required to facilitate government
                scheme applications, comply with legal obligations, or improve
                essential platform services. Any third-party partner handling
                user information is required to follow strict privacy and
                security standards.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================= */}

        {/* 7. COOKIES */}

        {/* ================================================= */}

        <section className="privacy-card">
          <div className="card-heading">
            <div className="heading-icon">
              <Cookie size={22} />
            </div>

            <div>
              <h2>7. Cookies & Local Storage</h2>

              <p>
                HaqDar uses cookies and browser local storage to provide a
                seamless and personalized experience.
              </p>

              <ul className="privacy-list">
                <li>Maintain secure login sessions.</li>

                <li>Remember completed eligibility forms.</li>

                <li>Save bookmarked government schemes.</li>

                <li>Improve platform performance and user experience.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================================================= */}

        {/* 8. THIRD PARTY */}

        {/* ================================================= */}

        <section className="privacy-card">
          <div className="card-heading">
            <div className="heading-icon">
              <Network size={22} />
            </div>

            <div>
              <h2>8. Third-Party Services</h2>

              <p>
                To deliver secure and intelligent services, HaqDar integrates
                with carefully selected third-party providers.
              </p>

              <div className="thirdparty-grid">
                <div className="service-box">
                  <h4>Authentication</h4>
                  <p>Secure login and identity verification.</p>
                </div>

                <div className="service-box">
                  <h4>Artificial Intelligence</h4>
                  <p>AI-powered eligibility matching and recommendations.</p>
                </div>

                <div className="service-box">
                  <h4>Cloud Infrastructure</h4>
                  <p>Reliable hosting, storage, and data protection.</p>
                </div>

                <div className="service-box">
                  <h4>Analytics</h4>
                  <p>
                    Anonymous usage insights to improve platform performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}

        {/* 9. POLICY UPDATES */}

        {/* ================================================= */}

        <section className="privacy-card">
          <div className="card-heading">
            <div className="heading-icon">
              <RefreshCw size={22} />
            </div>

            <div>
              <h2>9. Policy Updates</h2>

              <p>
                We may periodically revise this Privacy Policy to reflect
                improvements in our services, legal requirements, or security
                practices.
              </p>

              <p>
                Whenever significant changes are made, the updated version will
                be published on this page along with the latest revision date.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================= */}

        {/* 10. CONTACT */}

        {/* ================================================= */}

        <section className="privacy-card">
          <div className="card-heading">
            <div className="heading-icon">
              <Mail size={22} />
            </div>

            <div>
              <h2>10. Contact Us</h2>

              <p>
                If you have any questions regarding this Privacy Policy,
                handling of personal information, or your privacy rights, please
                contact us using the Feedback or Contact section available
                within the HaqDar platform.
              </p>

              <div className="contact-box">
                <p>
                  <strong>Email:</strong> support@haqdar.in
                </p>

                <p>
                  <strong>Platform:</strong> HaqDar Feedback & Contact Center
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
}
