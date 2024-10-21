// Modal.js
import React, { useContext, useState, useEffect } from "react";
import { formatter } from "../../util/formatter";
import classes from "./Modal.module.css";
import { UserContext } from "../../App";
import Button from "../UI/Button";
import { renderAverageRatingStars } from "../../util/renderAverageRatingStars";
import { calculateRatingSummary } from "../../util/ratingUtils";

export default function Modal({ product, onClose }) {
    const { addToCart } = useContext(UserContext);

    const {
        product_name,
        product_description,
        stock_qty,
        product_price,
        product_images,
    } = product;

    const [selectedImage, setSelectedImage] = useState(product_images[0] || "");

    const [ratingSummary, setRatingSummary] = useState({
        totalRatings: 0,
        averageRating: 0,
        starCounts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
    });

    useEffect(() => {
        if (product?.product_ratings) {
            setRatingSummary(calculateRatingSummary(product.product_ratings)); 
        }
    }, [product]);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        // JSX Code
    );
}
