import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { formatter } from "../../util/formatter";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cart() {
    const {
        cart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
        clearCart,
    } = useContext(UserContext); // Access cart from UserContext
    const [totalAmount, setTotalAmount] = useState(0); // State to store the total amount
    const [serverError, setServerError] = useState();
    const { user } = useContext(UserContext);

    // Function to calculate the total amount
    useEffect(() => {
        const calculateTotalAmount = () => {
            const total = cart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
            setTotalAmount(total); // Set the total amount state
        };

        calculateTotalAmount(); // Calculate total whenever cart changes
    }, [cart]);

    // Function to handle the checkout
    const handleCheckout = async () => {
        try {
            // Create an object to hold the data to be sent
            const orderData = {
                user_id: user.user_id, // Assuming `user.id` holds the logged-in user ID
                order_value: totalAmount,
                cart_items: cart, // Sending the entire cart as an array of items
            };

            // Send a POST request to the backend to create the order
            const response = await axios.post(
                `http://localhost/project/user/orders/user_idd=${user.user_id}`,
                orderData
            );

            console.log(response.data.type);

            // Handle the response, e.g., redirect to a success page or show confirmation
            if (response.data.type === "success") {
                alert("Order created successfully!");
                // Optionally, you could redirect or clear the cart here
                // e.g., clearCart();
                clearCart();
            } else {
                console.log("Creating order failed: ", response.data.message);
                setServerError(response.data.message);
            }
        } catch (error) {
            console.error("Error creating the order:", error);
            alert(
                "An error occurred during checkout. Please try again.\n" + error
            );
        }
    };

    if (!cart || cart.length === 0) {
        return <p>Your cart is empty</p>; // Safely check if cart is empty or undefined
    }

    console.log(cart);

    return (
        <div id="cart">
            {serverError && (
                <span className="error-message">({serverError})</span>
            )}

            <div id="cart-container">
                <h1>Your products</h1>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            return (
                                <tr key={item.product_id}>
                                    <td>{item.product_id}</td>
                                    <td>
                                        <Link
                                            to={"/products/" + item.product_id}
                                        >
                                            <img
                                                src={
                                                    item.product_images
                                                        ? item.product_images.split(
                                                              ","
                                                          )[0]
                                                        : ""
                                                }
                                                alt={item.product_name}
                                                style={{ width: "5rem" }}
                                            />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            to={"/products/" + item.product_id}
                                        >
                                            {item.product_name}
                                        </Link>
                                    </td>
                                    <td className="center">
                                        {" "}
                                        <button
                                            onClick={() =>
                                                decrementQuantity(
                                                    item.product_id
                                                )
                                            }
                                        >
                                            -
                                        </button>{" "}
                                        {item.quantity}{" "}
                                        <button
                                            onClick={() =>
                                                incrementQuantity(
                                                    item.product_id
                                                )
                                            }
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td className="center">
                                        {formatter.format(item.price)}
                                    </td>
                                    <td className="center">
                                        {formatter.format(
                                            item.price * item.quantity
                                        )}
                                    </td>
                                    <td className="center">
                                        <button
                                            onClick={() =>
                                                removeItem(item.product_id)
                                            }
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div id="order-summary">
                <h3>Order Summary</h3>
                <hr />
                <p className="flex-container-between">
                    <span>Subtotal</span> <span>${totalAmount}</span>
                </p>
                <p className="flex-container-between">
                    <span>Shipping</span> <span>$0</span>
                </p>
                <hr />
                <p>Tax will be calculated during checkout</p>
                <p className="flex-container-between">
                    <span>Estimated Total</span> <span>${totalAmount}</span>
                </p>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    );
}
