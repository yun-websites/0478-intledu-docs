import { createFileRoute } from "@tanstack/react-router";
import { CatalogView } from "@/components/docs/catalog-view";
import { navigationGroups } from "@/lib/navigation";

export const Route = createFileRoute("/docs/$chapter/$slug/catalog")({
    component: ChapterCatalogRoute,
});

function ChapterCatalogRoute() {
    const { slug } = Route.useParams();
    const current = navigationGroups.find((group) => group.id === slug);

    const chapter = current
        ? {
              chapter: current.id,
              title: current.title,
              path: `/docs/computer-science/${current.id}/catalog`,
              count: current.items.length,
              articles: current.items,
          }
        : undefined;

    return (
        <CatalogView
            title={chapter?.title ?? slug}
            description={`Browse the documents in ${chapter?.title ?? slug}.`}
            chapters={chapter ? [chapter] : []}
            backLink={{ to: "/docs/catalog", label: "All catalog" }}
            isChapter
        />
    );
}
