import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { formatter } from "../../util/formatter";
import { FaStar } from "react-icons/fa"; // Import star icon

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

    const { id } = useParams();
    const { addToCart } = useContext(UserContext); // Destructure addToCart from context

    useEffect(() => {
        axios
            .get("http://localhost/project/collections/product/id=" + id)
            .then((res) => {
                const productData = res.data.data;
                setProduct(productData);
                calculateRatingSummary(productData.product_ratings);
            });
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product); // Call addToCart with the current product
        alert(product.product_name + " has been added to cart!");
    };

    // Function to render stars based on the rating value
    const renderStars = (rating) => {
        return (
            <div className="stars">
                {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                        key={index}
                        color={index < rating ? "#A6212B" : "#e4e5e9"}
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

                {/* Rating Summary Section */}
                <div className="rating-summary">
                    <h2>Ratings Summary</h2>
                    <p>Average Rating: {ratingSummary.averageRating} / 5</p>
                    <p>Total Ratings: {ratingSummary.totalRatings}</p>

                    <div>
                        {[5, 4, 3, 2, 1].map((star) => (
                            <div key={star} className="star-row">
                                <div className="star-label">
                                    {star} <FaStar color={"#A6212B"} />:{" "}
                                    {ratingSummary.starCounts[star]} (
                                    {getPercentage(
                                        ratingSummary.starCounts[star]
                                    )}
                                    %)
                                </div>
                                <div className="progress-bar">
                                    <div
                                        className="progress"
                                        style={{
                                            width: `${getPercentage(
                                                ratingSummary.starCounts[star]
                                            )}%`,
                                            backgroundColor: "#ffc107",
                                            height: "10px",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Individual Ratings Section */}
                <div className="ratings-container">
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
