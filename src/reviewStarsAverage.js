const reviewStarsAverage = (list) => {
  const result =
    Math.round(
      (list.reduce((acc, review) => {
        return acc + review.stars;
      }, 0) /
        list.length) *
        1000
    ) / 1000;
  return result;
};
export default reviewStarsAverage;
