// RelatedProducts.js
import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem"; // Assuming you have a ProductItem component for rendering each product
import classes from "./RelatedProducts.module.css"; // Create a CSS file for styling

export default function RelatedProducts({ category }) {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (category) {
            axios
                .get(`http://localhost/project/collections/products?category=${category}`)
                .then((res) => {
                    setRelatedProducts(res.data.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching related products:", error);
                    setLoading(false);
                });
        }
    }, [category]);

    if (loading) return <p>Loading related products...</p>;

    return (
        <div className={classes["related-products"]}>
            <h3>Related Products</h3>
            <div className={classes["related-products-list"]}>
                {relatedProducts.length > 0 ? (
                    relatedProducts.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                ) : (
                    <p>No related products found.</p>
                )}
            </div>
        </div>
    );
}
