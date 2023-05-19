import { useState } from "react";

const DateFilter = ({ oldestDate, setOldestDate }) => {
  return (
    <label>
      Days:
      <input
        className="w-1/6"
        value={oldestDate}
        placeholder="All"
        onChange={(e) => setOldestDate(e.target.value.replace(/[^0-9]/g, ""))}
      />
    </label>
  );
};

export default DateFilter;
// {new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toLocaleString()}
// <br />
// {new Date().toLocaleString()}
