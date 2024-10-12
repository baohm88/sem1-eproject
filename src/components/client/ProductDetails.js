import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { formatter } from "../../util/formatter";

export default function ProductDetails() {
    const [product, setProduct] = useState("");
    const { id } = useParams();
    const { addToCart } = useContext(UserContext); // Destructure addToCart from context

    useEffect(() => {
        axios
            .get("http://localhost/project/collections/product/id=" + id)
            .then((res) => {
                setProduct(res.data.data);
            });
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product); // Call addToCart with the current product
        alert(product.product_name + " has been added to cart!");
    };

    console.log(product);

    return (
        <>
            <h1>Product # {id}</h1>
            <div>
                <p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </p>
                <p>Name: {product.product_name}</p>
                <p>Main cat: {product.main_category}</p>
                <p>Sub cat: {product.sub_category}</p>
                <p>Qty available: {product.quantity_in_stock}</p>
                <p>Price: {formatter.format(product.price)}</p>
                <div>
                    <h3>Product Images:</h3>
                    {product.product_images &&
                    product.product_images.length > 0 ? (
                        product.product_images
                            .split(",")
                            .map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Product ${index + 1}`}
                                    style={{ width: "200px", margin: "10px" }}
                                />
                            ))
                    ) : (
                        <p>No images available</p>
                    )}
                </div>
            </div>
        </>
    );
}
