export type Claim = {
  claim_id: string;
  user_id: string;
  manager_id: string;
  amount: number;
  currency: string;
  type: "Travel" | "Meal" | "Night Stay" | "Gift" | "Other";
  description: string;
  receipt: File | null;
  status: "rejected" | "rejectedF" | "pending" | "approved" | "processed";
  date: string;
  claimed_by: string;
  approved_by?: string;
  approved_on?: string;
  comment?: string;
};
