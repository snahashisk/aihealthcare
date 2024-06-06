import React, { useState } from "react";

const PdfTextExtractor = ({ isOpen, closeModal }) => {
  const [text, setText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      setError("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        setText(data.extracted_text);
      } else {
        const errorData = await response.json();
        setError(
          errorData.error ||
            "Failed to extract text. Server responded with an error."
        );
      }
    } catch (err) {
      console.error("Error uploading file:", err);
      setError("Error uploading file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center pb-3">
          <p className="text-2xl font-bold text-teal-600">
            Upload Pathology Report
          </p>
          <button onClick={closeModal} className="text-lg font-semibold">
            X
          </button>
        </div>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileUpload}
          disabled={isLoading}
        />
        {isLoading && <p>Loading and extracting text from PDF...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!isLoading && text && (
          <div style={{ whiteSpace: "pre-wrap", marginTop: "20px" }}>
            <p>{text}</p>
          </div>
        )}
        <button
          onClick={closeModal}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={isLoading}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PdfTextExtractor;
