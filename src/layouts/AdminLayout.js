import { NavLink } from "react-router-dom";

export default function AdminLayout({ children }) {
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
                    <li className="nav-link">
                        <NavLink to={"/logout"}>Logout</NavLink>
                    </li>
                </ul>
            </header>
            <hr />
            <main>{children}</main>
        </>
    );
}
