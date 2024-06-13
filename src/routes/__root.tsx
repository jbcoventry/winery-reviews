import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// export const Route = createRootRoute({
//   component: () => (
//     <>
//       <div className="flex gap-2 p-2">
//         <Link to="/" className="[&.active]:font-bold">
//           Home
//         </Link>{" "}
//         <Link to="/about" className="[&.active]:font-bold">
//           About
//         </Link>{" "}
//         <Link to="/innerRoute">First Route</Link>
//       </div>
//       <hr />
//       <Outlet />
//       <ReactQueryDevtools initialIsOpen={false} />

//       <TanStackRouterDevtools position="bottom-right" />
//     </>
//   ),
// });

export const Route = createRootRoute({
  component: () => (
    <div className="m-4">
      <header className="text-2xl lg:text-center">
        Hunter Valley Wineries
      </header>
      <Link
        to="/"
        activeProps={{
          className: "font-bold",
        }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>
      <Outlet />
      <ReactQueryDevtools />

      <TanStackRouterDevtools position="bottom-right" />
    </div>
  ),
});
