import { useState } from "react";
import Input from "./Input.js";
import {
    hasMinLength,
    isEmail,
    isEmpty,
    isEqualsToOtherValue,
} from "../util/validation.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
    const [avatar, setAvatar] = useState();

    const navigate = useNavigate();

    const handleImageChange = (e) => {
        setAvatar(e.target.files[0]); // Get the selected file
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const fd = new FormData(); // Use FormData to handle multipart data

        const first_name = e.target.first_name.value;
        if (isEmpty(first_name)) {
            setFirstNameError("First name is required");
            document.getElementById("firstName").focus();
            return;
        }
        setFirstNameError(false);
        fd.append("first_name", first_name);

        const last_name = e.target.last_name.value;
        if (isEmpty(last_name)) {
            setLastNameError("Last name is required");
            document.getElementById("lastName").focus();
            return;
        }
        setLastNameError(false);
        fd.append("last_name", last_name);

        const email = e.target.email.value;
        if (isEmpty(email) || !isEmail(email)) {
            setEmailError("Please enter a valid email");
            document.getElementById("email").focus();
            return;
        }
        setEmailError(false);
        fd.append("email", email);

        const username = e.target.username.value;
        if (isEmpty(username)) {
            setUsernameError("Last name is required");
            document.getElementById("username").focus();
            return;
        }
        setUsernameError(false);
        fd.append("username", username);

        const password = e.target.password.value;
        if (isEmpty(password)) {
            setPasswordError("Last name is required");
            document.getElementById("password").focus();
            return;
        }
        setPasswordError(false);
        fd.append("password", password);

        const password2 = e.target.password2.value;
        if (isEmpty(password2)) {
            setPassword2Error("Last name is required");
            document.getElementById("password2").focus();
            return;
        }
        setPassword2Error(false);

        if (!isEqualsToOtherValue(password, password2)) {
            setPassword2Error("Passwords must match");
            document.getElementById("password2").focus();
            return;
        }
        setPassword2Error(false);

        const dob = e.target.dob.value;
        if (isEmpty(dob)) {
            setDobError("Date of birth is required");
            document.getElementById("dob").focus();
            return;
        }
        setDobError(false);
        fd.append("dob", dob);

        const phone = e.target.phone.value;
        if (isEmpty(phone) || !hasMinLength(phone, 9)) {
            setPhoneError("Please enter a valid phone number");
            document.getElementById("phone").focus();
            return;
        }
        setPhoneError(false);
        fd.append("phone", phone);

        const address = e.target.address.value;
        if (isEmpty(address)) {
            setAddressError("Address is required");
            document.getElementById("address").focus();
            return;
        }
        setAddressError(false);
        fd.append("address", address);

        if (!avatar) {
            setImageError("Image is required");
            document.getElementById("image").focus();
            return;
        }
        setImageError(false);
        fd.append("image", avatar);

        // console.log(fd);

        try {
            const response = await axios.post(
                "http://localhost/project/user/register",
                fd, // Pass the FormData directly
                {
                    headers: {
                        "Content-Type": "multipart/form-data", // Make sure the content type is correct for file uploads
                    },
                }
            );

            console.log(response);

            if (response.data.type === "success") {
                navigate("/login");
            } else {
                setServerError(response.data.message);
            }
        } catch (error) {
            console.error("Register request failed:", error);
        }
    }

    return (
        <>
            <form className="user-form" onSubmit={handleSubmit}>
                <h1 className="center">Register a new account</h1>

                {serverError && (
                    <span className="error-message">({serverError})</span>
                )}
                <br />
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
                    name="image"
                    error={imageError}
                    onChange={handleImageChange}
                />

                <p className="form-actions">
                    <button>REGISTER</button>
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
