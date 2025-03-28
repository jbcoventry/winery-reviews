import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import ComparisonSettings from "./ComparisonSettings";
import ComparisonTable from "./ComparisonTable";
import fetchLastUpdated from "../../helpers/fetchLastUpdated";
import fetchList from "../../helpers/fetchList";
import sortByReviewAverage from "../../helpers/sortByReviewAverage";

const Comparison = () => {
  const [now] = useState(Date.now());
  const [oldestDate, setOldestDate] = useState<number | string>("");
  const [minimumReviews, setMinimumReviews] = useState<number | string>("");

  const list = useQuery({
    queryKey: ["list"],
    queryFn: fetchList,
  });
  const LastUpdated = useQuery({
    queryKey: ["LastUpdated"],
    queryFn: fetchLastUpdated,
  });

  const sorted = useMemo(
    () =>
      sortByReviewAverage(
        list?.data,
        oldestDate,
        minimumReviews,
        now,
        LastUpdated?.data,
      ),
    [list?.data, oldestDate, minimumReviews, now, LastUpdated?.data],
  );
  // const sortedNotIncludingLastWeek = useMemo(
  //   () => sortByReviewAverage(queryData?.data, oldestDate, minimumReviews, queryLastUpdated?.data ? (Date.parse(queryLastUpdated?.data) - 604800000) : undefined),
  //   [queryData?.data, oldestDate, minimumReviews, queryLastUpdated?.data],
  // );

  const lastUpdatedTimestamp = LastUpdated.data;

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
