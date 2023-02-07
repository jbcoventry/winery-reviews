import { useQuery } from "@tanstack/react-query";
import fetchReviews from "./fetchReviews";

const List = () => {
  const results = useQuery(["reviews"], fetchReviews);
  const reviews = results.data;

  if (results.isLoading) {
    return <div>Loading</div>;
  }
  return (
    <table>
      <tr>
        <th>Date</th>
        <th>Rating</th>
        <th>Comment</th>
      </tr>
      {reviews.map((review) => (
        <tr key={review.publishedAtDate}>
          <td>{review.publishedAtDate}</td>
          <td>{review.stars}</td>
          <td>{review.text}</td>
        </tr>
      ))}
    </table>
  );
};

export default List;
