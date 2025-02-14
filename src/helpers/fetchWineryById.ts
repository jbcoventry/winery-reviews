import { QueryFunction } from "@tanstack/react-query";
import { wineriesDetailAPIResponse } from "../types";

const fetchWineryById: QueryFunction<wineriesDetailAPIResponse> =
  async function ({ queryKey }) {
    const wineryId = queryKey[1];
    const response = await fetch(
      `https://wineries.jbcov.com/api/wineries/${wineryId}`
    );
    if (!response.ok) {
      throw new Error("https://wineries.jbcov.com/api/list fetch not ok");
    }
    return response.json();
  };
export default fetchWineryById;
