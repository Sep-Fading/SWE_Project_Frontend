// This handles authorization across pages.
import React,
    { createContext, useContext,
    useState, useEffect, ReactNode} from 'react';

// Creating our Type for user context,
// Can be a string if there is a permission set 
// other wise it defaults to null.
interface AuthContextType {
    userPermission: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children; ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [userPermission, setUserPermission] = useState<string | null>(null);

    useEffect(() => {
        const permission = localStorage.getItem('userPermission');
        setUserPermission(permission);
    }, []);

    return <AuthContext.Provider value={{ userPermission }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};


    


