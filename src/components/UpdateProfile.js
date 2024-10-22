import { useContext, useEffect, useState } from "react";
import Input from "./UI/Input";
import { hasMinLength, isEmail, isEmpty } from "../util/validation.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App.js";
import classes from "./UserForm.module.css";
import Button from "./UI/Button.js";

export default function UpdateProfile() {
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
    const [isLoading, setIsLoading] = useState(false);

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    //useEffect to set imageURL
    useEffect(() => {
        setImageURL(user.user_image);
    }, [user]);

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            return;
        }

        if (!file.type.startsWith("image/")) {
            setImageError("Please select a valid image file.");
            return;
        }

        // For image preview, use FileReader to convert the image into base64
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setImageFile(fileReader.result); 
            setImageURL(fileReader.result); 
        };

        fileReader.readAsDataURL(file); // Convert to base64 for preview
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
            setImageURL(imageUrl);
            return imageUrl; // Return the image URL for use in handleSubmit
        } catch (error) {
            console.error("Error uploading the image:", error);
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        const fd = new FormData(e.target);
        const userData = Object.fromEntries(fd.entries());

        // validate user inputs
        if (isEmpty(userData.first_name)) {
            setFirstNameError("First name is required");
            document.getElementById("firstName").focus();
            setIsLoading(false);
            return;
        }
        setFirstNameError(null);

        if (isEmpty(userData.last_name)) {
            setLastNameError("Last name is required");
            document.getElementById("lastName").focus();
            setIsLoading(false);
            return;
        }
        setLastNameError(null);

        if (isEmpty(userData.email) || !isEmail(userData.email)) {
            setEmailError("Please enter a valid email");
            document.getElementById("email").focus();
            setIsLoading(false);
            return;
        }
        setEmailError(null);

        if (isEmpty(userData.username)) {
            setUsernameError("Last name is required");
            document.getElementById("username").focus();
            setIsLoading(false);
            return;
        }
        setUsernameError(null);

        if (isEmpty(userData.dob)) {
            setDobError("Date of birth is required");
            document.getElementById("dob").focus();
            setIsLoading(false);
            return;
        }
        setDobError(null);

        if (isEmpty(userData.phone) || !hasMinLength(userData.phone, 9)) {
            setPhoneError("Please enter a valid phone number");
            document.getElementById("phone").focus();
            setIsLoading(false);
            return;
        }
        setPhoneError(null);

        if (isEmpty(userData.address)) {
            setAddressError("Address is required");
            document.getElementById("address").focus();
            setIsLoading(false);
            return;
        }
        setAddressError(null);

        try {
            let uploadedImageUrl = user.user_image; // Default to the existing image URL

            // Only upload the image if a new file was selected
            if (imageFile) {
                uploadedImageUrl = await handleUploadImage();
            }

            userData.user_image = uploadedImageUrl;

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
        setIsLoading(false);
    }

    console.log(user);

    return (
        <>
            <form className={classes["user-form"]} onSubmit={handleSubmit}>
                <h1 className="center">Update account</h1>
                <br />
                {serverError && (
                    <span className="error-message">({serverError})</span>
                )}
                <br />

                <Input
                    id="user_id"
                    type="hidden"
                    name="user_id"
                    defaultValue={user.user_id}
                />

                <div className={classes["form-row"]}>
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
                </div>

                <div className={classes["form-row"]}>
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
                </div>

                <div className={classes["form-row"]}>
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
                </div>

                <div className={classes["form-row"]}>
                    <Input
                        label="Address*"
                        id="address"
                        type="text"
                        name="address"
                        error={addressError}
                        defaultValue={user.address ? user.address : ""}
                    />
                    <Input
                        label="Image"
                        id="image"
                        type="file"
                        accept="image/*"
                        name="user_image"
                        error={imageError}
                        onChange={handleImageChange}
                    />
                </div>

                <img
                    src={imageFile ? imageFile : imageURL || user.user_image}
                    alt={user.full_name}
                    style={{ width: "200px" }}
                />

                <p className={classes["form-actions"]}>
                    <Button
                        className="text-button"
                        onClick={() => navigate("/profile")}
                    >
                        Cancel
                    </Button>
                    <Button className="button" disabled={isLoading}>
                        Save Changes
                    </Button>
                </p>
            </form>
        </>
    );
}
