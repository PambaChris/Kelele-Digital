import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/battle-of-the-fans")({
  component: () => <Outlet />,
});
