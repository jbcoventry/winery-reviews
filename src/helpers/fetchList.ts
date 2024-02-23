const fetchList = async () => {
  const response = await fetch("https://wineries.jbcov.com/api/list");
  if (!response.ok) {
    throw new Error("https://wineries.jbcov.com/api/list fetch not ok");
  }
  return response.json();
};
export default fetchList;
