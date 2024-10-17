import { FaStar } from "react-icons/fa";

const renderReviewStars = (rating) => {
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

export default function ProductRating({ rating }) {
    return (
        <div className="rating-card">
            <br />
            <p>{renderReviewStars(rating.rating)} </p>
            <h5>
                By: {rating.username} on {rating.review_date}
            </h5>

            <i>{rating.rating_comment}</i>
            <br />
            <br />
            <hr />
        </div>
    );
}
