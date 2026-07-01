import "./RegisterScheme.css";

import AdminNav from "../../Admin/AdminDashBoard/AdminNavbar.jsx";
import AdminFooter from "../../Admin/AdminDashBoard/AdminFooter.jsx";
import ProcessingOverlay from "../../Components/Common/ProcessingOverlay.jsx";
import AIImportCard from "../../Admin/RegisterScheme/AIImportCard";
import BasicDetails from "../../Admin/RegisterScheme/BasicDetails";
import EligibilityCriteria from "../../Admin/RegisterScheme/EligibilityCriteria";
import ApplicationDetails from "../../Admin/RegisterScheme/ApplicationDetails";
import ActionButtons from "../../Admin/RegisterScheme/ActionButtons";
import RegistrationGuidelines from "../../Admin/RegisterScheme/RegistrationGuidelines";
import { useLocation, useNavigate } from "react-router-dom";
import {
  uploadSchemes,
  getSchemeById,
  registerScheme,
  updateScheme,
} from "../../Services/scheme.service.js";
import { toast } from "sonner";
import { useState, useEffect } from "react";

const RegisterScheme = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const mode = location.state?.mode || "add";
  const schemeId = location.state?.schemeId;
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [schemeData, setSchemeData] = useState({
    no: "",
    name: "",
    schemeType: "",
    category: "",
    beneficiary: "",

    eligibility: {
      gender: "All",
      caste: "All",
      age: {
        min: "",
        max: "",
      },
      income: "",
    },

    benefit: "",
    documents: [],
    apply: "",
    status: "Active",
  });

  const [processState, setProcessState] = useState({
    open: false,
    success: false,
    title: "",
    subtitle: "",
  });
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== "application/json" && !file.name.endsWith(".json")) {
      toast.error("Please select a valid JSON file.");
      return;
    }
    try {
      setUploading(true);
      setProgress(0);
      setStatus("Uploading JSON...");

      const res = await uploadSchemes(file, (event) => {
        if (!event.total) return;
        const percent = Math.round((event.loaded * 100) / event.total);
        setProgress(percent);
        if (percent === 100) {
          setStatus("Processing uploaded schemes...");
        }
      });
      setProgress(100);
      setStatus("Upload completed");
      setFileName(file.name);
      toast.success(res.message);
      setTimeout(() => {
        setUploading(false);
        setProgress(0);
        setStatus("");
      }, 1200);
    } catch (error) {
      setUploading(false);
      setProgress(0);
      setStatus("");

      toast.error(error.response?.data?.message || "Failed to upload schemes.");
    } finally {
      e.target.value = "";
    }
  };

  const handleReset = () => {
    setSchemeData({
      no: "",
      name: "",
      schemeType: "",
      category: "",
      beneficiary: "",

      eligibility: {
        gender: "All",
        caste: "All",
        age: {
          min: "",
          max: "",
        },
        income: "",
      },

      benefit: "",
      documents: [],
      apply: "",
      description: "",
      website: "",
      deadline: "",
      status: "Active",
    });
  };

  const handleSubmit = async () => {
    if (loading) return;
    try {
      setLoading(true);
      // Show Processing Overlay
      setProcessState({
        open: true,
        success: false,
        title: mode === "edit" ? "Updating Scheme" : "Publishing Scheme",
        subtitle: "Saving scheme to database...",
      });
      let res;
      if (mode === "edit") {
        res = await updateScheme(schemeId, schemeData);
      } else {
        res = await registerScheme(schemeData);
      }
      // Update Status
      setProcessState((prev) => ({
        ...prev,
        subtitle: "Syncing AI Search...",
      }));
      // Small delay so user can see the second step
      await new Promise((resolve) => setTimeout(resolve, 700));
      // Success State
      setProcessState({
        open: true,
        success: true,
        title: mode === "edit" ? "Scheme Updated" : "Scheme Published",
        subtitle: "Redirecting...",
      });
      toast.success(
        res.message ||
          (mode === "edit"
            ? "Scheme updated successfully."
            : "Scheme published successfully."),
      );

      // Show success for 1 second
      setTimeout(() => {
        navigate("/admin-scheme", { replace: true });
      }, 1000);
    } catch (error) {
      console.error(error);

      // Close Overlay on Error
      setProcessState({
        open: false,
        success: false,
        title: "",
        subtitle: "",
      });

      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };
  const fetchScheme = async () => {
    try {
      const res = await getSchemeById(schemeId);
      setSchemeData({
        no: res.scheme.no,
        name: res.scheme.name,
        schemeType: res.scheme.schemeType,
        category: res.scheme.category,
        beneficiary: res.scheme.beneficiary,

        eligibility: {
          gender: res.scheme.eligibility.gender,
          caste: res.scheme.eligibility.caste,
          age: {
            min: res.scheme.eligibility.age.min,
            max: res.scheme.eligibility.age.max,
          },
          income: res.scheme.eligibility.income,
        },

        benefit: res.scheme.benefit,
        documents: res.scheme.documents,
        apply: res.scheme.apply,
        status: res.scheme.status,
      });
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    if (mode === "edit" && schemeId) {
      fetchScheme();
    }
  }, [mode, schemeId]);

  return (
    <>
      {/* Admin Navbar */}
      <AdminNav />

      <div className="rs-page">
        <div className="rs-container">
          {/* Header */}
          <div className="rs-header">
            <h1>Register New Scheme</h1>

            <p>
              Add a new welfare program to the HaqDar database. Use the AI
              Import feature to quickly populate fields from official government
              gazettes or notifications.
            </p>
          </div>

          {/* AI Import */}
          <AIImportCard
            fileName={fileName}
            uploading={uploading}
            progress={progress}
            status={status}
            onFileUpload={handleFileUpload}
          />

          {/* Basic Details */}
          <BasicDetails schemeData={schemeData} setSchemeData={setSchemeData} />

          {/* Eligibility */}
          <EligibilityCriteria
            schemeData={schemeData}
            setSchemeData={setSchemeData}
          />

          {/* Application */}
          <ApplicationDetails
            schemeData={schemeData}
            setSchemeData={setSchemeData}
          />

          {/* Action Buttons */}
          <ActionButtons
            mode={mode}
            loading={loading}
            onReset={handleReset}
            onPublish={handleSubmit}
            processState={processState}
          />

          {/* Guidelines */}
          <RegistrationGuidelines />
        </div>
      </div>

      {/* Admin Footer */}
      <AdminFooter />

      <ProcessingOverlay
        open={processState.open}
        success={processState.success}
        title={processState.title}
        subtitle={processState.subtitle}
      />
    </>
  );
};

export default RegisterScheme;
