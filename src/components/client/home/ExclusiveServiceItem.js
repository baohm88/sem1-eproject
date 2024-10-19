import React from "react";
import classes from "./ExclusiveServiceItem.module.css"; // Use a separate CSS module if necessary
import { Link } from "react-router-dom";

const ExclusiveServiceItem = ({ service }) => {
    const { imgSrc, title, description, link, linkText } = service;

    return (
        <div className={classes["service"]}>
            <img src={imgSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={link} className={classes["learn-more"]}>
                {linkText}
            </Link>
        </div>
    );
};

export default ExclusiveServiceItem;
