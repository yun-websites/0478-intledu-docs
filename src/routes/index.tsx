import { createFileRoute, useRouter } from "@tanstack/react-router";
import LetterGlitch from "@/components/reactbits/LetterGlitch";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";

export const Route = createFileRoute("/")({ component: App });

function App() {
    const router = useRouter();

    return (
        <>
            <section className="fixed h-dvh w-dvw">
                <div className="bg-background/15 absolute top-0 left-0 -z-1 h-full w-full backdrop-blur-[1px]"></div>
                <LetterGlitch
                    className="absolute top-0 left-0 -z-2"
                    glitchSpeed={50}
                    centerVignette={true}
                    outerVignette={false}
                    smooth={true}
                    glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
                />
            </section>

            <Nav />

            <section className="z-0 flex h-full w-full flex-1 flex-col items-center justify-center gap-2">
                <h1 className="text-center text-4xl font-bold">IGCSE Computer Science (0478)</h1>
                <h2 className="text-center text-xl font-semibold">International Education Documents</h2>
                <Separator className="bg-foreground/25 my-4 data-horizontal:w-3/5" />
                <div className="flex items-baseline gap-4">
                    <Button size="lg" variant="default" onClick={() => router.navigate({ to: "/docs/catalog" })}>
                        Start Browsing
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => router.navigate({ to: "/docs/catalog" })}>
                        View Catalog
                    </Button>
                </div>
            </section>
        </>
    );
}
