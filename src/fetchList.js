const fetchList = async ({ queryKey }) => {
  const query = queryKey[0];
  if (!query) return null;
  const response = await fetch(
    `https://wineries.jbcov.com/api/?query=${query}`
  );
  if (!response.ok) {
    throw new Error(`query=${query} fetch not ok`);
  }
  return response.json();
};
export default fetchList;
