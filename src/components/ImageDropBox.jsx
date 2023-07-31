import React from "react";
import { useState } from "react";
import './ImageDropBox.css';



const ImageDropBox = ({ onImageAdded }) => {
    const [dragOver, setDragOver] = useState(false);
  
    const handleDragEnter = (e) => {
      e.preventDefault();
      setDragOver(true);
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();
      setDragOver(true);
    };
  
    const handleDragLeave = (e) => {
      e.preventDefault();
      setDragOver(false);
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      setDragOver(false);
  
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        const imageFile = files[0];
        onImageAdded(imageFile);
      }
    };
  
    return (
      <div
        className={`image-drop-box ${dragOver ? "drag-over" : ""}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <span>Drag and drop an image here or click to select</span>
      </div>
    );
  };
  
  export default ImageDropBox;