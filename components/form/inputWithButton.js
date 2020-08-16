import Input from "./input";
import PrimaryButton from "../buttons/primaryButton";

const InputWithButton = () => {
  return (
    <div className="p-2 rounded-lg background-white d-flex align-items-center">
      <Input
        placeholder="Enter Voucher Code here"
        inputClass="py-md-2 px-md-3"
      />
      <PrimaryButton classList="py-1 py-md-2 px-2 px-md-3" text="Apply" />
    </div>
  );
};

export default InputWithButton;
