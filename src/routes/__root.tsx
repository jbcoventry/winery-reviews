import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="m-4">
      <header className="text-2xl lg:text-center">
        <Link to="/">Hunter Valley Wineries</Link>
      </header>

      <Outlet />
      <ReactQueryDevtools />

      <TanStackRouterDevtools position="bottom-right" />
    </div>
  ),
});
