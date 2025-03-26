import NumberInput from "./NumberInput";
import LastUpdated from "./LastUpdated";

type ComparisonSettingsProps = {
  minimumReviews: number;
  setMinimumReviews: React.Dispatch<React.SetStateAction<number>>;
  oldestDate: number;
  setOldestDate: React.Dispatch<React.SetStateAction<number>>;
  lastUpdatedTimestamp: string | unknown;
};

const ComparisonSettings = ({
  minimumReviews,
  setMinimumReviews,
  oldestDate,
  setOldestDate,
  lastUpdatedTimestamp,
}: ComparisonSettingsProps) => {
  return (
    <div className="my-4 grid grid-flow-dense grid-cols-1 gap-2 lg:grid-cols-3">
      <LastUpdated timestamp={lastUpdatedTimestamp} />
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
