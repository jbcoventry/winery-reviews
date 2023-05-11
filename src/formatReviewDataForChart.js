const formatReviewDataForChart = (index) => {
  const data = 


  const timestringToTimestamp = (ISO8601) => {
    const date = new Date(ISO8601);
    return date.getTime();
}


document.getElementById('btn').onclick = function() {
    console.log(timestringToTimestamp(data[0].reviews[5].publishedAtDate));
}

};

export default formatReviewDataForChart;

