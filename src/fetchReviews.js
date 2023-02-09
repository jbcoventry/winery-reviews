const fetchReviews = async () => {
  const apiAddress = import.meta.env.VITE_WINERY_REVIEWS;
  const apiParameters = "?offset=48&limit=1";

  const apiRes = await fetch(apiAddress + apiParameters);

  if (!apiRes.ok) {
    throw new Error("fetchReviews fetch not ok");
  }

  return apiRes.json();
};

export default fetchReviews;
