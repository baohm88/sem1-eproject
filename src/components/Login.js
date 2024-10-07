import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function Login() {
    const { setUser } = useContext(UserContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { username, password };

        console.log(userData);

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
            console.log(response);

            if (resData.type === "success") {
                const user = resData.data;
                // Set user in the context
                setUser(user);
                setError(false);

                localStorage.setItem("user", user);
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
            <form className="user-form" onSubmit={handleSubmit}>
                <h1 className="center">Login</h1>
                <br />
                {error && (
                    <p className="error-message">
                        Wrong username and/or password
                    </p>
                )}
                <br />
                <p>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </p>
                <p>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </p>
                <p className="form-actions">
                    <button type="submit">LOGIN</button>
                </p>
                <p>
                    Don't have account yet?{" "}
                    <Link to="/register">
                        <button type="button">Register</button>
                    </Link>{" "}
                    here
                </p>
            </form>
        </>
    );
}
