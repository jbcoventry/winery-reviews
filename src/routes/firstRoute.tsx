import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/firstRoute")({
  component: First,
});
function First() {
  return (
    <>
      <div>my first route</div>
      <Outlet />
    </>
  );
}
