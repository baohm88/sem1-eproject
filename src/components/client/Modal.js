import React, { useContext, useState } from "react";
import { formatter } from "../../util/formatter";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import classes from "./Modal.module.css";
import { UserContext } from "../../App";
import Button from "../UI/Button";

export default function Modal({ product, onClose }) {
    const { addToCart } = useContext(UserContext); // Destructure addToCart from context
    // Set up the slideshow state outside of the conditional return
    const images = product?.product_images
        ? product.product_images.split(",")
        : [];
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index

    // Handlers for previous and next buttons
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleAddToCart = () => {
        addToCart(product); // Call addToCart with the current product
        alert(product.product_name + " has been added to cart!");
    };

    if (!product) return null; // If no product, return null (don't render anything)

    return (
        <div className={classes["modal-overlay"]} onClick={onClose}>
            <div
                className={classes["modal-content"]}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={classes["close-button"]} onClick={onClose}>
                    &times;
                </button>

                {images.length > 0 && (
                    <div className={classes["image-slideshow"]}>
                        <button
                            className={classes["prev-button"]}
                            onClick={prevImage}
                        >
                            <IoChevronBackOutline />
                        </button>

                        <img
                            src={images[currentImageIndex]}
                            alt={product.product_name}
                            className={classes["modal-image"]}
                        />

                        <button
                            className={classes["next-button"]}
                            onClick={nextImage}
                        >
                            <IoChevronForward />
                        </button>
                    </div>
                )}

                <h3>{product.product_name}</h3>
                <p>{product.product_description}</p>
                <h4>{formatter.format(product.product_price)}</h4>
                <Button className="button" onClick={handleAddToCart}>
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}
