import { FaStar } from "react-icons/fa";

export default function StarCount({ star, ratingSummary }) {
    // Function to calculate the percentage for each star rating
    const getPercentage = (count) => {
        return ratingSummary.totalRatings > 0
            ? ((count / ratingSummary.totalRatings) * 100).toFixed(1)
            : 0;
    };
    return (
        <div className="star-row">
            <div className="star-label">
                {star} <FaStar color={"#A6212B"} />:
            </div>

            <div className="progress-bar">
                <div
                    className="progress"
                    style={{
                        width: `${getPercentage(
                            ratingSummary.starCounts[star]
                        )}%`,
                        backgroundColor: "#A6212B",
                        height: "10px",
                        borderRadius: "5px",
                    }}
                ></div>
            </div>
            <div className="star-percentage">
                {ratingSummary.starCounts[star]}
            </div>
        </div>
    );
}
