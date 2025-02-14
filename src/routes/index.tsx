import { createFileRoute } from "@tanstack/react-router";
import Comparison from "../pages/ComparisonPage/ComparisonPage";

export const Route = createFileRoute("/")({
  component: Comparison,
});
