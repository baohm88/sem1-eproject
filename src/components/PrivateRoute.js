import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";

function PrivateRoute({ children }) {
    const { user } = useContext(UserContext);

    // If no user is logged in, redirect to login
    if (!user) {
        return <Navigate to="/login" />;
    }

    // Otherwise, render the children components
    return children;
}

export default PrivateRoute;
