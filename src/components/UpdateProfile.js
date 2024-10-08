import { useContext, useState } from "react";
import Input from "./Input.js";
import {
    hasMinLength,
    isEmail,
    isEmpty,
    isEqualsToOtherValue,
} from "../util/validation.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App.js";

export default function Register() {
    const [firstNameError, setFirstNameError] = useState();
    const [lastNameError, setLastNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [usernameError, setUsernameError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [dobError, setDobError] = useState();
    const [phoneError, setPhoneError] = useState();
    const [addressError, setAddressError] = useState();
    const [imageError, setImageError] = useState();
    const [serverError, setServerError] = useState();
    const [avatarBase64, setAvatarBase64] = useState(""); // Store Base64 encoded image

    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    // console.log(user);

    // Function to convert image to Base64
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the selected file
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarBase64(reader.result); // Set the Base64 encoded image
            };
            reader.readAsDataURL(file); // Read file as Base64
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

        if (isEmpty(userData.password)) {
            setPasswordError("Last name is required");
            document.getElementById("password").focus();
            return;
        }
        setPasswordError(false);

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

        // if (!avatar) {
        //     setImageError("Image is required");
        //     document.getElementById("image").focus();
        //     return;
        // }
        // setImageError(false);

        // Include the Base64 encoded image in userData
        userData.buyer_image = avatarBase64; // Set the Base64 encoded image

        console.log(userData);

        try {
            const response = await axios.post(
                `http://localhost/project/user/profile`,
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
                //         // type = Error
                console.log("Registration failed: ", response.data.message);
                setServerError(response.data.message);
            }
        } catch (error) {
            console.error("Register request failed:", error);
        }
    }

    return (
        <>
            <form className="user-form" onSubmit={handleSubmit}>
                <h1 className="center">Update account</h1>

                {serverError && (
                    <span className="error-message">({serverError})</span>
                )}
                <br />
                <Input
                    label="user_id*"
                    id="user_id"
                    type="hidden"
                    name="user_id"
                    defaultValue={user.buyerId}
                />
                <Input
                    label="First Name*"
                    id="firstName"
                    type="text"
                    name="first_name"
                    autoFocus
                    error={firstNameError}
                    defaultValue={user.firstName ? user.firstName : ""}
                />

                <Input
                    label="Last Name*"
                    id="lastName"
                    type="text"
                    name="last_name"
                    error={lastNameError}
                    defaultValue={user.lastName ? user.lastName : ""}
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
                    defaultValue={user.userName ? user.userName : ""}
                />
                <Input
                    label="New Password*"
                    id="password"
                    type="password"
                    name="password"
                    error={passwordError}
                    defaultValue={user.password ? user.password : ""}
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

                <Input
                    label="Image*"
                    id="image"
                    type="file"
                    accept="image/*"
                    name="buyer_image"
                    error={imageError}
                    onChange={handleImageChange}
                />

                <p className="form-actions">
                    <button>{user ? "UPDATE" : "REGISTER"}</button>
                </p>

                <p>
                    Already had an account?{" "}
                    <Link to="/login">
                        <button type="button">Login</button>
                    </Link>{" "}
                    here
                </p>
            </form>
        </>
    );
}
