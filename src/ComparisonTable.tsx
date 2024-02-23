const ComparisonTable = ({ data }) => {
  return (
    <div>
      <table className="grid grid-cols-4 items-center">
        <thead className="contents">
          <tr className="contents">
            <th className="text-left">Rank</th>
            <th className="text-left">Winery</th>
            <th className="text-left">Average Rating</th>
            <th className="text-left">Number of Reviews</th>
          </tr>
        </thead>
        <tbody className="contents">
          {data?.map(({ title, averageRating, NumberOfReviews }, index) => (
            <tr key={title} className="contents ">
              <td>{index + 1}</td>
              <td>{title}</td>
              <td>{averageRating}</td>
              <td>{NumberOfReviews}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
