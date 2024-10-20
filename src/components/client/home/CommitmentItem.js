import React from "react";
import classes from "./CommitmentItem.module.css";

const CommitmentItem = ({ commitment }) => {
    const { imgSrc, title } = commitment;

    return (
        <div className={classes["commitment-item"]}>
            <img src={imgSrc} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default CommitmentItem;
