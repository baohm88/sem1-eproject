import React from "react";

export default function Register() {
    return (
        <form method="post" className="user-form">
            <p>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter your username" />
            </p>
            <p>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your password" />
            </p>
            <p>
                <label htmlFor="">Confirm password</label>
                <input type="password" placeholder="Confirm your password" />
            </p>
            <p className="form-actions">
                <button>Register</button>
            </p>
        </form>
    );
}
