import "../Components/OpenSchems/Open.css";
import SchemeHeader from "../Components/OpenSchems/SchemeHeader";
import SchemeEligibility from "../Components/OpenSchems/SchemeEligibility";
import SchemeDocuments from "../Components/OpenSchems/SchemeDocuments";
import SchemeSteps from "../Components/OpenSchems/SchemeSteps";
import SchemeResources from "../Components/OpenSchems/SchemeResources";
import SchemeAIHelp from "../Components/OpenSchems/SchemeAIHelp";
import SchemeAbout from "../Components/OpenSchems/SchemeAbout";
import { useState,useEffect } from "react";
import { saveScheme, removeScheme, isSaved } from "../utils/bookmark.js";
import AiSidebar from "./AiSidebar";

export default function OpenSchemes({ scheme, onClose }) {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    if (scheme?.id) {
      setSaved(isSaved(scheme.id));
    }
  }, [scheme]);

  const handleBookmark = () => {
    if (saved) {
      removeScheme(scheme.id);
      setSaved(false);
    } else {
      saveScheme(scheme);
      setSaved(true);
    }
  };
  if (!scheme) return null;
  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />

      <div className="os-container">
        <SchemeHeader onClose={onClose} />

        {/* Scrollable Area */}
        <div className="os-scroll">
          <div className="os-top">
            <div className="os-left">
              <SchemeAbout scheme={scheme} saved={saved} handleBookmark={handleBookmark}/>

              <SchemeEligibility scheme={scheme} />

              <div className="os-bottom-grid">
                <SchemeDocuments scheme={scheme} />

                <SchemeSteps scheme={scheme} />
              </div>
            </div>

            <div className="os-right">
              <SchemeAIHelp onOpen={() => setIsAiOpen(true)} />

              <SchemeResources scheme={scheme} />
            </div>
          </div>
        </div>
      </div>

      <AiSidebar isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </>
  );
}
