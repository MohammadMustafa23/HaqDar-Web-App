import "./FAQ.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
export default function FAQ() {
  const faqs = [
    {
      question: "What is HaqDar?",
      answer:
        "HaqDar is a platform that helps citizens discover government schemes and benefits they may be eligible for.",
    },
    {
      question: "How does HaqDar determine my eligibility?",
      answer:
        "HaqDar analyzes your profile information and matches it with relevant government schemes.",
    },
    {
      question: "Is HaqDar an official government website?",
      answer:
        "No. HaqDar is an informational platform and is not affiliated with any government department.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <div className="faq-wrapper">
        {faqs.map((data, index) => (
          <div className="faq-card" key={index}>
            <div
              className="faq-card-header"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h2>{data.question}</h2>

              <span className="faq-card-icon">
                {openIndex === index ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </span>
            </div>

            {openIndex === index && (
              <p className="faq-card-answer">{data.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="faq-support-section">
        <h2>Still have questions?</h2>

        <div className="faq-support-buttons">
          <button className="faq-support-btn">Contact Support</button>

          <button className="faq-eligibility-btn">Check Eligibility</button>
        </div>
      </div>
    </div>
  );
}
