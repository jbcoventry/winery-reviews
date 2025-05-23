const fetchReviewsText = async () => {
  const response = await fetch("/api/reviewsText");
  if (!response.ok) {
    throw new Error("https://wineries.jbcov.com/api/reviewsText fetch not ok");
  }
  return response.json();
};
export default fetchReviewsText;
