import { useQuery } from "@tanstack/react-query";
import fetchWineryList from "./fetchWineryList";

const WineryList = ({ selectedWineries, setSelectedWineries }) => {
  const optionCreator = (object, index) => {
    return (
      <option key={object.title} value={index}>
        {object.title}
      </option>
    );
  };
 
  const results = useQuery(["list"], fetchWineryList);
  if (results.isLoading) {
    return (
      <div>
        <h2>Loading winery list</h2>
      </div>
    );
  }
  const wineries = results.data;
  delete wineries[42];
  // const wineries = results.data.filter((winery, index) => index != 42);
  // Filter Removes duplicate Elbourne Wines, remove on API update. Updated. Delete should preserve index of subsequent entries so it matches for the Table fetch.
  return (
    <div>
      <form>
        <label htmlFor="winery">
          Winery
          <select
            id="winery"
            value={selectedWineries}
            onChange={(e) => {
              setSelectedWineries(e.target.value);
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

export default WineryList;
