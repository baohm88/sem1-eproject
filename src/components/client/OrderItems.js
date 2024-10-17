import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatter } from "../../util/formatter";

export default function OrderItems() {
    const [orderItems, setOrderItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const { order_id } = useParams();

    useEffect(() => {
        axios
            .get(
                "http://localhost/project/user/order_item/order_id=" + order_id
            )
            .then((res) => {
                setOrderItems(res.data.data);

                // Calculate total amount
                const total = res.data.data.reduce(
                    (sum, item) => sum + item.product_price * item.product_qty,
                    0
                );
                setTotalAmount(total); // Update the total amount
            });
    }, [order_id]);

    return (
        <>
            <div className="center">
                <h1>Your Order Items </h1>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={"2"}>Product Name</th>
                            <th>Main Category</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orderItems.map((item) => (
                            <tr key={item.product_id}>
                                <td>
                                    <Link to={"/products/" + item.product_id}>
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
                                    <Link to={"/products/" + item.product_id}>
                                        {item.product_name}
                                    </Link>
                                </td>
                                <td>{item.main_category}</td>
                                <td>{item.sub_category}</td>
                                <td>{formatter.format(item.product_price)}</td>
                                <td>{item.product_qty}</td>
                                <td>
                                    {formatter.format(
                                        item.product_price * item.product_qty
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <tr>
                            <th
                                colSpan={"6"}
                                style={{
                                    textAlign: "right",
                                    paddingRight: "5px",
                                }}
                            >
                                Total Amount:
                            </th>
                            <th>{formatter.format(totalAmount)}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
}
