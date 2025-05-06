import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Menu from "./components/Menu";
import IntroStep from "./components/IntroStep";
import StepWrapper from "./components/StepWrapper";
import RegistrationStep from "./components/RegistrationStep";
import ValidationStep from "./components/ValidationStep";
import ThankYouStep from "./components/ThankyouStep";
import useApi from "./hooks/useApi";
import "./App.css";

const App = () => {
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState("");
  const [pin, setPin] = useState("");
  const { triggerPin, verifyPin, error, loading } = useApi();
  const navigate = useNavigate();

  const handleTriggerPin = async () => {
    try {
      const receivedPin = await triggerPin(phone, userId);
      alert("Your PIN is: " + receivedPin);
      setPin(receivedPin);
      navigate("/validation");
    } catch (err) {
      alert(err);
    }
  };

  const handleVerifyPin = async () => {
    try {
      const success = await verifyPin(pin, userId);
      if (success) {
        navigate("/thank-you");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="overlay">
      <div style={{ position: "relative", zIndex: 1 }}>
        <Menu />

        <Routes>
          <Route
            path="/"
            element={
              <StepWrapper visible={true}>
                <IntroStep onPlay={() => navigate("/registration")} />
              </StepWrapper>
            }
          />
          <Route
            path="/registration"
            element={
              <StepWrapper visible={true}>
                <RegistrationStep
                  phone={phone}
                  setPhone={setPhone}
                  userId={userId}
                  setUserId={setUserId}
                  onSubmit={handleTriggerPin}
                />
              </StepWrapper>
            }
          />
          <Route
            path="/validation"
            element={
              <StepWrapper visible={true}>
                <ValidationStep
                  pin={pin}
                  setPin={setPin}
                  onVerify={handleVerifyPin}
                  clearError={() => {}}
                />
              </StepWrapper>
            }
          />
          <Route
            path="/thank-you"
            element={
              <StepWrapper visible={true}>
                <ThankYouStep />
              </StepWrapper>
            }
          />
        </Routes>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default App;
