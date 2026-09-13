import { createFileRoute } from "@tanstack/react-router";
import { CatalogView } from "@/components/docs/catalog-view";
import { docChapters } from "@/lib/docs";
import { navigationGroups } from "@/lib/navigation";

export const Route = createFileRoute("/docs/$chapter/catalog")({
    component: ChapterCatalogRoute,
});

function ChapterCatalogRoute() {
    const { chapter } = Route.useParams();
    const navigationGroup = navigationGroups.find((group) => group.catalogSlug === chapter);
    const docChapter = docChapters.find((item) => item.chapter === chapter);
    const catalog = navigationGroup
        ? {
              chapter: navigationGroup.catalogSlug,
              title: navigationGroup.title,
              path: `/docs/${navigationGroup.catalogSlug}/catalog`,
              count: navigationGroup.items.length,
              articles: navigationGroup.items,
          }
        : docChapter;

    return (
        <CatalogView
            title={catalog?.title ?? chapter}
            description={`Browse the documents in ${catalog?.title ?? chapter}.`}
            chapters={catalog ? [catalog] : []}
            backLink={{ to: "/docs/catalog", label: "All catalog" }}
            isChapter
        />
    );
}
