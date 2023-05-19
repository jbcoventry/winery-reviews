import reviewStarsAverage from "./reviewStarsAverage";

const fetchComparison = async ({ queryKey }) => {
  const sortFunction = (a, b) => {
    if (a.reviewStarAverage < b.reviewStarAverage) return 1;
    if (a.reviewStarAverage == b.reviewStarAverage) return 0;
    if (a.reviewStarAverage > b.reviewStarAverage) return -1;
  };
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

  const dateToObject = data.map((winery) => {
    return {
      title: winery.title,
      reviewStarAverage: reviewStarsAverage(winery.reviews),

      reviews: winery.reviews.map((review) => {
        return {
          stars: review.stars,
          publishedAtDate: new Date(Date.parse(review.publishedAtDate)),
        };
      }),
    };
  });
  const sorted = dateToObject.sort(sortFunction);
  return sorted;
};
export default fetchComparison;
