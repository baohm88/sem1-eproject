
export const calculateRatingSummary = (ratings) => {
    if (!ratings || ratings.length === 0) return;

    let totalRatings = ratings.length;
    let starCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let totalStars = 0;

    ratings.forEach((rating) => {
        const starRating = rating; // ratings are already numbers now
        starCounts[starRating]++;
        totalStars += starRating;
    });

    const averageRating = (totalStars / totalRatings).toFixed(1);

    return {
        totalRatings,
        averageRating,
        starCounts,
    };
};