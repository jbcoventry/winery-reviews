const fetchComparison = async ({ queryKey }) => {
  const query = queryKey[0];
  if (!query) return null;
  const response = await fetch(
    `https://wineries.jbcov.com/api/?query=${query}`
  );
  if (!response.ok) {
    throw new Error(`query=${query} fetch not ok`);
  }
  const data = await response.json();

  // Object.assign(data, {
  //   reviews: data.reviews.map((review) => {
  //     return {
  //       stars: review.stars,
  //       publishedAtDate: new Date(Date.parse(review.publishedAtDate)),
  //     };
  //   }),
  // });
  // console.log(data);

  return data.map((winery) => {
    return {
      title: winery.title,
      reviews: winery.reviews.map((review) => {
        return {
          stars: review.stars,
          publishedAtDate: new Date(Date.parse(review.publishedAtDate)),
        };
      }),
    };
  });
};
export default fetchComparison;
