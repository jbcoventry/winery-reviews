import NumberInput from "./NumberInput";
import LastUpdated from "./LastUpdated";

const ComparisonSettings = ({
  minimumReviews,
  setMinimumReviews,
  oldestDate,
  setOldestDate,
  queryLastUpdated,
}) => {
  return (
    <div className="grid grid-flow-dense grid-cols-1 gap-2 lg:grid-cols-3">
      <LastUpdated {...queryLastUpdated} />
      <NumberInput
        title={"Minimum Total Reviews:"}
        number={minimumReviews}
        setNumber={setMinimumReviews}
        maxLength={3}
      />
      <NumberInput
        title={"Show for last X days:"}
        number={oldestDate}
        setNumber={setOldestDate}
        maxLength={4}
      />
    </div>
  );
};
export default ComparisonSettings;
