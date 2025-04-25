import React, { useState } from "react";
import BlogForm from "./BlogForm";
import jsPDF from "jspdf";
import "./App.css";

function App() {
  const [blog, setBlog] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const checkGrammar = async () => {
    const res = await fetch("http://localhost:5000/check-grammar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: blog }),
    });
    const data = await res.json();
    alert(`Found ${data.matches.length} issues.`);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text(blog, 10, 10);
    doc.save("blog.pdf");
  };

  return (
    <div className="App">
      <h1>AI Blog Generator</h1>
      <BlogForm setBlog={setBlog} setImageUrl={setImageUrl} />
      {imageUrl && <img src={imageUrl} alt="Suggested" style={{ maxWidth: "100%" }} />}
      {blog && (
        <div>
          <h2>Generated Blog:</h2>
          <p>{blog}</p>
          <button onClick={checkGrammar}>Check Grammar</button>
          <button onClick={exportToPDF}>Export as PDF</button>
        </div>
      )}
    </div>
  );
}

export default App;
