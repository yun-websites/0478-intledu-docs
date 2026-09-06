import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/$chapter")({
    component: ChapterLayout,
});

function ChapterLayout() {
    return <Outlet />;
}
