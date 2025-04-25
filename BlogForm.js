import React, { useState, useEffect } from "react";
import axios from "axios";

function BlogForm({ setBlog, setImageUrl }) {
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState("informative");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/generate", {
      topic,
      keywords,
      tone,
    });
    setBlog(res.data.blog);
  };

  const fetchImage = async (query) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query, per_page: 1 },
      headers: {
        Authorization: "Client-ID YOUR_UNSPLASH_ACCESS_KEY",
      },
    });
    const url = response.data.results[0]?.urls?.regular;
    setImageUrl(url);
  };

  useEffect(() => {
    if (topic) fetchImage(topic);
  }, [topic]);

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
      <input placeholder="Keywords" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
      <select value={tone} onChange={(e) => setTone(e.target.value)}>
        <option value="informative">Informative</option>
        <option value="casual">Casual</option>
        <option value="professional">Professional</option>
      </select>
      <button type="submit">Generate</button>
    </form>
  );
}

export default BlogForm;
