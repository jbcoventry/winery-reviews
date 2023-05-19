const fetchWinery = async ({ queryKey }) => {
  const query = queryKey[0];
  if (!query) return null;
  const response = await fetch(
    `https://wineries.jbcov.com/api/?query=${query}`
  );
  if (!response.ok) {
    throw new Error(`query=${query} fetch not ok`);
  }
  const data = await response.json();

  Object.assign(data, {
    reviews: data.reviews.map((review) => {
      return {
        stars: review.stars,
        text: review.text,
        publishedAtDate: new Date(Date.parse(review.publishedAtDate)),
      };
    }),
  });
  return data;
};
export default fetchWinery;