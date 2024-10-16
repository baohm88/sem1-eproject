import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { formatter } from "../../util/formatter";
import Button from "../UI/Button";
import ProductRatings from "./ProductRatings";
import RatingSummary from "./RatingSummary";
import WriteReviewModal from "./WriteReviewModal";
import classes from "./ProductDetails.module.css";

export default function ProductDetails() {
    const [product, setProduct] = useState("");
    const [ratingSummary, setRatingSummary] = useState({
        totalRatings: 0,
        averageRating: 0,
        starCounts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
    });

    // State for modal visibility, rating, and review
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRating, setSelectedRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const { user } = useContext(UserContext);

    const { id } = useParams();
    const { addToCart } = useContext(UserContext); // Destructure addToCart from context

    useEffect(() => {
        axios
            .get("http://localhost/project/collections/product/id=" + id)
            .then((res) => {
                const productData = res.data.data;
                setProduct(productData);
                calculateRatingSummary(productData.product_ratings);

                // Dynamically set the document title to the product name
                if (productData.product_name) {
                    document.title = productData.product_name;
                }
            });
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product); // Call addToCart with the current product
        alert(product.product_name + " has been added to cart!");
    };

    const calculateRatingSummary = (ratings) => {
        if (!ratings || ratings.length === 0) return;

        let totalRatings = ratings.length;
        let starCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        let totalStars = 0;

        ratings.forEach((rating) => {
            const starRating = rating.rating;
            starCounts[starRating]++;
            totalStars += starRating;
        });

        const averageRating = (totalStars / totalRatings).toFixed(1); // Calculate average rating

        setRatingSummary({
            totalRatings,
            averageRating,
            starCounts,
        });
    };

    // Function to render the average rating using stars
    const renderAverageRatingStars = (averageRating) => {
        const fullStars = Math.floor(averageRating); // Full stars
        const hasHalfStar = averageRating - fullStars >= 0.5; // Half star if remainder is 0.5 or more
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

        return (
            <span className="average-rating-stars">
                {/* Full Stars */}
                {Array.from({ length: fullStars }, (_, index) => (
                    <FaStar key={"full-" + index} color={"#A6212B"} />
                ))}

                {/* Half Star */}
                {hasHalfStar && <FaStarHalfAlt color={"#A6212B"} />}

                {/* Empty Stars */}
                {Array.from({ length: emptyStars }, (_, index) => (
                    <FaStar key={"empty-" + index} color={"#e4e5e9"} />
                ))}
            </span>
        );
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSubmitReview = () => {
        if (selectedRating === 0) {
            alert("Please select a rating.");
            return;
        }

        const review = {
            product_id: id,
            user_id: user.user_id,
            rating: selectedRating,
            rating_comment: reviewText,
        };

        console.log(review);

        // Send review data to the backend
        axios
            .post("http://localhost/project/user/add_review", review, {
                withCredentials: true,
            })
            .then((response) => {
                // Optionally refresh product details with new reviews
                setSelectedRating(0);
                setReviewText("");
                closeModal();
                alert("Thank you for your review!");
            })
            .catch((error) => {
                alert("Failed to submit the review. Please try again.");
            });
    };

    return (
        <div className={classes["product-details-container"]}>
            <div className={classes["product-details"]}>
                <div className={classes["product-images-container"]}>
                    <div className={classes["product-images"]}>
                        {product.product_images &&
                        product.product_images.length > 0 ? (
                            product.product_images
                                .split(",")
                                .map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Product ${index + 1}`}
                                    />
                                ))
                        ) : (
                            <p>No images available</p>
                        )}
                    </div>
                    <div className={classes["current-image-container"]}>
                        <img
                            src={
                                product.product_images
                                    ? product.product_images.split(",")[0]
                                    : ""
                            }
                            alt={product.product_name}
                            className={classes["product-image"]}
                        />
                    </div>
                </div>

                <div className={classes["product-info-container"]}>
                    <h1>{product.product_name}</h1>

                    <div className={classes["average-rating-stars-container"]}>
                        <span>
                            {renderAverageRatingStars(
                                ratingSummary.averageRating
                            )}
                        </span>
                        <span>{ratingSummary.averageRating} </span>
                        <span> | {ratingSummary.totalRatings} reviews</span>
                    </div>

                    <p className={classes.product_description}>
                        {product.product_description}
                    </p>
                    <p className={classes.available}>
                        {" "}
                        Qty available: {product.stock_qty}
                    </p>
                    <h4 className={classes.price}>
                        Price: {formatter.format(product.product_price)}
                    </h4>
                    <Button
                        className="full-width-button"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>

            <div className={classes["product-reviews"]}>
                <RatingSummary
                    ratingSummary={ratingSummary}
                    renderAverageRatingStars={renderAverageRatingStars}
                />
                <Button className="button" onClick={openModal}>
                    Write a review
                </Button>
                <ProductRatings ratings={product.product_ratings} />

                <WriteReviewModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSubmitReview={handleSubmitReview}
                    selectedRating={selectedRating}
                    setSelectedRating={setSelectedRating}
                    reviewText={reviewText}
                    setReviewText={setReviewText}
                    productName={product.product_name}
                />
            </div>
        </div>
    );
}
