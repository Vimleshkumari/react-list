import { useState, useEffect } from "react";

export default function Timer({ start }) {
  const [timer, setTimer] = useState(start);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Timer Started</h1>
      <div>{timer}</div>
    </div>
  );
}
