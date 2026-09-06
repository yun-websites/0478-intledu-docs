import type { DocArticle, DocParagraphRow, Locale } from "@/lib/docs";
import { FileExclamationPointIcon } from "lucide-react";

type ArticleViewProps = {
    article: DocArticle;
};

export function ArticleView({ article }: ArticleViewProps) {
    const description = getArticleDescription(article);

    return (
        <main className="bg-background flex-1 overflow-hidden">
            <div className="flex h-full min-h-0 flex-col">
                <header className="border-border shrink-0 border-b px-4 py-6 md:px-6 lg:px-8">
                    <div className="max-w-3xl space-y-2">
                        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{article.title}</h1>
                        <p className="text-muted-foreground text-sm leading-7 md:text-base">{description}</p>
                    </div>
                </header>

                <section className="min-h-0 flex-1 overflow-y-auto">
                    <div className="flex flex-col">
                        {article.paragraphs.map((row) => (
                            <div key={row.id} className="bg-border grid grid-cols-1 gap-px lg:grid-cols-2">
                                <ParagraphCell row={row} locale="en" />
                                <ParagraphCell row={row} locale="zh" />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

type ParagraphCellProps = {
    row: DocParagraphRow;
    locale: Locale;
};

function ParagraphCell({ row, locale }: ParagraphCellProps) {
    const paragraph = row.locales[locale];

    if (!paragraph) {
        return (
            <article className="bg-background flex h-full w-full flex-col items-center justify-center gap-2 px-6 py-8">
                <FileExclamationPointIcon className="text-muted-foreground" />
                <p className="text-muted-foreground text-sm">This locale has not been authored yet.</p>
            </article>
        );
    }

    return (
        <article id={formatId(row.id, locale)} className="bg-background px-6 py-8 md:px-8 md:py-10">
            <h2 className="text-lg font-semibold tracking-tight">{paragraph.title}</h2>
            <p className="text-muted-foreground mt-4 text-sm leading-7">{paragraph.content}</p>
        </article>
    );
}

function formatId(id: string, locale: Locale) {
    return `${id}-${locale}`;
}

function getArticleDescription(article: DocArticle) {
    return article.locales.en?.paragraphs[0]?.content ?? article.locales.zh?.paragraphs[0]?.content ?? "";
}

