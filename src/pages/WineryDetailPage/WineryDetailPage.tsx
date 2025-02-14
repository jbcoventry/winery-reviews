import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import fetchWineryById from "../../helpers/fetchWineryById";
// import fetchList from "../../helpers/fetchList";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Review } from "../../types";
import { addMonths, format } from "date-fns";
import DatePicker from "react-datepicker";
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css'


function getCumulativeChartData(reviews: Review[], startDate: Date | null) {
  // const startDate = new Date("2022-01-01T00:00:00");
  startDate = startDate || new Date("2022-01-01T00:00:00");
  const endDate = new Date();

  const startDateTimestamp = startDate.getTime();
  const endDateTimestamp = endDate.getTime();

  const revs = reviews
    .filter((r) => (r.timestamp*1000) > startDateTimestamp)
    .sort((a, b) => a.timestamp - b.timestamp);

  const data = new Array<{ name: string; value: number }>();

  // TODO: fix starting at zero, start at past previous cumulative average
  
  
  
  let currentEndTimestamp =  addMonths(startDateTimestamp, 1).getTime();
  while (currentEndTimestamp < endDateTimestamp) {
    // Add a month
    const inOneMonth = addMonths(currentEndTimestamp, 1)
    const inOneMonthTimestamp = inOneMonth.getTime();
    const revsSoFar = revs.filter((r) => (r.timestamp * 1000) < inOneMonthTimestamp)
    const cumulativeAverage = revsSoFar.length ? revsSoFar.map((r) => r.rating).reduce((a,b) => a + b, 0) / revsSoFar.length : 0

    // Add data point to array
    const label = format(inOneMonth, 'LLL yy');
    data.push({name: label, value: cumulativeAverage})

    // Increment
    currentEndTimestamp = inOneMonthTimestamp
  }


  return data;
}

export function WineryDetailPage() {
  const { wineryId } = useParams({ from: "/wineries/$wineryId" });

  const wineryData = useQuery({
    queryKey: ["wineries", wineryId],
    queryFn: fetchWineryById,
  });

  const [startDate, setStartDate] = useState<Date | null>(new Date("2022-01-01T00:00:00"));

  // const wineryListData = useQuery({
  //   queryKey: ["list"],
  //   queryFn: fetchList,
  // });
  // const wineryList = wineryListData?.data ?? null;

  const reviews = wineryData?.data !== null && wineryData.data !== undefined ? wineryData.data.reviews : [];
  const cumulativeChartData =  getCumulativeChartData(reviews, startDate);

  if (wineryData.isError) {
    return <span>ERROR</span>;
  }

  if (wineryData.isLoading) {
    return <span>LOADING</span>;
  }

  if (!wineryData.data) {
    return <span>NO DATA</span>;
  }

  return (
    <div className="p-2">
      {/* Winery basic details */}
      <div>
        <h3 className={"text-lg mt-2 mb-2"}>{wineryData.data.title}</h3>
        <div className={"my-2"}>
          <div>{wineryData.data.street}</div>
          <div>{wineryData.data.city}</div>
          <div>{wineryData.data.postalCode}</div>
        </div>
        <div>
          <a
            href={`tel:${wineryData.data.phone}`}
            className={"no-underline hover:underline hover:text-blue-400"}
          >
            {wineryData.data.phone}
          </a>
        </div>
        <div>
          <Link
            to={wineryData.data.website}
            className={"no-underline hover:underline hover:text-blue-400"}
          >
            {wineryData.data.website}
          </Link>
        </div>
        {/* Opening Hours */}
        <div
          className={wineryData.data.openingHours.length < 1 ? "hidden" : ""}
        >
          <div className={"my-4 border rounded-md px-2 py-2 max-w-96"}>
            {wineryData.data.openingHours.map((oh, i) => (
              <div key={i} className={"flex justify-between"}>
                <span>{oh.day}</span>
                <span>{oh.hours}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Chart */}
        <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />

          <LineChart
            width={1000}
            height={350}
            data={cumulativeChartData}
            margin={{ top: 35, right: 20, left: 20, bottom: 35 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[3, 5]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
      {/* Winery comparison charts */}
      <div></div>
    </div>
  );
}
