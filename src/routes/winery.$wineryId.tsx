import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/winery/$wineryId")({
  // errorComponent: PostErrorComponent,
  component: Detail,
});

function Detail() {
  return (
    <div className="p-2">
      <h3>Winery Id = {winery.id} </h3>
    </div>
  );
}
