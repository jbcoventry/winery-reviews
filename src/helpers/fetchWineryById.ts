import { QueryFunction } from "@tanstack/react-query";
import { Winery } from "../types";

const fetchWineryById: QueryFunction<Winery> = async function ({ queryKey }) {
  const wineryId = queryKey[1];
  const response = await fetch(`/api/wineries/${wineryId}`);
  if (!response.ok) {
    throw new Error("https://wineries.jbcov.com/api/list fetch not ok");
  }
  return response.json();
};
export default fetchWineryById;
