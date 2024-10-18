import { useState } from "react";
import Input from "./UI/Input.js";
import {
    hasMinLength,
    isEmail,
    isEmpty,
    isEqualsToOtherValue,
} from "../util/validation.js";
import axios from "axios";
import classes from "./UserForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import Button from "./UI/Button.js";

export default function Register() {
    const [firstNameError, setFirstNameError] = useState();
    const [lastNameError, setLastNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [usernameError, setUsernameError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [password2Error, setPassword2Error] = useState();
    const [dobError, setDobError] = useState();
    const [phoneError, setPhoneError] = useState();
    const [addressError, setAddressError] = useState();
    const [imageError, setImageError] = useState();
    const [serverError, setServerError] = useState();
    const [imageFile, setImageFile] = useState(null);
    const [imageURL, setImageURL] = useState("");
    const [publicId, setPublicId] = useState("");
    console.log(publicId);

    const navigate = useNavigate();
    document.title = "Registration";
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
            setUsernameError("Username is required");
            document.getElementById("username").focus();
            return;
        }
        setUsernameError(false);

        if (isEmpty(userData.password)) {
            setPasswordError("Password is required");
            document.getElementById("password").focus();
            return;
        }
        setPasswordError(false);

        if (isEmpty(userData.password2)) {
            setPassword2Error("Confirm password is required");
            document.getElementById("password2").focus();
            return;
        }
        setPassword2Error(false);

        if (!isEqualsToOtherValue(userData.password, userData.password2)) {
            setPassword2Error("Passwords must match");
            document.getElementById("password2").focus();
            return;
        }
        setPassword2Error(false);

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

        delete userData.password2;
        userData.user_image = imageURL;
        console.log(userData);

        try {
            const response = await axios.post(
                `http://localhost/project/user/register`,
                userData,
                {
                    headers: {
                        "Content-Type": "application/json", // Sending data as JSON
                    },
                }
            );

            console.log(response);

            if (response.data.type === "success") {
                navigate("/login");
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
                <h1 className="user-form-title">Register a new account</h1>
                <br />
                <p className={classes["text-he"]}>
                    Welcome! We invite you to create an account by completing
                    the form below. If you already have an account, please
                    re-enter your email address on the previous screen.
                </p>
                {serverError && (
                    <span className="error-message">({serverError})</span>
                )}
                <br />
                <div className={classes["form-row"]}>
                    <Input
                        label="First Name*"
                        id="firstName"
                        type="text"
                        name="first_name"
                        autoFocus
                        error={firstNameError}
                    />
                    <Input
                        label="Last Name*"
                        id="lastName"
                        type="text"
                        name="last_name"
                        error={lastNameError}
                    />
                </div>

                <div className={classes["form-row"]}>
                    <Input
                        label="Email*"
                        id="email"
                        type="email"
                        name="email"
                        error={emailError}
                    />

                    <Input
                        label="Username*"
                        id="username"
                        type="text"
                        name="username"
                        error={usernameError}
                    />
                </div>

                <div className={classes["form-row"]}>
                    <Input
                        label="Password*"
                        id="password"
                        type="password"
                        name="password"
                        error={passwordError}
                    />
                    <Input
                        label="Confirm Password*"
                        id="password2"
                        type="password"
                        name="password2"
                        error={password2Error}
                    />
                </div>

                <div className={classes["form-row"]}>
                    <Input
                        label="Date of Birth*"
                        id="dob"
                        type="date"
                        name="dob"
                        error={dobError}
                    />

                    <Input
                        label="Phone*"
                        id="phone"
                        type="number"
                        name="phone"
                        error={phoneError}
                    />
                </div>

                <div className={classes["form-row"]}>
                    <Input
                        label="Address*"
                        id="address"
                        type="text"
                        name="address"
                        error={addressError}
                    />

                    <Input
                        label="Image*"
                        id="image"
                        type="file"
                        accept="image/*"
                        name="user_image"
                        error={imageError}
                        onChange={handleImageChange}
                    />
                </div>

                {imageFile && !imageURL ? (
                    <button type="button" onClick={handleUpload}>
                        Upload Image
                    </button>
                ) : (
                    ""
                )}

                {imageURL && (
                    <button type="button" onClick={handleDelete}>
                        Delete Image
                    </button>
                )}

                {imageURL && (
                    <div>
                        <img
                            src={imageURL}
                            alt="Uploaded"
                            style={{ width: "300px" }}
                            className="avatar-image"
                        />
                    </div>
                )}

                <p className={classes["form-actions"]}>
                    <Button className="button">Register</Button>
                </p>

                <p className="center">
                    Already had an account? <Link to="/login">Login here</Link>{" "}
                </p>
            </form>
        </>
    );
}
