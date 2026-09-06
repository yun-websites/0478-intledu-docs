import type React from "react";

export type Locale = "en" | "zh";

export type DocFrontmatter = {
    title?: string;
    slug?: string;
    chapter?: string;
    version?: string;
    updateAt?: string;
};

export type DocParagraph = {
    id: string;
    title: string;
    content: string;
};

export type DocEntry = Required<Pick<DocFrontmatter, "title" | "slug" | "chapter">> &
    Pick<DocFrontmatter, "version" | "updateAt"> & {
        locale: Locale;
        path: string;
        component: React.ComponentType<Record<string, unknown>>;
        paragraphs: DocParagraph[];
    };

export type DocParagraphRow = {
    id: string;
    locales: Partial<Record<Locale, DocParagraph>>;
};

export type DocArticle = {
    chapter: string;
    slug: string;
    title: string;
    version?: string;
    updateAt?: string;
    path: string;
    locales: Partial<Record<Locale, DocEntry>>;
    paragraphs: DocParagraphRow[];
};

export type DocChapter = {
    chapter: string;
    title: string;
    path: string;
    count: number;
    updateAt?: string;
    articles: DocArticle[];
};

type DocModule = {
    default: React.ComponentType<Record<string, unknown>>;
    paragraphs?: DocParagraph[];
};

type DocMetadata = Required<Pick<DocFrontmatter, "title" | "slug" | "chapter">> & Pick<DocFrontmatter, "version" | "updateAt">;

const docModules = import.meta.glob("/src/content/_pages/**/*.mdx", {
    eager: true,
}) as Record<string, DocModule>;

const docMetadata: Record<string, DocMetadata> = {
    "/src/content/_pages/overview/course-structure.en.mdx": {
        title: "Course structure",
        slug: "course-structure",
        chapter: "overview",
        version: "2025",
        updateAt: "2025-01-10",
    },
    "/src/content/_pages/overview/course-structure.zh.mdx": {
        title: "课程结构",
        slug: "course-structure",
        chapter: "overview",
        version: "2025",
        updateAt: "2025-01-10",
    },
    "/src/content/_pages/programming/programming-essentials.en.mdx": {
        title: "Programming essentials",
        slug: "programming-essentials",
        chapter: "programming",
        version: "2025",
        updateAt: "2025-01-12",
    },
    "/src/content/_pages/programming/programming-essentials.zh.mdx": {
        title: "编程基础",
        slug: "programming-essentials",
        chapter: "programming",
        version: "2025",
        updateAt: "2025-01-12",
    },
} satisfies Record<string, DocMetadata>;

const entries = Object.entries(docModules).flatMap(([path, module]) => {
    const meta = docMetadata[path];
    if (!meta) {
        return [];
    }

    return [
        {
            ...meta,
            locale: getLocale(path) as Locale,
            path,
            component: module.default,
            paragraphs: module.paragraphs ?? [],
        } satisfies DocEntry,
    ];
});

const articleMap = new Map<string, DocArticle>();

for (const entry of entries) {
    const key = `${entry.chapter}/${entry.slug}`;
    const existing = articleMap.get(key);

    if (existing) {
        existing.locales[entry.locale] = entry;
        existing.title = existing.title ?? entry.title;
        existing.version = existing.version ?? entry.version;
        existing.updateAt = pickLatest(existing.updateAt, entry.updateAt);
        existing.paragraphs = mergeParagraphRows(existing.locales);
        continue;
    }

    articleMap.set(key, {
        chapter: entry.chapter,
        slug: entry.slug,
        title: entry.title,
        version: entry.version,
        updateAt: entry.updateAt,
        path: `/docs/${entry.chapter}/${entry.slug}`,
        locales: { [entry.locale]: entry },
        paragraphs: mergeParagraphRows({ [entry.locale]: entry }),
    });
}

const articleList = [...articleMap.values()].sort((left, right) => {
    const chapterOrder = compareText(left.chapter, right.chapter);
    if (chapterOrder !== 0) {
        return chapterOrder;
    }

    return compareText(left.slug, right.slug);
});

const chapterMap = new Map<string, DocChapter>();

for (const article of articleList) {
    const current = chapterMap.get(article.chapter);
    if (current) {
        current.articles.push(article);
        current.count += 1;
        current.updateAt = pickLatest(current.updateAt, article.updateAt);
        continue;
    }

    chapterMap.set(article.chapter, {
        chapter: article.chapter,
        title: titleCase(article.chapter),
        path: `/docs/${article.chapter}/catalog`,
        count: 1,
        updateAt: article.updateAt,
        articles: [article],
    });
}

export const docArticles = articleList;
export const docChapters = [...chapterMap.values()].map((chapter) => ({
    ...chapter,
    articles: chapter.articles.sort((left, right) => compareText(left.slug, right.slug)),
}));

export function getArticleByPath(chapter: string, slug: string) {
    return articleMap.get(`${chapter}/${slug}`);
}

export function getArticlesByChapter(chapter: string) {
    return docArticles.filter((article) => article.chapter === chapter);
}

export function getDocSummary() {
    return {
        articleCount: docArticles.length,
        chapterCount: docChapters.length,
        latestUpdateAt: docArticles.reduce(
            (latest, article) => pickLatest(latest, article.updateAt),
            undefined as string | undefined
        ),
    };
}

export function getLocaleEntry(article: DocArticle, locale: Locale) {
    return article.locales[locale];
}

function mergeParagraphRows(locales: Partial<Record<Locale, DocEntry>>) {
    const rows = new Map<string, DocParagraphRow>();

    for (const locale of ["en", "zh"] as const) {
        const entry = locales[locale];
        if (!entry) {
            continue;
        }

        for (const paragraph of entry.paragraphs) {
            const current = rows.get(paragraph.id) ?? { id: paragraph.id, locales: {} };
            current.locales[locale] = paragraph;
            rows.set(paragraph.id, current);
        }
    }

    return [...rows.values()];
}

function getLocale(path: string): Locale {
    return path.endsWith(".zh.mdx") ? "zh" : "en";
}

function compareText(left: string, right: string) {
    return left.localeCompare(right, "en");
}

function pickLatest(current?: string, incoming?: string) {
    if (!current) {
        return incoming;
    }

    if (!incoming) {
        return current;
    }

    return incoming > current ? incoming : current;
}

function titleCase(value: string) {
    return value
        .split(/[-_]/g)
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(" ");
}
