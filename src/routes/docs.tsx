import { Outlet, createFileRoute } from "@tanstack/react-router";
import { SiteSidebar } from "@/components/docs/site-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/docs/site-header";

export const Route = createFileRoute("/docs")({
    component: DocsLayout,
});

function DocsLayout() {
    return (
        <SidebarProvider>
            <SiteSidebar />
            <SidebarInset>
                <SiteHeader />
                <div className="flex h-full max-h-[calc(100vh-4rem)] flex-col overflow-hidden">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
