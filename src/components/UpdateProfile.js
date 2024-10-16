import { useContext, useEffect, useState } from "react";
import Input from "./UI/Input";
import { hasMinLength, isEmail, isEmpty } from "../util/validation.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App.js";
import CryptoJS from "crypto-js";
import { upload } from "@testing-library/user-event/dist/upload.js";
import classes from "./UserForm.module.css";
export default function Register() {
    const [firstNameError, setFirstNameError] = useState();
    const [lastNameError, setLastNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [usernameError, setUsernameError] = useState();
    const [dobError, setDobError] = useState();
    const [phoneError, setPhoneError] = useState();
    const [addressError, setAddressError] = useState();
    const [imageError, setImageError] = useState();
    const [serverError, setServerError] = useState();
    const [imageFile, setImageFile] = useState(null);
    const [imageURL, setImageURL] = useState("");
    const [publicId, setPublicId] = useState("");

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    //useEffect to set imageURL
    useEffect(() => {
        setImageURL(user.user_image);
        const image_publicId = user.user_image.split("/").pop().split(".")[0];
        console.log(image_publicId);
        setPublicId(image_publicId);
    }, [user]);

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setImageFile(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }

    const handleUploadImage = async () => {
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

            const imageUrl = response.data.secure_url;
            console.log("Image Uploaded:", response.data.secure_url);
            setImageURL(imageUrl);
            setPublicId(response.data.public_id);
            return imageUrl; // Return the image URL for use in handleSubmit
        } catch (error) {
            console.error("Error uploading the image:", error);
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const fd = new FormData(e.target);
        const userData = Object.fromEntries(fd.entries());

        // validate user inputs
        if (isEmpty(userData.first_name)) {
            setFirstNameError("First name is required");
            document.getElementById("firstName").focus();
            return;
        }
        setFirstNameError(false);

        if (isEmpty(userData.first_name)) {
            setFirstNameError("First name is required");
            document.getElementById("firstName").focus();
            return;
        }
        setFirstNameError(false);

        if (isEmpty(userData.last_name)) {
            setLastNameError("Last name is required");
            document.getElementById("lastName").focus();
            return;
        }
        setLastNameError(false);

        if (isEmpty(userData.email) || !isEmail(userData.email)) {
            setEmailError("Please enter a valid email");
            document.getElementById("email").focus();
            return;
        }
        setEmailError(false);

        if (isEmpty(userData.username)) {
            setUsernameError("Last name is required");
            document.getElementById("username").focus();
            return;
        }
        setUsernameError(false);

        if (isEmpty(userData.dob)) {
            setDobError("Date of birth is required");
            document.getElementById("dob").focus();
            return;
        }
        setDobError(false);

        if (isEmpty(userData.phone) || !hasMinLength(userData.phone, 9)) {
            setPhoneError("Please enter a valid phone number");
            document.getElementById("phone").focus();
            return;
        }
        setPhoneError(false);

        if (isEmpty(userData.address)) {
            setAddressError("Address is required");
            document.getElementById("address").focus();
            return;
        }
        setAddressError(false);

        if (!imageFile) {
            setImageError("Image is required");
            document.getElementById("image").focus();
            return;
        }
        setImageError(false);

        try {
            const uploadedImageUrl = await handleUploadImage(); // Wait for the image to be uploaded
            userData.user_image = uploadedImageUrl; // Set the uploaded image URL to userData

            const response = await axios.post(
                "http://localhost/project/user/profile",
                userData,
                {
                    headers: {
                        "Content-Type": "application/json", // Sending data as JSON
                    },
                }
            );

            if (response.data.type === "success") {
                setUser(userData);
                navigate("/profile");
            } else {
                console.log("Registration failed: ", response.data.message);
                setServerError(response.data.message);
            }
        } catch (error) {
            console.error("Register request failed:", error);
        }
    }

    return (
        <>
            <form className={classes["user-form"]} onSubmit={handleSubmit}>
                <h1 className="center">Update account</h1>

                {serverError && (
                    <span className="error-message">({serverError})</span>
                )}
                <br />
                <div>
                    <Input
                        id="user_id"
                        type="hidden"
                        name="user_id"
                        defaultValue={user.user_id}
                    />
                    <Input
                        label="First Name*"
                        id="firstName"
                        type="text"
                        name="first_name"
                        autoFocus
                        error={firstNameError}
                        defaultValue={user.first_name}
                    />

                    <Input
                        label="Last Name*"
                        id="lastName"
                        type="text"
                        name="last_name"
                        error={lastNameError}
                        defaultValue={user.last_name}
                    />

                    <Input
                        label="Email*"
                        id="email"
                        type="email"
                        name="email"
                        error={emailError}
                        defaultValue={user.email ? user.email : ""}
                    />

                    <Input
                        label="Username*"
                        id="username"
                        type="text"
                        name="username"
                        error={usernameError}
                        defaultValue={user.username}
                    />

                    <Input
                        label="Date of Birth*"
                        id="dob"
                        type="date"
                        name="dob"
                        error={dobError}
                        defaultValue={user.dob ? user.dob : ""}
                    />

                    <Input
                        label="Phone*"
                        id="phone"
                        type="number"
                        name="phone"
                        error={phoneError}
                        defaultValue={user.phone ? user.phone : ""}
                    />

                    <Input
                        label="Address*"
                        id="address"
                        type="text"
                        name="address"
                        error={addressError}
                        defaultValue={user.address ? user.address : ""}
                    />
                </div>

                <Input
                    label="Image*"
                    id="image"
                    type="file"
                    accept="image/*"
                    name="user_image"
                    error={imageError}
                    onChange={handleImageChange}
                />

                {!imageFile && <p>No image picked yet.</p>}
                {imageFile && (
                    <img
                        src={imageFile}
                        alt={`${user.full_name}`}
                        style={{ width: "200px" }}
                    />
                )}

                <div className="form-actions-container">
                    <button>Submit</button>

                    <span className="center">
                        Don't want to update anything?
                    </span>
                    <Link className="center" to="/profile">
                        Cancel
                    </Link>
                </div>
            </form>
        </>
    );
}
