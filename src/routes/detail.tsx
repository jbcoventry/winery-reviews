import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/detail")({
  component: Detail,
});

function Detail() {
  return (
    <div className="p-2">
      <h3>Detail View </h3>
    </div>
  );
}
