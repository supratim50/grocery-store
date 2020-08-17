import Input from "./input";
import PrimaryButton from "../buttons/primaryButton";

const InputWithButton = ({ placeholder, buttonText, classList }) => {
  return (
    <div
      className={`p-2 rounded-lg background-white d-flex justify-content-between align-items-center ${
        classList ? classList : ""
      }`}
    >
      <Input
        placeholder={placeholder}
        inputClass="py-md-2 px-md-3"
        classList="flex-fill"
      />
      <PrimaryButton classList="py-1 py-md-2 px-2 px-md-3" text={buttonText} />
    </div>
  );
};

export default InputWithButton;
