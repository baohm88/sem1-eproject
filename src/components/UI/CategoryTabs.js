import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CategoryTabs.module.css";

export default function CategoryTabs({
    categories,
    selectedCategory,
    allLabel,
    basePath,
}) {
    const navigate = useNavigate();

    function updateCategoryInURL(category) {
        navigate({
            pathname: basePath,
            search: category ? `?category=${category}` : "",
        });
    }

    return (
        <div className={classes["tabs-container"]}>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => updateCategoryInURL(category)}
                    className={
                        selectedCategory === category ? classes.active : ""
                    }
                >
                    {category}
                </button>
            ))}
            <button
                onClick={() => updateCategoryInURL("")}
                className={!selectedCategory ? classes.active : ""}
            >
                {allLabel}
            </button>
        </div>
    );
}
