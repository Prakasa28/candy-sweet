import React from "react";
import InputField from "./InputField";

const RegistrationStep = ({ phone, setPhone, userId, setUserId, onSubmit }) => {
  return (
    <>
      <InputField
        label="Enter your phone number:"
        placeholder="Phone number"
        maxLength={10}
        value={phone}
        onChange={(e) => {
          const onlyNums = e.target.value.replace(/\D/g, "");
          setPhone(onlyNums);
        }}
      />
      <InputField
        label="Enter your User ID:"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={onSubmit}>Send PIN</button>
    </>
  );
};

export default RegistrationStep;
