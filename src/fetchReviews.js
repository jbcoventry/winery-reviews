const fetchReviews = async () => {
  const apiAddress = import.meta.env.VITE_DRAYTONS_REVIEWS_API;

  const apiRes = await fetch(apiAddress);

  if (!apiRes.ok) {
    throw new Error("draytons reviews fetch not ok");
  }

  return apiRes.json();
};

export default fetchReviews;
