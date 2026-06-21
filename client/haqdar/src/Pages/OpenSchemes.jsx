import "../Components/OpenSchems/Open.css";
import SchemeHeader from "../Components/OpenSchems/SchemeHeader";
import SchemeEligibility from "../Components/OpenSchems/SchemeEligibility";
import SchemeDocuments from "../Components/OpenSchems/SchemeDocuments";
import SchemeSteps from "../Components/OpenSchems/SchemeSteps";
import SchemeResources from "../Components/OpenSchems/SchemeResources";
import SchemeAIHelp from "../Components/OpenSchems/SchemeAIHelp";
import SchemeAbout from "../Components/OpenSchems/SchemeAbout";

export default function OpenSchemes({ scheme, onClose }) {
  if (!scheme) return null;
  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />

      <div className="os-container">
        <SchemeHeader scheme={scheme} onClose={onClose} />

        <div className="os-top">
          <div className="os-left">
            <SchemeAbout  scheme={scheme} />

            <SchemeEligibility scheme={scheme} />

            <div className="os-bottom-grid">
              <SchemeDocuments scheme={scheme} />
              <SchemeSteps scheme={scheme} />
            </div>
          </div>

          <div className="os-right">
            <SchemeAIHelp />
            <SchemeResources />
          </div>
        </div>
      </div>
    </>
  );
}
