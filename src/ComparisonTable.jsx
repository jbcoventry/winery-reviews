import { useQuery } from "@tanstack/react-query";
import fetchComparison from "./fetchComparison";
import reviewStarsAverage from "./reviewStarsAverage";

const ComparisonTable = () => {
  const query = useQuery(["comparison"], fetchComparison);

  if (query.isLoading) {
    return <div>Loading comparison table</div>;
  }
  if (!query.data) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Title</th>
            <th>Average Rating</th>
            <th>Number of Reviews</th>
          </tr>
        </thead>
        <tbody>
          {query?.data
            // .filter((review) =>
            //   oldestDate
            //     ? review.publishedAtDate >
            //       Date.now() - oldestDate * 24 * 60 * 60 * 1000
            //     : true
            // )
            .map((winery, index) => (
              <tr key={winery.title}>
                <td>{index + 1}</td>
                <td>{winery.title}</td>
                <td>{winery.reviewStarAverage}</td>
                <td>{winery.reviews.length}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ComparisonTable;
