import { useQuery } from "@tanstack/react-query";
import fetchReviews from "./fetchReviews";

const List = () => {
  const results = useQuery(["reviews"], fetchReviews);
  const reviews = results.data;

  if (results.isLoading) {
    return <div>Loading</div>;
  }
  return <div>{JSON.stringify(reviews)}</div>;
};

export default List;
