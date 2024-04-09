export type Claim = {
    id: string;
    amount: number;
    currency: string;
    type: "Travel" | "Meal" | "Night Stay" | "Gift";
    status: string;
    date: string;
    claimedBy: string;
    processed: boolean;
    approvedBy?: string;
    approvedOn?: string;
    comment?: string;
};