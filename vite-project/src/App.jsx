import { useState, useEffect } from "react";
import { LoginForm } from "./LoginForm";

export const App = () => {
  const [clicks, setClicks] = useState(0);

	// ❌ Ефект записаний з помилкою!
  useEffect(() => {
    console.log("Clicks updated: ", clicks);
  }, [clicks]);

  return (
    <LoginForm />
  );
};
