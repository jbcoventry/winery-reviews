import { QueryFunction } from "@tanstack/react-query";

const fetchLastUpdated: QueryFunction<string | unknown> = async function () {
  const response = await fetch("/api/lastUpdated");
  if (!response.ok) {
    throw new Error("https://wineries.jbcov.com/api/lastUpdated fetch not ok");
  }
  return response.json();
};
export default fetchLastUpdated;
