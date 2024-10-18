import StarsCount from "./StarsCount";

export default function RatingSummary({
    ratingSummary,
    renderAverageRatingStars,
}) {
    return (
        <div className="rating-summary">
            <h2 className="center">Ratings & Reviews</h2>

            <div className="row-flex-between">
                <div className="average-rating-stars-container">
                    <span>Overall: </span>
                    <span>
                        {renderAverageRatingStars(ratingSummary.averageRating)}
                    </span>
                    <span>{ratingSummary.averageRating} / 5 </span>
                    <span> | {ratingSummary.totalRatings} reviews</span>
                </div>

                {/* stars count section */}
                <StarsCount ratingSummary={ratingSummary} />
            </div>
        </div>
    );
}
