// This script makes sure that
// users are not able to use
// unauthorized web pages.
import { useEffect } from 'react';
import { useAuth } from './Components/AuthContext';
import { useRouter } from 'next/navigation';


// Ensures the validity of our token
// and checks for it's expiry time.
const validateToken = (): boolean => {
    const token = localStorage.getItem('token');
    const tokenExpiry = localStorage.getItem('tokenExpiry');
    return token !== null && tokenExpiry !== null && new Date().getTime() <= parseInt(tokenExpiry);
};

const UseProtectedRoute = (requiredPermission: string | string[]) => {
    const { userPermission, setUserPermission } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const isAuth = validateToken();

        if (!isAuth) {
            // Clear data
            localStorage.removeItem('token');
            localStorage.removeItem('tokenExpiry');
            localStorage.removeItem('userPermission');
            setUserPermission(null);

            // Redirect to login page.
            router.push('/Login');
        }
        else {
            // Check if userPermission matches any of the required perms.
            const userPermissionFromStorage = localStorage.getItem('userPermission');
            setUserPermission(userPermissionFromStorage);

            const permissionIsValid = userPermissionFromStorage && Array.isArray(requiredPermission)
                ? requiredPermission.includes(userPermissionFromStorage)
                : requiredPermission === userPermissionFromStorage;

            if (!userPermissionFromStorage || !permissionIsValid) {
                router.push('/unauthorized');
            }
        }
    }, [router, setUserPermission, requiredPermission]);

    return { userPermission };
};

export default UseProtectedRoute;
