import { createFileRoute } from "@tanstack/react-router";
import Comparison from "../Comparison";

export const Route = createFileRoute("/")({
  component: Comparison,
});

// function Home() {
//   return (
//     <div className="p-2">
//       <h3>Welcome Home</h3>
//     </div>
//   );
// }
