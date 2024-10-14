import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { formatter } from "../../util/formatter";
import { FaStar } from "react-icons/fa"; // Import star icon
import Modal from "react-modal"; // Import react-modal

// Set the app element for accessibility
Modal.setAppElement("#root");

// Custom styles for the modal
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
    },
};

export default function ProductDetails() {
    const [product, setProduct] = useState("");
    const [ratingSummary, setRatingSummary] = useState({
        totalRatings: 0,
        averageRating: 0,
        starCounts: {
            5: 0,
            4: 0,
            3: 0,
            2: 0,
            1: 0,
        },
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

    // Function to render stars based on the rating value
    const renderStars = (rating, setRating) => {
        return (
            <div className="stars">
                {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                        key={index}
                        onClick={() => setRating(index + 1)} // Set rating when star is clicked
                        color={index < rating ? "#A6212B" : "#e4e5e9"}
                        style={{ cursor: "pointer" }} // Make stars clickable
                    />
                ))}
            </div>
        );
    };

    // Calculate the rating summary (counts and average)
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

    // Function to calculate the percentage for each star rating
    const getPercentage = (count) => {
        return ratingSummary.totalRatings > 0
            ? ((count / ratingSummary.totalRatings) * 100).toFixed(1)
            : 0;
    };

    // Open modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Handle submit review
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
            // username: "CurrentUser", // Replace this with the current user's name if available
            // review_date: new Date().toLocaleDateString(),
        };

        console.log(review);

        // Send review data to the backend
        // axios.post(`http://localhost/project/collections/product/${id}/add-review`, review)
        //     .then((response) => {
        //         alert("Thank you for your review!");
        //         // Clear the modal and close it
        //         setSelectedRating(0);
        //         setReviewText("");
        //         closeModal();
        //         // Optionally refresh the product details with new reviews
        //     })
        //     .catch((error) => {
        //         alert("Failed to submit the review. Please try again.");
        //     });
    };

    return (
        <>
            <h1>Product # {id}</h1>
            <div>
                <p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </p>
                <p>Name: {product.product_name}</p>
                <p>Main cat: {product.main_category}</p>
                <p>Sub cat: {product.sub_category}</p>
                <p>Qty available: {product.quantity_in_stock}</p>
                <p>Price: {formatter.format(product.price)}</p>

                <div>
                    <h3>Product Images:</h3>
                    {product.product_images &&
                    product.product_images.length > 0 ? (
                        product.product_images
                            .split(",")
                            .map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Product ${index + 1}`}
                                    style={{ width: "200px", margin: "10px" }}
                                />
                            ))
                    ) : (
                        <p>No images available</p>
                    )}
                </div>

                <button
                    style={{
                        backgroundColor: "#A6212B",
                        border: "none",
                        padding: "5px 10px",
                        color: "white",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={openModal}
                >
                    Write a review
                </button>

                {/* Modal for writing a review */}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Write a Review"
                >
                    <h3>My review for {product.product_name}</h3>
                    <div>
                        <p>Select Rating:</p>
                        {renderStars(selectedRating, setSelectedRating)}
                    </div>
                    <div>
                        <p>Your Review:</p>
                        <textarea
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            rows="4"
                            cols="50"
                            placeholder="Write your review here"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            onClick={handleSubmitReview}
                            style={{
                                backgroundColor: "#A6212B",
                                border: "none",
                                padding: "5px 10px",
                                color: "white",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Post Review
                        </button>
                        <button
                            onClick={closeModal}
                            style={{ marginLeft: "10px" }}
                        >
                            Cancel
                        </button>
                    </div>
                </Modal>

                {/* Rating Summary Section */}
                <div className="rating-summary">
                    <h2>Ratings Summary</h2>
                    <p>Average Rating: {ratingSummary.averageRating} / 5</p>
                    <p>Total Ratings: {ratingSummary.totalRatings}</p>

                    <div>
                        {[5, 4, 3, 2, 1].map((star) => (
                            <div
                                key={star}
                                className="star-row"
                                style={{ display: "flex" }}
                            >
                                <div
                                    className="star-label"
                                    style={{ minWidth: "10rem" }}
                                >
                                    {star} <FaStar color={"#A6212B"} />:{" "}
                                    {ratingSummary.starCounts[star]} (
                                    {getPercentage(
                                        ratingSummary.starCounts[star]
                                    )}
                                    %)
                                </div>
                                <div
                                    className="progress-bar"
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#e4e5e9",
                                        height: "10px",
                                    }}
                                >
                                    <div
                                        className="progress"
                                        style={{
                                            width: `${getPercentage(
                                                ratingSummary.starCounts[star]
                                            )}%`,
                                            backgroundColor: "#A6212B",
                                            height: "10px",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Individual Ratings Section */}
                <div
                    className="ratings-container"
                    style={{ marginTop: "1rem" }}
                >
                    <h2>Ratings & Reviews</h2>
                    {product.product_ratings &&
                    product.product_ratings.length > 0 ? (
                        product.product_ratings.map((rating) => (
                            <div className="rating-card" key={rating.rating_id}>
                                <br />
                                <p>{renderStars(rating.rating)} </p>
                                <h5>
                                    By: {rating.username} on{" "}
                                    {rating.review_date}
                                </h5>

                                <i>{rating.rating_comment}</i>
                                <br />
                                <br />
                                <hr />
                            </div>
                        ))
                    ) : (
                        <p>No ratings available</p>
                    )}
                </div>
            </div>
        </>
    );
}
