import React from "react";

export default function Login() {
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

            <p className="form-actions">
                <button>Login</button>
            </p>
        </form>
    );
}
