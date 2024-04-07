import { useState, useEffect, useCallback } from 'react';

const useClaimsActions = () => {
  const [claims, setClaims] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchClaims = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    
    if (!token) {
      console.error('Authentication token is not available.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/approved/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Could not fetch claims');
      const data = await response.json();
      setClaims(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, []);

  // Process a claim
  const processClaim = useCallback(async (claimID) => {
    setLoading(true);
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Authentication token is not available.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/process_claim/${claimID}/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Failed to process claim');
      await fetchClaims(); // Refresh the claims list
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, [fetchClaims]);

  // Reject a claim
  const rejectClaim = useCallback(async (claimID) => {
    setLoading(true);
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Authentication token is not available.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/rejectf_claim/${claimID}/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Failed to reject claim');
      await fetchClaims(); // Refresh the claims list
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, [fetchClaims]);

  useEffect(() => {
    fetchClaims();
  }, [fetchClaims]);
  console.log(claims)
  return { claims, isLoading, error, processClaim, rejectClaim };
};

export default useClaimsActions;