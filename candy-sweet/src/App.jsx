import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import IntroStep from "./components/IntroStep";
import StepWrapper from "./components/StepWrapper";
import RegistrationStep from "./components/RegistrationStep";
import ValidationStep from "./components/ValidationStep";
import ThankYouStep from "./components/ThankyouStep";
import useApi from "./hooks/useApi";

const App = () => {
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState("");
  const [pin, setPin] = useState("");
  const [step, setStep] = useState("intro-page");
  const { triggerPin, verifyPin, error, loading } = useApi();

  const handleTriggerPin = async () => {
    try {
      const receivedPin = await triggerPin(phone, userId);
      alert("Your PIN is: " + receivedPin);
      setPin(receivedPin);
      setStep("enter-pin");
    } catch (err) {
      alert(err);
    }
  };

  const handleVerifyPin = async () => {
    try {
      const success = await verifyPin(pin, userId);
      if (success) {
        setStep("thank-you");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="overlay">
      <div style={{ position: "relative", zIndex: 1 }}>
        <Menu />
        <StepWrapper visible={step === "intro-page"}>
          <IntroStep onPlay={() => setStep("enter-phone")} />
        </StepWrapper>

        <StepWrapper visible={step === "enter-phone"}>
          <RegistrationStep
            phone={phone}
            setPhone={setPhone}
            userId={userId}
            setUserId={setUserId}
            onSubmit={handleTriggerPin}
          />
        </StepWrapper>

        <StepWrapper visible={step === "enter-pin"}>
          <ValidationStep
            pin={pin}
            setPin={setPin}
            onVerify={handleVerifyPin}
            clearError={() => {}}
          />
        </StepWrapper>

        <StepWrapper visible={step === "thank-you"}>
          <ThankYouStep />
        </StepWrapper>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default App;
