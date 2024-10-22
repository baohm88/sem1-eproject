import React, { useContext, useState, useEffect } from "react";
import { formatter } from "../../util/formatter";
import classes from "./Modal.module.css";
import { UserContext } from "../../App";
import Button from "./Button";
import { renderAverageRatingStars } from "../../util/renderAverageRatingStars";
import { calculateRatingSummary } from "../../util/ratingUtils";
import { Link } from "react-router-dom";

export default function Modal({ product, onClose }) {
    const { addToCart } = useContext(UserContext);

    const {
        product_name,
        product_description,
        stock_qty,
        product_price,
        product_images,
        product_ratings,
    } = product;

    const images = product_images ? product_images.split(",") : [];
    const [selectedImage, setSelectedImage] = useState(images[0] || "");

    const [ratingSummary, setRatingSummary] = useState({
        totalRatings: 0,
        averageRating: 0,
        starCounts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
    });

    useEffect(() => {
        if (product?.product_ratings) {
            // const ratingsArray = product.product_ratings
            const ratingsArray = product_ratings
                ? product.product_ratings.split(",").map(Number)
                : [];

            const summary = calculateRatingSummary(ratingsArray);
            setRatingSummary(summary);

            setRatingSummary(summary);
        }

        // Set the initial selected image when product_images changes
        if (images.length > 0) {
            setSelectedImage(images[0]);
        }
    }, [product]);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const handleAddToCart = () => {
        addToCart(product);
        alert(product.product_name + " has been added to cart!");
    };

    if (!product) return null;

    return (
        <div className={classes["modal-overlay"]} onClick={onClose}>
            <div
                className={classes["modal-content"]}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={classes["close-button"]} onClick={onClose}>
                    &times;
                </button>

                <div className={classes["product-details"]}>
                    <div className={classes["product-images-container"]}>
                        <div className={classes["product-images"]}>
                            {images.length > 0 ? (
                                images.map((imageUrl, index) => (
                                    <img
                                        key={index}
                                        src={imageUrl}
                                        alt={`${product_name} ${index + 1}`}
                                        onClick={() =>
                                            handleImageClick(imageUrl)
                                        }
                                        className={
                                            selectedImage === imageUrl
                                                ? classes.selected
                                                : ""
                                        }
                                    />
                                ))
                            ) : (
                                <p>No images available</p>
                            )}
                        </div>
                        <div className={classes["current-image-container"]}>
                            <img
                                src={selectedImage}
                                alt={product_name}
                                className={classes["product-image"]}
                            />
                        </div>
                    </div>

                    <div className={classes["product-info-container"]}>
                        <h1>{product_name}</h1>

                        <div
                            className={
                                classes["average-rating-stars-container"]
                            }
                        >
                            <span>
                                {renderAverageRatingStars(
                                    ratingSummary.averageRating
                                )}
                            </span>
                            <span>{ratingSummary.averageRating} </span>
                            <span> | {ratingSummary.totalRatings} reviews</span>
                        </div>

                        <p className={classes.product_description}>
                            {product_description}
                        </p>
                        <p className={classes.available}>
                            Qty available: {stock_qty}
                        </p>
                        <h4 className={classes.price}>
                            Price: {formatter.format(product_price)}
                        </h4>
                        <Button
                            className="full-width-button"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </Button>

                        <p className={classes.product_link}>
                            <Link to={"/products/" + product.product_id}>
                                View Product Details
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
