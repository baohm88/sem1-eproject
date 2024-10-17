import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import StarsCount from "./StarsCount";

export default function RatingSummary({ratingSummary}) {
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

    return (
        <div className="rating-summary">
            <h2>Ratings Summary</h2>
            
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div className="summary">
                    <div
                        className="average-rating-stars-container"
                        style={{ display: "flex", gap: "10px" }}
                    >
                        <span>Overall: </span>
                        <span>
                            {renderAverageRatingStars(
                                ratingSummary.averageRating
                            )}
                        </span>
                        <span>{ratingSummary.averageRating} / 5 </span>
                        <span> | {ratingSummary.totalRatings} reviews</span>
                    </div>
                </div>

                {/* stars count section */}
                <StarsCount ratingSummary={ratingSummary} />
            </div>
        </div>
    );
}
