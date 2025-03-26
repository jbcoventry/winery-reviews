import {
  wineriesAPIResponse,
  Winery,
  Review,
  ComparisonTableRow,
} from "../types";

const sortByReviewAverage = (
  data: wineriesAPIResponse,
  oldestDate: number,
  minimumReviews: number,
  now: number | undefined,
  lastUpdated: string | unknown,
) => {
  if (data === undefined || lastUpdated === undefined || now === undefined) {
    return [];
  }
  const nowInSeconds = Math.round(now / 1000);
  const oldestDateSeconds = oldestDate * 24 * 60 * 6;
  // const lastUpdatedSeconds = Math.round(Date.parse(lastUpdated) / 1000);
  const wineriesOverMinimumReviews = data.filter(
    (winery: Winery) => winery.reviews.length >= minimumReviews,
  );
  const indexOfOldestReviewToInclude = (x: Review[]) =>
    x.findIndex(
      ({ timestamp }) => timestamp < nowInSeconds - oldestDateSeconds,
    );
  const reviewsSlicedByDate = (x: Review[]) =>
    x.slice(0, indexOfOldestReviewToInclude(x));

  const wineriesWithAverageRatingAndTotalReviews =
    wineriesOverMinimumReviews.map(
      ({
        id,
        title,
        reviews,
      }: {
        id: string;
        title: string;
        reviews: Review[];
      }) => {
        const filteredReviews = oldestDate
          ? reviewsSlicedByDate(reviews)
          : reviews;
        return {
          id,
          title,
          averageRating:
            filteredReviews.length === 0
              ? 0
              : Math.round(
                  (filteredReviews.reduce(
                    (acc, { rating }) => acc + rating,
                    0,
                  ) /
                    filteredReviews.length) *
                    1000,
                ) / 1000,
          NumberOfReviews: filteredReviews.length,
        };
      },
    );
  return wineriesWithAverageRatingAndTotalReviews.sort(
    (a: ComparisonTableRow, b: ComparisonTableRow) =>
      b.averageRating - a.averageRating,
  );
};
export default sortByReviewAverage;
