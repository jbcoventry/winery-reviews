import { QueryFunction } from "@tanstack/react-query";
import { WineryInList } from "../types";

const fetchList: QueryFunction<WineryInList[]> = async function () {
  const response = await fetch("/api/list");
  if (!response.ok) {
    throw new Error("https://wineries.jbcov.com/api/list fetch not ok");
  }
  return response.json();
};
export default fetchList;
