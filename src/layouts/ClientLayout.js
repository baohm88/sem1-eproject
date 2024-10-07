import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/clarins_logo.png";
import clubLogo from "../assets/club-clarins.webp";
import { IoBagAddOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { GiHeartBeats } from "react-icons/gi";
import { IoChevronForwardOutline } from "react-icons/io5";

import { useContext } from "react";
import { UserContext } from "../App";

export default function ClientLayout({ children }) {
    const { user, handleLogOut } = useContext(UserContext);
    const isLoggedIn = user !== null;

    function openSidebar() {
        document.getElementById("mySideBar").style.width = "25rem";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function closeSidebar() {
        document.getElementById("mySideBar").style.width = "0";
        document.body.style.backgroundColor = "white";
    }

    return (
        <>
            <header>
                <ul className="top-nav">
                    <li className="row">
                        <span className="menu-icon" onClick={openSidebar}>
                            <IoMenuSharp />
                        </span>
                        <span className="search-bar">
                            <form method="get">
                                <p className="row">
                                    <span>
                                        <input
                                            type="text"
                                            name="q"
                                            id="q"
                                            placeholder="Search"
                                        />
                                    </span>

                                    <span className="search-button">
                                        <IoSearch />
                                    </span>
                                </p>
                            </form>
                        </span>
                    </li>
                    <li>
                        <img src={logo} alt="Clarins logo" className="logo" />
                    </li>
                    <li className="row">
                        <span className="nav-icons">
                            <span>
                                {isLoggedIn && <span>Hi, {user.userName}</span>}
                                <IoPersonOutline />
                            </span>
                        </span>
                        <span>
                            <IoBagAddOutline />
                        </span>
                    </li>
                </ul>
                <ul className="bottom-nav">
                    <li className="nav-link">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to={"/new_product"}>What's new</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to={"/skincare"}>Skincare</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to={"/makeup"}>Makeup</NavLink>
                    </li>
                    {!isLoggedIn && (
                        <li className="nav-link">
                            <NavLink to={"/login"}>Login</NavLink>
                        </li>
                    )}

                    {isLoggedIn && (
                        <li>
                            <button onClick={handleLogOut}>LOGOUT</button>
                        </li>
                    )}
                </ul>
            </header>

            <div id="mySideBar">
                <div className="sidebar-header">
                    <p onClick={closeSidebar}>
                        <TfiClose /> Menu
                    </p>

                    <p onClick={closeSidebar}>
                        <NavLink to={"/login"}>
                            <IoPersonOutline /> Login
                        </NavLink>
                    </p>
                    <p onClick={closeSidebar}>
                        <GiHeartBeats /> Club Clarins
                    </p>
                </div>
                <div className="sidebar-body">
                    <p className="row-space-between" onClick={closeSidebar}>
                        {/* <a href="#">What's new</a> */}
                        <NavLink to={"/new_product"}>What's new</NavLink>
                        <span>
                            <IoChevronForwardOutline />
                        </span>
                    </p>
                    <p className="row-space-between" onClick={closeSidebar}>
                        {/* <a href="#">Skincare</a> */}
                        <NavLink to={"/skincare"}>Skincare</NavLink>
                        <span>
                            <IoChevronForwardOutline />
                        </span>
                    </p>
                    <p className="row-space-between" onClick={closeSidebar}>
                        {/* <a href="#">Makeup</a> */}
                        <NavLink to={"/makeup"}>Makeup</NavLink>
                        <span>
                            <IoChevronForwardOutline />
                        </span>
                    </p>
                </div>
                <div className="sidebar-footer">
                    <img src={clubLogo} alt="Clarins Club" />
                    <p>
                        Enter a world <br />
                        of beauty rewards
                    </p>
                    <p>
                        Exciting benefits await - <br />
                        full size products, Club Clarins Dollars, and more!
                    </p>
                    <p className="call-to-actions">
                        <a href="#">JOIN NOW</a>
                    </p>
                </div>
            </div>
            <hr />
            <main>{children}</main>

            <Footer />
        </>
    );
}
