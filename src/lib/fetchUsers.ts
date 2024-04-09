import axios from 'axios';
import { User } from '@/types/User';
import getCurrencySymbol from '@/lib/getCurrencySymbol';

async function getData() {
    try {
        const response = await axios.get<User[]>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/accounts/api/user-info/`,
          { withCredentials: true }
        );
        return response.data;
      } catch (error) {
        console.error("Failed to fetch users: ", error);
        return [];
      }
}



export { getData };