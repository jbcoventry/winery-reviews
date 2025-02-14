import { Link } from "@tanstack/react-router";
import { ComparisonTableRow } from "../../types";

export type ComparisonTableProps = ComparisonTableRow[];

const ComparisonTable = ({ data }: { data: ComparisonTableProps }) => {
  return (
    <div className="mx-2 my-2 flex flex-row">
      <div className="flex flex-1"></div>
      <table className="w-full text-md text-left max-w-6xl">
        <thead className="">
          <tr className="py-2">
            <th className="px-3">Rank</th>
            <th className="px-3">Winery</th>
            <th className="px-3">Average Rating</th>
            <th className="px-3">Number of Reviews</th>
          </tr>
        </thead>
        <tbody className="">
          {data?.map(({ id, title, averageRating, NumberOfReviews }, index) => (
            <tr key={title} className="odd:bg-gray-50 py-1">
              <td className="px-3">{index + 1}</td>
              <td className="px-3">
                <Link to={`/wineries/$wineryId`} params={{ wineryId: id }}>
                  {title}
                </Link>
              </td>
              <td className="px-3">{averageRating}</td>
              <td className="px-3">{NumberOfReviews}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-1"></div>
    </div>
  );
};

export default ComparisonTable;
