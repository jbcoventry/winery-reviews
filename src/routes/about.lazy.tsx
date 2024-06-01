import { createLazyFileRoute } from "@tanstack/react-router";
import { Example } from "../Example";

export const Route = createLazyFileRoute("/about")({
  component: Example,
});

// function About() {
//   return <div className="p-2">Hello from About!</div>;
// }
