import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

import { FaUnlock } from "react-icons/fa6";
import { FaUserGear } from "react-icons/fa6";
import { FaUserMinus } from "react-icons/fa6";

export default function Profile() {
    const { user } = useContext(UserContext);
    user.full_name = user.first_name + " " + user.last_name;
    const navigate = useNavigate();
    console.log(user);

    // Redirect to login page if no user is logged in
    useEffect(() => {
        if (!user) {
            navigate("/login"); // Navigate to login if user is not set
        }
    }, [user, navigate]);

    // Show a loading message if user is not yet available
    if (!user) {
        return <p>Loading user data...</p>;
    }

    return (
        <div className="center">
            <h1> {user.first_name}'s Profile</h1>
            <img
                src={user.user_image}
                alt={user.full_name}
                style={{
                    width: "10rem",
                    height: "10rem",
                    borderRadius: "10rem",
                }}
            />
            <p>Name: {user.full_name}</p>
            <p>Username: {user.username} </p>
            <p>Email: {user.email} </p>
            <p>Birthday: {user.dob} </p>
            <p>Phone: {user.phone} </p>
            <p>Address: {user.address} </p>

            <NavLink to={"/update_password"}>
                <button>
                    <FaUnlock /> Change Password
                </button>
            </NavLink>
            <NavLink to={"/update_profile"}>
                <button>
                    <FaUserGear /> Edit Profile
                </button>
            </NavLink>
            <button>
                {" "}
                <FaUserMinus /> Delete Profile
            </button>
        </div>
    );
}
