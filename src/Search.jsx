import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import fetchReviews from "./fetchReviews";
import wineries from "./wineries";

const Search = () => {
  const optionCreator = (object) => {
    return <option key={object.title}>{object.title}</option>;
  };

  const [winery, setWinery] = useState("");
  const results = useQuery(["search", winery], fetchReviews);

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
            <option>Select</option>
            {wineries.map(optionCreator)}
          </select>
        </label>
      </form>
    </div>
  );
};

export default Search;
