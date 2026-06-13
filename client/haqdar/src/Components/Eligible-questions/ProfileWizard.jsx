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

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  switch (step) {
    case 1:
      return <Age next={next} prev={prev} />;

    case 2:
      return <Gender next={next} prev={prev} />;

    case 3:
      return <Education next={next} prev={prev} />;

    case 4:
      return <Category next={next} prev={prev} />;

    case 5:
      return <Income next={next} prev={prev} />;

    case 6:
      return <District next={next} prev={prev} />;

    case 7:
      return <Occupation prev={prev} />;

    case 8:
      return <Pwd prev={prev} />;

    default:
      return <h2>Profile Completed 🎉</h2>;
  }
}