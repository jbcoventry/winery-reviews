import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useQuery } from "@tanstack/react-query";


const Chart = () => {
  const wineryIndex = `?offset=${selectedWineries}&limit=1`;

  const data = [
    ,
  ];

  const reviewsWithDateString = (fetchedJSONResult) => {
    const output = fetchedJSONResult[0].reviews.map((review) => {
      return {
        ...review,
        publishedAtDate: new Date(review.publishedAtDate).getTime(),
      };
    });
    return output;
  };

  return (
    <ResponsiveContainer width="80%" height={400}>
      <LineChart data={reviewsWithDateString(data)}>
        <Line type="monotone" dataKey="stars" stroke="blue" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="publishedAtDate" tick={false} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
