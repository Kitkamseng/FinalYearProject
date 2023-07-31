import React, { useState } from "react";
import './PostCreation.css';
import Header from './../components/Header';
import ImageDropBox from "../components/ImageDropBox";


function PostCreation(){
    const [imageFile, setImageFile] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleImageAdded = (file) => {
        setImageFile(file);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Submit the form and send the imageFile to the backend along with other form data
        // For example, using FormData and fetch or Axios
        // Don't forget to handle the image file on your backend API as well
      };

    return (
        <>
            <Header />
            <form onSubmit={handleFormSubmit}>
                <div className="post-main-container">
                    <div className="post-container">
                        <div className="post-creation-title">
                            <input
                                type="text"
                                id="title"
                                className="title-input"
                                placeholder="Insert Title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="post-images-container">
                            <div className="image-title">
                                Insert Image:
                            </div>
                            <div className="image-dropbox-container">
                                <ImageDropBox onImageAdded={handleImageAdded} />
                                {imageFile && <img src={URL.createObjectURL(imageFile)} alt="Uploaded Preview" />}
                            </div>
                            <br />
                            <div className="image-description-container">
                                <label htmlFor="description">Description:</label>
                                <textarea
                                id="description"
                                placeholder="Text (Optional)"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={4}
                                />
                            </div>
                            <button type="submit">Create Post</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default PostCreation;