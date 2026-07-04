import { useState, useEffect } from "react";
import Age from "./Age";
import Gender from "./Gender";
import Education from "./Education";
import Category from "./Category";
import Income from "./Income";
import District from "./District";
import Occupation from "./Occupation";
import Appswal from '../Common/AppSwal.js'
import Pwd from "./Pwd";
import {
  generateRecommendations,
  canEditProfile,
} from "../../Services/recommendation.service";
import { getCurrentUser } from "../../Services/auttantication.service";
import { useNavigate } from "react-router-dom";
import PageLoader from "../Common/PageLoader";

export default function ProfileWizard({ setProfileData }) {
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [canAccess, setCanAccess] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    education: "",
    category: "",
    income: "",
    district: "",
    occupation: "",
    pwd: "",
  });

  useEffect(() => {
    const verifyAccess = async () => {
      try {
        const response = await canEditProfile();

        if (response.profileCompleted && !response.allowEdit) {
          navigate("/home-page", {
            replace: true,
          });

          return;
        }
        setCanAccess(true);
      } catch (error) {
        navigate("/home-page", {
          replace: true,
        });
        console.log(error);
      } finally {
        setCheckingAccess(false);
      }
    };

    verifyAccess();
  }, []);

  if (checkingAccess) {
    return (
        <PageLoader  text="Verifying Access..."/>
    );
  }

  if (!canAccess) {
    return null;
  }
  console.log(formData);
  const handleSubmit = async () => {
  if (loading) return;

  try {
    setLoading(true);

    const data = await generateRecommendations(formData);

    // API returned failure
    if (!data?.success) {
      throw new Error(
          "Unable to generate recommendations. Please try again."
      );
    }

    const userData = await getCurrentUser();

    if (userData?.success) {
      setProfileData(userData);
    }

    navigate("/home-page", {
      replace: true,
      state: {
        recommendations: data.SchemsMatch,
      },
    });

  } catch (error) {
    console.error(error);

      Appswal.fire({
      icon: "error",
      title: "Recommendation Failed",
      text:
        error?.response?.data?.message ||
        error?.message ||
        "Unable to generate recommendations. Please try again later.",
      confirmButtonText: "Try Again",
    });

  } finally {
    setLoading(false);
  }
};

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  switch (step) {
    case 1:
      return <Age next={next} prev={prev} setFormData={setFormData} />;

    case 2:
      return <Gender next={next} prev={prev} setFormData={setFormData} />;

    case 3:
      return <Education next={next} prev={prev} setFormData={setFormData} />;

    case 4:
      return <Category next={next} prev={prev} setFormData={setFormData} />;

    case 5:
      return <Income next={next} prev={prev} setFormData={setFormData} />;

    case 6:
      return <District next={next} prev={prev} setFormData={setFormData} />;

    case 7:
      return <Occupation next={next} prev={prev} setFormData={setFormData} />;

    case 8:
      return (
        <Pwd
          next={next}
          prev={prev}
          setFormData={setFormData}
          loading={loading}
          handleSubmit={handleSubmit}
        />
      );

    default:
      return <h2>Profile Completed 🎉</h2>;
  }
}
