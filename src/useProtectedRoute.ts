/*
 * -----------------------------------------
 *  Author - Sepehr
 *  This script performs the following:
 *      1. Uses backend API to validate
 *          the login session.
 *      2. Uses the permissions received from the API
 *          response, and checks them against the permissions
 *          set for the page that called useProtectedRoute().
 *      3. Authorises the user based on the results of 
 *          the permission check.
 *  -----------------------------------------
 */

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios"; // For API Requests.



// Creating an interface to hold
// incoming data.
interface SessionResponse {
    isAuthenticated: boolean;
    userPermission?: string;
}

export const useProtectedRoute = (requiredPermissions: string | string[]): void => {
    // For handling url redirects.
    const router = useRouter();

    useEffect(() => {
        const validateSession = async () => {
            try {
                const response = await axios.get<SessionResponse>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/accounts/api/validate_session/`, {
                    withCredentials: true,
                });

                const { isAuthenticated, userPermission } = response.data;

                console.log(isAuthenticated, userPermission);

                if (!isAuthenticated) {
                    // Redirect to Login page if not Auth
                    router.push('/Login');
                    return;
                }

                const permissionCheck = Array.isArray(requiredPermissions)
                    ? requiredPermissions.includes(userPermission!)
                    : userPermission === requiredPermissions;

                if (!permissionCheck) {
                    // Redirect if permission check fails.
                    router.push('/unauthorized');
                }

                // If authenticated and has required perms,
                // do nothing to let NextJS render the protected page.
            }
            catch (error) {
                console.error('Error validating session: ', error);
                router.push('/Login');
            }
        };

        validateSession();
    }, [router, requiredPermissions]);
};
