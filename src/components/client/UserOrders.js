import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import axios from "axios";
import { formatter } from "../../util/formatter";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function UserOrders() {
    const { user } = useContext(UserContext);
    const [userOrders, setUserOrders] = useState([]);
    const [serverError, setServerError] = useState();

    useEffect(() => {
        const fetchUserOrders = async () => {
            try {
                const response = await axios.get(
                    `http://localhost/project/user/orders/user_id=${user.user_id}` // Corrected the parameter name to user_id
                );
                if (response.data.type === "success") {
                    setUserOrders(response.data.data); // Set user orders to state
                    document.title =
                        user.first_name + " " + user.last_name + "'s Orders";
                } else {
                    console.log(
                        "Creating order failed: ",
                        response.data.message
                    );
                    setServerError(response.data.message);
                }
            } catch (error) {
                console.error("Error fetching user orders:", error);
            }
        };

        if (user && user.user_id) {
            fetchUserOrders(); // Call the async function
        }
    }, [user]); // Add user as a dependency to fetch orders when user changes

    if (!userOrders || userOrders.length === 0) {
        return <p>You have no orders yet.</p>;
    }

    return (
        <>
            {serverError && (
                <span className="error-message">({serverError})</span>
            )}
            <br />
            <div className="orders-container center">
                <h1>Your orders</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Order #</th>
                            <th>Order Date</th>
                            <th>Order Value</th>
                            <th>Order Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {userOrders.map((order) => (
                            <tr key={order.order_id} className="center">
                                <td>{order.order_id}</td>
                                <td>{order.order_date}</td>
                                <td>{formatter.format(order.order_value)}</td>
                                <td>
                                    <span className="danger">
                                        {order.status}
                                    </span>
                                </td>
                                <td>
                                    <Link
                                        to={
                                            "/user/order_items/" +
                                            order.order_id
                                        }
                                    >
                                        <span>
                                            <FaEye />
                                        </span>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
