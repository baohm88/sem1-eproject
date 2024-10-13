import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/clarins_logo.png";
import clubLogo from "../assets/club-clarins.webp";
import {
    IoBagAddOutline,
    IoPersonOutline,
    IoMenuSharp,
    IoSearch,
    IoLogOutOutline,
    IoChevronForwardOutline,
} from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { GiHeartBeats } from "react-icons/gi";
import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../App";

export default function ClientLayout({ children }) {
    const { user, cart, handleLogOut } = useContext(UserContext);
    const [totalQuantity, setTotalQuantity] = useState(0); // State to store total quantity
    const isLoggedIn = user !== null;

    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const sidebarRef = useRef(); // Reference for sidebar

    function openSidebar() {
        document.getElementById("mySideBar").style.width = "25rem";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function closeSidebar() {
        document.getElementById("mySideBar").style.width = "0";
        document.body.style.backgroundColor = "white";
    }

    // Close sidebar when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            // If the click is outside the sidebar, close it
            if (
                sidebarRef.current && // Check if ref is set
                !sidebarRef.current.contains(event.target) // If click is outside sidebar
            ) {
                closeSidebar();
            }
        }

        // Attach the event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarRef]);

    // Function to calculate the total amount and total quantity
    useEffect(() => {
        const calculateTotals = () => {
            const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);

            setTotalQuantity(quantity); // Set the total quantity state
        };

        calculateTotals(); // Calculate totals whenever the cart changes
    }, [cart]);

    // Handle search form submission
    function handleSearch(e) {
        e.preventDefault();

        const currentPath = location.pathname;
        const params = new URLSearchParams(location.search);
        const category = params.get("category") || "";

        if (currentPath.includes("/skincare")) {
            navigate(`/skincare?category=${category}&q=${searchText}`);
        } else if (currentPath.includes("/makeup")) {
            navigate(`/makeup?category=${category}&q=${searchText}`);
        } else {
            navigate(`/?q=${searchText}`);
        }
    }

    console.log(cart);

    return (
        <>
            <header>
                <ul className="top-nav">
                    <li className="row">
                        <span className="menu-icon" onClick={openSidebar}>
                            <IoMenuSharp />
                        </span>
                        <span className="search-bar">
                            <form onSubmit={handleSearch} method="get">
                                <p className="row">
                                    <span>
                                        <input
                                            type="text"
                                            name="q"
                                            id="q"
                                            value={searchText}
                                            onChange={(e) =>
                                                setSearchText(e.target.value)
                                            }
                                            placeholder="Search"
                                        />
                                    </span>

                                    <span
                                        className="search-button"
                                        onClick={handleSearch}
                                    >
                                        <IoSearch />
                                    </span>
                                </p>
                            </form>
                        </span>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <img
                                src={logo}
                                alt="Clarins logo"
                                className="logo"
                            />
                        </NavLink>
                    </li>
                    <li className="row">
                        <span className="nav-icons">
                            <span>
                                {isLoggedIn && (
                                    <>
                                        <span>Hi, {user.first_name}</span>
                                    </>
                                )}
                                <NavLink
                                    to={isLoggedIn ? "/profile" : "/login"}
                                >
                                    <IoPersonOutline />
                                </NavLink>
                            </span>
                        </span>
                        <span>
                            <NavLink to={"/cart"}>
                                <IoBagAddOutline />{" "}
                                <span>
                                    {totalQuantity > 0 ? totalQuantity : ""}
                                </span>
                            </NavLink>
                        </span>
                    </li>
                </ul>
                <ul className="bottom-nav">
                    <li className="nav-link">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to={"/skincare?category="}>Skincare</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to={"/makeup?category="}>Makeup</NavLink>
                    </li>
                    {!isLoggedIn && (
                        <li className="nav-link">
                            <NavLink to={"/login"}>Login</NavLink>
                        </li>
                    )}
                    {isLoggedIn && (
                        <>
                            <li>
                                <NavLink to={"/profile"}>Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/user/orders"}>Orders</NavLink>
                            </li>
                            <li>
                                <button onClick={handleLogOut}>LOGOUT</button>
                            </li>
                        </>
                    )}
                </ul>
            </header>

            <div id="mySideBar" ref={sidebarRef}>
                <div className="sidebar-header">
                    <p onClick={closeSidebar}>
                        <TfiClose /> Menu
                    </p>

                    {!isLoggedIn && (
                        <p onClick={closeSidebar}>
                            <NavLink to={"/login"}>
                                <IoPersonOutline /> Login
                            </NavLink>
                        </p>
                    )}
                    {isLoggedIn && (
                        <p onClick={handleLogOut}>
                            <NavLink>
                                <IoLogOutOutline /> Logout
                            </NavLink>
                        </p>
                    )}
                    <p onClick={closeSidebar}>
                        <GiHeartBeats /> Club Clarins
                    </p>
                </div>
                <div className="sidebar-body">
                    <p className="row-space-between" onClick={closeSidebar}>
                        <NavLink to={"/"}>What's new</NavLink>
                        <span>
                            <IoChevronForwardOutline />
                        </span>
                    </p>
                    <p className="row-space-between" onClick={closeSidebar}>
                        <NavLink to={"/skincare"}>Skincare</NavLink>
                        <span>
                            <IoChevronForwardOutline />
                        </span>
                    </p>
                    <p className="row-space-between" onClick={closeSidebar}>
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
