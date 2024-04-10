// This script ensures that axios requests
// are sent with Auth headers to prevent the 
// API calls from being blocked due to unauthorised
// access even when the user is logged in.

import axios from 'axios';

// Create an instance of axios.
const axiosWithAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
});

export default axiosWithAuth;
