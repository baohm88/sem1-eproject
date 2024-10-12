import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatter } from "../../util/formatter";

export default function Products() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        async function postData() {
            axios
                .get("http://localhost/project/collections/all")
                .then((res) => {
                    console.log(res.data.data);
                    setItems(res.data.data);
                });
        }

        postData();
    }, []);

    return (
        <>
            <h1 className="center">All products</h1>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th colSpan="2">Name</th>
                            <th>Price</th>
                            <th>Stock Qty</th>
                            <th>Main Category</th>
                            <th>Sub Category</th>
                            <th colSpan="3" className="center">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map((item) => {
                            return (
                                <tr key={item.product_id}>
                                    <td>{item.product_id}</td>
                                    <td className="center">
                                        <img
                                            src={
                                                item.product_images
                                                    ? item.product_images.split(
                                                          ","
                                                      )[0]
                                                    : ""
                                            }
                                            alt={item.product_name}
                                            style={{
                                                width: "5rem",
                                                height: "auto",
                                            }}
                                        />
                                    </td>
                                    <td>{item.product_name}</td>
                                    <td className="center">
                                        {formatter.format(item.price)}
                                    </td>
                                    <td className="center">{item.stock_qty}</td>
                                    <td className="center">
                                        {item.main_category}
                                    </td>
                                    <td className="center">
                                        {item.sub_category}
                                    </td>
                                    <td className="center">
                                        <button>View</button>
                                    </td>
                                    <td className="center">
                                        <Link
                                            to={
                                                "/edit_product/" +
                                                item.product_id
                                            }
                                        >
                                            <button>Edit</button>
                                        </Link>
                                    </td>
                                    <td className="center">
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
