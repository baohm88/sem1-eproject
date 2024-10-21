import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const renderAverageRatingStars = (averageRating) => {
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
