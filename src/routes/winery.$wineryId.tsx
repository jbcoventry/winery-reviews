import { createFileRoute } from "@tanstack/react-router";
import { WineryDetailPage } from "../pages/WineryDetailPage/WineryDetailPage";

export const Route = createFileRoute("/winery/$wineryId")({
  component: WineryDetailPage,
});
