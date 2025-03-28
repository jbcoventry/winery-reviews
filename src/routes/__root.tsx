import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="p-4 text-center text-2xl">
        <Link to="/">
          <p className="inline">Hunter Valley Wineries</p>
        </Link>
      </header>

      <Outlet />
      <ReactQueryDevtools />

      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
