import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import WineryList from "./WineryList";
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

  return (
    <QueryClientProvider client={queryClient}>
      <header className="m-0 p-0 text-center text-2xl ">Winery Reviews</header>
      <main>
        <WineryList
          selectedWineries={selectedWineries}
          setSelectedWineries={setSelectedWineries}
        />
        {selectedWineries ? (
          <ReviewsTable selectedWineries={selectedWineries} />
        ) : null}
      </main>
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
