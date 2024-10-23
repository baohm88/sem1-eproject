import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isEmpty, isEqualsToOtherValue } from "../../util/validation";
import classes from "../UserForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

export default function UpdatePassword() {
    const { user } = useContext(UserContext);
    const [errors, setErrors] = useState({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });
    const [serverError, setServerError] = useState(null);
    const navigate = useNavigate();

    document.title = "Update Password";

    // Validate user inputs
    const validateForm = (userData) => {
        let validationErrors = {};

        if (isEmpty(userData.old_password)) {
            validationErrors.oldPassword = "Current password is required";
        }
        if (isEmpty(userData.new_password)) {
            validationErrors.newPassword = "New password is required";
        }
        if (isEmpty(userData.confirm_new_password)) {
            validationErrors.confirmNewPassword =
                "Confirm new password is required";
        }
        if (
            !isEqualsToOtherValue(
                userData.new_password,
                userData.confirm_new_password
            )
        ) {
            validationErrors.confirmNewPassword = "Passwords must match";
        }

        return validationErrors;
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.target);
        const userData = Object.fromEntries(fd.entries());

        const validationErrors = validateForm(userData);

        // Set errors if validation fails
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Clear errors and submit form
        setErrors({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
        delete userData.confirm_new_password;

        try {
            const response = await axios.post(
                `http://localhost/project/user/change_password`,
                userData,
                {
                    headers: {
                        "Content-Type": "application/json", // Sending data as JSON
                    },
                }
            );

            if (response.data.type === "success") {
                navigate("/profile");
            } else {
                setServerError(response.data.message); // Handle server error
            }
        } catch (error) {
            console.error("Update password request failed:", error);
            setServerError("An error occurred while updating the password.");
        }
    }

    return (
        <form className={classes["user-form"]} onSubmit={handleSubmit}>
            <h1 className={classes["user-form-title"]}>Update Password</h1>
            {serverError && (
                <span className={classes["error-message"]}>{serverError}</span>
            )}

            <input type="hidden" value={user.user_id} name="user_id" />

            <div className={classes["form-row"]}>
                <Input
                    label="Current Password*"
                    id="old_password"
                    type="password"
                    name="old_password"
                    autoFocus
                    error={errors.oldPassword}
                />
            </div>

            <div className={classes["form-row"]}>
                <Input
                    label="New Password*"
                    id="new_password"
                    type="password"
                    name="new_password"
                    error={errors.newPassword}
                />
            </div>

            <div className={classes["form-row"]}>
                <Input
                    label="Confirm New Password*"
                    id="confirm_new_password"
                    type="password"
                    name="confirm_new_password"
                    error={errors.confirmNewPassword}
                />
            </div>

            <div className={classes["form-actions"]}>
                <Button
                    className="text-button"
                    onClick={() => navigate("/profile")}
                >
                    Cancel
                </Button>

                <Button className="button" type="submit">
                    Save Changes
                </Button>
            </div>
        </form>
    );
}
