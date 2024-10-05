import axios from "axios";
import { useEffect, useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        async function postData() {
            // const response = await fetch("http://localhost/project/user/login");
            axios
                .get("http://localhost/project/user/login")
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    // Handle errors
                    console.error(
                        "There was an error fetching the data!",
                        error
                    );
                });
        }

        postData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { username, password };

        const response = await fetch("http://localhost/project/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Send JSON data
            },
            body: JSON.stringify(userData), // Convert the JS object to JSON
        });

        const result = await response.json(); // Assuming the response is in JSON format

        if (result.type === "success") {
            console.log(result);
        } else {
            console.log("Login failed:", result.message);
        }
    };

    return (
        <>
            <form method="POST" className="user-form" onSubmit={handleSubmit}>
                <p>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </p>
                <p>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </p>

                <p className="form-actions">
                    <button type="submit">Login</button>
                </p>
            </form>
        </>
    );
}
