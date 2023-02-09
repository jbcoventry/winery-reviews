import { useQuery } from "@tanstack/react-query";
import fetchReviews from "./fetchReviews";

const List = () => {
  const results = useQuery(["reviews"], fetchReviews);
  const wineryData = results.data;

  if (results.isLoading) {
    return <div>Loading</div>;
  }
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
        {wineryData[0].reviews.map((review) => (
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

export default List;
