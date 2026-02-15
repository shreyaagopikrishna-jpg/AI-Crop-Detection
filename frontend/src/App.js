import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaCloudUploadAlt, FaRobot } from "react-icons/fa";

function App() {
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState("");

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name);
  };

  const handleDetect = () => {
  if (!fileName) {
    setResult("⚠️ Please upload a leaf image first!");
    return;
  }

  setResult("🌱 Analyzing image using AI model...");

  setTimeout(() => {
    setResult("✅ Healthy Leaf (Confidence: 94%)");
  }, 2000);
};


  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: "rgba(255,255,255,0.1)",
          padding: "40px",
          borderRadius: "20px",
          width: "400px",
          textAlign: "center",
          backdropFilter: "blur(10px)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
        }}
      >
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          🌾 Smart Crop AI
        </motion.h1>

        <p style={{ opacity: 0.8 }}>
          Detect plant diseases instantly using AI
        </p>

        <br />

        <motion.div whileHover={{ scale: 1.05 }}>
          <label
            style={{
              display: "block",
              padding: "15px",
              background: "#ffffff22",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <FaCloudUploadAlt size={24} />
            <br />
            Upload Leaf Image
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </label>
        </motion.div>

        <br />

        {fileName && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ fontSize: "14px" }}
          >
            📂 {fileName}
          </motion.p>
        )}

        <br />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDetect}
          style={{
            padding: "12px 25px",
            borderRadius: "30px",
            border: "none",
            background: "linear-gradient(90deg, #00c6ff, #0072ff)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          <FaRobot /> Detect Disease
        </motion.button>

        <br /><br />

        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              background: "#ffffff22",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            {result}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
