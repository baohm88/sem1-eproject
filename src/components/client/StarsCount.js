import StarCount from "./StarCount";

export default function StarsCount({ ratingSummary }) {
    return (
        <div className="star-rows-container">
            {[5, 4, 3, 2, 1].map((star) => (
                <StarCount
                    key={star}
                    star={star}
                    ratingSummary={ratingSummary}
                />
            ))}
        </div>
    );
}
