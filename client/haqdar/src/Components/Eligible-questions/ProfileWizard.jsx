import { useState } from "react";
import Age from "./Age";
import Gender from "./Gender";
import Education from "./Education";
import Category from "./Category";
import Income from "./Income";
import District from "./District";
import Occupation from "./Occupation";
import Pwd from './Pwd'


export default function ProfileWizard() {
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

  console.log(formData);
  
  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  switch (step) {
    case 1:
      return <Age next={next} prev={prev}  setFormData={setFormData} />;

    case 2:
      return <Gender next={next} prev={prev}   setFormData={setFormData} />;

    case 3:
      return <Education next={next} prev={prev}  setFormData={setFormData} />;

    case 4:
      return <Category next={next} prev={prev}   setFormData={setFormData} />;

    case 5:
      return <Income next={next} prev={prev}    setFormData={setFormData}/>;

    case 6:
      return <District next={next} prev={prev}    setFormData={setFormData}/>;

    case 7:
      return <Occupation next={next} prev={prev}    setFormData={setFormData}/>;

    case 8:
      return <Pwd next={next} prev={prev}   setFormData={setFormData}/>;

    default:
      return <h2>Profile Completed 🎉</h2>;
  }
}