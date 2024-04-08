import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useClaimsActions = () => {
  const [approvedClaims, setApprovedClaims] = useState([]);
  const [allClaims, setAllClaims] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // Ensure this is set in your environment

  const fetchClaims = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${backendUrl}/api/approved/`, { withCredentials: true });
      setApprovedClaims(response.data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, [backendUrl]);

  const fetchAllClaims = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${backendUrl}/api/employeeformmodel/`, { withCredentials: true });
      setAllClaims(response.data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, [backendUrl]);

  // Process a claim
  const processClaim = useCallback(async (claimID) => {
    setLoading(true);
    try {
      await axios.post(`${backendUrl}/process_claim/${claimID}/`, {}, { withCredentials: true });
      await fetchClaims(); // Refresh the claims list
    } catch (err) {
      setError(err.message || 'Failed to process claim');
    } finally {
      setLoading(false);
    }
  }, [backendUrl, fetchClaims]);

  // Reject a claim
  const rejectClaim = useCallback(async (claimID) => {
    setLoading(true);
    try {
      await axios.post(`${backendUrl}/rejectf_claim/${claimID}/`, {}, { withCredentials: true });
      await fetchClaims(); // Refresh the claims list
    } catch (err) {
      setError(err.message || 'Failed to reject claim');
    } finally {
      setLoading(false);
    }
  }, [backendUrl, fetchClaims]);

  useEffect(() => {
    fetchClaims();
    fetchAllClaims();
  }, [fetchClaims, fetchAllClaims]);

  console.log(allClaims)

  return { approvedClaims, allClaims, isLoading, error, processClaim, rejectClaim };
};

export default useClaimsActions;
