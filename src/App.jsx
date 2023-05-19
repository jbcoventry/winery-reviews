import { StrictMode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import OptionPicker from "./OptionPicker";
import DateFilter from "./DateFilter";
import ReviewsTable from "./ReviewsTable";

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
  const [selectedWineries, setSelectedWineries] = useState("");

  const [oldestDate, setOldestDate] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <header className="m-0 p-0 text-center text-2xl ">Winery Reviews</header>
      <main>
        <OptionPicker
          selectedWineries={selectedWineries}
          setSelectedWineries={setSelectedWineries}
        />
        <DateFilter oldestDate={oldestDate} setOldestDate={setOldestDate} />
        <ReviewsTable
          selectedWineries={selectedWineries}
          oldestDate={oldestDate}
        />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
