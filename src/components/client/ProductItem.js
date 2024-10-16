import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";
import { formatter } from "../../util/formatter";

export default function ProductItem({ product, openModal }) {
    
    return (
        <div className={classes["product-card"]} key={product.product_id}>
            <Link to={"/products/" + product.product_id}>
                <img
                    src={
                        product.product_images
                            ? product.product_images.split(",")[0]
                            : ""
                    }
                    alt={product.product_name}
                    className={classes["product-image"]}
                />
                <h4 className={classes["product-title"]}>
                    {product.product_name}
                </h4>
            </Link>

            <p className={classes["product-price"]}>
                {formatter.format(product.price)}
            </p>
            <button
                className={classes["cart-button"]}
                onClick={() => openModal(product)} // Open modal with product info
            >
                Quick View
            </button>
        </div>
    );
}
