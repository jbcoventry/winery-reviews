import { useQuery } from "@tanstack/react-query";
import fetchLastUpdated from "./helpers/fetchLastUpdated";

const LastUpdated = () => {
  const lastUpdated = useQuery(["LastUpdated"], fetchLastUpdated);
  return (
    <div className="grid items-center rounded lg:col-start-3  ">
      Last Updated: {new Date(lastUpdated?.data).toLocaleString()}
    </div>
  );
};
export default LastUpdated;
