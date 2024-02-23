import React, { useState } from "react";

function ImageForm({ addImage }) {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addImage({ imageUrl, caption });
    setImageUrl("");
    setCaption("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Image URL:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>
      <label>
        Caption:
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </label>
      <button type="submit">Add Image</button>
    </form>
  );
}

export default ImageForm;
