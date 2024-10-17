import StarCount from "./StarCount";

export default function StarsCount({ ratingSummary }) {
    return (
        <div style={{ width: "50vw" }}>
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
