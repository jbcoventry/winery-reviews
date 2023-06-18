import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import ComparisonSettings from "./ComparisonSettings";
import ComparisonTable from "./ComparisonTable";
import fetchLastUpdated from "./helpers/fetchLastUpdated";
import fetchList from "./helpers/fetchList";
import sortByReviewAverage from "./sortByReviewAverage";

const Comparison = () => {
  const [now] = useState(Date.now());
  const [oldestDate, setOldestDate] = useState("");
  const [minimumReviews, setMinimumReviews] = useState("");
  const queryData = useQuery(["list"], fetchList);
  const queryLastUpdated = useQuery(["LastUpdated"], fetchLastUpdated);
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
