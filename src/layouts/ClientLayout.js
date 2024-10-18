import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/clarins_logo.png";
import clubLogo from "../assets/club-clarins.webp";
import classes from "./ClientLayout.module.css";
import {
    IoBagAddOutline,
    IoPersonOutline,
    IoMenuSharp,
    IoSearch,
    IoLogOutOutline,
    IoChevronForwardOutline,
} from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import { GiHeartBeats } from "react-icons/gi";
import { BsCartCheck } from "react-icons/bs";
import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../App";
import Button from "../components/UI/Button";
import { formatter } from "../util/formatter";

export default function ClientLayout({ children }) {
    const { user, cart, handleLogOut } = useContext(UserContext);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const isLoggedIn = !!user;
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const sidebarRef = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        setTotalQuantity(cart.reduce((sum, item) => sum + item.quantity, 0));

        const amount = cart.reduce(
            (sum, item) => sum + item.product_price * item.quantity,
            0
        );
        setTotalAmount(amount.toFixed(2));
    }, [cart]);

    function openSidebar() {
        document.getElementById("mySideBar").style.width = "25rem";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function closeSidebar() {
        document.getElementById("mySideBar").style.width = "0";
        document.body.style.backgroundColor = "white";
    }

    function handleClickOutside(event) {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            closeSidebar();
        }
    }

    function handleSearch(e) {
        e.preventDefault();
        const params = new URLSearchParams(location.search);
        const category = params.get("category") || "";
        let path = "/";

        if (location.pathname.includes("/skincare")) {
            path = `/skincare?category=${category}`;
        } else if (location.pathname.includes("/makeup")) {
            path = `/makeup?category=${category}`;
        }
        navigate(`${path}&q=${searchText}`);
    }
    console.log(cart);

    return (
        <>
            <header>
                <ul className={classes["top-nav"]}>
                    <li className={classes["row"]}>
                        <span
                            className={classes["menu-icon"]}
                            onClick={openSidebar}
                        >
                            <IoMenuSharp />
                        </span>
                        <span className={classes["search-bar"]}>
                            <form onSubmit={handleSearch}>
                                <div className={classes.searchContainer}>
                                    <input
                                        type="text"
                                        value={searchText}
                                        onChange={(e) =>
                                            setSearchText(e.target.value)
                                        }
                                        placeholder="Search"
                                        className={classes.searchInput}
                                    />
                                    <span
                                        className={classes.searchButton}
                                        onClick={handleSearch}
                                    >
                                        <IoSearch />
                                    </span>
                                </div>
                            </form>
                        </span>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <img
                                src={logo}
                                alt="Clarins logo"
                                className={classes["logo"]}
                            />
                        </NavLink>
                    </li>
                    <li className={classes["row"]}>
                        <div className={classes["dropdown"]}>
                            <span className={classes["nav-icons"]}>
                                <NavLink
                                    to={isLoggedIn ? "/profile" : "/login"}
                                >
                                    <IoPersonOutline />
                                    {isLoggedIn ? (
                                        <IoIosCheckmarkCircle
                                            className={classes.checkmarkIcon}
                                        />
                                    ) : (
                                        <GoDotFill className={classes.redDot} />
                                    )}
                                </NavLink>
                            </span>

                            {isLoggedIn && (
                                <div
                                    className={
                                        classes["dropdown-content-account"]
                                    }
                                >
                                    <NavLink to={"/profile"}>
                                        <IoPersonOutline /> My Profile
                                    </NavLink>
                                    <NavLink to={"/user/orders"}>
                                        <BsCartCheck /> My Orders
                                    </NavLink>
                                    <span onClick={handleLogOut}>
                                        <IoLogOutOutline /> Logout
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Bag Dropdown */}
                        <div className={classes["dropdown"]}>
                            <span className={classes["nav-icons"]}>
                                <NavLink to={"/cart"}>
                                    <IoBagAddOutline />
                                    {totalQuantity > 0 && (
                                        <span className={classes["badge"]}>
                                            {totalQuantity}
                                        </span>
                                    )}
                                </NavLink>
                            </span>

                            {/* Dropdown for bag items */}
                            <div className={classes["dropdown-content"]}>
                                {cart.length > 0 ? (
                                    <>
                                        {cart.map((item) => (
                                            <div
                                                key={item.product_id}
                                                className={
                                                    classes["dropdown-item"]
                                                }
                                            >
                                                <div>
                                                    <img
                                                        src={
                                                            item.product_images
                                                                ? item.product_images.split(
                                                                      ","
                                                                  )[0]
                                                                : ""
                                                        }
                                                        alt={item.product_name}
                                                        className={
                                                            classes[
                                                                "cart-item-image"
                                                            ]
                                                        }
                                                    />
                                                </div>

                                                <div
                                                    className={
                                                        classes[
                                                            "cart-item-name"
                                                        ]
                                                    }
                                                >
                                                    <p>{item.product_name}</p>
                                                </div>
                                                <div
                                                    className={
                                                        classes[
                                                            "cart-item-price"
                                                        ]
                                                    }
                                                >
                                                    <p>
                                                        <strong>
                                                            {formatter.format(
                                                                item.product_price
                                                            )}
                                                        </strong>
                                                    </p>
                                                    <p>Qty: {item.quantity}</p>
                                                </div>
                                            </div>
                                        ))}
                                        <div
                                            className={
                                                classes["dropdown-total"]
                                            }
                                        >
                                            <span>
                                                <h4>Total:</h4>
                                            </span>
                                            <span>
                                                <strong>
                                                    {formatter.format(
                                                        totalAmount
                                                    )}
                                                </strong>
                                            </span>
                                        </div>
                                        <Button
                                            className="full-width-button"
                                            onClick={() => navigate("/cart")}
                                        >
                                            View Cart
                                        </Button>
                                        <div className={
                                                classes["dropdown-footer"]
                                            }>
                                            <p><IoBagAddOutline /></p>
                                            <p>Your order is qualified for FREE shipping</p>
                                            
                                        </div>
                                    </>
                                ) : (
                                    <p>Your bag is empty.</p>
                                )}
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className={classes["bottom-nav"]}>
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
                </ul>
            </header>

            <div id="mySideBar" ref={sidebarRef} className={classes["sidebar"]}>
                <div className={classes["sidebar-header"]}>
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
                        <>
                            <p onClick={closeSidebar}>
                                <NavLink to={"/profile"}>
                                    <IoPersonOutline /> My Profile
                                </NavLink>
                            </p>
                            <p onClick={closeSidebar}>
                                <NavLink to={"/user/orders"}>
                                    <BsCartCheck /> My Orders
                                </NavLink>
                            </p>
                            <p onClick={handleLogOut}>
                                <IoLogOutOutline /> Logout
                            </p>
                        </>
                    )}
                    <p onClick={closeSidebar}>
                        <GiHeartBeats /> Club Clarins
                    </p>
                </div>

                <div className={classes["sidebar-body"]}>
                    <SidebarLink
                        to={"/"}
                        label="What's new"
                        closeSidebar={closeSidebar}
                    />
                    <SidebarLink
                        to={"/skincare"}
                        label="Skincare"
                        closeSidebar={closeSidebar}
                    />
                    <SidebarLink
                        to={"/makeup"}
                        label="Makeup"
                        closeSidebar={closeSidebar}
                    />
                </div>

                <div className={classes["sidebar-footer"]}>
                    <img src={clubLogo} alt="Clarins Club" />
                    <p>Enter a world of beauty rewards</p>
                    <p>
                        Exciting benefits await - full-size products, Club
                        Clarins Dollars, and more!
                    </p>
                    <p className={classes["call-to-actions"]}>
                        <Link to={"/"}>JOIN NOW</Link>
                    </p>
                </div>
            </div>

            <hr />
            <main>{children}</main>
            <Footer />
        </>
    );
}

function SidebarLink({ to, label, closeSidebar }) {
    return (
        <p className={classes["row-space-between"]} onClick={closeSidebar}>
            <NavLink to={to}>{label}</NavLink>
            <span>
                <IoChevronForwardOutline />
            </span>
        </p>
    );
}
