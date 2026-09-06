import { createFileRoute } from "@tanstack/react-router";
import { CatalogView } from "@/components/docs/catalog-view";
import { docChapters } from "@/lib/docs";

export const Route = createFileRoute("/docs/$chapter/catalog")({
    component: ChapterCatalogRoute,
});

function ChapterCatalogRoute() {
    const { chapter } = Route.useParams();
    const current = docChapters.find((item) => item.chapter === chapter);

    return (
        <CatalogView
            title={current?.title ?? chapter}
            description={`Browse the documents in ${chapter}.`}
            chapters={current ? [current] : []}
            backLink={{ to: "/docs/catalog", label: "All catalog" }}
            isChapter
        />
    );
}
