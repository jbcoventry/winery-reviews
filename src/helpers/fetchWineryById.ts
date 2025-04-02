import { QueryFunction } from "@tanstack/react-query";
import { WineryInList } from "../types";

const fetchWineryById: QueryFunction<WineryInList> = async function ({
  queryKey,
}) {
  const wineryId = queryKey[1];
  const response = await fetch(`/api/winery/${wineryId}`);
  if (!response.ok) {
    throw new Error(`/api/winery/${wineryId} fetch not ok`);
  }
  return response.json();
};
export default fetchWineryById;
