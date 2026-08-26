import type { OrderStatus, OrderType } from "@/lib/database.types";
import { cn } from "@/lib/utils";
import { Check, Clock } from "lucide-react";

const PRINT_STATUS_FLOW: OrderStatus[] = [
    "QUOTE_REQUESTED",
    "UNDER_REVIEW",
    "QUOTE_SENT",
    "CUSTOMER_APPROVAL",
    "READY_FOR_PRINT",
    "PRINTING",
    "QUALITY_CHECK",
    "READY_FOR_DELIVERY",
    "COMPLETED",
];

const DESIGN_STATUS_FLOW: OrderStatus[] = [
    "QUOTE_REQUESTED",
    "UNDER_REVIEW",
    "QUOTE_SENT",
    "CUSTOMER_APPROVAL",
    "DESIGN_IN_PROGRESS",
    "DESIGN_REVIEW",
    "READY_FOR_PRINT",
    "PRINTING",
    "QUALITY_CHECK",
    "READY_FOR_DELIVERY",
    "COMPLETED",
];

const STATUS_LABELS: Record<OrderStatus, string> = {
    QUOTE_REQUESTED: "Quote requested",
    UNDER_REVIEW: "Under review",
    QUOTE_SENT: "Quote sent",
    CUSTOMER_APPROVAL: "Awaiting approval",
    DESIGN_IN_PROGRESS: "Design in progress",
    DESIGN_REVIEW: "Design review",
    READY_FOR_PRINT: "Ready for print",
    PRINTING: "Printing",
    QUALITY_CHECK: "Quality check",
    READY_FOR_DELIVERY: "Ready for delivery",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
};

interface OrderStatusTrackerProps {
    type: OrderType;
    status: OrderStatus;
}

export function OrderStatusTracker({ type, status }: OrderStatusTrackerProps) {
    const flow = type === "design" ? DESIGN_STATUS_FLOW : PRINT_STATUS_FLOW;
    const currentIndex = flow.indexOf(status);

    return (
        <div className="w-full">
            <ol className="relative ml-4 border-l border-border">
                {flow.map((s, i) => {
                    const done = i < currentIndex;
                    const active = i === currentIndex;
                    return (
                        <li key={s} className="mb-6 ml-6">
                            <span
                                className={cn(
                                    "absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full border transition-colors",
                                    done
                                        ? "border-transparent bg-success text-success-foreground"
                                        : active
                                            ? "border-accent bg-accent/10 text-accent"
                                            : "border-border bg-background text-muted-foreground"
                                )}
                            >
                                {done ? <Check className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                            </span>
                            <p
                                className={cn(
                                    "text-sm font-medium",
                                    active ? "text-foreground" : done ? "text-muted-foreground" : "text-muted-foreground/50"
                                )}
                            >
                                {STATUS_LABELS[s]}
                            </p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
