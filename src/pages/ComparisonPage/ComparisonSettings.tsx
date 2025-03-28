import NumberInput from "./NumberInput";
import LastUpdated from "./LastUpdated";

type ComparisonSettingsProps = {
  minimumReviews: number | string;
  setMinimumReviews: React.Dispatch<React.SetStateAction<number | string>>;
  oldestDate: number | string;
  setOldestDate: React.Dispatch<React.SetStateAction<number | string>>;
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
    <>
      <div className="grid grid-cols-[max-content_max-content] gap-2">
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
      <LastUpdated timestamp={lastUpdatedTimestamp} />
    </>
  );
};
export default ComparisonSettings;
