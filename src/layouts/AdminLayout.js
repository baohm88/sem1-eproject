import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { useContext, useEffect } from "react";
import { IoPersonOutline } from "react-icons/io5";

export default function AdminLayout({ children }) {
    const navigate = useNavigate();
    const { user, handleLogOut } = useContext(UserContext);

    useEffect(() => {
        if (!user || user.is_admin !== 1) {
            navigate("/unauthorized");
        }
    }, [user, navigate]);

    return (
        <>
            <header>
                <ul>
                    <li className="nav-link">
                        <NavLink to={"/products"}>Products</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to={"/categories"}>Categories</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to={"/orders"}>Orders</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to={"/users"}>Users</NavLink>
                    </li>
                    <li>
                        {/* <button onClick={() => setUser(null)}>LOGOUT</button> */}
                        <button onClick={handleLogOut}>LOGOUT</button>
                    </li>

                    {user !== null && (
                        <li>
                            <span>
                                <span>Hi, {user.first_name}</span>
                                <IoPersonOutline />
                            </span>
                        </li>
                    )}
                </ul>
            </header>
            <hr />
            <main>{children}</main>
        </>
    );
}
