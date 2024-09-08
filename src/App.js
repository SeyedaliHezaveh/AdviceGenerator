import { useState, useCallback } from "react";

export default function AdviceGenerator() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = useCallback(async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const { slip } = await response.json();
      setAdvice(slip.advice);
    } catch (error) {
      console.error("Failed to fetch advice:", error);
      setAdvice("Could not fetch advice. Please try again later.");
    }
  }, []);

  return (
    <div>
      <h1>{advice || "Click the button to get some advice!"}</h1>
      <button onClick={fetchAdvice}>Get Advice</button>
    </div>
  );
}
