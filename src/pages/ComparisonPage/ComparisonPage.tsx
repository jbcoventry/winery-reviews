import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import ComparisonSettings from "./ComparisonSettings";
import ComparisonTable from "./ComparisonTable";
import fetchLastUpdated from "../../helpers/fetchLastUpdated";
import fetchList from "../../helpers/fetchList";
import sortByReviewAverage from "../../helpers/sortByReviewAverage";

const Comparison = () => {
  const [now] = useState(Date.now());
  const [oldestDate, setOldestDate] = useState(0);
  const [minimumReviews, setMinimumReviews] = useState(0);

  const queryData = useQuery({
    queryKey: ["list"],
    queryFn: fetchList,
  });
  const queryLastUpdated = useQuery({
    queryKey: ["LastUpdated"],
    queryFn: fetchLastUpdated,
  });
  
  const sorted = useMemo(
    () => sortByReviewAverage(queryData?.data, oldestDate, minimumReviews, now, queryLastUpdated?.data),
    [queryData?.data, oldestDate, minimumReviews, now, queryLastUpdated?.data],
  );
// const sortedNotIncludingLastWeek = useMemo(
//   () => sortByReviewAverage(queryData?.data, oldestDate, minimumReviews, queryLastUpdated?.data ? (Date.parse(queryLastUpdated?.data) - 604800000) : undefined),
//   [queryData?.data, oldestDate, minimumReviews, queryLastUpdated?.data],
// );
if (!queryData.isSuccess || !queryLastUpdated.isSuccess) {
  return <div></div>;
}
 
  const lastUpdatedTimestamp = queryLastUpdated.data;

  return (
    <>
      <ComparisonSettings
        {...{
          minimumReviews,
          setMinimumReviews,
          oldestDate,
          setOldestDate,
          lastUpdatedTimestamp,
        }}
      />
      <ComparisonTable data={sorted} />
    </>
  );
};

export default Comparison;