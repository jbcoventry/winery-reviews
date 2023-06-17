import NumberInput from "./NumberInput";
import LastUpdated from "./LastUpdated";

const ComparisonSettings = ({
  minimumReviews,
  setMinimumReviews,
  oldestDate,
  setOldestDate,
}) => {
  return (
    <div className="grid grid-flow-dense grid-cols-1 gap-2 lg:grid-cols-3">
      <LastUpdated />
      <NumberInput
        title={"Minimum Total Reviews:"}
        number={minimumReviews}
        setNumber={setMinimumReviews}
      />
      <NumberInput
        title={"Show for last X days:"}
        number={oldestDate}
        setNumber={setOldestDate}
      />
    </div>
  );
};
export default ComparisonSettings;
