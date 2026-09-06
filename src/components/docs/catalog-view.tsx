import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpenText, ChevronLeft, Layers3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "cn";
import type { DocArticle, DocChapter } from "@/lib/docs";

type CatalogViewProps = {
    title: string;
    description: string;
    chapters: DocChapter[];
    backLink?: {
        to: string;
        label: string;
    };
    isChapter?: boolean;
};

export function CatalogView({ title, description, chapters, backLink, isChapter = false }: CatalogViewProps) {
    const totalArticles = chapters.reduce((sum, chapter) => sum + chapter.articles.length, 0);

    return (
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 pt-8">
            <header className="flex flex-col gap-4 border-b pb-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="space-y-2">
                    <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
                        {backLink ? (
                            <Link
                                to={backLink.to}
                                className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-2 px-2")}
                            >
                                <ChevronLeft className="size-4" />
                                {backLink.label}
                            </Link>
                        ) : null}
                        <Badge variant="secondary" className="gap-1">
                            <Layers3 className="size-3.5" />
                            {chapters.length} chapters
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                            <BookOpenText className="size-3.5" />
                            {totalArticles} articles
                        </Badge>
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h1>
                    <p className="text-muted-foreground max-w-3xl text-sm md:text-base">{description}</p>
                </div>
            </header>

            <div className="flex flex-col gap-8">
                {chapters.map((chapter) => (
                    <section key={chapter.chapter} className="space-y-3">
                        {!isChapter && (
                            <>
                                <div className="flex items-center justify-between gap-4">
                                    <div className="space-y-1">
                                        <h2 className="text-lg font-semibold tracking-tight">{chapter.title}</h2>
                                        <p className="text-muted-foreground text-xs">
                                            {chapter.count} articles
                                            {chapter.updateAt ? ` · Updated at ${chapter.updateAt}` : ""}
                                        </p>
                                    </div>
                                    <Link
                                        to={chapter.path}
                                        className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-2")}>
                                        Open catalog
                                        <ArrowRight className="size-4" />
                                    </Link>
                                </div>

                                <Separator />
                            </>
                        )}

                        <div className="grid gap-3">
                            {chapter.articles.map((article) => (
                                <CatalogRow key={`${article.chapter}/${article.slug}`} article={article} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}

function CatalogRow({ article }: { article: DocArticle }) {
    return (
        <Link
            to={article.path}
            className="border-border bg-card/40 hover:bg-muted/50 grid gap-3 rounded-sm border p-4 transition-colors md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-medium">
                        {article.locales.en?.title ?? "English missing"} · {article.locales.zh?.title ?? "中文缺失"}
                    </h3>
                </div>
            </div>
            <div className="text-muted-foreground flex items-center gap-2 text-sm md:justify-end">
                {article.version ? <span>v{article.version}</span> : null}
                <span>/</span>
                {article.updateAt ? <span>{article.updateAt}</span> : null}
                <ArrowRight className="size-4" />
            </div>
        </Link>
    );
}

