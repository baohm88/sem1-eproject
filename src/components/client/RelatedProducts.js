import { useEffect, useState } from "react";
import axios from "axios";
import ProductsContainer from "../UI/ProductsContainer";
import classes from "./RelatedProducts.module.css";

export default function RelatedProducts({
    productId,
    mainCategory,
    subCategory,
}) {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            try {
                const res = await axios.get(
                    "http://localhost/project/collections/all"
                );
                const data = res.data.data;

                setRelatedProducts(
                    data.filter(
                        (product) =>
                            product.main_category === mainCategory &&
                            product.sub_category === subCategory &&
                            product.product_id !== productId
                    )
                );
            } catch (error) {
                console.error("Error fetching related products:", error);
                setError("Failed to load related products.");
            } finally {
                setLoading(false); 
            }
        };

        fetchRelatedProducts();
    }, [productId, mainCategory, subCategory]);

    if (loading) return <p>Loading related products...</p>;
    if (error) return <p>{error}</p>; 

    if (relatedProducts.length === 0) {
        return;
    }

    return (
        <div className={classes["related-products"]}>
            <h3 className="center">You may also like</h3>

            <ProductsContainer products={relatedProducts} itemsPerPage={4} />
        </div>
    );
}
