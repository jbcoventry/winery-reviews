import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import ComparisonSettings from "./ComparisonSettings";
import ComparisonTable from "./ComparisonTable";
import fetchLastUpdated from "./helpers/fetchLastUpdated";
import fetchList from "./helpers/fetchList";
import sortByReviewAverage from "./sortByReviewAverage";
import { type wineriesAPIResponse } from "./types";

const Comparison = () => {
  const [now] = useState(Date.now());
  const [oldestDate, setOldestDate] = useState(0);
  const [minimumReviews, setMinimumReviews] = useState(0);
  const queryData = useQuery<wineriesAPIResponse>({
    queryKey: ["list"],
    queryFn: fetchList,
  });
  const queryLastUpdated = useQuery({
    queryKey: ["LastUpdated"],
    queryFn: fetchLastUpdated,
  });
  const sorted = useMemo(
    () => sortByReviewAverage(queryData?.data, oldestDate, minimumReviews, now),
    [queryData?.data, oldestDate, minimumReviews, now]
  );
  if (queryData.isLoading || queryLastUpdated.isLoading) {
    return <div></div>;
  }
  return (
    <div>
      <header className="text-2xl lg:text-center">
        Hunter Valley Wineries
      </header>

      <ComparisonSettings
        {...{
          minimumReviews,
          setMinimumReviews,
          oldestDate,
          setOldestDate,
          queryLastUpdated,
        }}
      />
      <ComparisonTable data={sorted} />
    </div>
  );
};
export default Comparison;
