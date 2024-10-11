import React, { useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import Input from "./Input";

export default function ImageUpload() {
    const [imageFile, setImageFile] = useState(null);
    const [imageURL, setImageURL] = useState("");
    const [publicId, setPublicId] = useState("");
    console.log(publicId);

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!imageFile) {
            alert("Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", "ml_default");

        try {
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dppk10edk/image/upload",
                formData
            );

            console.log(response);

            console.log("Image Uploaded:", response.data.secure_url);
            setImageURL(response.data.secure_url);
            setPublicId(response.data.public_id);
        } catch (error) {
            console.error("Error uploading the image:", error);
        }
    };

    const handleDelete = async () => {
        if (!publicId) {
            alert("No image to delete.");
            return;
        }

        try {
            const timestamp = Math.round(new Date().getTime() / 1000);
            const apiKey = "111519175462964";
            const apiSecret = "TZGo3zPKni0ORmSRQPzVt68f1sI";

            // Create the string to sign
            const stringToSign = `public_id=${publicId}&timestamp=${timestamp}`;

            // Generate the SHA1 signature using CryptoJS
            const signature = CryptoJS.SHA1(stringToSign + apiSecret).toString(
                CryptoJS.enc.Hex
            );

            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dppk10edk/image/destroy",
                {
                    public_id: publicId,
                    timestamp: timestamp,
                    signature: signature,
                    api_key: apiKey,
                }
            );

            if (response.data.result === "ok") {
                console.log("Image deleted successfully");
                setImageURL("");
                setPublicId("");
            } else {
                console.error("Error deleting image:", response.data);
            }
        } catch (error) {
            console.error("Error deleting the image:", error);
        }
    };
    
    return (
        <div>
            <Input
                label="Image*"
                id="image"
                type="file"
                accept="image/*"
                name="user_image"
                onChange={handleImageChange}
            />
            {/* <input type="file" onChange={handleImageChange} /> */}
            {!imageURL && (
                <button type="button" onClick={handleUpload}>
                    Upload Image
                </button>
            )}

            {imageURL && (
                <button type="button" onClick={handleDelete}>
                    Delete Image
                </button>
            )}
            <br />
            <br />

            {imageURL && (
                <div>
                    <img
                        src={imageURL}
                        alt="Uploaded"
                        style={{ width: "300px" }}
                    />
                </div>
            )}
        </div>
    );
}
