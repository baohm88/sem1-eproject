import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa"; // Import icon FaBeer từ FontAwesome
import { FaYoutubeSquare } from "react-icons/fa"; // Import icon FaBeer từ FontAwesome
import { FaInstagramSquare } from "react-icons/fa"; // Import icon FaBeer từ FontAwesome
import { FaTwitterSquare } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className={classes["footer"]}>
            <div className={classes["footer-grid"]}>
                <div className={classes["footer-section"]}>
                    <h4>CATEGORIES</h4>
                    <ul>
                        <li>
                            <Link to="/skincare?category=Face"> Face</Link>
                        </li>
                        <li>
                            <Link to="/skincare?category=Body"> Body</Link>
                        </li>
                        <li>
                            <Link to="/skincare?category=Sun"> Sun</Link>
                        </li>
                        <li>
                            <Link to="/skincare?category=Men"> Men</Link>
                        </li>
                        <li>
                            <Link to="/makeup?category=Eyes"> Eyes</Link>
                        </li>
                        <li>
                            <Link to="/makeup?category=Lips"> Lips</Link>
                        </li>
                    </ul>
                </div>

                <div className={classes["footer-section"]}>
                    <h4>MOST POPULAR</h4>
                    <ul>
                        <li>
                            <Link to="/products/1">
                                {" "}
                                Hydrating Gentle Foaming Face Cleanser for
                                Normal to Dry Skin
                            </Link>
                        </li>
                        <li>
                            <Link to="/products/2">
                                {" "}
                                Dry Touch Facial Sunscreen - Broad Spectrum SPF
                                50+
                            </Link>
                        </li>
                        <li>
                            <Link to="/products/3">
                                {" "}
                                ClarinsMen Smooth Shave Foaming Gel
                            </Link>
                        </li>
                        <li>
                            <Link to="/products/8">
                                {" "}
                                Exfoliating Gentle Body-Scrub For Smooth Skin
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={classes["footer-section"]}>
                    <h4>WHAT'S NEW</h4>
                    <ul>
                        <li>
                            <Link to="/products/6">
                                {" "}
                                Wonder Volume Mascara XXL
                            </Link>
                        </li>
                        <li>
                            <Link to="/products/9">
                                {" "}
                                Joli Rouge Satin Lipstick
                            </Link>
                        </li>
                        <li>
                            <Link to="/products/14">
                                {" "}
                                Lip Perfector 2-in-1 Lip and Cheek Color Balm
                            </Link>
                        </li>
                        <li>
                            <Link to="/products/15">
                                {" "}
                                Graphik Ink Liner Liquid Eyeliner Pen
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={classes["footer-section services"]}>
                    <h4>SERVICES</h4>
                    <ul>
                        <li>
                            <a
                                href="https://www.clarinsusa.com/en/live-consultation/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Consultation
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.clarinsusa.com/en/rewards/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Club Clarins Loyalty Program
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.clarinsusa.com/en/subscription-service/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Subscription Service
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.clarinsusa.com/en/faq-help/?question=e-gift-certificates"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Clarins Gift Cards
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={classes["footer-newsletter"]}>
                    <h4>SIGN UP FOR OUR NEWSLETTER</h4>
                    <form>
                        <input type="email" placeholder="Email Address" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                <div className={classes["footer-info"]}>
                    <h4>ABOUT CLARINS</h4>
                    <ul>
                        <li>
                            <a
                                href="https://www.groupeclarins.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                About Clarins Group
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.clarinsusa.com/en/explore-clarins-story/Responsible-beauty-innovation.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Our Story/Commitment
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=ead7c146-d98d-4ef9-8cc4-cb33c711ace8&ccId=19000101_000001&type=MP&lang=en_US"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Careers
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://www.opmpros.com/host/clarins/affiliate/Become_Affiliate_CLARINSUS.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Affiliate Program
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={classes["footer-social"]}>
                    <h4>FOLLOW US</h4>
                    <div className={classes["social-icons"]}>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookSquare size="30px" />
                        </a>
                        <a
                            href="https://www.youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutubeSquare size="30px" />{" "}
                            {/* Sử dụng icon YouTube */}
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagramSquare size="30px" />{" "}
                            {/* Sử dụng icon YouTube */}
                        </a>
                        <a
                            href="https://www.x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitterSquare size="30px" />{" "}
                            {/* Sử dụng icon YouTube */}
                        </a>
                    </div>
                </div>

                <div className={classes["footer-country"]}>
                    <label>Change Country or Language</label>
                    <select>
                        <option>Clarins United States (English)</option>
                    </select>
                </div>
            </div>
            <div className={classes["footer-legal"]}>
                <ul>
                    <li>
                        Copyright © Clarins
                    </li>
                    <li>
                        <a
                            href="https://www.clarinsusa.com/en/terms.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Terms & Conditions
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.clarinsusa.com/en/privacy-policy.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.clarinsusa.com/en/accessibility-statement.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Accessibility Statement
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.cigna.com/legal/compliance/machine-readable-files"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Information on Transparency
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.clarinsusa.com/en/sitemap.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Site Map
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
