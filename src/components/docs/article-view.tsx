import type { ReactNode } from "react";
import type { DocArticle, DocEntry, DocParagraphRow, Locale } from "@/lib/docs";
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
                                <ParagraphCell row={row} locale="en" entry={article.locales.en} />
                                <ParagraphCell row={row} locale="zh" entry={article.locales.zh} />
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
    entry?: DocEntry;
};

function ParagraphCell({ row, locale, entry }: ParagraphCellProps) {
    const paragraph = row.locales[locale];

    if (!entry || !paragraph) {
        return (
            <article className="bg-background flex h-full w-full flex-col items-center justify-center gap-2 px-6 py-8">
                <FileExclamationPointIcon className="text-muted-foreground" />
                <p className="text-muted-foreground text-sm">This locale has not been authored yet.</p>
            </article>
        );
    }

    const Content = entry.component;

    return (
        <article id={formatId(row.id, locale)} className="bg-background px-6 py-8 md:px-8 md:py-10">
            <Content components={createMdxComponents()} />
        </article>
    );
}

type ParagraphProps = {
    id?: string;
    children?: ReactNode;
};

function createMdxComponents() {
    return {
        ParagraphTitle: ({ children }: ParagraphProps) => <h2 className="text-lg font-semibold tracking-tight">{children}</h2>,
        ParagraphContent: ({ children }: ParagraphProps) => <MdxContent>{children}</MdxContent>,
    };
}

function MdxContent({ children }: { children?: ReactNode }) {
    return (
        <div className="text-muted-foreground [&_a]:text-primary [&_blockquote]:border-primary [&_blockquote]:text-foreground [&_code]:bg-muted [&_h3]:text-foreground [&_pre]:bg-muted [&_td]:border-border [&_th]:bg-muted [&_th]:border-border mt-4 overflow-x-auto text-sm leading-7 whitespace-pre-wrap [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:my-4 [&_blockquote]:border-l-2 [&_blockquote]:pl-4 [&_code]:rounded-sm [&_code]:px-1 [&_code]:py-0.5 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:whitespace-normal [&_li]:whitespace-normal [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-6 [&_p]:my-4 [&_p]:whitespace-normal [&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:p-4 [&_pre]:whitespace-pre [&_table]:my-4 [&_table]:w-full [&_table]:min-w-max [&_table]:border-collapse [&_table]:whitespace-normal [&_td]:border [&_td]:px-3 [&_td]:py-2 [&_th]:border [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
            {children}
        </div>
    );
}

function formatId(id: string, locale: Locale) {
    return `${id}-${locale}`;
}

function getArticleDescription(article: DocArticle) {
    return article.locales.en?.description ?? article.locales.zh?.description ?? "";
}
