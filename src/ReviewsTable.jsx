import { useQuery } from "@tanstack/react-query";
import fetchWinery from "./fetchWinery";
import CalculatedData from "./CalculatedData";

const ReviewsTable = ({ selectedWineries, oldestDate }) => {
  const query = useQuery([selectedWineries[0]?.value], fetchWinery);

  if (query.isLoading) {
    return <div>Loading reviews</div>;
  }
  if (!query.data) {
    return <div>Select a Winery</div>;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Rating</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {query?.data?.reviews
            .filter((review) =>
              oldestDate
                ? review.publishedAtDate >
                  Date.now() - oldestDate * 24 * 60 * 60 * 1000
                : true
            )
            .map((review) => (
              <tr key={review.publishedAtDate}>
                <td>{review.publishedAtDate.toLocaleString()}</td>
                <td>{review.stars}</td>
                <td>{review.text}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ReviewsTable;
