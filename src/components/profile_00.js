import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { FaUnlock, FaUserGear, FaUserMinus } from "react-icons/fa6";
import Button from "./UI/Button";
import classes from "./Profile.module.css"; // Import the CSS module for styling

export default function Profile() {
    const { user } = useContext(UserContext);
    user.full_name = `${user.first_name} ${user.last_name}`; // Use template literals
    const navigate = useNavigate();

    // Redirect to login page if no user is logged in
    useEffect(() => {
        if (!user) {
            navigate("/login"); // Navigate to login if user is not set
        }
        document.title = `${user.full_name}'s Profile`; // Update page title
    }, [user, navigate]);

    // Show a loading message if user is not yet available
    if (!user) {
        return <p className={classes.loading}>Loading user data...</p>;
    }

    return (
        <div className={classes.profileContainer}>
            <h1>{user.first_name}'s Profile</h1>
            <img
                src={user.user_image}
                alt={user.full_name}
                className={classes.profileImage}
            />
            <div className={classes.infoContainer}>
                <p>
                    <strong>Name:</strong> {user.full_name}
                </p>
                <p>
                    <strong>Username:</strong> {user.username}
                </p>
                <p>
                    <strong>Email:</strong> {user.email}
                </p>
                <p>
                    <strong>Birthday:</strong> {user.dob}
                </p>
                <p>
                    <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                    <strong>Address:</strong> {user.address}
                </p>
            </div>

            <div className={classes.actionButtons}>
                <NavLink to={"/update_password"}>
                    <Button className="button">
                        <FaUnlock /> Update Password
                    </Button>
                </NavLink>

                <NavLink to={"/update_profile"}>
                    <Button className="info-button">
                        <FaUserGear /> Edit Profile
                    </Button>
                </NavLink>
                <Button className="warning-button">
                    <FaUserMinus /> Delete Profile
                </Button>
            </div>
        </div>
    );
}
