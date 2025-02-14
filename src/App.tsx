// import { StrictMode } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import ReactDOM from "react-dom/client";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import Comparison from "./Comparison";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//       cacheTime: Infinity,
//     },
//   },
// });

// const App = () => {
//   return (
//     <div className="m-4">
//       <QueryClientProvider client={queryClient}>
//         <main>
//           <Comparison />
//         </main>
//         <ReactQueryDevtools initialIsOpen={false} />
//       </QueryClientProvider>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
