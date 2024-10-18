import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={classes["footer"]}>
            <div className={classes["footer-section"]}>
                <h4>CATEGORIES</h4>
                <ul>
                    <li><a href="#">Cleansers</a></li>
                    <li><a href="#">Toners</a></li>
                    <li><a href="#">Serums</a></li>
                    <li><a href="#">Moisturizers</a></li>
                    <li><a href="#">Eye Care</a></li>
                    <li><a href="#">Exfoliators & Masks</a></li>
                    <li><a href="#">Face Treatment Oils</a></li>
                    <li><a href="#">Anti-Aging and Anti-Wrinkle Treatment</a></li>
                    <li><a href="#">Makeup</a></li>
                    <li><a href="#">Body</a></li>
                    <li><a href="#">Self Tanning</a></li>
                    <li><a href="#">Men</a></li>
                </ul>
            </div>

            <div className={classes["footer-section"]}>
                <h4>MOST POPULAR</h4>
                <ul>
                    <li><a href="#">Double Serum Anti-Aging + Anti-Wrinkle Serum</a></li>
                    <li><a href="#">Total Eye Lift Cream</a></li>
                    <li><a href="#">One-Step Gentle Exfoliating Cleanser</a></li>
                    <li><a href="#">Hydrating Toner + Face Lotion - Normal Dry Skin</a></li>
                    <li><a href="#">Tonic Body-Firming + Tightening-Treatment Oil</a></li>
                    <li><a href="#">Moisture-Rich Body Lotion</a></li>
                    <li><a href="#">Hand and Nail Moisturizing Treatment Cream</a></li>
                    <li><a href="#">Lip Comfort Oil Hydrating and Plumping Lip Oil</a></li>
                    <li><a href="#">Lip Oil Balm Hydrating Peptide Balm</a></li>
                    <li><a href="#">Instant Smooth-Perfecting Touch Face Primer</a></li>
                </ul>
            </div>

            <div className={classes["footer-section"]}>
                <h4>WHAT'S NEW</h4>
                <ul>
                    <li><a href="#">Double Serum Anti-Aging + Anti-Wrinkle Serum</a></li>
                    <li><a href="#">24 Day Advent Calendar</a></li>
                    <li><a href="#">12 Day Advent Calendar</a></li>
                    <li><a href="#">Double Serum Duo</a></li>
                    <li><a href="#">Double Serum Face + Eye Icons</a></li>
                    <li><a href="#">Double Serum Face + Eye Power Duo</a></li>
                    <li><a href="#">Clarins Skincare Essentials</a></li>
                    <li><a href="#">Double Serum + Nutri-Lumière Collection</a></li>
                    <li><a href="#">Double Serum + Super Restorative Collection</a></li>
                    <li><a href="#">Double Serum + Extra-Firming Collection</a></li>
                </ul>
            </div>

            <div className={classes["footer-section"]}>
                <h4>NEED HELP?</h4>
                <ul>
                    <li><a href="#">Track My Order</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Shipping Information</a></li>
                    <li><a href="#">Return Policy</a></li>
                    <li><a href="#">Payment Options</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>

            <div className={classes["footer-section services"]}>
                <h4>SERVICES</h4>
                <ul>
                    <li><a href="#">Live Consultation</a></li>
                    <li><a href="#">Club Clarins Loyalty Program</a></li>
                    <li><a href="#">Subscription Service</a></li>
                    <li><a href="#">Clarins Gift Cards</a></li>
                    <li><a href="#">Refer a Friend</a></li>
                    <li><a href="#">Beauty FAQ</a></li>
                    <li><a href="#">Spa</a></li>
                    <li><a href="#">Find a Store/Spa</a></li>
                </ul>
            </div>

            <div className={classes["footer-newsletter"]}>
                <h4>SIGN UP FOR OUR NEWSLETTER</h4>
                <form>
                    <input type="email" placeholder="Email Address"/>
                    <button type="submit">Subscribe</button>
                </form>
            </div>

            <div className={classes["footer-info"]}>
                <h4>ABOUT CLARINS</h4>
                <ul>
                    <li><a href="#">About Clarins Group</a></li>
                    <li><a href="#">Our Story/Commitment</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Affiliate Program</a></li>
                </ul>
            </div>

            <div className={classes["footer-social"]}>
                <h4>FOLLOW US</h4>
                <div className={classes["social-icons"]}>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-envelope"></i></a>
                </div>
            </div>

            <div className={classes["footer-country"]}>
                <label>Change Country or Language</label>
                <select>
                    <option>Clarins United States (English)</option>
                </select>
            </div>

            <div className={classes["footer-legal"]}>
                <ul>
                    <li><a href="#">Copyright © Clarins</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Accessibility Statement</a></li>
                    <li><a href="#">Information on Transparency</a></li>
                    <li><a href="#">Site Map</a></li>
                </ul>
            </div>
        </footer>
    );
}
