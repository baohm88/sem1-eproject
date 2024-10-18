import React from "react";
import classes from "./ProductTabs.module.css";
import ProductTab from "./ProductTab";
import ProductList from "./ProductList";

const ProductTabs = ({
    activeTab,
    handleTabClick,
    forYouProducts,
    newProducts,
    giftProducts,
    openModal,
}) => {
    return (
        <div className={classes["beauty-must-haves"]}>
            <h2>Beauty must-haves</h2>
            <p>Discover our iconic products</p>
            <ProductTab activeTab={activeTab} handleTabClick={handleTabClick} />

            {activeTab === "just-for-you" && (
                <ProductList products={forYouProducts} openModal={openModal} />
            )}
            {activeTab === "whats-new" && (
                <ProductList products={newProducts} openModal={openModal} />
            )}
            {activeTab === "online-exclusives" && (
                <ProductList products={giftProducts} openModal={openModal} />
            )}
        </div>
    );
};

export default ProductTabs;
