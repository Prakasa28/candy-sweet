import React from "react";
import InputField from "./InputField";

const ValidationStep = ({ pin, setPin, onVerify, clearError }) => {
  return (
    <>
      <InputField
        label="Enter the PIN you received:"
        placeholder="PIN"
        maxLength={20}
        value={pin}
        onChange={(e) => {
          setPin(e.target.value);
          clearError();
        }}
      />
      <button onClick={onVerify}>Verify PIN</button>
    </>
  );
};

export default ValidationStep;
