import { renderReviewStars } from "../../util/renderReviewStars";

export default function ProductRating({ rating }) {
    return (
        <div className="rating-card">
            <div>
                <img
                    src={
                        rating.user_image
                            ? rating.user_image
                            : "https://static-00.iconduck.com/assets.00/user-2-account-icon-2048x2046-oucjsuyg.png"
                    }
                    alt={rating.username}
                />
            </div>
            <div>
                <p>{renderReviewStars(rating.rating)} </p>
                <h5>
                    By: {rating.username} on {rating.review_date}
                </h5>
                <p className="rating-comment">
                    <i>{rating.rating_comment}</i>
                </p>
            </div>
        </div>
    );
}
