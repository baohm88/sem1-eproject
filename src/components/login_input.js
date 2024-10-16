import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import classes from "./Register.module.css";
import Input from "./Input";

export default function Login() {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    document.title = "Account Login";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { username, password };
        try {
            const response = await axios.post(
                "http://localhost/project/user/login",
                userData,
                {
                    headers: {
                        "Content-Type": "application/json", // Sending data as JSON
                    },
                }
            );

            const resData = await response.data;

            if (resData.type === "success") {
                const user = resData.data;

                // Set user in the context
                setUser(user);
                setError(false);

                // Save the user object to localStorage as a JSON string
                localStorage.setItem("user", JSON.stringify(user));

                // Navigate to different routes based on user role
                if (user.isAdmin === 1) {
                    navigate("/products");
                } else {
                    navigate("/");
                }
            } else {
                console.log(resData.message);
                setError(resData.message);
            }
        } catch (error) {
            console.error("Login request failed:", error);
        }
    };

    return (
        <>
            <form className={classes["user-form"]} onSubmit={handleSubmit}>
                <h1 className="user-form-title">Log in or Sign up</h1>
                <br />
                <p></p>
                <p className="text-he">
                    Please enter your Username and Password:
                </p>
                {error && (
                    <span className="error-message">
                        Wrong username and/or password
                    </span>
                )}
                <br />

                <Input
                    label="Username*:"
                    id="username"
                    type="text"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <Input
                    label="Password*:"
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <p className="center">
                    <button type="submit" className={classes.button}>
                        LOGIN
                    </button>
                </p>
                <p className="center">
                    Don't have account yet?{" "}
                    <Link to="/register">Register here</Link>{" "}
                </p>
                <div className={classes["benefits-container"]}>
                    <div className={classes["benefit"]}>
                        <i className="fas fa-heart"></i> {<span>❤️</span>}
                        <p>Join Club &amp; receive 50 points</p>
                    </div>
                    <div className={classes["benefit"]}>
                        <i className="fas fa-gift"></i> {<span>🎁</span>}
                        <p>Earn points &amp; rewards today</p>
                    </div>
                    <div className={classes["benefit"]}>
                        <i className="fas fa-shipping-fast"></i>{" "}
                        {<span>🚚</span>}
                        <p>Fast checkout &amp; order tracking</p>
                    </div>
                </div>
            </form>
        </>
    );
}
