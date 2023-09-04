import React, { useEffect, useState } from "react";
import './PostCreation.css';
import Header from './../components/Header';
import ImageDropBox from "../components/ImageDropBox";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";


function PostCreation(){
    let navigate = useNavigate();

    const [selectedImage, setSelectedImage] = useState(null);

    const [imageFile, setImageFile] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // const handleImageAdded = (file) => {
    //     setImageFile(file);
    // }

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        // Perform validation if needed (e.g., file type, file size)
        if (file) {
            const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
            const maxSizeInBytes = 10 * 1024 * 1024; // 10MB

            if (allowedTypes.indexOf(file.type) === -1) {
                alert("Invalid file type. Please choose a JPEG or PNG image.");
                return;
            }

            if (file.size > maxSizeInBytes) {
                alert("File size exceeds the limit (10MB). Please choose a smaller image.");
                return;
            }

            // If validation passes, set the selected image in the component's state
            setSelectedImage(file);
            
            // Set the imageURL in the state
            setImageFile(URL.createObjectURL(file));

        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('image', selectedImage);
        formData.append('postTitle', title);
        formData.append('postDescription', description);

        console.log("Data being sent to the backend:", formData);
        console.log("postTitle:", formData.get("postTitle"));
        console.log("postDescription:", formData.get("postDescription"));
        console.log("image:", formData.get("image"));



        try{
            const response = await axios.post("http://localhost:8080/post", formData, {
                headers:{
                    // "Content-Type": "application/json", 
                    "Content-Type": "multipart/form-data", 
                },
            });

            if(response.status === 200){
                toast.success("Successfully Created!")
                navigate("/homepage");
            } else {
                toast.error("An error occurred!")
            }
        } catch (error) {
            toast.error("Please check on requirements again!")
        }

      };


    const handleCancelButton = () => {
        navigate('/selectionpage');
    }
    
    return (
        <>
            <Header />
            <form onSubmit={(e) => handleFormSubmit(e)}>
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
                                <div className="centered-content">
                                    <input 
                                        type="file"
                                        id="imageUpload"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(e)}
                                    />
                                </div>
                                {selectedImage && (
                                    <img
                                        src={URL.createObjectURL(selectedImage)}
                                        alt="Selected Image Preview"
                                        className="selected-image-preview"
                                        style={{ maxWidth: '100%', maxHeight: '300px', overflow: 'auto' }}
                                    />
                                )}
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
                            <div className="submit-box">
                                <button 
                                    className="create-button"
                                >
                                    Create Post
                                </button>
                                <button 
                                    className="cancel-button"
                                    onClick={handleCancelButton}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer position="bottom-right"/>
        </>
    )
}

export default PostCreation;