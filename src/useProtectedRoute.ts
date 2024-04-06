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

const UseProtectedRoute = (requiredPermission: string) => {
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
            const userPermission = localStorage.getItem('userPermission');
            setUserPermission(userPermission);
            if (!userPermission) {
                router.push('/Login');
            }
            else if (requiredPermission !== userPermission) {
                router.push('/unauthorized');
            }
        }
    }, [userPermission, requiredPermission, router]);

    return { userPermission };
};

export default UseProtectedRoute;
