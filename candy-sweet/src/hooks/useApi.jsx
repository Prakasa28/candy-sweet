import { useState } from "react";

const useApi = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const triggerPin = async (phone, userId) => {
    const payload = { msisdn: phone, country: "ae", user_id: userId };
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://0ct5ps-3001.csb.app/api/v1/trigger-pin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();

      setLoading(false);

      if (data.success) {
        return data.pin;
      } else {
        throw new Error("Failed to trigger PIN");
      }
    } catch (err) {
      setLoading(false);
      setError("Failed to trigger PIN.");
      console.error(err);
      throw err;
    }
  };

  const verifyPin = async (pin, userId) => {
    const payload = { country: "ae", user_id: userId, pin: Number(pin) };
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://0ct5ps-3001.csb.app/api/v1/verify-pin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      setLoading(false);

      if (data.success) {
        return true;
      } else {
        throw new Error(data.error || "Invalid PIN.");
      }
    } catch (err) {
      setLoading(false);
      setError(err.message || "Failed to verify PIN.");
      console.error(err);
      throw err;
    }
  };

  return {
    triggerPin,
    verifyPin,
    error,
    loading,
  };
};

export default useApi;
