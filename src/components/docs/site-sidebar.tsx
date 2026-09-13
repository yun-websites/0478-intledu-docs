import { Link } from "@tanstack/react-router";
import { Folder, FolderOpen, FileText } from "lucide-react";
import { useState } from "react";
import { navigationTitle, navigationGroups } from "@/lib/navigation";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import type { NavigationGroup } from "@/lib/navigation";

function ChapterNavigationItem({ group }: { group: NavigationGroup }) {
    const [open, setOpen] = useState(true);

    return (
        <Collapsible open={open} onOpenChange={setOpen}>
            <SidebarMenuItem>
                <SidebarMenuButton render={<Link to="/docs/$chapter/catalog" params={{ chapter: group.catalogSlug }} />}>
                    <span>{group.title}</span>
                </SidebarMenuButton>
                <CollapsibleTrigger
                    render={
                        <SidebarMenuAction aria-label={`${open ? "Collapse" : "Expand"} ${group.title}`}>
                            {open ? <FolderOpen /> : <Folder />}
                        </SidebarMenuAction>
                    }
                />
                <CollapsibleContent>
                    <SidebarMenuSub>
                        {group.items.map((article) => (
                            <SidebarMenuSubItem key={article.path}>
                                <SidebarMenuSubButton render={<Link to={article.path} />}>
                                    <span>{article.title}</span>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    );
}

export function SiteSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenuItem className="pt-2">
                    <span className="ml-2 text-base font-semibold">Menu</span>
                </SidebarMenuItem>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>{navigationTitle}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton render={<Link to="/docs/catalog" />}>
                                    <FileText />
                                    <span>Catalog</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            {navigationGroups.map((group) => (
                                <ChapterNavigationItem key={group.id} group={group} />
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
}
