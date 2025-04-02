import { Link } from "@tanstack/react-router";
import { ComparisonTableRow } from "../../types";

export type ComparisonTableProps = ComparisonTableRow[];

const ComparisonTable = ({ data }: { data: ComparisonTableProps }) => {
  return (
    <table className="text-md m-auto text-left">
      <thead className="">
        <tr className="">
          <th className="p-2">Rank</th>
          <th className="p-2">Winery</th>
          <th className="p-2">Rating</th>
          <th className="p-2">No. Reviews</th>
        </tr>
      </thead>
      <tbody className="">
        {data?.map(({ id, title, averageRating, NumberOfReviews }, index) => (
          <tr key={title} className="odd:bg-slate-100 odd:dark:bg-zinc-700">
            <td className="p-2">{index + 1}</td>
            <td className="p-2">
              <Link to={`/winery/$wineryId`} params={{ wineryId: id }}>
                {title}
              </Link>
            </td>
            <td className="p-2">{averageRating}</td>
            <td className="p-2">{NumberOfReviews}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
