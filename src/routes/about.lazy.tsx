import { createLazyFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../pages/AboutPage/AboutPage";

export const Route = createLazyFileRoute("/about")({
  component: AboutPage,
});
