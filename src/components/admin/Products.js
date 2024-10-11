import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                            const formatter = new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                            });

                            return (
                                <tr key={item.product_id}>
                                    <td>{item.product_id}</td>
                                    <td>
                                        <img
                                            src="https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dwc0d1a641/content/Cleansing-2020/Merchpage-V3/img/packshot-nettoyant-moussant-hydratant.png"
                                            alt=""
                                            style={{
                                                width: "5rem",
                                                height: "auto",
                                            }}
                                        />
                                    </td>
                                    <td>{item.product_name}</td>
                                    <td>{formatter.format(item.price)}</td>
                                    <td>{item.quantity_in_stock}</td>
                                    <td>{item.main_category}</td>
                                    <td>{item.sub_category}</td>
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
