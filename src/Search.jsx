import { useState } from "react";
import wineries from "./wineries";

const Search = () => {
  const optionCreator = (object) => {
    return <option key={object.placeId}>{object.title}</option>;
  };

  const [winery, setWinery] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="winery">
          Winery
          <select
            id="winery"
            value={winery}
            onChange={(e) => {
              setWinery(e.target.value);
            }}
          >
            <option />
            {wineries.map(optionCreator)}
          </select>
        </label>
      </form>
    </div>
  );
};

export default Search;
