const ratingAverage = (wineryList, reviewDetailsList) => {
  // const sortByReviewStarAverage = (a, b) => {
  //   if (a.reviewStarAverage < b.reviewStarAverage) return 1;
  //   if (a.reviewStarAverage == b.reviewStarAverage) return 0;
  //   if (a.reviewStarAverage > b.reviewStarAverage) return -1;
  // };
  // const filtered = daysToInclude
  //   ? list.filter((review) => {
  //       review.publishedAtDate >
  //         Date.now() - +daysToInclude * 24 * 60 * 60 * 1000;
  //     })
  //   : [...list];
  // const result =
  //   Math.round(
  //     (filtered.reduce((acc, review) => {
  //       return acc + review.stars;
  //     }, 0) /
  //       filtered.length) *
  //       10000
  //   ) / 10000;
  // return result;
  return wineryList.map((winery) => {
    
};
export default ratingAverage;
