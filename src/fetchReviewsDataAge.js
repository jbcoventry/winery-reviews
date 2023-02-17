const fetchAboutReviewsAPI = async () => {
  const apiAddress = import.meta.env.VITE_ABOUT_REVIEWS;

  const apiRes = await fetch(apiAddress);

  if (!apiRes.ok) {
    throw new Error("fetchAboutReviewsAPI fetch not ok");
  }

  return apiRes.json();
};

export default fetchAboutReviewsAPI;
