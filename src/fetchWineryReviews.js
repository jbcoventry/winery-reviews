const fetchWineryReviews = async ({ queryKey }) => {
  const apiAddress = import.meta.env.VITE_WINERY_REVIEWS;
  const Parameters = queryKey[1];

  const apiRes = await fetch(apiAddress + Parameters);

  if (!apiRes.ok) {
    throw new Error("fetchWineryReviews fetch not ok");
  }

  return apiRes.json();
};

export default fetchWineryReviews;
