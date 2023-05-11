const DateFilter = ({ oldestDate, setOldestDate }) => {
  return (
    <label>
      Show:
      <select
        value={oldestDate}
        name="enteredDays"
        onChange={(e) => setOldestDate(e.target.value)}
      >
        <option value={73000 * 24 * 60 * 60 * 1000}> All </option>
        <option value={90 * 24 * 60 * 60 * 1000}> 90 days </option>
        <option value={180 * 24 * 60 * 60 * 1000}> 180 days </option>
        <option value={365 * 24 * 60 * 60 * 1000}> 1 year </option>
        <option value={730 * 24 * 60 * 60 * 1000}> 2 years </option>
      </select>
    </label>
  );
};

export default DateFilter;
