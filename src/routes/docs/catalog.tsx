import { createFileRoute } from "@tanstack/react-router";
import { CatalogView } from "@/components/docs/catalog-view";
import { docChapters } from "@/lib/docs";

export const Route = createFileRoute("/docs/catalog")({
    component: DocsCatalogRoute,
});

function DocsCatalogRoute() {
    return (
        <CatalogView
            title="Catalog"
            description="Browse every loaded document, grouped by chapter and sorted as a working index."
            chapters={docChapters}
        />
    );
}

