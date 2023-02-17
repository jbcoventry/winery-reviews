const fetchWineryReviews = async ({ queryKey }) => {
  const apiAddress = import.meta.env.VITE_WINERY_REVIEWS;
  const Parameters = queryKey[1];

  const res = await fetch(apiAddress + Parameters);

  if (!res.ok) {
    throw new Error("fetchWineryReviews fetch not ok");
  }

  return res.json();
};

export default fetchWineryReviews;
