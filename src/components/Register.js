import React from "react";

export default function Register() {
    return (
        <>
            <form
                action="submit_form.php"
                method="POST"
                enctype="multipart/form-data"
            >
                <div>
                    <label for="username">Username*</label>
                    <input type="text" id="username" name="username" required />
                </div>

                <div>
                    <label for="firstName">First Name*</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                    />
                </div>

                <div>
                    <label for="lastName">Last Name*</label>
                    <input type="text" id="lastName" name="lastName" required />
                </div>

                <div>
                    <label for="email">Email*</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div>
                    <label for="password">Password*</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                    <p class="password-hint">
                        Minimum: ✔ 8 characters, ✔ 1 letter, ✔ 1 number, ✔ 1
                        special character
                    </p>
                </div>

                <div>
                    <label for="dob">Date of Birth</label>
                    <input type="date" id="dob" name="dob" />
                </div>

                <div>
                    <label for="phone">Phone Number*</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>

                <div>
                    <label for="address">Address*</label>
                    <input type="text" id="address" name="address" required />
                </div>

                <div>
                    <label for="avatar">Upload Avatar*</label>
                    <input
                        type="file"
                        id="avatar"
                        name="avatar"
                        accept="image/*"
                        required
                    />
                </div>

                <div class="radio-group">
                    <label>By email*</label>
                    <label>
                        <input
                            type="radio"
                            name="emailPreference"
                            value="yes"
                            required
                        />{" "}
                        Yes
                    </label>
                    <label>
                        <input type="radio" name="emailPreference" value="no" />{" "}
                        No
                    </label>
                </div>

                <p class="info-text">
                    Some state laws allow you to opt-out of the sharing of your
                    Personal Information with third parties for cross-context
                    behavioral advertising. To learn more, please visit our
                    Privacy Policy.
                </p>

                <button type="submit">Create Account</button>
            </form>
            {/* <form method="post" className="user-form">
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
                    <input
                        type="password"
                        placeholder="Confirm your password"
                    />
                </p>
                <p className="form-actions">
                    <button>Register</button>
                </p>
            </form> */}
        </>
    );
}
