import { useQuery } from "@tanstack/react-query";
import fetchWinery from "./fetchWinery";

const CalculatedData = ({ selectedWineries }) => {
  const query = useQuery([selectedWineries[0]?.value], fetchWinery);
  if (!selectedWineries) return null;

  return (
    <div>
      <p>
        Average Rating=
        {query?.data?.reviews.reduce((acc, review) => {
          return acc + review.stars;
        }, 0) / query?.data?.reviews.length}
      </p>
    </div>
  );
};

export default CalculatedData;
