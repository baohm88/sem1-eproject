import React from "react";
import classes from "./ProductTabs.module.css";
import ProductItem from "../ProductItem";

const ProductList = ({ products, openModal }) => {
    return (
        <div className={classes["product-slider"]}>
            {products.map((product) => (
                <ProductItem
                    key={product.product_id}
                    product={product}
                    openModal={openModal}
                />
            ))}
        </div>
    );
};

export default ProductList;
