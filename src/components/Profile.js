import React, { useContext, useEffect } from "react";
import classes from "./Profile.module.css";
import { UserContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import RelatedProducts from "./client/RelatedProducts";

const skincareSubCategories = ["Face", "Body", "Sun", "Men"];

const ProfilePage = () => {
    const { user, handleLogOut } = useContext(UserContext);
    const navigate = useNavigate();
    const full_name = `${user.first_name} ${user.last_name}`; // Use template literals
    const randomSubCategory =
        skincareSubCategories[
            Math.floor(Math.random() * skincareSubCategories.length)
        ];

    // Redirect to login page if no user is logged in
    useEffect(() => {
        if (!user) {
            navigate("/login"); // Navigate to login if user is not set
        }
        document.title = `${full_name}'s Profile`; // Update page title
    }, [user, navigate, full_name]);

    // Show a loading message if user is not yet available
    if (!user) {
        return <p className={classes.loading}>Loading user data...</p>;
    }

    return (
        <div className={classes["profile-page"]}>
            <div className={classes["sidebar"]}>
                <div className={classes["profile-card"]}>
                    <h3>Hi {user.first_name}</h3>
                    <a
                        href="https://www.clarinsusa.com/en/address-list"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        PROFILE & PREFERENCES
                    </a>
                    <div className={classes["tier-card"]}>
                        <span>Tier: Like</span>
                        <h2>50</h2>
                        <p>points available</p>
                        <a
                            href="https://www.clarinsusa.com/en/earn-points"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            HOW TO EARN POINTS
                        </a>
                    </div>
                </div>

                <div className={classes["menu"]}>
                    <h4>MY ORDERS</h4>
                    <ul>
                        <li>
                            <Link to={"/user/orders"}>Order history</Link>
                        </li>
                        <li>
                            <a
                                href="https://www.clarinsusa.com/en/manage-subscription"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Subscription
                            </a>
                        </li>
                    </ul>
                    <h4>OFFERS</h4>
                    <ul>
                        <li>
                            <a
                                href="https://www.clarinsusa.com/on/demandware.store/Sites-clarinsus-Site/en_US/Account-ShowPersonalizedOffers"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                My offers
                            </a>
                        </li>
                    </ul>

                    <h4>SERVICES</h4>
                    <ul>
                        <li>
                            <a
                                href="https://www.clarinsusa.com/on/demandware.store/Sites-clarinsus-Site/en_US/Account-ShowServicesPage"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Clarins services
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.clarinsusa.com/on/demandware.store/Sites-clarinsus-Site/en_US/GiftCertificate-AccountCheckBalance"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Check gift card balance
                            </a>
                        </li>
                    </ul>

                    <button
                        className={classes["logout-btn"]}
                        onClick={handleLogOut}
                    >
                        Logout
                    </button>
                </div>
            </div>

            <div className={classes["main-content"]}>
                <h2>My profile</h2>
                <div className={classes["wrapper"]}>
                    <div className={classes["personal-info"]}>
                        <h3>Personal information & preferences</h3>
                        <div className={classes["info-card"]}>
                            <p>
                                <strong>Name: &nbsp;</strong>{" "}
                                <span>{full_name}</span>
                            </p>
                            <p>
                                <strong>Email: &nbsp;</strong>{" "}
                                <span>{user.email ?? "Not Provided"}</span>
                            </p>
                            <p>
                                <strong>Birthday: &nbsp;</strong>{" "}
                                <span>{user.dob ?? "Not Provided"}</span>
                            </p>
                            <p>
                                <strong>Phone: &nbsp;</strong>{" "}
                                <span>{user.phone ?? "Not Provided"}</span>
                            </p>
                            <p>
                                <strong>Password:&nbsp;</strong>{" "}
                                <span>************</span>
                            </p>
                            <p>
                                <strong>
                                    Communication preferences:&nbsp;
                                </strong>
                                <span>Email</span>
                            </p>
                            <p>
                                <strong>Loyalty Status:&nbsp;</strong>
                                <span> Member</span>
                            </p>
                            <Link
                                to={"/update_profile"}
                                className={classes["edit-btn"]}
                            >
                                EDIT
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2>Services</h2>
                        <div className={classes["services-container"]}>
                            <div className={classes["service"]}>
                                <img
                                    src="https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw55f71596/images/myaccount/live-consultation-contactus.png"
                                    alt="Live Consultation"
                                    className={classes["service-image"]}
                                />
                                <div className={classes["service-details"]}>
                                    <h3>Live Consultation</h3>
                                    <p>
                                        Treat yourself to a complimentary beauty
                                        consultation with a Clarins coach!
                                    </p>
                                    <button
                                        className={classes["discover-button"]}
                                    >
                                        <a
                                            href="https://www.clarinsusa.com/en/live-consultation/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Discover
                                        </a>
                                    </button>
                                </div>
                            </div>

                            <div className={classes["service"]}>
                                <img
                                    src="https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw336997c0/images/myaccount/subscription-my-account.gif"
                                    alt="Subscription"
                                    className={classes["service-image"]}
                                />
                                <div className={classes["service-details"]}>
                                    <h3>Subscription</h3>
                                    <p>
                                        Enjoy 10% off, free shipping, and 3 free
                                        samples with recurring orders.
                                    </p>
                                    <button
                                        className={classes["discover-button"]}
                                    >
                                        <a
                                            href="https://www.clarinsusa.com/en/autoreplenishment-service.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Discover
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RelatedProducts
                    productId={1}
                    mainCategory="Skincare"
                    subCategory={randomSubCategory}
                />
            </div>
        </div>
    );
};

export default ProfilePage;
