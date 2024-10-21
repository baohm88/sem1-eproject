import React from "react";
import classes from "./ProductTabs.module.css";
import ProductItem from "../ProductItem";

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
            <div className={classes["product-tabs"]}>
                <button
                    className={
                        activeTab === "just-for-you" ? classes.active : ""
                    }
                    onClick={() => handleTabClick("just-for-you")}
                >
                    Just for You
                </button>
                <button
                    className={activeTab === "whats-new" ? classes.active : ""}
                    onClick={() => handleTabClick("whats-new")}
                >
                    What's New
                </button>
                <button
                    className={
                        activeTab === "online-exclusives" ? classes.active : ""
                    }
                    onClick={() => handleTabClick("online-exclusives")}
                >
                    Online Exclusives
                </button>
            </div>

            {activeTab === "just-for-you" && (
                <div className={classes["product-slider"]}>
                    {forYouProducts.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            openModal={openModal}
                        />
                    ))}
                </div>
            )}

            {activeTab === "whats-new" && (
                <div className={classes["product-slider"]}>
                    {newProducts.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            openModal={openModal}
                        />
                    ))}
                </div>
            )}

            {activeTab === "online-exclusives" && (
                <div className={classes["product-slider"]}>
                    {giftProducts.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            openModal={openModal}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductTabs;
