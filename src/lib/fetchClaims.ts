import axios from 'axios';
import { Claim } from '@/types/Claim';
import getCurrencySymbol from '@/lib/getCurrencySymbol';

async function fetchClaims(role: string, user_id: string, current: boolean): Promise<Claim[]> {
  try {
    const response = await axios.get<Claim | Claim[]>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/employeeformmodel/`,
      { withCredentials: true }
    );

    const claimsArray = Array.isArray(response.data) ? response.data : [response.data];
    
    const transformedClaims = claimsArray.map((claim) => ({
      ...claim,
      currency: getCurrencySymbol(claim.currency),
    }));
    
    return transformedClaims;
  } catch (err) {
    return [];
  }
}



export { fetchClaims };