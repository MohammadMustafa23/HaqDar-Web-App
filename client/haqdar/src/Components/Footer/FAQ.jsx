import "./FAQ.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import AiSidebar from "../../Pages/AiSidebar";
export default function FAQ({ faqRef }) {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const faqs = [
    {
      question: "What is HaqDar?",
      answer:
        "HaqDar is a platform that helps citizens discover government schemes and benefits they may be eligible for, based on their profile — age, income, location, occupation, and more.",
    },
    {
      question: "How does HaqDar determine my eligibility?",
      answer:
        "You fill in a few basic details about yourself, and HaqDar matches your profile against the eligibility criteria of various government schemes to show you the ones you likely qualify for.",
    },
    {
      question: "Is HaqDar an official government website?",
      answer:
        "No. HaqDar is an independent informational platform built to simplify scheme discovery. It is not affiliated with, endorsed by, or connected to any government department.",
    },
    {
      question: "Is my personal information safe with HaqDar?",
      answer:
        "Yes. HaqDar only uses the information you provide to match you with relevant schemes. Your data is not sold or shared with third parties.",
    },
    {
      question: "Is HaqDar free to use?",
      answer:
        "Yes, HaqDar is completely free to use. There are no hidden charges for browsing or checking your eligibility for any scheme.",
    },
    {
      question: "How accurate is the scheme information on HaqDar?",
      answer:
        "We try to keep scheme details up to date, but eligibility rules and benefits can change. Always verify the final details on the official scheme website before applying.",
    },
    {
      question: "What if I need help applying for a scheme?",
      answer:
        "HaqDar provides guidance and links to the official application process for each scheme, but the actual application must be completed on the respective government portal.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="faq-container" ref={faqRef}>
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
          <button className="faq-support-btn" onClick={() => setIsAiOpen(true)}>
            Contact Support
          </button>
        </div>
      </div>
      <AiSidebar isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </div>
  );
}
