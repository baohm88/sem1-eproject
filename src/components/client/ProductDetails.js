import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";
import { formatter } from "../../util/formatter";
import Button from "../UI/Button";
import ProductRatings from "./ProductRatings";
import RatingSummary from "./RatingSummary";
import WriteReviewModal from "./WriteReviewModal";
import RelatedProducts from "./RelatedProducts";
import classes from "./ProductDetails.module.css";
import { renderAverageRatingStars } from "../../util/renderAverageRatingStars";
import { calculateRatingSummary } from "../../util/ratingUtils";

export default function ProductDetails() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [ratingSummary, setRatingSummary] = useState({
        totalRatings: 0,
        averageRating: 0,
        starCounts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
    });

    const {
        product_name,
        product_description,
        stock_qty,
        product_price,
        product_images,
        product_ratings = [], // Default to an empty array if not available
        benefits,
    } = product;

    // State for modal visibility, rating, and review
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRating, setSelectedRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const [selectedImage, setSelectedImage] = useState("");

    const [mainCategory, setMainCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");

    const { user } = useContext(UserContext);
    const { id } = useParams();
    const { addToCart } = useContext(UserContext);

    useEffect(() => {
        let isMounted = true; // Track if the component is mounted

        setLoading(true);
        axios
            .get("http://localhost/project/collections/product/id=" + id)
            .then((res) => {
                if (isMounted) {
                    const productData = res.data.data;
                    setProduct(productData);
                    setMainCategory(productData.main_category);
                    setSubCategory(productData.sub_category);

                    const ratings = productData.product_ratings || [];
                    if (ratings.length > 0) {
                        const ratingSummaryData = calculateRatingSummary(
                            ratings.map((rating) => rating.rating || [])
                        );
                        setRatingSummary(ratingSummaryData);
                    }
                    setLoading(false);

                    if (productData.product_name) {
                        document.title = productData.product_name;
                    }

                    if (productData.product_images) {
                        const imagesArray =
                            productData.product_images.split(",");
                        setSelectedImage(imagesArray[0]);
                    }
                }
            })
            .catch((error) => {
                if (isMounted) {
                    console.error("Error fetching product details:", error);
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false; // Cleanup function to mark component as unmounted
        };
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product);
        alert(product.product_name + " has been added to cart!");
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSubmitReview = async () => {
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

        try {
            const response = await axios.post(
                "http://localhost/project/products/rating/",
                review,
                {
                    withCredentials: true,
                }
            );

            if (response.data.type === "success") {
                alert("Thank you for your review!");

                const newRating = {
                    user_id: user.user_id,
                    rating: selectedRating,
                    rating_comment: reviewText,
                    user_image: user.user_image,
                    username: user.username,
                    review_date: new Date(),
                };

                const updatedRatings = [newRating, ...product_ratings];
                const updatedRatingSummary = calculateRatingSummary(
                    updatedRatings.map((rating) => rating.rating)
                );

                setProduct((prevProduct) => ({
                    ...prevProduct,
                    product_ratings: updatedRatings,
                }));

                setRatingSummary(updatedRatingSummary);
                setSelectedRating(0);
                setReviewText("");
                closeModal();
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            alert("Failed to submit the review. Please try again.");
        }
    };

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    if (loading) return <p>Loading product details...</p>;

    // Ensure ratingSummary is available before using it
    const averageRating = ratingSummary?.averageRating || 0; // Default to 0 if undefined

    return (
        <div className={classes["product-details-container"]}>
            <div className={classes["product-details"]}>
                <div className={classes["product-images-container"]}>
                    <div className={classes["product-images"]}>
                        {product_images && product_images.length > 0 ? (
                            product_images
                                .split(",")
                                .map((imageUrl, index) => (
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
                            src={
                                selectedImage ||
                                (product_images
                                    ? product_images.split(",")[0]
                                    : "")
                            }
                            alt={product_name}
                            className={classes["product-image"]}
                        />
                    </div>
                </div>

                <div className={classes["product-info-container"]}>
                    <h1>{product_name}</h1>

                    <div className={classes["average-rating-stars-container"]}>
                        <span>{renderAverageRatingStars(averageRating)}</span>
                        <span>{averageRating} </span>
                        <span> | {ratingSummary.totalRatings} reviews</span>
                    </div>

                    <p className={classes.product_description}>
                        {product_description}
                    </p>

                    {benefits && benefits.length > 0 && (
                        <div className={classes.benefitsContainer}>
                            <h3>Benefits</h3>
                            <ul className={classes.benefits}>
                                {benefits.split(";").map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <p className={classes.available}>
                        {" "}
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
                </div>
            </div>

            <RelatedProducts
                productId={Number(id)}
                mainCategory={mainCategory}
                subCategory={subCategory}
            />

            <div className={classes["product-reviews"]}>
                {ratingSummary.totalRatings === 0 ? (
                    <div className={classes["no-reviews-message"]}>
                        <h3>No ratings or reviews yet</h3>
                        <p>Be the first to review this product!</p>
                        <Button className="button" onClick={openModal}>
                            Write a review
                        </Button>
                    </div>
                ) : (
                    <>
                        <RatingSummary
                            ratingSummary={ratingSummary}
                            renderAverageRatingStars={renderAverageRatingStars}
                        />
                        {user ? (
                            <Button className="button" onClick={openModal}>
                                Write a review
                            </Button>
                        ) : (
                            <p>
                                <Link to={"/login"}>
                                    <Button className="button">Login</Button>{" "}
                                </Link>{" "}
                                to write a review
                            </p>
                        )}
                        <ProductRatings ratings={product_ratings} />
                    </>
                )}

                <WriteReviewModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSubmitReview={handleSubmitReview}
                    selectedRating={selectedRating}
                    setSelectedRating={setSelectedRating}
                    reviewText={reviewText}
                    setReviewText={setReviewText}
                    productName={product_name}
                />
            </div>
        </div>
    );
}
