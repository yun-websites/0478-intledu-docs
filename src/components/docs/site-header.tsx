import { Fragment } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { FeedbackButton } from "../feedback-button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { docChapters } from "@/lib/docs";

type BreadcrumbItemData = {
    label: string;
    to?: string;
};

export function SiteHeader() {
    const { pathname } = useLocation();
    const breadcrumbItems = getBreadcrumbItems(pathname);

    return (
        <header className="flex min-h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:my-auto data-[orientation=vertical]:h-4"
                />

                <Breadcrumb className="min-w-0 flex-1">
                    <BreadcrumbList className="min-w-0 flex-nowrap gap-1.5 overflow-hidden">
                        {breadcrumbItems.map((item, index) => (
                            <Fragment key={`${item.label}-${index}`}>
                                <BreadcrumbItem className="min-w-0 shrink-0">
                                    {item.to ? (
                                        <BreadcrumbLink
                                            render={<Link to={item.to} />}
                                            className="max-w-[24ch] truncate">
                                            {item.label}
                                        </BreadcrumbLink>
                                    ) : (
                                        <BreadcrumbPage className="max-w-[24ch] truncate">{item.label}</BreadcrumbPage>
                                    )}
                                </BreadcrumbItem>
                                {index < breadcrumbItems.length - 1 ? <BreadcrumbSeparator /> : null}
                            </Fragment>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="ml-auto flex items-center gap-2">
                    <FeedbackButton extraButtonProps={{ size: "sm", variant: "ghost" }} />
                </div>
            </div>
        </header>
    );
}

function getBreadcrumbItems(pathname: string): BreadcrumbItemData[] {
    const items: BreadcrumbItemData[] = [{ label: "Documents", to: "/docs/catalog" }];

    if (pathname === "/docs/catalog") {
        items.push({ label: "Catalog" });
        return items;
    }

    const chapterMatch = pathname.match(/^\/docs\/([^/]+)(?:\/([^/]+))?$/);
    if (!chapterMatch) {
        return items;
    }

    const chapter = chapterMatch[1];
    const leaf = chapterMatch[2];
    const chapterEntry = docChapters.find((item) => item.chapter === chapter);
    const chapterLabel = chapterEntry?.title ?? titleCase(chapter);

    items.push({ label: chapterLabel, to: `/docs/${chapter}/catalog` });

    if (!leaf || leaf === "catalog") {
        items.push({ label: "Catalog" });
        return items;
    }

    const article = chapterEntry?.articles.find((item) => item.slug === leaf);
    items.push({ label: article?.title ?? titleCase(leaf) });

    return items;
}

function titleCase(value: string) {
    return value
        .split(/[-_]/g)
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(" ");
}
