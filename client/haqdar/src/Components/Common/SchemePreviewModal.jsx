// import "./SchemePreviewModal.css";
// import { useEffect } from "react";
// import { X } from "lucide-react";

// export default function SchemePreviewModal({ open, scheme, onClose }) {
//   useEffect(() => {
//     if (!open) return;

//     document.body.style.overflow = "hidden";

//     const handleEscape = (e) => {
//       if (e.key === "Escape") onClose();
//     };

//     window.addEventListener("keydown", handleEscape);

//     return () => {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", handleEscape);
//     };
//   }, [open, onClose]);

//   if (!open || !scheme) return null;

//   return (
//     <div className="spm-overlay" onClick={onClose}>
//       <div className="spm-modal" onClick={(e) => e.stopPropagation()}>
//         <div className="spm-header">
//           <h2>{scheme.name}</h2>

//           <button onClick={onClose}>
//             <X />
//           </button>
//         </div>

//         <div className="spm-body">
//           <div className="spm-item">
//             <span>Scheme Number</span>
//             <p>{scheme.no}</p>
//           </div>

//           <div className="spm-item">
//             <span>Scheme Type</span>
//             <p>{scheme.schemeType}</p>
//           </div>

//           <div className="spm-item">
//             <span>Category</span>
//             <p>{scheme.category}</p>
//           </div>

//           <div className="spm-item">
//             <span>Beneficiary</span>
//             <p>{scheme.beneficiary}</p>
//           </div>

//           <div className="spm-item">
//             <span>Status</span>
//             <p>{scheme.status}</p>
//           </div>

//           <hr />

//           <h3>Eligibility</h3>

//           <div className="spm-item">
//             <span>Gender</span>
//             <p>{scheme.eligibility.gender}</p>
//           </div>

//           <div className="spm-item">
//             <span>Caste</span>
//             <p>{scheme.eligibility.caste}</p>
//           </div>

//           <div className="spm-item">
//             <span>Age</span>
//             <p>
//               {scheme.eligibility.age.min} - {scheme.eligibility.age.max}
//             </p>
//           </div>

//           <div className="spm-item">
//             <span>Income</span>
//             <p>₹ {scheme.eligibility.income}</p>
//           </div>

//           <hr />

//           <div className="spm-item">
//             <span>Benefit</span>
//             <p>{scheme.benefit}</p>
//           </div>

//           <div className="spm-item">
//             <span>Documents</span>

//             <ul>
//               {scheme.documents.map((doc) => (
//                 <li key={doc}>{doc}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="spm-item">
//             <span>Apply Link</span>

//             <a href={scheme.apply} target="_blank" rel="noreferrer">
//               {scheme.apply}
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
