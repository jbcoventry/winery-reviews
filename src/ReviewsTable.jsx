import { useQuery } from "@tanstack/react-query";
import fetchWineryReviews from "./fetchWineryReviews";

const ReviewsTable = ({ selectedWineries, oldestDate }) => {
  const wineryIndex = `?offset=${selectedWineries}&limit=1`;
  const result = useQuery(["reviews", wineryIndex], fetchWineryReviews);

  if (result.isLoading || result == null) {
    return <div>Loading reviews</div>;
  }

  const wineryData = result.data[0];
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Rating</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {wineryData.reviews
          .filter(
            (review) =>
              Date.parse(review.publishedAtDate) > Date.now() - oldestDate
          )
          .map((review) => (
            <tr key={review.publishedAtDate}>
              <td>
                {new Date(
                  Date.parse(review.publishedAtDate)
                ).toLocaleDateString()}
              </td>
              <td>{review.stars}</td>
              <td>{review.text}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ReviewsTable;
