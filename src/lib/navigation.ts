import { load } from "js-yaml";
import { docArticles, type DocArticle } from "@/lib/docs";

type NavigationFile = {
    title: string;
    groups: NavigationGroupConfig[];
};

type NavigationGroupConfig = {
    id: string;
    title: string;
    items: string[];
};

export type NavigationGroup = {
    id: string;
    title: string;
    items: DocArticle[];
};

type RawNavigationModule = string | { default: string };

const navigationModules = import.meta.glob("/src/content/_navigation/*.yml", {
    eager: true,
    query: "?raw",
    import: "default",
}) as Record<string, RawNavigationModule>;

const articlesBySlug = new Map(docArticles.map((article) => [article.slug, article]));

export const navigation = loadNavigationFile();
export const navigationTitle = navigation.title;
export const navigationGroups = loadNavigationGroups(navigation);

function loadNavigationFile(): NavigationFile {
    const moduleEntries = Object.entries(navigationModules);

    if (moduleEntries.length === 0) {
        throw new Error("No navigation YAML files found in src/content/_navigation.");
    }

    if (moduleEntries.length > 1) {
        throw new Error("Only one navigation YAML file is currently supported.");
    }

    const [filePath, module] = moduleEntries[0];
    const source = typeof module === "string" ? module : module.default;
    return parseNavigationFile(source, filePath);
}

function loadNavigationGroups(navigation: NavigationFile): NavigationGroup[] {
    const groups: NavigationGroup[] = [];
    const referencedSlugs = new Set<string>();

    for (const group of navigation.groups) {
        const items = group.items.map((slug) => {
            const article = articlesBySlug.get(slug);
            if (!article) {
                throw new Error(`Navigation item "${slug}" does not match a document.`);
            }
            if (referencedSlugs.has(slug)) {
                throw new Error(`Navigation item "${slug}" is listed more than once.`);
            }

            referencedSlugs.add(slug);
            return article;
        });

        groups.push({ id: group.id, title: group.title, items });
    }

    const missingArticles = docArticles.filter((article) => !referencedSlugs.has(article.slug));
    if (missingArticles.length > 0) {
        throw new Error(`Navigation is missing documents: ${missingArticles.map((article) => article.slug).join(", ")}.`);
    }

    return groups;
}

function parseNavigationFile(source: string, filePath: string): NavigationFile {
    const parsed = load(source) as Partial<NavigationFile>;

    if (!parsed || typeof parsed !== "object" || typeof parsed.title !== "string" || !Array.isArray(parsed.groups)) {
        throw new Error(`Invalid navigation file ${filePath}: expected title and groups.`);
    }

    const groups = parsed.groups.map((group, index) => {
        if (
            !group ||
            typeof group !== "object" ||
            typeof group.id !== "string" ||
            typeof group.title !== "string" ||
            !Array.isArray(group.items) ||
            group.items.some((item) => typeof item !== "string")
        ) {
            throw new Error(`Invalid navigation group at index ${index} in ${filePath}.`);
        }

        return group as NavigationGroupConfig;
    });

    return { title: parsed.title, groups };
}
