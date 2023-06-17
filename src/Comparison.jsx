import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import ComparisonSettings from "./ComparisonSettings";
import ComparisonTable from "./ComparisonTable";

import fetchList from "./helpers/fetchList";
import sortByReviewAverage from "./sortByReviewAverage";

const Comparison = () => {
  const [now] = useState(Date.now());
  const [oldestDate, setOldestDate] = useState(0);
  const [minimumReviews, setMinimumReviews] = useState(0);
  const queryData = useQuery(["list"], fetchList);
  const sorted = useMemo(
    () => sortByReviewAverage(queryData?.data, oldestDate, minimumReviews, now),
    [queryData?.data, oldestDate, minimumReviews, now]
  );

  if (queryData.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ComparisonSettings
        {...{
          minimumReviews,
          setMinimumReviews,
          oldestDate,
          setOldestDate,
        }}
      />
      <ComparisonTable data={sorted} />
    </div>
  );
};
export default Comparison;
