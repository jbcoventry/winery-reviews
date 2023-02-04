import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import List from "./List";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <header className="text-center text-2xl">Winery Reviews</header>
      <main>
        <Search />
        <List />
      </main>
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
