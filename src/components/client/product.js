import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";
import { formatter } from "../../util/formatter";
import Button from "../UI/Button";
import ProductRatings from "./ProductRatings";
import RatingSummary from "./RatingSummary";
import WriteReviewModal from "./WriteReviewModal"; // Import the WriteReviewModal component

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
    const { addToCart } = useContext(UserContext);

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

        // Send review data to the backend
        axios
            .post("http://localhost/project/user/add_review", review, {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response);

                // Optionally refresh product details with new reviews
                // setSelectedRating(0);
                // setReviewText("");
                // closeModal();
                // alert("Thank you for your review!");
            })
            .catch((error) => {
                alert("Failed to submit the review. Please try again.");
            });
    };

    return (
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
                {product.product_images && product.product_images.length > 0 ? (
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

            <RatingSummary ratingSummary={ratingSummary} />
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
    );
}
