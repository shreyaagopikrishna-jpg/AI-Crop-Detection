import React, { useState } from "react";

function App() {
  const [result, setResult] = useState(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌾 AI Smart Crop Disease Detection</h1>
      <input type="file" onChange={handleUpload} />

      {result && (
        <div>
          <h2>Disease: {result.disease}</h2>
          <h3>Confidence: {result.confidence * 100}%</h3>
        </div>
      )}
    </div>
  );
}

export default App;
