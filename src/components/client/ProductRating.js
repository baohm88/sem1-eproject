import { renderReviewStars } from "../../util/renderReviewStars";

export default function ProductRating({ rating }) {
    console.log(rating);

    return (
        <div className="rating-card">
            <div>
                <img
                    src="https://img.freepik.com/premium-photo/web-developer-digital-avatar-generative-ai_934475-9048.jpg"
                    alt="web dev"
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
