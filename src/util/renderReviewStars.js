import { FaStar } from "react-icons/fa";

export const renderReviewStars = (rating) => {
    return (
        <span className="stars">
            {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                    key={index}
                    color={index < rating ? "#A6212B" : "#e4e5e9"}
                />
            ))}
        </span>
    );
};