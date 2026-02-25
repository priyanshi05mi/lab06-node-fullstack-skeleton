import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Backend not connected"));
  }, []);

  return (
    <div>
      <h1>Lab 06 - Fullstack Skeleton</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;