import DateFilter from "./DateFilter";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import WineryList from "./WineryList";
import ReviewsTable from "./ReviewsTable";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Chart from "./Chart";
import OptionPicker from "./OptionPicker";

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => console.clear());
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const [selectedWineries, setSelectedWineries] = useState(null);

  // const [oldestDate, setOldestDate] = useState(73000 * 24 * 60 * 60 * 1000);

  return (
    <QueryClientProvider client={queryClient}>
      <header className="m-0 p-0 text-center text-2xl ">Winery Reviews</header>
      <main>
        {/* <OptionPicker
          selectedWineries={selectedWineries}
          setSelectedWineries={setSelectedWineries}
        />
        <Chart /> */}
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
