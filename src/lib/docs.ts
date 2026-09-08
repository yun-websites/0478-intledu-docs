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

const docMetadata: Record<string, DocMetadata> = Object.fromEntries([
    ["/src/content/_pages/computer-science/data-representation.en.mdx", {
        title: "Data representation",
        slug: "data-representation",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/data-representation.zh.mdx", {
        title: "数据表示",
        slug: "data-representation",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/data-transmission.en.mdx", {
        title: "Data transmission",
        slug: "data-transmission",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/data-transmission.zh.mdx", {
        title: "数据传输",
        slug: "data-transmission",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/hardware.en.mdx", {
        title: "Hardware",
        slug: "hardware",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/hardware.zh.mdx", {
        title: "硬件",
        slug: "hardware",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/software.en.mdx", {
        title: "Software",
        slug: "software",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/software.zh.mdx", {
        title: "软件",
        slug: "software",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/internet-and-uses.en.mdx", {
        title: "The internet and its uses",
        slug: "internet-and-uses",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/internet-and-uses.zh.mdx", {
        title: "互联网及其应用",
        slug: "internet-and-uses",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/automated-and-emerging-technologies.en.mdx", {
        title: "Automated and emerging technologies",
        slug: "automated-and-emerging-technologies",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/automated-and-emerging-technologies.zh.mdx", {
        title: "自动化与新兴技术",
        slug: "automated-and-emerging-technologies",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/algorithm-design-and-problem-solving.en.mdx", {
        title: "Algorithm design and problem solving",
        slug: "algorithm-design-and-problem-solving",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/algorithm-design-and-problem-solving.zh.mdx", {
        title: "算法设计与问题求解",
        slug: "algorithm-design-and-problem-solving",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/programming.en.mdx", {
        title: "Programming",
        slug: "programming",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/programming.zh.mdx", {
        title: "编程",
        slug: "programming",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/databases.en.mdx", {
        title: "Databases",
        slug: "databases",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/databases.zh.mdx", {
        title: "数据库",
        slug: "databases",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/boolean-logic.en.mdx", {
        title: "Boolean logic",
        slug: "boolean-logic",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
    ["/src/content/_pages/computer-science/boolean-logic.zh.mdx", {
        title: "布尔逻辑",
        slug: "boolean-logic",
        chapter: "computer-science",
        version: "2025",
        updateAt: "2025-01-13",
    }],
]) as Record<string, DocMetadata>;

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
