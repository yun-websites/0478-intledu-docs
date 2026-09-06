import { createFileRoute } from "@tanstack/react-router";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArticleView } from "@/components/docs/article-view";
import { getArticleByPath } from "@/lib/docs";

export const Route = createFileRoute("/docs/$chapter/$slug")({
    component: ArticleRoute,
});

function ArticleRoute() {
    const { chapter, slug } = Route.useParams();
    const article = getArticleByPath(chapter, slug);

    if (!article) {
        return (
            <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-4 py-8 md:px-6 lg:px-8">
                <Alert>
                    <AlertTitle>Document not found</AlertTitle>
                    <AlertDescription>
                        No loaded MDX file matches <code>{chapter}/{slug}</code>.
                    </AlertDescription>
                </Alert>
            </main>
        );
    }

    return <ArticleView article={article} />;
}
