import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/")({
    component: DocsIndex,
});

function DocsIndex() {
    return <Navigate to="/docs/catalog" replace />;
}
