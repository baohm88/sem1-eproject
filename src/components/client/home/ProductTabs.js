import React from "react";
import classes from "./ProductTabs.module.css";
import ProductTab from "./ProductTab";
import ProductsContainer from "../ProductsContainer";

const ProductTabs = ({
    activeTab,
    handleTabClick,
    forYouProducts,
    newProducts,
    giftProducts,
}) => {
    return (
        <div className={classes["beauty-must-haves"]}>
            <h2>Beauty must-haves</h2>
            <p>Discover our iconic products</p>
            <ProductTab activeTab={activeTab} handleTabClick={handleTabClick} />

            {activeTab === "just-for-you" && (
                <ProductsContainer products={forYouProducts} />
            )}
            {activeTab === "whats-new" && (
                <ProductsContainer products={newProducts} />
            )}
            {activeTab === "online-exclusives" && (
                <ProductsContainer products={giftProducts} />
            )}
        </div>
    );
};

export default ProductTabs;
