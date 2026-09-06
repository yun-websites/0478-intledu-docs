import { Link } from "@tanstack/react-router";
import { FolderOpen, LogsIcon } from "lucide-react";
import { docChapters } from "@/lib/docs";
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
                    <SidebarMenuButton render={<Link to="/docs/catalog" />}>
                        <LogsIcon />
                        <span>Catalog</span>
                    </SidebarMenuButton>
                    <SidebarGroupLabel>Chapters</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {docChapters.map((chapter) => (
                                <SidebarMenuItem key={chapter.chapter}>
                                    <SidebarMenuButton render={<Link to={chapter.path} />}>
                                        <FolderOpen />
                                        <span>{chapter.title}</span>
                                    </SidebarMenuButton>
                                    <SidebarMenuAction
                                        render={<Link to={chapter.path} aria-label={`Open ${chapter.title}`} />}
                                    />
                                    <SidebarMenuSub>
                                        {chapter.articles.map((article) => (
                                            <SidebarMenuSubItem key={article.path}>
                                                <SidebarMenuSubButton render={<Link to={article.path} />}>
                                                    <span>{article.title}</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter></SidebarFooter>
        </Sidebar>
    );
}

