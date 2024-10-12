import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

export default function Cart() {
    const { cart, incrementQuantity, decrementQuantity, removeItem } =
        useContext(UserContext); // Access cart from UserContext
    const [totalAmount, setTotalAmount] = useState(0); // State to store the total amount

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

    if (!cart || cart.length === 0) {
        return <p>Your cart is empty</p>; // Safely check if cart is empty or undefined
    }

    console.log(cart);

    return (
        <div id="cart">
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
                            const formatter = new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                            });

                            return (
                                <tr key={item.product_id}>
                                    <td>{item.product_id}</td>
                                    <td>
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
                                    </td>
                                    <td>{item.product_name}</td>
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
                <button>Checkout</button>
            </div>
        </div>
    );
}
