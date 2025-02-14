import { QueryFunction } from "@tanstack/react-query";

const fetchLastUpdated: QueryFunction<string | undefined> = async function () {
  const response = await fetch("https://wineries.jbcov.com/api/lastUpdated");
  if (!response.ok) {
    throw new Error("https://wineries.jbcov.com/api/lastUpdated fetch not ok");
  }
  return response.json();
};
export default fetchLastUpdated;
