import { QueryFunction } from "@tanstack/react-query";
import { wineriesAPIResponse } from "../types";

const fetchList: QueryFunction<wineriesAPIResponse> = async function () {
  const response = await fetch("/api/list");
  if (!response.ok) {
    throw new Error("https://wineries.jbcov.com/api/list fetch not ok");
  }
  return response.json();
};
export default fetchList;
