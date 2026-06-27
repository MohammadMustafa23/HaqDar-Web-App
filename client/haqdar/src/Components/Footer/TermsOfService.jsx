import Footer from "./Footer";
import "./TermsOfService.css";
import {
  FileText,
  UserCheck,
  Bot,
  Shield,
  Copyright,
  Ban,
  AlertTriangle,
  RefreshCw,
  XCircle,
  Mail,
} from "lucide-react";

const terms = [
  {
    icon: <FileText size={20} />,
    title: "1. Acceptance of Terms",
    text: "By accessing or using HaqDar, you agree to comply with these Terms of Service. If you do not agree, please discontinue using the platform.",
  },
  {
    icon: <UserCheck size={20} />,
    title: "2. User Responsibilities",
    text: "Users are responsible for maintaining accurate account information, protecting login credentials, and using the platform only for lawful purposes.",
  },
  {
    icon: <Bot size={20} />,
    title: "3. AI Recommendations",
    text: "HaqDar uses Artificial Intelligence to recommend government schemes. These recommendations are informational only and do not guarantee eligibility or approval.",
  },
  {
    icon: <Shield size={20} />,
    title: "4. Account Security",
    text: "You are responsible for maintaining the confidentiality of your account. Any activity performed through your account is your responsibility.",
  },
  {
    icon: <Copyright size={20} />,
    title: "5. Intellectual Property",
    text: "All content including logos, design, graphics, software, and text belongs to HaqDar and may not be copied or redistributed without permission.",
  },
  {
    icon: <Ban size={20} />,
    title: "6. Prohibited Activities",
    text: "Users must not misuse the platform by attempting unauthorized access, spreading malicious content, impersonating others, or disrupting services.",
  },
  {
    icon: <AlertTriangle size={20} />,
    title: "7. Limitation of Liability",
    text: "HaqDar is provided 'as is'. We are not responsible for any losses, damages, or decisions made based on recommendations provided by the platform.",
  },
  {
    icon: <RefreshCw size={20} />,
    title: "8. Changes to the Service",
    text: "We may update, improve, modify, or discontinue certain features at any time without prior notice to improve the platform.",
  },
  {
    icon: <XCircle size={20} />,
    title: "9. Termination",
    text: "Accounts violating these Terms of Service or engaging in misuse may be suspended or permanently terminated.",
  },
  {
    icon: <Mail size={20} />,
    title: "10. Contact Us",
    text: "For questions regarding these Terms of Service, please contact us through the Feedback or Contact section available on the HaqDar platform.",
  },
];

export default function TermsOfService() {
  return (
    <>
    <div className="tos-page">

      <div className="tos-header">
        <h1>Terms of Service</h1>

        <p className="updated">
          Last Updated: June 26, 2026
        </p>

        <div className="intro-box">
          Welcome to <strong>HaqDar</strong>. These Terms of Service govern your
          access to and use of the HaqDar website, mobile application, and
          related services. By using the platform, you agree to comply with
          these terms.
        </div>
      </div>

      <div className="tos-list">

        {terms.map((item, index) => (
          <div key={index} className="tos-card">

            <div className="icon">
              {item.icon}
            </div>

            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

          </div>
        ))}

      </div>

    </div>
    <Footer/>
    </>
  );
}