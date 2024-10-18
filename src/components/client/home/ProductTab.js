import React from "react";
import classes from "./ProductTabs.module.css";

const ProductTab = ({ activeTab, handleTabClick }) => {
    return (
        <div className={classes["product-tabs"]}>
            <button
                className={
                    activeTab === "just-for-you" ? `${classes.active}` : ""
                }
                onClick={() => handleTabClick("just-for-you")}
            >
                Just for You
            </button>
            <button
                className={activeTab === "whats-new" ? `${classes.active}` : ""}
                onClick={() => handleTabClick("whats-new")}
            >
                What's New
            </button>
            <button
                className={
                    activeTab === "online-exclusives" ? `${classes.active}` : ""
                }
                onClick={() => handleTabClick("online-exclusives")}
            >
                Online Exclusives
            </button>
        </div>
    );
};

export default ProductTab;
