import { useQuery } from "@tanstack/react-query";
import fetchWineryReviews from "./fetchWineryReviews";

const ReviewsTable = ({ selectedWineries }) => {
  const wineryIndex = `?offset=${selectedWineries}&limit=1`;
  const results = useQuery(["reviews", wineryIndex], fetchWineryReviews);

  if (results.isLoading || results == null) {
    return <div>Loading reviews</div>;
  }

  const wineryData = results.data[0];
  return (
    // <div>
    //   <h1>{wineryData[0].title}</h1>
    // </div>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Rating</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {wineryData.reviews.map((review) => (
          <tr key={review.publishedAtDate}>
            <td>{review.publishedAtDate}</td>
            <td>{review.stars}</td>
            <td>{review.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReviewsTable;
