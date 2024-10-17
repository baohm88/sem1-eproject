import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { formatter } from "../../util/formatter";
import { FaStar } from "react-icons/fa";
import Modal from "react-modal"; // Import react-modal
import Button from "../UI/Button";
import ProductRatings from "./ProductRatings";
import RatingSummary from "./RatingSummary";

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
            <span className="stars">
                {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                        key={index}
                        onClick={() => setRating(index + 1)} // Set rating when star is clicked
                        color={index < rating ? "#A6212B" : "#e4e5e9"}
                        style={{ cursor: "pointer" }} // Make stars clickable
                    />
                ))}
            </span>
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
        };

        // Send review data to the backend
        axios
            .post("http://localhost/project/user/add_review", review, {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response);

                // alert("Thank you for your review!");
                // // Clear the modal and close it
                // setSelectedRating(0);
                // setReviewText("");
                // closeModal();
                // Optionally refresh the product details with new reviews
            })
            .catch((error) => {
                alert("Failed to submit the review. Please try again.");
            });
    };

    return (
        <>
            <div>
                <h1>{product.product_name}</h1>
                <Button className="button" onClick={handleAddToCart}>
                    Add to Cart
                </Button>

                <p>{product.product_description}</p>
                <p>Sub cat: {product.main_category}</p>
                <p>Sub cat: {product.sub_category}</p>
                <p>Qty available: {product.stock_qty}</p>
                <h4>Price: {formatter.format(product.product_price)}</h4>

                <div>
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

                <Button className="button" onClick={openModal}>
                    Write a review
                </Button>

                {/* Modal for writing a review */}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Write a Review"
                >
                    <h3>My review for {product.product_name}</h3>
                    <br />

                    <div>
                        <p>
                            Select Rating:{" "}
                            {renderStars(selectedRating, setSelectedRating)}
                        </p>
                    </div>
                    <div>
                        <p>Your Review:</p>
                        <textarea
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            rows="4"
                            placeholder="Write your review here"
                            style={{ width: "100%" }}
                        ></textarea>
                    </div>
                    <div>
                        <Button className="button" onClick={handleSubmitReview}>
                            Post Review
                        </Button>
                        <Button
                            className="text-button"
                            onClick={closeModal}
                            style={{ marginLeft: "1rem" }}
                        >
                            Cancel
                        </Button>
                    </div>
                </Modal>

                <RatingSummary ratingSummary={ratingSummary} />

                <ProductRatings ratings={product.product_ratings} />
            </div>
        </>
    );
}
