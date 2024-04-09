import { useState, useEffect, useCallback } from "react";
import axios, { AxiosError } from "axios";

// Define TypeScript interfaces for your claims
interface Claim {
  id: string; // Assuming each claim has an ID
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
}

interface UseClaimsActionsReturn {
  claims: Claim[];
  error: string | null;
  processClaim: (claimID: string) => Promise<void>;
  rejectClaim: (claimID: string) => Promise<void>;
}

const useClaimsActions = (): UseClaimsActionsReturn => {
  const [claims, setClaims] = useState<Claim[]>([]);
  const [processClaims, setProcessClaims] = useState<Claim[]>([]);
  const [pastFinanceClaims, setPastFinanceClaims] = useState<Claim[]>([]);
  const [approveClaims, setApproveClaims] = useState<Claim[]>([]);
  const [pastLinemanagerClaims, setPastLinemanagerClaims] = useState<Claim[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getCurrencySymbol = (currencyCode: string): string => {
    const currencySymbols: Record<string, string> = {
      USD: "$", // United States Dollar
      EUR: "€", // Euro
      JPY: "¥", // Japanese Yen
      GBP: "£", // British Pound Sterling
      AUD: "A$", // Australian Dollar
      CAD: "C$", // Canadian Dollar
      CHF: "CHF", // Swiss Franc
      CNY: "¥", // Chinese Yuan
      HKD: "HK$", // Hong Kong Dollar
      MXN: "MX$", // Mexican Peso
      SGD: "S$", // Singapore Dollar
    };

    return currencySymbols[currencyCode] || currencyCode;
  };

  const fetchAllClaims = useCallback(async () => {
    try {
      const response = await axios.get<Claim[]>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/employeeformmodel/`,
        { withCredentials: true }
      );
      const transformedClaims = response.data.map((claim) => ({
        ...claim,
        currency: getCurrencySymbol(claim.currency),
      }));
      setClaims(transformedClaims);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message || "Something went wrong");
    }
  }, []);

  const processClaim = useCallback(
    async (claimID: string) => {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/process_claim/${claimID}/`,
          {},
          { withCredentials: true }
        );
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message || "Failed to process claim");
      }
    },
    []
  );

  const rejectClaim = useCallback(
    async (claimID: string) => {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/rejectf_claim/${claimID}/`,
          {},
          { withCredentials: true }
        );
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message || "Failed to reject claim");
      }
    },
    []
  );

  useEffect(() => {
    fetchAllClaims();
  }, [fetchAllClaims]);

  return { claims, error, processClaim, rejectClaim };
};

export default useClaimsActions;
