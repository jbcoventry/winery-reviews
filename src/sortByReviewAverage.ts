import { wineriesAPIResponse, Review } from "./types";

const sortByReviewAverage = (
  data: wineriesAPIResponse,
  oldestDate: number,
  minimumReviews: number,
  now: number
) => {
  if (data === undefined) {
    return [];
  }
  const nowInSeconds = Math.round(now / 1000);
  const oldestDateSeconds = oldestDate * 24 * 60 * 60;
  const wineriesOverMinimumReviews = data.filter(
    (winery) => winery.reviews.length >= minimumReviews
  );
  const indexOfLastReviewToInclude = (x: Review[]) =>
    x.findIndex(
      ({ timestamp }) => timestamp < nowInSeconds - oldestDateSeconds
    );
  const reviewsSlicedByDate = (x: Review[]) =>
    x.slice(0, indexOfLastReviewToInclude(x));
  const wineriesWithAverageRatingAndTotalReviews =
    wineriesOverMinimumReviews.map(({ title, reviews }) => {
      const filteredReviews = oldestDate
        ? reviewsSlicedByDate(reviews)
        : reviews;
      return {
        title,
        averageRating:
          filteredReviews.length === 0
            ? 0
            : Math.round(
                (filteredReviews.reduce((acc, { rating }) => acc + rating, 0) /
                  filteredReviews.length) *
                  1000
              ) / 1000,
        NumberOfReviews: filteredReviews.length,
      };
    });
  return wineriesWithAverageRatingAndTotalReviews.sort(
    (a, b) => b.averageRating - a.averageRating
  );
};
export default sortByReviewAverage;
