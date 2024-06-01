import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_firstRoute/innerRoute")({
  component: Inner,
});
function Inner() {
  return <div>My inner route</div>;
}
