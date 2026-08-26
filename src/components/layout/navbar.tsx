"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/order", label: "Place Order" },
    { href: "/track", label: "Track Order" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
                    <Box className="h-5 w-5 text-accent" />
                    PRINTLAB
                </Link>

                {/* Nav links */}
                <nav className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm transition-colors hover:text-foreground",
                                pathname === link.href
                                    ? "font-medium text-foreground"
                                    : "text-muted-foreground"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <Link href="/order">
                    <Button size="sm" variant="accent">
                        Get a Quote
                    </Button>
                </Link>
            </div>
        </header>
    );
}
