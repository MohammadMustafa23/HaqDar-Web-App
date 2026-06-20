import "./Open.css";
import { CircleCheck } from "lucide-react";

export default function SchemeSteps() {
  const steps = [
    {
      title: "Check Eligibility",
      description:
        "Review the scheme requirements and ensure you meet the eligibility criteria.",
    },
    {
      title: "Gather Documents",
      description:
        "Keep all required documents ready, including identity, address, and supporting certificates.",
    },
    {
      title: "Submit Application",
      description:
        "Apply through the official portal, mobile app, Common Service Centre (CSC), or concerned department.",
    },
    {
      title: "Track & Receive Benefits",
      description:
        "Track your application status and receive benefits after successful verification and approval.",
    },
  ];

  return (
    <div className="steps-section">
      <h2 className="steps-title">
        <CircleCheck size={22} />
        Step-by-Step Application
      </h2>

      <div className="steps-timeline">
        {steps.map((step, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-number">
              {index + 1}
            </div>

            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}