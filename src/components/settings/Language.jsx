import { Globe } from "lucide-react";
import SettingSection from "./SettingSection";
import Selection from "./Selection";

const LANGUAGES = [
  "English",
  "Spanish",
  "Mandarin",
  "French",
  "German",
  "Japanese",
  "Arabic",
  "Hindi",
  "Russian",
  "Portuguese",
];

const CURRENCY = [
  "USD",
  "EUR",
  "JPY",
  "GBP",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "INR",
  "BRL"
]

const Language = () => {
  return (
    <SettingSection icon={Globe} title="Laguage & Region">
      <div className="flex flex-col justify-center">
        <Selection label='Language' options={LANGUAGES} />
        <Selection label='Currecy' options={CURRENCY} />
      </div>
    </SettingSection>
  );
};

export default Language;
