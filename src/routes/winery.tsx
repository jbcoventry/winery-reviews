import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/winery")({
  component: Winery,
});

function Winery() {
  return (
    <div className="p-2">
      <h3>Winery View </h3>
    </div>
  );
}
