"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Upload, Send } from "lucide-react";

type OrderType = "print" | "design";

const MATERIALS = ["PLA", "PETG", "ABS", "TPU", "Resin", "Nylon", "Other"];

export default function OrderPage() {
    const [orderType, setOrderType] = useState<OrderType>("print");
    const [material, setMaterial] = useState("PLA");
    const [fileName, setFileName] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) setFileName(file.name);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1200));
        setLoading(false);
        toast.success("Order submitted! We'll send you a quote within 24 hours.");
    }

    return (
        <div className="mx-auto max-w-2xl px-6 py-16">
            <div className="mb-8">
                <Badge variant="muted" className="mb-3">New Order</Badge>
                <h1 className="font-display text-3xl font-bold md:text-4xl">Place an Order</h1>
                <p className="mt-2 text-muted-foreground">
                    Fill in the details below and we&apos;ll get back to you with a quote within 24 hours.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Order type */}
                <Card>
                    <CardHeader>
                        <CardTitle>What do you need?</CardTitle>
                        <CardDescription>Select the type of service.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-3">
                            {(["print", "design"] as OrderType[]).map((t) => (
                                <button
                                    key={t}
                                    type="button"
                                    onClick={() => setOrderType(t)}
                                    className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${orderType === t
                                            ? "border-accent bg-accent/10 text-accent"
                                            : "border-border bg-card text-muted-foreground hover:border-accent/40"
                                        }`}
                                >
                                    {t === "print" ? "🖨️  3D Print" : "✏️  Custom Design"}
                                </button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Contact */}
                <Card>
                    <CardHeader>
                        <CardTitle>Your Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Alex Johnson" required />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="alex@example.com" required />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Order details */}
                <Card>
                    <CardHeader>
                        <CardTitle>Order Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5">
                        {/* File upload — only for print orders */}
                        {orderType === "print" && (
                            <div className="space-y-1.5">
                                <Label>Model File (STL / OBJ / 3MF)</Label>
                                <label
                                    htmlFor="file"
                                    className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-card px-4 py-8 text-center transition-colors hover:border-accent/50 hover:bg-accent/5"
                                >
                                    <Upload className="h-8 w-8 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">
                                        {fileName ? fileName : "Click to upload or drag & drop"}
                                    </span>
                                    <input id="file" type="file" accept=".stl,.obj,.3mf" className="sr-only" onChange={handleFile} />
                                </label>
                            </div>
                        )}

                        {/* Material */}
                        {orderType === "print" && (
                            <div className="space-y-1.5">
                                <Label htmlFor="material">Material</Label>
                                <select
                                    id="material"
                                    value={material}
                                    onChange={(e) => setMaterial(e.target.value)}
                                    className="flex h-11 w-full rounded-md border border-input bg-card px-3.5 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                    {MATERIALS.map((m) => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Notes */}
                        <div className="space-y-1.5">
                            <Label htmlFor="notes">
                                {orderType === "print" ? "Print Notes" : "Design Brief"}
                            </Label>
                            <Textarea
                                id="notes"
                                placeholder={
                                    orderType === "print"
                                        ? "Resolution, infill %, colour preferences, quantity..."
                                        : "Describe what you want designed — dimensions, function, references..."
                                }
                                required
                            />
                        </div>

                        <Separator />

                        <div className="space-y-1.5">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input id="quantity" type="number" min={1} defaultValue={1} className="max-w-[120px]" />
                        </div>
                    </CardContent>
                </Card>

                <Button type="submit" size="lg" variant="accent" disabled={loading} className="w-full gap-2">
                    {loading ? (
                        "Submitting…"
                    ) : (
                        <>
                            <Send className="h-4 w-4" />
                            Submit Order
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
}
