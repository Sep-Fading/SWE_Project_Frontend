// This script makes sure that
// users are not able to use
// unauthorized web pages.
import { useEffect } from 'react';
import { useAuth } from './Components/AuthContext';
import { useRouter } from 'next/navigation';

const UseProtectedRoute = (requiredPermission: string) => {
    const { userPermission } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!userPermission) {
            router.push('/Login');
        }
        else if (requiredPermission !== userPermission) {
            router.push('/unauthorized';
        }
    }, [userPermission, requiredPermission, router]);

    return { userPermission };
};

export default UseProtectedRoute;
