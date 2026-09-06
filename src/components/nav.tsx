import { Meta } from "@/lib/meta";
import { Button } from "./ui/button";
import { FeedbackButton } from "./feedback-button";

export function Nav() {
    return (
        <nav className="border-border bg-background/50 fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b px-8 backdrop-blur-xs">
            <h1 className="font-bold">{Meta.title}</h1>

            <section className="flex items-center gap-4">
                <Button variant="outline">Start Browsing</Button>
                <FeedbackButton />
            </section>
        </nav>
    );
}
