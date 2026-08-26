import Link from "next/link";
import { Box } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
                <div className="flex items-center gap-2 font-display text-sm font-semibold">
                    <Box className="h-4 w-4 text-accent" />
                    PRINTLAB
                </div>
                <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} PRINTLAB. Custom 3D Printing &amp; Design.
                </p>
                <nav className="flex gap-4 text-xs text-muted-foreground">
                    <Link href="/order" className="hover:text-foreground transition-colors">Order</Link>
                    <Link href="/track" className="hover:text-foreground transition-colors">Track</Link>
                </nav>
            </div>
        </footer>
    );
}
