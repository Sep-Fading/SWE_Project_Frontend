export type Claim = {
  id: string;
  amount: number;
  currency: string;
  typeClaim: "Travel" | "Meal" | "Night Stay" | "Gift";
  status: "rejected" | "rejectedF" | "pending" | "approved" | "processed";
  date: string;
  claimedBy: string;
  processed: boolean;
  approvedBy?: string;
  approvedOn?: string;
  comment?: string;
  onProcess?: () => void;
  onReject?: () => void;
};
