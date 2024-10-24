import ProductRating from "./ProductRating";

export default function ProductRatings({ ratings }) {
    return (
        <div className="ratings-container">
            {ratings && ratings.length > 0 ? (
                ratings.map((rating) => (
                    <ProductRating key={rating.rating_id} rating={rating} />
                ))
            ) : (
                <p>No ratings available</p>
            )}
        </div>
    );
}
