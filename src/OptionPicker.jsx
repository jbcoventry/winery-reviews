import { useQuery } from "@tanstack/react-query";
import fetchWineryList from "./fetchWineryList";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const OptionPicker = ({ selectedWineries, setSelectedWineries }) => {
  const results = useQuery(["list"], fetchWineryList);
  const wineries =
    results?.data?.map((winery) => {
      return { value: winery.title, label: winery.title };
    }) ?? [];
  delete wineries[42];
  // Filter Removes duplicate Elbourne Wines, remove on API update.

  const animatedComponents = makeAnimated();
  return (
    <div>
      <Select
        defaultValue={selectedWineries}
        components={animatedComponents}
        isMulti
        placeholder={results.isLoading ? "Loading" : "Select"}
        onChange={setSelectedWineries}
        options={wineries}
        // classNames={{
        //   container: () => "max-w-[20%]",
        // }}
        styles={{
          input: (base) => ({
            ...base,
            "input:focus": {
              boxShadow: "none",
            },
          }),
        }}
      />
    </div>
  );
};
export default OptionPicker;
