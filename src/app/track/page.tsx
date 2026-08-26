"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OrderStatusTracker } from "@/components/order-status-tracker";
import type { OrderStatus, OrderType } from "@/lib/database.types";
import { Search } from "lucide-react";

// Demo data — replace with real API calls
const DEMO_ORDERS: Record<string, { status: OrderStatus; type: OrderType; name: string }> = {
    "PL-1001": { status: "PRINTING", type: "print", name: "Bracket — PLA White" },
    "PL-1002": { status: "QUOTE_SENT", type: "design", name: "Custom Enclosure" },
    "PL-1003": { status: "COMPLETED", type: "print", name: "Phone Stand" },
};

export default function TrackPage() {
    const [orderId, setOrderId] = useState("");
    const [result, setResult] = useState<(typeof DEMO_ORDERS)[string] | null | "not-found">(null);

    function handleSearch(e: React.FormEvent) {
        e.preventDefault();
        const order = DEMO_ORDERS[orderId.toUpperCase().trim()];
        setResult(order ?? "not-found");
    }

    return (
        <div className="mx-auto max-w-xl px-6 py-16">
            <div className="mb-8">
                <Badge variant="muted" className="mb-3">Order Tracking</Badge>
                <h1 className="font-display text-3xl font-bold md:text-4xl">Track your order</h1>
                <p className="mt-2 text-muted-foreground">
                    Enter your order ID to see its current status.
                </p>
            </div>

            <form onSubmit={handleSearch} className="flex gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        placeholder="e.g. PL-1001"
                        className="pl-10"
                        required
                    />
                </div>
                <Button type="submit" variant="accent">Track</Button>
            </form>

            {/* Demo hint */}
            <p className="mt-2 text-xs text-muted-foreground">
                Try demo IDs: <code className="font-mono">PL-1001</code>, <code className="font-mono">PL-1002</code>, <code className="font-mono">PL-1003</code>
            </p>

            {result && result !== "not-found" && (
                <Card className="mt-8">
                    <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <CardTitle className="text-base">{result.name}</CardTitle>
                                <p className="mt-1 font-mono text-xs text-muted-foreground">{orderId.toUpperCase()}</p>
                            </div>
                            <Badge variant={result.type === "design" ? "accent" : "muted"}>
                                {result.type === "design" ? "Design" : "Print"}
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <OrderStatusTracker type={result.type} status={result.status} />
                    </CardContent>
                </Card>
            )}

            {result === "not-found" && (
                <Card className="mt-8 border-destructive/30 bg-destructive/5">
                    <CardContent className="pt-6 text-sm text-muted-foreground">
                        No order found for <code className="font-mono">{orderId}</code>. Double-check your order ID.
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
