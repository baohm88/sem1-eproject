import { FaStar } from "react-icons/fa";
import Modal from "react-modal"; // Import react-modal
import Button from "../UI/Button";

// Set the app element for accessibility
Modal.setAppElement("#root");

// Custom styles for the modal
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
    },
};

// Render stars component
const renderStars = (rating, setRating) => {
    return (
        <span className="stars">
            {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                    key={index}
                    onClick={() => setRating(index + 1)} // Set rating when star is clicked
                    color={index < rating ? "#A6212B" : "#e4e5e9"}
                    style={{ cursor: "pointer" }} // Make stars clickable
                />
            ))}
        </span>
    );
};

export default function WriteReviewModal({
    isOpen,
    onClose,
    onSubmitReview,
    selectedRating,
    setSelectedRating,
    reviewText,
    setReviewText,
    productName,
}) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Write a Review"
        >
            <h3>My review for {productName}</h3>
            <br />

            <div>
                <p>
                    Select Rating: {renderStars(selectedRating, setSelectedRating)}
                </p>
            </div>
            <div>
                <p>Your Review:</p>
                <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    rows="4"
                    placeholder="Write your review here"
                    style={{ width: "100%" }}
                ></textarea>
            </div>
            <div>
                <Button className="button" onClick={onSubmitReview}>
                    Post Review
                </Button>
                <Button
                    className="text-button"
                    onClick={onClose}
                    style={{ marginLeft: "1rem" }}
                >
                    Cancel
                </Button>
            </div>
        </Modal>
    );
}
