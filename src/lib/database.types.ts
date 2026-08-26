export type OrderStatus =
    | "QUOTE_REQUESTED"
    | "UNDER_REVIEW"
    | "QUOTE_SENT"
    | "CUSTOMER_APPROVAL"
    | "DESIGN_IN_PROGRESS"
    | "DESIGN_REVIEW"
    | "READY_FOR_PRINT"
    | "PRINTING"
    | "QUALITY_CHECK"
    | "READY_FOR_DELIVERY"
    | "COMPLETED"
    | "CANCELLED";

export type OrderType = "print" | "design";
