import axios from 'axios';
import { Claim } from '@/types/Claim';
import getCurrencySymbol from '@/lib/getCurrencySymbol';

async function getData(role: string, user_id: string, current: boolean) {
  try {
    const response = await axios.get<Claim[]>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/employeeformmodel/`,
      { withCredentials: true }
    );
    const transformedClaims = response.data.map((claim) => ({
      ...claim,
      currency: getCurrencySymbol(claim.currency),
    }));
    return transformedClaims;
  } catch (err) {
    return [];
  }
}



export { getData };