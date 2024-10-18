import React from "react";
import classes from "./CommitmentItem.module.css"; // Use a separate CSS module if necessary

const CommitmentItem = ({ commitment }) => {
    const { imgSrc, title } = commitment;

    return (
        <button className={classes["commitment-button"]}>
            <img src={imgSrc} alt={title} />
            <h3>{title}</h3>
        </button>
    );
};

export default CommitmentItem;
