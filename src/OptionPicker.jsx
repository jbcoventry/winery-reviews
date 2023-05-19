import { useQuery } from "@tanstack/react-query";
import fetchList from "./fetchList";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const OptionPicker = ({ selectedWineries, setSelectedWineries }) => {
  const query = useQuery(["titles"], fetchList);

  const animatedComponents = makeAnimated();
  return (
    <div>
      <Select
        defaultValue={selectedWineries}
        components={animatedComponents}
        isMulti
        placeholder={query.isLoading ? "Loading" : "Select"}
        onChange={setSelectedWineries}
        options={query?.data?.map((winery) => {
          return { value: winery, label: winery };
        })}
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
