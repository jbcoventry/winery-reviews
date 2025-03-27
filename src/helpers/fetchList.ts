import { QueryFunction } from "@tanstack/react-query";
import { Winery } from "../types";

const fetchList: QueryFunction<Winery[]> = async function () {
  const response = await fetch("/api/list");
  if (!response.ok) {
    throw new Error("https://wineries.jbcov.com/api/list fetch not ok");
  }
  return response.json();
};
export default fetchList;
