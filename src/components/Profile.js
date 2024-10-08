import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function Profile() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

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
        <div>
            <h1 className="center"> {user.firstName}'s Profile</h1>
            <p>
                Name: {user.firstName} {user.lastName}
            </p>
            <p>Username: {user.userName} </p>
            <p>Email: {user.email} </p>
            <p>Birthday: {user.dob} </p>
            <p>Phone: {user.phone} </p>
            <p>Address: {user.address} </p>

            <NavLink to={"/update_profile"}>
                <button>Edit Profile</button>
            </NavLink>
            <button>Delete Profile</button>
        </div>
    );
}
