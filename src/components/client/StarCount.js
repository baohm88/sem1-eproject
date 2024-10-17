import { FaStar } from "react-icons/fa";

export default function StarCount({ star, ratingSummary }) {
    // Function to calculate the percentage for each star rating
    const getPercentage = (count) => {
        return ratingSummary.totalRatings > 0
            ? ((count / ratingSummary.totalRatings) * 100).toFixed(1)
            : 0;
    };
    return (
        <div
            className="star-row"
            style={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <div
                className="star-label"
                style={{
                    width: "4rem",
                    textAlign: "right",
                    paddingRight: "1rem",
                }}
            >
                {star} <FaStar color={"#A6212B"} />:{" "}
            </div>

            <div
                className="progress-bar"
                style={{
                    maxWidth: "20rem",
                    width: "100%",
                    backgroundColor: "#e4e5e9",
                    height: "10px",
                    borderRadius: "3px",
                }}
            >
                <div
                    className="progress"
                    style={{
                        width: `${getPercentage(
                            ratingSummary.starCounts[star]
                        )}%`,
                        backgroundColor: "#A6212B",
                        height: "10px",
                        borderRadius: "3px",
                    }}
                ></div>
            </div>
            <div
                className="star-percentage"
                style={{
                    width: "8rem",
                    paddingLeft: "1rem",
                }}
            >
                {ratingSummary.starCounts[star]}
            </div>
        </div>
    );
}
