import React, { useState } from "react";
import ImageForm from "./ImageForm";
import ImageList from "./ImageList";

function ImageBoard() {
  const [images, setImages] = useState([]);

  const addImage = (newImage) => {
    setImages([...images, newImage]);
  };

  return (
    <div>
      <h2>Image Board</h2>
      <ImageForm addImage={addImage} />
      <ImageList images={images} />
    </div>
  );
}

export default ImageBoard;
