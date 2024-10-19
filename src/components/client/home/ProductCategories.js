// components/ProductCategories.js
import React from "react";
import classes from "./ProductCategories.module.css";
import { Link } from "react-router-dom";

const ProductCategories = () => {
    const categories = [
        {
            href: "/skincare",
            src: "Highlight_DOUBLE-SERUM_2024.jpg",
            alt: "Face",
            name: "FACE",
        },
        {
            href: "/makeup",
            src: "CBA_HP_Highlight_LIP-OIL-BALM_2024_Cherry-APAC.jpg",
            alt: "Makeup",
            name: "MAKEUP",
        },
        {
            href: "/skincare",
            src: "Body-Fit-Active-Highlight.JPG",
            alt: "Body",
            name: "BODY",
        },
        {
            href: "/skincare",
            src: "CBA_HP_Highlights_Lifestyle_Body_Sun3.jpg",
            alt: "Sun",
            name: "SUN",
        },
    ];

    return (
        <div className={classes["expertise-section"]}>
            <h1>Your skin. Our expertise.</h1>
            <p>Discover our plant-powered formulas</p>
            <div className={classes["product-categories"]}>
                {categories.map((category, index) => (
                    <div
                        className={classes[`category${index + 1}`]}
                        key={index}
                    >
                        <Link to={category.href}>
                            <img
                                src={category.src}
                                alt={category.alt}
                                className={classes["category-image"]}
                            />
                        </Link>
                        <h3>{category.name}</h3>
                        <Link
                            to={category.href}
                            className={classes["shop-now"]}
                        >
                            SHOP NOW
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCategories;
